"use client";

import Link from "next/link";
import { AnimatedSection } from "@/components/AnimatedSection";
import { SERVICES } from "@/content/services";
import { useLanguage } from "@/lib/i18n";

export function ServicesGrid() {
  const { lang, t } = useLanguage();
  const s = t.services;

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
          <p className="mt-4 text-[var(--muted)] max-w-lg">{s.sub}</p>
        </AnimatedSection>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          {SERVICES.map((service, i) => {
            const item = service[lang];
            return (
              <AnimatedSection key={service.id} delay={i * 0.1}>
                <div className="card-base p-8 h-full flex flex-col">
                  <p className="text-4xl mb-5">{service.icon}</p>
                  <p className="text-xs font-semibold uppercase tracking-widest text-gold mb-2">
                    {item.tagline}
                  </p>
                  <h3 className="font-serif text-2xl font-medium mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-[var(--muted)] flex-1 mb-4">
                    {item.shortDescription}
                  </p>
                  <ul className="space-y-1.5 mb-6">
                    {item.outcomes.map((o) => (
                      <li key={o} className="flex items-start gap-2 text-xs text-[var(--muted)]">
                        <span className="text-gold mt-0.5 flex-shrink-0">›</span>
                        {o}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={`/services/${service.slug}/`}
                    className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-gold hover:text-gold-light transition-colors"
                  >
                    {s.learnMore}
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                    </svg>
                  </Link>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
