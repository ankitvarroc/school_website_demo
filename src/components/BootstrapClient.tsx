"use client";

import { useEffect } from "react";

/**
 * BootstrapClient loads Bootstrap's JavaScript bundle on the client side.
 * This enables interactive features (data-bs-toggle, dropdowns, collapse, modals, etc.)
 * safely without breaking Server-Side Rendering (SSR) in Next.js App Router.
 */
export default function BootstrapClient() {
  useEffect(() => {
    // Dynamically import bootstrap JS on mount in browser environment
    // @ts-expect-error bootstrap js bundle doesn't have complete global type declarations
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return null;
}
