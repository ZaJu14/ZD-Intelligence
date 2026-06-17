"use client";

import { AnimatedSection } from "@/components/AnimatedSection";
import { useLanguage } from "@/lib/i18n";

export function WhoWeWorkWith() {
  const { t } = useLanguage();
  const s = t.whoWeWorkWith;

  return (
    <section className="section-pad bg-navy text-white relative overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 80% 50%, rgba(184,147,63,0.07) 0%, transparent 65%)",
        }}
      />
      <div className="container-wide relative z-10">
        <AnimatedSection>
          <p className="text-xs font-semibold uppercase tracking-widest text-gold mb-3">
            {s.eyebrow}
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-light max-w-2xl">
            {s.heading}
          </h2>
          <p className="mt-4 text-white/60 max-w-lg">
            {s.sub}
          </p>
        </AnimatedSection>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {s.items.map((item, i) => (
            <AnimatedSection key={item.title} delay={i * 0.09}>
              <div className="bg-white/5 border border-white/10 rounded-xl p-6 h-full hover:border-gold/40 transition-colors">
                <p className="text-2xl mb-3">{item.icon}</p>
                <h3 className="font-serif text-xl font-medium mb-2 text-white">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-white/60">
                  {item.body}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
