"use client";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black border-t border-gray-700 py-10 px-6 text-center text-gray-300">
      <div className="max-w-6xl mx-auto space-y-6">
        <div className="flex justify-center space-x-8 text-sm sm:text-base">
          <a href="#" className="hover:text-purple-400 transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-purple-400 transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-purple-400 transition-colors">Support</a>
        </div>

        <div className="text-xs sm:text-sm text-gray-500">
          &copy; {new Date().getFullYear()} ThreatIntel Pro. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
