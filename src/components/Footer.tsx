"use client";

import LinkedInIcon from "@/components/LinkedInIcon";
import { smoothScrollTo } from "@/lib/utils";

const footerLinks = [
  { label: "Home", target: "hero" },
  { label: "About", target: "about" },
  { label: "Service Tiers", target: "service-tiers" },
  { label: "Contact", target: "briefing" },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/[0.06] bg-bg-quaternary">
      <div className="absolute inset-0 grid-pattern opacity-[0.03]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div className="sm:col-span-2 lg:col-span-2">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 gold-gradient rounded-lg flex items-center justify-center">
                <span className="text-black font-bold text-sm">C</span>
              </div>
              <span className="text-white font-semibold text-base tracking-tight">
                CnG Revenue Architects, LLC
              </span>
            </div>
            <p className="text-text-secondary/60 text-sm mb-2">
              We Build the Engine! You Drive Revenue!
            </p>
            <p className="text-text-secondary/50 text-xs max-w-sm leading-relaxed">
              Diagnosing, architecting, and aligning commercial infrastructure
              for expanding firms. Maximizing scalability, operational
              efficiency, and enterprise asset value.
            </p>
          </div>

          <div>
            <h4 className="text-white text-xs tracking-widest uppercase mb-4 font-medium">
              Navigate
            </h4>
            <ul className="space-y-2.5">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => smoothScrollTo(link.target)}
                    className="text-text-secondary/60 text-sm hover:text-accent-gold transition-colors duration-300"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white text-xs tracking-widest uppercase mb-4 font-medium">
              Core Values
            </h4>
            <ul className="space-y-2">
              {["Passion", "Expertise", "Prosperity", "Stewardship"].map(
                (val) => (
                  <li
                    key={val}
                    className="text-text-secondary/60 text-sm"
                  >
                    {val}
                  </li>
                )
              )}
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-text-secondary/50 text-xs">
            &copy; 2026 CnG Revenue Architects, LLC. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary/50 hover:text-accent-gold transition-colors duration-300"
            >
              <LinkedInIcon size={16} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
