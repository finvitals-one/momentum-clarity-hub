import { useEffect, useState, useRef } from "react";

const DATA = [
  { date: "17/10", score: 32 },
  { date: "24/10", score: 35 },
  { date: "31/10", score: 38 },
  { date: "07/11", score: 34 },
  { date: "14/11", score: 36 },
  { date: "21/11", score: 37 },
  { date: "28/11", score: 39 },
  { date: "05/12", score: 40 },
  { date: "12/12", score: 42 },
  { date: "19/12", score: 41 },
  { date: "26/12", score: 43 },
  { date: "02/01", score: 40 },
  { date: "09/01", score: 38 },
  { date: "16/01", score: 30 },
  { date: "23/01", score: 28 },
  { date: "06/02", score: 52 },
  { date: "13/02", score: 58 },
  { date: "20/02", score: 62 },
  { date: "27/02", score: 65 },
  { date: "06/03", score: 72 },
  { date: "13/03", score: 78 },
];

const getZoneColor = (score: number) => {
  if (score >= 70) return "hsl(142, 60%, 45%)";
  if (score >= 50) return "hsl(45, 90%, 50%)";
  return "hsl(0, 70%, 55%)";
};

export const MomentumChart = () => {
  const [progress, setProgress] = useState(0);
  const ref = useRef<SVGSVGElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setInView(true); },
      { threshold: 0.3 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (!inView) return;
    let start: number;
    const duration = 2000;
    const animate = (ts: number) => {
      if (!start) start = ts;
      const p = Math.min((ts - start) / duration, 1);
      setProgress(p);
      if (p < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [inView]);

  const W = 800;
  const H = 280;
  const PAD_L = 10;
  const PAD_R = 10;
  const PAD_T = 20;
  const PAD_B = 40;
  const chartW = W - PAD_L - PAD_R;
  const chartH = H - PAD_T - PAD_B;

  const xStep = chartW / (DATA.length - 1);

  const toY = (score: number) => PAD_T + chartH - (score / 100) * chartH;
  const toX = (i: number) => PAD_L + i * xStep;

  // Zone backgrounds
  const zones = [
    { min: 70, max: 100, color: "hsl(142, 60%, 45%)", opacity: 0.12 },
    { min: 50, max: 69, color: "hsl(45, 90%, 50%)", opacity: 0.12 },
    { min: 0, max: 49, color: "hsl(0, 70%, 55%)", opacity: 0.12 },
  ];

  // Dashed lines at 50 and 70
  const dashLines = [50, 70];

  const visibleCount = Math.floor(progress * DATA.length) + 1;
  const visibleData = DATA.slice(0, Math.min(visibleCount, DATA.length));

  const pathD = visibleData
    .map((d, i) => `${i === 0 ? "M" : "L"} ${toX(i)} ${toY(d.score)}`)
    .join(" ");

  return (
    <div className="w-full overflow-hidden rounded-2xl border bg-card shadow-xl">
      <svg
        ref={ref}
        viewBox={`0 0 ${W} ${H}`}
        className="w-full h-auto"
        preserveAspectRatio="xMidYMid meet"
      >
        {/* Zone backgrounds */}
        {zones.map((z) => (
          <rect
            key={z.min}
            x={PAD_L}
            y={toY(z.max)}
            width={chartW}
            height={toY(z.min) - toY(z.max)}
            fill={z.color}
            opacity={z.opacity}
          />
        ))}

        {/* Dashed threshold lines */}
        {dashLines.map((v) => (
          <line
            key={v}
            x1={PAD_L}
            y1={toY(v)}
            x2={PAD_L + chartW}
            y2={toY(v)}
            stroke="hsl(var(--muted-foreground))"
            strokeWidth="0.5"
            strokeDasharray="6 4"
            opacity={0.4}
          />
        ))}

        {/* Zone labels */}
        <text x={PAD_L + 6} y={toY(85)} fill="hsl(142, 60%, 45%)" fontSize="9" opacity={0.6} fontWeight="600">
          GREEN ZONE
        </text>
        <text x={PAD_L + 6} y={toY(60)} fill="hsl(45, 90%, 50%)" fontSize="9" opacity={0.6} fontWeight="600">
          YELLOW ZONE
        </text>
        <text x={PAD_L + 6} y={toY(25)} fill="hsl(0, 70%, 55%)" fontSize="9" opacity={0.6} fontWeight="600">
          RED ZONE
        </text>

        {/* Line */}
        <path
          d={pathD}
          fill="none"
          stroke="hsl(var(--foreground))"
          strokeWidth="2"
          strokeLinejoin="round"
          strokeLinecap="round"
        />

        {/* Dots */}
        {visibleData.map((d, i) => (
          <circle
            key={i}
            cx={toX(i)}
            cy={toY(d.score)}
            r={i === visibleData.length - 1 ? 5 : 3.5}
            fill={getZoneColor(d.score)}
            stroke="white"
            strokeWidth="1.5"
            style={{
              opacity: 1,
              filter: i === visibleData.length - 1 ? `drop-shadow(0 0 4px ${getZoneColor(d.score)})` : undefined,
            }}
          />
        ))}

        {/* X-axis labels */}
        {DATA.map((d, i) => (
          <text
            key={i}
            x={toX(i)}
            y={H - 8}
            textAnchor="middle"
            fill="hsl(var(--muted-foreground))"
            fontSize="8"
            opacity={i % 3 === 0 ? 0.7 : 0}
          >
            {d.date}
          </text>
        ))}
      </svg>
    </div>
  );
};
