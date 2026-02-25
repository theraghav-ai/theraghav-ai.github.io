import siteConfig from "@/data/siteConfig";
import {
  FaPython,
  FaRobot,
  FaNetworkWired,
  FaAws,
  FaDatabase,
  FaDocker,
  FaGolang,
  FaReact,
} from "react-icons/fa6";

const iconMap = {
  FaPython,
  FaRobot,
  FaNetworkWired,
  FaAws,
  FaDatabase,
  FaDocker,
  FaGolang,
  FaReact,
};

export default function MarqueeBanner() {
  const { skills } = siteConfig;

  const SkillSet = () => (
    <div className="flex gap-20 items-center px-10">
      {skills.map((skill) => {
        const Icon = iconMap[skill.icon];
        return (
          <span
            key={skill.name}
            className="text-2xl font-bold text-slate-600 flex items-center gap-3"
          >
            {Icon && <Icon className={skill.color} />}
            {skill.name}
          </span>
        );
      })}
    </div>
  );

  return (
    <div className="py-12 bg-white/[0.02] border-y border-white/5 overflow-hidden">
      <div className="marquee-track">
        <SkillSet />
        <SkillSet />
      </div>
    </div>
  );
}
