(function() {
	try {
		var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
		e.SENTRY_RELEASE = { id: "719bb25958636c71e7f994dd82ed8ed1f05f052c" };
		var n = new e.Error().stack;
		n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "4504cdbd-32c0-47a6-99d2-aca406ed4cf6", e._sentryDebugIdIdentifier = "sentry-dbid-4504cdbd-32c0-47a6-99d2-aca406ed4cf6");
	} catch (e) {}
})();
import { t as __exportAll } from "./rolldown-runtime_DYr26q5_.mjs";
import { c as isRemotePath } from "./path_CMqV8SoO.mjs";
import { n as fetchWithRedirects, s as isRemoteAllowed } from "./remoteProbe_BhNe4RrB.mjs";
import { r as getConfiguredImageService, t as imageConfig } from "./_astro_assets_BYs95TJ0.mjs";
import * as mime from "mrmime";
//#region node_modules/.pnpm/astro@7.0.3_@emnapi+core@1.11.1_@emnapi+runtime@1.11.1_@types+node@24.12.3_@vercel+func_99b77dd656545ed448096ce0a00f258a/node_modules/astro/dist/assets/utils/etag.js
var fnv1a52 = (str) => {
	const len = str.length;
	let i = 0, t0 = 0, v0 = 8997, t1 = 0, v1 = 33826, t2 = 0, v2 = 40164, t3 = 0, v3 = 52210;
	while (i < len) {
		v0 ^= str.charCodeAt(i++);
		t0 = v0 * 435;
		t1 = v1 * 435;
		t2 = v2 * 435;
		t3 = v3 * 435;
		t2 += v0 << 8;
		t3 += v1 << 8;
		t1 += t0 >>> 16;
		v0 = t0 & 65535;
		t2 += t1 >>> 16;
		v1 = t1 & 65535;
		v3 = t3 + (t2 >>> 16) & 65535;
		v2 = t2 & 65535;
	}
	return (v3 & 15) * 281474976710656 + v2 * 4294967296 + v1 * 65536 + (v0 ^ v3 >> 4);
};
var etag = (payload, weak = false) => {
	return (weak ? "W/\"" : "\"") + fnv1a52(payload).toString(36) + payload.length.toString(36) + "\"";
};
//#endregion
//#region node_modules/.pnpm/astro@7.0.3_@emnapi+core@1.11.1_@emnapi+runtime@1.11.1_@types+node@24.12.3_@vercel+func_99b77dd656545ed448096ce0a00f258a/node_modules/astro/dist/assets/endpoint/loadImage.js
async function loadImage(src, headers, imageConfig, isRemote, fetchFn) {
	try {
		const res = await fetchWithRedirects({
			url: src,
			headers,
			imageConfig,
			fetchFn
		});
		if (isRemote && !isRemoteAllowed(res.url, imageConfig)) return;
		if (!res.ok) return;
		return await res.arrayBuffer();
	} catch {
		return;
	}
}
//#endregion
//#region node_modules/.pnpm/astro@7.0.3_@emnapi+core@1.11.1_@emnapi+runtime@1.11.1_@types+node@24.12.3_@vercel+func_99b77dd656545ed448096ce0a00f258a/node_modules/astro/dist/assets/endpoint/generic.js
var generic_exports = /* @__PURE__ */ __exportAll({ GET: () => GET });
var GET = async ({ request }) => {
	try {
		const imageService = await getConfiguredImageService();
		if (!("transform" in imageService)) throw new Error("Configured image service is not a local service");
		const url = new URL(request.url);
		const transform = await imageService.parseURL(url, imageConfig);
		if (!transform?.src) throw new Error("Incorrect transform returned by `parseURL`");
		let inputBuffer = void 0;
		const isRemoteImage = isRemotePath(transform.src);
		if (isRemoteImage && isRemoteAllowed(transform.src, imageConfig) === false) return new Response("Forbidden", { status: 403 });
		const sourceUrl = new URL(transform.src, url.origin);
		if (!isRemoteImage && sourceUrl.origin !== url.origin) return new Response("Forbidden", { status: 403 });
		inputBuffer = await loadImage(sourceUrl, isRemoteImage ? new Headers() : request.headers, imageConfig, isRemoteImage);
		if (!inputBuffer) return new Response("Not Found", { status: 404 });
		const { data, format } = await imageService.transform(new Uint8Array(inputBuffer), transform, imageConfig);
		return new Response(data, {
			status: 200,
			headers: {
				"Content-Type": mime.lookup(format) ?? `image/${format}`,
				"Cache-Control": "public, max-age=31536000",
				ETag: etag(data.toString()),
				Date: (/* @__PURE__ */ new Date()).toUTCString()
			}
		});
	} catch (err) {
		console.error("Could not process image request:", err);
		return new Response("Internal Server Error", { status: 500 });
	}
};
//#endregion
//#region \0virtual:astro:page:node_modules/.pnpm/astro@7.0.3_@emnapi+core@1.11.1_@emnapi+runtime@1.11.1_@types+node@24.12.3_@vercel+func_99b77dd656545ed448096ce0a00f258a/node_modules/astro/dist/assets/endpoint/generic@_@js
var page = () => generic_exports;
//#endregion
export { page };
