/* ISO 834: T = 20 + 345·log10(8t+1), nacrtano t = 0–120 min, T = 0–1100 °C */
const CURVE_POINTS =
  "50,275.5 58.2,179.1 70.4,149.1 90.8,125.9 111.2,112.0 131.7,102.5 172.5,88.6 233.7,75.0 295,65.2 417.5,51.4 540,41.6";

const EI_MARKS = [
  { t: "EI 30", x: 172.5 },
  { t: "EI 60", x: 295 },
  { t: "EI 90", x: 417.5 },
  { t: "EI 120", x: 540 },
];

// Potpisna grafika smjera: standardna krivulja požara kao tehnički dijagram.
export default function FireCurve() {
  return (
    <figure className="border border-hairline bg-white p-5 md:p-7">
      <svg
        viewBox="0 0 560 320"
        className="w-full h-auto"
        role="img"
        aria-label="Standardna krivulja požara ISO 834 s oznakama otpornosti EI 30 do EI 120"
      >
        {/* mreža */}
        {[275.5, 166.4, 52.7].map((y) => (
          <line key={y} x1="50" y1={y} x2="540" y2={y} stroke="#e2e0da" strokeWidth="1" />
        ))}
        {/* EI oznake minuta */}
        {EI_MARKS.map((m) => (
          <g key={m.t}>
            <line
              x1={m.x}
              y1="30"
              x2={m.x}
              y2="280"
              stroke="#141414"
              strokeWidth="1"
              strokeDasharray="3 5"
              opacity="0.35"
            />
            <text
              x={m.x}
              y="20"
              textAnchor={m.x > 500 ? "end" : "middle"}
              fontSize="12"
              fill="#141414"
              fontFamily="var(--font-plex-mono)"
            >
              {m.t}
            </text>
          </g>
        ))}
        {/* osi */}
        <line x1="50" y1="30" x2="50" y2="280" stroke="#141414" strokeWidth="1.5" />
        <line x1="50" y1="280" x2="540" y2="280" stroke="#141414" strokeWidth="1.5" />
        {/* oznake osi */}
        <text x="42" y="284" textAnchor="end" fontSize="11" fill="#8a8a86" fontFamily="var(--font-plex-mono)">0</text>
        <text x="42" y="170" textAnchor="end" fontSize="11" fill="#8a8a86" fontFamily="var(--font-plex-mono)">500</text>
        <text x="42" y="57" textAnchor="end" fontSize="11" fill="#8a8a86" fontFamily="var(--font-plex-mono)">1000</text>
        <text x="46" y="304" textAnchor="start" fontSize="11" fill="#8a8a86" fontFamily="var(--font-plex-mono)">t / min</text>
        <text x="540" y="304" textAnchor="end" fontSize="11" fill="#8a8a86" fontFamily="var(--font-plex-mono)">T / °C</text>
        {/* krivulja */}
        <polyline
          className="curve-draw"
          points={CURVE_POINTS}
          fill="none"
          stroke="#c41e24"
          strokeWidth="3"
          strokeLinejoin="round"
          strokeLinecap="round"
        />
      </svg>
      <figcaption className="mt-4 font-mono text-[11px] uppercase tracking-[0.14em] text-neutral-400">
        ISO 834 · standardna krivulja požara · T = 20 + 345·log₁₀(8t+1)
      </figcaption>
    </figure>
  );
}
