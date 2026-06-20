"use client";

import { AnimatedSection } from "@/components/AnimatedSection";
import { FEATURES } from "@/content/features";
import { useLanguage } from "@/lib/i18n";
import { CALENDLY_URL } from "@/lib/config";

export function MentorshipFeatures() {
  const { lang, t } = useLanguage();
  const s = t.mentorship;

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
          <p className="mt-4 text-[var(--muted)] max-w-lg">{s.sub}</p>
        </AnimatedSection>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {FEATURES.map((feature, i) => {
            const content = feature[lang];
            return (
              <AnimatedSection key={feature.id} delay={i * 0.07}>
                <div className="card-base p-6 h-full flex flex-col hover:border-gold/40 transition-colors group">
                  <div className="flex items-start justify-between mb-3">
                    <p className="text-3xl">{feature.icon}</p>
                    <span
                      className={`text-xs font-semibold px-2 py-0.5 rounded-full ${
                        feature.includedInPackage
                          ? "bg-gold/15 text-gold"
                          : "bg-[var(--border)] text-[var(--muted)]"
                      }`}
                    >
                      {feature.includedInPackage ? s.includedLabel : s.addonLabel}
                    </span>
                  </div>
                  <h3 className="font-serif text-lg font-medium mb-2">
                    {content.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-[var(--muted)] flex-1 mb-4">
                    {content.description}
                  </p>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-gold mb-2">
                      {s.benefitsLabel}
                    </p>
                    <ul className="space-y-1">
                      {content.benefits.map((b) => (
                        <li
                          key={b}
                          className="flex items-start gap-1.5 text-xs text-[var(--muted)]"
                        >
                          <span className="text-gold mt-0.5 flex-shrink-0">›</span>
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </AnimatedSection>
            );
          })}
        </div>

        <AnimatedSection delay={0.4}>
          <div className="mt-10 text-center">
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              {s.ctaLabel}
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
