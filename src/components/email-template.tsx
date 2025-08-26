import {
  Body,
  Container,
  Column,
  Head,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Text,
  Tailwind
} from '@react-email/components'
import { twMerge } from 'tailwind-merge'

export interface IFormContactData {
  name: string
  value: string | number | null | undefined
  showEmpty?: boolean
  colSpan?: 'full' | 'normal'
}

export interface IEmailTemplate {
  preview: string
  title?: string
  subtitle?: string | null
  logo: {
    src: string
    width?: number
    alt?: string
    className?: string
  }
  business: {
    name: string
    website: string
    contactEmail: string
  }
  data: Array<IFormContactData>
  lang?: 'es' | 'en'
}

const resetText = { margin: 0 }

const translations = {
  es: {
    consultant: 'Un consultor se pondrá en contacto con usted en breve.',
    moreInfo: 'Para más información, contacta a:',
    poweredBy: 'Powered by',
    socialLinks: {
      instagram: 'Instagram',
      whatsapp: 'WhatsApp',
      facebook: 'Facebook',
      helpCenter: 'Centro de ayuda'
    },
    contactUs: 'Contacta a nosotros si tienes alguna pregunta.',
    copyright: 'Todos los derechos reservados.'
  },
  en: {
    consultant: 'A consultant will contact you shortly.',
    moreInfo: 'For more information, contact:',
    poweredBy: 'Powered by',
    socialLinks: {
      instagram: 'Instagram',
      whatsapp: 'WhatsApp',
      facebook: 'Facebook',
      helpCenter: 'Help Center'
    },
    contactUs: 'Contact us if you have any questions.',
    copyright: 'All rights reserved.'
  }
}
export const EmailContact = ({
  preview,
  title,
  subtitle,
  logo,
  business,
  data,
  lang = 'es'
}: IEmailTemplate) => {
  const t = translations[lang]

  return (
    <Html>
      <Head />
      <Preview>{preview}</Preview>
      <Tailwind>
        <Body
          className='bg-white'
          style={{
            fontFamily:
              '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif'
          }}
        >
          <Container className='border border-solid border-[#eaeaea] rounded my-[40px] mx-auto p-[20px] w-[465px]'>
            {/* HEADER */}

            {/* LOGO */}
            <Section className='mt-[32px] max-w-[600px]'>
              <Link href={business.website} className='no-underline'>
                <Img
                  src={logo.src}
                  // width={logo.height}
                  // height={logo.width}
                  style={{
                    maxWidth: `${logo?.width ?? 112}px`,
                    width: `${logo?.width ?? 112}px`
                  }}
                  alt={logo?.alt ?? business.name}
                  className={twMerge(
                    'my-0 mx-auto h-auto',
                    logo?.className ?? ''
                  )}
                />
              </Link>
            </Section>

            <Section className='max-w-[600px]'>
              <Text className='text-black font-bold text-[24px] text-center p-0 my-[20px] mx-0'>
                {title}
              </Text>
              {subtitle !== null && (
                <Text className='text-black text-[14px] leading-[24px]'>
                  {subtitle}
                </Text>
              )}
            </Section>

            {/* BODY */}
            <Section className='max-w-[600px]'>
              {data.map((input) => {
                if (!input?.showEmpty && !input?.value) {
                  return null
                }

                if (!input?.colSpan) {
                  return (
                    <Row key={input.name}>
                      <Column className='text-black text-[14px] font-bold leading-[18px] w-[50%] pr-6 align-top py-2'>
                        {input.name}:
                      </Column>
                      <Column className='text-black text-[14px] leading-[18px] w-[50%] align-top py-2'>
                        {input.value ?? ''}
                      </Column>
                    </Row>
                  )
                }

                if (input.colSpan === 'full') {
                  return (
                    <>
                      <Row>
                        <Column className='text-black text-[14px] font-bold leading-[18px] w-[50%] pr-6 align-top py-2'>
                          {input.name}:
                        </Column>
                      </Row>
                      <Row>
                        <Column className='text-black text-[14px] leading-[18px] w-[50%] align-top py-2'>
                          {input.value}
                        </Column>
                      </Row>
                    </>
                  )
                }
              })}
            </Section>

            {/* FOOTER BUSINESS */}
            <Section className='max-w-[600px]'>
              <Text className='text-black text-[14px] leading-[24px]'>
                {t.consultant}
              </Text>
              <Text className='text-black text-[14px] leading-[18px]'>
                {t.moreInfo} <br />
                <Link
                  href={`mailto:${business.contactEmail}`}
                  className='text-blue-600 no-underline'
                >
                  {business.contactEmail}
                </Link>
              </Text>
            </Section>

            <Hr className='border border-solid border-[#eaeaea] my-[16px] mx-0 w-full' />

            {/* FOOTER */}
            <Section className='max-w-[560px] mx-auto py-1 pb-[22px]'>
              <Row>
                <Text
                  style={resetText}
                  className='text-center py-4 text-[#AFAFAF] text-sm'
                >
                  {t.poweredBy}
                </Text>
              </Row>
              <Row>
                <Column className='text-center mb-4 pt-1 pb-4'>
                  <Link
                    href='https://elevenestudio.link/web'
                    className='no-underline'
                  >
                    <Img
                      src='https://storage.elevenestudio.me/logo-eleven.png'
                      width={1256}
                      height={494}
                      alt='Eleven Estudio'
                      className='mx-auto max-w-[120px] w-[120px] h-auto'
                    />
                  </Link>
                </Column>
              </Row>
              <Row className='w-fit mx-auto'>
                <Column className='text-center pr-4 py-4'>
                  <Link
                    href='https://elevenestudio.link/ig'
                    className='text-center text-gray-400 text-sm underline'
                  >
                    {t.socialLinks.instagram}
                  </Link>
                </Column>
                <Column className='text-center pr-4 py-4'>
                  <Link
                    href='https://elevenestudio.link/wa'
                    className='text-center text-gray-400 text-sm underline'
                  >
                    {t.socialLinks.whatsapp}
                  </Link>
                </Column>
                <Column className='text-center pr-4 py-4'>
                  <Link
                    href='https://elevenestudio.link/fb'
                    className='text-center text-gray-400 text-sm underline'
                  >
                    {t.socialLinks.facebook}
                  </Link>
                </Column>
                <Column className='text-center py-4'>
                  <Link
                    href='https://elevenestudio.link/help-center'
                    className='text-center text-gray-400 text-sm underline'
                  >
                    {t.socialLinks.helpCenter}
                  </Link>
                </Column>
              </Row>
              <Row>
                <Text
                  style={resetText}
                  className='py-1 text-[#AFAFAF] text-sm text-center max-w-[65ch] leading-snug mx-auto'
                >
                  {t.contactUs}
                </Text>
              </Row>
              <Row>
                <Text
                  style={resetText}
                  className='py-1 text-[#AFAFAF] text-sm text-center'
                >
                  © {new Date().getFullYear()} Eleven Corporation, S.A.{' '}
                  {t.copyright}
                </Text>
              </Row>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  )
}

export default EmailContact
