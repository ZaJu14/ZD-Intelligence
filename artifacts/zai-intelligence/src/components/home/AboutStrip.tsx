"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export function AboutStrip() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-pad bg-navy text-white overflow-hidden relative">
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 70% at 10% 50%, rgba(184,147,63,0.08) 0%, transparent 60%)",
        }}
      />
      <div className="container-wide relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="text-xs font-semibold uppercase tracking-widest text-gold mb-4">
            About ZD Intelligence
          </p>
          <h2 className="font-serif text-3xl md:text-5xl font-light leading-snug mb-6">
            We speak AI.{" "}
            <span className="italic gradient-text">We speak Arabic.</span>
            <br />
            We speak business.
          </h2>
          <p className="text-white/70 leading-relaxed mb-4">
            ZD Intelligence was built by practitioners who have led AI
            programmes across the GCC and with international organisations
            worldwide. We combine deep technical execution with cultural
            fluency — and a hard commitment to leaving capability inside
            your organisation.
          </p>
          <p className="text-white/70 leading-relaxed mb-8">
            We are remote-first by design. That means we work with the best
            talent globally and serve clients wherever they are — no
            boundaries, no dependency on geography.
          </p>
          <Link href="/about/" className="btn-primary">
            Our Story
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="grid grid-cols-2 gap-4"
        >
          {[
            { icon: "🌐", label: "Global Reach", desc: "GCC & International" },
            { icon: "🗣️", label: "Bilingual", desc: "Arabic & English" },
            { icon: "📊", label: "Outcome-Led", desc: "ROI-first delivery" },
            { icon: "🔒", label: "Compliant", desc: "Built-in governance" },
          ].map((item) => (
            <div
              key={item.label}
              className="bg-white/5 border border-white/10 rounded-xl p-5"
            >
              <p className="text-2xl mb-2">{item.icon}</p>
              <p className="text-sm font-semibold">{item.label}</p>
              <p className="text-xs text-white/50 mt-1">{item.desc}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
