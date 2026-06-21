"use client";

import { motion } from "framer-motion";
import { useI18n } from "@/lib/i18n";
import { profile, ui } from "@/lib/content";
import { Section } from "./Section";
import { Reveal } from "./Reveal";

const socials = [
  {
    key: "github" as const,
    label: "GitHub",
    icon: (
      <path d="M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.49v-1.7c-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.49-1.11-1.49-.91-.64.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.57 2.34 1.12 2.91.85.09-.66.35-1.12.63-1.37-2.22-.26-4.55-1.14-4.55-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.27 2.75 1.05A9.4 9.4 0 0 1 12 6.84c.85 0 1.71.12 2.51.34 1.91-1.32 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.93-2.34 4.79-4.57 5.05.36.32.68.94.68 1.9v2.82c0 .27.18.6.69.49A10.02 10.02 0 0 0 22 12.25C22 6.58 17.52 2 12 2z" />
    ),
  },
  {
    key: "linkedin" as const,
    label: "LinkedIn",
    icon: (
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14zM8.34 18.34v-7.2H6.06v7.2h2.28zM7.2 10.06a1.32 1.32 0 1 0 0-2.64 1.32 1.32 0 0 0 0 2.64zm11.14 8.28v-3.96c0-2.12-1.13-3.1-2.64-3.1-1.22 0-1.76.67-2.07 1.14v-.98h-2.28v7.2h2.28v-4.02c0-.21.02-.42.08-.57.16-.42.55-.86 1.2-.86.84 0 1.18.64 1.18 1.58v3.87h2.27z" />
    ),
  },
  {
    key: "twitter" as const,
    label: "X",
    icon: (
      <path d="M18.9 2H22l-7.5 8.6L23.3 22h-6.9l-5.4-7.1L4.8 22H1.7l8-9.2L.9 2h7l4.9 6.5L18.9 2zm-2.4 18h1.9L7.6 4H5.6l10.9 16z" />
    ),
  },
];

export function Contact() {
  const { t } = useI18n();
  const activeSocials = socials.filter((s) => profile.socials[s.key]);

  return (
    <Section id="contact" title={ui.sections.contact} index="06">
      <Reveal>
        <div className="card-glow relative overflow-hidden rounded-3xl border border-border bg-surface/40 px-6 py-14 text-center sm:px-12">
          <div className="pointer-events-none absolute -top-24 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-accent/20 blur-3xl" />

          <p className="relative mx-auto max-w-md text-lg text-muted">
            {t(ui.contact.subtitle)}
          </p>

          <motion.a
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            href={`mailto:${profile.email}`}
            className="relative mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-accent to-accent2 px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-accent/25"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <path d="m22 7-10 5L2 7" />
            </svg>
            {t(ui.contact.button)}
          </motion.a>

          {activeSocials.length > 0 && (
            <div className="relative mt-10 flex items-center justify-center gap-4">
              {activeSocials.map((s) => (
                <motion.a
                  key={s.key}
                  href={profile.socials[s.key]}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  whileHover={{ y: -4 }}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-bg/50 text-muted transition hover:border-accent/60 hover:text-accent"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    {s.icon}
                  </svg>
                </motion.a>
              ))}
            </div>
          )}
        </div>
      </Reveal>
    </Section>
  );
}
