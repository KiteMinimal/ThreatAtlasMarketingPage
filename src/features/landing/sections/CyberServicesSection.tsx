// app/page.tsx (Next.js 13+ App Router)
// --------------------------------------
"use client";

import Image from "next/image";

interface Content {
  title: string;
  desc: string;
  url: string;
}

const content: Content[] = [
  {
    title: "Strategic threat intelligence",
    desc: "Understand threat trends and anticipate specific cyber attacks with thorough knowledge of your threat landscape. Group-IB Threat Intelligence Platform provides precise, tailored, and reliable cyber threat intelligence for data-driven strategic decisions.",
    url: "/images/strategic.png",
  },
  {
    title: "Operational threat intelligence",
    desc: "Strengthen defenses with detailed insight into attacker behaviors and infrastructure. Group-IB Threat Intelligence Platform delivers the most comprehensive insight into past, present, and future attacks targeting your organization, industry, partners, and clients.",
    url: "/images/operational.png",
  },
  {
    title: "Tactical threat intelligence",
    desc: "Identify cyberattacks faster and reduce incident response time with full visibility into every attack stage. Group-IB Threat Intelligence Platform equips your teams with the best possible insight into the methods used by adversaries.",
    url: "/images/tactical.png",
  },
];

export default function ThreatIntelligencePage() {
  return (
    <main className="bg-black text-white min-h-screen flex flex-col items-center px-6 py-16">
      {/* Hero Section */}
      <section className="max-w-5xl text-center">
        <h1 className="text-4xl md:text-5xl leading-tight font-semibold">
          Transform raw{" "}
          <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent font-semibold">
            digital threat intelligence
          </span>{" "}
          and hidden patterns into proactive defense
        </h1>
        <p className="mt-6 text-base text-gray-400">
          Group-IB Threat Intelligence Platform delivers the full value of
          digital threat intelligence, <br /> strengthening every component of
          your security with strategic, operational, and tactical <br />{" "}
          insights
        </p>
      </section>

      {/* Intelligence Types */}
      <section className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl w-full">
        {content.map((item, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            <Image
              src={item.url}
              alt={item.title}
              width={150}
              height={150}
              className="mb-6"
            />
            <h2 className="text-2xl  font-semibold">{item.title}</h2>
            <p className="mt-4 text-gray-400">{item.desc}</p>
          </div>
        ))}
      </section>
    </main>
  );
}
