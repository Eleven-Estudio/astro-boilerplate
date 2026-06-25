(function() {
	try {
		var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
		e.SENTRY_RELEASE = { id: "719bb25958636c71e7f994dd82ed8ed1f05f052c" };
		var n = new e.Error().stack;
		n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "98082c30-1514-4383-b9cd-5b06ced52bdd", e._sentryDebugIdIdentifier = "sentry-dbid-98082c30-1514-4383-b9cd-5b06ced52bdd");
	} catch (e) {}
})();
import { C as renderTemplate, D as renderHead, M as createComponent, O as addAttribute, S as renderSlot, _ as spreadAttributes, b as renderComponent, j as createAstro, k as unescapeHTML, v as renderScript, x as Fragment } from "./render_Xm8zGKz9.mjs";
import { t as BUSINESS_CONFIG } from "./business_BxbKFWe8.mjs";
import { n as $$Font } from "./_astro_assets_BYs95TJ0.mjs";
import * as Sentry from "@sentry/astro";
//#region astro:scripts/page-ssr.js
Sentry.init({
	dsn: void 0,
	debug: false,
	environment: void 0,
	release: void 0,
	tracesSampleRate: 1
});
//#endregion
//#region src/components/fundations/favicons.astro
var $$Favicons = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`<!-- Favicons --><link rel="icon" href="/favicon.ico" sizes="any"><link rel="icon" href="/icon.svg" type="image/svg+xml"><link rel="apple-touch-icon" href="/apple-touch-icon.png"><link rel="manifest" href="/manifest.webmanifest"><!-- Favicon for IE --><link rel="shortcut icon" href="/favicon.ico" type="image/x-icon"><!-- Favicons for different sizes --><link rel="icon" type="image/png" sizes="16x16" href="/icon-16.png"><link rel="icon" type="image/png" sizes="32x32" href="/icon-32.png"><link rel="icon" type="image/png" sizes="192x192" href="/icon-192.png"><!-- Apple Touch Icon (for backwards compatibility) --><link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">`;
}, "/Users/mpacheco/Documents/ElevenStudio/PROJECT-astro-boilerplate /astro-boilerplate/src/components/fundations/favicons.astro", void 0);
//#endregion
//#region src/components/fundations/meta.astro
var $$Meta = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`<!-- Meta Tags --><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><!-- Theme Color for Mobile Browsers --><meta name="theme-color" content="#000000"><!-- For IE --><meta http-equiv="X-UA-Compatible" content="IE=edge">`;
}, "/Users/mpacheco/Documents/ElevenStudio/PROJECT-astro-boilerplate /astro-boilerplate/src/components/fundations/meta.astro", void 0);
//#endregion
//#region node_modules/.pnpm/astro-seo@1.1.0_prettier@3.5.3_typescript@5.9.2/node_modules/astro-seo/src/components/OpenGraphArticleTags.astro
createAstro("https://example.com");
var $$OpenGraphArticleTags = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$OpenGraphArticleTags;
	const { publishedTime, modifiedTime, expirationTime, authors, section, tags } = Astro.props.openGraph.article;
	return renderTemplate`${publishedTime ? renderTemplate`<meta property="article:published_time"${addAttribute(publishedTime, "content")}>` : null}${modifiedTime ? renderTemplate`<meta property="article:modified_time"${addAttribute(modifiedTime, "content")}>` : null}${expirationTime ? renderTemplate`<meta property="article:expiration_time"${addAttribute(expirationTime, "content")}>` : null}${authors ? authors.map((author) => renderTemplate`<meta property="article:author"${addAttribute(author, "content")}>`) : null}${section ? renderTemplate`<meta property="article:section"${addAttribute(section, "content")}>` : null}${tags ? tags.map((tag) => renderTemplate`<meta property="article:tag"${addAttribute(tag, "content")}>`) : null}`;
}, "/Users/mpacheco/Documents/ElevenStudio/PROJECT-astro-boilerplate /astro-boilerplate/node_modules/.pnpm/astro-seo@1.1.0_prettier@3.5.3_typescript@5.9.2/node_modules/astro-seo/src/components/OpenGraphArticleTags.astro", void 0);
//#endregion
//#region node_modules/.pnpm/astro-seo@1.1.0_prettier@3.5.3_typescript@5.9.2/node_modules/astro-seo/src/components/OpenGraphBasicTags.astro
createAstro("https://example.com");
var $$OpenGraphBasicTags = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$OpenGraphBasicTags;
	const { openGraph } = Astro.props;
	return renderTemplate`<meta property="og:title"${addAttribute(openGraph.basic.title, "content")}><meta property="og:type"${addAttribute(openGraph.basic.type, "content")}><meta property="og:image"${addAttribute(openGraph.basic.image, "content")}><meta property="og:url"${addAttribute(openGraph.basic.url || Astro.url.href, "content")}>`;
}, "/Users/mpacheco/Documents/ElevenStudio/PROJECT-astro-boilerplate /astro-boilerplate/node_modules/.pnpm/astro-seo@1.1.0_prettier@3.5.3_typescript@5.9.2/node_modules/astro-seo/src/components/OpenGraphBasicTags.astro", void 0);
//#endregion
//#region node_modules/.pnpm/astro-seo@1.1.0_prettier@3.5.3_typescript@5.9.2/node_modules/astro-seo/src/components/OpenGraphImageTags.astro
createAstro("https://example.com");
var $$OpenGraphImageTags = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$OpenGraphImageTags;
	const { image } = Astro.props.openGraph.basic;
	const { secureUrl, type, width, height, alt } = Astro.props.openGraph.image;
	return renderTemplate`<meta property="og:image:url"${addAttribute(image, "content")}>${secureUrl ? renderTemplate`<meta property="og:image:secure_url"${addAttribute(secureUrl, "content")}>` : null}${type ? renderTemplate`<meta property="og:image:type"${addAttribute(type, "content")}>` : null}${width ? renderTemplate`<meta property="og:image:width"${addAttribute(width, "content")}>` : null}${height ? renderTemplate`<meta property="og:image:height"${addAttribute(height, "content")}>` : null}${alt ? renderTemplate`<meta property="og:image:alt"${addAttribute(alt, "content")}>` : null}`;
}, "/Users/mpacheco/Documents/ElevenStudio/PROJECT-astro-boilerplate /astro-boilerplate/node_modules/.pnpm/astro-seo@1.1.0_prettier@3.5.3_typescript@5.9.2/node_modules/astro-seo/src/components/OpenGraphImageTags.astro", void 0);
//#endregion
//#region node_modules/.pnpm/astro-seo@1.1.0_prettier@3.5.3_typescript@5.9.2/node_modules/astro-seo/src/components/OpenGraphOptionalTags.astro
createAstro("https://example.com");
var $$OpenGraphOptionalTags = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$OpenGraphOptionalTags;
	const { optional } = Astro.props.openGraph;
	return renderTemplate`${optional.audio ? renderTemplate`<meta property="og:audio"${addAttribute(optional.audio, "content")}>` : null}${optional.description ? renderTemplate`<meta property="og:description"${addAttribute(optional.description, "content")}>` : null}${optional.determiner ? renderTemplate`<meta property="og:determiner"${addAttribute(optional.determiner, "content")}>` : null}${optional.locale ? renderTemplate`<meta property="og:locale"${addAttribute(optional.locale, "content")}>` : null}${optional.localeAlternate?.map((locale) => renderTemplate`<meta property="og:locale:alternate"${addAttribute(locale, "content")}>`)}${optional.siteName ? renderTemplate`<meta property="og:site_name"${addAttribute(optional.siteName, "content")}>` : null}${optional.video ? renderTemplate`<meta property="og:video"${addAttribute(optional.video, "content")}>` : null}`;
}, "/Users/mpacheco/Documents/ElevenStudio/PROJECT-astro-boilerplate /astro-boilerplate/node_modules/.pnpm/astro-seo@1.1.0_prettier@3.5.3_typescript@5.9.2/node_modules/astro-seo/src/components/OpenGraphOptionalTags.astro", void 0);
//#endregion
//#region node_modules/.pnpm/astro-seo@1.1.0_prettier@3.5.3_typescript@5.9.2/node_modules/astro-seo/src/components/ExtendedTags.astro
createAstro("https://example.com");
var $$ExtendedTags = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$ExtendedTags;
	const { props } = Astro;
	return renderTemplate`${props.extend.link?.map((attributes) => renderTemplate`<link${spreadAttributes(attributes)}>`)}${props.extend.meta?.map(({ content, httpEquiv, media, name, property }) => renderTemplate`<meta${addAttribute(name, "name")}${addAttribute(property, "property")}${addAttribute(content, "content")}${addAttribute(httpEquiv, "http-equiv")}${addAttribute(media, "media")}>`)}`;
}, "/Users/mpacheco/Documents/ElevenStudio/PROJECT-astro-boilerplate /astro-boilerplate/node_modules/.pnpm/astro-seo@1.1.0_prettier@3.5.3_typescript@5.9.2/node_modules/astro-seo/src/components/ExtendedTags.astro", void 0);
//#endregion
//#region node_modules/.pnpm/astro-seo@1.1.0_prettier@3.5.3_typescript@5.9.2/node_modules/astro-seo/src/components/TwitterTags.astro
createAstro("https://example.com");
var $$TwitterTags = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$TwitterTags;
	const { card, site, title, creator, description, image, imageAlt } = Astro.props.twitter;
	return renderTemplate`${card ? renderTemplate`<meta name="twitter:card"${addAttribute(card, "content")}>` : null}${site ? renderTemplate`<meta name="twitter:site"${addAttribute(site, "content")}>` : null}${title ? renderTemplate`<meta name="twitter:title"${addAttribute(title, "content")}>` : null}${image ? renderTemplate`<meta name="twitter:image"${addAttribute(image, "content")}>` : null}${imageAlt ? renderTemplate`<meta name="twitter:image:alt"${addAttribute(imageAlt, "content")}>` : null}${description ? renderTemplate`<meta name="twitter:description"${addAttribute(description, "content")}>` : null}${creator ? renderTemplate`<meta name="twitter:creator"${addAttribute(creator, "content")}>` : null}`;
}, "/Users/mpacheco/Documents/ElevenStudio/PROJECT-astro-boilerplate /astro-boilerplate/node_modules/.pnpm/astro-seo@1.1.0_prettier@3.5.3_typescript@5.9.2/node_modules/astro-seo/src/components/TwitterTags.astro", void 0);
//#endregion
//#region node_modules/.pnpm/astro-seo@1.1.0_prettier@3.5.3_typescript@5.9.2/node_modules/astro-seo/src/components/LanguageAlternatesTags.astro
createAstro("https://example.com");
var $$LanguageAlternatesTags = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$LanguageAlternatesTags;
	const { languageAlternates } = Astro.props;
	return renderTemplate`${languageAlternates.map((alternate) => renderTemplate`<link rel="alternate"${addAttribute(alternate.hrefLang, "hreflang")}${addAttribute(alternate.href, "href")}>`)}`;
}, "/Users/mpacheco/Documents/ElevenStudio/PROJECT-astro-boilerplate /astro-boilerplate/node_modules/.pnpm/astro-seo@1.1.0_prettier@3.5.3_typescript@5.9.2/node_modules/astro-seo/src/components/LanguageAlternatesTags.astro", void 0);
//#endregion
//#region node_modules/.pnpm/astro-seo@1.1.0_prettier@3.5.3_typescript@5.9.2/node_modules/astro-seo/src/SEO.astro
createAstro("https://example.com");
var $$SEO = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$SEO;
	Astro.props.surpressWarnings = true;
	function validateProps(props) {
		if (props.openGraph) {
			if (!props.openGraph.basic || (props.openGraph.basic.title ?? void 0) == void 0 || (props.openGraph.basic.type ?? void 0) == void 0 || (props.openGraph.basic.image ?? void 0) == void 0) throw new Error("If you pass the openGraph prop, you have to at least define the title, type, and image basic properties!");
		}
		if (props.title && props.openGraph?.basic.title) {
			if (props.title == props.openGraph.basic.title && !props.surpressWarnings) console.warn("WARNING(astro-seo): You passed the same value to `title` and `openGraph.optional.title`. This is most likely not what you want. See docs for more.");
		}
		if (props.openGraph?.basic?.image && !props.openGraph?.image?.alt && !props.surpressWarnings) console.warn("WARNING(astro-seo): You defined `openGraph.basic.image`, but didn't define `openGraph.image.alt`. This is strongly discouraged.'");
	}
	validateProps(Astro.props);
	let updatedTitle = "";
	if (Astro.props.title) {
		updatedTitle = Astro.props.title;
		if (Astro.props.titleTemplate) updatedTitle = Astro.props.titleTemplate.replace(/%s/g, updatedTitle);
	} else if (Astro.props.titleDefault) updatedTitle = Astro.props.titleDefault;
	const baseUrl = Astro.site ?? Astro.url;
	const defaultCanonicalUrl = new URL(Astro.url.pathname + Astro.url.search, baseUrl);
	const canonicalHref = Astro.props.removeTrailingSlashForRoot && Astro.url.pathname === "/" ? defaultCanonicalUrl.origin + defaultCanonicalUrl.search : defaultCanonicalUrl.href;
	return renderTemplate`${updatedTitle ? renderTemplate`<title>${unescapeHTML(updatedTitle)}</title>` : null}${Astro.props.charset ? renderTemplate`<meta${addAttribute(Astro.props.charset, "charset")}>` : null}<link rel="canonical"${addAttribute(Astro.props.canonical || canonicalHref, "href")}>${Astro.props.description ? renderTemplate`<meta name="description"${addAttribute(Astro.props.description, "content")}>` : null}<meta name="robots"${addAttribute(`${Astro.props.noindex ? "noindex" : "index"}, ${Astro.props.nofollow ? "nofollow" : "follow"}${Astro.props.noarchive ? ", noarchive" : ""}${Astro.props.nocache ? ", nocache" : ""}${Astro.props.robotsExtras ? `, ${Astro.props.robotsExtras}` : ""}`, "content")}>${Astro.props.openGraph && renderTemplate`${renderComponent($$result, "OpenGraphBasicTags", $$OpenGraphBasicTags, { ...Astro.props })}`}${Astro.props.openGraph?.optional && renderTemplate`${renderComponent($$result, "OpenGraphOptionalTags", $$OpenGraphOptionalTags, { ...Astro.props })}`}${Astro.props.openGraph?.image && renderTemplate`${renderComponent($$result, "OpenGraphImageTags", $$OpenGraphImageTags, { ...Astro.props })}`}${Astro.props.openGraph?.article && renderTemplate`${renderComponent($$result, "OpenGraphArticleTags", $$OpenGraphArticleTags, { ...Astro.props })}`}${Astro.props.twitter && renderTemplate`${renderComponent($$result, "TwitterTags", $$TwitterTags, { ...Astro.props })}`}${Astro.props.extend && renderTemplate`${renderComponent($$result, "ExtendedTags", $$ExtendedTags, { ...Astro.props })}`}${Astro.props.languageAlternates && renderTemplate`${renderComponent($$result, "LanguageAlternatesTags", $$LanguageAlternatesTags, { ...Astro.props })}`}`;
}, "/Users/mpacheco/Documents/ElevenStudio/PROJECT-astro-boilerplate /astro-boilerplate/node_modules/.pnpm/astro-seo@1.1.0_prettier@3.5.3_typescript@5.9.2/node_modules/astro-seo/src/SEO.astro", void 0);
//#endregion
//#region src/components/fundations/seo.astro
createAstro("https://example.com");
var $$Seo = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Seo;
	const canonicalDefault = Astro.url.href;
	const { metadata } = Astro.props;
	const { title = BUSINESS_CONFIG.name, description = BUSINESS_CONFIG.description, canonical = canonicalDefault, openGraph = {}, ignoreTitleTemplate = false, ...rest } = metadata ?? {};
	const ogImageUrl = openGraph?.image?.url || BUSINESS_CONFIG.openGraph;
	const absoluteImageUrl = ogImageUrl?.startsWith("http") ? ogImageUrl : ogImageUrl?.startsWith("/") ? `${Astro.site}${ogImageUrl}` : ogImageUrl ? `${Astro.site}/${ogImageUrl}` : BUSINESS_CONFIG.openGraph;
	return renderTemplate`${renderComponent($$result, "SEO", $$SEO, {
		"title": title,
		"titleTemplate": ignoreTitleTemplate ? void 0 : `%s - ${BUSINESS_CONFIG.name}`,
		"description": description,
		"canonical": canonical,
		"openGraph": {
			basic: {
				title,
				type: "website",
				image: absoluteImageUrl
			},
			optional: {
				description,
				siteName: BUSINESS_CONFIG.name,
				locale: "es_ES"
			}
		},
		"twitter": {
			card: "summary_large_image",
			site: BUSINESS_CONFIG.site,
			creator: BUSINESS_CONFIG.social?.twitter ?? "@yourhandle"
		},
		...rest
	})}`;
}, "/Users/mpacheco/Documents/ElevenStudio/PROJECT-astro-boilerplate /astro-boilerplate/src/components/fundations/seo.astro", void 0);
//#endregion
//#region src/components/tailwind-indicator.astro
var $$TailwindIndicator = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${false}`;
}, "/Users/mpacheco/Documents/ElevenStudio/PROJECT-astro-boilerplate /astro-boilerplate/src/components/tailwind-indicator.astro", void 0);
//#endregion
//#region src/layouts/base-layout.astro
createAstro("https://example.com");
var $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$BaseLayout;
	const { metadata } = Astro.props;
	const gtmId = BUSINESS_CONFIG.googleTagManager?.id;
	return renderTemplate`<html lang="es"${addAttribute(["scroll-smooth"], "class:list")}><head>${renderComponent($$result, "Meta", $$Meta, {})}${renderComponent($$result, "Seo", $$Seo, { "metadata": metadata })}${renderComponent($$result, "Favicons", $$Favicons, {})}${renderComponent($$result, "Font", $$Font, { "cssVariable": "--font-geist" })}${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result) => renderTemplate`${unescapeHTML(gtmId ? `<script is:inline>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${gtmId}');<\/script>` : "")}` })}${renderHead($$result)}</head><body>${gtmId && renderTemplate`<noscript><iframe${addAttribute(`https://www.googletagmanager.com/ns.html?id=${gtmId}`, "src")} height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>`}<main>${renderSlot($$result, $$slots["default"])}</main>${renderComponent($$result, "TailwindIndicator", $$TailwindIndicator, {})}${renderScript($$result, "/Users/mpacheco/Documents/ElevenStudio/PROJECT-astro-boilerplate /astro-boilerplate/src/layouts/base-layout.astro?astro&type=script&index=0&lang.ts")}</body></html>`;
}, "/Users/mpacheco/Documents/ElevenStudio/PROJECT-astro-boilerplate /astro-boilerplate/src/layouts/base-layout.astro", void 0);
//#endregion
export { $$BaseLayout as t };
