import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/shared/PageHero";
import { AnimatedSection } from "@/components/AnimatedSection";
import { CtaBand } from "@/components/home/CtaBand";
import { LINKEDIN_URL } from "@/lib/config";

export const metadata: Metadata = {
  title: "About",
  description:
    "ZAI Intelligence — a focused AI practice that designs and builds automation systems, intelligence pipelines, and governance frameworks for modern businesses.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        label="Our Approach"
        title="We build AI systems that work in the real world."
        subtitle="No slide decks, no vague roadmaps. We design, build, and deploy AI automation and intelligence systems — and we stay accountable for the outcomes."
      />

      <section className="section-pad bg-[var(--bg)]">
        <div className="container-wide grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <AnimatedSection>
            <h2 className="font-serif text-2xl md:text-3xl font-light mb-6">
              Why we exist
            </h2>
            <div className="space-y-4 text-[var(--muted)] leading-relaxed">
              <p>
                Most organisations know AI can help them. The hard part is
                turning that knowledge into a working system — one that
                integrates with real data, handles edge cases, and keeps
                working six months after launch.
              </p>
              <p>
                ZAI Intelligence was built to close that gap. We focus on the
                execution layer: designing systems that fit your operations,
                building them with production-grade rigour, and supporting
                them long enough to matter.
              </p>
              <p>
                We work in Arabic and English, remotely or on-site, with
                organisations of any size. The only constant is that we stay
                focused on outcomes — not on impressive-looking deliverables
                that gather dust.
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
                body: "To make AI automation practical, measurable, and genuinely useful — for organisations that want results, not hype.",
                icon: "🎯",
              },
              {
                title: "Our Method",
                body: "We start with your operations, not with technology. Every system we build is designed around your data, your constraints, and your team's ability to use and maintain it.",
                icon: "🔬",
              },
              {
                title: "Our Commitment",
                body: "We are an early-stage practice. We will not fabricate case studies or inflate credentials. We let our work speak for itself as it grows.",
                icon: "🤝",
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
              How We Operate
            </p>
            <h2 className="font-serif text-3xl font-light mb-10">
              Remote-first. Globally capable.
            </h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              {
                icon: "🌐",
                title: "No Geographic Limits",
                desc: "We serve clients remotely across any timezone. If you have data and a problem to solve, location is not a constraint.",
              },
              {
                icon: "🗣️",
                title: "Arabic & English",
                desc: "We work fluently in both languages — in meetings, in documentation, and in the systems we build.",
              },
              {
                icon: "⚡",
                title: "Async-Capable",
                desc: "We adapt to your working rhythm. Structured check-ins, clear milestones, and transparent communication — always.",
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
