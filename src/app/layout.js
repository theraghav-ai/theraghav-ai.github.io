import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["300", "400", "500", "600", "700"],
});
const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata = {
  title: "GenAI & Agentic Systems Architect",
  description:
    "Portfolio — Engineering the Future of Autonomous AI Work. Designing autonomous Multi-Agent AI Swarms that reason, plan, and self-correct.",
  openGraph: {
    title: "GenAI & Agentic Systems Architect",
    description:
      "Designing autonomous Multi-Agent AI Swarms that reason, plan, and self-correct.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrains.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
