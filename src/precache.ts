const BASE_URL = import.meta.env.BASE_URL || "/";

const assetModules = import.meta.glob("./assets/*.{avif,svg}", {
  eager: true,
  import: "default",
}) as Record<string, string>;

const assetUrls = Object.values(assetModules);
const stylesUrl = new URL("./styles.css", import.meta.url).href;
const fontUrls = [
  `${BASE_URL}assets/fonts/inter-latin-300-500.woff2`,
  `${BASE_URL}assets/fonts/instrument-serif-latin-400.woff2`,
];

export const precacheUrls = Array.from(
  new Set([BASE_URL, stylesUrl, ...assetUrls, ...fontUrls])
);
