import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/shared/PageHero";
import { AnimatedSection } from "@/components/AnimatedSection";
import { CtaBand } from "@/components/home/CtaBand";
import { SERVICES } from "@/lib/content";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Three focused AI practice areas — productivity automation, workforce training, and AI governance — designed for GCC organisations.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        label="Services"
        title="What we do — and how we do it"
        subtitle="Three focused practice areas, each designed to deliver measurable results without disrupting your operations."
      />

      <section className="section-pad bg-[var(--bg)]">
        <div className="container-wide grid grid-cols-1 md:grid-cols-3 gap-8">
          {SERVICES.map((s, i) => (
            <AnimatedSection key={s.slug} delay={i * 0.12}>
              <div className="card-base p-8 h-full flex flex-col">
                <p className="text-4xl mb-5">{s.icon}</p>
                <p className="text-xs font-semibold uppercase tracking-widest text-gold mb-2">
                  {s.tagline}
                </p>
                <h2 className="font-serif text-2xl font-medium mb-3">
                  {s.title}
                </h2>
                <p className="text-sm leading-relaxed text-[var(--muted)] flex-1">
                  {s.summary}
                </p>
                <Link
                  href={`/services/${s.slug}/`}
                  className="btn-primary mt-6 text-sm py-2.5"
                >
                  {s.cta}
                </Link>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      <CtaBand />
    </>
  );
}
