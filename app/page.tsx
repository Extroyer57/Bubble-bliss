"use client";

import { useState, useRef } from "react";
import { FloatingBubbles } from "@/components/bubble-bliss/FloatingBubbles";
import { HeroSection } from "@/components/bubble-bliss/HeroSection";
import { TrustSection } from "@/components/bubble-bliss/TrustSection";
import { LogisticsSection } from "@/components/bubble-bliss/LogisticsSection";
import { PricingSection } from "@/components/bubble-bliss/PricingSection";
import { FooterSection } from "@/components/bubble-bliss/FooterSection";
import { StickyBookButton } from "@/components/bubble-bliss/StickyBookButton";

export default function Home() {
  const pricingRef = useRef<HTMLDivElement>(null);

  const scrollToPricing = () => {
    const pricingSection = document.getElementById("pricing");
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: "smooth" });
    }
  };

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
        <FooterSection />
      </div>

      {/* Sticky Book Now Button */}
      <StickyBookButton onBookClick={scrollToPricing} />
    </main>
  );
}
