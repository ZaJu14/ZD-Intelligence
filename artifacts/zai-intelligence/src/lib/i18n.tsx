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
      eyebrow: "AI Consulting, Automation & Intelligence Systems",
      headline: "AI Consulting, Automation & Intelligence Systems",
      subheadline:
        "We help organisations identify AI opportunities, automate operations, and implement secure intelligence systems that deliver measurable business value.",
      cta1: "Book a Free AI Opportunity Assessment",
      cta2: "Explore Services",
    },
    footer: {
      tagline:
        "AI consulting, automation and intelligence systems for modern organisations. Practical AI over hype. Results over promises.",
      navigation: "Navigation",
      getInTouch: "Get in Touch",
      bookCall: "Book a Free Call",
      rights: "All rights reserved.",
    },
    cta: {
      eyebrow: "Get Started",
      headline: "Ready to explore what AI can do for your organisation?",
      sub: "No obligation. Practical recommendations. Clear next steps.",
      btn1: "Book a Free AI Opportunity Assessment",
      btn2: "Schedule an Automation Strategy Session",
    },
  },
  ar: {
    nav: {
      services: "الخدمات",
      about: "من نحن",
      resources: "المقالات",
      contact: "تواصل معنا",
      bookCall: "احجز تقييماً مجانياً",
    },
    hero: {
      eyebrow: "استشارات الذكاء الاصطناعي والأتمتة وأنظمة الاستخبارات",
      headline: "استشارات الذكاء الاصطناعي والأتمتة وأنظمة الاستخبارات",
      subheadline:
        "نساعد المؤسسات على تحديد فرص الذكاء الاصطناعي، وأتمتة العمليات، وتنفيذ أنظمة ذكاء آمنة تحقق قيمة أعمال قابلة للقياس.",
      cta1: "احجز تقييم فرص ذكاء اصطناعي مجانياً",
      cta2: "استكشف خدماتنا",
    },
    footer: {
      tagline: "استشارات الذكاء الاصطناعي والأتمتة وأنظمة الاستخبارات للمؤسسات الحديثة.",
      navigation: "التنقل",
      getInTouch: "تواصل معنا",
      bookCall: "احجز تقييماً مجانياً",
      rights: "جميع الحقوق محفوظة.",
    },
    cta: {
      eyebrow: "ابدأ الآن",
      headline: "هل أنت مستعد لاستكشاف ما يمكن أن يفعله الذكاء الاصطناعي لمؤسستك؟",
      sub: "بدون التزام. توصيات عملية. خطوات تالية واضحة.",
      btn1: "احجز تقييم فرص ذكاء اصطناعي مجانياً",
      btn2: "جدول جلسة استراتيجية أتمتة",
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
