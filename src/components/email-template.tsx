import {
  Body,
  Column,
  Container,
  Head,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Tailwind,
  Text,
} from "@react-email/components";
import { twMerge } from "tailwind-merge";

export interface IFormContactData {
  colSpan?: "full" | "normal";
  name: string;
  showEmpty?: boolean;
  value: string | number | null | undefined;
}

export interface IEmailTemplate {
  business: {
    name: string;
    website: string;
    contactEmail: string;
  };
  data: IFormContactData[];
  lang?: "es" | "en";
  logo: {
    src: string;
    width?: number;
    alt?: string;
    className?: string;
  };
  preview: string;
  subtitle?: string | null;
  title?: string;
}

const resetText = { margin: 0 };

const translations = {
  es: {
    consultant: "Un consultor se pondrá en contacto con usted en breve.",
    moreInfo: "Para más información, contacta a:",
    poweredBy: "Powered by",
    socialLinks: {
      instagram: "Instagram",
      whatsapp: "WhatsApp",
      facebook: "Facebook",
      helpCenter: "Centro de ayuda",
    },
    contactUs: "Contacta a nosotros si tienes alguna pregunta.",
    copyright: "Todos los derechos reservados.",
  },
  en: {
    consultant: "A consultant will contact you shortly.",
    moreInfo: "For more information, contact:",
    poweredBy: "Powered by",
    socialLinks: {
      instagram: "Instagram",
      whatsapp: "WhatsApp",
      facebook: "Facebook",
      helpCenter: "Help Center",
    },
    contactUs: "Contact us if you have any questions.",
    copyright: "All rights reserved.",
  },
};
export const EmailContact = ({
  preview,
  title,
  subtitle,
  logo,
  business,
  data,
  lang = "es",
}: IEmailTemplate) => {
  const t = translations[lang];

  return (
    <Html>
      <Head />
      <Preview>{preview}</Preview>
      <Tailwind>
        <Body
          className="bg-white"
          style={{
            fontFamily:
              '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
          }}
        >
          <Container className="mx-auto my-[40px] w-[465px] rounded border border-[#eaeaea] border-solid p-[20px]">
            {/* HEADER */}

            {/* LOGO */}
            <Section className="mt-[32px] max-w-[600px]">
              <Link className="no-underline" href={business.website}>
                <Img
                  alt={logo?.alt ?? business.name}
                  className={twMerge(
                    "mx-auto my-0 h-auto",
                    logo?.className ?? ""
                  )}
                  src={logo.src}
                  // width={logo.height}
                  // height={logo.width}
                  style={{
                    maxWidth: `${logo?.width ?? 112}px`,
                    width: `${logo?.width ?? 112}px`,
                  }}
                />
              </Link>
            </Section>

            <Section className="max-w-[600px]">
              <Text className="mx-0 my-[20px] p-0 text-center font-bold text-[24px] text-black">
                {title}
              </Text>
              {subtitle !== null && (
                <Text className="text-[14px] text-black leading-[24px]">
                  {subtitle}
                </Text>
              )}
            </Section>

            {/* BODY */}
            <Section className="max-w-[600px]">
              {data.map((input) => {
                if (!(input?.showEmpty || input?.value)) {
                  return null;
                }

                if (!input?.colSpan) {
                  return (
                    <Row key={input.name}>
                      <Column className="w-[50%] py-2 pr-6 align-top font-bold text-[14px] text-black leading-[18px]">
                        {input.name}:
                      </Column>
                      <Column className="w-[50%] py-2 align-top text-[14px] text-black leading-[18px]">
                        {input.value ?? ""}
                      </Column>
                    </Row>
                  );
                }

                if (input.colSpan === "full") {
                  return (
                    <>
                      <Row>
                        <Column className="w-[50%] py-2 pr-6 align-top font-bold text-[14px] text-black leading-[18px]">
                          {input.name}:
                        </Column>
                      </Row>
                      <Row>
                        <Column className="w-[50%] py-2 align-top text-[14px] text-black leading-[18px]">
                          {input.value}
                        </Column>
                      </Row>
                    </>
                  );
                }

                return null;
              })}
            </Section>

            {/* FOOTER BUSINESS */}
            <Section className="max-w-[600px]">
              <Text className="text-[14px] text-black leading-[24px]">
                {t.consultant}
              </Text>
              <Text className="text-[14px] text-black leading-[18px]">
                {t.moreInfo} <br />
                <Link
                  className="text-blue-600 no-underline"
                  href={`mailto:${business.contactEmail}`}
                >
                  {business.contactEmail}
                </Link>
              </Text>
            </Section>

            <Hr className="mx-0 my-[16px] w-full border border-[#eaeaea] border-solid" />

            {/* FOOTER */}
            <Section className="mx-auto max-w-[560px] py-1 pb-[22px]">
              <Row>
                <Text
                  className="py-4 text-center text-[#AFAFAF] text-sm"
                  style={resetText}
                >
                  {t.poweredBy}
                </Text>
              </Row>
              <Row>
                <Column className="mb-4 pt-1 pb-4 text-center">
                  <Link
                    className="no-underline"
                    href="https://elevenestudio.link/web"
                  >
                    <Img
                      alt="Eleven Estudio"
                      className="mx-auto h-auto w-[120px] max-w-[120px]"
                      height={494}
                      src="https://storage.elevenestudio.me/logo-eleven.png"
                      width={1256}
                    />
                  </Link>
                </Column>
              </Row>
              <Row className="mx-auto w-fit">
                <Column className="py-4 pr-4 text-center">
                  <Link
                    className="text-center text-gray-400 text-sm underline"
                    href="https://elevenestudio.link/ig"
                  >
                    {t.socialLinks.instagram}
                  </Link>
                </Column>
                <Column className="py-4 pr-4 text-center">
                  <Link
                    className="text-center text-gray-400 text-sm underline"
                    href="https://elevenestudio.link/wa"
                  >
                    {t.socialLinks.whatsapp}
                  </Link>
                </Column>
                <Column className="py-4 pr-4 text-center">
                  <Link
                    className="text-center text-gray-400 text-sm underline"
                    href="https://elevenestudio.link/fb"
                  >
                    {t.socialLinks.facebook}
                  </Link>
                </Column>
                <Column className="py-4 text-center">
                  <Link
                    className="text-center text-gray-400 text-sm underline"
                    href="https://elevenestudio.link/help-center"
                  >
                    {t.socialLinks.helpCenter}
                  </Link>
                </Column>
              </Row>
              <Row>
                <Text
                  className="mx-auto max-w-[65ch] py-1 text-center text-[#AFAFAF] text-sm leading-snug"
                  style={resetText}
                >
                  {t.contactUs}
                </Text>
              </Row>
              <Row>
                <Text
                  className="py-1 text-center text-[#AFAFAF] text-sm"
                  style={resetText}
                >
                  © {new Date().getFullYear()} Eleven Corporation, S.A.{" "}
                  {t.copyright}
                </Text>
              </Row>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default EmailContact;
