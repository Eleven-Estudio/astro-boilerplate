import type { Business } from "@/types/business";
import BUSINESS from "business.json";
import { parsePhoneNumberFromString  } from "libphonenumber-js";

const DATA_BUSINESS: Business = BUSINESS;

const phoneNumber = `+${DATA_BUSINESS.contact.tel.ext}${DATA_BUSINESS.contact.tel.number}`;
const parsedPhoneNumber = parsePhoneNumberFromString(phoneNumber, {
  defaultCountry: "GT",
  defaultCallingCode: "502",
  extract: true,
});

export const BUSINESS_CONFIG = {
  ...DATA_BUSINESS,
  phone: {
    formatted: parsedPhoneNumber?.formatInternational(),
    ext: DATA_BUSINESS.contact.tel.ext,
    number: DATA_BUSINESS.contact.tel.number,
    country: parsedPhoneNumber?.country,
    link: `tel:${parsedPhoneNumber?.number}`,
  },
  whatsapp: {
    formatted: parsedPhoneNumber?.formatInternational(),
    ext: DATA_BUSINESS.contact.whatsapp?.ext,
    number: DATA_BUSINESS.contact.whatsapp?.number,
    country: parsedPhoneNumber?.country,
    link: (message: string) => `https://wa.me/${DATA_BUSINESS.contact.whatsapp?.ext}${DATA_BUSINESS.contact.whatsapp?.number}?text=${message}`,
  },
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