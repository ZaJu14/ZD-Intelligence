"use client";

import Link from "next/link";
import { AnimatedSection } from "@/components/AnimatedSection";
import { CALENDLY_URL } from "@/lib/config";
import { useLanguage } from "@/lib/i18n";

export function CtaBand() {
  const { t } = useLanguage();

  return (
    <section className="section-pad bg-navy relative overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(184,147,63,0.12) 0%, transparent 70%)",
        }}
      />
      <div className="container-wide relative z-10 text-center text-white">
        <AnimatedSection>
          <p className="text-xs font-semibold uppercase tracking-widest text-gold mb-4">
            {t.cta.eyebrow}
          </p>
          <h2 className="font-serif text-3xl md:text-5xl font-light max-w-2xl mx-auto leading-snug">
            {t.cta.headline}
          </h2>
          <p className="mt-5 text-white/60 max-w-lg mx-auto">
            {t.cta.sub}
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              {t.cta.btn1}
            </a>
            <Link href="/contact/" className="btn-outline">
              {t.cta.btn2}
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
