"use client";

import { motion } from "framer-motion";
import { useI18n } from "@/lib/i18n";
import { useTheme } from "@/lib/theme";

export function LanguageToggle() {
  const { locale, toggle } = useI18n();
  return (
    <button
      onClick={toggle}
      aria-label="Toggle language"
      className="relative flex h-9 w-[64px] items-center rounded-full border border-border bg-surface/60 px-1 text-xs font-semibold backdrop-blur transition hover:border-accent/60"
    >
      <motion.span
        layout
        transition={{ type: "spring", stiffness: 500, damping: 35 }}
        className="absolute h-7 w-7 rounded-full bg-accent/20"
        style={{ left: locale === "es" ? 4 : 32 }}
      />
      <span className={`z-10 flex-1 text-center ${locale === "es" ? "text-accent" : "text-muted"}`}>
        ES
      </span>
      <span className={`z-10 flex-1 text-center ${locale === "en" ? "text-accent" : "text-muted"}`}>
        EN
      </span>
    </button>
  );
}

export function ThemeToggle() {
  const { theme, toggle } = useTheme();
  return (
    <button
      onClick={toggle}
      aria-label="Toggle theme"
      className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-surface/60 backdrop-blur transition hover:border-accent/60"
    >
      <motion.div
        key={theme}
        initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
        animate={{ rotate: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        {theme === "dark" ? (
          // luna
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent2">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
          </svg>
        ) : (
          // sol
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent">
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
          </svg>
        )}
      </motion.div>
    </button>
  );
}
