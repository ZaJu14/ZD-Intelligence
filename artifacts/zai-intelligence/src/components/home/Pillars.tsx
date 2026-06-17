"use client";

import { AnimatedSection } from "@/components/AnimatedSection";
import { useLanguage } from "@/lib/i18n";

export function Pillars() {
  const { t } = useLanguage();
  const s = t.whyChoose;

  return (
    <section className="section-pad bg-[var(--bg)]">
      <div className="container-wide">
        <AnimatedSection>
          <p className="text-xs font-semibold uppercase tracking-widest text-gold mb-3">
            {s.eyebrow}
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-light max-w-2xl">
            {s.heading}
          </h2>
          <p className="mt-4 text-[var(--muted)] max-w-lg">
            {s.sub}
          </p>
        </AnimatedSection>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {s.items.map((p, i) => (
            <AnimatedSection key={p.title} delay={i * 0.08}>
              <div className="card-base p-6 h-full border-l-2 border-gold/30 hover:border-gold transition-colors">
                <p className="text-2xl mb-3">{p.icon}</p>
                <h3 className="font-serif text-base font-semibold mb-2">
                  {p.title}
                </h3>
                <p className="text-sm leading-relaxed text-[var(--muted)]">
                  {p.body}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
