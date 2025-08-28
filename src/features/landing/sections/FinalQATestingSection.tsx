"use client";
import React from "react";
import {useState} from "react"

const faqData = [
  {
    question: "What is included in the final QA testing process?",
    answer:
      "Final QA spans usability reviews, loading speed checks, and analytics integration validation to ensure a flawless go-live experience.",
  },
  {
    question: "How do you review the user experience (UX)?",
    answer:
      "UX review involves walkthroughs, accessibility checks, and feedback from real users to optimize navigation flows and design clarity.",
  },
  {
    question: "How is loading speed ensured?",
    answer:
      "Performance audits using tools like Lighthouse and real-device tests help eliminate bottlenecks and deliver fast load times.",
  },
  {
    question: "What analytics integrations are supported?",
    answer:
      "We support integration with platforms such as Google Analytics, Segment, and privacy-focused options to help track user engagement.",
  },
];

export default function FinalQATestingSection() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section className="max-w-3xl mx-auto py-14 px-4">
      <h2 className="text-3xl font-bold text-blue-400 mb-4 text-center">
        Final QA Testing
      </h2>
      <ul className="space-y-4 mb-12">
        <li className="bg-blue-50 rounded-lg p-5 border-l-4 border-blue-400 shadow">
          <h3 className="text-xl font-semibold text-blue-400 mb-2">UX Review</h3>
          <p className="text-gray-700">
            Manual walkthroughs and user testing ensure seamless navigation, accessibility, and a delightful interface.
          </p>
        </li>
        <li className="bg-blue-50 rounded-lg p-5 border-l-4 border-blue-400 shadow">
          <h3 className="text-xl font-semibold text-blue-400 mb-2">Loading Speed</h3>
          <p className="text-gray-700">
            We optimize images, scripts, and server responses for lightning-fast loading and smooth performance.
          </p>
        </li>
        <li className="bg-blue-50 rounded-lg p-5 border-l-4 border-blue-400 shadow">
          <h3 className="text-xl font-semibold text-blue-400 mb-2">Analytics Integration</h3>
          <p className="text-gray-700">
            Integrate robust analytics platforms for actionable site insights and to monitor user engagement from day one.
          </p>
        </li>
      </ul>
      <div>
        <h2 className="text-2xl font-bold text-gray-100 mb-6 text-center">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqData.map((item, i) => (
            <div key={i} className="border-b border-blue-400 pb-4">
              <button
                className="w-full text-left flex justify-between items-center text-blue-400 font-medium text-lg focus:outline-none"
                onClick={() => handleToggle(i)}
                aria-expanded={openFAQ === i}
              >
                {item.question}
                <span className="ml-2">{openFAQ === i ? "−" : "+"}</span>
              </button>
              {openFAQ === i && (
                <p className="mt-2 text-gray-400">
                  {item.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
