"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import MagneticButton from "./MagneticButton";
import { smoothScrollTo } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(
        ".hero-line",
        { y: 80, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, stagger: 0.15 }
      )
        .fromTo(
          ".hero-cta",
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, stagger: 0.2 },
          "-=0.3"
        )
        .fromTo(
          ".hero-badge",
          { scale: 0, opacity: 0 },
          { scale: 1, opacity: 1, duration: 0.6 },
          "-=0.5"
        );

      gsap.to(".hero-float-1", {
        y: -30,
        duration: 3,
        ease: "power1.inOut",
        yoyo: true,
        repeat: -1,
      });
      gsap.to(".hero-float-2", {
        y: 20,
        duration: 4,
        ease: "power1.inOut",
        yoyo: true,
        repeat: -1,
      });

      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: "bottom top",
        scrub: 1,
        onUpdate: (self) => {
          if (gridRef.current) {
            gridRef.current.style.transform = `translateY(${self.progress * 100}px)`;
          }
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const canvas = particlesRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let particles: { x: number; y: number; vx: number; vy: number }[] = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      particles = [];
      for (let i = 0; i < 60; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
        });
      }
    };

    resize();
    window.addEventListener("resize", resize);

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
      });

      ctx.strokeStyle = "rgba(0, 0, 0, 0.12)";
      ctx.lineWidth = 1;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 150) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      particles.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, 1.5, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(244, 196, 48, 0.25)";
        ctx.fill();
      });

      animationId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <canvas
        ref={particlesRef}
        className="absolute inset-0 z-0"
      />

      <div className="absolute inset-0 z-[1]">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-70"
          poster="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80"
        >
          <source
            src="https://cdn.coverr.co/videos/coverr-houston-skyscrapers-9179/1080p.mp4"
            type="video/mp4"
          />
        </video>
      </div>

      <div
        ref={gridRef}
        className="absolute inset-0 z-[2] opacity-20 grid-pattern animate-grid-scroll"
      />

      <div className="absolute inset-0 z-[3] bg-gradient-to-b from-black/5 via-black/3 to-black/15" />

      <div className="absolute top-1/4 left-1/3 w-96 h-96 rounded-full bg-accent-gold/10 blur-[120px]" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-accent-amber/8 blur-[100px]" />

      <div className="hero-float-1 absolute top-[20%] right-[15%] w-20 h-20 border border-accent-gold/20 rounded-lg rotate-12" />
      <div className="hero-float-2 absolute bottom-[25%] left-[10%] w-16 h-16 border border-accent-gold/10 rounded-full" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <button
          onClick={() => smoothScrollTo("service-tiers")}
          className="hero-badge inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent-gold/30 bg-accent-gold/10 mb-8 hover:bg-accent-gold/20 transition-all duration-300 cursor-pointer"
        >
          <span className="w-2 h-2 rounded-full bg-accent-gold animate-pulse-glow" />
          <span className="text-accent-gold text-xs tracking-widest uppercase font-medium">
            Revenue Architecture Partners
          </span>
        </button>

        <div ref={textRef}>
          <h1 className="hero-line text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight mb-6 max-w-4xl mx-auto">
            <span className="text-black/85">Revenue Infrastructure</span>{" "}
            <span className="text-black/85">Built for</span>{" "}
            <span className="text-accent-gold">Predictable Growth</span>
          </h1>
          <p className="hero-line text-base sm:text-lg text-accent-gold tracking-[0.15em] uppercase mb-3 font-bold">
            WE BUILD THE ENGINE! YOU DRIVE REVENUE!
          </p>
          <p className="hero-line text-base sm:text-lg md:text-xl text-black/85 max-w-2xl mx-auto leading-relaxed mb-6">
            We design, engineer, and optimize commercial infrastructure!
          </p>

          <div className="hero-line flex items-center justify-center mb-6">
            <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight text-black/85">
              THE 3P<span className="formula-s">s</span>&nbsp;FORMULA&trade;
            </span>
          </div>

          <div className="hero-line flex items-center justify-center gap-3 sm:gap-4 mb-8">
            {["Passion", "Expertise", "Prosperity", "Stewardship"].map((item, i) => (
              <span key={item} className="flex items-center gap-2 sm:gap-3">
                {i > 0 && (
                  <span className="text-accent-gold">&bull;</span>
                )}
                <span className="text-xs sm:text-sm tracking-wide text-charcoal font-bold">
                  {item}
                </span>
              </span>
            ))}
          </div>
        </div>

        <div className="hero-cta flex flex-col sm:flex-row items-center justify-center gap-4">
          <MagneticButton
            onClick={() => smoothScrollTo("briefing")}
            variant="primary"
            className="text-base px-8 py-4"
          >
            Request an Executive Briefing
          </MagneticButton>
          <MagneticButton
            onClick={() => smoothScrollTo("service-tiers")}
            variant="outline"
            className="text-base px-8 py-4 !bg-[#555555] hover:!bg-[#666666]"
          >
            Explore THE 3P<span className="formula-s">s</span>&nbsp;FORMULA&trade;
          </MagneticButton>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-charcoal-mid/60">
        <span className="text-[10px] tracking-widest uppercase">Scroll</span>
        <div className="w-[1px] h-8 bg-gradient-to-b from-accent-gold/40 to-transparent" />
      </div>
    </section>
  );
}
