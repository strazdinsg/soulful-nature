import { Language } from "@/components/LanguageSelector";

/**
 * Recursive function to search through nested objects
 * @param obj - The object to search through
 * @param term - The term to search for
 * @param lang - The language to search in
 * @returns true if the term is found, false otherwise
 */
export function searchInObject(
  obj: any,
  term: string,
  lang: Language
): boolean {
  for (const key in obj) {
    // Skip non-language properties when searching language-specific content
    if (key === "english" || key === "latvian" || key === "norwegian") {
      if (key !== lang) continue;
    }

    const value = obj[key];

    // Check if value is a string and contains the search term
    if (typeof value === "string" && value.toLowerCase().includes(term)) {
      return true;
    }

    // Check if value is an array
    if (Array.isArray(value)) {
      for (const item of value) {
        if (typeof item === "string" && item.toLowerCase().includes(term)) {
          return true;
        }
        if (typeof item === "object" && item !== null) {
          if (searchInObject(item, term, lang)) {
            return true;
          }
        }
      }
    }

    // Check if value is an object
    if (typeof value === "object" && value !== null) {
      if (searchInObject(value, term, lang)) {
        return true;
      }
    }
  }

  return false;
}
