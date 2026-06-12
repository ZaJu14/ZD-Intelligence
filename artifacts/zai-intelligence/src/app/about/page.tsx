import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/shared/PageHero";
import { AnimatedSection } from "@/components/AnimatedSection";
import { CtaBand } from "@/components/home/CtaBand";
import { LINKEDIN_URL } from "@/lib/config";

export const metadata: Metadata = {
  title: "About",
  description:
    "ZD Intelligence — a remote-first AI consultancy serving GCC and international organisations. We combine technical expertise with cultural fluency.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        label="Our Story"
        title="Built on expertise. Delivered anywhere."
        subtitle="We founded ZD Intelligence because ambitious organisations — in the GCC and across the world — deserved an AI partner that works the way the future works: remote-first, outcome-driven, and genuinely bilingual."
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
                workshops are designed for one market and delivered without
                cultural or linguistic nuance.
              </p>
              <p>
                We set out to build the practice we always wished existed — one
                that combines deep technical execution with genuine cultural
                fluency, bilingual delivery, and a hard commitment to leaving
                capability inside your organisation.
              </p>
              <p>
                Our team has led AI programmes across the GCC and with
                international enterprises across multiple sectors. We believe
                the best work happens when talent is borderless — that is why
                we are remote-first by design, not by default.
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
                body: "To accelerate responsible AI adoption for organisations worldwide — making powerful technology practical, measurable, and truly theirs.",
                icon: "🎯",
              },
              {
                title: "Our Approach",
                body: "We work alongside your team — not at arm's length — transferring knowledge at every step so the capability stays in your organisation long after we leave.",
                icon: "🤝",
              },
              {
                title: "Our Values",
                body: "Precision over hype. Partnership over dependency. Measurable outcomes over impressive PowerPoints. Remote-first, globally minded, and fluent in both Arabic and English.",
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
              How We Work
            </p>
            <h2 className="font-serif text-3xl font-light mb-10">
              Remote-first. Globally fluent.
            </h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              {
                icon: "🌐",
                title: "No Boundaries",
                desc: "We serve clients across the GCC, Europe, and beyond. If you have an internet connection, we can work together.",
              },
              {
                icon: "🗣️",
                title: "Bilingual by Default",
                desc: "Arabic and English with equal depth — no interpreters, no translation lag, no lost nuance.",
              },
              {
                icon: "⚡",
                title: "Async-First Collaboration",
                desc: "We adapt to your timezone and your workflow. Remote-first means you get the best of us, always.",
              },
            ].map((c, i) => (
              <AnimatedSection key={c.title} delay={i * 0.1}>
                <div className="card-base p-6">
                  <p className="text-3xl mb-4">{c.icon}</p>
                  <p className="font-serif text-lg font-medium mb-2">{c.title}</p>
                  <p className="text-sm text-[var(--muted)] leading-relaxed">{c.desc}</p>
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
