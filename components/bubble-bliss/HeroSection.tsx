"use client";

import { eventConfig } from "@/src/config/eventConfig";

export function HeroSection() {
  const scrollToPricing = () => {
    const pricingSection = document.getElementById("pricing");
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center px-4 py-20">
      {/* Logo */}
      <div className="absolute left-4 top-4 md:left-8 md:top-8">
        <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo%20no%20-TD6DIu8MVUVsFgAGvxxUaierJZBQC8.png"
          alt="Bubble Bliss"
          className="h-20 w-auto object-contain drop-shadow-lg transition-transform hover:scale-105 md:h-24"
        />
      </div>

      {/* Main content */}
      <div className="z-10 mx-auto max-w-4xl text-center">
        <h1 className="mb-8 text-balance text-4xl font-bold leading-tight text-gray-800 md:text-5xl lg:text-6xl">
          {eventConfig.headline}
        </h1>

        {/* Event info card */}
        <div className="card-hover mx-auto mb-10 max-w-md rounded-3xl bg-white/70 p-6 shadow-xl backdrop-blur-md md:p-8">
          <h2
            className="mb-3 text-2xl font-bold md:text-3xl"
            style={{ color: "#8EDCF2" }}
          >
            {eventConfig.title}
          </h2>
          <p className="mb-1 text-lg font-medium text-gray-700">{eventConfig.date}</p>
          <p className="text-gray-500">{eventConfig.location}</p>
        </div>

        {/* CTA Button */}
        <button
          onClick={scrollToPricing}
          className="btn-hover rounded-2xl px-10 py-5 text-lg font-semibold text-white shadow-2xl md:text-xl"
          style={{ background: "linear-gradient(135deg, #8EDCF2 0%, #D1B9E0 100%)" }}
        >
          Select Your Package
        </button>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg
          className="h-8 w-8 text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
}
