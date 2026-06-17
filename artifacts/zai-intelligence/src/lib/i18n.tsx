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
      bookCall: "Book a Free Call →",
      bookCallBtn: "Book a Free Call",
      rights: "All rights reserved.",
      sub: "AI Consulting · Automation · Intelligence Systems",
    },
    cta: {
      eyebrow: "Get Started",
      headline: "Ready to explore what AI can do for your organisation?",
      sub: "No obligation. Practical recommendations. Clear next steps.",
      btn1: "Book a Free AI Opportunity Assessment",
      btn2: "Schedule an Automation Strategy Session",
    },
    services: {
      eyebrow: "Services",
      heading: "Four focused service areas",
      sub: "From strategy and training to automation and governance — practical AI services designed around measurable outcomes.",
      learnMore: "Learn more",
      items: [
        {
          tagline: "Clarity before commitment",
          title: "AI Consulting & Strategy",
          summary:
            "Help organisations identify AI opportunities, assess readiness, create implementation roadmaps, and develop practical AI adoption strategies.",
          outcomes: [
            "AI Opportunity Assessments",
            "AI Adoption Roadmaps",
            "AI Readiness Reviews",
            "Executive AI Advisory",
          ],
          cta: "Book a Strategy Session",
          slug: "ai-strategy",
          icon: "🎯",
        },
        {
          tagline: "Build internal capability",
          title: "AI Workshops & Training",
          summary:
            "Interactive training programmes designed to improve AI understanding, productivity, adoption, governance awareness, and responsible AI usage.",
          outcomes: [
            "Executive AI Workshops",
            "Team Productivity Training",
            "AI Awareness Programmes",
            "Governance & Responsible AI Training",
          ],
          cta: "Enquire About Training",
          slug: "ai-workshops",
          icon: "🎓",
        },
        {
          tagline: "Build systems that deliver",
          title: "AI Automation & Intelligence Systems",
          summary:
            "Design and implement AI-powered systems that automate workflows, improve decision-making, and increase operational efficiency.",
          outcomes: [
            "Internal AI Assistants & Knowledge Systems",
            "Workflow Automation & Document Intelligence",
            "Retrieval-Augmented Generation (RAG) Systems",
            "AI Agents & Decision Support Tools",
          ],
          cta: "Discuss Your Automation Needs",
          slug: "ai-automation",
          icon: "⚡",
        },
        {
          tagline: "Deploy with confidence",
          title: "AI Security & Governance Reviews",
          summary:
            "Assess AI risks, governance readiness, security controls, and responsible implementation practices across your organisation.",
          outcomes: [
            "AI Risk Assessments",
            "AI Governance Framework Reviews",
            "Policy & Control Recommendations",
            "Security Reviews for AI Systems",
          ],
          cta: "Request a Governance Review",
          slug: "ai-security",
          icon: "🔒",
        },
      ],
    },
    whoWeWorkWith: {
      eyebrow: "Who We Work With",
      heading: "Organisations we help adopt AI effectively",
      sub: "We work with a range of organisations across sectors and geographies — from SMEs taking their first steps with AI to larger enterprises scaling existing programmes.",
      items: [
        {
          icon: "🏢",
          title: "SMEs",
          body: "Growing businesses looking to automate operations, improve productivity, and compete more effectively using AI.",
        },
        {
          icon: "📈",
          title: "Growing Organisations",
          body: "Organisations scaling rapidly who need AI systems that grow with them — not solutions that break under pressure.",
        },
        {
          icon: "⚙️",
          title: "Operations Teams",
          body: "Operations leaders who want to automate manual processes, reduce errors, and free their teams for higher-value work.",
        },
        {
          icon: "💼",
          title: "Professional Service Firms",
          body: "Consulting, legal, financial, and advisory firms building AI capabilities to improve client delivery and internal efficiency.",
        },
        {
          icon: "🌍",
          title: "GCC Organisations",
          body: "Businesses across the Gulf region benefiting from our Arabic-language capability and regional market understanding.",
        },
        {
          icon: "🌐",
          title: "International Businesses",
          body: "Internationally operating organisations seeking a trusted AI consulting partner with bilingual delivery capability.",
        },
      ],
    },
    whyChoose: {
      eyebrow: "Why ZD Intelligence",
      heading: "Why organisations choose ZD Intelligence",
      sub: "A consulting partner focused on practical outcomes, not theoretical frameworks or vendor lock-in.",
      items: [
        { icon: "🎯", title: "Practical AI Over Hype", body: "We focus on AI applications that deliver measurable business value — not technology for its own sake." },
        { icon: "🏢", title: "Business-First Recommendations", body: "Every recommendation is driven by your business objectives, not by what is technically interesting." },
        { icon: "🔒", title: "Security-Conscious Implementation", body: "Security and data privacy are considered from the start — not bolted on at the end." },
        { icon: "⚖️", title: "Vendor-Neutral Guidance", body: "We recommend the right tool for your needs — not the tool that pays the highest referral fee." },
        { icon: "📊", title: "Measurable Outcomes", body: "Every engagement is defined by clear outcomes — time saved, decisions improved, or risk reduced." },
        { icon: "🗣️", title: "English & Arabic Delivery", body: "All services delivered in English and Arabic. Nuance and context are never lost in translation." },
        { icon: "🤝", title: "Flexible Engagement Models", body: "From focused assessments to ongoing advisory — engagements structured around your needs and budget." },
      ],
    },
    techStack: {
      eyebrow: "Technology",
      heading: "Technologies we work with",
      sub: "We are vendor-neutral and select the right tools for each engagement. These are the platforms and frameworks we work with most frequently.",
    },
    process: {
      eyebrow: "How It Works",
      heading: "From first call to live system",
      sub: "A simple, transparent process that takes you from problem to production — with no surprises.",
      steps: [
        { number: "01", title: "Discovery", body: "A focused session to understand your operations, identify AI opportunities, and define what success looks like for your organisation." },
        { number: "02", title: "Design", body: "We design the solution — workflows, integrations, and data flows — and align on scope, timeline, and expected outcomes." },
        { number: "03", title: "Build & Deploy", body: "We build, test, and deploy your AI system alongside your team — with clear milestones and full transparency throughout." },
        { number: "04", title: "Optimise", body: "Post-launch monitoring, performance tuning, and ongoing support to ensure your system keeps delivering as your business evolves." },
      ],
    },
    capabilities: {
      eyebrow: "Capabilities",
      heading: "Capabilities & Example Engagements",
      sub: "Examples of the types of engagements we design and deliver. These illustrate our approach and methodology — not fabricated case studies.",
      challengeLabel: "Challenge",
      approachLabel: "Approach",
      outcomeLabel: "Potential Outcome",
      exampleLabel: "Example engagement — space reserved for future case study",
      disclaimer: "Real client outcomes will be added as engagements mature and permissions allow. We do not fabricate results or client claims.",
      items: [
        {
          icon: "🔍",
          title: "AI Productivity Assessment",
          challenge: "An organisation wants to understand where AI can genuinely improve productivity but lacks a clear starting point.",
          approach: "Structured discovery sessions with key stakeholders, process mapping, and prioritised opportunity identification.",
          outcome: "A prioritised list of AI opportunities with effort-value ratings and a recommended starting point.",
        },
        {
          icon: "🧠",
          title: "Internal Knowledge Assistant",
          challenge: "Staff spend significant time searching for internal documentation, policies, and procedures.",
          approach: "Design and build a RAG-based assistant that allows natural language queries across internal knowledge bases — on secure, private infrastructure.",
          outcome: "Faster access to internal knowledge, reduced search time, and improved consistency in process adherence.",
        },
        {
          icon: "⚡",
          title: "Workflow Automation Project",
          challenge: "Manual, repetitive processes are consuming team capacity and introducing errors.",
          approach: "Process analysis, automation design, and deployment of AI-powered workflows integrated with existing tools.",
          outcome: "Reduced manual effort, improved accuracy, and freed team capacity for higher-value work.",
        },
        {
          icon: "🔒",
          title: "AI Governance Review",
          challenge: "An organisation is using or planning to deploy AI but lacks governance structures to manage associated risks.",
          approach: "Review of current AI usage, risk identification, gap analysis against governance best practices, and policy recommendations.",
          outcome: "A clear picture of current AI risks and a practical governance framework tailored to the organisation.",
        },
      ],
    },
    founder: {
      label: "Founder & Principal Consultant",
      founderTitle: "Founder & Principal Consultant",
      photoSoon: "Photo coming soon",
      skills: ["AI Engineering", "AI Automation", "Project Coordination", "Cybersecurity", "English & Arabic"],
      bio: [
        "Zaid Aljumaa is an AI Engineer, Project Coordinator, and Technology Consultant focused on helping organisations adopt AI, automate business processes, and implement secure intelligence systems.",
        "His background combines AI, automation, project coordination, and cybersecurity — allowing him to bridge the gap between business objectives and practical technology implementation.",
        "Through ZD Intelligence, he helps organisations identify AI opportunities, improve operational efficiency, and build solutions that deliver measurable outcomes.",
      ],
      btn: "Learn More About Our Approach",
    },
    about: {
      label: "About ZD Intelligence",
      heading: "A trusted AI consulting",
      headingItalic: "partner.",
      p1: "ZD Intelligence is a focused AI consulting practice that helps organisations adopt AI, automate operations, and implement secure intelligence systems that deliver measurable business value.",
      p2: "We work in English and Arabic, remotely and on-site — serving GCC organisations and international businesses with the same rigour and commitment.",
      btn: "Our Approach",
      features: [
        { icon: "🎯", label: "Strategy", desc: "AI roadmaps & advisory" },
        { icon: "🎓", label: "Training", desc: "Workshops & programmes" },
        { icon: "⚡", label: "Automation", desc: "AI-powered workflows" },
        { icon: "🔒", label: "Governance", desc: "Secure, responsible AI" },
      ],
    },
    faq: {
      eyebrow: "FAQs",
      heading: "Common questions",
      items: [
        { question: "How quickly can we see results?", answer: "Most organisations identify their first AI opportunity in the initial Discovery session. A deployed prototype can be running within 2–4 weeks depending on scope and data availability." },
        { question: "Do you work with Arabic-language content and systems?", answer: "Yes. All services are available in Arabic and English. We assess Arabic-language quality across all AI tools before making recommendations." },
        { question: "Can you integrate with our existing tools?", answer: "Yes. We build systems that connect to what you already use — Microsoft 365, Google Workspace, Salesforce, SAP, custom ERPs, and more." },
        { question: "Do we need a large amount of data to get started?", answer: "Not necessarily. Some automation use cases require minimal data. For intelligence systems, we assess data quality and volume upfront and recommend approaches that match what you have." },
        { question: "What company sizes do you work with?", answer: "From growth-stage businesses to large enterprises across the GCC and internationally. We scale our approach to match your organisation's size and complexity." },
        { question: "Do we need an existing AI strategy to work with you?", answer: "Not at all. Many clients come to us precisely because they don't have one yet. We help you build it from first principles and turn it into a concrete action plan." },
      ],
    },
    resources: {
      label: "Resources",
      heading: "Practical AI guides & insights",
      sub: "No-fluff content on AI consulting, automation, governance, and making AI work in real organisations.",
      comingSoon: "Coming soon",
      all: "All",
      guide: "Guide",
      article: "Article",
      items: [
        { category: "Article", title: "AI Automation Opportunities for SMEs", excerpt: "A practical guide to the highest-value AI automation use cases for small and medium businesses — and how to evaluate which ones apply to your operations." },
        { category: "Guide", title: "Building Internal AI Assistants Securely", excerpt: "How to design and deploy internal knowledge assistants using RAG architecture — with security and data privacy considered from the start." },
        { category: "Article", title: "AI Governance for GCC Organisations", excerpt: "A practical overview of AI governance considerations for organisations operating in the Gulf region — covering regulatory context, risk management, and responsible use." },
        { category: "Guide", title: "10 Processes Every Business Should Automate", excerpt: "The ten most impactful business processes for AI automation — ranked by implementation effort and expected return." },
        { category: "Article", title: "RAG vs Traditional Search: What Businesses Need to Know", excerpt: "A plain-language explanation of Retrieval-Augmented Generation — what it is, when it beats traditional search, and what it takes to implement it well." },
        { category: "Guide", title: "AI Adoption Roadmap for Growing Businesses", excerpt: "A step-by-step framework for building an AI adoption roadmap — from identifying opportunities to deploying your first production system." },
      ],
    },
  },

  ar: {
    nav: {
      services: "الخدمات",
      about: "من نحن",
      resources: "المصادر",
      contact: "تواصل معنا",
      bookCall: "احجز تقييماً مجانياً",
    },
    hero: {
      eyebrow: "استشارات الذكاء الاصطناعي والأتمتة وأنظمة الاستخبارات",
      headline: "استشارات الذكاء الاصطناعي والأتمتة وأنظمة الاستخبارات",
      subheadline:
        "نساعد المؤسسات على تحديد فرص الذكاء الاصطناعي وأتمتة العمليات وتنفيذ أنظمة استخبارات آمنة تُحقق قيمة أعمال قابلة للقياس.",
      cta1: "احجز تقييم فرص ذكاء اصطناعي مجانياً",
      cta2: "استكشف خدماتنا",
    },
    footer: {
      tagline:
        "استشارات الذكاء الاصطناعي والأتمتة وأنظمة الاستخبارات للمؤسسات الحديثة. ذكاء اصطناعي عملي لا ضجيج. نتائج لا وعود.",
      navigation: "التنقل",
      getInTouch: "تواصل معنا",
      bookCall: "احجز تقييماً مجانياً ←",
      bookCallBtn: "احجز تقييماً مجانياً",
      rights: "جميع الحقوق محفوظة.",
      sub: "استشارات الذكاء الاصطناعي · الأتمتة · أنظمة الاستخبارات",
    },
    cta: {
      eyebrow: "ابدأ الآن",
      headline: "هل أنت مستعد لاستكشاف ما يمكن أن يفعله الذكاء الاصطناعي لمؤسستك؟",
      sub: "بدون التزام. توصيات عملية. خطوات تالية واضحة.",
      btn1: "احجز تقييم فرص ذكاء اصطناعي مجانياً",
      btn2: "جدول جلسة استراتيجية أتمتة",
    },
    services: {
      eyebrow: "الخدمات",
      heading: "أربعة مجالات خدمية متخصصة",
      sub: "من الاستراتيجية والتدريب إلى الأتمتة والحوكمة — خدمات ذكاء اصطناعي عملية مصممة حول نتائج قابلة للقياس.",
      learnMore: "اعرف المزيد",
      items: [
        {
          tagline: "الوضوح قبل الالتزام",
          title: "استشارات وتوجيهات الذكاء الاصطناعي",
          summary:
            "مساعدة المؤسسات في تحديد فرص الذكاء الاصطناعي وتقييم الجاهزية وإنشاء خارطة طريق للتنفيذ وتطوير استراتيجيات عملية لتبني الذكاء الاصطناعي.",
          outcomes: [
            "تقييمات فرص الذكاء الاصطناعي",
            "خارطة طريق تبني الذكاء الاصطناعي",
            "مراجعات جاهزية الذكاء الاصطناعي",
            "الاستشارات التنفيذية للذكاء الاصطناعي",
          ],
          cta: "احجز جلسة استراتيجية",
          slug: "ai-strategy",
          icon: "🎯",
        },
        {
          tagline: "بناء الكفاءات الداخلية",
          title: "ورش العمل والتدريب على الذكاء الاصطناعي",
          summary:
            "برامج تدريب تفاعلية مصممة لتحسين فهم الذكاء الاصطناعي والإنتاجية والتبني ووعي الحوكمة والاستخدام المسؤول.",
          outcomes: [
            "ورش العمل التنفيذية",
            "تدريب الفرق على الإنتاجية",
            "برامج التوعية بالذكاء الاصطناعي",
            "تدريب الحوكمة والذكاء الاصطناعي المسؤول",
          ],
          cta: "الاستفسار عن التدريب",
          slug: "ai-workshops",
          icon: "🎓",
        },
        {
          tagline: "بناء أنظمة تُحقق النتائج",
          title: "أتمتة الذكاء الاصطناعي وأنظمة الاستخبارات",
          summary:
            "تصميم وتنفيذ أنظمة مدعومة بالذكاء الاصطناعي تُؤتمت سير العمل وتحسن صنع القرار وتزيد الكفاءة التشغيلية.",
          outcomes: [
            "المساعدون الداخليون وأنظمة المعرفة",
            "أتمتة سير العمل وذكاء المستندات",
            "أنظمة الجيل المعزز بالاسترجاع (RAG)",
            "وكلاء الذكاء الاصطناعي وأدوات دعم القرار",
          ],
          cta: "ناقش احتياجاتك في الأتمتة",
          slug: "ai-automation",
          icon: "⚡",
        },
        {
          tagline: "انشر بثقة",
          title: "مراجعات أمن وحوكمة الذكاء الاصطناعي",
          summary:
            "تقييم مخاطر الذكاء الاصطناعي وجاهزية الحوكمة والضوابط الأمنية وممارسات التنفيذ المسؤولة عبر مؤسستك.",
          outcomes: [
            "تقييمات مخاطر الذكاء الاصطناعي",
            "مراجعات إطار حوكمة الذكاء الاصطناعي",
            "توصيات السياسات والضوابط",
            "مراجعات أمان أنظمة الذكاء الاصطناعي",
          ],
          cta: "طلب مراجعة الحوكمة",
          slug: "ai-security",
          icon: "🔒",
        },
      ],
    },
    whoWeWorkWith: {
      eyebrow: "من نعمل معه",
      heading: "المؤسسات التي نساعدها على تبني الذكاء الاصطناعي بفعالية",
      sub: "نعمل مع طيف واسع من المؤسسات عبر القطاعات والجغرافيات — من الشركات الصغيرة والمتوسطة إلى الشركات الكبيرة التي تُوسّع برامجها القائمة.",
      items: [
        { icon: "🏢", title: "الشركات الصغيرة والمتوسطة", body: "شركات نامية تسعى إلى أتمتة العمليات وتحسين الإنتاجية والمنافسة بفعالية أكبر باستخدام الذكاء الاصطناعي." },
        { icon: "📈", title: "المؤسسات النامية", body: "مؤسسات تتوسع بسرعة وتحتاج إلى أنظمة ذكاء اصطناعي تنمو معها — لا حلولاً تتعطل تحت الضغط." },
        { icon: "⚙️", title: "فرق العمليات", body: "قادة العمليات الذين يريدون أتمتة العمليات اليدوية وتقليل الأخطاء وتحرير فرقهم للعمل ذي القيمة الأعلى." },
        { icon: "💼", title: "شركات الخدمات المهنية", body: "شركات الاستشارات والقانون والمالية والخدمات الاستشارية التي تبني قدرات الذكاء الاصطناعي لتحسين خدمة العملاء." },
        { icon: "🌍", title: "مؤسسات دول مجلس التعاون الخليجي", body: "الشركات في منطقة الخليج التي تستفيد من قدرتنا في اللغة العربية وفهمنا للسوق الإقليمية." },
        { icon: "🌐", title: "الشركات الدولية", body: "المنظمات الدولية التي تبحث عن شريك استشاري موثوق في الذكاء الاصطناعي مع قدرة تسليم ثنائية اللغة." },
      ],
    },
    whyChoose: {
      eyebrow: "لماذا ZD Intelligence",
      heading: "لماذا تختار المؤسسات ZD Intelligence",
      sub: "شريك استشاري يركز على النتائج العملية، لا على الأطر النظرية أو قيود الموردين.",
      items: [
        { icon: "🎯", title: "الذكاء الاصطناعي العملي لا الضجيج", body: "نركز على تطبيقات الذكاء الاصطناعي التي تُحقق قيمة أعمال قابلة للقياس — لا التكنولوجيا لذاتها." },
        { icon: "🏢", title: "توصيات تضع الأعمال أولاً", body: "كل توصية مدفوعة بأهدافك التجارية، لا بما هو مثير تقنياً." },
        { icon: "🔒", title: "تنفيذ واعٍ بالأمن", body: "الأمن وخصوصية البيانات تُراعى من البداية، لا تُضاف في النهاية." },
        { icon: "⚖️", title: "توجيه محايد من الموردين", body: "نوصي بالأداة المناسبة لاحتياجاتك، لا بالأداة التي تدفع أعلى عمولة." },
        { icon: "📊", title: "نتائج قابلة للقياس", body: "كل مشاركة مُحددة بنتائج واضحة — وقت موفَّر أو قرارات محسَّنة أو مخاطر مُخففة." },
        { icon: "🗣️", title: "التسليم بالعربية والإنجليزية", body: "جميع الخدمات متاحة بالعربية والإنجليزية. الدقة والسياق لا يُفقدان في الترجمة أبداً." },
        { icon: "🤝", title: "نماذج مشاركة مرنة", body: "من التقييمات المركّزة إلى الاستشارة المستمرة — مشاركات مُصممة وفق احتياجاتك وميزانيتك." },
      ],
    },
    techStack: {
      eyebrow: "التقنية",
      heading: "التقنيات التي نعمل بها",
      sub: "نحن محايدون تجاه الموردين ونختار الأدوات المناسبة لكل مشاركة. هذه المنصات والأطر التي نعمل معها بشكل متكرر.",
    },
    process: {
      eyebrow: "كيف نعمل",
      heading: "من أول مكالمة إلى نظام حي",
      sub: "عملية بسيطة وشفافة تأخذك من المشكلة إلى الإنتاج — بدون مفاجآت.",
      steps: [
        { number: "01", title: "الاستكشاف", body: "جلسة مركّزة لفهم عملياتك وتحديد فرص الذكاء الاصطناعي وتحديد ما يعنيه النجاح لمؤسستك." },
        { number: "02", title: "التصميم", body: "نُصمّم الحل — سير العمل والتكاملات وتدفقات البيانات — ونتوافق على النطاق والجدول الزمني والنتائج المتوقعة." },
        { number: "03", title: "البناء والنشر", body: "نبني ونختبر وننشر نظام الذكاء الاصطناعي إلى جانب فريقك — بمراحل واضحة وشفافية كاملة." },
        { number: "04", title: "التحسين", body: "المراقبة بعد الإطلاق وضبط الأداء والدعم المستمر لضمان استمرار تقديم نظامك نتائج متميزة." },
      ],
    },
    capabilities: {
      eyebrow: "القدرات",
      heading: "القدرات والمشاركات النموذجية",
      sub: "أمثلة على أنواع المشاركات التي نصممها وننفذها — توضيح لنهجنا ومنهجيتنا، لا دراسات حالة مُلفَّقة.",
      challengeLabel: "التحدي",
      approachLabel: "النهج",
      outcomeLabel: "النتيجة المحتملة",
      exampleLabel: "مشاركة نموذجية — مساحة محجوزة لدراسة حالة مستقبلية",
      disclaimer: "ستُضاف نتائج العملاء الحقيقية عندما تنضج المشاركات ويتم الحصول على الأذونات. لا نُلفق نتائج أو ادعاءات عملاء.",
      items: [
        {
          icon: "🔍",
          title: "تقييم إنتاجية الذكاء الاصطناعي",
          challenge: "تريد مؤسسة فهم أين يمكن للذكاء الاصطناعي تحسين الإنتاجية بشكل حقيقي لكنها تفتقر إلى نقطة بداية واضحة.",
          approach: "جلسات اكتشاف منظمة مع أصحاب المصلحة الرئيسيين ورسم خرائط العمليات وتحديد الفرص ذات الأولوية.",
          outcome: "قائمة بأولويات فرص الذكاء الاصطناعي مع تقييمات الجهد والقيمة ونقطة بداية موصى بها.",
        },
        {
          icon: "🧠",
          title: "مساعد المعرفة الداخلي",
          challenge: "يقضي الموظفون وقتاً طويلاً في البحث عن الوثائق الداخلية والسياسات والإجراءات.",
          approach: "تصميم وبناء مساعد مدعوم بالجيل المعزز بالاسترجاع (RAG) يتيح استعلامات باللغة الطبيعية عبر قواعد المعرفة الداخلية — على بنية تحتية آمنة وخاصة.",
          outcome: "وصول أسرع إلى المعرفة الداخلية وتقليل وقت البحث وتحسين الاتساق في الالتزام بالعمليات.",
        },
        {
          icon: "⚡",
          title: "مشروع أتمتة سير العمل",
          challenge: "العمليات اليدوية المتكررة تستهلك طاقة الفريق وتُدخل أخطاء.",
          approach: "تحليل العمليات وتصميم الأتمتة ونشر سير العمل المدعوم بالذكاء الاصطناعي المتكامل مع الأدوات الحالية.",
          outcome: "تقليل الجهد اليدوي وتحسين الدقة وتحرير طاقة الفريق للعمل ذي القيمة الأعلى.",
        },
        {
          icon: "🔒",
          title: "مراجعة حوكمة الذكاء الاصطناعي",
          challenge: "مؤسسة تستخدم أو تخطط لنشر الذكاء الاصطناعي لكنها تفتقر إلى هياكل الحوكمة لإدارة المخاطر المرتبطة.",
          approach: "مراجعة استخدام الذكاء الاصطناعي الحالي وتحديد المخاطر وتحليل الفجوات مقارنة بأفضل ممارسات الحوكمة وتقديم التوصيات.",
          outcome: "صورة واضحة للمخاطر الحالية للذكاء الاصطناعي وإطار حوكمة عملي مُصمَّم خصيصاً للمؤسسة.",
        },
      ],
    },
    founder: {
      label: "المؤسس والمستشار الرئيسي",
      founderTitle: "المؤسس والمستشار الرئيسي",
      photoSoon: "الصورة قريباً",
      skills: ["هندسة الذكاء الاصطناعي", "أتمتة الذكاء الاصطناعي", "تنسيق المشاريع", "الأمن السيبراني", "الإنجليزية والعربية"],
      bio: [
        "زيد الجمعة مهندس ذكاء اصطناعي ومنسق مشاريع ومستشار تكنولوجيا متخصص في مساعدة المؤسسات على تبني الذكاء الاصطناعي وأتمتة العمليات التجارية وتنفيذ أنظمة الاستخبارات الآمنة.",
        "تجمع خلفيته بين الذكاء الاصطناعي والأتمتة وتنسيق المشاريع والأمن السيبراني — مما يتيح له سد الفجوة بين الأهداف التجارية والتنفيذ التكنولوجي العملي.",
        "من خلال ZD Intelligence، يساعد المؤسسات على تحديد فرص الذكاء الاصطناعي وتحسين الكفاءة التشغيلية وبناء حلول تُحقق نتائج قابلة للقياس.",
      ],
      btn: "تعرف على المزيد حول نهجنا",
    },
    about: {
      label: "عن ZD Intelligence",
      heading: "شريك استشاري موثوق في الذكاء الاصطناعي.",
      headingItalic: "",
      p1: "ZD Intelligence ممارسة استشارية متخصصة في الذكاء الاصطناعي تساعد المؤسسات على تبني الذكاء الاصطناعي وأتمتة العمليات وتنفيذ أنظمة الاستخبارات الآمنة التي تُحقق قيمة أعمال قابلة للقياس.",
      p2: "نعمل بالإنجليزية والعربية، عن بُعد وفي الموقع — خدمة مؤسسات دول مجلس التعاون الخليجي والشركات الدولية بنفس الصرامة والالتزام.",
      btn: "نهجنا",
      features: [
        { icon: "🎯", label: "الاستراتيجية", desc: "خرائط الطريق والاستشارات" },
        { icon: "🎓", label: "التدريب", desc: "ورش العمل والبرامج" },
        { icon: "⚡", label: "الأتمتة", desc: "سير العمل المدعوم بالذكاء الاصطناعي" },
        { icon: "🔒", label: "الحوكمة", desc: "ذكاء اصطناعي آمن ومسؤول" },
      ],
    },
    faq: {
      eyebrow: "الأسئلة الشائعة",
      heading: "أسئلة شائعة",
      items: [
        { question: "كم من الوقت يستغرق رؤية النتائج؟", answer: "تحدد معظم المؤسسات أول فرصة للذكاء الاصطناعي في جلسة الاستكشاف الأولى. يمكن تشغيل نموذج أولي مُنشأ خلال 2–4 أسابيع بحسب النطاق وتوافر البيانات." },
        { question: "هل تعملون مع المحتوى والأنظمة باللغة العربية؟", answer: "نعم. جميع الخدمات متاحة بالعربية والإنجليزية. نقيّم جودة اللغة العربية في جميع أدوات الذكاء الاصطناعي قبل تقديم أي توصية." },
        { question: "هل يمكنكم التكامل مع أدواتنا الحالية؟", answer: "نعم. نبني أنظمة تتصل بما تستخدمه بالفعل — Microsoft 365 وGoogle Workspace وSalesforce وSAP وأنظمة ERP المخصصة والمزيد." },
        { question: "هل نحتاج إلى كمية كبيرة من البيانات للبدء؟", answer: "ليس بالضرورة. بعض حالات استخدام الأتمتة تتطلب بيانات ضئيلة. لأنظمة الاستخبارات، نقيّم جودة البيانات وحجمها مسبقاً ونوصي بأساليب تتناسب مع ما لديك." },
        { question: "ما أحجام الشركات التي تعملون معها؟", answer: "من الشركات في مرحلة النمو إلى الشركات الكبيرة عبر دول مجلس التعاون الخليجي ودولياً. نُعدّل نهجنا ليتناسب مع حجم مؤسستك وتعقيدها." },
        { question: "هل نحتاج إلى استراتيجية ذكاء اصطناعي قائمة للعمل معكم؟", answer: "لا على الإطلاق. يأتي كثير من عملائنا إلينا تحديداً لأنهم لا يمتلكون استراتيجية بعد. نساعدك في بنائها من المبادئ الأساسية وتحويلها إلى خطة عمل ملموسة." },
      ],
    },
    resources: {
      label: "المصادر",
      heading: "أدلة ورؤى عملية للذكاء الاصطناعي",
      sub: "محتوى عملي حول استشارات الذكاء الاصطناعي والأتمتة والحوكمة وجعل الذكاء الاصطناعي يعمل في المؤسسات الحقيقية.",
      comingSoon: "قريباً",
      all: "الكل",
      guide: "دليل",
      article: "مقال",
      items: [
        { category: "مقال", title: "فرص أتمتة الذكاء الاصطناعي للشركات الصغيرة والمتوسطة", excerpt: "دليل عملي لحالات استخدام أتمتة الذكاء الاصطناعي الأعلى قيمة للشركات الصغيرة والمتوسطة — وكيفية تقييم أيها ينطبق على عملياتك." },
        { category: "دليل", title: "بناء مساعدي الذكاء الاصطناعي الداخليين بشكل آمن", excerpt: "كيفية تصميم ونشر مساعدي المعرفة الداخليين باستخدام بنية RAG — مع مراعاة الأمن وخصوصية البيانات من البداية." },
        { category: "مقال", title: "حوكمة الذكاء الاصطناعي لمؤسسات دول مجلس التعاون الخليجي", excerpt: "نظرة عامة عملية على اعتبارات حوكمة الذكاء الاصطناعي للمؤسسات العاملة في منطقة الخليج — تغطي السياق التنظيمي وإدارة المخاطر." },
        { category: "دليل", title: "10 عمليات يجب على كل شركة أتمتتها", excerpt: "العشر عمليات التجارية الأكثر تأثيراً لأتمتة الذكاء الاصطناعي — مرتبة حسب جهد التنفيذ والعائد المتوقع." },
        { category: "مقال", title: "RAG مقابل البحث التقليدي: ما يحتاج الأعمال معرفته", excerpt: "شرح بسيط للجيل المعزز بالاسترجاع — ما هو ومتى يتفوق على البحث التقليدي وما يتطلبه تنفيذه بشكل جيد." },
        { category: "دليل", title: "خارطة طريق تبني الذكاء الاصطناعي للشركات النامية", excerpt: "إطار خطوة بخطوة لبناء خارطة طريق تبني الذكاء الاصطناعي — من تحديد الفرص إلى نشر أول نظام إنتاج." },
      ],
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
