"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import { ArrowRight, Target, TrendingUp, Layers, Quote } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const metrics = [
  { value: "95%", label: "Client Retention", icon: Target },
  { value: "$3.2M", label: "AVG. REVENUE ACCELERATION", icon: TrendingUp },
  { value: "25+ Years", label: "Deploying Revenue Matrix Strategies", icon: Layers },
];

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      tl.fromTo(
        ".about-label",
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6 }
      ).fromTo(
        ".about-heading",
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8 },
        "-=0.3"
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=1920&q=80"
          alt="Corporate strategy meeting"
          fill
          className="object-cover opacity-[0.12]"
          sizes="100vw"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-bg-primary/10 via-transparent to-bg-primary/10" />
      <div className="absolute inset-0 grid-pattern opacity-15" />

      <div className="absolute top-0 right-0 w-[40%] h-full">
        <div className="absolute inset-0 bg-gradient-to-l from-accent-gold/[0.04] to-transparent" />
      </div>

      <div className="absolute top-20 right-10 w-72 h-72 rounded-full bg-accent-gold/[0.04] blur-[100px]" />
      <div className="absolute bottom-20 left-10 w-96 h-96 rounded-full bg-accent-amber/[0.03] blur-[120px]" />

      <div className="absolute top-0 left-1/2 w-px h-full bg-gradient-to-b from-transparent via-accent-gold/10 to-transparent hidden lg:block" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="about-label text-accent-gold text-xs tracking-[0.25em] uppercase mb-4 font-medium">
          About the Firm
        </div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          <div ref={textRef} className="space-y-6">
            <h2 className="about-heading text-3xl sm:text-4xl lg:text-5xl font-bold leading-[1.1] tracking-tight">
              <span className="text-charcoal">We Architect the</span>{" "}
              <span className="text-black">Commercial Infrastructure</span>{" "}
              <span className="text-accent-gold">That Drives Predictable Wealth</span>
            </h2>
            <p className="text-charcoal text-base lg:text-lg leading-relaxed">
              CnG Revenue Architects, LLC helps enterprises identify deep
              operational bottlenecks before engineering tailored corporate
              solutions. We believe that a bulletproof commercial infrastructure
              must always precede technology integration.
            </p>
            <p className="text-charcoal/80 text-base leading-relaxed">
              Our approach is built entirely on The 3Ps Formula&trade; aligning
              our three closed architecture modules while introducing the
              proprietary &ldquo;s&rdquo; system upgrade to clear enterprise
              blockages and unlock maximum high speed capacity. Only after
              establishing this complete architectural foundation do we hand
              over the keys.
            </p>

            <p className="text-black font-bold text-base tracking-[0.1em] uppercase">
              WE BUILD THE ENGINE! YOU DRIVE REVENUE!
            </p>

            <div className="pt-4">
              <motion.button
                onClick={() => {
                  document
                    .getElementById("briefing")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="group inline-flex items-center gap-2 text-accent-gold text-sm font-medium hover:gap-3 transition-all duration-300"
                whileHover={{ x: 5 }}
              >
                Request an Executive Briefing
                <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
              </motion.button>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -top-4 -left-4 w-20 h-20 border border-accent-gold/20 rounded-full" />
            <div className="absolute -bottom-4 -right-4 w-32 h-32 border border-accent-gold/10 rounded-full" />

            <div className="relative p-8 rounded-2xl bg-gradient-to-br from-white/[0.04] to-white/[0.01] border border-white/[0.08] backdrop-blur-xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-accent-gold/[0.04] via-transparent to-transparent" />
              <div className="absolute top-0 right-0 w-40 h-40 bg-accent-gold/[0.03] blur-[60px] rounded-full" />

              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-6">
                  <Quote size={14} className="text-accent-gold/60" />
                  <span className="text-[10px] tracking-[0.3em] uppercase text-charcoal font-medium">
                    QUANTIFIABLE IMPACT
                  </span>
                </div>

                <div className="grid grid-cols-1 gap-3">
                  {metrics.map((m, i) => {
                    const Icon = m.icon;
                    return (
                      <motion.div
                        key={m.label}
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.15, duration: 0.6 }}
                        className="flex items-center gap-5 p-5 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:border-accent-gold/30 hover:bg-white/[0.05] transition-all duration-500 group"
                      >
                        <div className="w-12 h-12 rounded-lg bg-accent-gold/10 flex items-center justify-center shrink-0 group-hover:bg-accent-gold/20 transition-colors duration-300">
                          <Icon size={20} className="text-accent-gold" />
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-accent-gold">
                            {m.value}
                          </div>
                          <div className="text-xs text-charcoal tracking-wide uppercase">
                            {m.label}
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
