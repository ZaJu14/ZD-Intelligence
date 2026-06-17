"use client";

import { AnimatedSection } from "@/components/AnimatedSection";
import { useLanguage } from "@/lib/i18n";
import { TECH_STACK } from "@/lib/content";

export function TechStack() {
  const { t } = useLanguage();
  const s = t.techStack;

  return (
    <section className="section-pad bg-[var(--bg-card)]">
      <div className="container-wide">
        <AnimatedSection>
          <p className="text-xs font-semibold uppercase tracking-widest text-gold mb-3">
            {s.eyebrow}
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-light max-w-xl">
            {s.heading}
          </h2>
          <p className="mt-4 text-[var(--muted)] max-w-lg">
            {s.sub}
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="mt-10 flex flex-wrap gap-3">
            {TECH_STACK.map((tech) => (
              <div
                key={tech.name}
                className="group flex flex-col items-start gap-1 bg-[var(--bg)] border border-[var(--border)] rounded-xl px-5 py-3.5 hover:border-gold/50 transition-colors"
              >
                <span className="text-sm font-semibold text-[var(--fg)]">
                  {tech.name}
                </span>
                <span className="text-xs text-gold/70 font-medium">
                  {tech.category}
                </span>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
