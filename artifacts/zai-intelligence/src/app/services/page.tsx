"use client";

import Link from "next/link";
import { PageHero } from "@/components/shared/PageHero";
import { AnimatedSection } from "@/components/AnimatedSection";
import { CtaBand } from "@/components/home/CtaBand";
import { SERVICES } from "@/content/services";
import { useLanguage } from "@/lib/i18n";

export default function ServicesPage() {
  const { lang, t } = useLanguage();
  const s = t.services;

  return (
    <>
      <PageHero
        label={s.eyebrow}
        title={s.heading}
        subtitle={s.sub}
      />

      <section className="section-pad bg-[var(--bg)]">
        <div className="container-wide grid grid-cols-1 md:grid-cols-2 gap-8">
          {SERVICES.map((service, i) => {
            const item = service[lang];
            return (
              <AnimatedSection key={service.id} delay={i * 0.1}>
                <div className="card-base p-8 h-full flex flex-col">
                  <p className="text-4xl mb-5">{service.icon}</p>
                  <p className="text-xs font-semibold uppercase tracking-widest text-gold mb-2">
                    {item.tagline}
                  </p>
                  <h2 className="font-serif text-2xl font-medium mb-3">
                    {item.title}
                  </h2>
                  <p className="text-sm leading-relaxed text-[var(--muted)] flex-1 mb-4">
                    {item.shortDescription}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {item.outcomes.map((o) => (
                      <li key={o} className="flex items-start gap-2 text-sm text-[var(--muted)]">
                        <span className="text-gold mt-0.5 flex-shrink-0">✓</span>
                        {o}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={`/services/${service.slug}/`}
                    className="btn-primary text-sm py-2.5"
                  >
                    {item.cta}
                  </Link>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </section>

      <CtaBand />
    </>
  );
}
