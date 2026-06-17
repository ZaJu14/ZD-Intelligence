"use client";

import { AnimatedSection } from "@/components/AnimatedSection";
import { useLanguage } from "@/lib/i18n";

export function Process() {
  const { t } = useLanguage();
  const s = t.process;

  return (
    <section className="section-pad bg-[var(--bg)]">
      <div className="container-wide">
        <AnimatedSection>
          <p className="text-xs font-semibold uppercase tracking-widest text-gold mb-3">
            {s.eyebrow}
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-light">
            {s.heading}
          </h2>
          <p className="mt-4 text-[var(--muted)] max-w-lg">
            {s.sub}
          </p>
        </AnimatedSection>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {s.steps.map((step, i) => (
            <AnimatedSection key={step.number} delay={i * 0.1}>
              <div className="relative">
                <p className="font-serif text-6xl font-light text-gold/20 mb-4 select-none">
                  {step.number}
                </p>
                <div className="absolute top-2 left-0 w-8 h-px bg-gold" />
                <h3 className="font-serif text-2xl font-medium mb-2">
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed text-[var(--muted)]">
                  {step.body}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
