import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/shared/PageHero";
import { AnimatedSection } from "@/components/AnimatedSection";
import { CtaBand } from "@/components/home/CtaBand";
import { SERVICES } from "@/lib/content";

export const metadata: Metadata = {
  title: "AI Strategy & Governance",
  description:
    "Develop a clear AI roadmap, implement governance frameworks, and ensure your AI initiatives deliver results safely and in compliance.",
};

const service = SERVICES[2]!;

export default function AIStrategyPage() {
  return (
    <>
      <PageHero
        label={service.tagline}
        title={service.title}
        subtitle={service.summary}
      />

      <section className="section-pad bg-[var(--bg)]">
        <div className="container-wide grid grid-cols-1 lg:grid-cols-2 gap-16">
          <AnimatedSection>
            <h2 className="font-serif text-2xl font-light mb-6">
              What we deliver
            </h2>
            <p className="text-[var(--muted)] leading-relaxed mb-8">
              {service.description}
            </p>
            <Link href="/book/" className="btn-primary">
              {service.cta}
            </Link>
          </AnimatedSection>

          <AnimatedSection delay={0.15}>
            <h3 className="font-serif text-xl font-light mb-6 text-[var(--muted)]">
              What you get
            </h3>
            <ul className="space-y-4">
              {service.outcomes.map((o, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-gold mt-0.5 flex-shrink-0 text-lg">✓</span>
                  <p className="text-sm leading-relaxed text-[var(--fg)]">{o}</p>
                </li>
              ))}
            </ul>
          </AnimatedSection>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
