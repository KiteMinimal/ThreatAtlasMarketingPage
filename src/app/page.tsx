"use client";

import React from "react";
import {
  CyberServicesSection,
  PricingPlanSection,
  SocialProofSection,
  ThreatSection,
  TestimonialsSection,
  LeadersReview,
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
  Server,
  Globe,
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

// const headingAnim = {
//   hidden: { opacity: 0, y: -30 },
//   show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 80 } },
// };

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

const advantages: { icon: React.ReactNode; title: string; desc: string; image: string }[] = [
  {
    icon: (
      <Globe
        size={40}
        className="text-blue-400 hover:text-purple-500 transition-colors drop-shadow-[0_0_6px_rgba(99,102,241,0.6)]"
      />
    ),
    title: "Unified Platform",
    desc: "All intelligence capabilities in one interface, reducing tool fatigue and improving workflow efficiency.",
    image: "/64b77ad612949eb7452fcee1_enterprise security.jpeg",
  },
  {
    icon: (
      <Server
        size={40}
        className="text-blue-400 hover:text-purple-500 transition-colors drop-shadow-[0_0_6px_rgba(99,102,241,0.6)]"
      />
    ),
    title: "Real-time Analysis",
    desc: "Get instant results with deep historical context to make faster, more informed security decisions.",
    image: "/64b77a6f03c8ab782f8916dc_network security.jpeg",
  },
];

export default function Page() {
  // Adjust this value until all text starts visually below your "square icon" in the background image.
  const iconOffset = "240px";
  const bgImage = "/images/homeImg.jpg";

  return (
    <div className="bg-black text-white min-h-screen flex flex-col justify-between scroll-smooth">
      <Navbar />

      {/* Hero Section: background-image + content on top (content starts below the square icon) */}
      <motion.section
        className="relative px-4 text-center min-h-screen flex flex-col justify-start overflow-hidden"
        variants={fadeIn}
        initial="hidden"
        animate="show"
        id="home"
        // set CSS variable so content block top can be tuned to sit below the icon in the image
        style={{ "--icon-offset": iconOffset } as React.CSSProperties}
      >
        {/* Animated background layer (acts as the image background) */}
        <motion.div
          className="absolute inset-0 bg-center bg-cover will-change-transform"
          style={{ backgroundImage: `url(${bgImage})` }}
          aria-hidden
          initial={{ scale: 1.04, opacity: 0.95 }}
          animate={{ scale: [1.04, 1, 1.02], rotate: [0, 0.2, -0.2, 0] }}
          transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
        />

        <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-black/60 via-black/25 to-black/70" />
        <CyberGridBackground />

        <motion.div
          className="absolute left-0 right-0 mx-auto w-full max-w-4xl px-4 z-10 text-center"
          style={{ top: "var(--icon-offset)" }}
          variants={heroContainer}
          initial="hidden"
          animate="show"
        >
          <motion.h1
            className="text-2xl font-sans sm:text-6xl md:text-7xl font-bold mb-6 leading-tight text-white drop-shadow-lg"
            variants={heroItem}
          >
            ThreatAtlas Pro
          </motion.h1>

          <motion.h2
            className="text-5xl sm:text-3xl font-bold mb-8 leading-snug bg-clip-text text-transparent"
            style={{ backgroundImage: "linear-gradient(90deg,#5E17EB,#3b82f6)" }}
            variants={heroItem}
          >
            Actionable Threat Intelligence, Simplified.
          </motion.h2>

          <motion.p className="text-lg sm:text-xl text-gray-200 max-w-2xl mx-auto mb-10 leading-relaxed" variants={heroItem}>
            Empower your security team to detect, analyze, and respond to cyber threats before they impact your organization.
          </motion.p>

          <div className="flex items-center justify-center gap-4">
            <motion.a
              href="#cta"
              className="inline-block bg-[#5E17EB] px-4 py-3 rounded font-semibold text-white text-md transition-transform shadow-lg"
              {...hoverEffect}
              variants={heroItem}
            >
              Request a Demo
            </motion.a>

            <motion.a
              href="#cta"
              className="inline-block ml-4 border-2 border-purple-900/40 px-4 py-3 rounded font-semibold text-white text-md transition-transform shadow-lg"
              {...hoverEffect}
              variants={heroItem}
            >
              Learn More
            </motion.a>
          </div>
        </motion.div>

        <style>{`
          @media (min-width: 1280px) {
            :root { --icon-offset: ${iconOffset}; }
          }
          @media (max-width: 1279px) and (min-width: 768px) {
            :root { --icon-offset: calc(${iconOffset} * 0.8); }
          }
          @media (max-width: 767px) {
            :root { --icon-offset: calc(${iconOffset} * 0.6); }
            .text-5xl { font-size: 2.25rem; }
          }
        `}</style>
      </motion.section>

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

      <motion.section
        className="py-24 px-4"
        variants={fadeIn}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
      >
        <div className="max-w-6xl mx-auto space-y-20">
          {advantages.map((advantage, index) => (
            <div
              key={advantage.title}
              className={`grid md:grid-cols-2 gap-12 items-center ${index % 2 !== 0 ? "md:grid-flow-col-dense" : ""}`}
            >
              <motion.div
                className={`w-full h-80 rounded-xl shadow-2xl overflow-hidden ${index % 2 !== 0 ? "md:col-start-2" : ""}`}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.6 }}
              >
                <img src={advantage.image} alt={advantage.title} className="w-full h-full object-cover" />
              </motion.div>

              <motion.div
                className="text-left"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.6 }}
              >
                <div className="mb-4">{advantage.icon}</div>
                <h3 className="text-3xl font-bold mb-4">{advantage.title}</h3>
                <p className="text-lg text-gray-400">{advantage.desc}</p>
              </motion.div>
            </div>
          ))}
        </div>
      </motion.section>

      <section id="products">
        <ThreatSection />
      </section>

      <section id="services">
        <CyberServicesSection />
      </section>

      <section id="subscription-plans">
        <PricingPlanSection />
      </section>

      <section id="testimonials">
        <TestimonialsSection />
      </section>

      <section id="leaders-review">
        <LeadersReview />
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
