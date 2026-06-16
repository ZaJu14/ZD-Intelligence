import type { Metadata } from "next";
import { Hero } from "@/components/home/Hero";
import { Pillars } from "@/components/home/Pillars";
import { ServicesGrid } from "@/components/home/ServicesGrid";
import { AboutStrip } from "@/components/home/AboutStrip";
import { Process } from "@/components/home/Process";
import { EarlyStage } from "@/components/home/EarlyStage";
import { FAQ } from "@/components/home/FAQ";
import { CtaBand } from "@/components/home/CtaBand";

export const metadata: Metadata = {
  title: "ZAI Intelligence — AI Automation & Intelligence Systems",
  description:
    "ZAI Intelligence designs and builds AI automation workflows, intelligence systems, and data pipelines for modern businesses. Production-ready. Bilingual. Outcome-focused.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <Pillars />
      <ServicesGrid />
      <AboutStrip />
      <Process />
      <EarlyStage />
      <FAQ />
      <CtaBand />
    </>
  );
}
