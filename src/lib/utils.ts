import type { ClassValue } from "clsx";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** @deprecated Use `cn` instead. Kept for backwards compatibility. */
export const cls11 = cn;

export function joinPath(...paths: string[]) {
  return paths.join("/").replace(/\/+/gu, "/");
}

export function getCurrentPath(url: URL, level = 0) {
  const paths = url.pathname.split("/").filter(Boolean);
  return paths[level];
}
