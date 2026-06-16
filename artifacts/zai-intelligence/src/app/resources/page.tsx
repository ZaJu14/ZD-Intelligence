"use client";

import { useState } from "react";
import { PageHero } from "@/components/shared/PageHero";
import { AnimatedSection } from "@/components/AnimatedSection";
import { CtaBand } from "@/components/home/CtaBand";
import { RESOURCES } from "@/lib/content";

const CATEGORIES = ["All", "Guide", "Article"];

export default function ResourcesPage() {
  const [active, setActive] = useState("All");
  const filtered =
    active === "All" ? RESOURCES : RESOURCES.filter((r) => r.category === active);

  return (
    <>
      <PageHero
        label="Resources"
        title="Practical AI guides & insights"
        subtitle="No-fluff content on AI automation, intelligence systems, and making AI work in real organisations."
      />

      <section className="section-pad bg-[var(--bg)]">
        <div className="container-wide">
          <div className="flex flex-wrap gap-2 mb-10">
            {CATEGORIES.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors border ${
                  active === c
                    ? "bg-gold text-navy border-gold"
                    : "border-[var(--border)] text-[var(--muted)] hover:border-gold hover:text-gold"
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filtered.map((r, i) => (
              <AnimatedSection key={r.title} delay={i * 0.1}>
                <div className="card-base p-7 flex flex-col h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-xs font-semibold uppercase tracking-widest text-gold border border-gold/30 rounded-full px-3 py-0.5">
                      {r.category}
                    </span>
                    <span className="text-xs text-[var(--muted)]">{r.date}</span>
                  </div>
                  <h3 className="font-serif text-xl font-medium mb-3">
                    {r.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-[var(--muted)] flex-1">
                    {r.excerpt}
                  </p>
                  <p className="mt-5 text-sm font-semibold text-gold/50 italic">
                    Coming soon
                  </p>
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
