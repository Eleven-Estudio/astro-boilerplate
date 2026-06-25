(function() {
	try {
		var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
		e.SENTRY_RELEASE = { id: "3cfc4a7f4d9de9546a72b0650dc47bc9ba2e7716" };
		var n = new e.Error().stack;
		n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "75bc0546-648f-4529-9a7a-f2cad0d1cad7", e._sentryDebugIdIdentifier = "sentry-dbid-75bc0546-648f-4529-9a7a-f2cad0d1cad7");
	} catch (e) {}
})();
import { Fragment, createElement } from "react";
import { DOCUMENT_NODE, ELEMENT_NODE, TEXT_NODE, parse } from "ultrahtml";
//#region node_modules/.pnpm/@astrojs+react@6.0.0_@types+node@24.12.3_@types+react-dom@19.1.8_@types+react@19.1.11___ff7c170318f97e0f005b166616c4ac62/node_modules/@astrojs/react/dist/vnode-children.js
var ids = 0;
function convert(children) {
	let doc = parse(children.toString().trim());
	let id = ids++;
	let key = 0;
	function createReactElementFromNode(node) {
		const childVnodes = Array.isArray(node.children) && node.children.length ? node.children.map((child) => createReactElementFromNode(child)).filter(Boolean) : void 0;
		if (node.type === DOCUMENT_NODE) return createElement(Fragment, {}, childVnodes);
		else if (node.type === ELEMENT_NODE) {
			const { class: className, ...props } = node.attributes;
			return createElement(node.name, {
				...props,
				className,
				key: `${id}-${key++}`
			}, childVnodes);
		} else if (node.type === TEXT_NODE) return node.value.trim() ? node.value : void 0;
	}
	return createReactElementFromNode(doc).props.children;
}
//#endregion
export { convert as default };
