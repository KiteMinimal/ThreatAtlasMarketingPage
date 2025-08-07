"use client";
import React from "react";
import { motion } from "framer-motion";

const team = [
  {
    name: "Liam Carter",
    role: "Senior Software Engineer",
    avatar: "https://i.pravatar.cc/150?img=5",
    bio: "Over 12 years of experience in backend development and scalable cloud infrastructure.",
    skills: ["Node.js", "AWS", "Microservices", "DevOps"],
    color: "blue"
  },
  {
    name: "Sophia Bennett",
    role: "Product Manager",
    avatar: "https://i.pravatar.cc/150?img=35",
    bio: "Strategic thinker with a strong UX background, aligning product vision with business goals.",
    skills: ["Product Management", "UX", "Strategy", "Agile"],
    color: "purple"
  }
];

export default function TeamSection() {
  return (
    <section id="team" className="bg-gradient-to-b from-black to-gray-900 px-6 py-20">
      <h2 className="text-4xl font-bold text-center text-white mb-10">Meet Our Team</h2>
      <p className="text-center text-gray-300 max-w-3xl mx-auto mb-16">
        A team of dedicated professionals with expertise in software development, product strategy, and technical leadership.
      </p>

      <div className="flex flex-col md:flex-row justify-center items-stretch gap-10 max-w-6xl mx-auto">
        {team.map((member) => (
          <motion.div
            key={member.name}
            className="bg-gradient-to-b from-[#1e2a3a] to-[#111827] rounded-xl p-6 text-center text-white w-full max-w-sm mx-auto shadow-lg border border-[#334155] flex flex-col"
            whileHover={{ scale: 1.05, boxShadow: "0px 10px 30px rgba(99, 102, 241, 0.2)" }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="flex justify-center mb-4">
              <div className={`w-36 h-36 rounded-full border-4 border-${member.color}-600 p-1 overflow-hidden shadow-inner`}>
                <img
                  src={member.avatar}
                  alt={member.name}
                  className="rounded-full object-cover w-full h-full"
                />
              </div>
            </div>
            <h3 className="text-xl font-bold mb-1">{member.name}</h3>
            <p className="text-sky-400 font-medium mb-3">{member.role}</p>
            <p className="text-gray-300 text-sm mb-4 leading-relaxed max-w-xs mx-auto">{member.bio}</p>
            <div className="flex flex-wrap justify-center gap-2 mt-auto">
              {member.skills.map((tag) => (
                <span key={tag} className="bg-[#2e3b52] text-white text-xs px-3 py-1 rounded-full font-medium">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}