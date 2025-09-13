import React from "react";

// TrustedBySection.tsx
// Simple, clean Next.js + Tailwind component in TypeScript.
// Drop this file into a Next.js project (e.g. components/TrustedBySection.tsx)
// Place any avatar images you want in the `public/` folder and update the paths.

type Testimonial = {
  id: string;
  name: string;
  title: string;
  company?: string;
  avatar: string; // path inside public/ or external url
  quote: string;
};

// Sample data for the two testimonial cards (update as needed)
const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Mariela Ferbo",
    title: "CISO",
    company: "TechStart Ltd.",
    avatar: "/avatars/mariela.jpg", // put your image in public/avatars/
    quote:
      "ThreatIntel Pro cut our incident response time by 60% and gave us the proactive visibility we needed to stay ahead of advanced cyber threats.",
  },
  {
    id: "t2",
    name: "Mostafa KordZangeneh",
    title: "Head of Security",
    company: "CloudCore",
    avatar: "/avatars/mostafa.jpg",
    quote:
      "The platform’s dark web monitoring uncovered exposed credentials within hours, preventing a major account compromise.",
  },
];

// Bottom icons array (you asked for a sample array you can update)
// Each item includes a small inline SVG that you can replace or extend.
export const bottomIcons = [
  {
    id: "award",
    label: "Cybersecurity Excellence Award",
    // simple sample SVG. Replace `svg` value or add `iconComponent` as needed.
    svg: "./images/award.png",
  },
  {
    id: "community",
    label: "Top 50 InfoSec Tools",
    svg: "./images/tools.png",
  },
  {
    id: "pick",
    label: "Security Community Pick",
    svg: "./images/security.png",
  },
];

export default function LeadersReview() {
  return (
    <section className="w-full bg-black text-white py-2">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-center text-4xl md:text-5xl font-bold tracking-tight mb-12">
          Trusted by{" "}
          <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Security{" "}
          </span>
          Leaders Worldwide
        </h2>

        {/* Testimonials (two cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {testimonials.map((t) => (
            <article
              key={t.id}
              className="relative rounded-xl border border-zinc-800 bg-[#0b0b0b] p-6 shadow-lg overflow-hidden"
            >
              {/* subtle avatar + name row */}
              <div className="flex items-center gap-4 mb-4">
                <div className="h-14 w-14 rounded-full overflow-hidden flex-shrink-0 border border-zinc-700">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="h-full w-full object-cover"
                    onError={(e) => {
                      // fallback to placeholder if image missing
                      (e.target as HTMLImageElement).src =
                        "/avatars/placeholder.png";
                    }}
                  />
                </div>
                <div>
                  <div className="text-sm font-semibold">{t.name}</div>
                  <div className="text-xs text-zinc-400">
                    {t.title}
                    {t.company ? `, ${t.company}` : ""}
                  </div>
                </div>
              </div>

              {/* Quote */}
              <blockquote className="text-zinc-200 leading-relaxed text-lg md:text-xl">
                “{t.quote}”
              </blockquote>

              {/* Decorative gradient bottom border */}
              <div className="absolute left-6 right-6 bottom-0 h-1 rounded-b-xl bg-gradient-to-r from-blue-400 to-purple-400" />
            </article>
          ))}
        </div>

        {/* Note: removed the numeric boxes as requested */}

        {/* Bottom icons row (sample only) */}
        <div className="mt-12 flex flex-col items-center gap-6">
          <div className="flex items-center justify-center gap-16">
            {bottomIcons.map((icon) => (
              <div
                key={icon.id}
                className="flex flex-col items-center w-40 h-30 text-center text-zinc-300"
              >
                <div
                  className="mb-3 text-zinc-200"
                  style={{ color: "transparent" }}
                >
                  {/* We want the SVG to inherit gradient-like color via text-transparent trick.
                      Instead of forcing colors here, rely on Tailwind's text color and use a gradient overlay on the page if needed. */}
                </div>
                <div className="w-16 h-16 flex items-center justify-center text-zinc-400">
                  <img src={icon.svg} alt="" />
                </div>
                <div className="text-sm mt-3 max-w-[160px]">{icon.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
