"use client";

/**
 * Subtle wave + soft glow background for the Hero section.
 * Uses SVG waves (brand blue, very low opacity) and a radial gradient
 * from light blue (#EFF6FF) to white for visual interest without clutter.
 */
export function BackgroundWaves() {
  // Brand blue at ~5% opacity for SVG fill
  const waveFill = "rgba(37, 99, 235, 0.05)";

  return (
    <div
      className="absolute inset-0 pointer-events-none overflow-hidden"
      aria-hidden
    >
      {/* Soft radial glow: light blue to white (clean, breathable) */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 100% 80% at 80% 20%, #EFF6FF 0%, rgba(255,255,255,0.4) 40%, transparent 70%), radial-gradient(ellipse 80% 60% at 20% 80%, #EFF6FF 0%, rgba(255,255,255,0.3) 50%, transparent 75%)",
        }}
      />

      {/* SVG wave - top right */}
      <svg
        className="absolute top-0 right-0 w-full max-w-2xl h-64 opacity-60"
        viewBox="0 0 800 200"
        preserveAspectRatio="none"
        fill="none"
      >
        <path
          d="M0 80 Q200 20 400 80 T800 80 L800 0 L0 0 Z"
          fill={waveFill}
        />
        <path
          d="M0 120 Q250 60 500 120 T800 120 L800 0 L0 0 Z"
          fill={waveFill}
          opacity={0.7}
        />
      </svg>

      {/* SVG wave - bottom left */}
      <svg
        className="absolute bottom-0 left-0 w-full max-w-2xl h-72 opacity-60"
        viewBox="0 0 800 250"
        preserveAspectRatio="none"
        fill="none"
      >
        <path
          d="M800 170 Q600 210 400 170 T0 170 L0 250 L800 250 Z"
          fill={waveFill}
        />
        <path
          d="M800 130 Q550 180 300 130 T0 130 L0 250 L800 250 Z"
          fill={waveFill}
          opacity={0.7}
        />
      </svg>
    </div>
  );
}
