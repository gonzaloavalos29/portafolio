"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useI18n } from "@/lib/i18n";
import { profile, ui } from "@/lib/content";

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] },
  },
};

export function Hero() {
  const { t } = useI18n();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      id="top"
      ref={ref}
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-6"
    >
      {/* Grilla de fondo */}
      <div className="absolute inset-0 grid-bg" />

      {/* Blobs animados */}
      <div className="pointer-events-none absolute -left-20 top-1/4 h-72 w-72 rounded-full bg-accent/30 blur-3xl animate-blob" />
      <div className="pointer-events-none absolute -right-10 top-1/3 h-80 w-80 rounded-full bg-accent2/25 blur-3xl animate-blob [animation-delay:-6s]" />

      <motion.div
        style={{ y, opacity }}
        variants={container}
        initial="hidden"
        animate="visible"
        className="relative z-10 mx-auto max-w-3xl text-center"
      >
        <motion.div variants={item} className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-surface/50 px-4 py-1.5 text-xs font-medium text-muted backdrop-blur">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
          </span>
          {t(profile.role)}
        </motion.div>

        <motion.h1
          variants={item}
          className="text-balance text-5xl font-extrabold tracking-tight sm:text-7xl"
        >
          {profile.name.split(" ")[0]}{" "}
          <span className="text-gradient animate-gradient-x">
            {profile.name.split(" ").slice(1).join(" ")}
          </span>
        </motion.h1>

        <motion.p
          variants={item}
          className="mx-auto mt-6 max-w-xl text-balance text-lg text-muted"
        >
          {t(profile.tagline)}
        </motion.p>

        <motion.div
          variants={item}
          className="mt-10 flex flex-wrap items-center justify-center gap-3"
        >
          <a
            href="#projects"
            className="group relative overflow-hidden rounded-full bg-gradient-to-r from-accent to-accent2 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-accent/25 transition hover:shadow-accent/40"
          >
            <span className="relative z-10">{t(ui.hero.cta)}</span>
          </a>
          <a
            href="#contact"
            className="rounded-full border border-border bg-surface/50 px-6 py-3 text-sm font-semibold backdrop-blur transition hover:border-accent/60 hover:text-accent"
          >
            {t(ui.hero.contact)}
          </a>
        </motion.div>
      </motion.div>

      {/* Indicador de scroll */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="flex h-9 w-5 items-start justify-center rounded-full border border-border p-1.5">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.6, repeat: Infinity }}
            className="h-1.5 w-1 rounded-full bg-accent"
          />
        </div>
      </motion.div>
    </section>
  );
}
