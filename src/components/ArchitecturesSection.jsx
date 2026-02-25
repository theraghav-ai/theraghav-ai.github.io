import siteConfig from "@/data/siteConfig";
import { FaFileInvoice, FaBox, FaCommentDots } from "react-icons/fa6";

const iconMap = {
  FaFileInvoice,
  FaBox,
  FaCommentDots,
};

export default function ArchitecturesSection() {
  const { coderSwarm, enterprise } = siteConfig.architectures;

  return (
    <section id="architectures" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section heading */}
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
          Multi-Agent <span className="ai-highlight">AI Workflows</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-16">
          {/* ── Left: Coder Swarm ── */}
          <div className="p-10 glass-card rounded-[40px] border-l-4 border-blue-500">
            <h3 className="text-2xl font-bold mb-6 italic">
              <span className="ai-highlight">{coderSwarm.title.highlight}</span>
              {coderSwarm.title.rest}
            </h3>
            <p
              className="text-slate-400 leading-relaxed mb-8"
              dangerouslySetInnerHTML={{ __html: coderSwarm.description }}
            />
            <div className="grid grid-cols-2 gap-4">
              {coderSwarm.agents.map((agent) => (
                <div key={agent.name} className="agent-node">
                  <span className={`${agent.color} font-bold`}>
                    {agent.name}
                  </span>
                  <p className="text-[10px] text-center">{agent.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right: Enterprise AI ── */}
          <div className="p-10 glass-card rounded-[40px] border-l-4 border-purple-500">
            <h3 className="text-2xl font-bold mb-6 italic">
              <span className="ai-highlight">{enterprise.title.highlight}</span>
              {enterprise.title.rest}
            </h3>
            <p
              className="text-slate-400 leading-relaxed mb-8"
              dangerouslySetInnerHTML={{ __html: enterprise.description }}
            />
            <ul className="space-y-4">
              {enterprise.items.map((item) => {
                const Icon = iconMap[item.icon];
                return (
                  <li
                    key={item.text}
                    className="flex items-center gap-3 p-3 bg-white/5 rounded-xl border border-white/5"
                  >
                    {Icon && <Icon className={item.color} />}
                    <span className="text-sm">{item.text}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
