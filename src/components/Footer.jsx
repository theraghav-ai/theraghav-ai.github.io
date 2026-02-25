import siteConfig from "@/data/siteConfig";
import { FaLinkedin, FaEnvelope, FaGithub } from "react-icons/fa6";

export default function Footer() {
  const { email, linkedIn, github, footerTagline, footerRole } = siteConfig;

  return (
    <footer className="py-20 px-6 border-t border-white/5 text-center">
      <h2 className="text-3xl font-bold mb-10 italic tracking-tighter">
        {footerTagline}
      </h2>

      <div className="flex justify-center gap-10 mb-12">
        <a
          href={linkedIn}
          target="_blank"
          rel="noopener noreferrer"
          className="text-slate-500 hover:text-blue-500 transition"
          aria-label="LinkedIn"
        >
          <FaLinkedin size={28} />
        </a>
        <a
          href={`mailto:${email}`}
          className="text-slate-500 hover:text-blue-500 transition"
          aria-label="Email"
        >
          <FaEnvelope size={28} />
        </a>
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-slate-500 hover:text-blue-500 transition"
          aria-label="GitHub"
        >
          <FaGithub size={28} />
        </a>
      </div>

      <p className="text-slate-600 text-[10px] font-bold tracking-[0.4em] uppercase">
        {footerRole}
      </p>
    </footer>
  );
}
