import type { Metadata } from "next";
import { Hero } from "@/components/home/Hero";
import { ServicesGrid } from "@/components/home/ServicesGrid";
import { WhoWeWorkWith } from "@/components/home/WhoWeWorkWith";
import { Pillars } from "@/components/home/Pillars";
import { TechStack } from "@/components/home/TechStack";
import { Process } from "@/components/home/Process";
import { EarlyStage } from "@/components/home/EarlyStage";
import { FounderSection } from "@/components/home/FounderSection";
import { FAQ } from "@/components/home/FAQ";
import { CtaBand } from "@/components/home/CtaBand";

export const metadata: Metadata = {
  title: "ZD Intelligence — AI Consulting, Automation & Intelligence Systems",
  description:
    "ZD Intelligence helps organisations identify AI opportunities, automate operations, and implement secure intelligence systems that deliver measurable business value. Serving GCC and international organisations in English and Arabic.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesGrid />
      <WhoWeWorkWith />
      <Pillars />
      <TechStack />
      <Process />
      <EarlyStage />
      <FounderSection />
      <FAQ />
      <CtaBand />
    </>
  );
}
