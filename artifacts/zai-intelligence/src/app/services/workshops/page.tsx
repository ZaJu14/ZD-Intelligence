import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/shared/PageHero";
import { AnimatedSection } from "@/components/AnimatedSection";
import { CtaBand } from "@/components/home/CtaBand";
import { SERVICES } from "@/lib/content";

export const metadata: Metadata = {
  title: "Workshops & Training",
  description:
    "Hands-on, Arabic & English AI training sessions that take your GCC teams from AI-curious to AI-confident in days.",
};

const service = SERVICES[1]!;

export default function WorkshopsPage() {
  return (
    <>
      <PageHero
        label={service.tagline}
        title={service.title}
        subtitle={service.summary}
      />

      <section className="section-pad bg-[var(--bg)]">
        <div className="container-wide grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
          <AnimatedSection>
            <h2 className="font-serif text-2xl md:text-3xl font-light mb-6 gold-underline pb-1">
              How Our Workshops Work
            </h2>
            <p className="text-[var(--muted)] leading-relaxed">
              {service.description}
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.15}>
            <h2 className="font-serif text-2xl md:text-3xl font-light mb-6 gold-underline pb-1">
              What You Get
            </h2>
            <ul className="space-y-4">
              {service.outcomes.map((o) => (
                <li key={o} className="flex items-start gap-3">
                  <span className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-gold/20 flex items-center justify-center">
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-gold">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </span>
                  <span className="text-sm leading-relaxed text-[var(--fg)]">{o}</span>
                </li>
              ))}
            </ul>
            <Link href="/book/" className="btn-primary mt-8 inline-flex">
              {service.cta}
            </Link>
          </AnimatedSection>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
