// components/ThreatIntelligenceBenefits.tsx
"use client";

import React from "react";

const benefits = [
  {
    url: "/images/img/img1.png",
    title: "Revolutionize risk management",
    description:
      "With tailored on-demand, and regular monthly and quarterly threat reports written by threat intelligence analysts specifically for the board and executives.",
  },
  {
    url: "/images/img/img2.png",
    title: "Enable growth",
    description:
      "With actionable threat intelligence before expanding into a new region/business line, and get industry-specific threats before digital transformation.",
  },
  {
    url: "/images/img/img3.png",
    title: "Lower the cost",
    description:
      "Of cybersecurity by avoiding unnecessary purchases and postponing upgrades by maximizing the efficacy of your existing security infrastructure.",
  },
  {
    url: "/images/img/img4.png",
    title: "Transform security",
    description:
      "And adapt instantly, use the insights to block malicious network and endpoint activity the moment it is first observed anywhere in the world.",
  },
  {
    url: "/images/img/img5.png",
    title: "Identify and remove weaknesses",
    description:
      "Before they are exploited by arming your Red Team with detailed knowledge of threat actor’s tools, tactics and processes.",
  },
  {
    url: "/images/img/img6.png",
    title: "Automate workflows",
    description:
      "And improve team efficiency by enriching your SIEM, SOAR, EDR and vulnerability management platforms with out-of-the-box API integrations supporting TAXII and STIX.",
  },
  {
    url: "/images/img/img7.png",
    title: "Prioritize vulnerability patching",
    description:
      "For your technology stack with automated alerts that inform you the moment vulnerabilities are discovered or exploited by threat actors targeting your industry.",
  },
  {
    url: "/images/img/img8.png",
    title: "Eliminate false positive alerts",
    description:
      "And focus on legitimately risky events with a database of indicators of compromise for cybercriminals in your threat landscape.",
  },
  {
    url: "/images/img/img9.png",
    title: "Reduce response time",
    description:
      "And quickly remove attackers from your network with knowledge of the cyber kill chain used by threat actors in the MITRE ATT&CK matrix format.",
  },
];

export default function ThreatIntelligenceBenefits() {
  return (
    <section
      className="relative bg-black text-white py-20 px-6 lg:px-16"
      style={{
        backgroundImage: "url('/images/blured-rocks.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay for dark effect */}
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative max-w-7xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl my-20">
          Key benefits of{" "}
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            ThreatAtlas Intelligence Platform
          </span>
        </h2>

        {/* Grid layout */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 text-left">
          {benefits.map((item, index) => (
            <div key={index} className="flex flex-col items-center justify-start space-y-3">
              {/* Icon placeholder */}
              <div className="w-20 h-20 flex items-center justify-center">
                <img src={item.url} alt={item.title} />
              </div>
              <h3 className="text-lg font-semibold py-3">{item.title}</h3>
              <p className="text-sm text-center text-gray-300 leading-relaxed mb-20">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-16">
          <p className="text-4xl md:text-5xl mx-auto max-w-5xl text-center font-medium">
            An integrated threat intelligence solution to{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              outsmart threat actors
            </span>{" "}
            targeting your business
          </p>
          <button className="mt-16 px-6 py-3 border text-white rounded-lg shadow-lg hover:opacity-90 transition">
            Talk to our experts
          </button>
        </div>
      </div>
    </section>
  );
}
