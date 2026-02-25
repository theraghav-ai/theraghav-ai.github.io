import siteConfig from "@/data/siteConfig";
import {
  FaMicrochip,
  FaChess,
  FaBrain,
  FaRocket,
  FaTerminal,
  FaChartBar,
  FaEye,
  FaCode,
} from "react-icons/fa6";

const iconMap = {
  FaMicrochip,
  FaChess,
  FaBrain,
  FaRocket,
  FaTerminal,
  FaChartBar,
  FaEye,
  FaCode,
};

const accentClasses = {
  blue: {
    hoverBg: "hover:bg-blue-500/5",
    hoverBorder: "hover:border-blue-500/40",
    iconColor: "text-blue-400",
  },
  purple: {
    hoverBg: "hover:bg-purple-500/5",
    hoverBorder: "hover:border-purple-500/40",
    iconColor: "text-purple-400",
  },
  green: {
    hoverBg: "hover:bg-green-500/5",
    hoverBorder: "hover:border-green-500/40",
    iconColor: "text-green-400",
  },
  orange: {
    hoverBg: "hover:bg-orange-500/5",
    hoverBorder: "hover:border-orange-500/40",
    iconColor: "text-orange-400",
  },
};

export default function CapabilitiesSection() {
  const { capabilities } = siteConfig;

  return (
    <section id="capabilities" className="py-32 px-6 bg-white/[0.01]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-16 uppercase tracking-[0.2em] text-slate-500">
          Specialized <span className="text-blue-400">AI</span> Domain Skills
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {capabilities.map((cap) => {
            const Icon = iconMap[cap.icon];
            const accent = accentClasses[cap.accent];
            return (
              <div
                key={cap.title}
                className={`p-8 border border-white/10 rounded-2xl transition ${accent.hoverBg} ${accent.hoverBorder}`}
              >
                <h4 className="font-bold text-white mb-4 text-lg flex items-center gap-2">
                  {Icon && <Icon className={accent.iconColor} />}
                  {cap.title}
                </h4>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {cap.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
