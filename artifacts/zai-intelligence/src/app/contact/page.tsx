"use client";

import { useState } from "react";
import { PageHero } from "@/components/shared/PageHero";
import { AnimatedSection } from "@/components/AnimatedSection";
import { CalendlyEmbed } from "@/components/shared/CalendlyEmbed";
import { CONTACT_EMAIL, LINKEDIN_URL, GS_WEBHOOK_URL } from "@/lib/config";

interface FormData {
  name: string;
  email: string;
  message: string;
}

type Status = "idle" | "submitting" | "success" | "error";

export default function ContactPage() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;

    setStatus("submitting");
    setErrorMsg("");

    const payload = {
      timestamp: new Date().toISOString(),
      name: form.name.trim(),
      email: form.email.trim(),
      message: form.message.trim(),
    };

    try {
      if (!GS_WEBHOOK_URL) {
        throw new Error("NEXT_PUBLIC_GS_WEBHOOK_URL is not configured.");
      }

      await fetch(GS_WEBHOOK_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      console.error("Contact form error:", err);
      setErrorMsg(
        err instanceof Error && err.message.includes("not configured")
          ? "The contact form is not yet configured. Please email us directly."
          : "Something went wrong. Please try again or email us directly."
      );
      setStatus("error");
    }
  }

  return (
    <>
      <PageHero
        label="Get in Touch"
        title="Let's talk about your AI goals"
        subtitle="Tell us what you're trying to automate or build. We'll get back to you within one business day."
      />

      <section className="section-pad bg-[var(--bg)]">
        <div className="container-wide grid grid-cols-1 lg:grid-cols-2 gap-14">
          <AnimatedSection>
            <h2 className="font-serif text-2xl font-light mb-8">
              Contact Details
            </h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <span className="text-2xl">📧</span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-[var(--muted)] mb-1">
                    Email
                  </p>
                  <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="text-gold hover:text-gold-light transition-colors"
                  >
                    {CONTACT_EMAIL}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-2xl">🌐</span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-[var(--muted)] mb-1">
                    How We Work
                  </p>
                  <p className="text-sm text-[var(--fg)]">
                    Remote-first · Available globally · Arabic &amp; English
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-2xl">💼</span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-[var(--muted)] mb-1">
                    LinkedIn
                  </p>
                  <a
                    href={LINKEDIN_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gold hover:text-gold-light transition-colors"
                  >
                    ZAI Intelligence
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <h2 className="font-serif text-2xl font-light mb-6">
                Prefer to book a call?
              </h2>
              <CalendlyEmbed />
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.15}>
            {status === "success" ? (
              <div className="card-base p-8 text-center">
                <p className="text-5xl mb-4">✅</p>
                <h3 className="font-serif text-2xl font-light mb-3">
                  Message received
                </h3>
                <p className="text-[var(--muted)] text-sm leading-relaxed">
                  Your message has been saved. We will get back to you within
                  one business day.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="btn-outline mt-6 text-sm"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                <h2 className="font-serif text-2xl font-light mb-6">
                  Send a message
                </h2>

                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-1.5 text-[var(--fg)]"
                  >
                    Full Name <span className="text-gold">*</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={handleChange}
                    disabled={status === "submitting"}
                    className="w-full px-4 py-2.5 rounded-lg border border-[var(--border)] bg-[var(--bg-card)] text-[var(--fg)] text-sm focus:outline-none focus:ring-2 focus:ring-gold/30 focus:border-gold transition-colors disabled:opacity-50"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-1.5 text-[var(--fg)]"
                  >
                    Email Address <span className="text-gold">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    disabled={status === "submitting"}
                    className="w-full px-4 py-2.5 rounded-lg border border-[var(--border)] bg-[var(--bg-card)] text-[var(--fg)] text-sm focus:outline-none focus:ring-2 focus:ring-gold/30 focus:border-gold transition-colors disabled:opacity-50"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-1.5 text-[var(--fg)]"
                  >
                    Message <span className="text-gold">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={form.message}
                    onChange={handleChange}
                    disabled={status === "submitting"}
                    placeholder="Tell us what you're trying to automate or build..."
                    className="w-full px-4 py-2.5 rounded-lg border border-[var(--border)] bg-[var(--bg-card)] text-[var(--fg)] text-sm focus:outline-none focus:ring-2 focus:ring-gold/30 focus:border-gold transition-colors resize-none disabled:opacity-50"
                  />
                </div>

                {status === "error" && (
                  <p className="text-sm text-red-500 bg-red-50 dark:bg-red-900/20 px-4 py-3 rounded-lg">
                    {errorMsg}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="btn-primary w-full justify-center disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === "submitting" ? "Sending…" : "Send Message"}
                </button>

                <p className="text-xs text-[var(--muted)] text-center">
                  All fields are required. We respond within one business day.
                </p>
              </form>
            )}
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
