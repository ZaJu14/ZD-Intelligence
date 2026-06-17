"use client";

import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const EXPERTISE = [
  "AI Engineering",
  "AI Automation",
  "Project Coordination",
  "Cybersecurity",
  "English & Arabic",
];

export function FounderSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="section-pad bg-navy text-white overflow-hidden relative"
    >
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 70% at 90% 50%, rgba(184,147,63,0.08) 0%, transparent 60%)",
        }}
      />
      <div className="container-wide relative z-10">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-xs font-semibold uppercase tracking-widest text-gold mb-10"
        >
          Founder & Principal Consultant
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="flex flex-col sm:flex-row gap-8 items-start"
          >
            <div className="flex-shrink-0">
              <div className="w-36 h-36 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center">
                <span className="text-5xl opacity-40">👤</span>
              </div>
              <p className="text-xs text-white/30 mt-2 text-center">
                Photo coming soon
              </p>
            </div>
            <div>
              <h2 className="font-serif text-2xl md:text-3xl font-light mb-1">
                Zaid Aljumaa
              </h2>
              <p className="text-gold text-sm font-medium mb-5">
                Founder & Principal Consultant
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {EXPERTISE.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs font-medium text-white/80 border border-white/20 rounded-full px-3 py-1 bg-white/5"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="space-y-4"
          >
            <p className="text-white/75 leading-relaxed">
              Zaid Aljumaa is an AI Engineer, Project Coordinator, and Technology
              Consultant focused on helping organisations adopt AI, automate
              business processes, and implement secure intelligence systems.
            </p>
            <p className="text-white/75 leading-relaxed">
              His background combines AI, automation, project coordination, and
              cybersecurity — allowing him to bridge the gap between business
              objectives and practical technology implementation.
            </p>
            <p className="text-white/75 leading-relaxed">
              Through ZD Intelligence, he helps organisations identify AI
              opportunities, improve operational efficiency, and build solutions
              that deliver measurable outcomes.
            </p>
            <div className="pt-4">
              <Link href="/about/" className="btn-outline text-sm py-2.5">
                Learn More About Our Approach
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
