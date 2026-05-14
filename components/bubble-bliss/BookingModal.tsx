"use client";

import { useState, useEffect } from "react";
import { eventConfig, type Package } from "@/src/config/eventConfig";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedPackage: Package | null;
  additionalChildren: number;
  totalPrice: number;
}

export function BookingModal({
  isOpen,
  onClose,
  selectedPackage,
  additionalChildren,
  totalPrice,
}: BookingModalProps) {
  const [parentName, setParentName] = useState("");
  const [parentPhone, setParentPhone] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showContent, setShowContent] = useState(false);

  // Reset form when modal closes
  useEffect(() => {
    if (!isOpen) {
      setParentName("");
      setParentPhone("");
      setShowContent(false);
    } else {
      // Delay content animation
      setTimeout(() => setShowContent(true), 50);
    }
  }, [isOpen]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedPackage || !parentName || !parentPhone) return;

    setIsSubmitting(true);

    // Calculate total children (base + additional)
    const baseChildren = selectedPackage.id === 3 ? 2 : 1;
    const totalChildren = baseChildren + additionalChildren;

    // Build professional WhatsApp message
    const message = `Hi Bubble Bliss 🌸

I would like to book for the ${eventConfig.title}.

Package: ${selectedPackage.name}
Number of Children: ${totalChildren}
Total Estimated Price: R${totalPrice}

Parent Name: ${parentName}
Contact: ${parentPhone}

Please confirm availability. Thank you!`;

    // Encode and redirect to WhatsApp
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${eventConfig.whatsappNumber}?text=${encodedMessage}`;

    // Open WhatsApp in a new tab
    window.open(whatsappUrl, "_blank");

    setIsSubmitting(false);
    onClose();
  };

  if (!isOpen || !selectedPackage) return null;

  // Calculate total children for display
  const baseChildren = selectedPackage.id === 3 ? 2 : 1;
  const totalChildren = baseChildren + additionalChildren;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop with enhanced blur */}
      <div
        className={`absolute inset-0 bg-black/40 backdrop-blur-md transition-opacity duration-300 ${
          showContent ? "opacity-100" : "opacity-0"
        }`}
        onClick={onClose}
      />

      {/* Modal */}
      <div
        className={`relative z-10 w-full max-w-md rounded-3xl bg-white/95 p-6 shadow-2xl backdrop-blur-enhanced transition-all duration-400 md:p-8 ${
          showContent
            ? "translate-y-0 scale-100 opacity-100"
            : "translate-y-4 scale-95 opacity-0"
        }`}
        style={{
          transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 rounded-full p-2 text-gray-400 transition-colors hover:bg-gray-100 hover:text-gray-600"
        >
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Header */}
        <div className="mb-6 text-center">
          <h3 className="mb-2 text-2xl font-bold text-gray-800">Complete Your Booking</h3>
          <p className="text-gray-500">Fill in your details to reserve your spot</p>
        </div>

        {/* Live Price Summary Card */}
        <div
          className="mb-6 rounded-2xl p-5"
          style={{
            background: "linear-gradient(135deg, rgba(142, 220, 242, 0.1) 0%, rgba(209, 185, 224, 0.1) 50%, rgba(245, 203, 221, 0.1) 100%)",
          }}
        >
          <div className="mb-3 flex items-center justify-between">
            <span className="font-semibold text-gray-700">Booking Summary</span>
            <span
              className="rounded-full px-3 py-1 text-xs font-medium text-white"
              style={{ backgroundColor: "#8EDCF2" }}
            >
              {selectedPackage.name}
            </span>
          </div>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between text-gray-600">
              <span>Base Package</span>
              <span>R{selectedPackage.price}</span>
            </div>
            <div className="flex justify-between text-gray-600">
              <span>Children included</span>
              <span>{baseChildren}</span>
            </div>
            {additionalChildren > 0 && (
              <div className="flex justify-between text-gray-600">
                <span>Additional children ({additionalChildren} x R{eventConfig.additionalChildPrice})</span>
                <span>R{additionalChildren * eventConfig.additionalChildPrice}</span>
              </div>
            )}
            <div className="flex justify-between text-gray-600">
              <span>Total children</span>
              <span className="font-medium">{totalChildren}</span>
            </div>
            <div className="mt-3 border-t border-gray-200 pt-3">
              <div className="flex items-center justify-between">
                <span className="text-base font-bold text-gray-800">Total Price</span>
                <span className="text-2xl font-bold" style={{ color: "#8EDCF2" }}>
                  R{totalPrice}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="parentName" className="mb-2 block text-sm font-medium text-gray-700">
              Parent Name
            </label>
            <input
              type="text"
              id="parentName"
              value={parentName}
              onChange={(e) => setParentName(e.target.value)}
              required
              className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-gray-800 placeholder-gray-400 transition-all focus:border-transparent focus:outline-none focus:ring-2"
              style={{ "--tw-ring-color": "#8EDCF2" } as React.CSSProperties}
              placeholder="Enter your name"
            />
          </div>

          <div>
            <label htmlFor="parentPhone" className="mb-2 block text-sm font-medium text-gray-700">
              Phone Number
            </label>
            <input
              type="tel"
              id="parentPhone"
              value={parentPhone}
              onChange={(e) => setParentPhone(e.target.value)}
              required
              className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-gray-800 placeholder-gray-400 transition-all focus:border-transparent focus:outline-none focus:ring-2"
              style={{ "--tw-ring-color": "#8EDCF2" } as React.CSSProperties}
              placeholder="Enter your phone number"
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting || !parentName || !parentPhone}
            className="btn-hover mt-6 w-full rounded-xl px-6 py-4 text-lg font-semibold text-white shadow-xl disabled:cursor-not-allowed disabled:opacity-50"
            style={{ background: "linear-gradient(135deg, #25D366 0%, #128C7E 100%)" }}
          >
            <span className="flex items-center justify-center gap-2">
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Book via WhatsApp
            </span>
          </button>
        </form>
      </div>
    </div>
  );
}
