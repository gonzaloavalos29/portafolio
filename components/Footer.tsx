"use client";

import { useI18n } from "@/lib/i18n";
import { profile, ui } from "@/lib/content";

export function Footer() {
  const { t } = useI18n();
  // Año fijo para evitar mismatch de hidratación; actualizalo si querés.
  const year = 2026;
  return (
    <footer className="border-t border-border px-6 py-8">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-2 text-sm text-muted sm:flex-row">
        <p>
          © {year} {profile.name}. {t(ui.footerRights)}
        </p>
        <p className="flex items-center gap-1.5">
          <span>Next.js</span>
          <span className="text-accent">·</span>
          <span>Framer Motion</span>
          <span className="text-accent">·</span>
          <span>Tailwind</span>
        </p>
      </div>
    </footer>
  );
}
