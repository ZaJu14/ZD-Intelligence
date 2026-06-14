import type { Metadata } from "next";
import { Hero } from "@/components/home/Hero";
import { Pillars } from "@/components/home/Pillars";
import { ServicesGrid } from "@/components/home/ServicesGrid";
import { AboutStrip } from "@/components/home/AboutStrip";
import { Process } from "@/components/home/Process";
import { Testimonials } from "@/components/home/Testimonials";
import { FAQ } from "@/components/home/FAQ";
import { CtaBand } from "@/components/home/CtaBand";

export const metadata: Metadata = {
  title: "ZD Intelligence — AI Consulting for GCC & International Organisations",
  description:
    "ZD Intelligence helps organisations across the GCC and worldwide unlock the power of AI through productivity automation, workforce training, and robust governance frameworks.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <Pillars />
      <ServicesGrid />
      <AboutStrip />
      <Process />
      <Testimonials />
      <FAQ />
      <CtaBand />
    </>
  );
}
