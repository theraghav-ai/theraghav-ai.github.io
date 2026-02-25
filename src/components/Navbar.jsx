"use client";
import { useState } from "react";
import siteConfig from "@/data/siteConfig";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 py-4 px-6 md:px-12 flex justify-between items-center bg-black/40 backdrop-blur-xl border-b border-white/5">
      <div className="text-xl font-bold tracking-tighter text-white">
        {siteConfig.logoName}
        <span className="text-blue-500">{siteConfig.logoDot}</span>
        {siteConfig.logoSuffix}
      </div>

      {/* Desktop nav */}
      <div className="hidden md:flex space-x-8 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
        <a href="#architectures" className="hover:text-blue-400 transition">
          Agent Architectures
        </a>
        <a href="#capabilities" className="hover:text-blue-400 transition">
          Capabilities
        </a>
        <a href="#insights" className="hover:text-blue-400 transition">
          Insights
        </a>
      </div>

      {/* Mobile hamburger */}
      <button
        className="md:hidden text-white"
        onClick={() => setMobileOpen(!mobileOpen)}
        aria-label="Toggle menu"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          {mobileOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="absolute top-full left-0 w-full bg-black/90 backdrop-blur-xl border-b border-white/5 flex flex-col items-center gap-6 py-8 md:hidden text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
          <a
            href="#architectures"
            className="hover:text-blue-400 transition"
            onClick={() => setMobileOpen(false)}
          >
            Agent Architectures
          </a>
          <a
            href="#capabilities"
            className="hover:text-blue-400 transition"
            onClick={() => setMobileOpen(false)}
          >
            Capabilities
          </a>
          <a
            href="#insights"
            className="hover:text-blue-400 transition"
            onClick={() => setMobileOpen(false)}
          >
            Insights
          </a>
        </div>
      )}
    </nav>
  );
}
