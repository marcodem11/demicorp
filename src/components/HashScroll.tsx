"use client";

import { useEffect } from "react";

/**
 * Su hard-load di un URL con hash (es. /en#contact), le animazioni d'ingresso
 * possono alterare l'altezza prima che il browser esegua lo scroll nativo.
 * Questo componente riporta lo scroll all'ancora dopo il primo paint.
 */
export function HashScroll() {
  useEffect(() => {
    const hash = window.location.hash;
    if (!hash || hash.length < 2) return;

    let cancelled = false;
    const scrollToTarget = () => {
      if (cancelled) return;
      try {
        const el = document.querySelector(hash);
        if (el) el.scrollIntoView({ behavior: "auto", block: "start" });
      } catch {
        /* selettore non valido: ignora */
      }
    };

    const t1 = setTimeout(scrollToTarget, 120);
    const t2 = setTimeout(scrollToTarget, 500);
    return () => {
      cancelled = true;
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  return null;
}
