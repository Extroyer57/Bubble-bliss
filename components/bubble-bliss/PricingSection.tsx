"use client";

import { useState } from "react";
import { eventConfig, type Package } from "@/src/config/eventConfig";
import { BookingModal } from "./BookingModal";

interface PricingCardProps {
  pkg: Package;
  additionalChildren: number;
  onAdditionalChildrenChange: (count: number) => void;
  onBookNow: () => void;
}

function PricingCard({ pkg, additionalChildren, onAdditionalChildrenChange, onBookNow }: PricingCardProps) {
  const totalPrice = pkg.price + additionalChildren * eventConfig.additionalChildPrice;

  return (
    <div
      className={`relative flex flex-col rounded-3xl bg-white/80 p-6 shadow-xl backdrop-blur-md transition-all duration-500 md:p-8 ${
        pkg.highlighted
          ? "highlighted-card md:scale-105 md:-translate-y-2"
          : "card-hover"
      }`}
    >
      {/* Popular badge */}
      {pkg.highlighted && (
        <div
          className="absolute -top-4 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full px-5 py-1.5 text-sm font-semibold text-white shadow-lg"
          style={{ background: "linear-gradient(135deg, #8EDCF2 0%, #D1B9E0 100%)" }}
        >
          Most Popular
        </div>
      )}

      {/* Package name */}
      <h3 className="mb-2 mt-2 text-center text-xl font-bold text-gray-800">{pkg.name}</h3>

      {/* Price */}
      <div className="mb-6 text-center">
        <span className="text-4xl font-bold" style={{ color: "#8EDCF2" }}>
          R{totalPrice}
        </span>
        {additionalChildren > 0 && (
          <p className="mt-1 text-sm text-gray-500">
            (Base R{pkg.price} + R{additionalChildren * eventConfig.additionalChildPrice} additional)
          </p>
        )}
      </div>

      {/* Features */}
      <ul className="mb-6 flex-1 space-y-3">
        {pkg.features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3 text-gray-600">
            <svg
              className="mt-0.5 h-5 w-5 flex-shrink-0"
              style={{ color: "#8EDCF2" }}
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            <span className="text-sm md:text-base">{feature}</span>
          </li>
        ))}
      </ul>

      {/* Additional children counter */}
      <div className="mb-6 rounded-2xl bg-gray-50/80 p-4">
        <label className="mb-3 block text-sm font-medium text-gray-700">
          Additional Children (R{eventConfig.additionalChildPrice} each)
        </label>
        <div className="flex items-center justify-center gap-6">
          <button
            onClick={() => onAdditionalChildrenChange(Math.max(0, additionalChildren - 1))}
            className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-200 text-gray-600 transition-all hover:bg-gray-300 active:scale-95"
            type="button"
            aria-label="Decrease additional children"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
            </svg>
          </button>
          <span className="w-8 text-center text-2xl font-bold text-gray-800">{additionalChildren}</span>
          <button
            onClick={() => onAdditionalChildrenChange(additionalChildren + 1)}
            className="flex h-12 w-12 items-center justify-center rounded-full text-white transition-all hover:opacity-90 active:scale-95"
            style={{ backgroundColor: "#8EDCF2" }}
            type="button"
            aria-label="Increase additional children"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
          </button>
        </div>
      </div>

      {/* Book now button */}
      <button
        onClick={onBookNow}
        className={`btn-hover w-full rounded-xl px-6 py-4 text-base font-semibold text-white shadow-lg md:text-lg ${
          pkg.highlighted ? "animate-pulse-glow" : ""
        }`}
        style={{
          background: pkg.highlighted
            ? "linear-gradient(135deg, #8EDCF2 0%, #D1B9E0 100%)"
            : "#D1B9E0",
        }}
      >
        Book Now
      </button>
    </div>
  );
}

export function PricingSection() {
  const [additionalChildrenMap, setAdditionalChildrenMap] = useState<Record<number, number>>({});
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState<Package | null>(null);
  const [selectedAdditionalChildren, setSelectedAdditionalChildren] = useState(0);
  const [selectedTotalPrice, setSelectedTotalPrice] = useState(0);

  const handleAdditionalChildrenChange = (packageId: number, count: number) => {
    setAdditionalChildrenMap((prev) => ({ ...prev, [packageId]: count }));
  };

  const handleBookNow = (pkg: Package) => {
    const additionalChildren = additionalChildrenMap[pkg.id] || 0;
    const totalPrice = pkg.price + additionalChildren * eventConfig.additionalChildPrice;

    setSelectedPackage(pkg);
    setSelectedAdditionalChildren(additionalChildren);
    setSelectedTotalPrice(totalPrice);
    setModalOpen(true);
  };

  // Reorder packages for mobile: Package 2 (highlighted) first
  const orderedPackages = [...eventConfig.packages].sort((a, b) => {
    if (a.highlighted && !b.highlighted) return -1;
    if (!a.highlighted && b.highlighted) return 1;
    return a.id - b.id;
  });

  return (
    <section id="pricing" className="px-4 py-16 md:py-24">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-4 text-center text-3xl font-bold text-gray-800 md:text-4xl">
          Choose Your Package
        </h2>
        <p className="mx-auto mb-12 max-w-2xl text-center text-gray-600 md:mb-16">
          Select the perfect package for your family and create lasting memories at our magical bubble experience.
        </p>

        {/* Mobile: Stack vertically with highlighted first */}
        <div className="flex flex-col gap-6 md:hidden">
          {orderedPackages.map((pkg) => (
            <PricingCard
              key={pkg.id}
              pkg={pkg}
              additionalChildren={additionalChildrenMap[pkg.id] || 0}
              onAdditionalChildrenChange={(count) => handleAdditionalChildrenChange(pkg.id, count)}
              onBookNow={() => handleBookNow(pkg)}
            />
          ))}
        </div>

        {/* Desktop: 3-column grid with middle card elevated */}
        <div className="hidden items-center gap-6 md:grid md:grid-cols-3 lg:gap-8">
          {eventConfig.packages.map((pkg) => (
            <PricingCard
              key={pkg.id}
              pkg={pkg}
              additionalChildren={additionalChildrenMap[pkg.id] || 0}
              onAdditionalChildrenChange={(count) => handleAdditionalChildrenChange(pkg.id, count)}
              onBookNow={() => handleBookNow(pkg)}
            />
          ))}
        </div>
      </div>

      <BookingModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        selectedPackage={selectedPackage}
        additionalChildren={selectedAdditionalChildren}
        totalPrice={selectedTotalPrice}
      />
    </section>
  );
}
