"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export function AboutStrip() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-pad bg-[var(--bg-card)] overflow-hidden relative">
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
            A trusted AI consulting{" "}
            <span className="italic gradient-text">partner.</span>
          </h2>
          <p className="text-[var(--muted)] leading-relaxed mb-4">
            ZD Intelligence is a focused AI consulting practice that helps
            organisations adopt AI, automate operations, and implement secure
            intelligence systems that deliver measurable business value.
          </p>
          <p className="text-[var(--muted)] leading-relaxed mb-8">
            We work in English and Arabic, remotely and on-site — serving GCC
            organisations and international businesses with the same rigour and
            commitment.
          </p>
          <Link href="/about/" className="btn-primary">
            Our Approach
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="grid grid-cols-2 gap-4"
        >
          {[
            { icon: "🎯", label: "Strategy", desc: "AI roadmaps & advisory" },
            { icon: "🎓", label: "Training", desc: "Workshops & programmes" },
            { icon: "⚡", label: "Automation", desc: "AI-powered workflows" },
            { icon: "🔒", label: "Governance", desc: "Secure, responsible AI" },
          ].map((item) => (
            <div
              key={item.label}
              className="bg-[var(--bg)] border border-[var(--border)] rounded-xl p-5 hover:border-gold/40 transition-colors"
            >
              <p className="text-2xl mb-2">{item.icon}</p>
              <p className="text-sm font-semibold">{item.label}</p>
              <p className="text-xs text-[var(--muted)] mt-1">{item.desc}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
