"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  type ReactNode,
} from "react";

export type Lang = "en" | "ar";

const translations = {
  en: {
    nav: {
      services: "Services",
      about: "About",
      resources: "Resources",
      contact: "Contact",
      bookCall: "Book a Free Call",
    },
    hero: {
      eyebrow: "AI Automation & Intelligence",
      headline: "AI Automation & Intelligence Systems for Modern Businesses",
      subheadline:
        "We design and build AI automation workflows, intelligence systems, and data pipelines that help modern organisations work faster, make better decisions, and scale without adding overhead.",
      cta1: "Book a Free Call",
      cta2: "Explore Services",
    },
    footer: {
      tagline:
        "AI automation and intelligence systems for modern businesses. Precision over hype. Results over promises.",
      navigation: "Navigation",
      getInTouch: "Get in Touch",
      bookCall: "Book a Free Call",
      rights: "All rights reserved.",
    },
    cta: {
      eyebrow: "Get Started",
      headline: "Ready to put AI to work in your business?",
      sub: "Book a free 30-minute call. We will map your highest-value automation opportunity — no jargon, no commitment.",
      btn1: "Book a Free Call",
      btn2: "Send a Message",
    },
  },
  ar: {
    nav: {
      services: "الخدمات",
      about: "من نحن",
      resources: "المقالات",
      contact: "تواصل معنا",
      bookCall: "احجز مكالمة مجانية",
    },
    hero: {
      eyebrow: "الأتمتة الذكية وأنظمة الاستخبارات",
      headline: "أنظمة أتمتة ذكاء اصطناعي للشركات الحديثة",
      subheadline:
        "نصمم ونبني سير العمل الآلي المدعوم بالذكاء الاصطناعي وأنظمة الاستخبارات التي تساعد المؤسسات على العمل بشكل أسرع واتخاذ قرارات أفضل.",
      cta1: "احجز مكالمة مجانية",
      cta2: "استكشف خدماتنا",
    },
    footer: {
      tagline: "أنظمة أتمتة ذكاء اصطناعي للشركات الحديثة. الدقة فوق الضجيج.",
      navigation: "التنقل",
      getInTouch: "تواصل معنا",
      bookCall: "احجز مكالمة مجانية",
      rights: "جميع الحقوق محفوظة.",
    },
    cta: {
      eyebrow: "ابدأ الآن",
      headline: "هل أنت مستعد لاستخدام الذكاء الاصطناعي في عملك؟",
      sub: "احجز مكالمة مجانية مدتها 30 دقيقة. سنحدد أعلى فرصة للأتمتة في عملك — بدون مصطلحات معقدة، بدون التزام.",
      btn1: "احجز مكالمة مجانية",
      btn2: "أرسل رسالة",
    },
  },
};

export type Translations = typeof translations.en;

interface LangContextValue {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: Translations;
}

const LangContext = createContext<LangContextValue>({
  lang: "en",
  setLang: () => {},
  t: translations.en,
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    const stored = localStorage.getItem("lang") as Lang | null;
    if (stored === "ar" || stored === "en") {
      setLangState(stored);
      document.documentElement.lang = stored;
      document.documentElement.dir = stored === "ar" ? "rtl" : "ltr";
    }
  }, []);

  function setLang(l: Lang) {
    setLangState(l);
    localStorage.setItem("lang", l);
    document.documentElement.lang = l;
    document.documentElement.dir = l === "ar" ? "rtl" : "ltr";
  }

  return (
    <LangContext.Provider value={{ lang, setLang, t: translations[lang] }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LangContext);
}
