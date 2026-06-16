import { AnimatedSection } from "@/components/AnimatedSection";
import { EARLY_STAGE_PROJECTS } from "@/lib/content";

export function EarlyStage() {
  return (
    <section className="section-pad bg-[var(--bg-card)]">
      <div className="container-wide">
        <AnimatedSection>
          <p className="text-xs font-semibold uppercase tracking-widest text-gold mb-3">
            Work in Progress
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-light">
            Prototype systems & early-stage projects
          </h2>
          <p className="mt-4 text-[var(--muted)] max-w-lg">
            A snapshot of the types of systems we design and build. These are
            real solution patterns — not fictional case studies.
          </p>
        </AnimatedSection>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {EARLY_STAGE_PROJECTS.map((project, i) => (
            <AnimatedSection key={project.title} delay={i * 0.12}>
              <div className="card-base p-7 h-full flex flex-col">
                <p className="text-3xl mb-4">{project.icon}</p>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-semibold text-gold border border-gold/30 rounded-full px-3 py-0.5">
                    {project.status}
                  </span>
                </div>
                <h3 className="font-serif text-xl font-medium mb-3">
                  {project.title}
                </h3>
                <p className="text-sm leading-relaxed text-[var(--muted)] flex-1">
                  {project.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.3}>
          <p className="mt-10 text-sm text-[var(--muted)] text-center max-w-lg mx-auto">
            We are an early-stage practice. We will add real client outcomes as
            engagements mature and permissions allow. No fabricated results, ever.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
