"use client";

import dynamic from "next/dynamic";

const CursorFX = dynamic(
  () => import("@/components/CursorFX").then((m) => m.CursorFX),
  { ssr: false },
);

export function ClientEffects() {
  return <CursorFX />;
}
