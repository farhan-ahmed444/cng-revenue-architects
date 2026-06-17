"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import LinkedInIcon from "@/components/LinkedInIcon";
import { smoothScrollTo } from "@/lib/utils";

const sections = ["Home", "About", "Service Tiers", "Contact"];

const sectionIds: Record<string, string> = {
  Home: "hero",
  About: "about",
  "Service Tiers": "service-tiers",
  Contact: "briefing",
};

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("Home");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
      const scrollY = window.scrollY + 150;
      const sectionEls = sections.map((s) => ({
        id: s,
        el: document.getElementById(sectionIds[s]),
      }));
      for (let i = sectionEls.length - 1; i >= 0; i--) {
        const el = sectionEls[i].el;
        if (el && el.offsetTop <= scrollY) {
          setActiveSection(sectionEls[i].id);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (section: string) => {
    smoothScrollTo(sectionIds[section]);
    setMobileOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "glass shadow-lg shadow-black/10"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            <button
              onClick={() => handleNav("Home")}
              className="flex items-center gap-2 group"
            >
              <div className="w-8 h-8 gold-gradient rounded-lg flex items-center justify-center">
                <span className="text-black font-bold text-sm">C</span>
              </div>
              <span className="text-accent-gold font-semibold text-sm lg:text-base tracking-tight">
                CnG<span className="text-accent-gold">_</span>
              </span>
            </button>

            <div className="hidden md:flex items-center gap-8">
              {sections.map((s) => (
                <button
                  key={s}
                  onClick={() => handleNav(s)}
                  className={`relative text-sm tracking-wide font-medium transition-colors duration-300 ${
                    activeSection === s
                      ? "text-accent-gold"
                      : "text-charcoal hover:text-black"
                  }`}
                >
                  {s === "Home" ? "Home" : s}
                  {activeSection === s && (
                    <motion.div
                      layoutId="nav-indicator"
                      className="absolute -bottom-1 left-0 right-0 h-[2px] gold-gradient rounded-full"
                    />
                  )}
                </button>
              ))}
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-charcoal hover:text-accent-gold transition-colors duration-300"
              >
                <LinkedInIcon size={18} />
              </a>
              <button
                onClick={() => handleNav("Contact")}
                className="gold-gradient text-black text-sm font-semibold px-5 py-2 rounded-lg hover:shadow-lg hover:shadow-amber-500/20 transition-all duration-300"
              >
                Request an Executive Briefing
              </button>
            </div>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden text-charcoal"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 pt-16 glass"
          >
            <div className="flex flex-col items-center justify-center h-full gap-8">
              {sections.map((s) => (
                <button
                  key={s}
                  onClick={() => handleNav(s)}
                  className={`text-2xl font-medium transition-colors ${
                    activeSection === s
                      ? "text-accent-gold"
                      : "text-charcoal"
                  }`}
                >
                  {s}
                </button>
              ))}
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-charcoal mt-4"
              >
                <LinkedInIcon size={28} />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
