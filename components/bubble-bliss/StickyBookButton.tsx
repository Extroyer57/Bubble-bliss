"use client";

import { useState, useEffect } from "react";

interface StickyBookButtonProps {
  onBookClick: () => void;
}

export function StickyBookButton({ onBookClick }: StickyBookButtonProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isAtBottom, setIsAtBottom] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button after scrolling past hero section (about 300px)
      const scrollY = window.scrollY;
      setIsVisible(scrollY > 300);

      // Check if near bottom of page
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollPosition = scrollY + windowHeight;
      setIsAtBottom(documentHeight - scrollPosition < 200);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check initial state

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible || isAtBottom) return null;

  return (
    <>
      {/* Desktop: Bottom-right */}
      <button
        onClick={onBookClick}
        className="sticky-btn fixed bottom-8 right-8 z-40 hidden items-center gap-2 rounded-2xl px-6 py-4 text-lg font-semibold text-white transition-all md:flex"
        style={{
          background: "linear-gradient(135deg, #8EDCF2 0%, #D1B9E0 100%)",
        }}
        aria-label="Book Now"
      >
        <svg
          className="h-5 w-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
        Book Now
      </button>

      {/* Mobile: Bottom-center, full-width style */}
      <div className="fixed bottom-0 left-0 right-0 z-40 p-4 md:hidden">
        <button
          onClick={onBookClick}
          className="sticky-btn flex w-full items-center justify-center gap-2 rounded-2xl px-6 py-4 text-lg font-semibold text-white"
          style={{
            background: "linear-gradient(135deg, #8EDCF2 0%, #D1B9E0 100%)",
          }}
          aria-label="Book Now"
        >
          <svg
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          Book Now
        </button>
      </div>
    </>
  );
}
