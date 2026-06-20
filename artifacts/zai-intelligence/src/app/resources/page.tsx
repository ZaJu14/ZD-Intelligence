"use client";

import { useState } from "react";
import { PageHero } from "@/components/shared/PageHero";
import { AnimatedSection } from "@/components/AnimatedSection";
import { CtaBand } from "@/components/home/CtaBand";
import { useLanguage } from "@/lib/i18n";
import { RESOURCES } from "@/content/resources";

export default function ResourcesPage() {
  const [activeKey, setActiveKey] = useState("all");
  const { lang, t } = useLanguage();
  const s = t.resources;

  const categories = [
    { key: "all", label: s.all },
    { key: "guide", label: s.guide },
    { key: "article", label: s.article },
  ];

  const filtered =
    activeKey === "all"
      ? RESOURCES
      : RESOURCES.filter((r) => r.resourceType === activeKey);

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
            {filtered.map((r, i) => {
              const content = r[lang] as {
                title: string;
                summary?: string;
                description?: string;
                author: string;
                tags: string[];
              };
              const desc = content.summary ?? content.description ?? "";
              const categoryLabel =
                r.resourceType === "guide" ? s.guide : s.article;
              return (
                <AnimatedSection key={r.id} delay={i * 0.08}>
                  <div className="card-base p-7 flex flex-col h-full">
                    <div className="flex items-center justify-between gap-3 mb-4">
                      <span className="text-xs font-semibold uppercase tracking-widest text-gold border border-gold/30 rounded-full px-3 py-0.5">
                        {categoryLabel}
                      </span>
                      <span className="text-xs text-[var(--muted)]">
                        {r.estimatedReadingTime} {s.readTime}
                      </span>
                    </div>
                    <h3 className="font-serif text-xl font-medium mb-3">
                      {content.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-[var(--muted)] flex-1">
                      {desc}
                    </p>
                    <div className="mt-5 flex items-center justify-between">
                      <p className="text-sm font-semibold text-gold/50 italic">
                        {s.comingSoon}
                      </p>
                      {r.resourceType === "guide" && "difficultyLevel" in r && (
                        <span className="text-xs text-[var(--muted)] border border-[var(--border)] rounded-full px-2 py-0.5">
                          {s.difficulty[r.difficultyLevel as keyof typeof s.difficulty]}
                        </span>
                      )}
                    </div>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
