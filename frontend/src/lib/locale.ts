/**
 * Extracts the locale from a pathname
 * @param pathname - The pathname to extract locale from
 * @returns "no" if pathname starts with "/no", otherwise "en"
 */
export function getLocaleFromPathname(pathname: string): "en" | "no" {
  return pathname.startsWith("/no") ? "no" : "en";
}
