"use client";

import { useI18n } from "@/lib/i18n";
import { about, profile, ui } from "@/lib/content";
import { Section } from "./Section";
import { Reveal } from "./Reveal";

export function About() {
  const { t } = useI18n();
  return (
    <Section id="about" title={ui.sections.about} index="01">
      <div className="grid gap-10 md:grid-cols-[1.5fr_1fr]">
        <Reveal direction="right">
          <p className="text-lg leading-relaxed text-muted">{t(about)}</p>
          {profile.resumeUrl && (
            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-full border border-border bg-surface/50 px-5 py-2.5 text-sm font-semibold transition hover:border-accent/60 hover:text-accent"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" />
              </svg>
              {t(ui.resume)}
            </a>
          )}
        </Reveal>

        <Reveal direction="left" delay={0.15}>
          <div className="card-glow rounded-2xl border border-border bg-surface/40 p-6">
            {profile.avatar && (
              <div className="mb-5 flex items-center gap-4">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={profile.avatar}
                  alt={profile.name}
                  className="h-16 w-16 rounded-full border-2 border-accent/40 object-cover"
                  onError={(e) => {
                    // Si la foto aún no existe en /public, ocultamos el bloque.
                    e.currentTarget.parentElement?.style.setProperty("display", "none");
                  }}
                />
                <div>
                  <p className="font-semibold">{profile.name}</p>
                  <p className="text-sm text-accent2">{t(profile.role)}</p>
                </div>
              </div>
            )}
            <dl className="space-y-4 text-sm">
              <div className="flex items-center gap-3">
                <span className="text-accent">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </span>
                <dd className="text-muted">{t(profile.location)}</dd>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-accent">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="m22 7-10 5L2 7" />
                  </svg>
                </span>
                <dd>
                  <a href={`mailto:${profile.email}`} className="text-muted transition hover:text-accent">
                    {profile.email}
                  </a>
                </dd>
              </div>
            </dl>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
