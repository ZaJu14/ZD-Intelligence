import Link from "next/link";
import { AnimatedSection } from "@/components/AnimatedSection";

export function CtaBand() {
  return (
    <section className="section-pad bg-navy relative overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(184,147,63,0.12) 0%, transparent 70%)",
        }}
      />
      <div className="container-wide relative z-10 text-center text-white">
        <AnimatedSection>
          <p className="text-xs font-semibold uppercase tracking-widest text-gold mb-4">
            Get Started
          </p>
          <h2 className="font-serif text-3xl md:text-5xl font-light max-w-2xl mx-auto leading-snug">
            Ready to put AI to work for your organisation?
          </h2>
          <p className="mt-5 text-white/60 max-w-lg mx-auto">
            Book a free 30-minute discovery call. No jargon, no commitment — just
            a clear picture of what AI can do for you.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/book/" className="btn-primary">
              Book Free Discovery Call
            </Link>
            <Link href="/contact/" className="btn-outline">
              Send a Message
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
