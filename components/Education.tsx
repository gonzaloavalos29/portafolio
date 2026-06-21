"use client";

import { useI18n } from "@/lib/i18n";
import { certifications, education, ui } from "@/lib/content";
import { Section } from "./Section";
import { RevealGroup, RevealItem } from "./Reveal";

export function Education() {
  const { t } = useI18n();
  return (
    <Section id="education" title={ui.sections.education} index="05">
      <div className="grid gap-10 md:grid-cols-2">
        {/* Estudios */}
        <div>
          <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider text-accent">
            {t(ui.education.studies)}
          </h3>
          <RevealGroup className="space-y-4">
            {education.map((e) => (
              <RevealItem key={e.place}>
                <div className="card-glow rounded-2xl border border-border bg-surface/40 p-5">
                  <div className="flex items-start justify-between gap-4">
                    <h4 className="font-semibold">{t(e.title)}</h4>
                    <span className="shrink-0 font-mono text-xs text-muted">
                      {t(e.period)}
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-muted">{e.place}</p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>

        {/* Certificaciones */}
        <div>
          <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider text-accent">
            {t(ui.education.certs)}
          </h3>
          <RevealGroup className="space-y-4">
            {certifications.map((c) => (
              <RevealItem key={c.title}>
                <div className="card-glow rounded-2xl border border-border bg-surface/40 p-5">
                  <div className="flex items-start justify-between gap-4">
                    <h4 className="font-semibold leading-snug">{c.title}</h4>
                    <span className="shrink-0 font-mono text-xs text-muted">
                      {t(c.period)}
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-accent2">{c.issuer}</p>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {t(c.detail)}
                  </p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </div>
    </Section>
  );
}
