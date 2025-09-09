"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import ServiceModal from "@/features/landing/components/ServicesModal";

/**
 * Enhanced CyberServices (TypeScript + Tailwind + Framer Motion)
 * - More eye-catching cyber UI: neon glows, grid background, badges, mini-sparklines, feature overlay
 * - Accessible: keyboard activation (Enter/Space), aria roles
 * - Keeps existing ServiceModal integration (openModal / closeModal)
 *
 * Drop this into your Next.js project and replace the original component.
 */

/* --- Service type & data --- */
type Service = {
  title: string;
  description: string;
  icon: string; // path to icon
  features: string[];
  details: string;
  severity?: "Core" | "Advanced" | "Essentials";
  metric?: { label: string; value: string }; // small top-right metric
};

const services: Service[] = [
  {
    title: "Threat Detection",
    description:
      "Real-time monitoring and AI-driven alerts for proactive threat identification.",
    icon: "/threat-detection.png",
    features: [
      "24/7 threat monitoring",
      "Anomaly detection using AI",
      "Automated incident response",
    ],
    details:
      "Our threat detection service continuously monitors your systems, using artificial intelligence to detect unusual behavior, unauthorized access, and potential security breaches in real-time.",
    severity: "Core",
    metric: { label: "TPR", value: "99.3%" },
  },
  {
    title: "Network Protection",
    description:
      "Firewall configuration, intrusion prevention, and secure networking.",
    icon: "/network-protection.png",
    features: [
      "Advanced firewall setup",
      "Intrusion prevention systems (IPS)",
      "VPN and network segmentation",
      "Traffic filtering and access control",
    ],
    details:
      "Our network protection service ensures that your infrastructure is shielded against unauthorized access, malware, and internal vulnerabilities. We implement enterprise-grade firewalls, monitor traffic patterns, and isolate critical systems to provide a secure and efficient network environment.",
    severity: "Advanced",
    metric: { label: "Uptime", value: "99.99%" },
  },
  {
    title: "Data Encryption",
    description:
      "End-to-end encryption and secure data storage to protect sensitive information.",
    icon: "/data-encryption.png",
    features: [
      "AES-256 encryption for all stored data",
      "TLS/SSL encryption for data in transit",
      "Encrypted backups and key management",
      "Compliance with GDPR, HIPAA, and ISO standards",
    ],
    details:
      "With our data encryption service, your sensitive information is protected from unauthorized access at every stage. We utilize strong encryption standards to secure both data at rest and in transit, ensuring compliance with global data privacy regulations and maintaining customer trust.",
    severity: "Essentials",
    metric: { label: "Enc", value: "AES-256" },
  },
];

/* --- animation variants --- */
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.12 },
  },
};

const cardVar = {
  hidden: { opacity: 0, y: 18, scale: 0.98 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 110, damping: 16 },
  },
};

export default function CyberServices() {
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = (service: Service) => {
    setSelectedService(service);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    // small delay to avoid focus jump issues
    setTimeout(() => setSelectedService(null), 220);
  };

  const handleKeyOpen =
    (s: Service) => (e: React.KeyboardEvent<HTMLButtonElement>) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        openModal(s);
      }
    };

  return (
    <section
      id="services"
      className="relative px-6 md:px-10 lg:px-16 py-20 max-w-7xl mx-auto scroll-mt-20"
      aria-labelledby="services-heading"
    >
      {/* Decorative SVG grid + blobs */}
      <svg
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 w-full h-full"
        preserveAspectRatio="none"
      >
        <defs>
          <pattern id="dotGrid" width="28" height="28" patternUnits="userSpaceOnUse">
            <circle cx="0" cy="0" r="0.6" fill="#2b0b3a" />
          </pattern>
          <linearGradient id="bgGlow" x1="0" x2="1">
            <stop offset="0" stopColor="#0f0720" stopOpacity="1" />
            <stop offset="1" stopColor="#05020a" stopOpacity="1" />
          </linearGradient>
        </defs>

        <rect width="100%" height="100%" fill="url(#bgGlow)" />
        <rect x="6%" y="20%" width="88%" height="60%" fill="url(#dotGrid)" opacity="0.04" />
        {/* subtle radial glows */}
        <ellipse cx="14%" cy="18%" rx="200" ry="120" fill="#6f2bd9" opacity="0.05" />
        <ellipse cx="86%" cy="82%" rx="260" ry="160" fill="#4b1ad6" opacity="0.045" />
      </svg>

      {/* heading */}
      <div className="text-center mb-10">
        <h2
          id="services-heading"
          className="text-3xl md:text-4xl font-extrabold text-white tracking-tight"
        >
          Cybersecurity Services
        </h2>
        <p className="mt-3 text-sm md:text-base text-gray-300 max-w-2xl mx-auto">
          Threat intelligence, hardened networking, and data protection — crafted to detect,
          prevent, and remediate modern adversaries.
        </p>
      </div>

      {/* Cards grid */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="grid gap-6 md:grid-cols-3"
      >
        {services.map((svc) => (
          <motion.button
            key={svc.title}
            onClick={() => openModal(svc)}
            onKeyDown={handleKeyOpen(svc)}
            whileHover={{ y: -8 }}
            whileTap={{ scale: 0.99 }}
            variants={cardVar}
            role="button"
            aria-pressed={selectedService?.title === svc.title}
            className="relative group text-left rounded-2xl border border-white/6 bg-gradient-to-br from-white/[0.02] to-white/[0.01] p-6 overflow-hidden shadow-2xl focus:outline-none focus-visible:ring-4 focus-visible:ring-purple-600/30"
          >
            {/* neon top-right metric */}
            <div className="absolute top-4 right-4 flex items-center gap-2">
              <span
                className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold ${
                  svc.severity === "Advanced"
                    ? "bg-gradient-to-r from-purple-500 to-indigo-400 text-white"
                    : svc.severity === "Core"
                    ? "bg-gradient-to-r from-green-400 to-emerald-400 text-black"
                    : "bg-gradient-to-r from-indigo-400 to-violet-400 text-white"
                } shadow-[0_6px_18px_rgba(124,58,237,0.16)]`}
              >
                {svc.severity ?? "Core"}
              </span>

              {svc.metric && (
                <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-black/50 text-white border border-white/6">
                  <span className="mr-2 text-xs text-gray-200">{svc.metric.label}</span>
                  <span className="text-sm">{svc.metric.value}</span>
                </span>
              )}
            </div>

            {/* icon + title */}
            <div className="flex items-center gap-4">
              <div className="flex-shrink-0 w-16 h-16 rounded-xl bg-gradient-to-tr from-purple-700/30 to-indigo-700/18 flex items-center justify-center border border-white/6">
                {/* fallback inline SVG icon for crispness */}
                <img
                  src={svc.icon}
                  alt={`${svc.title} icon`}
                  className="w-12 h-12 object-contain"
                  decoding="async"
                />
              </div>

              <div className="flex-1">
                <h3 className="text-lg font-semibold text-white">{svc.title}</h3>
                <p className="mt-1 text-sm text-gray-300">{svc.description}</p>
              </div>
            </div>

            {/* bottom row: mini sparkline + CTA */}
            <div className="mt-6 flex items-center justify-between gap-4">
              {/* mini-sparkline (SVG) */}
              <div className="flex items-center gap-3">
                <svg className="w-28 h-10" viewBox="0 0 80 30" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id={`spark-${svc.title}`} x1="0" x2="1">
                      <stop offset="0" stopColor="#b08fff" />
                      <stop offset="1" stopColor="#5c24d9" />
                    </linearGradient>
                  </defs>
                  <polyline
                    points="0,24 12,18 24,10 36,14 48,6 60,8 72,4 80,2"
                    fill="none"
                    stroke={`url(#spark-${svc.title})`}
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    opacity="0.95"
                    className="group-hover:opacity-100 transition-opacity"
                  />
                </svg>

                <div className="text-xs text-gray-400">
                  <div className="font-medium text-white text-sm">
                    {svc.metric?.value ?? "—"}
                  </div>
                  <div className="text-[11px]">{svc.metric?.label ?? "metric"}</div>
                </div>
              </div>

              {/* subtle arrow CTA */}
              <div className="flex items-center gap-2">
                <span className="text-xs text-gray-400 mr-2 hidden md:inline">Learn more</span>
                <svg
                  className="w-7 h-7 p-1 rounded-full bg-gradient-to-br from-purple-700/20 to-indigo-700/10 border border-white/6"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M5 12h14M13 5l7 7-7 7"
                    stroke="#dcd6ff"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                  />
                </svg>
              </div>
            </div>

            {/* feature overlay - appears on hover */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent to-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-350"
            />
            <div
              className="absolute left-0 right-0 bottom-0 transform translate-y-6 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300 px-6 pb-6"
              aria-hidden
            >
              <div className="rounded-xl bg-gradient-to-r from-[#0b0620]/70 to-[#120526]/60 border border-white/6 p-4 text-xs text-gray-200">
                <div className="flex items-center justify-between mb-2">
                  <div className="font-medium text-sm">Key features</div>
                  <div className="text-[11px] text-gray-300">Trusted • Tested</div>
                </div>
                <ul className="grid gap-2 text-[13px]">
                  {svc.features.slice(0, 4).map((f, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <span className="w-6 h-6 flex items-center justify-center rounded-full bg-gradient-to-br from-purple-500 to-indigo-400 text-white text-[12px]">
                        ✓
                      </span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.button>
        ))}
      </motion.div>

      {/* CTA row under cards */}
      <div className="mt-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-sm text-gray-300 max-w-xl">
          <span className="font-medium text-white">Need a custom solution?</span>{" "}
          We build tailored detection & response plans for enterprise environments.
        </div>
        <div className="flex gap-3">
          <button
            type="button"
            onClick={() =>
              alert("Contact sales — replace this with real CTA or link to contact page.")
            }
            className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-gradient-to-r from-purple-600 to-indigo-500 text-white font-semibold shadow-lg hover:brightness-105 transition"
          >
            Contact Sales
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
              <path d="M5 12h14M13 5l7 7-7 7" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          <button
            type="button"
            onClick={() => alert("Download brochure — implement real link")}
            className="px-4 py-3 rounded-full border border-white/8 text-white text-sm"
          >
            Download Brochure
          </button>
        </div>
      </div>

      {/* Service Modal (keeps your existing modal component) */}
      <ServiceModal isOpen={modalOpen} onClose={closeModal} service={selectedService} />
    </section>
  );
}
