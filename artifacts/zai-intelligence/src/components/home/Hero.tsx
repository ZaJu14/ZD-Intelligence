"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative bg-navy text-white overflow-hidden min-h-screen flex items-center">
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 60% 40%, rgba(184,147,63,0.10) 0%, transparent 70%)",
        }}
      />
      <div
        aria-hidden
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(184,147,63,0.4), transparent)",
        }}
      />

      <div className="container-wide relative z-10 pt-28 pb-20">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-xs font-semibold uppercase tracking-widest text-gold mb-6"
        >
          AI Consulting · GCC &amp; International
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.1 }}
          className="font-serif text-5xl md:text-7xl lg:text-8xl font-light leading-none max-w-4xl"
        >
          Intelligent AI.{" "}
          <span className="gradient-text">Built for</span>
          <br />
          <span className="italic">your world.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mt-8 text-lg md:text-xl text-white/70 max-w-xl leading-relaxed"
        >
          ZD Intelligence helps organisations across the GCC and beyond unlock
          AI productivity, build internal capability, and govern AI with
          confidence — wherever you operate.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.4 }}
          className="mt-10 flex flex-col sm:flex-row gap-4"
        >
          <Link href="/book/" className="btn-primary">
            Book Free Discovery Call
            <ArrowRight />
          </Link>
          <Link href="/services/" className="btn-outline">
            Explore Services
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-20 grid grid-cols-3 gap-8 max-w-sm border-t border-white/10 pt-8"
        >
          {[
            { num: "40+", label: "Clients Served" },
            { num: "55%", label: "Avg. Time Saved" },
            { num: "100%", label: "Remote-Ready" },
          ].map((s) => (
            <div key={s.label}>
              <p className="font-serif text-3xl font-semibold gradient-text">
                {s.num}
              </p>
              <p className="text-xs text-white/50 mt-1">{s.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function ArrowRight() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}
