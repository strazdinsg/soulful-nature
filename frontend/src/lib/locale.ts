/**
 * Extracts the locale from a pathname
 * @param pathname - The pathname to extract locale from
 * @returns "en" if pathname starts with "/en", otherwise "no"
 */
export function getLocaleFromPathname(pathname: string): "en" | "no" {
  return pathname.startsWith("/en") ? "en" : "no";
}
