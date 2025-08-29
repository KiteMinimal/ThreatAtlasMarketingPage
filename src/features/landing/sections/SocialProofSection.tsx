"use client";

import React from "react";
import { motion } from "framer-motion";

// --------------------
// THEME GRADIENTS & FX
// --------------------
const brandGradient =
  "bg-gradient-to-r from-blue-500/80 via-indigo-500/80 to-purple-500/80";
const textGradientClass =
  "bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent";

// --------------------
// INLINE SVG ICONS (on-brand, blue→violet)
// --------------------
const AwardSVG = ({ className = "h-12 w-12" }) => (
  <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
    <defs>
      <linearGradient id="g1" x1="0" x2="1">
        <stop offset="0%" stopColor="#3B82F6" />
        <stop offset="50%" stopColor="#6366F1" />
        <stop offset="100%" stopColor="#8B5CF6" />
      </linearGradient>
    </defs>
    <circle cx="24" cy="16" r="10" fill="url(#g1)" />
    <path
      d="M16 27l-4 14 12-6 12 6-4-14"
      fill="none"
      stroke="url(#g1)"
      strokeWidth="2.5"
      strokeLinejoin="round"
    />
  </svg>
);

const CommunitySVG = ({ className = "h-12 w-12" }) => (
  <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
    <defs>
      <linearGradient id="g2" x1="0" x2="1">
        <stop offset="0%" stopColor="#3B82F6" />
        <stop offset="50%" stopColor="#6366F1" />
        <stop offset="100%" stopColor="#8B5CF6" />
      </linearGradient>
    </defs>
    <circle cx="16" cy="20" r="6" stroke="url(#g2)" strokeWidth="2" fill="none" />
    <circle cx="32" cy="20" r="6" stroke="url(#g2)" strokeWidth="2" fill="none" />
    <path d="M8 36c2-6 10-8 16-8s14 2 16 8" stroke="url(#g2)" strokeWidth="2" fill="none" />
  </svg>
);

const ToolsSVG = ({ className = "h-12 w-12" }) => (
  <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
    <defs>
      <linearGradient id="g3" x1="0" x2="1">
        <stop offset="0%" stopColor="#3B82F6" />
        <stop offset="50%" stopColor="#6366F1" />
        <stop offset="100%" stopColor="#8B5CF6" />
      </linearGradient>
    </defs>
    <path
      d="M18 10l4 4-8 8-4-4 8-8zm12 12l4 4-8 8-4-4 8-8z"
      fill="url(#g3)"
      opacity="0.9"
    />
    <path
      d="M26 10l12 12M10 26l12 12"
      stroke="url(#g3)"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

// --------------------
// TYPES
// --------------------
interface Testimonial {
  name: string;
  title: string;
  quote: string;
  avatar: string;
}

interface Stat {
  label: string;
  value: string;
}

interface Recognition {
  Icon: React.FC<{ className?: string }>;
  label: string;
}

// --------------------
// DATA
// --------------------
const testimonials: Testimonial[] = [
  {
    name: "Mariela Ferbo",
    title: "CISO, TechStart Ltd.",
    quote:
      "ThreatIntel Pro cut our incident response time by 60% and gave us the proactive visibility we needed to stay ahead of advanced cyber threats.",
    avatar:
      "https://plus.unsplash.com/premium_photo-1741413963511-b46714133ffc?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0",
  },
  {
    name: "Mostafa KordZangeneh",
    title: "Head of Security, CloudCore",
    quote:
      "The platform’s dark web monitoring uncovered exposed credentials within hours, preventing a major account compromise.",
    avatar:
      "https://images.unsplash.com/photo-1623366302587-b38b1ddaefd9?q=80&w=1025&auto=format&fit=crop&ixlib=rb-4.1.0",
  },
];

const stats: Stat[] = [
  { label: "Companies Protected", value: "400+" },
  { label: "Threats Neutralized", value: "30,000+" },
  { label: "Credentials Breaches Detected", value: "2M+" },
];

const recognitions: Recognition[] = [
  { Icon: AwardSVG, label: "Cybersecurity Excellence Award" },
  { Icon: CommunitySVG, label: "Top 50 InfoSec Tools" },
  { Icon: ToolsSVG, label: "Security Community Pick" },
];

// --------------------
// ANIMATION VARIANTS
// --------------------
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const itemUp = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 80 } },
};

const fadeIn = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.5 } },
};

// --------------------
// COMPONENT
// --------------------
export default function SocialProofSection() {
  return (
    <section
      id="social-proof"
      className="relative py-24 px-6 mx-auto max-w-6xl mt-16"
    >
      {/* soft gradient glow background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div className={`absolute -top-28 left-1/2 h-72 w-[44rem] -translate-x-1/2 blur-3xl ${brandGradient} opacity-20 rounded-full`} />
        <div className={`absolute -bottom-24 right-0 h-56 w-[36rem] blur-3xl ${brandGradient} opacity-20 rounded-full`} />
      </div>

      <motion.h2
        className={`text-4xl md:text-5xl font-extrabold mb-12 text-center ${textGradientClass}`}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
        variants={fadeIn}
      >
        Trusted by Security Leaders Worldwide
      </motion.h2>

      {/* Testimonials (lazy images + glass cards) */}
      <motion.div
        className="flex flex-col md:flex-row gap-8 justify-center items-stretch mb-16"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
      >
        {testimonials.map(({ name, title, quote, avatar }) => (
          <motion.article
            key={name}
            variants={itemUp}
            className="flex-1 max-w-lg mx-auto rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-md shadow-lg"
          >
            <div className="p-8">
              <div className="flex items-center gap-4 mb-5">
                <img
                  src={avatar}
                  alt={name}
                  loading="lazy"
                  decoding="async"
                  className="h-16 w-16 rounded-full ring-2 ring-white/10 object-cover"
                />
                <div>
                  <div className="font-semibold text-white/90">{name}</div>
                  <div className="text-sm text-gray-400">{title}</div>
                </div>
              </div>
              <blockquote className="text-gray-200/90 text-lg leading-relaxed">
                <span className="text-white/70">“</span>
                {quote}
                <span className="text-white/70">”</span>
              </blockquote>
            </div>
            {/* subtle gradient underline */}
            <div className={`h-1 w-full ${brandGradient} rounded-b-2xl`} />
          </motion.article>
        ))}
      </motion.div>

      {/* Stats (staggered counters look) */}
      <motion.div
        className="flex flex-wrap justify-center gap-6 md:gap-8 mb-16"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        {stats.map(({ label, value }) => (
          <motion.div
            key={label}
            variants={itemUp}
            className="min-w-[170px] rounded-xl border border-white/10 bg-white/[0.04] backdrop-blur-md px-8 py-6 text-center shadow"
          >
            <div className={`text-3xl md:text-4xl font-extrabold mb-1 ${textGradientClass}`}>
              {value}
            </div>
            <div className="text-gray-300/90 text-sm md:text-base">{label}</div>
          </motion.div>
        ))}
      </motion.div>

      {/* Recognitions (on-brand SVGs) */}
      <motion.div
        className="flex flex-wrap justify-center items-center gap-8"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        {recognitions.map(({ Icon, label }) => (
          <motion.div
            key={label}
            variants={itemUp}
            className="flex flex-col items-center gap-3"
          >
            <Icon className="h-12 w-12 opacity-90" />
            <span className="text-sm text-gray-300">{label}</span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
