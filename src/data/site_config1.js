/*
 * ╔══════════════════════════════════════════════════════════════╗
 * ║  SITE CONFIGURATION — PROFESSIONAL EDITION                  ║
 * ║  Clean, valid JavaScript for Next.js Deployment              ║
 * ╚══════════════════════════════════════════════════════════════╝
 */

const siteConfig = {
  /* ── Identity ── */
  name: "RAGHAV THAKUR",
  logoName: "RAGHAV",
  logoDot: ".",
  logoSuffix: "AI",

  /* ── Contact ── */
  email: "studentdpsdharan@gmail.com",
  linkedIn: "https://www.linkedin.com/in/raghav-thakur/",
  github: "#",

  /* ── Hero ── */
  badge: "🚀 AI SYSTEMS ARCHITECT & FULL-STACK ENGINEER",
  heroTitle: {
    before: "Engineering Scalable ",
    highlight: "Intelligence & Backend Systems.",
  },
  heroDescription: [
    { text: "Expertise in " },
    { text: "Custom LLM Fine-tuning", className: "ai-highlight" },
    { text: " and " },
    { text: "Agentic RAG Pipelines", className: "text-blue-400 font-bold" },
    {
      text: ". Building production-grade AI solutions and high-performance backends with ",
    },
    { text: "Go, Python, and Next.js", className: "text-purple-400 font-bold" },
    { text: "." },
  ],
  heroCTA: {
    primary: { label: "EXPLORE ARCHITECTURES", href: "#architectures" },
    secondary: { label: "COLLABORATE" },
  },

  /* ── Terminal Card ── */
  terminal: {
    title: "Intelligence_Orchestration_v1.0",
    lines: [
      {
        label: "SYSTEM",
        color: "text-blue-500",
        text: "Initializing Custom-Tuned LLM Model...",
      },
      {
        label: "KNOWLEDGE",
        color: "text-purple-400",
        text: "RAG Pipeline: Contextualizing with Domain Data (70%+ Accuracy).",
        indent: true,
      },
      {
        label: "SECURITY",
        color: "text-green-400",
        text: "Applying Logic Guardrails & Multi-Turn Context Memory.",
        indent: true,
      },
      {
        label: "INFRA",
        color: "text-orange-400",
        text: "Deploying via vLLM on Managed GPU Clusters.",
        indent: true,
      },
    ],
    activeThreads:
      "_ACTIVE_THREADS: [AGENT_RESOLVER, GO_BACKEND, ANALYTICS_ENGINE]",
  },

  /* ── Marquee Skills ── */
  skills: [
    { name: "LLM FINE-TUNING", icon: "FaMicrochip", color: "text-purple-500" },
    { name: "AGENTIC RAG", icon: "FaRobot", color: "text-blue-500" },
    { name: "GOLANG BACKEND", icon: "FaGolang", color: "text-cyan-500" },
    { name: "NEXT.JS FRONTEND", icon: "FaReact", color: "text-blue-300" },
    { name: "COMPUTER VISION (YOLO)", icon: "FaEye", color: "text-red-500" },
    { name: "CLICKHOUSE / SQL", icon: "FaDatabase", color: "text-orange-500" },
    { name: "TIME-SERIES ML", icon: "FaChartLine", color: "text-green-500" },
    { name: "AI DEPLOYMENT (VLLM)", icon: "FaServer", color: "text-gray-400" },
  ],

  /* ── Architectures ── */
  architectures: {
    aiStack: {
      title: { highlight: "Domain-Specific", rest: " AI Life Cycle" },
      description:
        'A comprehensive approach to AI deployment—from <span class="text-blue-300 font-semibold">Dataset Preparation</span> and Fine-tuning to production-grade <span class="text-green-300 font-semibold">Inference APIs</span>.',
      agents: [
        {
          name: "RESEARCH",
          desc: "Exploratory AI & Model Tuning",
          color: "text-blue-400",
        },
        {
          name: "ETL",
          desc: "SQL to Clickhouse Data Pipelines",
          color: "text-green-400",
        },
        {
          name: "VISION",
          desc: "Image & Spatial Data Analysis",
          color: "text-purple-400",
        },
        {
          name: "DEPLOY",
          desc: "High-Throughput Model Hosting",
          color: "text-orange-400",
        },
      ],
    },
    enterprise: {
      title: { highlight: "Enterprise", rest: " Systems & Utility" },
      description:
        'Building scalable <span class="text-white">Backend Gateways</span> and personal utility applications like <span class="text-white">Household Expense Trackers</span>.',
      items: [
        {
          text: "Production-Grade Go Backends",
          icon: "FaCode",
          color: "text-blue-400",
        },
        {
          text: "Next.js Full-Stack Applications",
          icon: "FaDesktop",
          color: "text-green-400",
        },
        {
          text: "Automated Data Scrapers & Generators",
          icon: "FaCogs",
          color: "text-purple-400",
        },
      ],
    },
  },

  /* ── Capabilities ── */
  capabilities: [
    {
      title: "Custom LLM Fine-Tuning",
      description:
        "Specializing in LoRA adapters and model merging to create domain-expert AI systems from raw data.",
      icon: "FaMicrochip",
      accent: "blue",
    },
    {
      title: "Agentic RAG Systems",
      description:
        "Designing autonomous knowledge retrieval pipelines with integrated guardrails and memory.",
      icon: "FaBrain",
      accent: "purple",
    },
    {
      title: "Scalable Backend Engineering",
      description:
        "Developing high-concurrency gateways in Go and Python with multi-database support (SQL/Clickhouse).",
      icon: "FaTerminal",
      accent: "green",
    },
    {
      title: "Data Science & Vision",
      description:
        "Applying Computer Vision (YOLO) and ML analysis to text, image, and time-series datasets.",
      icon: "FaChartBar",
      accent: "orange",
    },
  ],

  /* ── Insights ── */
  insights: [
    {
      category: "AI Research",
      title: "The 80/20 Rule in AI Engineering",
      description:
        "Why experimentation and iterative research-driven trials are the backbone of usable AI outcomes.",
      accent: "blue",
    },
    {
      category: "Architecture",
      title: "Hybrid Database Strategies",
      description:
        "Leveraging the speed of Clickhouse with the reliability of SQL for real-time analytics.",
      accent: "purple",
    },
  ],

  /* ── Footer ── */
  footerTagline: "Bridging Enterprise Logic with Autonomous Intelligence.",
  footerRole: "AI/ML Engineer & Full Stack Developer | Patna, India",
};

export default siteConfig;
