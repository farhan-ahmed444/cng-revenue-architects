"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { smoothScrollTo } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

const tiers = [
  {
    title: "The 3Ps Revenue Blueprint",
    sublabel: "Looking for a Business in a Box",
    body: "We provide the macro structural engineering plans to construct a highly profitable, scalable revenue engine from the ground up. Designed exclusively for new business concepts and market entries.",
    footer: "Tier 1",
  },
  {
    title: "The 3Ps Revenue Matrix",
    sublabel: "Have the Idea, Need the Architecture",
    body: "We step in as strategic partners and corporate physicians to perform a forensic, top-to-bottom operational review. We isolate hidden blockages to restore your engine to maximum velocity.",
    footer: "Tier 2",
  },
  {
    title: "The 3Ps Diagnostic Audit",
    sublabel: "Existing Business, Hitting a Ceiling",
    body: "We step in as the corporate physician to perform a forensic, top-to-bottom operational review.",
    footer: "Tier 3",
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
            THE 3P<span className="formula-s">s</span>&nbsp;FORMULA&trade;
          </div>
          <h2 className="tiers-heading text-3xl sm:text-4xl lg:text-5xl font-bold leading-[1.1] tracking-tight max-w-4xl mx-auto">
            <span className="text-black/85">Engineered</span>{" "}
            <span className="text-charcoal">by Us, Driven</span>{" "}
            <span className="text-accent-gold">by You</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {tiers.map((tier, idx) => (
            <motion.div
              key={tier.title}
                className="group relative overflow-hidden rounded-2xl border border-white/[0.06] bg-[#2A2A2A] hover:border-accent-gold/30 transition-all duration-500 p-6 lg:p-8 flex flex-col"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15, duration: 0.6 }}
              whileHover={{ y: -4 }}
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-accent-gold/[0.03] to-transparent" />

              <div className="relative z-10 flex flex-col h-full">
                <div className="text-accent-gold/60 text-[10px] tracking-[0.25em] uppercase font-medium mb-3">
                  {tier.footer}
                </div>
                <h3 className="text-xl font-bold mb-3 leading-tight">
                  <span className="text-black/85">The 3P</span>
                  <span className="formula-s">s</span>{" "}
                  <span className="text-black/85">{tier.title.replace("The 3Ps ", "")}</span>
                </h3>
                <p className="text-accent-gold text-xs tracking-[0.2em] uppercase font-bold text-center mb-4">
                  {tier.sublabel}
                </p>
                <p className="text-charcoal leading-relaxed flex-1 text-sm">
                  {tier.body}
                </p>
              </div>

              <div className="absolute -bottom-8 -right-8 w-24 h-24 border border-accent-gold/5 rounded-full group-hover:border-accent-gold/10 transition-all duration-700" />
            </motion.div>
          ))}
        </div>

        <div className="mt-16 lg:mt-20 p-8 lg:p-12 rounded-2xl bg-[#282828] border border-white/[0.06] relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-accent-gold/[0.02] to-transparent" />
          <div className="relative z-10 text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 mb-4">
              <ShieldCheck size={20} className="text-accent-gold" />
              <span className="text-accent-gold text-xs tracking-[0.25em] uppercase font-medium">
                The &ldquo;s&rdquo; Factor: The Proprietary System Upgrade
              </span>
            </div>
            <p className="text-charcoal text-base lg:text-lg leading-relaxed mb-3">
              An enterprise can have all three foundational modules built, yet
              still fail to hit full speed due to hidden backend friction. The
              &ldquo;s&rdquo; is our proprietary system upgrade. We drop in as
              strategic partners to modify your architecture, clear the
              blockages, and synchronize your infrastructure for maximum revenue
              performance.
            </p>
            <p className="text-black/85 text-xs tracking-wider leading-relaxed max-w-2xl mx-auto mb-6">
              *The full operational breakdown and mechanics of The 3P
              <span className="formula-s">s</span>&nbsp;Formula&trade; are revealed
              exclusively during our strategic partnership briefing.
            </p>
            <div className="text-lg font-bold tracking-[0.15em] uppercase">
              <span className="text-black/85">WE BUILD,</span>{" "}
              <span className="text-accent-gold">YOU DRIVE</span>
            </div>
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
            Request a Briefing to Unlock The 3P<span>s</span> Formula&trade;
            <ArrowRight size={16} />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
