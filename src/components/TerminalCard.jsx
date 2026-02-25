import siteConfig from "@/data/siteConfig";

export default function TerminalCard() {
  const { terminal } = siteConfig;

  return (
    <div className="relative">
      <div className="glass-card p-8 rounded-3xl border-blue-500/20 shadow-2xl shadow-blue-500/10">
        {/* Traffic lights + title */}
        <div className="flex justify-between items-center mb-6">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
          </div>
          <span className="text-[10px] font-mono text-slate-500 tracking-widest uppercase">
            {terminal.title}
          </span>
        </div>

        {/* Terminal lines */}
        <div className="font-mono text-sm space-y-4">
          {terminal.lines.map((line, i) => (
            <div
              key={i}
              className={`flex gap-3 ${
                line.indent ? "pl-4 border-l border-blue-500/30" : ""
              }`}
            >
              <span className={line.color}>{line.label}:</span>
              <span
                className={line.indent ? "text-slate-400" : "text-slate-300"}
              >
                {line.text}
              </span>
            </div>
          ))}

          {/* Active threads */}
          <div className="pt-2 text-[10px] text-blue-500/60 animate-pulse">
            {terminal.activeThreads}
          </div>
        </div>
      </div>
    </div>
  );
}
