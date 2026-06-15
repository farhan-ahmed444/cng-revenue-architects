"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import {
  Building2,
  BookOpen,
  Search,
  Settings,
  Cpu,
  TrendingUp,
  ArrowRight,
} from "lucide-react";
import { smoothScrollTo } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    title: "Corporate Architecture Philosophy",
    description:
      "Building scalable commercial ecosystems that support long-term enterprise value and market leadership.",
    icon: Building2,
    size: "large",
  },
  {
    title: "Strategic Frameworks",
    description:
      "Featuring the 3Ps Revenue Blueprint, 3Ps Revenue Matrix, and 3Ps Diagnostic Audits — our proprietary methodology suite.",
    icon: BookOpen,
    size: "medium",
    features: ["3Ps Revenue Blueprint", "3Ps Revenue Matrix", "3Ps Diagnostic Audits"],
  },
  {
    title: "Revenue Infrastructure Audits",
    description:
      "Diagnosing growth constraints across commercial operations with data-driven precision.",
    icon: Search,
    size: "medium",
  },
  {
    title: "Process Optimization",
    description:
      "Creating operational efficiency and scalable systems that reduce friction and accelerate output.",
    icon: Settings,
    size: "small",
  },
  {
    title: "Technology System Wrappers",
    description:
      "Deploying automation and technology wrappers around validated business structures for maximum leverage.",
    icon: Cpu,
    size: "small",
  },
  {
    title: "Growth Alignment Consulting",
    description:
      "Synchronizing strategy, operations, and execution to ensure every part of the organization moves in unison.",
    icon: TrendingUp,
    size: "small",
  },
];

const sizeClasses: Record<string, string> = {
  large: "md:col-span-2 md:row-span-2",
  medium: "md:col-span-1 md:row-span-1",
  small: "md:col-span-1 md:row-span-1",
};

const iconStyles = [
  "bg-gradient-to-br from-amber-500/20 to-transparent",
  "bg-gradient-to-br from-yellow-500/20 to-transparent",
  "bg-gradient-to-br from-amber-400/20 to-transparent",
  "bg-gradient-to-br from-yellow-400/20 to-transparent",
  "bg-gradient-to-br from-amber-500/20 to-transparent",
  "bg-gradient-to-br from-yellow-500/20 to-transparent",
];

export default function Services() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      tl.fromTo(
        ".services-label",
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6 }
      ).fromTo(
        ".services-heading",
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8 },
        "-=0.3"
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="services"
      ref={sectionRef}
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      <div className="absolute inset-0 grid-pattern opacity-10" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-gold/20 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16 lg:mb-20">
          <div className="services-label text-accent-gold text-xs tracking-[0.25em] uppercase mb-4 font-medium">
            Our Services
          </div>
          <h2 className="services-heading text-3xl sm:text-4xl lg:text-5xl font-bold leading-[1.1] tracking-tight text-white max-w-3xl mx-auto">
            Enterprise-Grade{" "}
            <span className="text-gradient">Revenue Architecture</span>
            <br />
            Services
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5 auto-rows-[minmax(200px,auto)]">
          {services.map((service, idx) => {
            const Icon = service.icon;
            const isLarge = service.size === "large";

            return (
              <motion.div
                key={service.title}
                className={`group relative overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:border-accent-gold/30 transition-all duration-500 p-6 lg:p-8 ${sizeClasses[service.size]}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
                whileHover={{ y: -4 }}
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-accent-gold/[0.03] to-transparent" />

                <div
                  className={`relative z-10 w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${iconStyles[idx % iconStyles.length]}`}
                >
                  <Icon size={22} className="text-accent-gold" />
                </div>

                <h3
                  className={`relative z-10 font-bold text-white mb-3 ${isLarge ? "text-2xl" : "text-lg"}`}
                >
                  {service.title}
                </h3>

                <p className="relative z-10 text-text-secondary/60 text-sm leading-relaxed mb-4">
                  {service.description}
                </p>

                {service.features && (
                  <ul className="relative z-10 space-y-1.5 mb-4">
                    {service.features.map((f) => (
                      <li
                        key={f}
                        className="text-xs text-text-secondary/40 flex items-center gap-2"
                      >
                        <span className="w-1 h-1 rounded-full bg-accent-gold/40" />
                        {f}
                      </li>
                    ))}
                  </ul>
                )}

                <div className="relative z-10 inline-flex items-center gap-1 text-xs text-text-secondary/30 group-hover:text-accent-gold/60 transition-colors duration-300 mt-auto">
                  <span>Learn more</span>
                  <ArrowRight size={12} />
                </div>

                <div className="absolute -bottom-8 -right-8 w-24 h-24 border border-accent-gold/5 rounded-full group-hover:border-accent-gold/10 transition-all duration-700" />
              </motion.div>
            );
          })}
        </div>

        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <button
            onClick={() => smoothScrollTo("contact")}
            className="inline-flex items-center gap-2 gold-gradient text-black font-semibold px-7 py-3.5 rounded-lg text-sm hover:shadow-lg hover:shadow-amber-500/25 transition-all duration-300"
          >
            Discuss Your Growth Strategy
            <ArrowRight size={16} />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
