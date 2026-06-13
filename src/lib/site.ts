export const SITE_NAME = "Vengeance UI";
export const SITE_URL = "https://www.vengenceui.com";
export const SITE_DESCRIPTION =
  "Animated React components and next-generation UI interactions for modern landing pages.";
export const SITE_OG_IMAGE = "/og-image.png";

export function absoluteUrl(path = "/") {
  return new URL(path, SITE_URL).toString();
}
