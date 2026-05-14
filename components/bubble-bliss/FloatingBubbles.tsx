"use client";

export function FloatingBubbles() {
  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden">
      {/* Large bubbles - slow, elegant motion */}
      <div
        className="absolute -top-20 -left-20 h-64 w-64 animate-float rounded-full opacity-15 blur-sm"
        style={{ background: "linear-gradient(135deg, #8EDCF2 0%, #D1B9E0 100%)" }}
      />
      <div
        className="animate-float-delayed absolute top-1/4 -right-32 h-96 w-96 rounded-full opacity-10 blur-sm"
        style={{ background: "linear-gradient(135deg, #D1B9E0 0%, #F5CBDD 100%)" }}
      />
      <div
        className="animate-float-slow absolute bottom-1/4 -left-16 h-48 w-48 rounded-full opacity-15 blur-sm"
        style={{ background: "linear-gradient(135deg, #F5CBDD 0%, #8EDCF2 100%)" }}
      />

      {/* Medium bubbles */}
      <div
        className="animate-float-delayed absolute top-1/2 left-1/4 h-32 w-32 rounded-full opacity-10"
        style={{ background: "radial-gradient(circle at 30% 30%, rgba(142, 220, 242, 0.8), rgba(142, 220, 242, 0.2))" }}
      />
      <div
        className="animate-float-slow absolute top-3/4 right-1/4 h-24 w-24 rounded-full opacity-15"
        style={{ background: "radial-gradient(circle at 30% 30%, rgba(209, 185, 224, 0.8), rgba(209, 185, 224, 0.2))" }}
      />
      <div
        className="absolute bottom-20 right-1/3 h-36 w-36 animate-float rounded-full opacity-10"
        style={{ background: "radial-gradient(circle at 30% 30%, rgba(245, 203, 221, 0.8), rgba(245, 203, 221, 0.2))" }}
      />

      {/* Small bubbles - subtle highlights */}
      <div
        className="animate-float-slow absolute top-1/3 right-1/3 h-16 w-16 rounded-full opacity-20"
        style={{ background: "radial-gradient(circle at 30% 30%, #8EDCF2, transparent)" }}
      />
      <div
        className="animate-float-delayed absolute top-2/3 left-1/3 h-12 w-12 rounded-full opacity-15"
        style={{ background: "radial-gradient(circle at 30% 30%, #D1B9E0, transparent)" }}
      />
      <div
        className="absolute bottom-1/3 left-1/2 h-20 w-20 animate-float rounded-full opacity-10"
        style={{ background: "radial-gradient(circle at 30% 30%, #F5CBDD, transparent)" }}
      />

      {/* Extra small accent bubbles */}
      <div
        className="animate-float-delayed absolute top-1/4 left-1/6 h-8 w-8 rounded-full opacity-25"
        style={{ background: "#8EDCF2" }}
      />
      <div
        className="animate-float-slow absolute bottom-1/4 right-1/6 h-10 w-10 rounded-full opacity-20"
        style={{ background: "#F5CBDD" }}
      />
    </div>
  );
}
