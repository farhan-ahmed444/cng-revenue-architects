"use client";

import { useRef, ReactNode } from "react";
import { motion } from "framer-motion";

interface Props {
  children: ReactNode;
  className?: string;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "ghost" | "outline";
}

export default function MagneticButton({
  children,
  className = "",
  href,
  onClick,
  variant = "primary",
}: Props) {
  const ref = useRef<HTMLDivElement>(null);

  const handleMouse = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    ref.current.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
  };

  const handleLeave = () => {
    if (!ref.current) return;
    ref.current.style.transform = "translate(0px, 0px)";
  };

  const variants = {
    primary:
      "gold-gradient text-black font-semibold hover:shadow-lg hover:shadow-amber-500/25",
    secondary:
      "border border-white/10 text-charcoal hover:border-accent-gold/50 hover:text-accent-gold bg-white/5",
    ghost:
      "text-charcoal hover:text-accent-gold",
    outline:
      "bg-[#2A2A2A] border border-accent-gold/60 text-black hover:bg-[#333333] hover:border-accent-gold",
  };

  const Tag = href ? "a" : "button";

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={handleLeave}
      className="inline-block"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 300, damping: 15 }}
    >
      <Tag
        href={href}
        onClick={onClick}
        className={`inline-flex items-center justify-center px-7 py-3.5 rounded-lg text-sm tracking-wide transition-all duration-300 ${variants[variant]} ${className}`}
      >
        {children}
      </Tag>
    </motion.div>
  );
}
