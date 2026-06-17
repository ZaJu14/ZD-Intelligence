"use client";

import { useState } from "react";
import { PageHero } from "@/components/shared/PageHero";
import { AnimatedSection } from "@/components/AnimatedSection";
import { CtaBand } from "@/components/home/CtaBand";
import { useLanguage } from "@/lib/i18n";

export default function ResourcesPage() {
  const [activeKey, setActiveKey] = useState("all");
  const { t } = useLanguage();
  const s = t.resources;

  const categories = [
    { key: "all", label: s.all },
    { key: "guide", label: s.guide },
    { key: "article", label: s.article },
  ];

  const guideWords = ["Guide", "دليل"];
  const articleWords = ["Article", "مقال"];

  const filtered =
    activeKey === "all"
      ? s.items
      : activeKey === "guide"
      ? s.items.filter((r) => guideWords.includes(r.category))
      : s.items.filter((r) => articleWords.includes(r.category));

  return (
    <>
      <PageHero label={s.label} title={s.heading} subtitle={s.sub} />

      <section className="section-pad bg-[var(--bg)]">
        <div className="container-wide">
          <div className="flex flex-wrap gap-2 mb-10">
            {categories.map((c) => (
              <button
                key={c.key}
                onClick={() => setActiveKey(c.key)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors border ${
                  activeKey === c.key
                    ? "bg-gold text-navy border-gold"
                    : "border-[var(--border)] text-[var(--muted)] hover:border-gold hover:text-gold"
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((r, i) => (
              <AnimatedSection key={r.title} delay={i * 0.08}>
                <div className="card-base p-7 flex flex-col h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-xs font-semibold uppercase tracking-widest text-gold border border-gold/30 rounded-full px-3 py-0.5">
                      {r.category}
                    </span>
                  </div>
                  <h3 className="font-serif text-xl font-medium mb-3">
                    {r.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-[var(--muted)] flex-1">
                    {r.excerpt}
                  </p>
                  <p className="mt-5 text-sm font-semibold text-gold/50 italic">
                    {s.comingSoon}
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
