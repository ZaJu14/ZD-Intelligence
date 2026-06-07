"use client";

import { useState } from "react";
import { PageHero } from "@/components/shared/PageHero";
import { AnimatedSection } from "@/components/AnimatedSection";
import { CtaBand } from "@/components/home/CtaBand";
import { RESOURCES } from "@/lib/content";

const CATEGORIES = ["All", "Guide", "Case Study", "Article", "Webinar"];

export default function ResourcesPage() {
  const [active, setActive] = useState("All");
  const filtered =
    active === "All" ? RESOURCES : RESOURCES.filter((r) => r.category === active);

  return (
    <>
      <PageHero
        label="Knowledge Hub"
        title="GCC AI Resources"
        subtitle="Practical guides, case studies, and insights for GCC executives navigating the AI landscape."
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
                <a
                  href={r.href}
                  className="card-base p-7 flex flex-col h-full group"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-xs font-semibold uppercase tracking-widest text-gold border border-gold/30 rounded-full px-3 py-0.5">
                      {r.category}
                    </span>
                    <span className="text-xs text-[var(--muted)]">{r.date}</span>
                  </div>
                  <h3 className="font-serif text-xl font-medium mb-3 group-hover:text-gold transition-colors">
                    {r.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-[var(--muted)] flex-1">
                    {r.excerpt}
                  </p>
                  <p className="mt-5 text-sm font-semibold text-gold inline-flex items-center gap-1">
                    Read more
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                    </svg>
                  </p>
                </a>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
