import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const normalize = (v: string) => v.toLowerCase().trim();
export const hasValue = (v?: string | null) => Boolean(v && v.length > 0);
export const toHttps = (url: string) => {
  // jsonplaceholder returns e.g. "hildegard.org" — ensure it is clickable
  try {
    const prefixed = /^https?:\/\//i.test(url) ? url : `https://${url}`;
    return new URL(prefixed).toString();
  } catch {
    return "#";
  }
};
