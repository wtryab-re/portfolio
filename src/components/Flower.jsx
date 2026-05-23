export default function Flower({
  className = "",
  delay = "0s",
  duration = "6s",
}) {
  return (
    <div
      className={`
        absolute origin-bottom
        pointer-events-none
        ${className}
      `}
      style={{
        animation: `sway ${duration} ease-in-out infinite`,
        animationDelay: delay,
      }}
    >
      <svg
        width="120"
        height="320"
        viewBox="0 0 120 320"
        fill="none"
        className="drop-shadow-[0_8px_18px_rgba(0,0,0,0.18)]"
      >
        {/* Stem */}
        <path
          d="M60 320 C45 240, 78 180, 58 70"
          stroke="#4A8F55"
          strokeWidth="5"
          strokeLinecap="round"
        />

        {/* Leaves */}
        <ellipse
          cx="42"
          cy="180"
          rx="18"
          ry="9"
          fill="#76C27F"
          transform="rotate(-30 42 180)"
        />

        <ellipse
          cx="74"
          cy="230"
          rx="18"
          ry="9"
          fill="#6BB874"
          transform="rotate(28 74 230)"
        />

        {/* Flower petals */}
        <circle cx="60" cy="52" r="18" fill="#FFD6E7" />
        <circle cx="40" cy="52" r="18" fill="#FFD6E7" />
        <circle cx="80" cy="52" r="18" fill="#FFD6E7" />
        <circle cx="60" cy="32" r="18" fill="#FFD6E7" />
        <circle cx="60" cy="72" r="18" fill="#FFD6E7" />

        {/* Inner petals */}
        <circle cx="60" cy="52" r="10" fill="#FFF0A6" />

        {/* Glow */}
        <circle
          cx="60"
          cy="52"
          r="40"
          fill="rgba(255,255,255,0.15)"
          className="blur-md"
        />
      </svg>
    </div>
  );
}
