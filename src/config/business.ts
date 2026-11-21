import { parsePhoneNumberFromString } from "libphonenumber-js";
import type { Business } from "@/types/business";
import BUSINESS from "../../business.json" with { type: "json" };

const DATA_BUSINESS: Business = BUSINESS;

const parsePhone = (ext?: number, number?: number) =>
  number
    ? parsePhoneNumberFromString(`+${ext ?? ""}${number}`, {
        defaultCallingCode: ext ? String(ext) : undefined,
        extract: true,
      })
    : undefined;

const { tel, whatsapp } = DATA_BUSINESS.contact;
const parsedPhone = parsePhone(tel.ext, tel.number);
const parsedWhatsapp = parsePhone(whatsapp?.ext ?? tel.ext, whatsapp?.number);

export const BUSINESS_CONFIG = {
  ...DATA_BUSINESS,
  phone: {
    formatted: parsedPhone?.formatInternational(),
    ext: tel.ext,
    number: tel.number,
    country: parsedPhone?.country,
    link: parsedPhone ? `tel:${parsedPhone.number}` : undefined,
  },
  whatsapp: parsedWhatsapp
    ? {
        formatted: parsedWhatsapp.formatInternational(),
        ext: whatsapp?.ext ?? tel.ext,
        number: whatsapp?.number,
        country: parsedWhatsapp.country,
        link: (message = "") =>
          `https://wa.me/${parsedWhatsapp.number.replace("+", "")}${
            message ? `?text=${encodeURIComponent(message)}` : ""
          }`,
      }
    : null,
  email: {
    address: DATA_BUSINESS.contact.email,
    link: `mailto:${DATA_BUSINESS.contact.email}`,
  },
  social: {
    facebook: DATA_BUSINESS.social?.facebook ?? null,
    instagram: DATA_BUSINESS.social?.instagram ?? null,
    tiktok: DATA_BUSINESS.social?.tiktok ?? null,
    youtube: DATA_BUSINESS.social?.youtube ?? null,
    linkedin: DATA_BUSINESS.social?.linkedin ?? null,
    twitter: DATA_BUSINESS.social?.twitter ?? null,
  },
};
