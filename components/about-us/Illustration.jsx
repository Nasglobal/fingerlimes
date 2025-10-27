import React from 'react'

function Illustration({ className = "w-full h-full" }) {
  // Inline SVG: business graph morphing to a digital grid (dark-themed, subtle green accents)
  return (
    <svg viewBox="0 0 600 600" className={className} preserveAspectRatio="xMidYMid meet" role="img" aria-hidden>
      <defs>
        <linearGradient id="g1" x1="0" x2="1">
          <stop offset="0" stopColor="#062016" />
          <stop offset="1" stopColor="#07120e" />
        </linearGradient>
        <linearGradient id="g2" x1="0" x2="1">
          <stop offset="0" stopColor="#0b7b27" stopOpacity="0.95" />
          <stop offset="1" stopColor="#43e07f" stopOpacity="0.25" />
        </linearGradient>
        <filter id="blurSoft">
          <feGaussianBlur stdDeviation="6" />
        </filter>
      </defs>

      {/* background */}
      <rect width="100%" height="100%" fill="url(#g1)" rx="20" />

      {/* faint mesh */}
      <g opacity="0.06" stroke="#0b7b27" strokeWidth="1" strokeLinecap="round">
        <path d="M20 420 Q120 300 220 360 T520 340" fill="none" />
        <path d="M40 480 Q140 350 240 420 T540 390" fill="none" />
      </g>

      {/* business graph on left */}
      <g transform="translate(40,40)">
        <polyline points="10,260 60,220 110,240 160,180 210,200 260,150" fill="none" stroke="#7af08d" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        {/** nodes */}
        <g fill="#7af08d">
          <circle cx="10" cy="260" r="5" />
          <circle cx="60" cy="220" r="6" />
          <circle cx="110" cy="240" r="5" />
          <circle cx="160" cy="180" r="6" />
          <circle cx="210" cy="200" r="5" />
          <circle cx="260" cy="150" r="6" />
        </g>
      </g>

      {/* morphing grid on right */}
      <g transform="translate(310,80)">
        <g opacity="0.85" filter="url(#blurSoft)">
          {/* small squares grid */}
          {Array.from({ length: 5 }).map((_, row) =>
            Array.from({ length: 5 }).map((__, col) => {
              const x = col * 28;
              const y = row * 28;
              const lighter = (row + col) % 2 === 0;
              return (
                <rect
                  key={`${row}-${col}`}
                  x={x}
                  y={y}
                  width="18"
                  height="18"
                  rx="3"
                  fill={lighter ? "#0b7b27" : "#0a391d"}
                  opacity={0.9}
                />
              );
            })
          )}
        </g>

        {/* connecting lines */}
        <g stroke="#0b7b27" strokeWidth="1" strokeOpacity="0.45" fill="none">
          <path d="M0 0 L120 120" />
          <path d="M10 60 L140 60" />
          <path d="M40 0 L40 140" />
        </g>
      </g>

      {/* soft vignette */}
      <rect width="100%" height="100%" fill="black" opacity="0.06" />
    </svg>
  );
}


export default Illustration