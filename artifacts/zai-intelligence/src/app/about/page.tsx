import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/shared/PageHero";
import { AnimatedSection } from "@/components/AnimatedSection";
import { CtaBand } from "@/components/home/CtaBand";
import { LINKEDIN_URL } from "@/lib/config";

export const metadata: Metadata = {
  title: "About",
  description:
    "ZAI Intelligence — founded in Dubai by AI practitioners with deep GCC industry experience. We combine technical expertise with regional fluency.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        label="Our Story"
        title="Built in the Gulf, for the Gulf"
        subtitle="We founded ZAI Intelligence because GCC businesses deserved an AI partner that actually understood the region — its languages, its regulations, and its ambitions."
      />

      <section className="section-pad bg-[var(--bg)]">
        <div className="container-wide grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <AnimatedSection>
            <h2 className="font-serif text-2xl md:text-3xl font-light mb-6">
              Why we exist
            </h2>
            <div className="space-y-4 text-[var(--muted)] leading-relaxed">
              <p>
                Too many AI consulting engagements end with a slide deck and a
                recommendation to &ldquo;explore further.&rdquo; Too many
                workshops are designed for Western corporate audiences and
                delivered through interpreters.
              </p>
              <p>
                We set out to build the practice we always wished existed — one
                that combines deep technical execution with regional cultural
                fluency, bilingual delivery, and a hard commitment to leaving
                capability inside your organisation.
              </p>
              <p>
                Our team has led AI programmes across government, financial
                services, healthcare, and retail across the UAE, KSA, and
                Qatar. We have seen what works, what does not, and what the
                region&apos;s unique operating context demands.
              </p>
            </div>

            <Link
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary mt-8 inline-flex"
            >
              Connect on LinkedIn
            </Link>
          </AnimatedSection>

          <div className="space-y-6">
            {[
              {
                title: "Our Mission",
                body: "To accelerate AI adoption across GCC organisations in a way that is ethical, practical, and deeply embedded in regional context.",
                icon: "🎯",
              },
              {
                title: "Our Approach",
                body: "We work alongside your team — not at arm's length — transferring knowledge at every step so the capability stays in your organisation long after we leave.",
                icon: "🤝",
              },
              {
                title: "Our Values",
                body: "Precision over hype. Partnership over dependency. Measurable outcomes over impressive PowerPoints. Arabic and English, with equal fluency.",
                icon: "⚖️",
              },
            ].map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 0.12}>
                <div className="card-base p-6 flex gap-4">
                  <p className="text-2xl flex-shrink-0">{item.icon}</p>
                  <div>
                    <h3 className="font-serif text-lg font-medium mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-[var(--muted)]">
                      {item.body}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-[var(--bg-card)]">
        <div className="container-wide">
          <AnimatedSection>
            <p className="text-xs font-semibold uppercase tracking-widest text-gold mb-3">
              Our Footprint
            </p>
            <h2 className="font-serif text-3xl font-light mb-10">
              Where we work
            </h2>
          </AnimatedSection>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {[
              { country: "UAE", flag: "🇦🇪", desc: "Headquartered in Dubai" },
              { country: "KSA", flag: "🇸🇦", desc: "Active engagements in Riyadh" },
              { country: "Qatar", flag: "🇶🇦", desc: "Government & energy sector" },
              { country: "Regional", flag: "🌍", desc: "Pan-GCC reach" },
            ].map((c, i) => (
              <AnimatedSection key={c.country} delay={i * 0.1}>
                <div className="card-base p-6 text-center">
                  <p className="text-4xl mb-3">{c.flag}</p>
                  <p className="font-serif text-lg font-medium">{c.country}</p>
                  <p className="text-xs text-[var(--muted)] mt-1">{c.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
