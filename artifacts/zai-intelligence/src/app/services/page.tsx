import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/shared/PageHero";
import { AnimatedSection } from "@/components/AnimatedSection";
import { CtaBand } from "@/components/home/CtaBand";
import { SERVICES } from "@/lib/content";

export const metadata: Metadata = {
  title: "Services",
  description:
    "AI consulting, training, automation, and governance services — practical AI adoption for modern organisations.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        label="Services"
        title="Four focused service areas"
        subtitle="From strategy and training to automation and governance — practical AI services designed around measurable outcomes."
      />

      <section className="section-pad bg-[var(--bg)]">
        <div className="container-wide grid grid-cols-1 md:grid-cols-2 gap-8">
          {SERVICES.map((s, i) => (
            <AnimatedSection key={s.slug} delay={i * 0.1}>
              <div className="card-base p-8 h-full flex flex-col">
                <p className="text-4xl mb-5">{s.icon}</p>
                <p className="text-xs font-semibold uppercase tracking-widest text-gold mb-2">
                  {s.tagline}
                </p>
                <h2 className="font-serif text-2xl font-medium mb-3">
                  {s.title}
                </h2>
                <p className="text-sm leading-relaxed text-[var(--muted)] flex-1 mb-4">
                  {s.summary}
                </p>
                <ul className="space-y-2 mb-6">
                  {s.outcomes.map((o) => (
                    <li key={o} className="flex items-start gap-2 text-sm text-[var(--muted)]">
                      <span className="text-gold mt-0.5 flex-shrink-0">✓</span>
                      {o}
                    </li>
                  ))}
                </ul>
                <Link
                  href={`/services/${s.slug}/`}
                  className="btn-primary text-sm py-2.5"
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
