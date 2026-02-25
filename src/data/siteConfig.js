/*
 * ╔══════════════════════════════════════════════════════════════╗
 * ║  SITE CONFIGURATION — Edit this file to personalize your    ║
 * ║  portfolio. All text, links, and content live here.         ║
 * ╚══════════════════════════════════════════════════════════════╝
 */

const siteConfig = {
  /* ── Identity ── */
  name: "RAGHAV THAKUR",
  logoName: "RAGHAV", // text before the dot in the nav
  logoDot: ".", // the colored dot
  logoSuffix: "AI", // text after the dot

  /* ── Contact ── */
  email: "studentdpsdharan@gmail.com",
  linkedIn: "https://www.linkedin.com/in/raghav-thakur/",
  github: "#",

  /* ── Hero ── */
  badge: "🤖 AGENTIC AI SYSTEMS ARCHITECT",
  heroTitle: {
    before: "Engineering the Future of ",
    highlight: "Autonomous AI Work.",
  },
  heroDescription: [
    { text: "Designing autonomous " },
    { text: "Multi-Agent AI Swarms", className: "ai-highlight" },
    { text: " that reason, plan, and self-correct. " },
    { text: "AI Specialist", className: "text-blue-400 font-bold" },
    {
      text: " in RAG pipelines and domain-specific LLM fine-tuning. Bridging the gap between static code and self-evolving ",
    },
    { text: "artificial intelligence", className: "text-purple-400 font-bold" },
    { text: "." },
  ],
  heroCTA: {
    primary: { label: "EXPLORE AGENT CORES", href: "#architectures" },
    secondary: { label: "COLLABORATE" }, // mailto is auto-generated from email
  },

  /* ── Terminal Card ── */
  terminal: {
    title: "Agent_Orchestration_v2.0",
    lines: [
      {
        label: "SYSTEM",
        color: "text-blue-500",
        text: "Initializing Multi-Agent Deployment...",
      },
      {
        label: "PLANNER",
        color: "text-purple-400",
        text: "Task: Build production-ready AI Resume Builder.",
        indent: true,
      },
      {
        label: "CODER",
        color: "text-green-400",
        text: "Executing Fine-tuning on DeepSeek-Coder-v2...",
        indent: true,
      },
      {
        label: "REVIEWER",
        color: "text-orange-400",
        text: "Logic validated. Deploying via LangGraph.",
        indent: true,
      },
    ],
    activeThreads: "_ACTIVE_THREADS: [RAG_ENGINE, VISION_OCR, AGENT_RESOLVER]",
  },

  /* ── Marquee Skills ── */
  skills: [
    { name: "PYTHON", icon: "FaPython", color: "text-blue-500" },
    { name: "LANGCHAIN", icon: "FaRobot", color: "text-purple-500" },
    { name: "LANGGRAPH", icon: "FaNetworkWired", color: "text-green-500" },
    { name: "AWS", icon: "FaAws", color: "text-orange-500" },
    { name: "POSTGRESQL", icon: "FaDatabase", color: "text-blue-400" },
    { name: "DOCKER", icon: "FaDocker", color: "text-blue-600" },
    { name: "GOLANG", icon: "FaGolang", color: "text-cyan-500" },
    { name: "NEXT.JS", icon: "FaReact", color: "text-blue-300" },
  ],

  /* ── Architectures ── */
  architectures: {
    coderSwarm: {
      title: { highlight: "AI-Powered", rest: " Self-Healing Coder Swarm" },
      description:
        'Deploying an autonomous <span class="text-blue-300 font-semibold">AI software team</span> where specialized sub-agents interact in a high-speed feedback loop to solve complex engineering issues with minimal human intervention.',
      agents: [
        {
          name: "PLANNER",
          desc: "Architects the solution path",
          color: "text-blue-400",
        },
        {
          name: "CODER",
          desc: "Writes clean, modular code",
          color: "text-green-400",
        },
        {
          name: "REVIEWER",
          desc: "Checks logic & performance",
          color: "text-purple-400",
        },
        {
          name: "RESOLVER",
          desc: "Fixes bugs & refactors",
          color: "text-orange-400",
        },
      ],
    },
    enterprise: {
      title: { highlight: "Enterprise AI", rest: " - HR & Logistics" },
      description:
        'From <span class="text-white">AI Resume Builders</span> that dynamically optimize career profiles to <span class="text-white">Vision Agents</span> that automate logistics tracking.',
      items: [
        {
          text: "Dynamic ATS Analysis Agents",
          icon: "FaFileInvoice",
          color: "text-purple-400",
        },
        {
          text: "OCR-Vision Intelligence Swarm",
          icon: "FaBox",
          color: "text-green-400",
        },
        {
          text: "Self-Correcting RAG Bots",
          icon: "FaCommentDots",
          color: "text-blue-400",
        },
      ],
    },
  },

  /* ── Capabilities ── */
  capabilities: [
    {
      title: "AI Fine-Tuning",
      description:
        "Optimizing advanced AI models (Gemma, Florence-2, DeepSeek) for high-accuracy local inference.",
      icon: "FaMicrochip",
      accent: "blue",
    },
    {
      title: "AI Agent Orchestration",
      description:
        "Mastery in AI frameworks (LangGraph, CrewAI) and custom sub-agent skill definition.",
      icon: "FaChess",
      accent: "purple",
    },
    {
      title: "Advanced AI RAG",
      description:
        "Self-correcting knowledge retrieval with hybrid search and vector databases.",
      icon: "FaBrain",
      accent: "green",
    },
    {
      title: "Edge AI Deployment",
      description:
        "Running production-grade vision and NLP models on constrained local hardware.",
      icon: "FaRocket",
      accent: "orange",
    },
  ],

  /* ── Insights ── */
  insights: [
    {
      category: "Architectural Patterns",
      title: "Solving Developer Bottlenecks with Multi-Agent Swarms",
      description:
        "A technical look at how the 'Planner-Coder-Reviewer' loop can automate up to 70% of routine coding tasks.",
      accent: "blue",
    },
    {
      category: "Vision & Edge",
      title: "Fine-tuning Florence-2 for Ultra-Fast OCR in Logistics",
      description:
        "Strategies for deploying vision agents that extract parcel data in sub-second inference times.",
      accent: "purple",
    },
  ],

  /* ── Footer ── */
  footerTagline: "Automating the Future of Society.",
  footerRole:
    "AI Engineer & Full Stack Developer @ Department of Posts | Patna, India",
};

export default siteConfig;
