"use client";

import Link from "next/link";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { NAV_LINKS, CALENDLY_URL } from "@/lib/config";
import { useLanguage } from "@/lib/i18n";

export function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { lang, setLang, t } = useLanguage();

  useEffect(() => {
    setMounted(true);
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[var(--bg)]/95 backdrop-blur-md shadow-sm border-b border-[var(--border)]"
          : "bg-transparent"
      }`}
    >
      <div className="container-wide flex h-16 items-center justify-between">
        <Link
          href="/"
          className="font-serif text-xl font-semibold tracking-wide flex items-center gap-2"
          onClick={() => setOpen(false)}
        >
          <BrandIcon />
          <span>
            <span className="gradient-text text-[#b8933f]">ZD</span>
            <span className="ml-1.5 text-[#b8933f]">Intelligence</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-[var(--muted)] hover:text-gold transition-colors"
            >
              {l.label}
            </Link>
          ))}
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-sm py-2 px-5"
          >
            {t.nav.bookCall}
          </a>
          <button
            aria-label={lang === "ar" ? "Switch to English" : "التبديل إلى العربية"}
            onClick={() => setLang(lang === "en" ? "ar" : "en")}
            className="btn-ghost px-2 py-1 text-xs font-semibold border border-[var(--border)] rounded"
          >
            {lang === "en" ? "AR" : "EN"}
          </button>
          {mounted && (
            <button
              aria-label="Toggle theme"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="btn-ghost p-2 rounded-full"
            >
              {theme === "dark" ? <SunIcon /> : <MoonIcon />}
            </button>
          )}
        </nav>

        <div className="md:hidden flex items-center gap-2">
          <button
            aria-label={lang === "ar" ? "Switch to English" : "التبديل إلى العربية"}
            onClick={() => setLang(lang === "en" ? "ar" : "en")}
            className="btn-ghost px-2 py-1 text-xs font-semibold border border-[var(--border)] rounded"
          >
            {lang === "en" ? "AR" : "EN"}
          </button>
          {mounted && (
            <button
              aria-label="Toggle theme"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="btn-ghost p-2"
            >
              {theme === "dark" ? <SunIcon /> : <MoonIcon />}
            </button>
          )}
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen(!open)}
            className="btn-ghost p-2"
          >
            {open ? <XIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-[var(--bg)] border-b border-[var(--border)] px-6 py-4 flex flex-col gap-4">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-[var(--fg)] hover:text-gold"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          ))}
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-sm py-2.5 text-center"
            onClick={() => setOpen(false)}
          >
            {t.nav.bookCall}
          </a>
        </div>
      )}
    </header>
  );
}

function SunIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="5" /><line x1="12" y1="1" x2="12" y2="3" /><line x1="12" y1="21" x2="12" y2="23" />
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" /><line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
      <line x1="1" y1="12" x2="3" y2="12" /><line x1="21" y1="12" x2="23" y2="12" />
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" /><line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  );
}

function MenuIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  );
}

function BrandIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#b8933f]">
      <path d="M4 12l4 4 8-8" />
      <circle cx="16" cy="16" r="3" />
      <circle cx="8" cy="8" r="3" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}
