import { defaultCulture, supportedCultures } from "../config";

function getSimpleLocale(locale) {
  return locale.split("-")[0];
}

function getSupportedCultureBySimpleLocale(simpleLocale) {
  return supportedCultures.find((sc) => {
    return sc.code.split("-")[0] === simpleLocale;
  });
}

export function getSupportedCultureByLocale(locale) {
    const sl = getSimpleLocale(locale);
    const supportedCulture = getSupportedCultureBySimpleLocale(sl);
    return supportedCulture || defaultCulture;
}