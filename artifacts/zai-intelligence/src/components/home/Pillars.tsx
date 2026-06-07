import { AnimatedSection } from "@/components/AnimatedSection";
import { PILLARS } from "@/lib/content";

export function Pillars() {
  return (
    <section className="section-pad bg-[var(--bg)]">
      <div className="container-wide">
        <AnimatedSection>
          <p className="text-xs font-semibold uppercase tracking-widest text-gold mb-3">
            Why ZAI
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-light max-w-xl">
            Principles that set us apart
          </h2>
        </AnimatedSection>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PILLARS.map((p, i) => (
            <AnimatedSection key={p.title} delay={i * 0.1}>
              <div className="card-base p-6 h-full">
                <p className="text-3xl mb-4">{p.icon}</p>
                <h3 className="font-serif text-lg font-medium mb-2">
                  {p.title}
                </h3>
                <p className="text-sm leading-relaxed text-[var(--muted)]">
                  {p.body}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
