"use client";

import { usePathname, useRouter } from "next/navigation";

export default function LanguageToggle() {
  const pathname = usePathname() || "/";
  const router = useRouter();

  // If current path starts with /ja, switch to the non-ja path (preserve trailing path)
  const isJa = pathname === "/ja" || pathname.startsWith("/ja/");
  const targetPath = isJa
    ? pathname.replace(/^\/ja/, "") || "/"
    : "/ja" + (pathname === "/" ? "" : pathname);

  const label = isJa ? "English" : "日本語";

  return (
    <button
      onClick={() => router.push(targetPath)}
      aria-label={`Switch language to ${isJa ? "English" : "Japanese"}`}
      style={{
        padding: "8px 12px",
        borderRadius: 6,
        border: "1px solid #ccc",
        background: "white",
        cursor: "pointer",
        fontSize: "1.5rem",
        fontWeight: 600,
      }}
    >
      {label}
    </button>
  );
}