"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "@/components/Animations";
import ServiceModal from "@/features/landing/components/ServicesModal";

const services = [
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
  },
];

// Animation container for stagger effect
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const cardVar = {
  hidden: { opacity: 0, scale: 0.95, y: 20 },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { type: "spring", stiffness: 120, damping: 16 },
  },
};

export default function CyberServices() {
  const [selectedService, setSelectedService] = useState<null | typeof services[0]>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = (service: typeof services[0]) => {
    setSelectedService(service);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedService(null);
  };

  return (
    <section
      id="services"
      className="relative px-6 md:px-10 lg:px-16 py-28 max-w-7xl mx-auto scroll-mt-20"
    >
      {/* Gradient blobs background */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-gradient-to-b from-gray-900 to-black"
      />
      <div
        aria-hidden
        className="absolute -top-24 left-0 h-72 w-72 rounded-full blur-3xl bg-gradient-to-br from-blue-600/20 to-purple-600/20 -z-10"
      />
      <div
        aria-hidden
        className="absolute -bottom-32 right-0 h-80 w-80 rounded-full blur-3xl bg-gradient-to-tr from-purple-600/20 to-blue-600/20 -z-10"
      />

      {/* Section heading */}
      <motion.h2
        initial={{ opacity: 0, y: -12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.45 }}
        className="text-3xl md:text-4xl font-extrabold text-center bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent"
      >
        Our Cybersecurity Services
      </motion.h2>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="mt-14 grid md:grid-cols-3 gap-8"
      >
        {services.map((service) => (
          <motion.button
            key={service.title}
            onClick={() => openModal(service)}
            variants={cardVar}
            whileHover={{
              y: -6,
              boxShadow: "0 20px 40px rgba(0,0,0,0.35)",
            }}
            whileTap={{ scale: 0.98 }}
            className="relative h-full rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-md p-8 text-left text-white shadow-lg cursor-pointer"
          >
            <img
              src={service.icon}
              alt={`Icon ${service.title}`}
              className="mx-auto mb-6 w-20 h-20 object-contain"
            />
            <h3 className="text-xl font-bold text-center text-blue-400 mb-4">
              {service.title}
            </h3>
            <p className="text-gray-300 text-center text-sm leading-relaxed">
              {service.description}
            </p>
          </motion.button>
        ))}
      </motion.div>

      {/* Service Modal */}
      <ServiceModal
        isOpen={modalOpen}
        onClose={closeModal}
        service={selectedService}
      />
    </section>
  );
}
