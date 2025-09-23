"use client";

import React from "react";
import {
  CyberServicesSection,
  SocialProofSection,
  ThreatBenefitsSection,
  ThreatSection,
} from "@/features/landing";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CyberGridBackground from "@/components/ui/CyberGridBackground";

import { motion } from "framer-motion";
import { fadeIn, hoverEffect } from "@/components/Animations";

import {
  ShieldCheck,
  Crosshair,
  Search,
  Shield,
  Zap,
  KeyRound,
} from "lucide-react";
import DemoForm from "@/features/landing/sections/DemoForm";

// Animation variants
const cardStagger = {
  hidden: { opacity: 0, y: 40 },
  show: (i: number = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, type: "spring", stiffness: 60 },
  }),
};

// New variants for hero content stagger
const heroContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, when: "beforeChildren" },
  },
};

const heroItem = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

// Features data with new icons
const features: { icon: React.ReactNode; title: string; desc: string }[] = [
  {
    icon: <Crosshair size={32} className="text-[#5E17EB]" />,
    title: "IOC Reconnaissance Engine",
    desc: "Transform suspicious indicators into actionable intelligence in seconds.",
  },
  {
    icon: <ShieldCheck size={32} className="text-[#5E17EB]" />,
    title: "Malicious IOC Detection",
    desc: "Stop chasing false positives with our advanced validation engine.",
  },
  {
    icon: <Search size={32} className="text-[#5E17EB]" />,
    title: "Dark Web Intelligence",
    desc: "Get early warnings of threats & compromised credentials before they strike.",
  },
  {
    icon: <Shield size={32} className="text-[#5E17EB]" />,
    title: "MITRE ATT&CK Mapping",
    desc: "Understand how attackers operate and identify gaps in your security posture.",
  },
  {
    icon: <Zap size={32} className="text-[#5E17EB]" />,
    title: "APT Group Intelligence Hub",
    desc: "Track adversaries targeting your industry with detailed profiles and analysis.",
  },
  {
    icon: <KeyRound size={32} className="text-[#5E17EB]" />,
    title: "Password Breach Intelligence",
    desc: "Protect your digital identity by monitoring for exposed credentials proactively.",
  },
];



export default function Page() {
  const bgImage = "/images/homeImg.jpg";

  return (
    <div className="bg-black text-white min-h-screen flex flex-col justify-between scroll-smooth">
      <Navbar />

      <motion.section
        id="home"
        className="relative px-4 text-center min-h-screen flex items-center justify-center overflow-hidden"
        variants={fadeIn}
        initial="hidden"
        animate="show"
      >
        {/* Background image (subtle rotation) */}
        <motion.div
          className="absolute inset-0 bg-center bg-cover will-change-transform"
          style={{ backgroundImage: `url(${bgImage})` }}
          aria-hidden
          initial={{ opacity: 0.95 }}
          animate={{ rotate: [0, 0.2, -0.2, 0] }}
          transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-black/60 via-black/25 to-black/70" />
        <CyberGridBackground />

        {/* Centered content container */}
        <motion.div
          className="relative z-10 w-full max-w-7xl px-4 text-center flex flex-col items-center"
          variants={heroContainer}
          initial="hidden"
          animate="show"
        >
          {/* Logo - made smaller and responsive */}
          <motion.img
            src="/images/logo-placeholder.png"
            alt="ThreatAtlas logo"
            className="mx-auto w-16 sm:w-20 md:w-24 lg:w-28 h-auto mb-4"
            variants={heroItem}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.6 }}
          />

          {/* Glossy white text effect with shine animation */}
          <motion.h1
            className="relative text-3xl sm:text-5xl md:text-6xl font-semibold mb-4 leading-tight drop-shadow-lg overflow-hidden"
            variants={heroItem}
          >
            <span className="relative inline-block text-transparent text-2xl bg-clip-text bg-gradient-to-r from-white via-gray-200 to-white animate-shine">
              ThreatAtlas
            </span>
          </motion.h1>

          <motion.h2
            className="text-xl sm:text-4xl md:text-6xl font-semibold mb-6 leading-snug bg-clip-text text-transparent"
            style={{
              backgroundImage:
                "linear-gradient(90deg, #ffffff 0%, #ffffff 50%, #ffffff 100%)",
            }}
            variants={heroItem}
          >
            Actionable Threat Intelligence, Simplified.
          </motion.h2>

          <motion.p
            className="text-lg sm:text-base max-w-7xl mx-auto mb-8 leading-relaxed"
            variants={heroItem}
          >
            Empower your security team to detect, analyze, and respond to cyber
            threats before they impact your organization.
          </motion.p>

          <div className="flex items-center justify-center gap-4">
            <motion.a
              href="#demoform"
              className="inline-block bg-[#5E17EB] px-4 py-3 rounded font-semibold text-white text-md transition-transform shadow-lg"
              {...hoverEffect}
              variants={heroItem}
            >
              Request Demo
            </motion.a>

            <motion.a
              href="#cta"
              className="inline-block ml-4 border-2 border-[#5E17EB] px-5 py-3 rounded font-semibold text-white text-md transition-transform shadow-lg"
              {...hoverEffect}
              variants={heroItem}
            >
              Download Brochure
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

      <section id="products">
        <ThreatSection />
      </section>

      {/* Features / Advantages */}
      <section id="features" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            variants={{
              hidden: {},
              show: {},
            }}
          >
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                className="bg-gray-900/50 rounded-xl p-8 shadow-lg hover:shadow-blue-500/20 transition-shadow duration-300 border border-gray-800"
                custom={i}
                variants={cardStagger}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.5 }}
              >
                <div className="mb-4">{feature.icon}</div>
                <h4 className="text-xl font-semibold mb-2">{feature.title}</h4>
                <p className="text-gray-400">{feature.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section id="services">
        <CyberServicesSection />
      </section>

      <section id="#cta">
        <ThreatBenefitsSection />
      </section>

      <div className="w-full my-28 bg-gray-600" style={{ height: "1px" }} />

      <section id="demoform">
        <DemoForm />
      </section>

      <section id="social-proof">
        <SocialProofSection />
      </section>

      <Footer />
    </div>
  );
}
