import { AnimatedSection } from "@/components/AnimatedSection";
import { PROCESS_STEPS } from "@/lib/content";

export function Process() {
  return (
    <section className="section-pad bg-[var(--bg)]">
      <div className="container-wide">
        <AnimatedSection>
          <p className="text-xs font-semibold uppercase tracking-widest text-gold mb-3">
            How It Works
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-light">
            From first call to lasting impact
          </h2>
        </AnimatedSection>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {PROCESS_STEPS.map((step, i) => (
            <AnimatedSection key={step.number} delay={i * 0.1}>
              <div className="relative">
                <p className="font-serif text-6xl font-light text-gold/20 mb-4 select-none">
                  {step.number}
                </p>
                <div className="absolute top-2 left-0 w-8 h-px bg-gold" />
                <h3 className="font-serif text-xl font-medium mb-2">
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed text-[var(--muted)]">
                  {step.body}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
