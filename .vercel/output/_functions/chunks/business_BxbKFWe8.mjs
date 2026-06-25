(function() {
	try {
		var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
		e.SENTRY_RELEASE = { id: "719bb25958636c71e7f994dd82ed8ed1f05f052c" };
		var n = new e.Error().stack;
		n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "6222b81a-7dd5-4f9d-8743-d5dc4179d870", e._sentryDebugIdIdentifier = "sentry-dbid-6222b81a-7dd5-4f9d-8743-d5dc4179d870");
	} catch (e) {}
})();
import { parsePhoneNumberFromString } from "libphonenumber-js";
//#endregion
//#region src/config/business.ts
var DATA_BUSINESS = {
	name: "Eleven Estudio",
	description: "Somos una firma de arquitectos fundada en el año 2002, apasionados por crear arquitectura que explore posibilidades, emocione e inspire a la comunidad.",
	site: "https://www.elevenestudio.com",
	openGraph: "/og.png",
	lang: "es",
	contact: {
		"tel": {
			"ext": 502,
			"number": 45431635
		},
		"whatsapp": {
			"ext": 502,
			"number": 45431635
		},
		"email": "info@elevenestudio.com"
	},
	address: { "location": "Guatemala, Guatemala" },
	googleTagManager: { "id": "GTM-XXXXXXX" },
	social: {
		"facebook": "https://www.facebook.com/elevenestudio/",
		"instagram": "https://www.instagram.com/elevenstudio.gt/"
	},
	settings: {
		"emailSender": "noreply@correo.com",
		"bccEmail": ["monitoreo@correo.com"],
		"resendToCompany": false
	}
};
var parsedPhoneNumber = parsePhoneNumberFromString(`+${DATA_BUSINESS.contact.tel.ext}${DATA_BUSINESS.contact.tel.number}`, {
	defaultCountry: "GT",
	defaultCallingCode: "502",
	extract: true
});
var BUSINESS_CONFIG = {
	...DATA_BUSINESS,
	phone: {
		formatted: parsedPhoneNumber?.formatInternational(),
		ext: DATA_BUSINESS.contact.tel.ext,
		number: DATA_BUSINESS.contact.tel.number,
		country: parsedPhoneNumber?.country,
		link: `tel:${parsedPhoneNumber?.number}`
	},
	whatsapp: {
		formatted: parsedPhoneNumber?.formatInternational(),
		ext: DATA_BUSINESS.contact.whatsapp?.ext,
		number: DATA_BUSINESS.contact.whatsapp?.number,
		country: parsedPhoneNumber?.country,
		link: (message) => `https://wa.me/${DATA_BUSINESS.contact.whatsapp?.ext}${DATA_BUSINESS.contact.whatsapp?.number}?text=${message}`
	},
	email: {
		address: DATA_BUSINESS.contact.email,
		link: `mailto:${DATA_BUSINESS.contact.email}`
	},
	social: {
		facebook: DATA_BUSINESS.social?.facebook ?? null,
		instagram: DATA_BUSINESS.social?.instagram ?? null,
		tiktok: DATA_BUSINESS.social?.tiktok ?? null,
		youtube: DATA_BUSINESS.social?.youtube ?? null,
		linkedin: DATA_BUSINESS.social?.linkedin ?? null,
		twitter: DATA_BUSINESS.social?.twitter ?? null
	}
};
//#endregion
export { BUSINESS_CONFIG as t };
