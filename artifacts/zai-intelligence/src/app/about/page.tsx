"use client";

import Link from "next/link";
import { PageHero } from "@/components/shared/PageHero";
import { AnimatedSection } from "@/components/AnimatedSection";
import { CtaBand } from "@/components/home/CtaBand";
import { LINKEDIN_URL } from "@/lib/config";
import { useLanguage } from "@/lib/i18n";

export default function AboutPage() {
  const { t } = useLanguage();
  const s = t.aboutPage;

  return (
    <>
      <PageHero
        label={s.hero.label}
        title={s.hero.title}
        subtitle={s.hero.subtitle}
      />

      <section className="section-pad bg-[var(--bg)]">
        <div className="container-wide grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <AnimatedSection>
            <h2 className="font-serif text-2xl md:text-3xl font-light mb-6">
              {s.whyExist.heading}
            </h2>
            <div className="space-y-4 text-[var(--muted)] leading-relaxed">
              <p>{s.whyExist.p1}</p>
              <p>{s.whyExist.p2}</p>
              <p>{s.whyExist.p3}</p>
            </div>
            <Link
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary mt-8 inline-flex"
            >
              {s.whyExist.linkedin}
            </Link>
          </AnimatedSection>

          <div className="space-y-6">
            {s.cards.map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 0.12}>
                <div className="card-base p-6 flex gap-4">
                  <p className="text-2xl flex-shrink-0">{item.icon}</p>
                  <div>
                    <h3 className="font-serif text-lg font-medium mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-[var(--muted)]">
                      {item.body}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-[var(--bg-card)]">
        <div className="container-wide">
          <AnimatedSection>
            <p className="text-xs font-semibold uppercase tracking-widest text-gold mb-3">
              {s.howWeOperate.eyebrow}
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-light mb-10">
              {s.howWeOperate.heading}
            </h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {s.howWeOperate.items.map((c, i) => (
              <AnimatedSection key={c.title} delay={i * 0.1}>
                <div className="card-base p-6">
                  <p className="text-3xl mb-4">{c.icon}</p>
                  <p className="font-serif text-lg font-medium mb-2">{c.title}</p>
                  <p className="text-sm text-[var(--muted)] leading-relaxed">{c.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
