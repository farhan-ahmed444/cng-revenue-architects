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

      ctx.strokeStyle = "rgba(244, 196, 48, 0.06)";
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
        ctx.fillStyle = "rgba(244, 196, 48, 0.15)";
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
          className="absolute inset-0 w-full h-full object-cover opacity-40"
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
        className="absolute inset-0 z-[2] opacity-30 grid-pattern animate-grid-scroll"
      />

      <div className="absolute inset-0 z-[3] bg-gradient-to-b from-bg-primary/50 via-bg-primary/20 to-bg-primary/70" />

      <div className="absolute top-1/4 left-1/3 w-96 h-96 rounded-full bg-accent-gold/5 blur-[120px]" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-accent-amber/5 blur-[100px]" />

      <div className="hero-float-1 absolute top-[20%] right-[15%] w-20 h-20 border border-accent-gold/10 rounded-lg rotate-12" />
      <div className="hero-float-2 absolute bottom-[25%] left-[10%] w-16 h-16 border border-white/5 rounded-full" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <div className="hero-badge inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent-gold/20 bg-accent-gold/5 mb-8">
          <span className="w-2 h-2 rounded-full bg-accent-gold animate-pulse-glow" />
          <span className="text-accent-gold text-xs tracking-widest uppercase font-medium">
            Revenue Architecture Partners
          </span>
        </div>

        <div ref={textRef}>
          <h1 className="hero-line text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight text-white mb-6 max-w-4xl mx-auto">
            Revenue Infrastructure{" "}
            <span className="text-gradient">Built for</span>
            <br />
            Predictable Growth
          </h1>
          <p className="hero-line text-sm sm:text-base text-text-secondary/80 tracking-widest uppercase mb-3 font-medium">
            We Build the Engine! You Drive Revenue!
          </p>
          <p className="hero-line text-base sm:text-lg md:text-xl text-text-secondary max-w-2xl mx-auto leading-relaxed mb-6">
            We design, engineer, and optimize enterprises to drive revenue.
          </p>

          <div className="hero-line flex items-center justify-center gap-2 mb-6">
            <span className="text-xs sm:text-sm tracking-[0.2em] uppercase text-text-secondary/80 font-medium">
              The 3P<span className="formula-s">s</span> Formula&trade;
            </span>
          </div>

          <div className="hero-line flex items-center justify-center gap-6 sm:gap-10 mb-8">
            {["Passion", "Expertise", "Prosperity", "Stewardship"].map((item, i) => (
              <span
                key={item}
                className="text-xs sm:text-sm tracking-wide text-text-secondary/60 font-light"
              >
                {i > 0 && (
                  <span className="mr-2 sm:mr-3 text-accent-gold/30">&bull;</span>
                )}
                {item}
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
            variant="secondary"
            className="text-base px-8 py-4"
          >
            Explore the 3Ps Framework
          </MagneticButton>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-text-secondary/30">
        <span className="text-[10px] tracking-widest uppercase">Scroll</span>
        <div className="w-[1px] h-8 bg-gradient-to-b from-accent-gold/30 to-transparent" />
      </div>
    </section>
  );
}
