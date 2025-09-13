"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import { CheckCircle } from "lucide-react";

interface ServiceData {
  title: string;
  description: string;
  icon: string;
  features?: string[];
  details?: string;
}

interface ServiceModalProps {
  isOpen: boolean;
  onClose: () => void;
  service: ServiceData | null;
}

export default function ServiceModal({
  isOpen,
  onClose,
  service,
}: ServiceModalProps) {
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && service && (
        <motion.div
          className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="relative w-full max-w-4xl bg-gradient-to-b from-gray-900 to-black text-white rounded-3xl shadow-2xl p-6 sm:p-10 max-h-[90vh] overflow-y-auto"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 50, opacity: 0 }}
            transition={{ type: "spring", damping: 20, stiffness: 150 }}
          >
            {/* Botón cerrar */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 text-gray-400 hover:text-white text-3xl sm:text-4xl"
              aria-label="Close"
            >
              &times;
            </button>

            {/* Cabecera */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
              <img
                src={service.icon}
                alt={service.title}
                className="w-20 h-20 object-contain rounded-xl border border-gray-600 bg-gray-800 p-2"
              />
              <div className="text-center sm:text-left">
                <h2 className="text-3xl sm:text-4xl font-extrabold text-blue-400 mb-2">
                  {service.title}
                </h2>
                <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>

            <hr className="border-gray-700 my-6" />

            {/* Detalles */}
            {service.details && (
              <div>
                <h3 className="text-xl sm:text-2xl font-semibold text-white mb-3">
                  Overview
                </h3>
                <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                  {service.details}
                </p>
              </div>
            )}

            {/* Características */}
            {service.features && (
              <div className="mt-6">
                <h3 className="text-xl sm:text-2xl font-semibold text-white mb-4">
                  Key Features
                </h3>
                <ul className="space-y-3 pl-1">
                  {service.features.map((feature, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-base sm:text-lg text-gray-300 leading-snug"
                    >
                      <CheckCircle className="w-5 h-5 mt-1 text-green-400 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* CTA */}
            <div className="pt-6 text-center">
              <button
                onClick={onClose}
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-base sm:text-lg px-6 sm:px-8 py-2 sm:py-3 rounded-xl transition-all duration-200"
              >
                Learn More
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
