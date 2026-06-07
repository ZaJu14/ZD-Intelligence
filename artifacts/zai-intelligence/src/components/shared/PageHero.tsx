import { AnimatedSection } from "@/components/AnimatedSection";

interface Props {
  label?: string;
  title: string;
  subtitle?: string;
}

export function PageHero({ label, title, subtitle }: Props) {
  return (
    <section className="bg-navy text-white pt-32 pb-20">
      <div className="container-wide">
        {label && (
          <AnimatedSection>
            <p className="text-xs font-semibold uppercase tracking-widest text-gold mb-4">
              {label}
            </p>
          </AnimatedSection>
        )}
        <AnimatedSection delay={0.1}>
          <h1 className="font-serif text-4xl md:text-6xl font-light leading-tight max-w-3xl">
            {title}
          </h1>
        </AnimatedSection>
        {subtitle && (
          <AnimatedSection delay={0.2}>
            <p className="mt-6 text-lg text-white/70 max-w-2xl leading-relaxed">
              {subtitle}
            </p>
          </AnimatedSection>
        )}
      </div>
    </section>
  );
}
