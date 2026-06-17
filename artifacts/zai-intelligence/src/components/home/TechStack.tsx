import { AnimatedSection } from "@/components/AnimatedSection";
import { TECH_STACK } from "@/lib/content";

export function TechStack() {
  return (
    <section className="section-pad bg-[var(--bg-card)]">
      <div className="container-wide">
        <AnimatedSection>
          <p className="text-xs font-semibold uppercase tracking-widest text-gold mb-3">
            Technology
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-light max-w-xl">
            Technologies we work with
          </h2>
          <p className="mt-4 text-[var(--muted)] max-w-lg">
            We are vendor-neutral and select the right tools for each engagement.
            These are the platforms and frameworks we work with most frequently.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="mt-10 flex flex-wrap gap-3">
            {TECH_STACK.map((tech) => (
              <div
                key={tech.name}
                className="group flex flex-col items-start gap-1 bg-[var(--bg)] border border-[var(--border)] rounded-xl px-5 py-3.5 hover:border-gold/50 transition-colors"
              >
                <span className="text-sm font-semibold text-[var(--fg)]">
                  {tech.name}
                </span>
                <span className="text-xs text-gold/70 font-medium">
                  {tech.category}
                </span>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
