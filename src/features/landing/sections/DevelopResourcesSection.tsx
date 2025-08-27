import React from "react";

type Resource = {
  title: string;
  description: string;
  link: string;
  type: "Guide" | "Documentation" | "Forum";
};

const resources: Resource[] = [
  {
    title: "Getting Started Guide",
    description: "A step-by-step walkthrough to help you set up and use our platform.",
    link: "/guides/getting-started",
    type: "Guide",
  },
  {
    title: "API Documentation",
    description: "Comprehensive details on all available API endpoints and usage examples.",
    link: "/docs/api",
    type: "Documentation",
  },
  {
    title: "Best Practices",
    description: "Recommended patterns, security tips, and code examples.",
    link: "/guides/best-practices",
    type: "Guide",
  },
  {
    title: "Developer Forum",
    description: "Join the community: ask questions, share knowledge, and get help.",
    link: "https://community.yoursite.com",
    type: "Forum",
  },
];

export default function DevelopResourcesSection() {
  return (
    <section
      id="developer-resources"
      className="py-16 px-24 mt-12 bg-[#181f2a]  shadow-lg"
    >
      <h2 className="text-3xl font-bold text-[#7A73D1] mb-8 text-center">
        Developer Resources
      </h2>
      <p className="mb-10 text-center text-gray-300 max-w-2xl mx-auto">
        Access guides, API docs, and our developer forum to build securely and efficiently.
      </p>
      <div className="grid gap-8 md:grid-cols-2">
        {resources.map((resource) => (
          <a
            key={resource.title}
            href={resource.link}
            target={resource.type === "Forum" ? "_blank" : "_self"}
            rel={resource.type === "Forum" ? "noopener noreferrer" : undefined}
            className="block bg-[#212737] rounded-xl p-6 hover:shadow-xl transition-shadow group"
          >
            <div className={`mb-2 text-sm font-semibold uppercase tracking-wide ${
              resource.type === "Guide"
                ? "text-[#FFDB70]"
                : resource.type === "Documentation"
                ? "text-[#954C2E]"
                : "text-[#954C2E]"
            }`}>
              {resource.type}
            </div>
            <h3 className="text-xl font-bold text-white mb-1 group-hover:underline hover:text-blue-500">
              {resource.title}
            </h3>
            <p className="text-gray-400">{resource.description}</p>
          </a>
        ))}
      </div>
    </section>
  );
}
