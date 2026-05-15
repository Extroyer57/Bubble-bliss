"use client";

export function EventInfoSection() {
  const eventRules = [
    {
      icon: (
        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: "Games",
      description: "Games will be played in teams.",
    },
    {
      icon: (
        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
      ),
      title: "Cooler Boxes",
      description: "Allowed from 12:00pm to 14:00pm.",
    },
    {
      icon: (
        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: "On-Site Sales",
      description: "Cocktails, refreshments, and Hubbly will be sold inside the venue.",
    },
  ];

  return (
    <section className="px-4 py-16 md:py-20">
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-4 text-center text-3xl font-bold text-gray-800 md:text-4xl">
          Event Info
        </h2>
        <p className="mx-auto mb-12 max-w-2xl text-center text-gray-600">
          Important details to help you prepare for a wonderful day.
        </p>

        <div className="grid gap-6 md:grid-cols-3">
          {eventRules.map((rule, index) => (
            <div
              key={index}
              className="group rounded-2xl bg-white/70 p-6 shadow-lg backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div
                className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl text-white transition-transform group-hover:scale-110"
                style={{ background: "linear-gradient(135deg, #8EDCF2 0%, #D1B9E0 100%)" }}
              >
                {rule.icon}
              </div>
              <h3 className="mb-2 text-lg font-semibold text-gray-800">{rule.title}</h3>
              <p className="text-sm leading-relaxed text-gray-600">{rule.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
