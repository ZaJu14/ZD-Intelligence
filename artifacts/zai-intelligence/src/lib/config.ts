export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://zd-intelligence.com";

export const CALENDLY_URL =
  process.env.NEXT_PUBLIC_CALENDLY_URL ??
  "https://calendly.com/zd-intelligence-info/discovery-call";

export const CONTACT_EMAIL = "info@zd-intelligence.com";

export const LINKEDIN_URL =
  "https://www.linkedin.com/company/zd-intelligence";

export const WHATSAPP_NUMBER =
  process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "";

export const GS_WEBHOOK_URL =
  process.env.NEXT_PUBLIC_GS_WEBHOOK_URL ?? "";

export const NAV_LINKS = [
  { label: "Services", href: "/services/" },
  { label: "About", href: "/about/" },
  { label: "Resources", href: "/resources/" },
  { label: "Contact", href: "/contact/" },
];
