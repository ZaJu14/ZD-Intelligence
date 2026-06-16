import Link from "next/link";
import { CONTACT_EMAIL, LINKEDIN_URL, NAV_LINKS, CALENDLY_URL } from "@/lib/config";

export function Footer() {
  return (
    <footer className="bg-navy text-white/80">
      <div className="container-wide py-14 grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <p className="font-serif text-2xl font-semibold mb-3">
            <span className="gradient-text">ZD</span>{" "}
            <span className="text-white">Intelligence</span>
          </p>
          <p className="text-sm leading-relaxed text-white/60 max-w-xs">
            AI automation and intelligence systems for modern businesses. Precision over hype. Results over promises.
          </p>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-4">
            Navigation
          </p>
          <ul className="space-y-2">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="text-sm text-white/70 hover:text-gold-light transition-colors"
                >
                  {l.label}
                </Link>
              </li>
            ))}
            <li>
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-gold hover:text-gold-light transition-colors font-semibold"
              >
                Book a Free Call →
              </a>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-4">
            Get in Touch
          </p>
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="text-sm text-white/70 hover:text-gold-light transition-colors block mb-3"
          >
            {CONTACT_EMAIL}
          </a>
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-gold-light transition-colors mb-4"
          >
            <LinkedInIcon />
            LinkedIn
          </a>
          <div className="mt-4">
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-sm py-2.5 px-5"
            >
              Book a Free Call
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-wide py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/40">
          <p>© {new Date().getFullYear()} ZD Intelligence. All rights reserved.</p>
          <p>AI Automation · Intelligence Systems · Global</p>
        </div>
      </div>
    </footer>
  );
}

function LinkedInIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}
