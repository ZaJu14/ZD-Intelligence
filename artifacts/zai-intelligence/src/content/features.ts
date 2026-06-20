export interface FeatureContent {
  title: string;
  description: string;
  benefits: string[];
}

export interface Feature {
  id: string;
  icon: string;
  category: "core" | "technical" | "academic" | "career";
  displayOrder: number;
  includedInPackage: boolean;
  en: FeatureContent;
  ar: FeatureContent;
}

export const FEATURES: Feature[] = [
  {
    id: "project-management",
    icon: "📋",
    category: "core",
    displayOrder: 1,
    includedInPackage: true,
    en: {
      title: "Project Management",
      description:
        "Structured project planning to keep your graduation project on track from start to finish.",
      benefits: [
        "Timeline planning and milestone setting",
        "Scope definition and change management",
        "Risk identification and mitigation",
        "Weekly progress reviews",
      ],
    },
    ar: {
      title: "إدارة المشاريع",
      description:
        "تخطيط منظم للمشاريع لإبقاء مشروع تخرجك على المسار الصحيح من البداية إلى النهاية.",
      benefits: [
        "تخطيط الجداول الزمنية وتحديد المعالم",
        "تحديد النطاق وإدارة التغييرات",
        "تحديد المخاطر والتخفيف منها",
        "مراجعات تقدم أسبوعية",
      ],
    },
  },
  {
    id: "accountability",
    icon: "✅",
    category: "core",
    displayOrder: 2,
    includedInPackage: true,
    en: {
      title: "Accountability & Check-ins",
      description:
        "Regular structured check-ins to maintain momentum and catch issues before they become blockers.",
      benefits: [
        "Weekly progress check-ins",
        "Milestone accountability sessions",
        "Risk identification before they escalate",
        "Consistent forward momentum",
      ],
    },
    ar: {
      title: "المتابعة والمساءلة",
      description:
        "متابعات منتظمة منظمة للحفاظ على الزخم واكتشاف المشكلات قبل أن تصبح عوائق.",
      benefits: [
        "متابعات أسبوعية للتقدم",
        "جلسات مساءلة على المعالم",
        "تحديد المخاطر قبل تفاقمها",
        "زخم مستمر للمضي قدماً",
      ],
    },
  },
  {
    id: "technical-guidance",
    icon: "⚙️",
    category: "technical",
    displayOrder: 3,
    includedInPackage: true,
    en: {
      title: "Technical Guidance",
      description:
        "Expert technical advice on architecture, technology selection, and implementation decisions.",
      benefits: [
        "System architecture review and feedback",
        "Technology stack selection guidance",
        "Technical recommendations and best practices",
        "Code and design review sessions",
      ],
    },
    ar: {
      title: "التوجيه التقني",
      description:
        "نصائح تقنية خبيرة في الهندسة المعمارية واختيار التقنيات وقرارات التنفيذ.",
      benefits: [
        "مراجعة هندسة النظام وملاحظاته",
        "توجيه اختيار مجموعة التقنيات",
        "توصيات تقنية وأفضل الممارسات",
        "جلسات مراجعة الكود والتصميم",
      ],
    },
  },
  {
    id: "documentation-support",
    icon: "📄",
    category: "academic",
    displayOrder: 4,
    includedInPackage: true,
    en: {
      title: "Documentation Support",
      description:
        "Guidance on all project documentation — from proposals to SRS documents and final reports.",
      benefits: [
        "Project proposal review and feedback",
        "SRS (Software Requirements Specification) review",
        "Final report structure and guidance",
        "Academic writing best practices",
      ],
    },
    ar: {
      title: "دعم التوثيق",
      description:
        "توجيه في جميع وثائق المشروع — من المقترحات إلى وثائق SRS والتقارير النهائية.",
      benefits: [
        "مراجعة مقترح المشروع وملاحظاته",
        "مراجعة SRS (مواصفات متطلبات البرمجيات)",
        "هيكل التقرير النهائي وتوجيهاته",
        "أفضل ممارسات الكتابة الأكاديمية",
      ],
    },
  },
  {
    id: "research-support",
    icon: "🔬",
    category: "academic",
    displayOrder: 5,
    includedInPackage: true,
    en: {
      title: "Research Support",
      description:
        "Academic research guidance to strengthen your literature review, methodology, and scholarly foundations.",
      benefits: [
        "Literature review guidance and structure",
        "Research methodology selection",
        "Academic resource identification",
        "Citation and reference best practices",
      ],
    },
    ar: {
      title: "دعم البحث",
      description:
        "توجيه بحثي أكاديمي لتعزيز مراجعة الأدبيات ومنهجيتك وأسسك العلمية.",
      benefits: [
        "توجيه مراجعة الأدبيات وهيكلها",
        "اختيار منهجية البحث",
        "تحديد الموارد الأكاديمية",
        "أفضل ممارسات الاستشهاد والمراجع",
      ],
    },
  },
  {
    id: "presentation-defense",
    icon: "🎤",
    category: "academic",
    displayOrder: 6,
    includedInPackage: true,
    en: {
      title: "Presentation & Defence Preparation",
      description:
        "Comprehensive coaching to help you present your project confidently and handle committee questions.",
      benefits: [
        "Presentation structure and storytelling",
        "Demo preparation and rehearsal",
        "Q&A preparation and mock defence",
        "Confident delivery coaching",
      ],
    },
    ar: {
      title: "إعداد العرض التقديمي والمناقشة",
      description:
        "تدريب شامل لمساعدتك على تقديم مشروعك بثقة والتعامل مع أسئلة اللجنة.",
      benefits: [
        "هيكل العرض التقديمي وفن السرد",
        "إعداد العرض التوضيحي والتدريب عليه",
        "إعداد الأسئلة والأجوبة ومحاكاة المناقشة",
        "تدريب على التقديم بثقة",
      ],
    },
  },
  {
    id: "career-development",
    icon: "🚀",
    category: "career",
    displayOrder: 7,
    includedInPackage: false,
    en: {
      title: "Career Development",
      description:
        "Practical guidance to help you transition from student to professional with a strong career foundation.",
      benefits: [
        "CV review and optimisation",
        "LinkedIn profile guidance",
        "Portfolio development advice",
        "Interview preparation tips",
      ],
    },
    ar: {
      title: "التطوير المهني",
      description:
        "توجيه عملي لمساعدتك على الانتقال من طالب إلى محترف بأساس مهني متين.",
      benefits: [
        "مراجعة السيرة الذاتية وتحسينها",
        "توجيه ملف LinkedIn",
        "نصائح تطوير المحفظة المهنية",
        "نصائح التحضير للمقابلات",
      ],
    },
  },
  {
    id: "industry-mentorship",
    icon: "🏭",
    category: "career",
    displayOrder: 8,
    includedInPackage: false,
    en: {
      title: "Industry Mentorship",
      description:
        "Real-world industry perspective to bridge the gap between academic projects and professional practice.",
      benefits: [
        "Agile and project management practices",
        "Industry standards and professional norms",
        "Real-world context for technical decisions",
        "Professional network awareness",
      ],
    },
    ar: {
      title: "الإرشاد الصناعي",
      description:
        "منظور صناعي واقعي لردم الفجوة بين المشاريع الأكاديمية والممارسة المهنية.",
      benefits: [
        "ممارسات Agile وإدارة المشاريع",
        "معايير الصناعة والمعايير المهنية",
        "السياق الواقعي للقرارات التقنية",
        "الوعي بالشبكة المهنية",
      ],
    },
  },
];

export function getFeatureContent(feature: Feature, lang: "en" | "ar") {
  return feature[lang];
}
