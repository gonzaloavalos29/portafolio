"use client";

import { motion } from "framer-motion";
import { useI18n } from "@/lib/i18n";
import { skills, ui } from "@/lib/content";
import { Section } from "./Section";
import { RevealGroup, RevealItem } from "./Reveal";

export function Skills() {
  const { t } = useI18n();
  return (
    <Section id="skills" title={ui.sections.skills} index="03">
      <RevealGroup className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((group) => (
          <RevealItem key={group.category.en}>
            <div className="card-glow h-full rounded-2xl border border-border bg-surface/40 p-6 transition hover:-translate-y-1">
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-accent">
                {t(group.category)}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <motion.span
                    key={skill}
                    whileHover={{ scale: 1.08 }}
                    className="rounded-lg border border-border bg-bg/50 px-3 py-1.5 text-sm text-muted transition hover:border-accent/50 hover:text-fg"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          </RevealItem>
        ))}
      </RevealGroup>
    </Section>
  );
}
