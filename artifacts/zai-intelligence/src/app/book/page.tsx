import type { Metadata } from "next";
import { PageHero } from "@/components/shared/PageHero";
import { AnimatedSection } from "@/components/AnimatedSection";
import { CalendlyEmbed } from "@/components/shared/CalendlyEmbed";

export const metadata: Metadata = {
  title: "Book a Free Call",
  description:
    "Schedule your free 30-minute AI discovery call with ZAI Intelligence. No jargon, no commitment — just clear next steps.",
};

export default function BookPage() {
  return (
    <>
      <PageHero
        label="Free Discovery Call"
        title="Book your free 30-minute session"
        subtitle="A focused conversation to understand your operations, identify the highest-value automation opportunity, and outline a realistic path forward. No jargon, no commitment."
      />

      <section className="section-pad bg-[var(--bg)]">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mb-12">
            {[
              { icon: "🕐", title: "30 Minutes", desc: "Focused and efficient — we respect your time" },
              { icon: "🆓", title: "No Charge", desc: "Completely free, no strings attached" },
              { icon: "📋", title: "Clear Takeaway", desc: "You will leave with at least one concrete next step" },
            ].map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 0.1}>
                <div className="card-base p-6 flex items-start gap-4">
                  <p className="text-3xl">{item.icon}</p>
                  <div>
                    <p className="font-serif text-lg font-medium">{item.title}</p>
                    <p className="text-sm text-[var(--muted)] mt-1">{item.desc}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection>
            <CalendlyEmbed />
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
