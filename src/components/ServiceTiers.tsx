"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import { ArrowRight, BarChart3, Target, TrendingUp, ShieldCheck } from "lucide-react";
import { smoothScrollTo } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

const tiers = [
  {
    name: "TIER 1: STRATEGIC ADVISORY",
    subtitle: "The 3Ps Diagnostic",
    bestFor: "Companies seeking clarity and strategic direction.",
    snapshot: "6–8 Week Diagnostic",
    deliverables: [
      "3Ps Maturity Assessment",
      "Revenue Infrastructure Map",
      "Executive Roadmap & Strategic Briefing",
    ],
    outcome:
      "A clear, prioritized commercial infrastructure strategy with defined next-move economics.",
    footer:
      "The first step toward scalable growth begins with a thorough diagnostic.",
    icon: BarChart3,
  },
  {
    name: "TIER 2: STRATEGIC ENGAGEMENT",
    subtitle: "The 3Ps Blueprint",
    bestFor: "Organizations ready to architect and align their commercial infrastructure.",
    snapshot: "3–6 Month Engagement",
    deliverables: [
      "3Ps Revenue Matrix Blueprint",
      "Process & Systems Design",
      "Organizational Alignment Framework",
      "Implementation Roadmap with KPIs",
    ],
    outcome:
      "An operating system for revenue — fully architected, aligned, and ready for execution.",
    footer:
      "A comprehensive alignment that transforms your commercial infrastructure into a coordinated revenue engine.",
    icon: Target,
  },
  {
    name: "TIER 3: STRATEGIC PARTNERSHIP",
    subtitle: "The 3Ps Accelerator",
    bestFor: "Enterprises pursuing aggressive growth through full-scale revenue transformation.",
    snapshot: "Ongoing Strategic Partnership",
    deliverables: [
      "Continuous 3Ps Optimization",
      "Executive Advisory",
      "Systems Integration & Scaling",
      "Governance & Performance Management",
    ],
    outcome:
      "Sustained, compounding revenue growth powered by a fully embedded 3Ps operating system.",
    footer:
      "True enterprise expansion demands a partner who lives in the engine room with you.",
    icon: TrendingUp,
  },
];

export default function ServiceTiers() {
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
        ".tiers-label",
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6 }
      ).fromTo(
        ".tiers-heading",
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8 },
        "-=0.3"
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="service-tiers"
      ref={sectionRef}
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      <div className="absolute inset-0 bg-bg-secondary" />
      <div className="absolute inset-0 grid-pattern opacity-10" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-gold/20 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16 lg:mb-20">
          <div className="tiers-label text-accent-gold text-xs tracking-[0.25em] uppercase mb-4 font-medium">
            Our Engagement Models
          </div>
          <h2 className="tiers-heading text-3xl sm:text-4xl lg:text-5xl font-bold leading-[1.1] tracking-tight text-white max-w-4xl mx-auto">
            Designed for{" "}
            <span className="text-gradient">Sustainable Enterprise</span>{" "}
            Expansion
          </h2>
          <p className="tiers-heading text-text-secondary/60 mt-4 max-w-2xl mx-auto text-sm leading-relaxed">
            Every engagement is bespoke &mdash; calibrated to your current
            growth phase and designed to accelerate your journey to the next
            stage of enterprise value.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {tiers.map((tier, idx) => {
            const Icon = tier.icon;
            return (
              <motion.div
                key={tier.name}
                className="group relative overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:border-accent-gold/30 transition-all duration-500 p-6 lg:p-8 flex flex-col"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15, duration: 0.6 }}
                whileHover={{ y: -4 }}
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-accent-gold/[0.03] to-transparent" />

                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500/20 to-transparent flex items-center justify-center mb-5">
                    <Icon size={22} className="text-accent-gold" />
                  </div>

                  <div className="text-[10px] tracking-[0.25em] uppercase text-accent-gold/70 font-medium mb-1">
                    {tier.name}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">
                    {tier.subtitle}
                  </h3>

                  <div className="space-y-3 mb-6">
                    <div className="text-xs tracking-wider uppercase text-text-secondary/40">
                      <span className="text-accent-gold/60">Best For:</span>{" "}
                      {tier.bestFor}
                    </div>
                    <div className="text-xs tracking-wider uppercase text-text-secondary/40">
                      <span className="text-accent-gold/60">
                        Engagement Snapshot:
                      </span>{" "}
                      {tier.snapshot}
                    </div>
                  </div>

                  <div className="mb-6">
                    <div className="text-xs tracking-wider uppercase text-text-secondary/40 mb-2">
                      Key Deliverables
                    </div>
                    <ul className="space-y-1.5">
                      {tier.deliverables.map((d) => (
                        <li
                          key={d}
                          className="text-sm text-text-secondary/70 flex items-start gap-2"
                        >
                          <span className="w-1 h-1 rounded-full bg-accent-gold/40 mt-2 shrink-0" />
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="text-sm text-text-secondary/80 leading-relaxed mb-6">
                    <span className="text-accent-gold/60 text-xs tracking-wider uppercase block mb-1">
                      Outcome
                    </span>
                    {tier.outcome}
                  </div>
                </div>

                <div className="relative z-10 mt-auto pt-4 border-t border-white/[0.06]">
                  <p className="text-xs text-text-secondary/40 italic leading-relaxed">
                    {tier.footer}
                  </p>
                </div>

                <div className="absolute -bottom-8 -right-8 w-24 h-24 border border-accent-gold/5 rounded-full group-hover:border-accent-gold/10 transition-all duration-700" />
              </motion.div>
            );
          })}
        </div>

        <div className="mt-16 lg:mt-20 p-8 lg:p-12 rounded-2xl bg-bg-tertiary border border-white/[0.06] relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-accent-gold/[0.02] to-transparent" />
          <div className="relative z-10 text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 mb-4">
              <ShieldCheck size={20} className="text-accent-gold" />
              <span className="text-accent-gold text-xs tracking-[0.25em] uppercase font-medium">
                The &ldquo;S&rdquo; Factor
              </span>
            </div>
            <p className="text-white/80 text-base lg:text-lg leading-relaxed">
              The &ldquo;S&rdquo; Factor &mdash; It&rsquo;s the System Upgrade
              That Unlocks Everything. The 3Ps Formula isn&rsquo;t complete
              without the &ldquo;S&rdquo; &mdash; the proprietary systems layer
              that binds Product, People, and Process into a cohesive, scalable
              revenue engine.
            </p>
          </div>
        </div>

        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <button
            onClick={() => smoothScrollTo("briefing")}
            className="inline-flex items-center gap-2 gold-gradient text-black font-semibold px-7 py-3.5 rounded-lg text-sm hover:shadow-lg hover:shadow-amber-500/25 transition-all duration-300"
          >
            Request a Briefing to Unlock the 3Ps Formula&trade;
            <ArrowRight size={16} />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
