"use client";

import { useEffect } from "react";
import { CALENDLY_URL } from "@/lib/config";

export function CalendlyEmbed() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div
      className="calendly-inline-widget w-full"
      data-url={`${CALENDLY_URL}?hide_gdpr_banner=1`}
      style={{ minWidth: "320px", height: "700px" }}
    />
  );
}
