import { ActionError, defineAction } from "astro:actions";
import { RESEND_API_KEY } from "astro:env/server";
import { render } from "@react-email/render";
import { captureException } from "@sentry/astro";
import { z } from "astro/zod";
import { Resend } from "resend";
import type { IFormContactData } from "@/components/email-template";
import { EmailContact } from "@/components/email-template";
import { BUSINESS_CONFIG } from "@/config/business";
import { truncate } from "@/lib/truncate";

const BCC_EMAIL = BUSINESS_CONFIG.settings?.bccEmail ?? [];
const EMAIL_SENDER = BUSINESS_CONFIG.settings?.emailSender;
const COMPANY_EMAIL = BUSINESS_CONFIG.contact.email.trim();

const resend = RESEND_API_KEY ? new Resend(RESEND_API_KEY) : null;

const contactSchema = z.object({
  name: z
    .string({ error: "El nombre es requerido" })
    .trim()
    .min(3, { error: "El nombre debe tener al menos 3 caracteres" }),
  email: z
    .email({ error: "El correo electrónico no es válido." })
    .trim()
    .toLowerCase(),
  phone: z
    .string({ error: "El número de teléfono es requerido" })
    .regex(/^\d{8}$/u, {
      error: "El número de teléfono debe tener exactamente 8 dígitos",
    }),
  message: z
    .string({ error: "Mensaje no válido" })
    .max(300, { error: "El mensaje no puede exceder los 300 caracteres" })
    .nullish(),
});

export const server = {
  contact: defineAction({
    accept: "form",
    input: contactSchema,
    handler: async (contact) => {
      if (!(resend && EMAIL_SENDER)) {
        throw new ActionError({
          code: "INTERNAL_SERVER_ERROR",
          message:
            "El envío de correos no está configurado (RESEND_API_KEY / settings.emailSender).",
        });
      }

      const { name, message, email, phone } = contact;
      const data: IFormContactData[] = [
        { name: "Nombre", value: name },
        { name: "Correo electrónico", value: email },
        { name: "Teléfono", value: phone },
        { name: "Mensaje", value: message },
      ];

      const preview = message
        ? truncate(message, 30)
        : "Datos del formulario de contacto";
      const isDev = import.meta.env.DEV;
      let bcc: string[] = [];
      if (!isDev) {
        bcc = BUSINESS_CONFIG.settings?.resendToCompany
          ? [...BCC_EMAIL, COMPANY_EMAIL]
          : [...BCC_EMAIL];
      }

      try {
        const { data: sent, error } = await resend.emails.send({
          from: `${BUSINESS_CONFIG.name} <${EMAIL_SENDER}>`,
          to: email,
          bcc,
          replyTo: COMPANY_EMAIL,
          subject: `Formulario de contacto - ${BUSINESS_CONFIG.name}`,
          html: await render(
            EmailContact({
              preview,
              lang: BUSINESS_CONFIG.lang === "en" ? "en" : "es",
              business: {
                contactEmail: COMPANY_EMAIL,
                name: BUSINESS_CONFIG.name,
                website: BUSINESS_CONFIG.site,
              },
              data,
            })
          ),
        });

        if (error || !sent?.id) {
          throw error ?? new Error("Resend did not return an email id");
        }

        return { status: true, message: "Correo enviado exitosamente" };
      } catch (error) {
        captureException(error, { level: "error", extra: { contact } });
        // biome-ignore lint/style/useErrorCause: ActionError does not accept `cause`; the original error is reported to Sentry and must not leak to the client
        throw new ActionError({
          code: "BAD_REQUEST",
          message: "Error al enviar el correo electrónico",
        });
      }
    },
  }),
};
