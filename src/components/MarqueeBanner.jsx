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
  FaServer,
  FaMicrochip,
  FaEye,
  FaChartLine,
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
  FaServer,
  FaMicrochip,
  FaEye,
  FaChartLine,
};
import Marquee from "react-fast-marquee";

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
const App = () => (
  <div className="w-[90%] mx-auto rounded-md py-12 bg-white/[0.02] border-y border-white/5 overflow-hidden">
    <Marquee speed={90}>
      <SkillSet />
    </Marquee>
  </div>
);

export default App;
