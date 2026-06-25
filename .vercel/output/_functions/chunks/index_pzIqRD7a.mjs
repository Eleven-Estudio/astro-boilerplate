(function() {
	try {
		var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
		e.SENTRY_RELEASE = { id: "3cfc4a7f4d9de9546a72b0650dc47bc9ba2e7716" };
		var n = new e.Error().stack;
		n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "38b8f0de-7d92-4b11-85ce-ed4249374f7f", e._sentryDebugIdIdentifier = "sentry-dbid-38b8f0de-7d92-4b11-85ce-ed4249374f7f");
	} catch (e) {}
})();
import { t as __exportAll } from "./rolldown-runtime_JjpOe7e9.mjs";
import { C as renderTemplate, E as maybeRenderHead, M as createComponent, O as addAttribute, S as renderSlot, _ as spreadAttributes, b as renderComponent, j as createAstro } from "./render_n8yNbuL2.mjs";
import { t as BUSINESS_CONFIG } from "./business_D2DgloGr.mjs";
import "./_astro_assets_OpLadyi7.mjs";
import { t as $$BaseLayout } from "./base-layout_C9EhCtGF.mjs";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { cva } from "class-variance-authority";
//#region src/lib/utils.ts
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
function cls11(...inputs) {
	return cn(...inputs);
}
//#endregion
//#region src/components/globals/button.astro
createAstro("https://example.com");
var $$Button = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Button;
	const button = cva("inline-flex items-center justify-center gap-2 rounded-md transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-website-primary focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer font-medium", { variants: {
		variant: {
			primary: "bg-white text-website-primary font-bold hover:bg-white/90 active:bg-white/80 transition-colors",
			outline: "border border-website-secondary text-website-secondary bg-transparent hover:bg-website-secondary active:text-website-primary"
		},
		size: {
			sm: "px-3 py-1.5 text-sm",
			md: "px-4 py-2 text-base",
			lg: "px-6 py-3 text-lg"
		}
	} });
	const { class: className, variant = "primary", size = "md", disabled = false, href, ...props } = Astro.props;
	return renderTemplate`${href ? renderTemplate`${maybeRenderHead($$result)}<a${addAttribute(href, "href")}${addAttribute(cn(button({
		variant,
		size
	}), className), "class")}${spreadAttributes(props)}>${renderSlot($$result, $$slots["default"])}</a>` : renderTemplate`<button${addAttribute(cn(button({
		variant,
		size
	}), className), "class")}${addAttribute(disabled, "disabled")}${spreadAttributes(props)}>${renderSlot($$result, $$slots["default"])}</button>`}`;
}, "/Users/mpacheco/Documents/ElevenStudio/PROJECT-astro-boilerplate /astro-boilerplate/src/components/globals/button.astro", void 0);
//#endregion
//#region src/components/icons/eleven-estudio.astro
createAstro("https://example.com");
var $$ElevenEstudio = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$ElevenEstudio;
	const { class: className } = Astro.props;
	return renderTemplate`${maybeRenderHead($$result)}<svg${addAttribute(`${className}`, "class")} width="41" height="16" viewBox="0 0 41 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M35.278 2.62211H37.0595L35.0339 0.00518799H33.2789V7.25184H35.278V4.63492V3.35144V2.62211Z" fill="#F1F2F1"></path><path d="M38.0403 0.00518799V2.62211V3.89001V4.63492H36.2723L38.3005 7.25184H40.0342V0.00518799H38.0403Z" fill="#F1F2F1"></path><path d="M0.31897 0.00518799H5.52592V1.67864H2.31807V2.83494H5.05391V4.50255H2.31807V5.57904H5.5737V7.25249H0.31897V0.00518799Z" fill="#F1F2F1"></path><path d="M6.65527 0.00518799H8.65437V5.57904H11.4754V7.25249H6.65527V0.00518799Z" fill="#F1F2F1"></path><path d="M12.5408 0.00518799H17.7478V1.67864H14.5399V2.83494H17.2758V4.50255H14.5399V5.57904H17.7956V7.25249H12.5408V0.00518799V0.00518799Z" fill="#F1F2F1"></path><path d="M23.973 0H26.0832L23.1246 7.25185H21.3379L18.3845 0H20.4946L22.218 4.60897H22.2445L23.973 0Z" fill="#F1F2F1"></path><path d="M26.9426 0.00518799H32.1496V1.67864H28.9417V2.83494H31.6776V4.50255H28.9417V5.57904H32.1974V7.25249H26.9426V0.00518799Z" fill="#F1F2F1"></path><path d="M1.99458 13.5025C1.99458 13.7692 2.09337 13.9723 2.2916 14.1124C2.48983 14.2526 2.79525 14.3227 3.20914 14.3227C3.41383 14.3227 3.58494 14.3084 3.72054 14.2798C3.85678 14.2513 3.96526 14.2104 4.04662 14.1572C4.12798 14.104 4.18545 14.0398 4.21902 13.9651C4.2526 13.8905 4.26939 13.8088 4.26939 13.7199C4.26939 13.5674 4.23387 13.4473 4.16349 13.3604C4.09247 13.2734 3.98786 13.1988 3.84774 13.1365C3.70827 13.0742 3.53587 13.0158 3.33054 12.9607C3.1252 12.9055 2.89017 12.8354 2.62543 12.7504C2.50533 12.7147 2.36263 12.6739 2.19862 12.6278C2.03461 12.5817 1.86544 12.5246 1.69239 12.4571C1.51934 12.3897 1.34823 12.3086 1.18099 12.2145C1.01311 12.1204 0.862014 12.0068 0.727707 11.8732C0.593401 11.7401 0.485569 11.5825 0.40421 11.4014C0.322852 11.2204 0.282172 11.0108 0.282172 10.7727C0.282172 9.99466 0.533996 9.40029 1.03764 8.9902C1.54129 8.58011 2.31291 8.37506 3.35184 8.37506C3.79028 8.37506 4.17899 8.43021 4.51863 8.54052C4.85827 8.65083 5.14173 8.80981 5.36967 9.01615C5.5976 9.22249 5.77065 9.47231 5.88946 9.76431C6.00762 10.0563 6.06703 10.3853 6.06703 10.7512H4.06276C4.06276 10.6695 4.05114 10.5877 4.02854 10.506C4.0053 10.4242 3.96074 10.3509 3.89359 10.2847C3.82644 10.2192 3.73475 10.166 3.61787 10.1251C3.501 10.0842 3.3512 10.0641 3.16717 10.0641C2.98315 10.0641 2.83916 10.0784 2.72422 10.1069C2.60929 10.1355 2.51889 10.1737 2.45367 10.2211C2.38846 10.2691 2.34326 10.323 2.31872 10.3833C2.29418 10.4437 2.28191 10.5073 2.28191 10.5748C2.28191 10.674 2.31743 10.761 2.38781 10.8356C2.45819 10.9102 2.55505 10.9758 2.67644 11.0329C2.79848 11.09 2.94182 11.1412 3.10583 11.1873C3.26984 11.2334 3.44612 11.2762 3.63337 11.3151C4.03952 11.4183 4.40757 11.5286 4.73623 11.648C5.06489 11.7667 5.34513 11.9166 5.57694 12.0977C5.8081 12.2787 5.98631 12.4993 6.10964 12.7602C6.23362 13.021 6.29496 13.3429 6.29496 13.7263C6.29496 14.1098 6.2136 14.4271 6.05088 14.7113C5.88817 14.9955 5.6654 15.2324 5.38258 15.4219C5.09976 15.612 4.76852 15.7554 4.3882 15.8534C4.00788 15.9507 3.60044 16 3.16588 16C2.77007 16 2.41622 15.9663 2.10564 15.8988C1.79441 15.8313 1.52257 15.7379 1.28882 15.6191C1.05572 15.5004 0.856848 15.3609 0.692194 15.2006C0.527539 15.041 0.394525 14.8684 0.291858 14.6834C0.189191 14.4985 0.114935 14.3058 0.0690902 14.1053C0.0232453 13.9048 0 13.703 0 13.5005H1.99458V13.5025Z" fill="#F1F2F1"></path><path d="M8.86099 10.2367H6.95746V8.56323H12.7475V10.2367H10.8491V15.8105H8.86099V10.2367Z" fill="#F1F2F1"></path><path d="M18.0661 8.56323H20.0652V13.0178C20.0652 13.4441 19.989 13.8392 19.8373 14.2033C19.6855 14.5673 19.4686 14.8807 19.1877 15.1435C18.9068 15.4063 18.5665 15.6126 18.1668 15.7619C17.7671 15.9111 17.3184 15.9857 16.8199 15.9857C16.3602 15.9857 15.9327 15.9176 15.5369 15.7807C15.1411 15.6438 14.7969 15.4478 14.5057 15.1922C14.2138 14.9365 13.9853 14.6244 13.8193 14.2571C13.6534 13.8892 13.5701 13.4765 13.5701 13.0184V8.56388H15.564V13.0295C15.564 13.2176 15.5905 13.3915 15.6434 13.5518C15.6964 13.7114 15.7758 13.8496 15.8823 13.9645C15.9882 14.08 16.1199 14.1695 16.2775 14.2338C16.4351 14.298 16.6158 14.3298 16.8212 14.3298C17.0265 14.3298 17.2009 14.298 17.3565 14.2338C17.5121 14.1695 17.6419 14.08 17.7465 13.9645C17.8504 13.849 17.9305 13.7114 17.9854 13.5518C18.0403 13.3922 18.0674 13.2163 18.0674 13.0243V8.56453L18.0661 8.56323Z" fill="#F1F2F1"></path><path d="M21.3592 8.56323H24.403C24.9512 8.56323 25.462 8.64045 25.9353 8.79488C26.4092 8.94931 26.8199 9.17966 27.1679 9.48464C27.516 9.79026 27.7897 10.1686 27.9899 10.6195C28.1894 11.0705 28.2895 11.5909 28.2895 12.1807C28.2895 12.7206 28.2049 13.2137 28.0351 13.6595C27.8653 14.1053 27.6161 14.4875 27.2874 14.8054C26.9587 15.1234 26.5539 15.3706 26.0735 15.5464C25.5924 15.7223 25.041 15.8099 24.4192 15.8099H21.3598V8.56323H21.3592ZM24.3766 14.1371C25.0022 14.1371 25.4788 13.9749 25.8055 13.6498C26.1322 13.3247 26.2962 12.8426 26.2962 12.2028C26.2962 11.8972 26.2575 11.6227 26.1794 11.3794C26.1019 11.136 25.9831 10.9303 25.8242 10.761C25.6654 10.5923 25.4652 10.4638 25.225 10.3749C24.9848 10.286 24.702 10.2419 24.3766 10.2419H23.3583V14.1371H24.3766V14.1371Z" fill="#F1F2F1"></path><path d="M29.4557 8.56323H31.4548V15.8099H29.4557V8.56323Z" fill="#F1F2F1"></path><path d="M32.5899 12.1762C32.5899 11.8245 32.6364 11.4864 32.7307 11.1613C32.8243 10.8362 32.958 10.5332 33.131 10.2529C33.3041 9.97257 33.512 9.71626 33.7541 9.48526C33.9962 9.25426 34.2642 9.05701 34.5574 8.89349C34.8505 8.72997 35.1669 8.60279 35.5065 8.5126C35.8462 8.42176 36.1994 8.37698 36.5668 8.37698C36.9342 8.37698 37.2829 8.4224 37.6219 8.5126C37.9609 8.60279 38.2779 8.72997 38.5711 8.89349C38.8642 9.05701 39.1322 9.25426 39.3743 9.48526C39.6164 9.71626 39.8244 9.97192 39.9974 10.2529C40.1705 10.5338 40.3048 10.8362 40.4003 11.1613C40.4959 11.4864 40.5437 11.8245 40.5437 12.1762C40.5437 12.5278 40.4959 12.8653 40.4003 13.1884C40.3048 13.5115 40.1705 13.8146 39.9974 14.0968C39.8244 14.3791 39.6164 14.6367 39.3743 14.8696C39.1322 15.1026 38.8642 15.3011 38.5711 15.4666C38.2779 15.6321 37.9615 15.7599 37.6219 15.8501C37.2822 15.9409 36.931 15.9857 36.5668 15.9857C36.2026 15.9857 35.8455 15.9403 35.5065 15.8501C35.1676 15.7593 34.8505 15.6314 34.5574 15.4666C34.2642 15.3011 33.9962 15.1026 33.7541 14.8696C33.512 14.6373 33.3041 14.3797 33.131 14.0968C32.958 13.8146 32.8243 13.5115 32.7307 13.1884C32.637 12.8653 32.5899 12.5278 32.5899 12.1762V12.1762ZM34.5838 12.1813C34.5838 12.487 34.6361 12.7692 34.7401 13.0288C34.8441 13.2883 34.9855 13.5128 35.1643 13.703C35.3425 13.8931 35.5524 14.0423 35.7926 14.1507C36.0328 14.259 36.2911 14.3129 36.5668 14.3129C36.8425 14.3129 37.1014 14.259 37.3436 14.1507C37.5857 14.0423 37.7962 13.8931 37.9744 13.703C38.1526 13.5128 38.2934 13.2883 38.3961 13.0288C38.4987 12.7692 38.5497 12.487 38.5497 12.1813C38.5497 11.8757 38.4987 11.5935 38.3961 11.3339C38.2934 11.0744 38.1533 10.8499 37.9744 10.6597C37.7962 10.4696 37.5857 10.3204 37.3436 10.212C37.1014 10.1036 36.8425 10.0498 36.5668 10.0498C36.2911 10.0498 36.0328 10.1043 35.7926 10.212C35.5524 10.3204 35.3425 10.4696 35.1643 10.6597C34.9861 10.8499 34.8441 11.0744 34.7401 11.3339C34.6355 11.5935 34.5838 11.8757 34.5838 12.1813Z" fill="#F1F2F1"></path></svg>`;
}, "/Users/mpacheco/Documents/ElevenStudio/PROJECT-astro-boilerplate /astro-boilerplate/src/components/icons/eleven-estudio.astro", void 0);
//#endregion
//#region src/components/icons/email.astro
createAstro("https://example.com");
var $$Email = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Email;
	const { class: className } = Astro.props;
	return renderTemplate`${maybeRenderHead($$result)}<svg${addAttribute(`${className}`, "class")} height="800px" width="800px" version="1.1" id="_x32_" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xml:space="preserve"><g><path class="st0" d="M510.678,112.275c-2.308-11.626-7.463-22.265-14.662-31.054c-1.518-1.915-3.104-3.63-4.823-5.345
		c-12.755-12.818-30.657-20.814-50.214-20.814H71.021c-19.557,0-37.395,7.996-50.21,20.814c-1.715,1.715-3.301,3.43-4.823,5.345
		C8.785,90.009,3.63,100.649,1.386,112.275C0.464,116.762,0,121.399,0,126.087V385.92c0,9.968,2.114,19.55,5.884,28.203
		c3.497,8.26,8.653,15.734,14.926,22.001c1.59,1.586,3.169,3.044,4.892,4.494c12.286,10.175,28.145,16.32,45.319,16.32h369.958
		c17.18,0,33.108-6.145,45.323-16.384c1.718-1.386,3.305-2.844,4.891-4.43c6.27-6.267,11.425-13.741,14.994-22.001v-0.064
		c3.769-8.653,5.812-18.171,5.812-28.138V126.087C512,121.399,511.543,116.762,510.678,112.275z M46.509,101.571
		c6.345-6.338,14.866-10.175,24.512-10.175h369.958c9.646,0,18.242,3.837,24.512,10.175c1.122,1.129,2.179,2.387,3.112,3.637
		L274.696,274.203c-5.348,4.687-11.954,7.002-18.696,7.002c-6.674,0-13.276-2.315-18.695-7.002L43.472,105.136
		C44.33,103.886,45.387,102.7,46.509,101.571z M36.334,385.92V142.735L176.658,265.15L36.405,387.435
		C36.334,386.971,36.334,386.449,36.334,385.92z M440.979,420.597H71.021c-6.281,0-12.158-1.651-17.174-4.552l147.978-128.959
		l13.815,12.018c11.561,10.046,26.028,15.134,40.36,15.134c14.406,0,28.872-5.088,40.432-15.134l13.808-12.018l147.92,128.959
		C453.137,418.946,447.26,420.597,440.979,420.597z M475.666,385.92c0,0.529,0,1.051-0.068,1.515L335.346,265.221L475.666,142.8
		V385.92z"></path></g></svg>`;
}, "/Users/mpacheco/Documents/ElevenStudio/PROJECT-astro-boilerplate /astro-boilerplate/src/components/icons/email.astro", void 0);
//#endregion
//#region src/components/icons/facebook.astro
createAstro("https://example.com");
var $$Facebook = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Facebook;
	const { class: className } = Astro.props;
	return renderTemplate`${maybeRenderHead($$result)}<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"${addAttribute(className, "class")}><path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.593 1.323-1.325V1.325C24 .593 23.407 0 22.675 0z"></path></svg>`;
}, "/Users/mpacheco/Documents/ElevenStudio/PROJECT-astro-boilerplate /astro-boilerplate/src/components/icons/facebook.astro", void 0);
//#endregion
//#region src/components/icons/instagram.astro
createAstro("https://example.com");
var $$Instagram = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Instagram;
	const { class: className } = Astro.props;
	return renderTemplate`${maybeRenderHead($$result)}<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="none" viewBox="0 0 25 25"${addAttribute(className, "class")}><path d="M17.621.958H6.867C3.215.958.244 3.885.244 7.482v10.595c0 3.595 2.971 6.524 6.623 6.524H17.62c3.652 0 6.623-2.929 6.623-6.524V7.482c0-3.597-2.971-6.524-6.623-6.524Zm4.494 17.119c0 2.439-2.016 4.426-4.494 4.426H6.867c-2.478 0-4.494-1.987-4.494-4.428V7.482c0-2.439 2.016-4.426 4.494-4.426H17.62c2.478 0 4.494 1.986 4.494 4.426v10.595Z"></path><path d="M12.245 6.87c-3.31 0-6.001 2.651-6.001 5.91 0 3.26 2.692 5.91 6 5.91s6-2.65 6-5.91c0-3.259-2.692-5.91-6-5.91Zm0 9.785c-2.17 0-3.935-1.738-3.935-3.875 0-2.136 1.764-3.874 3.935-3.874 2.169 0 3.933 1.738 3.933 3.874 0 2.137-1.764 3.875-3.933 3.875Zm5-11.755a1.01 1.01 0 0 0-.707.288.985.985 0 0 0-.294.696c0 .259.108.515.294.697a1.015 1.015 0 0 0 1.414 0 .983.983 0 0 0 .215-1.074.98.98 0 0 0-.216-.32 1.012 1.012 0 0 0-.706-.287Z"></path></svg>`;
}, "/Users/mpacheco/Documents/ElevenStudio/PROJECT-astro-boilerplate /astro-boilerplate/src/components/icons/instagram.astro", void 0);
//#endregion
//#region src/components/icons/linkedin.astro
createAstro("https://example.com");
var $$Linkedin = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Linkedin;
	const { class: className } = Astro.props;
	return renderTemplate`${maybeRenderHead($$result)}<svg xmlns="http://www.w3.org/2000/svg" width="668" height="667" fill="none" viewBox="0 0 668 667"${addAttribute(className, "class")}><path d="M667.614 666.842H.92V.147h666.694v666.695ZM240.372 200.611a40.422 40.422 0 0 0-27.051-38.26 40.412 40.412 0 0 0-16.401-2.161 40.495 40.495 0 0 0-40.043 23.815 40.495 40.495 0 0 0-.419 32.177 40.508 40.508 0 0 0 39.409 24.85h.547a40.56 40.56 0 0 0 30.856-10.557 40.533 40.533 0 0 0 13.102-29.864Zm-5.179 72.379h-77.642v233.768h77.684l-.042-233.768Zm280.337 99.705c0-71.79-38.316-105.263-89.473-105.263a77.14 77.14 0 0 0-70.022 38.61v-33.095h-77.768c1.053 21.895 0 233.853 0 233.853h77.811V376.19a53.201 53.201 0 0 1 2.526-18.948 42.565 42.565 0 0 1 39.831-28.463c28.211 0 39.411 21.474 39.411 52.884v125.179h77.726l-.042-134.147Zm-160-65.853.505-.8.043.8h-.548Z"></path></svg>`;
}, "/Users/mpacheco/Documents/ElevenStudio/PROJECT-astro-boilerplate /astro-boilerplate/src/components/icons/linkedin.astro", void 0);
//#endregion
//#region src/components/icons/tiktok.astro
createAstro("https://example.com");
var $$Tiktok = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Tiktok;
	const { class: className } = Astro.props;
	return renderTemplate`${maybeRenderHead($$result)}<svg xmlns="http://www.w3.org/2000/svg" width="21" height="25" fill="none" viewBox="0 0 21 25"${addAttribute(className, "class")}><path d="M18.304 5.476a5.47 5.47 0 0 1-.473-.274 6.65 6.65 0 0 1-1.216-1.031c-.906-1.036-1.244-2.086-1.369-2.822h.005C15.147.74 15.19.344 15.196.344H11.07v15.938c0 .214 0 .425-.01.634l-.003.078c0 .012 0 .024-.003.036v.009a3.497 3.497 0 0 1-1.763 2.778 3.45 3.45 0 0 1-1.708.45 3.49 3.49 0 0 1-3.482-3.5 3.49 3.49 0 0 1 3.482-3.5c.364 0 .726.057 1.072.17L8.66 9.24a7.678 7.678 0 0 0-5.908 1.726 8.092 8.092 0 0 0-1.767 2.176c-.174.3-.832 1.506-.911 3.462-.05 1.11.283 2.26.443 2.736v.01c.1.28.488 1.236 1.12 2.041a8.382 8.382 0 0 0 1.788 1.685v-.01l.01.01c1.998 1.355 4.214 1.267 4.214 1.267.383-.016 1.668 0 3.127-.69 1.618-.766 2.54-1.907 2.54-1.907a7.922 7.922 0 0 0 1.383-2.296c.374-.98.498-2.157.498-2.627V8.368c.05.03.717.47.717.47s.961.615 2.46 1.016c1.076.285 2.525.345 2.525.345V6.107c-.508.055-1.539-.105-2.594-.63Z"></path></svg>`;
}, "/Users/mpacheco/Documents/ElevenStudio/PROJECT-astro-boilerplate /astro-boilerplate/src/components/icons/tiktok.astro", void 0);
//#endregion
//#region src/components/icons/twitter.astro
createAstro("https://example.com");
var $$Twitter = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Twitter;
	const { class: className } = Astro.props;
	return renderTemplate`${maybeRenderHead($$result)}<svg xmlns="http://www.w3.org/2000/svg" width="24" height="22" fill="none" viewBox="0 0 24 22"${addAttribute(className, "class")}><path d="M18.901 0h3.68l-8.04 9.19L24 21.693h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 0h7.594l5.243 6.932L18.901 0ZM17.61 19.49h2.039L6.486 2.088H4.298L17.61 19.491Z"></path></svg>`;
}, "/Users/mpacheco/Documents/ElevenStudio/PROJECT-astro-boilerplate /astro-boilerplate/src/components/icons/twitter.astro", void 0);
//#endregion
//#region src/components/icons/youtube.astro
createAstro("https://example.com");
var $$Youtube = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Youtube;
	const { class: className } = Astro.props;
	return renderTemplate`${maybeRenderHead($$result)}<svg${addAttribute(className, "class")} fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 18"><path d="M23.845 2.598c-.651-1.185-1.358-1.403-2.796-1.486-1.438-.1-5.051-.14-8.181-.14-3.137 0-6.752.04-8.188.139-1.435.084-2.143.3-2.8 1.487C1.21 3.782.865 5.821.865 9.41v.012c0 3.574.345 5.628 1.015 6.8.657 1.184 1.364 1.4 2.799 1.5 1.437.085 5.052.136 8.188.136 3.131 0 6.744-.05 8.183-.135 1.438-.1 2.145-.315 2.796-1.5.677-1.171 1.018-3.225 1.018-6.8v-.012c0-3.59-.341-5.629-1.02-6.813ZM9.864 14.02V4.809l7.5 4.605-7.5 4.606Z"></path></svg>`;
}, "/Users/mpacheco/Documents/ElevenStudio/PROJECT-astro-boilerplate /astro-boilerplate/src/components/icons/youtube.astro", void 0);
//#endregion
//#region src/components/social-media.astro
createAstro("https://example.com");
var $$SocialMedia = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$SocialMedia;
	const { class: className, ...rest } = Astro.props;
	return renderTemplate`${maybeRenderHead($$result)}<ul${addAttribute(cls11(className), "class")}${spreadAttributes(rest)}>${BUSINESS_CONFIG.email && renderTemplate`<li><a${addAttribute(BUSINESS_CONFIG.email.link, "href")} class="hover:scale-110 block transition-transform duration-300">${renderComponent($$result, "Email", $$Email, { "class": "size-4 md:size-4 fill-white" })}<span class="sr-only">Email</span></a></li>`}${BUSINESS_CONFIG.social.facebook && renderTemplate`<li><a${addAttribute(BUSINESS_CONFIG.social.facebook, "href")} class="hover:scale-110 block transition-transform duration-300" target="_blank" rel="noopener noreferrer">${renderComponent($$result, "Facebook", $$Facebook, { "class": "size-4 md:size-4 fill-white" })}<span class="sr-only">Facebook</span></a></li>`}${BUSINESS_CONFIG.social.instagram && renderTemplate`<li><a${addAttribute(BUSINESS_CONFIG.social.instagram, "href")} class="hover:scale-110 block transition-transform duration-300" target="_blank" rel="noopener noreferrer">${renderComponent($$result, "Instagram", $$Instagram, { "class": "size-4 md:size-4 fill-white" })}<span class="sr-only">Instagram</span></a></li>`}${BUSINESS_CONFIG.social.linkedin && renderTemplate`<li><a${addAttribute(BUSINESS_CONFIG.social.linkedin, "href")} class="hover:scale-110 block transition-transform duration-300" target="_blank" rel="noopener noreferrer">${renderComponent($$result, "Linkedin", $$Linkedin, { "class": "size-4 md:size-4 fill-white" })}<span class="sr-only">Linkedin</span></a></li>`}${BUSINESS_CONFIG.social.twitter && renderTemplate`<li><a${addAttribute(BUSINESS_CONFIG.social.twitter, "href")} class="hover:scale-110 block transition-transform duration-300" target="_blank" rel="noopener noreferrer">${renderComponent($$result, "Twitter", $$Twitter, { "class": "size-4 md:size-4 fill-white" })}<span class="sr-only">Twitter</span></a></li>`}${BUSINESS_CONFIG.social.tiktok && renderTemplate`<li><a${addAttribute(BUSINESS_CONFIG.social.tiktok, "href")} class="hover:scale-110 block transition-transform duration-300" target="_blank" rel="noopener noreferrer">${renderComponent($$result, "Tiktok", $$Tiktok, { "class": "size-4 md:size-4 fill-white" })}<span class="sr-only">Tiktok</span></a></li>`}${BUSINESS_CONFIG.social.youtube && renderTemplate`<li><a${addAttribute(BUSINESS_CONFIG.social.youtube, "href")} class="hover:scale-110 block transition-transform duration-300" target="_blank" rel="noopener noreferrer">${renderComponent($$result, "Youtube", $$Youtube, { "class": "size-4 md:size-4 fill-white" })}<span class="sr-only">Youtube</span></a></li>`}</ul>`;
}, "/Users/mpacheco/Documents/ElevenStudio/PROJECT-astro-boilerplate /astro-boilerplate/src/components/social-media.astro", void 0);
//#endregion
//#region src/pages/index.astro
var pages_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Index,
	file: () => $$file,
	url: () => ""
});
var $$Index = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, {
		"metadata": {
			title: "Astro Template Eleven",
			description: "Astro Template Eleven",
			ignoreTitleTemplate: true
		},
		"data-astro-cid-lcdefpme": true
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<section class="relative eleven-brand flex flex-col gap-6 items-center justify-center h-screen bg-[#0b0b0b]" data-astro-cid-lcdefpme><a class="z-10"${addAttribute(BUSINESS_CONFIG.site, "href")} target="_blank" aria-label="Eleven Estudio" title="Link of website of Eleven Estudio" target="_blank" data-astro-cid-lcdefpme>${renderComponent($$result, "ElevenEstudio", $$ElevenEstudio, {
		"class": "w-64 h-auto",
		"data-astro-cid-lcdefpme": true
	})}</a><p class="text-gray-50 font-openSans" data-astro-cid-lcdefpme>Get started by editing src/index.astro</p>${renderComponent($$result, "Button", $$Button, {
		"href": "https://github.com/elevenestudio/astro-template-eleven",
		"target": "_blank",
		"data-astro-cid-lcdefpme": true
	}, { "default": ($$result) => renderTemplate`Get started` })}${renderComponent($$result, "SocialMedia", $$SocialMedia, {
		"class": "flex items-center gap-4 absolute bottom-10 left-1/2 transform -translate-x-1/2",
		"data-astro-cid-lcdefpme": true
	})}</section>` })}`;
}, "/Users/mpacheco/Documents/ElevenStudio/PROJECT-astro-boilerplate /astro-boilerplate/src/pages/index.astro", void 0);
var $$file = "/Users/mpacheco/Documents/ElevenStudio/PROJECT-astro-boilerplate /astro-boilerplate/src/pages/index.astro";
//#endregion
//#region \0virtual:astro:page:src/pages/index@_@astro
var page = () => pages_exports;
//#endregion
export { page };
