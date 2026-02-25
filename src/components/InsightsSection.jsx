import siteConfig from "@/data/siteConfig";

const accentClasses = {
  blue: {
    hoverBorder: "hover:border-blue-500/40",
    label: "text-blue-500",
    titleHover: "group-hover:text-blue-400",
  },
  purple: {
    hoverBorder: "hover:border-purple-500/40",
    label: "text-purple-500",
    titleHover: "group-hover:text-purple-400",
  },
};

export default function InsightsSection() {
  const { insights } = siteConfig;

  return (
    <section id="insights" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-12">
          Neural <span className="text-blue-400">AI</span> Insights
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {insights.map((insight) => {
            const accent = accentClasses[insight.accent];
            return (
              <div
                key={insight.title}
                className={`group p-8 glass-card rounded-3xl border border-white/5 transition ${accent.hoverBorder}`}
              >
                <p
                  className={`text-[10px] font-bold mb-2 uppercase ${accent.label}`}
                >
                  {insight.category}
                </p>
                <h4
                  className={`text-xl font-bold mb-4 transition ${accent.titleHover}`}
                >
                  {insight.title}
                </h4>
                <p className="text-sm text-slate-500">{insight.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
