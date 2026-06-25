(function() {
	try {
		var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
		e.SENTRY_RELEASE = { id: "719bb25958636c71e7f994dd82ed8ed1f05f052c" };
		var n = new e.Error().stack;
		n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "c87db25e-1bc2-4657-9333-367ad03c1c9c", e._sentryDebugIdIdentifier = "sentry-dbid-c87db25e-1bc2-4657-9333-367ad03c1c9c");
	} catch (e) {}
})();
import { t as __exportAll } from "./rolldown-runtime_DYr26q5_.mjs";
import { r as getActionContext } from "./server_DFsXA_aH.mjs";
//#region node_modules/.pnpm/astro@7.0.3_@emnapi+core@1.11.1_@emnapi+runtime@1.11.1_@types+node@24.12.3_@vercel+func_99b77dd656545ed448096ce0a00f258a/node_modules/astro/dist/actions/runtime/entrypoints/route.js
var route_exports = /* @__PURE__ */ __exportAll({ POST: () => POST });
var POST = async (context) => {
	const { action, serializeActionResult } = getActionContext(context);
	if (action?.calledFrom !== "rpc") return new Response("Not found", { status: 404 });
	const serialized = serializeActionResult(await action.handler());
	if (serialized.type === "empty") return new Response(null, { status: serialized.status });
	return new Response(serialized.body, {
		status: serialized.status,
		headers: { "Content-Type": serialized.contentType }
	});
};
//#endregion
//#region \0virtual:astro:page:node_modules/.pnpm/astro@7.0.3_@emnapi+core@1.11.1_@emnapi+runtime@1.11.1_@types+node@24.12.3_@vercel+func_99b77dd656545ed448096ce0a00f258a/node_modules/astro/dist/actions/runtime/entrypoints/route@_@js
var page = () => route_exports;
//#endregion
export { page };
