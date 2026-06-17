import { AnimatedSection } from "@/components/AnimatedSection";
import { PILLARS } from "@/lib/content";

export function Pillars() {
  return (
    <section className="section-pad bg-[var(--bg)]">
      <div className="container-wide">
        <AnimatedSection>
          <p className="text-xs font-semibold uppercase tracking-widest text-gold mb-3">
            Why ZD Intelligence
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-light max-w-2xl">
            Why organisations choose ZD Intelligence
          </h2>
          <p className="mt-4 text-[var(--muted)] max-w-lg">
            A consulting partner focused on practical outcomes, not theoretical
            frameworks or vendor lock-in.
          </p>
        </AnimatedSection>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {PILLARS.map((p, i) => (
            <AnimatedSection key={p.title} delay={i * 0.08}>
              <div className="card-base p-6 h-full border-l-2 border-gold/30 hover:border-gold transition-colors">
                <p className="text-2xl mb-3">{p.icon}</p>
                <h3 className="font-serif text-base font-semibold mb-2">
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
