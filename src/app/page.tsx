"use client";
import {
  CyberServicesSection,
  FinalQATestingSection,
  PricingPlanSection,
  SocialProofSection,
  ThreatSection,
  TestimonialsSection,
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
import Image from "next/image";

// Animation variants
const cardStagger = {
  hidden: { opacity: 0, y: 40 },
  show: (i: number = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, type: "spring", stiffness: 60 },
  }),
};

const headingAnim = {
  hidden: { opacity: 0, y: -30 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 80 } },
};

// Features data with new icons
const features = [
  {
    icon: <Crosshair size={32} className="text-blue-400" />,
    title: "IOC Reconnaissance Engine",
    desc: "Transform suspicious indicators into actionable intelligence in seconds.",
  },
  {
    icon: <ShieldCheck size={32} className="text-blue-400" />,
    title: "Malicious IOC Detection",
    desc: "Stop chasing false positives with our advanced validation engine.",
  },
  {
    icon: <Search size={32} className="text-blue-400" />,
    title: "Dark Web Intelligence",
    desc: "Get early warnings of threats & compromised credentials before they strike.",
  },
  {
    icon: <Shield size={32} className="text-blue-400" />,
    title: "MITRE ATT&CK Mapping",
    desc: "Understand how attackers operate and identify gaps in your security posture.",
  },
  {
    icon: <Zap size={32} className="text-blue-400" />,
    title: "APT Group Intelligence Hub",
    desc: "Track adversaries targeting your industry with detailed profiles and analysis.",
  },
  {
    icon: <KeyRound size={32} className="text-blue-400" />,
    title: "Password Breach Intelligence",
    desc: "Protect your digital identity by monitoring for exposed credentials proactively.",
  },
];

const advantages = [
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
  return (
    <div className="bg-black text-white min-h-screen flex flex-col justify-between scroll-smooth">
      <Navbar />

      {/* Hero Section */}
      <motion.section
        className="relative px-4 text-center min-h-screen flex flex-col justify-center bg-gradient-to-b from-gray-900 to-black overflow-hidden"
        variants={fadeIn}
        initial="hidden"
        animate="show"
        id="home"
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none opacity-50"
        >
          <source src="/hero.mp4" type="video/mp4" />
        </video>
        <CyberGridBackground />
        <div className="relative z-10 w-full max-w-4xl mx-auto px-4">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold mb-6 leading-tight">
            ThreatIntel Pro
          </h1>
          <h2 className="text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500 mb-8 leading-snug">
            Actionable Threat Intelligence, Simplified.
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed">
            Empower your security team to detect, analyze, and respond to cyber
            threats before they impact your organization.
          </p>
          <motion.a
            href="#cta"
            className="bg-gradient-to-r from-blue-500 to-purple-600 px-10 py-4 rounded-full font-semibold text-white text-lg transition-transform shadow-lg"
            {...hoverEffect}
          >
            Request a Demo
          </motion.a>
        </div>
      </motion.section>

      <ThreatSection />

      {/* 2) Core Features */}
      <CyberServicesSection />

      {/* 3) Deep Dives */}
      {/* <DevelopResourcesSection /> */}

      {/* 4) Why ThreatIntel Pro Section */}
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
              className={`grid md:grid-cols-2 gap-12 items-center ${
                index % 2 !== 0 ? "md:grid-flow-col-dense" : ""
              }`}
            >
              <motion.div
                className={`w-full h-80 rounded-xl shadow-2xl overflow-hidden ${
                  index % 2 !== 0 ? "md:col-start-2" : ""
                }`}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.6 }}
              >
                <img
                  src={advantage.image}
                  alt={advantage.title}
                  className="w-full h-full object-cover"
                />
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

      {/* 5) Pricing */}
      <PricingPlanSection />

      {/* 6) Testimonials */}
      <TestimonialsSection />

      {/* 7) Team */}
      {/* <TeamSection /> */}

      {/* Feature Highlights Section */}
      <motion.section
        id="features"
        className="py-24 px-4 bg-black"
        variants={fadeIn}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
      >
        <motion.h3
          className="text-4xl font-bold text-center mb-4"
          variants={headingAnim}
        >
          A Modern Threat Intelligence Platform
        </motion.h3>
        <motion.p
          className="text-lg text-gray-400 text-center max-w-3xl mx-auto mb-16"
          variants={headingAnim}
        >
          ThreatIntel Pro provides all the tools you need to stay ahead of
          adversaries in one unified, cost-effective solution.
        </motion.p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
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
              <h4 className="text-xl font-semibold mb-2 text-white">
                {feature.title}
              </h4>
              <p className="text-gray-400">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* 8) <CTASection /> */}
      {/* <motion.section
        id="cta"
        className="py-24 px-4 text-center bg-black"
        variants={fadeIn}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        <img
          src="/64b8d16d96243d6341ddbec4_red code alert (2).jpeg"
          alt="Alert Icon"
          className="w-24 h-24 mx-auto mb-6 rounded-full shadow-lg border-4 border-gray-700"
        />
        <h3 className="text-3xl font-bold mb-4">
          Ready to Strengthen Your Security?
        </h3>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-8">
          See ThreatIntel Pro in action. Schedule a personalized demo with our
          experts today.
        </p>
        <motion.a
          href="#"
          className="bg-gradient-to-r from-blue-500 to-purple-600 px-10 py-4 rounded-full font-semibold text-white text-lg transition-transform shadow-lg"
          {...hoverEffect}
        >
          Contact Sales
        </motion.a>
      </motion.section> */}

        <DemoForm />

      <SocialProofSection />

      <FinalQATestingSection />

      <Footer />
    </div>
  );
}
