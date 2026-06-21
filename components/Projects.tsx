"use client";

import { motion } from "framer-motion";
import { useI18n } from "@/lib/i18n";
import { projects, ui, type Project } from "@/lib/content";
import { Section } from "./Section";
import { RevealGroup, RevealItem } from "./Reveal";

function ProjectCard({ project }: { project: Project }) {
  const { t } = useI18n();
  return (
    <motion.article
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 300, damping: 25 }}
      className="card-glow group flex h-full flex-col rounded-2xl border border-border bg-surface/40 p-6"
    >
      <div className="mb-4 flex items-start justify-between gap-4">
        <h3 className="text-xl font-bold transition group-hover:text-accent">
          {project.title}
        </h3>
        <span className="text-muted transition group-hover:translate-x-1 group-hover:text-accent">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M7 17 17 7M7 7h10v10" />
          </svg>
        </span>
      </div>

      <p className="flex-1 text-sm leading-relaxed text-muted">
        {t(project.description)}
      </p>

      <div className="mt-5 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-md bg-accent/10 px-2.5 py-1 text-xs font-medium text-accent"
          >
            {tag}
          </span>
        ))}
      </div>

      {(project.repo || project.demo) && (
        <div className="mt-5 flex gap-4 border-t border-border pt-4 text-sm">
          {project.repo && (
            <a
              href={project.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-muted transition hover:text-fg"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.49v-1.7c-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.49-1.11-1.49-.91-.64.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.57 2.34 1.12 2.91.85.09-.66.35-1.12.63-1.37-2.22-.26-4.55-1.14-4.55-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.27 2.75 1.05A9.4 9.4 0 0 1 12 6.84c.85 0 1.71.12 2.51.34 1.91-1.32 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.93-2.34 4.79-4.57 5.05.36.32.68.94.68 1.9v2.82c0 .27.18.6.69.49A10.02 10.02 0 0 0 22 12.25C22 6.58 17.52 2 12 2z" />
              </svg>
              {t(ui.project.code)}
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-muted transition hover:text-fg"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
              </svg>
              {t(ui.project.live)}
            </a>
          )}
        </div>
      )}
    </motion.article>
  );
}

export function Projects() {
  return (
    <Section id="projects" title={ui.sections.projects} index="04">
      <RevealGroup className="grid gap-6 md:grid-cols-2 lg:grid-cols-3" stagger={0.12}>
        {projects.map((project) => (
          <RevealItem key={project.title} className="h-full">
            <ProjectCard project={project} />
          </RevealItem>
        ))}
      </RevealGroup>
    </Section>
  );
}
