"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn, hoverEffect } from "./Animations";
import ServiceModal from "./ServicesModal";

const services = [
  {
    title: "Threat Detection",
    description: "Real-time monitoring and AI-driven alerts for proactive threat identification.",
    icon: "/threat-detection.png",
    features: [
      "24/7 threat monitoring",
      "Anomaly detection using AI",
      "Automated incident response"
    ],
    details:
      "Our threat detection service continuously monitors your systems, using artificial intelligence to detect unusual behavior, unauthorized access, and potential security breaches in real-time."
  },
  {
    title: "Network Protection",
    description: "Firewall configuration, intrusion prevention, and secure networking.",
    icon: "/network-protection.png",
    features: [
      "Advanced firewall setup",
      "Intrusion prevention systems (IPS)",
      "VPN and network segmentation",
      "Traffic filtering and access control"
    ],
    details:
      "Our network protection service ensures that your infrastructure is shielded against unauthorized access, malware, and internal vulnerabilities. We implement enterprise-grade firewalls, monitor traffic patterns, and isolate critical systems to provide a secure and efficient network environment."
  },
  {
    title: "Data Encryption",
    description: "End-to-end encryption and secure data storage to protect sensitive information.",
    icon: "/data-encryption.png",
    features: [
      "AES-256 encryption for all stored data",
      "TLS/SSL encryption for data in transit",
      "Encrypted backups and key management",
      "Compliance with GDPR, HIPAA, and ISO standards"
    ],
    details:
      "With our data encryption service, your sensitive information is protected from unauthorized access at every stage. We utilize strong encryption standards to secure both data at rest and in transit, ensuring compliance with global data privacy regulations and maintaining customer trust."
  }
];

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
      className="px-10 py-24 text-center max-w-7xl min-h-[50vh] mx-auto bg-gradient-to-b from-gray-900 to-black rounded-4xl"
    >
      <h2 className="text-4xl font-extrabold mb-12 text-white">Our Cybersecurity Services</h2>
      <div className="grid md:grid-cols-3 gap-10">
        {services.map((service) => (
          <motion.button
            key={service.title}
            onClick={() => openModal(service)}
            className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl shadow-lg text-white text-center cursor-pointer focus:outline-none"
            variants={fadeIn}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            transition={fadeIn.show.transition}
            whileHover={hoverEffect.whileHover}
            whileTap={hoverEffect.whileTap}
          >
            <img
              src={service.icon}
              alt={`Icon ${service.title}`}
              className="mx-auto mb-6 w-20 h-20"
            />
            <h3 className="text-2xl font-bold text-blue-400 mb-4">{service.title}</h3>
            <p className="text-gray-300 text-base leading-relaxed">{service.description}</p>
          </motion.button>
        ))}
      </div>

      <ServiceModal isOpen={modalOpen} onClose={closeModal} service={selectedService} />
    </section>
  );
}
