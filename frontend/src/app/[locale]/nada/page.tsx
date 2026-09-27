"use client";

import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { getLocaleFromPathname } from "@/lib/locale";

/**
 * The full NADA content now lives at /acupuncture/nada, alongside the other
 * acupuncture offerings. This route is kept so old links to /nada keep working.
 */
export default function NadaRedirectPage(): null {
  const router = useRouter();
  const pathname = usePathname();
  const locale = getLocaleFromPathname(pathname);

  useEffect(() => {
    router.replace(`/${locale}/acupuncture/nada`);
  }, [router, locale]);

  return null;
}
