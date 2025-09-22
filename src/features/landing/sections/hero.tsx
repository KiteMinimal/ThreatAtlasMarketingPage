"use client";

import React from "react";
import { motion } from "framer-motion";
// import CyberGridBackground from "./CyberGridBackground"; // uncomment and set correct path if you use it

type Props = {
  bgImage?: string;
  logoSrc?: string;
};

export default function HeroSection({ bgImage = "/images/hero.jpg", logoSrc = "/images/logo-placeholder.png" }: Props) {
  const hoverEffect = { whileHover: { scale: 1.03 }, whileTap: { scale: 0.98 } };

  const heroContainer = {
    hidden: {},
    show: { transition: { staggerChildren: 0.06 } },
  };

  const heroItem = {
    hidden: { opacity: 0, y: 12 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <motion.section
      id="home"
      className="relative px-4 text-center min-h-screen flex items-center justify-center overflow-hidden"
      initial="hidden"
      animate="show"
      variants={heroContainer}
    >
      {/* Background image (rotating subtle motion) */}
      <motion.div
        className="absolute inset-0 bg-center bg-cover will-change-transform"
        style={{ backgroundImage: `url(${bgImage})` }}
        aria-hidden
        initial={{ opacity: 0.95 }}
        animate={{ rotate: [0, 0.2, -0.2, 0] }}
        transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
      />

      {/* Gradient overlay to improve contrast */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-black/60 via-black/25 to-black/70" />

      {/* Optional grid/background component */}
      {/* <CyberGridBackground /> */}

      {/* Content - centered vertically and horizontally */}
      <motion.div className="relative z-10 w-full max-w-5xl px-4 flex flex-col items-center" variants={heroContainer}>
        {/* Logo: made slightly smaller and responsive */}
        <motion.img
          src={logoSrc}
          alt="ThreatAtlas logo"
          className="mx-auto w-16 sm:w-20 md:w-24 lg:w-28 h-auto mb-4"
          variants={heroItem}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.6 }}
        />

        {/* Headline */}
        <motion.h1 className="relative text-3xl sm:text-5xl md:text-6xl font-bold mb-4 leading-tight drop-shadow-lg overflow-hidden" variants={heroItem}>
          <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-white animate-shine">ThreatAtlas</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.h2
          className="text-xl sm:text-3xl md:text-4xl font-semibold mb-6 leading-snug bg-clip-text text-transparent"
          style={{
            backgroundImage: "linear-gradient(90deg, #7C3AED 0%, #8B5CF6 50%, #A78BFA 100%)",
          }}
          variants={heroItem}
        >
          Actionable Threat Intelligence, Simplified.
        </motion.h2>

        <motion.p className="text-lg sm:text-base max-w-2xl mx-auto mb-8 leading-relaxed" variants={heroItem}>
          Empower your security team to detect, analyze, and respond to cyber threats before they impact your organization.
        </motion.p>

        <div className="flex items-center justify-center gap-4">
          <motion.a href="#cta" className="inline-block bg-[#5E17EB] px-4 py-3 rounded font-semibold text-white text-md transition-transform shadow-lg" {...hoverEffect} variants={heroItem}>
            Request Demo
          </motion.a>

          <motion.a href="#cta" className="inline-block ml-4 border-2 border-[#5E17EB] px-5 py-3 rounded font-semibold text-white text-md transition-transform shadow-lg" {...hoverEffect} variants={heroItem}>
            Learn More
          </motion.a>
        </div>
      </motion.div>

      <style>{`
        @keyframes shine {
          0% { background-position: -200% center; }
          50% { background-position: 200% center; }
          100% { background-position: 200% center; }
        }
        .animate-shine {
          background-size: 200% auto;
          animation: shine 3s linear infinite;
        }

        /* Responsive tweak for very small screens */
        @media (max-width: 767px) {
          .text-5xl { font-size: 2.25rem; }
        }
      `}</style>
    </motion.section>
  );
}
