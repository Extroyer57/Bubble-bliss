"use client";

import { useState, useRef } from "react";
import { FloatingBubbles } from "@/components/bubble-bliss/FloatingBubbles";
import { HeroSection } from "@/components/bubble-bliss/HeroSection";
import { TrustSection } from "@/components/bubble-bliss/TrustSection";
import { LogisticsSection } from "@/components/bubble-bliss/LogisticsSection";
import { PricingSection } from "@/components/bubble-bliss/PricingSection";
import { EventInfoSection } from "@/components/bubble-bliss/EventInfoSection";
import { FooterSection } from "@/components/bubble-bliss/FooterSection";
import { StickyBookButton } from "@/components/bubble-bliss/StickyBookButton";

export default function Home() {
  const pricingRef = useRef<HTMLDivElement>(null);

  // 🛑 THE MASTER SWITCH: Set to true to lock the site, set to false to restore it instantly!
  const isLocked = true;

  const scrollToPricing = () => {
    const pricingSection = document.getElementById("pricing");
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  // If the switch is active, stop right here and only render the lock screen
  if (isLocked) {
    return (
      <div className="fixed inset-0 z-[9999] flex h-screen w-screen flex-col items-center justify-center bg-zinc-950 px-4 text-center select-none overflow-hidden font-sans">
        <div className="max-w-md space-y-6">
          {/* Minimalist Lock Graphic */}
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              strokeWidth={1.5} 
              stroke="currentColor" 
              className="w-8 h-8 text-amber-500"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
            </svg>
          </div>

          {/* Heading */}
          <h1 className="text-2xl font-bold tracking-tight text-zinc-100 sm:text-3xl">
            🛠️ System Notice: Account Activation Pending
          </h1>

          {/* Description */}
          <p className="text-sm leading-relaxed text-zinc-400">
            The booking system for this domain is temporarily offline awaiting infrastructure activation. 
            Please contact the administrator or check back later.
          </p>

          {/* Subtle separator */}
          <div className="h-px w-full bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />
        </div>
      </div>
    );
  }

  // Your original marvelous website code remains perfectly intact below here!
  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* Background gradient with smoother transitions */}
      <div 
        className="pointer-events-none fixed inset-0"
        style={{
          background: `
            linear-gradient(180deg, 
              #FDF8FA 0%, 
              rgba(245, 203, 221, 0.15) 20%, 
              rgba(209, 185, 224, 0.12) 40%, 
              rgba(142, 220, 242, 0.1) 60%, 
              rgba(209, 185, 224, 0.12) 80%, 
              #FDF8FA 100%
            )
          `,
        }}
      />
      
      {/* Floating bubble decorations */}
      <FloatingBubbles />
      
      {/* Page content */}
      <div className="relative z-10">
        <HeroSection />
        <TrustSection />
        <LogisticsSection />
        <div ref={pricingRef}>
          <PricingSection />
        </div>
        <EventInfoSection />
        <FooterSection />
      </div>

      {/* Sticky Book Now Button */}
      <StickyBookButton onBookClick={scrollToPricing} />
    </main>
  );
}
