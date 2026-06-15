"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import { X, Check, ArrowRight } from "lucide-react";
import { smoothScrollTo } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

const comparisons = [
  {
    traditional: "Fragmented vendor approach",
    cng: "Unified revenue architecture strategy",
  },
  {
    traditional: "Reactive problem solving",
    cng: "Diagnostic-led infrastructure design",
  },
  {
    traditional: "Process silos",
    cng: "Cross-functional alignment",
  },
  {
    traditional: "Technology before strategy",
    cng: "Strategy before technology",
  },
  {
    traditional: "Short-term growth hacks",
    cng: "Sustainable enterprise value creation",
  },
];

const advantages = [
  { label: "Strategic Alignment", value: "95%" },
  { label: "Process Visibility", value: "90%" },
  { label: "Scalable Systems", value: "85%" },
  { label: "Revenue Optimization", value: "92%" },
  { label: "Asset Value Creation", value: "88%" },
];

export default function WhyCng() {
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
        ".why-label",
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6 }
      ).fromTo(
        ".why-heading",
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8 },
        "-=0.3"
      );

      gsap.utils.toArray<HTMLElement>(".comparison-row").forEach((row, i) => {
        gsap.fromTo(
          row,
          { x: -30, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.5,
            delay: i * 0.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: row,
              start: "top 90%",
            },
          }
        );
      });

      gsap.utils.toArray<HTMLElement>(".advantage-bar").forEach((bar, i) => {
        gsap.fromTo(
          bar,
          { width: "0%" },
          {
            width: bar.dataset.value + "%",
            duration: 1.2,
            delay: i * 0.15,
            ease: "power3.out",
            scrollTrigger: {
              trigger: bar,
              start: "top 90%",
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-24 lg:py-32 overflow-hidden bg-bg-secondary"
    >
      <div className="absolute inset-0 grid-pattern opacity-10" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="why-label text-accent-gold text-xs tracking-[0.25em] uppercase mb-4 font-medium">
            Why CnG
          </div>
          <h2 className="why-heading text-3xl sm:text-4xl lg:text-5xl font-bold leading-[1.1] tracking-tight text-white max-w-3xl mx-auto">
            Traditional Consulting vs.
            <br />
            <span className="text-gradient">CnG Revenue Architecture</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          <div className="space-y-3">
            <div className="flex items-center gap-2 mb-6 px-4">
              <div className="w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center">
                <X size={14} className="text-red-400" />
              </div>
              <span className="text-sm font-medium text-red-400/80">
                Traditional Growth Consulting
              </span>
            </div>
            {comparisons.map((c) => (
              <div
                key={c.traditional}
                className="comparison-row flex items-center gap-4 px-4 py-3 rounded-lg bg-white/[0.02] border border-white/[0.04]"
              >
                <X size={14} className="text-red-400/40 shrink-0" />
                <span className="text-text-secondary/40 text-sm">
                  {c.traditional}
                </span>
              </div>
            ))}
          </div>

          <div className="space-y-3">
            <div className="flex items-center gap-2 mb-6 px-4">
              <div className="w-6 h-6 rounded-full bg-accent-gold/20 flex items-center justify-center">
                <Check size={14} className="text-accent-gold" />
              </div>
              <span className="text-sm font-medium text-accent-gold/80">
                CnG Revenue Architecture
              </span>
            </div>
            {comparisons.map((c) => (
              <div
                key={c.cng}
                className="comparison-row flex items-center gap-4 px-4 py-3 rounded-lg gold-border bg-accent-gold/[0.02]"
              >
                <Check size={14} className="text-accent-gold shrink-0" />
                <span className="text-text-secondary text-sm">{c.cng}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20">
          <h3 className="text-center text-xl font-semibold text-white mb-10">
            Measurable <span className="text-gradient">Advantages</span>
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {advantages.map((adv) => (
              <motion.div
                key={adv.label}
                className="relative p-5 rounded-xl bg-white/[0.03] border border-white/[0.06] text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="text-3xl font-bold text-accent-gold mb-1">
                  {adv.value}
                </div>
                <div className="text-xs text-text-secondary/50 tracking-wide uppercase">
                  {adv.label}
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-[2px] gold-gradient rounded-full" />
              </motion.div>
            ))}
          </div>
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
            Experience the Difference
            <ArrowRight size={16} />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
