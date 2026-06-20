export interface GuideContent {
  title: string;
  description: string;
  author: string;
  tags: string[];
}

export interface Guide {
  id: string;
  slug: string;
  category: "guide";
  difficultyLevel: "beginner" | "intermediate" | "advanced";
  estimatedReadingTime: number;
  featured: boolean;
  en: GuideContent;
  ar: GuideContent;
}

export const GUIDES: Guide[] = [
  {
    id: "internal-ai-assistants",
    slug: "building-internal-ai-assistants-securely",
    category: "guide",
    difficultyLevel: "intermediate",
    estimatedReadingTime: 12,
    featured: true,
    en: {
      title: "Building Internal AI Assistants Securely",
      description:
        "How to design and deploy internal knowledge assistants using RAG architecture — with security and data privacy considered from the start.",
      author: "ZD Intelligence",
      tags: ["rag", "security", "knowledge-systems", "deployment"],
    },
    ar: {
      title: "بناء مساعدي الذكاء الاصطناعي الداخليين بشكل آمن",
      description:
        "كيفية تصميم ونشر مساعدي المعرفة الداخليين باستخدام بنية RAG — مع مراعاة الأمن وخصوصية البيانات من البداية.",
      author: "ZD Intelligence",
      tags: ["RAG", "الأمن", "أنظمة المعرفة", "النشر"],
    },
  },
  {
    id: "10-processes-automate",
    slug: "10-processes-every-business-should-automate",
    category: "guide",
    difficultyLevel: "beginner",
    estimatedReadingTime: 9,
    featured: true,
    en: {
      title: "10 Processes Every Business Should Automate",
      description:
        "The ten most impactful business processes for AI automation — ranked by implementation effort and expected return.",
      author: "ZD Intelligence",
      tags: ["automation", "processes", "roi", "getting-started"],
    },
    ar: {
      title: "10 عمليات يجب على كل شركة أتمتتها",
      description:
        "العشر عمليات التجارية الأكثر تأثيراً لأتمتة الذكاء الاصطناعي — مرتبة حسب جهد التنفيذ والعائد المتوقع.",
      author: "ZD Intelligence",
      tags: ["الأتمتة", "العمليات", "العائد على الاستثمار", "البدء"],
    },
  },
  {
    id: "ai-adoption-roadmap",
    slug: "ai-adoption-roadmap-growing-businesses",
    category: "guide",
    difficultyLevel: "intermediate",
    estimatedReadingTime: 15,
    featured: true,
    en: {
      title: "AI Adoption Roadmap for Growing Businesses",
      description:
        "A step-by-step framework for building an AI adoption roadmap — from identifying opportunities to deploying your first production system.",
      author: "ZD Intelligence",
      tags: ["strategy", "roadmap", "ai-adoption", "planning"],
    },
    ar: {
      title: "خارطة طريق تبني الذكاء الاصطناعي للشركات النامية",
      description:
        "إطار خطوة بخطوة لبناء خارطة طريق تبني الذكاء الاصطناعي — من تحديد الفرص إلى نشر أول نظام إنتاج.",
      author: "ZD Intelligence",
      tags: ["الاستراتيجية", "خارطة الطريق", "تبني الذكاء الاصطناعي", "التخطيط"],
    },
  },
];
