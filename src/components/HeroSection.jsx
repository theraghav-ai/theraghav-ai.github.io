import siteConfig from "@/data/siteConfig";
import TerminalCard from "./TerminalCard";
import { FaEnvelope, FaLinkedin } from "react-icons/fa6";

export default function HeroSection() {
  const { name, email, linkedIn, badge, heroTitle, heroDescription, heroCTA } =
    siteConfig;

  return (
    <section className="relative min-h-screen flex items-center justify-center hero-gradient px-6 pt-20">
      <div className="max-w-7xl mx-auto w-full z-10">
        {/* ── Centered Hero Header ── */}
        <div className="text-center mb-20">
          <h1 className="text-6xl md:text-7xl font-black text-white leading-[0.95] mb-4">
            <span className="ai-highlight">{name}</span>
          </h1>

          {/* Contact links */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-8">
            <a
              href={`mailto:${email}`}
              className="flex items-center gap-2 text-slate-300 hover:text-blue-400 transition"
            >
              <FaEnvelope />
              <span className="text-sm font-medium">{email}</span>
            </a>
            <a
              href={linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-slate-300 hover:text-blue-400 transition"
            >
              <FaLinkedin />
              <span className="text-sm font-medium">LinkedIn</span>
            </a>
          </div>

          {/* AI badge */}
          <div className="ai-badge inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-slate-200 text-[10px] font-bold mb-12 tracking-[0.3em]">
            {badge}
          </div>
        </div>

        {/* ── Main Content Grid ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left — Text */}
          <div className="text-left">
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-[0.9] mb-8">
              {heroTitle.before}
              <span className="ai-highlight">{heroTitle.highlight}</span>
            </h2>

            <p className="text-slate-400 text-lg md:text-xl max-w-xl leading-relaxed mb-10">
              {heroDescription.map((part, i) =>
                part.className ? (
                  <span key={i} className={part.className}>
                    {part.text}
                  </span>
                ) : (
                  <span key={i}>{part.text}</span>
                ),
              )}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <a
                href={heroCTA.primary.href}
                className="px-10 py-4 bg-white text-black font-black rounded-full hover:scale-105 transition-all"
              >
                {heroCTA.primary.label}
              </a>
              <a
                href={`mailto:${email}`}
                className="px-10 py-4 glass-card text-white font-bold rounded-full hover:bg-white/10 transition-all"
              >
                {heroCTA.secondary.label}
              </a>
            </div>
          </div>

          {/* Right — Terminal */}
          <TerminalCard />
        </div>
      </div>
    </section>
  );
}
