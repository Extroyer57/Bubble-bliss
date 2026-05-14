"use client";

import { eventConfig } from "@/src/config/eventConfig";

export function LogisticsSection() {
  return (
    <section className="px-4 py-16 md:py-20">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-12 text-center text-3xl font-bold text-gray-800 md:mb-16 md:text-4xl">
          Event Details
        </h2>

        <div className="grid gap-6 md:grid-cols-3 md:gap-8">
          {/* Location Card */}
          <div className="card-hover flex flex-col items-center rounded-3xl bg-white/70 p-6 text-center shadow-xl backdrop-blur-md md:p-8">
            <div
              className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl transition-transform hover:scale-110"
              style={{ backgroundColor: "#8EDCF2" }}
            >
              <svg
                className="h-8 w-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>
            <h3 className="mb-2 text-xl font-bold text-gray-800">Location</h3>
            <p className="text-gray-600">{eventConfig.location}</p>
          </div>

          {/* Time Card */}
          <div className="card-hover flex flex-col items-center rounded-3xl bg-white/70 p-6 text-center shadow-xl backdrop-blur-md md:p-8">
            <div
              className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl transition-transform hover:scale-110"
              style={{ backgroundColor: "#D1B9E0" }}
            >
              <svg
                className="h-8 w-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="mb-2 text-xl font-bold text-gray-800">Time</h3>
            <p className="text-gray-600">{eventConfig.time}</p>
          </div>

          {/* Dress Code Card */}
          <div className="card-hover flex flex-col items-center rounded-3xl bg-white/70 p-6 text-center shadow-xl backdrop-blur-md md:p-8">
            <div
              className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl transition-transform hover:scale-110"
              style={{ backgroundColor: "#F5CBDD" }}
            >
              <svg
                className="h-8 w-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                />
              </svg>
            </div>
            <h3 className="mb-2 text-xl font-bold text-gray-800">Dress Code</h3>
            <p className="mb-4 text-gray-600">Pastel colors preferred</p>
            <div className="flex gap-3">
              {eventConfig.dressCodeColors.map((color, index) => (
                <div
                  key={index}
                  className="h-8 w-8 rounded-full shadow-md ring-2 ring-white transition-transform hover:scale-110"
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
