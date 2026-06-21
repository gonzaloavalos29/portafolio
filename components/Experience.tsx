"use client";

import { useI18n } from "@/lib/i18n";
import { experiences, ui } from "@/lib/content";
import { Section } from "./Section";
import { RevealGroup, RevealItem } from "./Reveal";

export function Experience() {
  const { t } = useI18n();
  return (
    <Section id="experience" title={ui.sections.experience} index="02">
      <RevealGroup className="relative space-y-8 before:absolute before:left-[7px] before:top-2 before:h-[calc(100%-1rem)] before:w-px before:bg-gradient-to-b before:from-accent before:via-border before:to-transparent">
        {experiences.map((exp) => (
          <RevealItem key={exp.company}>
            <div className="relative pl-10">
              {/* Punto de la timeline */}
              <span className="absolute left-0 top-1.5 flex h-4 w-4 items-center justify-center">
                <span className="h-4 w-4 rounded-full border-2 border-accent bg-bg" />
                <span className="absolute h-2 w-2 rounded-full bg-accent" />
              </span>

              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="text-xl font-bold">
                  {t(exp.role)}{" "}
                  <span className="text-accent">· {exp.company}</span>
                </h3>
                <span className="font-mono text-sm text-muted">
                  {t(exp.period)}
                </span>
              </div>

              <ul className="mt-4 space-y-2.5">
                {exp.bullets.map((b, i) => (
                  <li key={i} className="flex gap-3 text-muted">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent2" />
                    <span className="leading-relaxed">{t(b)}</span>
                  </li>
                ))}
              </ul>
            </div>
          </RevealItem>
        ))}
      </RevealGroup>
    </Section>
  );
}
