"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import React from "react";

type Testimonial = {
  text: string;
  name: string;
  role: string;
  avatar: string;
};

const testimonials: Testimonial[] = [
  {
    text: "ThreatIntel Pro completely transformed the way we present our business. Highly recommended!",
    name: "Carlos Méndez",
    role: "CEO at AgroTech",
    avatar: "https://i.pravatar.cc/100?img=12",
  },
  {
    text: "Professional, attentive, and real results in just weeks. We’re incredibly satisfied.",
    name: "Lucía Ramírez",
    role: "Founder at VitaCoach",
    avatar: "https://i.pravatar.cc/100?img=47",
  },
  // feel free to add more cards here
];

// Gradient quote icon (on-brand)
const QuoteIcon = ({ className = "h-6 w-6" }: { className?: string }) => (
  <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
    <defs>
      <linearGradient id="qg" x1="0" x2="1">
        <stop offset="0%" stopColor="#3B82F6" />
        <stop offset="50%" stopColor="#6366F1" />
        <stop offset="100%" stopColor="#8B5CF6" />
      </linearGradient>
    </defs>
    <path
      d="M18 16h-6a6 6 0 00-6 6v10h10V22H8m28-6h-6a6 6 0 00-6 6v10h10V22h-8"
      stroke="url(#qg)"
      strokeWidth="2"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const fromLeft = {
  hidden: { opacity: 0, x: -28, rotateX: -4 },
  show: {
    opacity: 1,
    x: 0,
    rotateX: 0,
    transition: { type: "spring", stiffness: 120, damping: 18 },
  },
};

const fromRight = {
  hidden: { opacity: 0, x: 28, rotateX: -4 },
  show: {
    opacity: 1,
    x: 0,
    rotateX: 0,
    transition: { type: "spring", stiffness: 120, damping: 18 },
  },
};

function TiltCard({ children, i }: { children: React.ReactNode; i: number }) {
  // tiny parallax tilt on hover
  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const rotX = useTransform(ry, [-20, 20], [4, -4]);
  const rotY = useTransform(rx, [-20, 20], [-4, 4]);

  const onMove = (e: React.MouseEvent) => {
    const el = e.currentTarget as HTMLDivElement;
    const rect = el.getBoundingClientRect();
    const px = e.clientX - rect.left;
    const py = e.clientY - rect.top;
    const midX = rect.width / 2;
    const midY = rect.height / 2;
    rx.set(((px - midX) / midX) * 20);
    ry.set(((py - midY) / midY) * 20);
  };

  const onLeave = () => {
    rx.set(0);
    ry.set(0);
  };

  return (
    <motion.div
      style={{ rotateX: rotX, rotateY: rotY, transformStyle: "preserve-3d" }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      variants={i % 2 === 0 ? fromLeft : fromRight}
      className="group relative rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-md p-8 shadow-xl"
    >
      {/* subtle gradient glow ring */}
      <div className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute -inset-[1px] rounded-2xl bg-[conic-gradient(from_180deg_at_50%_50%,#3B82F6,#6366F1,#8B5CF6,#3B82F6)] opacity-30 blur-[6px]" />
      </div>
      {children}
      {/* gradient underline */}
      <div className="mt-6 h-0.5 w-0 group-hover:w-full transition-all duration-500 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500" />
    </motion.div>
  );
}

export default function TestimonialsSection() {
  return (
    <section
      className="relative bg-black px-6 py-28 scroll-mt-20"
      id="testimonials"
    >
      {/* distinct background for this section */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "repeating-linear-gradient( 45deg, rgba(59,130,246,0.05) 0px, rgba(59,130,246,0.05) 10px, transparent 10px, transparent 28px )",
        }}
      />
      <div className="absolute -top-20 left-1/2 -translate-x-1/2 h-72 w-[46rem] rounded-full blur-3xl bg-gradient-to-r from-blue-600/20 via-indigo-600/20 to-purple-600/20 -z-10" />

      <motion.h2
        initial={{ opacity: 0, y: -12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        className="text-3xl md:text-4xl font-extrabold text-center bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent mb-14"
      >
        What Our Clients Say
      </motion.h2>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="mx-auto max-w-5xl grid md:grid-cols-2 gap-8"
      >
        {testimonials.map((t, i) => (
          <TiltCard key={t.name} i={i}>
            <div className="mb-5 flex items-center gap-3">
              <QuoteIcon className="h-10 w-10 opacity-90" />
              <span className="sr-only">Quote</span>
            </div>

            <p className="text-lg md:text-xl text-gray-200/95 leading-relaxed italic">
              “{t.text}”
            </p>

            <div className="mt-6 flex items-center gap-4">
              <img
                src={t.avatar}
                alt={t.name}
                loading="lazy"
                decoding="async"
                className="h-12 w-12 rounded-full object-cover ring-2 ring-white/10"
              />
              <div>
                <p className="font-semibold text-white">{t.name}</p>
                <p className="text-sm text-gray-400">{t.role}</p>
              </div>
            </div>
          </TiltCard>
        ))}
      </motion.div>
    </section>
  );
}
