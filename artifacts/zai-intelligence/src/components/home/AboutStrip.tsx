"use client";

import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useLanguage } from "@/lib/i18n";

export function AboutStrip() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useLanguage();
  const s = t.about;

  return (
    <section ref={ref} className="section-pad bg-[var(--bg-card)] overflow-hidden relative">
      <div className="container-wide relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="text-xs font-semibold uppercase tracking-widest text-gold mb-4">
            {s.label}
          </p>
          <h2 className="font-serif text-3xl md:text-5xl font-light leading-snug mb-6">
            {s.heading}{" "}
            {s.headingItalic && (
              <span className="italic gradient-text">{s.headingItalic}</span>
            )}
          </h2>
          <p className="text-[var(--muted)] leading-relaxed mb-4">{s.p1}</p>
          <p className="text-[var(--muted)] leading-relaxed mb-8">{s.p2}</p>
          <Link href="/about/" className="btn-primary">
            {s.btn}
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="grid grid-cols-2 gap-4"
        >
          {s.features.map((item) => (
            <div
              key={item.label}
              className="bg-[var(--bg)] border border-[var(--border)] rounded-xl p-5 hover:border-gold/40 transition-colors"
            >
              <p className="text-2xl mb-2">{item.icon}</p>
              <p className="text-sm font-semibold">{item.label}</p>
              <p className="text-xs text-[var(--muted)] mt-1">{item.desc}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
