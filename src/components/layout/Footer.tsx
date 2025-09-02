"use client";

import {
  Mail,
  Phone,
  Globe,
  Linkedin,
  Twitter,
  Instagram,
  Facebook,
  MessageSquare,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-gray-900 to-black text-gray-300">
      {/* --- Top Divider --- */}
      <div className="border-t border-white/10"></div>

      <div className="max-w-auto  px-20 py-6 grid grid-cols-1 md:grid-cols-2 gap-12 border-b border-white/10">
        {/* -------- Left Section -------- */}
        <div className="flex flex-col justify-between">
          {/* Contact + Info split */}
          <div className="flex flex-col sm:flex-row justify-between gap-6">
            {/* Left: Contact Heading + Website */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-10 ">Contact</h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center gap-3">
                  <Globe className="w-4 h-4 text-blue-400" />
                  <a
                    href="https://www.paritybitsecurity.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-purple-400 transition-colors"
                  >
                    www.paritybitsecurity.com
                  </a>
                </li>
              </ul>
            </div>

            {/* Right: Email + Phone */}
            <div className="pt-16">
              <ul className="space-y-3 text-sm sm:mt-0">
                <li className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-blue-400" />
                  <a
                    href="mailto:contact@paritybitsecurity.com"
                    className="hover:text-purple-400 transition-colors"
                  >
                    contact@paritybitsecurity.com
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-blue-400" />
                  <a
                    href="tel:+12049637230"
                    className="hover:text-purple-400 transition-colors"
                  >
                    +1 204-963-7230
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Social icons */}
          <div className="flex space-x-3 mt-8">
            {[
              { Icon: Linkedin, label: "LinkedIn" },
              { Icon: Twitter, label: "Twitter" },
              { Icon: Instagram, label: "Instagram" },
              { Icon: Facebook, label: "Facebook" },
              { Icon: MessageSquare, label: "Discord" },
            ].map(({ Icon, label }) => (
              <a
                key={label}
                href="#"
                className="w-9 h-9 flex items-center justify-center rounded-md bg-gray-800 text-gray-200 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 transition-colors"
                aria-label={label}
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        {/* -------- Right Section: Newsletter -------- */}
        <div className="pl-0 md:pl-10 -my-6 py-6 border-t md:border-t-0 md:border-l border-white/10">
          <h3 className="text-lg font-semibold text-white mb-10">
            Subscribe to stay up to date with the latest cyber threat trends
          </h3>

          {/* Email form (input smaller + button outside) */}
          <form className="flex flex-col sm:flex-row items-center gap-3">
            <input
              type="email"
              placeholder="Business Email*"
              required
              className="w-full sm:w-64 bg-black/50 border border-white/10 rounded-lg px-3 py-3 text-sm text-gray-200 placeholder-gray-500 focus:outline-none"
            />
            <button
              type="submit"
              className="px-5 py-2 rounded-md bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium hover:opacity-90 transition"
            >
              Subscribe
            </button>
          </form>

          {/* Privacy checkbox */}
          <div className="flex items-start mt-10 text-xs text-gray-400">
            <input
              type="checkbox"
              id="privacy"
              required
              className="mt-1 mr-2 rounded border-gray-600 text-blue-500 focus:ring-purple-500"
            />
            <label htmlFor="privacy">
              I agree that my personal data will be processed <br /> according to the{" "}
              <a href="#" className="text-purple-400 hover:underline">
                Privacy Policy
              </a>
              .
            </label>
          </div>
        </div>
      </div>

      {/* --- Bottom Bar --- */}
      <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
        <span>
          &copy; {new Date().getFullYear()} ParityBit Security. All rights reserved.
        </span>
        <div className="flex space-x-6 mt-2 md:mt-0">
          <a href="#" className="hover:text-purple-400 transition-colors">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-purple-400 transition-colors">
            Terms of Service
          </a>
          <a href="#" className="hover:text-purple-400 transition-colors">
            Support
          </a>
        </div>
      </div>
    </footer>
  );
}
