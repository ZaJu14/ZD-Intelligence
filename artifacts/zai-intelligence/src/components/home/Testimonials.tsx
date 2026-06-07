import { AnimatedSection } from "@/components/AnimatedSection";
import { TESTIMONIALS } from "@/lib/content";

export function Testimonials() {
  return (
    <section className="section-pad bg-[var(--bg-card)]">
      <div className="container-wide">
        <AnimatedSection>
          <p className="text-xs font-semibold uppercase tracking-widest text-gold mb-3">
            Client Stories
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-light">
            What our clients say
          </h2>
        </AnimatedSection>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <AnimatedSection key={i} delay={i * 0.12}>
              <div className="card-base p-7 h-full flex flex-col">
                <p className="text-3xl text-gold mb-4 font-serif leading-none">
                  &ldquo;
                </p>
                <blockquote className="text-sm leading-relaxed flex-1 text-[var(--fg)] mb-6">
                  {t.quote}
                </blockquote>
                <div>
                  <p className="text-sm font-semibold text-gold">{t.author}</p>
                  <p className="text-xs text-[var(--muted)]">{t.company}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
