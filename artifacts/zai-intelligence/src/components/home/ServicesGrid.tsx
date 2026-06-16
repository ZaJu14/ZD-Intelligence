import Link from "next/link";
import { AnimatedSection } from "@/components/AnimatedSection";
import { SERVICES } from "@/lib/content";

export function ServicesGrid() {
  return (
    <section className="section-pad bg-[var(--bg-card)]">
      <div className="container-wide">
        <AnimatedSection>
          <p className="text-xs font-semibold uppercase tracking-widest text-gold mb-3">
            Services
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-light max-w-xl">
            What we build for you
          </h2>
          <p className="mt-4 text-[var(--muted)] max-w-lg">
            Three focused practice areas — designed to automate operations,
            surface intelligence, and govern AI across your organisation.
          </p>
        </AnimatedSection>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {SERVICES.map((s, i) => (
            <AnimatedSection key={s.slug} delay={i * 0.12}>
              <div className="card-base p-8 h-full flex flex-col">
                <p className="text-4xl mb-5">{s.icon}</p>
                <p className="text-xs font-semibold uppercase tracking-widest text-gold mb-2">
                  {s.tagline}
                </p>
                <h3 className="font-serif text-2xl font-medium mb-3">
                  {s.title}
                </h3>
                <p className="text-sm leading-relaxed text-[var(--muted)] flex-1">
                  {s.summary}
                </p>
                <Link
                  href={`/services/${s.slug}/`}
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-gold hover:text-gold-light transition-colors"
                >
                  Learn more
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                  </svg>
                </Link>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
