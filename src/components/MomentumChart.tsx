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

// Find the x-position where the line crosses a given score threshold
const findCrossX = (
  data: typeof DATA,
  threshold: number,
  toX: (i: number) => number,
  direction: "up" | "down"
) => {
  for (let i = 1; i < data.length; i++) {
    const prev = data[i - 1].score;
    const curr = data[i].score;
    if (direction === "up" && prev < threshold && curr >= threshold) {
      const t = (threshold - prev) / (curr - prev);
      return toX(i - 1) + t * (toX(i) - toX(i - 1));
    }
    if (direction === "down" && prev >= threshold && curr < threshold) {
      const t = (threshold - prev) / (curr - prev);
      return toX(i - 1) + t * (toX(i) - toX(i - 1));
    }
  }
  return null;
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

  const W = 860;
  const H = 300;
  const PAD_L = 40;
  const PAD_R = 15;
  const PAD_T = 15;
  const PAD_B = 40;
  const chartW = W - PAD_L - PAD_R;
  const chartH = H - PAD_T - PAD_B;

  const xStep = chartW / (DATA.length - 1);

  const toY = (score: number) => PAD_T + chartH - (score / 100) * chartH;
  const toX = (i: number) => PAD_L + i * xStep;

  // Compute vertical zone boundaries based on where score crosses 50 and 70
  const cross50Up = findCrossX(DATA, 50, toX, "up");
  const cross70Up = findCrossX(DATA, 70, toX, "up");

  const chartLeft = PAD_L;
  const chartRight = PAD_L + chartW;
  const chartTop = PAD_T;
  const chartBottom = PAD_T + chartH;

  // Build vertical zone rects
  const verticalZones: { x: number; w: number; color: string; opacity: number }[] = [];

  // Red zone: from start to where score crosses 50
  const redEnd = cross50Up ?? chartRight;
  verticalZones.push({
    x: chartLeft,
    w: redEnd - chartLeft,
    color: "hsl(0, 70%, 55%)",
    opacity: 0.12,
  });

  if (cross50Up != null) {
    const yellowEnd = cross70Up ?? chartRight;
    verticalZones.push({
      x: cross50Up,
      w: yellowEnd - cross50Up,
      color: "hsl(45, 90%, 50%)",
      opacity: 0.12,
    });

    if (cross70Up != null) {
      verticalZones.push({
        x: cross70Up,
        w: chartRight - cross70Up,
        color: "hsl(142, 60%, 45%)",
        opacity: 0.12,
      });
    }
  }

  // Dashed lines at 50 and 70
  const dashLines = [50, 70];

  // Y-axis labels
  const yLabels = [0, 20, 40, 50, 60, 70, 80, 100];

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
        {/* Vertical zone backgrounds */}
        {verticalZones.map((z, i) => (
          <rect
            key={i}
            x={z.x}
            y={chartTop}
            width={z.w}
            height={chartH}
            fill={z.color}
            opacity={z.opacity}
          />
        ))}

        {/* Dashed threshold lines */}
        {dashLines.map((v) => (
          <line
            key={v}
            x1={chartLeft}
            y1={toY(v)}
            x2={chartRight}
            y2={toY(v)}
            stroke="hsl(var(--muted-foreground))"
            strokeWidth="0.5"
            strokeDasharray="6 4"
            opacity={0.3}
          />
        ))}

        {/* Y-axis labels */}
        {yLabels.map((v) => (
          <text
            key={v}
            x={PAD_L - 6}
            y={toY(v) + 3}
            textAnchor="end"
            fill="hsl(var(--muted-foreground))"
            fontSize="9"
            opacity={0.6}
          >
            {v}
          </text>
        ))}

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
