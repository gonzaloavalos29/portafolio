"use client";

import type { ReactNode } from "react";
import { useI18n } from "@/lib/i18n";
import type { Bilingual } from "@/lib/content";
import { Reveal } from "./Reveal";

export function Section({
  id,
  title,
  index,
  children,
}: {
  id: string;
  title: Bilingual;
  index: string;
  children: ReactNode;
}) {
  const { t } = useI18n();
  return (
    <section id={id} className="relative mx-auto max-w-5xl scroll-mt-24 px-6 py-24">
      <Reveal>
        <div className="mb-12 flex items-end gap-4">
          <span className="font-mono text-sm text-accent">{index}</span>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            {t(title)}
          </h2>
          <span className="mb-2 h-px flex-1 bg-gradient-to-r from-border to-transparent" />
        </div>
      </Reveal>
      {children}
    </section>
  );
}
