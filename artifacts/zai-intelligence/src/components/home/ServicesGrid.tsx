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
            Four focused service areas
          </h2>
          <p className="mt-4 text-[var(--muted)] max-w-lg">
            From strategy to implementation — practical AI consulting, training,
            automation, and governance services for modern organisations.
          </p>
        </AnimatedSection>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          {SERVICES.map((s, i) => (
            <AnimatedSection key={s.slug} delay={i * 0.1}>
              <div className="card-base p-8 h-full flex flex-col">
                <p className="text-4xl mb-5">{s.icon}</p>
                <p className="text-xs font-semibold uppercase tracking-widest text-gold mb-2">
                  {s.tagline}
                </p>
                <h3 className="font-serif text-2xl font-medium mb-3">
                  {s.title}
                </h3>
                <p className="text-sm leading-relaxed text-[var(--muted)] flex-1 mb-4">
                  {s.summary}
                </p>
                <ul className="space-y-1.5 mb-6">
                  {s.outcomes.map((o) => (
                    <li key={o} className="flex items-start gap-2 text-xs text-[var(--muted)]">
                      <span className="text-gold mt-0.5 flex-shrink-0">›</span>
                      {o}
                    </li>
                  ))}
                </ul>
                <Link
                  href={`/services/${s.slug}/`}
                  className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-gold hover:text-gold-light transition-colors"
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
