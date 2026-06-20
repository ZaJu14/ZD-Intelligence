export interface ArticleContent {
  title: string;
  summary: string;
  author: string;
  tags: string[];
}

export interface Article {
  id: string;
  slug: string;
  category: "article";
  publishDate: string;
  estimatedReadingTime: number;
  featured: boolean;
  coverImage?: string;
  en: ArticleContent;
  ar: ArticleContent;
}

export const ARTICLES: Article[] = [
  {
    id: "ai-automation-smes",
    slug: "ai-automation-opportunities-smes",
    category: "article",
    publishDate: "2024-Q1",
    estimatedReadingTime: 8,
    featured: true,
    en: {
      title: "AI Automation Opportunities for SMEs",
      summary:
        "A practical guide to the highest-value AI automation use cases for small and medium businesses — and how to evaluate which ones apply to your operations.",
      author: "ZD Intelligence",
      tags: ["automation", "sme", "productivity", "ai"],
    },
    ar: {
      title: "فرص أتمتة الذكاء الاصطناعي للشركات الصغيرة والمتوسطة",
      summary:
        "دليل عملي لحالات استخدام أتمتة الذكاء الاصطناعي الأعلى قيمة للشركات الصغيرة والمتوسطة — وكيفية تقييم أيها ينطبق على عملياتك.",
      author: "ZD Intelligence",
      tags: ["الأتمتة", "الشركات الصغيرة والمتوسطة", "الإنتاجية", "الذكاء الاصطناعي"],
    },
  },
  {
    id: "ai-governance-gcc",
    slug: "ai-governance-gcc-organisations",
    category: "article",
    publishDate: "2024-Q1",
    estimatedReadingTime: 10,
    featured: true,
    en: {
      title: "AI Governance for GCC Organisations",
      summary:
        "A practical overview of AI governance considerations for organisations operating in the Gulf region — covering regulatory context, risk management, and responsible use.",
      author: "ZD Intelligence",
      tags: ["governance", "gcc", "risk", "compliance"],
    },
    ar: {
      title: "حوكمة الذكاء الاصطناعي لمؤسسات دول مجلس التعاون الخليجي",
      summary:
        "نظرة عامة عملية على اعتبارات حوكمة الذكاء الاصطناعي للمؤسسات العاملة في منطقة الخليج — تغطي السياق التنظيمي وإدارة المخاطر.",
      author: "ZD Intelligence",
      tags: ["الحوكمة", "الخليج", "المخاطر", "الامتثال"],
    },
  },
  {
    id: "rag-vs-traditional-search",
    slug: "rag-vs-traditional-search",
    category: "article",
    publishDate: "2024-Q1",
    estimatedReadingTime: 7,
    featured: false,
    en: {
      title: "RAG vs Traditional Search: What Businesses Need to Know",
      summary:
        "A plain-language explanation of Retrieval-Augmented Generation — what it is, when it beats traditional search, and what it takes to implement it well.",
      author: "ZD Intelligence",
      tags: ["rag", "ai", "search", "knowledge-systems"],
    },
    ar: {
      title: "RAG مقابل البحث التقليدي: ما يحتاج الأعمال معرفته",
      summary:
        "شرح بسيط للجيل المعزز بالاسترجاع — ما هو ومتى يتفوق على البحث التقليدي وما يتطلبه تنفيذه بشكل جيد.",
      author: "ZD Intelligence",
      tags: ["RAG", "الذكاء الاصطناعي", "البحث", "أنظمة المعرفة"],
    },
  },
];
