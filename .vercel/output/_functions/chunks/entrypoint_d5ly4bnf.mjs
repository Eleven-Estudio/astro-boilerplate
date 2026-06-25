(function() {
	try {
		var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
		e.SENTRY_RELEASE = { id: "719bb25958636c71e7f994dd82ed8ed1f05f052c" };
		var n = new e.Error().stack;
		n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "afac11ed-cdc5-4ede-8975-0c353197de78", e._sentryDebugIdIdentifier = "sentry-dbid-afac11ed-cdc5-4ede-8975-0c353197de78");
	} catch (e) {}
})();
import { g as ActionCalledFromServerError, ht as AstroError } from "./path_CMqV8SoO.mjs";
import { a as ActionError, n as defineAction, o as createActionsProxy, s as createGetActionPath } from "./server_DFsXA_aH.mjs";
import { u as pipelineSymbol } from "./constants_BPOxgYqt.mjs";
import { t as BUSINESS_CONFIG } from "./business_BxbKFWe8.mjs";
import * as mod from "zod/v4";
import { render } from "@react-email/render";
import { captureException } from "@sentry/astro";
import { Resend } from "resend";
import { Body, Column, Container, Head, Hr, Html, Img, Link, Preview, Row, Section, Tailwind, Text } from "@react-email/components";
import { twMerge } from "tailwind-merge";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
createGetActionPath({
	baseUrl: "/.",
	shouldAppendTrailingSlash: true
});
createActionsProxy({ handleAction: async (param, path, context) => {
	const pipeline = context ? Reflect.get(context, pipelineSymbol) : void 0;
	if (!pipeline) throw new AstroError(ActionCalledFromServerError);
	const action = await pipeline.getAction(path);
	if (!action) throw new Error(`Action not found: ${path}`);
	return action.bind(context)(param);
} });
//#endregion
//#region src/components/email-template.tsx
var resetText = { margin: 0 };
var translations = {
	es: {
		consultant: "Un consultor se pondrá en contacto con usted en breve.",
		moreInfo: "Para más información, contacta a:",
		poweredBy: "Powered by",
		socialLinks: {
			instagram: "Instagram",
			whatsapp: "WhatsApp",
			facebook: "Facebook",
			helpCenter: "Centro de ayuda"
		},
		contactUs: "Contacta a nosotros si tienes alguna pregunta.",
		copyright: "Todos los derechos reservados."
	},
	en: {
		consultant: "A consultant will contact you shortly.",
		moreInfo: "For more information, contact:",
		poweredBy: "Powered by",
		socialLinks: {
			instagram: "Instagram",
			whatsapp: "WhatsApp",
			facebook: "Facebook",
			helpCenter: "Help Center"
		},
		contactUs: "Contact us if you have any questions.",
		copyright: "All rights reserved."
	}
};
var EmailContact = ({ preview, title, subtitle, logo, business, data, lang = "es" }) => {
	const t = translations[lang];
	return /* @__PURE__ */ jsxs(Html, { children: [
		/* @__PURE__ */ jsx(Head, {}),
		/* @__PURE__ */ jsx(Preview, { children: preview }),
		/* @__PURE__ */ jsx(Tailwind, { children: /* @__PURE__ */ jsx(Body, {
			className: "bg-white",
			style: { fontFamily: "-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,Oxygen-Sans,Ubuntu,Cantarell,\"Helvetica Neue\",sans-serif" },
			children: /* @__PURE__ */ jsxs(Container, {
				className: "mx-auto my-[40px] w-[465px] rounded border border-[#eaeaea] border-solid p-[20px]",
				children: [
					/* @__PURE__ */ jsx(Section, {
						className: "mt-[32px] max-w-[600px]",
						children: /* @__PURE__ */ jsx(Link, {
							className: "no-underline",
							href: business.website,
							children: /* @__PURE__ */ jsx(Img, {
								alt: logo?.alt ?? business.name,
								className: twMerge("mx-auto my-0 h-auto", logo?.className ?? ""),
								src: logo.src,
								style: {
									maxWidth: `${logo?.width ?? 112}px`,
									width: `${logo?.width ?? 112}px`
								}
							})
						})
					}),
					/* @__PURE__ */ jsxs(Section, {
						className: "max-w-[600px]",
						children: [/* @__PURE__ */ jsx(Text, {
							className: "mx-0 my-[20px] p-0 text-center font-bold text-[24px] text-black",
							children: title
						}), subtitle !== null && /* @__PURE__ */ jsx(Text, {
							className: "text-[14px] text-black leading-[24px]",
							children: subtitle
						})]
					}),
					/* @__PURE__ */ jsx(Section, {
						className: "max-w-[600px]",
						children: data.map((input) => {
							if (!(input?.showEmpty || input?.value)) return null;
							if (!input?.colSpan) return /* @__PURE__ */ jsxs(Row, { children: [/* @__PURE__ */ jsxs(Column, {
								className: "w-[50%] py-2 pr-6 align-top font-bold text-[14px] text-black leading-[18px]",
								children: [input.name, ":"]
							}), /* @__PURE__ */ jsx(Column, {
								className: "w-[50%] py-2 align-top text-[14px] text-black leading-[18px]",
								children: input.value ?? ""
							})] }, input.name);
							if (input.colSpan === "full") return /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx(Row, { children: /* @__PURE__ */ jsxs(Column, {
								className: "w-[50%] py-2 pr-6 align-top font-bold text-[14px] text-black leading-[18px]",
								children: [input.name, ":"]
							}) }), /* @__PURE__ */ jsx(Row, { children: /* @__PURE__ */ jsx(Column, {
								className: "w-[50%] py-2 align-top text-[14px] text-black leading-[18px]",
								children: input.value
							}) })] });
							return null;
						})
					}),
					/* @__PURE__ */ jsxs(Section, {
						className: "max-w-[600px]",
						children: [/* @__PURE__ */ jsx(Text, {
							className: "text-[14px] text-black leading-[24px]",
							children: t.consultant
						}), /* @__PURE__ */ jsxs(Text, {
							className: "text-[14px] text-black leading-[18px]",
							children: [
								t.moreInfo,
								" ",
								/* @__PURE__ */ jsx("br", {}),
								/* @__PURE__ */ jsx(Link, {
									className: "text-blue-600 no-underline",
									href: `mailto:${business.contactEmail}`,
									children: business.contactEmail
								})
							]
						})]
					}),
					/* @__PURE__ */ jsx(Hr, { className: "mx-0 my-[16px] w-full border border-[#eaeaea] border-solid" }),
					/* @__PURE__ */ jsxs(Section, {
						className: "mx-auto max-w-[560px] py-1 pb-[22px]",
						children: [
							/* @__PURE__ */ jsx(Row, { children: /* @__PURE__ */ jsx(Text, {
								className: "py-4 text-center text-[#AFAFAF] text-sm",
								style: resetText,
								children: t.poweredBy
							}) }),
							/* @__PURE__ */ jsx(Row, { children: /* @__PURE__ */ jsx(Column, {
								className: "mb-4 pt-1 pb-4 text-center",
								children: /* @__PURE__ */ jsx(Link, {
									className: "no-underline",
									href: "https://elevenestudio.link/web",
									children: /* @__PURE__ */ jsx(Img, {
										alt: "Eleven Estudio",
										className: "mx-auto h-auto w-[120px] max-w-[120px]",
										height: 494,
										src: "https://storage.elevenestudio.me/logo-eleven.png",
										width: 1256
									})
								})
							}) }),
							/* @__PURE__ */ jsxs(Row, {
								className: "mx-auto w-fit",
								children: [
									/* @__PURE__ */ jsx(Column, {
										className: "py-4 pr-4 text-center",
										children: /* @__PURE__ */ jsx(Link, {
											className: "text-center text-gray-400 text-sm underline",
											href: "https://elevenestudio.link/ig",
											children: t.socialLinks.instagram
										})
									}),
									/* @__PURE__ */ jsx(Column, {
										className: "py-4 pr-4 text-center",
										children: /* @__PURE__ */ jsx(Link, {
											className: "text-center text-gray-400 text-sm underline",
											href: "https://elevenestudio.link/wa",
											children: t.socialLinks.whatsapp
										})
									}),
									/* @__PURE__ */ jsx(Column, {
										className: "py-4 pr-4 text-center",
										children: /* @__PURE__ */ jsx(Link, {
											className: "text-center text-gray-400 text-sm underline",
											href: "https://elevenestudio.link/fb",
											children: t.socialLinks.facebook
										})
									}),
									/* @__PURE__ */ jsx(Column, {
										className: "py-4 text-center",
										children: /* @__PURE__ */ jsx(Link, {
											className: "text-center text-gray-400 text-sm underline",
											href: "https://elevenestudio.link/help-center",
											children: t.socialLinks.helpCenter
										})
									})
								]
							}),
							/* @__PURE__ */ jsx(Row, { children: /* @__PURE__ */ jsx(Text, {
								className: "mx-auto max-w-[65ch] py-1 text-center text-[#AFAFAF] text-sm leading-snug",
								style: resetText,
								children: t.contactUs
							}) }),
							/* @__PURE__ */ jsx(Row, { children: /* @__PURE__ */ jsxs(Text, {
								className: "py-1 text-center text-[#AFAFAF] text-sm",
								style: resetText,
								children: [
									"© ",
									(/* @__PURE__ */ new Date()).getFullYear(),
									" Eleven Corporation, S.A.",
									" ",
									t.copyright
								]
							}) })
						]
					})
				]
			})
		}) })
	] });
};
//#endregion
//#region src/lib/truncate.ts
var truncate = (str, length) => {
	if (!str || str.length <= length) return str;
	return `${str.slice(0, length - 3)}...`;
};
//#endregion
//#region src/actions/index.ts
var BCC_EMAIL = Array.isArray(BUSINESS_CONFIG.settings?.bccEmail) ? BUSINESS_CONFIG.settings?.bccEmail : [];
var EMAIL_SENDER = BUSINESS_CONFIG.settings.emailSender;
var resend = new Resend("re_xxxxxxxxxxxxxxxxxxxxxxxxxxx");
var server = { contact: defineAction({
	accept: "form",
	input: mod.object({
		name: mod.string({
			required_error: "El nombre es requeridoo",
			invalid_type_error: "El nombre es requerido"
		}).min(3, { message: "El nombre debe tener al menos 3 caracteres" }),
		email: mod.string({
			required_error: "Correo electrónico requerido",
			invalid_type_error: "Correo electrónico requerido"
		}).email({ message: "El correo electrónico no es válido." }),
		phone: mod.string({
			required_error: "El número de teléfono es requerido",
			invalid_type_error: "El número de teléfono es requerido"
		}).min(8, { message: "El número de teléfono debe tener exactamente 8 caracteres" }).max(8, { message: "El número de teléfono debe tener exactamente 8 caracteres" }).regex(/^\d+$/, { message: "Solo se permiten números" }),
		message: mod.string({ invalid_type_error: "Mensaje no valido" }).max(300, { message: "El mensaje no puede exceder los 300 caracteres" }).nullable()
	}),
	handler: async (contact) => {
		try {
			const { name, message, email, phone } = contact;
			const DATA_STRUCTURE = [
				{
					name: "Nombre",
					value: name
				},
				{
					name: "Correo Electronico",
					value: email
				},
				{
					name: "Teléfono",
					value: phone
				},
				{
					name: "Mensaje",
					value: message
				}
			];
			const preview = message ? truncate(message, 30) : "Datos del formulario de contacto";
			const bcc = BUSINESS_CONFIG.settings.resendToCompany ? [...BCC_EMAIL, BUSINESS_CONFIG.contact.email.trim()] : [...BCC_EMAIL];
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
						width: 0
					},
					data: DATA_STRUCTURE
				}))
			});
			if (resResend?.data?.id === void 0) {
				captureException(resResend.error, {
					level: "error",
					extra: { contact }
				});
				throw new ActionError({
					code: "BAD_REQUEST",
					message: "Error al enviar el correo electrónico"
				});
			}
			return {
				status: true,
				message: "Correo enviado exitosamente"
			};
		} catch (error) {
			captureException(error, {
				level: "error",
				extra: { contact }
			});
			throw new ActionError({
				code: "BAD_REQUEST",
				message: "Error al enviar el correo electrónico"
			});
		}
	}
}) };
//#endregion
export { server };
