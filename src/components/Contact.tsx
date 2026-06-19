"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Send } from "lucide-react";
import LinkedInIcon from "@/components/LinkedInIcon";

gsap.registerPlugin(ScrollTrigger);

const growthPhases = [
  "Concept / Market Entry",
  "Active Expansion / Scaling Infrastructure",
  "Stagnant Velocity / Hitting a Revenue Ceiling",
];

export default function Contact() {
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
        ".contact-label",
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6 }
      ).fromTo(
        ".contact-heading",
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8 },
        "-=0.3"
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="briefing"
      ref={sectionRef}
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      <div className="absolute inset-0 grid-pattern opacity-10" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-gold/20 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16 max-w-4xl mx-auto p-8 rounded-2xl bg-[#2A2A2A] border border-white/[0.06]">
          <div className="contact-label text-accent-gold text-xs tracking-[0.25em] uppercase mb-4 font-medium">
            Executive Briefing
          </div>
          <h2 className="contact-heading text-3xl sm:text-4xl lg:text-5xl font-bold leading-[1.1] tracking-tight max-w-4xl mx-auto">
            <span className="text-charcoal">Secure Your</span>{" "}
            <span className="text-black">Partnership with the</span>{" "}
            <span className="text-accent-gold">Revenue Architect</span>
          </h2>
          <p className="contact-heading text-charcoal mt-4 max-w-2xl mx-auto text-sm">
            CnG Revenue Architects, LLC diagnose, build, and align commercial
            infrastructure for firms using three execution tiers, engineered
            with our Rev Arch &ldquo;<span className="formula-s">s</span>&rdquo; System Upgrade, to deliver
            precision-built blueprints, matrices, and diagnoses, so you can
            seamlessly drive scale.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          <motion.div
            className="lg:col-span-3 p-8 rounded-2xl glass-light"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form className="space-y-5">
              <div>
                <label className="block text-xs tracking-wider uppercase text-charcoal mb-2">
                  Full Name &amp; Executive Title
                </label>
                <input
                  type="text"
                  placeholder="e.g. John Smith, CEO"
                  className="w-full px-4 py-3 bg-white/[0.04] border border-white/[0.08] rounded-lg text-charcoal text-sm placeholder:text-charcoal-mid/40 focus:outline-none focus:border-accent-gold/40 transition-colors duration-300"
                />
              </div>

              <div>
                <label className="block text-xs tracking-wider uppercase text-charcoal mb-2">
                  Enterprise Corporate Name
                </label>
                <input
                  type="text"
                  placeholder="Your company name"
                  className="w-full px-4 py-3 bg-white/[0.04] border border-white/[0.08] rounded-lg text-charcoal text-sm placeholder:text-charcoal-mid/40 focus:outline-none focus:border-accent-gold/40 transition-colors duration-300"
                />
              </div>

              <div>
                <label className="block text-xs tracking-wider uppercase text-charcoal mb-2">
                  Corporate Email
                </label>
                <input
                  type="email"
                  placeholder="executive@company.com"
                  className="w-full px-4 py-3 bg-white/[0.04] border border-white/[0.08] rounded-lg text-charcoal text-sm placeholder:text-charcoal-mid/40 focus:outline-none focus:border-accent-gold/40 transition-colors duration-300"
                />
              </div>

              <div>
                <label className="block text-xs tracking-wider uppercase text-charcoal mb-2">
                  Current Growth Phase
                </label>
                <select className="w-full px-4 py-3 bg-white/[0.04] border border-white/[0.08] rounded-lg text-charcoal text-sm focus:outline-none focus:border-accent-gold/40 transition-colors duration-300 appearance-none">
                  <option value="" disabled selected className="bg-bg-primary text-charcoal-mid">
                    Select your growth phase
                  </option>
                  {growthPhases.map((phase) => (
                    <option
                      key={phase}
                      value={phase}
                      className="bg-bg-primary text-charcoal hover:text-accent-gold"
                    >
                      {phase}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs tracking-wider uppercase text-charcoal mb-2">
                  Revenue Blockage or Growth Objective
                </label>
                <textarea
                  rows={4}
                  placeholder="Describe your current revenue blockage, growth objective, or strategic challenge..."
                  className="w-full px-4 py-3 bg-white/[0.04] border border-white/[0.08] rounded-lg text-charcoal text-sm placeholder:text-charcoal-mid/40 focus:outline-none focus:border-accent-gold/40 transition-colors duration-300 resize-none"
                />
              </div>

              <motion.button
                type="button"
                className="gold-gradient text-black font-semibold px-7 py-3.5 rounded-lg text-sm inline-flex items-center gap-2 hover:shadow-lg hover:shadow-amber-500/25 transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Send size={16} />
                Request Executive Briefing
              </motion.button>
            </form>
          </motion.div>

          <motion.div
            className="lg:col-span-2 space-y-5"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="p-6 rounded-xl glass-light">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-accent-gold/10 flex items-center justify-center shrink-0">
                  <MapPin size={18} className="text-accent-gold" />
                </div>
                <div>
                  <h4 className="text-charcoal text-sm font-semibold mb-1">
                    Address
                  </h4>
                  <p className="text-charcoal/70 text-sm">
                    2200 Hunt St
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-xl glass-light">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-accent-gold/10 flex items-center justify-center shrink-0">
                  <Phone size={18} className="text-accent-gold" />
                </div>
                <div>
                  <h4 className="text-charcoal text-sm font-semibold mb-1">
                    Phone
                  </h4>
                  <p className="text-charcoal/70 text-sm">
                    (313) 688-0675
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-xl glass-light">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-accent-gold/10 flex items-center justify-center shrink-0">
                  <Mail size={18} className="text-accent-gold" />
                </div>
                <div>
                  <h4 className="text-charcoal text-sm font-semibold mb-1">
                    Email
                  </h4>
                  <a
                    href="mailto:acalhoun@cngrevenuearchitects.com"
                    className="text-charcoal/70 text-sm hover:text-accent-gold transition-colors duration-300"
                  >
                    acalhoun@cngrevenuearchitects.com
                  </a>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-xl glass-light">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-accent-gold/10 flex items-center justify-center shrink-0">
                  <LinkedInIcon size={18} className="text-accent-gold" />
                </div>
                <div>
                  <h4 className="text-charcoal text-sm font-semibold mb-1">
                    Connect
                  </h4>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-charcoal/70 text-sm hover:text-accent-gold transition-colors duration-300"
                  >
                    Follow on LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
