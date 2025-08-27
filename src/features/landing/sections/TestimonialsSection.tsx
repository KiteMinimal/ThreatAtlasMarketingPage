"use client";
import { motion } from "framer-motion";
import { fadeIn } from "@/components/Animations";

const testimonials = [
  {
    text: "ThreatIntel Pro completely transformed the way we present our business. Highly recommended!",
    name: "Carlos Méndez",
    role: "CEO at AgroTech",
    avatar: "https://i.pravatar.cc/100?img=12"
  },
  {
    text: "Professional, attentive, and real results in just weeks. We’re incredibly satisfied.",
    name: "Lucía Ramírez",
    role: "Founder at VitaCoach",
    avatar: "https://i.pravatar.cc/100?img=47"
  }
];

export default function Testimonials() {
  return (
    <section className="bg-black px-6 min-h-[60vh]" id="testimonials">
      <h2 className="text-4xl font-bold text-center text-white mb-14 mt-32">What Our Clients Say</h2>
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10">
        {testimonials.map((testimonial, i) => (
          <motion.div
            key={i}
            className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl shadow-lg"
            variants={fadeIn}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <p className="text-xl text-gray-200 italic leading-relaxed mb-6">“{testimonial.text}”</p>
            <div className="flex items-center space-x-4">
              <img
                src={testimonial.avatar}
                alt={testimonial.name}
                className="w-12 h-12 rounded-full object-cover border border-purple-500"
              />
              <div>
                <p className="font-semibold text-white">{testimonial.name}</p>
                <p className="text-sm text-gray-400">{testimonial.role}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
