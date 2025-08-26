import { ActionError, defineAction } from "astro:actions";
import { z } from "astro:schema";
import { Resend } from "resend";
import { render } from "@react-email/render";
import { truncate } from "@/lib/truncate";
import { captureException } from "@sentry/astro";
import { BUSINESS_CONFIG } from "@/config/business";

import {
  EmailContact,
  type IEmailTemplate,
  type IFormContactData
} from "@/components/email-template";

interface IEmailData {
  name: string;
  message?: string;
  email: string;
  phone: string;
}

const BCC_EMAIL = Array.isArray(BUSINESS_CONFIG.settings?.bccEmail) ? BUSINESS_CONFIG.settings?.bccEmail : [];
const EMAIL_SENDER = BUSINESS_CONFIG.settings.emailSender;
const resend = new Resend(import.meta.env.RESEND_API_KEY || "re_xxxxxxxxxxxxxxxxxxxxxxxxxxx");

export const server = {
  contact: defineAction({
    accept: "form",
    input: z.object({

      name: z.string({
        required_error: "El nombre es requeridoo",
        invalid_type_error: "El nombre es requerido",
      }).min(3, {
        message: "El nombre debe tener al menos 3 caracteres",
      }),

      email: z.string({
        required_error: "Correo electrónico requerido",
        invalid_type_error: "Correo electrónico requerido",
      }).email({ message: 'El correo electrónico no es válido.' }),

      phone: z.string({
        required_error: "El número de teléfono es requerido",
        invalid_type_error: "El número de teléfono es requerido",
      })
        .min(8, { message: "El número de teléfono debe tener exactamente 8 caracteres" })
        .max(8, {
          message: "El número de teléfono debe tener exactamente 8 caracteres",
        })
        .regex(/^\d+$/, { message: "Solo se permiten números" }),

      message: z.string({
        invalid_type_error: "Mensaje no valido",
      }).max(300, {
        message: "El mensaje no puede exceder los 300 caracteres",
      }).nullable(),

    }),
    handler: async (contact: IEmailData) => {
      try {
        const { name, message, email, phone } = contact;
        const DATA_STRUCTURE: Array<IFormContactData> = [
          { name: "Nombre", value: name },
          { name: "Correo Electronico", value: email },
          { name: "Teléfono", value: phone },
          { name: "Mensaje", value: message },
        ];

        const preview: string = message ? truncate(message, 30) : "Datos del formulario de contacto";
        const bcc = BUSINESS_CONFIG.settings.resendToCompany
          ? [...BCC_EMAIL, BUSINESS_CONFIG.contact.email.trim()]
          : [...BCC_EMAIL];

        const resResend = await resend.emails.send({
          from: `${BUSINESS_CONFIG.name} <${EMAIL_SENDER}>`,
          to: contact.email.trim(),
          bcc,
          replyTo: BUSINESS_CONFIG.contact.email.trim(),
          subject: `Formulario de contacto - ${BUSINESS_CONFIG.name}`,
          html: await render(EmailContact({
            preview,
            business: {
              contactEmail: BUSINESS_CONFIG.contact.email.trim(),
              name: BUSINESS_CONFIG.name,
              website: BUSINESS_CONFIG.site
            },
            logo: {
              src: "",
              width: 0,
            },
            data: DATA_STRUCTURE,
          }))
        });

        if (resResend?.data?.id === undefined) {
          captureException(resResend.error, { level: "error", extra: { contact } });
          throw new ActionError({ code: "BAD_REQUEST", message: "Error al enviar el correo electrónico" });
        }

        return { status: true, message: "Correo enviado exitosamente" };

      } catch (error) {
        captureException(error, { level: "error", extra: { contact } });
        throw new ActionError({ code: "BAD_REQUEST", message: "Error al enviar el correo electrónico" });
      }
    }
  })
};