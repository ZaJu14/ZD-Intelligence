"use client";

import { useState } from "react";
import { AnimatedSection } from "@/components/AnimatedSection";
import { FAQ_ITEMS } from "@/lib/content";

export function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="section-pad bg-[var(--bg)]">
      <div className="container-wide max-w-3xl">
        <AnimatedSection>
          <p className="text-xs font-semibold uppercase tracking-widest text-gold mb-3">
            FAQs
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-light mb-10">
            Common questions
          </h2>
        </AnimatedSection>

        <div className="divide-y divide-[var(--border)]">
          {FAQ_ITEMS.map((item, i) => (
            <AnimatedSection key={i} delay={i * 0.05}>
              <div>
                <button
                  className="w-full flex items-center justify-between py-5 text-left gap-4"
                  onClick={() => setOpen(open === i ? null : i)}
                  aria-expanded={open === i}
                >
                  <span className="font-medium text-[var(--fg)]">
                    {item.question}
                  </span>
                  <ChevronIcon open={open === i} />
                </button>
                {open === i && (
                  <p className="pb-5 text-sm leading-relaxed text-[var(--muted)]">
                    {item.answer}
                  </p>
                )}
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`flex-shrink-0 transition-transform duration-200 text-gold ${open ? "rotate-180" : ""}`}
    >
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}
