export interface ServiceContent {
  title: string;
  tagline: string;
  shortDescription: string;
  fullDescription: string;
  targetAudience: string[];
  deliverables: string[];
  outcomes: string[];
  cta: string;
}

export interface Service {
  id: string;
  slug: string;
  icon: string;
  category: "consulting" | "training" | "automation" | "governance" | "mentorship";
  pricingTier: "standard" | "premium" | "enterprise";
  featured: boolean;
  language: ("en" | "ar")[];
  en: ServiceContent;
  ar: ServiceContent;
}

export const SERVICES: Service[] = [
  {
    id: "ai-strategy",
    slug: "ai-strategy",
    icon: "🎯",
    category: "consulting",
    pricingTier: "standard",
    featured: true,
    language: ["en", "ar"],
    en: {
      title: "AI Consulting & Strategy",
      tagline: "Clarity before commitment",
      shortDescription:
        "Help organisations identify AI opportunities, assess readiness, and create actionable implementation roadmaps.",
      fullDescription:
        "Many organisations know AI is important but struggle to identify where to start, what to prioritise, and how to build a realistic plan. We work with leadership teams to assess AI readiness, identify high-value opportunities, and create clear, actionable roadmaps aligned to your business objectives.",
      targetAudience: [
        "C-suite and senior leadership",
        "Digital transformation teams",
        "Strategy and operations directors",
        "Organisations new to AI",
      ],
      deliverables: [
        "AI Readiness Assessment Report",
        "AI Opportunity Register",
        "Prioritised AI Roadmap",
        "Executive Briefing Deck",
      ],
      outcomes: [
        "AI Opportunity Assessments",
        "AI Adoption Roadmaps",
        "AI Readiness Reviews",
        "Executive AI Advisory",
      ],
      cta: "Book a Strategy Session",
    },
    ar: {
      title: "استشارات وتوجيهات الذكاء الاصطناعي",
      tagline: "الوضوح قبل الالتزام",
      shortDescription:
        "مساعدة المؤسسات في تحديد فرص الذكاء الاصطناعي وتقييم الجاهزية وإنشاء خرائط طريق قابلة للتنفيذ.",
      fullDescription:
        "تعرف كثير من المؤسسات أن الذكاء الاصطناعي مهم لكنها تكافح لتحديد نقطة البداية والأولويات وبناء خطة واقعية. نعمل مع الفرق القيادية لتقييم الجاهزية وتحديد الفرص عالية القيمة وإنشاء خرائط طريق واضحة وقابلة للتنفيذ.",
      targetAudience: [
        "الرؤساء التنفيذيون والقيادة العليا",
        "فرق التحول الرقمي",
        "مديرو الاستراتيجية والعمليات",
        "المؤسسات الجديدة على الذكاء الاصطناعي",
      ],
      deliverables: [
        "تقرير تقييم جاهزية الذكاء الاصطناعي",
        "سجل فرص الذكاء الاصطناعي",
        "خارطة طريق ذكاء اصطناعي ذات أولوية",
        "وثيقة إحاطة تنفيذية",
      ],
      outcomes: [
        "تقييمات فرص الذكاء الاصطناعي",
        "خارطة طريق تبني الذكاء الاصطناعي",
        "مراجعات جاهزية الذكاء الاصطناعي",
        "الاستشارات التنفيذية للذكاء الاصطناعي",
      ],
      cta: "احجز جلسة استراتيجية",
    },
  },
  {
    id: "ai-workshops",
    slug: "ai-workshops",
    icon: "🎓",
    category: "training",
    pricingTier: "standard",
    featured: true,
    language: ["en", "ar"],
    en: {
      title: "AI Workshops & Training",
      tagline: "Build internal capability",
      shortDescription:
        "Interactive training programmes to improve AI understanding, productivity, adoption, and governance awareness.",
      fullDescription:
        "Effective AI adoption requires people who understand how to use AI safely and effectively. We design and deliver practical training programmes — from executive awareness sessions to hands-on team workshops — tailored to your organisation's context and goals.",
      targetAudience: [
        "Executive and leadership teams",
        "Operations and process teams",
        "IT and technology departments",
        "HR and learning & development",
      ],
      deliverables: [
        "Custom workshop curriculum",
        "Participant workbooks",
        "AI tools toolkit",
        "Post-workshop action plan",
      ],
      outcomes: [
        "Executive AI Workshops",
        "Team Productivity Training",
        "AI Awareness Programmes",
        "Governance & Responsible AI Training",
      ],
      cta: "Enquire About Training",
    },
    ar: {
      title: "ورش العمل والتدريب على الذكاء الاصطناعي",
      tagline: "بناء الكفاءات الداخلية",
      shortDescription:
        "برامج تدريب تفاعلية لتحسين فهم الذكاء الاصطناعي والإنتاجية والتبني ووعي الحوكمة.",
      fullDescription:
        "يستلزم تبني الذكاء الاصطناعي بفعالية وجود أشخاص يفهمون كيفية استخدامه بأمان وكفاءة. نصمم وننفذ برامج تدريب عملية — من جلسات التوعية التنفيذية إلى ورش العمل التطبيقية للفرق.",
      targetAudience: [
        "الفرق التنفيذية والقيادية",
        "فرق العمليات والعمليات",
        "أقسام تكنولوجيا المعلومات",
        "الموارد البشرية والتعلم والتطوير",
      ],
      deliverables: [
        "منهج ورش عمل مخصص",
        "كتيبات المشاركين",
        "مجموعة أدوات الذكاء الاصطناعي",
        "خطة عمل ما بعد ورشة العمل",
      ],
      outcomes: [
        "ورش العمل التنفيذية",
        "تدريب الفرق على الإنتاجية",
        "برامج التوعية بالذكاء الاصطناعي",
        "تدريب الحوكمة والذكاء الاصطناعي المسؤول",
      ],
      cta: "الاستفسار عن التدريب",
    },
  },
  {
    id: "ai-automation",
    slug: "ai-automation",
    icon: "⚡",
    category: "automation",
    pricingTier: "premium",
    featured: true,
    language: ["en", "ar"],
    en: {
      title: "AI Automation & Intelligence Systems",
      tagline: "Build systems that deliver",
      shortDescription:
        "Design and implement AI-powered systems that automate workflows, improve decision-making, and increase operational efficiency.",
      fullDescription:
        "We design and build AI-powered systems that automate repetitive processes, surface insights from your data, and deliver measurable operational improvements. From internal AI assistants to complex workflow automation, we build systems that integrate with your existing tools and work reliably in production.",
      targetAudience: [
        "Operations and process teams",
        "IT and engineering teams",
        "Knowledge-intensive organisations",
        "Businesses with repetitive workflows",
      ],
      deliverables: [
        "System architecture document",
        "Deployed AI system",
        "Integration documentation",
        "Operational runbook",
      ],
      outcomes: [
        "Internal AI Assistants & Knowledge Systems",
        "Workflow Automation & Document Intelligence",
        "Retrieval-Augmented Generation (RAG) Systems",
        "AI Agents & Decision Support Tools",
      ],
      cta: "Discuss Your Automation Needs",
    },
    ar: {
      title: "أتمتة الذكاء الاصطناعي وأنظمة الاستخبارات",
      tagline: "بناء أنظمة تُحقق النتائج",
      shortDescription:
        "تصميم وتنفيذ أنظمة مدعومة بالذكاء الاصطناعي تُؤتمت سير العمل وتحسن صنع القرار وتزيد الكفاءة التشغيلية.",
      fullDescription:
        "نصمم وننشئ أنظمة مدعومة بالذكاء الاصطناعي تُؤتمت العمليات المتكررة وتُبرز الرؤى من بياناتك وتُحقق تحسينات تشغيلية قابلة للقياس.",
      targetAudience: [
        "فرق العمليات",
        "فرق تكنولوجيا المعلومات والهندسة",
        "المؤسسات كثيفة المعرفة",
        "الشركات ذات سير العمل المتكررة",
      ],
      deliverables: [
        "وثيقة هندسة النظام",
        "نظام الذكاء الاصطناعي المنشور",
        "توثيق التكامل",
        "دليل التشغيل",
      ],
      outcomes: [
        "المساعدون الداخليون وأنظمة المعرفة",
        "أتمتة سير العمل وذكاء المستندات",
        "أنظمة الجيل المعزز بالاسترجاع (RAG)",
        "وكلاء الذكاء الاصطناعي وأدوات دعم القرار",
      ],
      cta: "ناقش احتياجاتك في الأتمتة",
    },
  },
  {
    id: "ai-security",
    slug: "ai-security",
    icon: "🔒",
    category: "governance",
    pricingTier: "standard",
    featured: true,
    language: ["en", "ar"],
    en: {
      title: "AI Security & Governance Reviews",
      tagline: "Deploy with confidence",
      shortDescription:
        "Assess AI risks, governance readiness, security controls, and responsible implementation practices.",
      fullDescription:
        "As AI adoption accelerates, organisations face growing risks around data security, regulatory compliance, and responsible use. We conduct structured reviews of your AI systems, policies, and practices — helping you identify gaps and implement appropriate controls before they become problems.",
      targetAudience: [
        "Risk and compliance teams",
        "IT security departments",
        "Legal and governance functions",
        "Regulated industries",
      ],
      deliverables: [
        "AI Risk Register",
        "Governance Gap Analysis",
        "Policy recommendations",
        "Remediation roadmap",
      ],
      outcomes: [
        "AI Risk Assessments",
        "AI Governance Framework Reviews",
        "Policy & Control Recommendations",
        "Security Reviews for AI Systems",
      ],
      cta: "Request a Governance Review",
    },
    ar: {
      title: "مراجعات أمن وحوكمة الذكاء الاصطناعي",
      tagline: "انشر بثقة",
      shortDescription:
        "تقييم مخاطر الذكاء الاصطناعي وجاهزية الحوكمة والضوابط الأمنية وممارسات التنفيذ المسؤولة.",
      fullDescription:
        "مع تسارع تبني الذكاء الاصطناعي، تواجه المؤسسات مخاطر متزايدة حول أمن البيانات والامتثال التنظيمي والاستخدام المسؤول. نُجري مراجعات منظمة لأنظمتك وسياساتك وممارساتك.",
      targetAudience: [
        "فرق المخاطر والامتثال",
        "أقسام أمن تكنولوجيا المعلومات",
        "وظائف الشؤون القانونية والحوكمة",
        "الصناعات الخاضعة للتنظيم",
      ],
      deliverables: [
        "سجل مخاطر الذكاء الاصطناعي",
        "تحليل فجوات الحوكمة",
        "توصيات السياسات",
        "خارطة طريق المعالجة",
      ],
      outcomes: [
        "تقييمات مخاطر الذكاء الاصطناعي",
        "مراجعات إطار حوكمة الذكاء الاصطناعي",
        "توصيات السياسات والضوابط",
        "مراجعات أمان أنظمة الذكاء الاصطناعي",
      ],
      cta: "طلب مراجعة الحوكمة",
    },
  },
  {
    id: "graduation-mentorship",
    slug: "graduation-mentorship",
    icon: "🏆",
    category: "mentorship",
    pricingTier: "standard",
    featured: true,
    language: ["en", "ar"],
    en: {
      title: "Graduation Project & Mentorship Support",
      tagline: "From idea to defended project",
      shortDescription:
        "End-to-end mentorship for university students and graduation project teams — from proposal to final defence.",
      fullDescription:
        "Graduation projects are high-stakes and time-sensitive. We provide structured mentorship that covers every phase — project management, technical guidance, documentation, research methodology, and defence preparation — so you can deliver a project you're proud of.",
      targetAudience: [
        "University students with graduation projects",
        "Student project teams",
        "Postgraduate researchers",
        "Academic supervisors seeking specialist support",
      ],
      deliverables: [
        "Project management plan",
        "Technical architecture review",
        "Documentation review (SRS, proposal, final report)",
        "Defence preparation sessions",
      ],
      outcomes: [
        "Structured project management",
        "Technical architecture guidance",
        "Documentation and research support",
        "Presentation and defence coaching",
      ],
      cta: "Start Your Mentorship",
    },
    ar: {
      title: "دعم مشاريع التخرج والإرشاد",
      tagline: "من الفكرة إلى المناقشة",
      shortDescription:
        "إرشاد شامل لطلاب الجامعات وفرق مشاريع التخرج — من المقترح إلى المناقشة النهائية.",
      fullDescription:
        "مشاريع التخرج مرهقة ومحددة بوقت. نقدم إرشاداً منظماً يغطي كل مرحلة — إدارة المشروع والتوجيه التقني والتوثيق ومنهجية البحث وإعداد المناقشة — حتى تُقدّم مشروعاً تفخر به.",
      targetAudience: [
        "طلاب الجامعات أصحاب مشاريع التخرج",
        "فرق مشاريع الطلاب",
        "الباحثون في الدراسات العليا",
        "المشرفون الأكاديميون الباحثون عن دعم متخصص",
      ],
      deliverables: [
        "خطة إدارة المشروع",
        "مراجعة الهندسة المعمارية التقنية",
        "مراجعة التوثيق (SRS والمقترح والتقرير النهائي)",
        "جلسات إعداد المناقشة",
      ],
      outcomes: [
        "إدارة منظمة للمشروع",
        "توجيه هندسة المعمارية التقنية",
        "دعم التوثيق والبحث",
        "التدريب على العرض والمناقشة",
      ],
      cta: "ابدأ إرشادك",
    },
  },
];

export function getServiceContent(service: Service, lang: "en" | "ar") {
  return service[lang];
}
