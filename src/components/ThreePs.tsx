"use client";

import { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import { Package, Users, Settings } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const pillars = [
  {
    id: "product",
    title: "Product",
    icon: Package,
    subtitle: "Market Fit & Scalability",
    description:
      "Evaluate market fit, offer structure, positioning, and scalability. We assess your product viability across market segments and identify growth bottlenecks.",
    details: [
      "Market positioning audit",
      "Offer structure optimization",
      "Scalability assessment",
      "Competitive differentiation",
    ],
    color: "#F4C430",
  },
  {
    id: "people",
    title: "People",
    icon: Users,
    subtitle: "Alignment & Accountability",
    description:
      "Align leadership, sales teams, operations, and accountability structures. We ensure your talent architecture supports your growth objectives.",
    details: [
      "Leadership alignment",
      "Sales team optimization",
      "Operational accountability",
      "Performance frameworks",
    ],
    color: "#FFB800",
  },
  {
    id: "process",
    title: "Process",
    icon: Settings,
    subtitle: "Efficiency & Automation",
    description:
      "Optimize workflows, automation, delivery systems, and growth execution. We build processes that scale without breaking.",
    details: [
      "Workflow optimization",
      "Automation frameworks",
      "Delivery system design",
      "Growth execution systems",
    ],
    color: "#F4C430",
  },
];

export default function ThreePs() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activePillar, setActivePillar] = useState<string | null>(null);
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      tl.fromTo(
        ".ps-label",
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6 }
      ).fromTo(
        ".ps-heading",
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8 },
        "-=0.3"
      );

      gsap.utils.toArray<HTMLElement>(".pillar-card").forEach((card, i) => {
        gsap.fromTo(
          card,
          { y: 60, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            delay: i * 0.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="3ps"
      ref={sectionRef}
      className="relative py-24 lg:py-32 overflow-hidden bg-bg-secondary"
    >
      <div className="absolute inset-0 grid-pattern opacity-10" />

      <svg
        ref={svgRef}
        className="absolute inset-0 w-full h-full pointer-events-none z-0"
      >
        <defs>
          <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#F4C430" stopOpacity="0" />
            <stop offset="50%" stopColor="#F4C430" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#F4C430" stopOpacity="0" />
          </linearGradient>
        </defs>
        <line
          x1="15%"
          y1="50%"
          x2="85%"
          y2="50%"
          stroke="url(#line-gradient)"
          strokeWidth="1"
          strokeDasharray="8 6"
        />
      </svg>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16 lg:mb-20">
          <div className="ps-label text-accent-gold text-xs tracking-[0.25em] uppercase mb-4 font-medium">
            The Foundation
          </div>
          <h2 className="ps-heading text-3xl sm:text-4xl lg:text-5xl font-bold leading-[1.1] tracking-tight text-white max-w-3xl mx-auto">
            The{" "}
            <span className="text-gradient">3Ps Revenue Architecture</span>
            <br />
            Diagnostic Framework
          </h2>
          <p className="ps-heading text-text-secondary/60 mt-4 max-w-xl mx-auto text-sm">
            Three interconnected pillars. One unified diagnostic methodology.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            const isActive = activePillar === pillar.id;

            return (
              <motion.div
                key={pillar.id}
                className={`pillar-card relative group cursor-pointer rounded-2xl p-8 transition-all duration-500 ${
                  isActive
                    ? "gold-border gold-glow bg-white/[0.05]"
                    : "bg-white/[0.03] border border-white/[0.06] hover:border-accent-gold/20"
                }`}
                onMouseEnter={() => setActivePillar(pillar.id)}
                onMouseLeave={() => setActivePillar(null)}
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div
                    className={`w-14 h-14 rounded-xl flex items-center justify-center transition-all duration-500 ${
                      isActive
                        ? "gold-gradient text-black"
                        : "bg-white/5 text-accent-gold"
                    }`}
                  >
                    <Icon size={26} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">
                      {pillar.title}
                    </h3>
                    <span className="text-xs text-text-secondary/50 tracking-wide">
                      {pillar.subtitle}
                    </span>
                  </div>
                </div>

                <p className="text-text-secondary/70 text-sm leading-relaxed mb-6">
                  {pillar.description}
                </p>

                <motion.ul
                  className="space-y-2"
                  animate={{
                    height: isActive ? "auto" : 0,
                    opacity: isActive ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {pillar.details.map((detail) => (
                    <li
                      key={detail}
                      className="flex items-center gap-2 text-xs text-text-secondary/50"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-accent-gold/40 shrink-0" />
                      {detail}
                    </li>
                  ))}
                </motion.ul>

                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-accent-gold/0 to-transparent group-hover:via-accent-gold/40 transition-all duration-500 rounded-t-2xl" />

                <div className="relative mt-6 pt-6 border-t border-white/[0.06]">
                  <div className="flex items-center text-[10px] tracking-widest uppercase text-text-secondary/30">
                    <span className="flex-1">Pillar {idx + 1} of 3</span>
                    <span className="text-accent-gold/60">&harr;</span>
                  </div>
                </div>
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
          <p className="text-text-secondary/40 text-xs tracking-wider uppercase">
            Hover to explore each pillar &mdash; interconnected by design
          </p>
        </motion.div>
      </div>
    </section>
  );
}
