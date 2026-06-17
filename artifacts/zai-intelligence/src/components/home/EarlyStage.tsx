"use client";

import { AnimatedSection } from "@/components/AnimatedSection";
import { useLanguage } from "@/lib/i18n";

export function EarlyStage() {
  const { t } = useLanguage();
  const s = t.capabilities;

  return (
    <section className="section-pad bg-[var(--bg-card)]">
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

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          {s.items.map((item, i) => (
            <AnimatedSection key={item.title} delay={i * 0.1}>
              <div className="card-base p-7 h-full flex flex-col">
                <p className="text-3xl mb-4">{item.icon}</p>
                <h3 className="font-serif text-2xl font-medium mb-5">
                  {item.title}
                </h3>
                <div className="space-y-4 flex-1">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-gold mb-1.5">
                      {s.challengeLabel}
                    </p>
                    <p className="text-sm leading-relaxed text-[var(--muted)]">
                      {item.challenge}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-gold mb-1.5">
                      {s.approachLabel}
                    </p>
                    <p className="text-sm leading-relaxed text-[var(--muted)]">
                      {item.approach}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-gold mb-1.5">
                      {s.outcomeLabel}
                    </p>
                    <p className="text-sm leading-relaxed text-[var(--muted)]">
                      {item.outcome}
                    </p>
                  </div>
                </div>
                <div className="mt-5 pt-4 border-t border-[var(--border)]">
                  <span className="text-xs text-[var(--muted)] italic">
                    {s.exampleLabel}
                  </span>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.3}>
          <p className="mt-10 text-sm text-[var(--muted)] text-center max-w-lg mx-auto">
            {s.disclaimer}
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
