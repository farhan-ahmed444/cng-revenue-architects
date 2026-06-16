"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import { ArrowRight, Target, TrendingUp, Layers } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const metrics = [
  { value: "95%", label: "Client Retention", icon: Target },
  { value: "$3.2M", label: "Avg. Revenue Acceleration per Engagement", icon: TrendingUp },
  { value: "25+", label: "Years Deploying Revenue Matrix Strategies", icon: Layers },
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
          className="object-cover opacity-[0.04]"
          sizes="100vw"
        />
      </div>
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-accent-gold/[0.02] to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="about-label text-accent-gold text-xs tracking-[0.25em] uppercase mb-4 font-medium">
          About the Firm
        </div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div ref={textRef} className="space-y-6">
            <h2 className="about-heading text-3xl sm:text-4xl lg:text-5xl font-bold leading-[1.1] tracking-tight text-white">
              We Architect the Commercial{" "}
              <span className="text-gradient">Infrastructure</span> That
              Drives Predictable Wealth
            </h2>
            <p className="text-text-secondary/80 text-base lg:text-lg leading-relaxed">
              We design, engineer, and optimize enterprises to drive revenue.
            </p>
            <p className="text-text-secondary/60 text-base leading-relaxed">
              At CnG Revenue Architects, LLC, we operate at the intersection of
              commercial strategy, operational architecture, and wealth science.
              Our proprietary 3Ps Revenue Matrix &mdash; a strategic framework
              developed over 25+ years of executive leadership &mdash; equips
              organizations to move beyond survival mode and into scalable,
              sustainable enterprise expansion.
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
            <div className="relative p-8 rounded-2xl glass-light overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-accent-gold/[0.03] to-transparent" />

              <div className="relative z-10 grid grid-cols-1 gap-4">
                {metrics.map((m, i) => {
                  const Icon = m.icon;
                  return (
                    <motion.div
                      key={m.label}
                      initial={{ opacity: 0, x: 40 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.15, duration: 0.6 }}
                      className="flex items-center gap-5 p-5 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:border-accent-gold/20 transition-all duration-500 group"
                    >
                      <div className="w-12 h-12 rounded-lg gold-gradient/10 bg-accent-gold/10 flex items-center justify-center shrink-0 group-hover:bg-accent-gold/20 transition-colors duration-300">
                        <Icon size={20} className="text-accent-gold" />
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-white">
                          {m.value}
                        </div>
                        <div className="text-xs text-text-secondary/60 tracking-wide uppercase">
                          {m.label}
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              <div className="absolute -bottom-6 -right-6 w-32 h-32 border border-accent-gold/10 rounded-full" />
              <div className="absolute -top-4 -left-4 w-20 h-20 border border-white/5 rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
