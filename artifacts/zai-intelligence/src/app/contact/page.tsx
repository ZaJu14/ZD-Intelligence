"use client";

import { useState } from "react";
import { PageHero } from "@/components/shared/PageHero";
import { AnimatedSection } from "@/components/AnimatedSection";
import { CONTACT_EMAIL, LINKEDIN_URL } from "@/lib/config";

export default function ContactPage() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(`Enquiry from ${form.name} — ${form.company}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nCompany: ${form.company}\n\n${form.message}`
    );
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <>
      <PageHero
        label="Get in Touch"
        title="Let's talk about your AI ambitions"
        subtitle="Whether you have a specific project in mind or just want to explore what's possible, we would love to hear from you — wherever you are in the world."
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
                    Remote-first · Available globally · GCC &amp; International
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
                    ZD Intelligence
                  </a>
                </div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.15}>
            {sent ? (
              <div className="card-base p-8 text-center">
                <p className="text-4xl mb-4">✅</p>
                <h3 className="font-serif text-2xl font-light mb-2">
                  Message opening…
                </h3>
                <p className="text-[var(--muted)] text-sm">
                  Your email client should have opened with the message
                  pre-filled. Send it and we will get back to you within one
                  business day.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {[
                  { name: "name", label: "Full Name", type: "text", required: true },
                  { name: "email", label: "Email Address", type: "email", required: true },
                  { name: "company", label: "Company / Organisation", type: "text", required: false },
                ].map((f) => (
                  <div key={f.name}>
                    <label
                      htmlFor={f.name}
                      className="block text-sm font-medium mb-1.5 text-[var(--fg)]"
                    >
                      {f.label}
                      {f.required && (
                        <span className="text-gold ml-1">*</span>
                      )}
                    </label>
                    <input
                      id={f.name}
                      name={f.name}
                      type={f.type}
                      required={f.required}
                      value={form[f.name as keyof typeof form]}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-lg border border-[var(--border)] bg-[var(--bg-card)] text-[var(--fg)] text-sm focus:outline-none focus:ring-2 focus:ring-gold/30 focus:border-gold transition-colors"
                    />
                  </div>
                ))}
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
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-lg border border-[var(--border)] bg-[var(--bg-card)] text-[var(--fg)] text-sm focus:outline-none focus:ring-2 focus:ring-gold/30 focus:border-gold transition-colors resize-none"
                  />
                </div>
                <button type="submit" className="btn-primary w-full justify-center">
                  Send Message
                </button>
              </form>
            )}
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
