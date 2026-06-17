import { AnimatedSection } from "@/components/AnimatedSection";
import { CAPABILITIES } from "@/lib/content";

export function EarlyStage() {
  return (
    <section className="section-pad bg-[var(--bg)]">
      <div className="container-wide">
        <AnimatedSection>
          <p className="text-xs font-semibold uppercase tracking-widest text-gold mb-3">
            Capabilities
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-light">
            Capabilities & Example Engagements
          </h2>
          <p className="mt-4 text-[var(--muted)] max-w-lg">
            Examples of the types of engagements we design and deliver. These
            illustrate our approach and methodology — not fabricated case studies.
          </p>
        </AnimatedSection>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          {CAPABILITIES.map((item, i) => (
            <AnimatedSection key={item.title} delay={i * 0.1}>
              <div className="card-base p-7 h-full flex flex-col">
                <p className="text-3xl mb-4">{item.icon}</p>
                <h3 className="font-serif text-xl font-medium mb-5">
                  {item.title}
                </h3>
                <div className="space-y-4 flex-1">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-gold mb-1.5">
                      Challenge
                    </p>
                    <p className="text-sm leading-relaxed text-[var(--muted)]">
                      {item.challenge}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-gold mb-1.5">
                      Approach
                    </p>
                    <p className="text-sm leading-relaxed text-[var(--muted)]">
                      {item.approach}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-gold mb-1.5">
                      Potential Outcome
                    </p>
                    <p className="text-sm leading-relaxed text-[var(--muted)]">
                      {item.outcome}
                    </p>
                  </div>
                </div>
                <div className="mt-5 pt-4 border-t border-[var(--border)]">
                  <span className="text-xs text-[var(--muted)] italic">
                    Example engagement — space reserved for future case study
                  </span>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.3}>
          <p className="mt-10 text-sm text-[var(--muted)] text-center max-w-lg mx-auto">
            Real client outcomes will be added as engagements mature and
            permissions allow. We do not fabricate results or client claims.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
