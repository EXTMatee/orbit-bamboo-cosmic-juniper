import { useId } from "react";
import { cn } from "@/lib/utils";

function Roll({
  cx,
  cy,
  r,
  reverse,
  fast,
}: {
  cx: number;
  cy: number;
  r: number;
  reverse?: boolean;
  fast?: boolean;
}) {
  return (
    <g
      className={cn("roll-spin", reverse && "roll-spin-rev", fast && "roll-spin-fast")}
    >
      <circle cx={cx} cy={cy} r={r} fill="#2a3036" stroke="#c5ccd3" strokeWidth="1.4" />
      <circle cx={cx} cy={cy} r={r * 0.62} fill="none" stroke="#6d757e" strokeWidth="1" />
      <circle cx={cx} cy={cy} r={r * 0.18} fill="#0c0e11" stroke="#aeb6be" strokeWidth="1" />
      {Array.from({ length: 8 }).map((_, i) => {
        const a = (i * Math.PI) / 4;
        return (
          <line
            key={i}
            x1={cx + Math.cos(a) * r * 0.22}
            y1={cy + Math.sin(a) * r * 0.22}
            x2={cx + Math.cos(a) * r * 0.9}
            y2={cy + Math.sin(a) * r * 0.9}
            stroke="#8b939c"
            strokeWidth="1.1"
          />
        );
      })}
    </g>
  );
}

export function HeroMill({ className }: { className?: string }) {
  const id = useId();
  return (
    <svg
      viewBox="0 0 760 300"
      className={cn("h-auto w-full overflow-hidden", className)}
      role="img"
      aria-label="Két munkahenger között áthaladó izzó lemez sematikus ábrája"
    >
      <defs>
        <linearGradient id={`${id}-slab`} x1="0" x2="1">
          <stop offset="0" stopColor="#6a2410" />
          <stop offset="0.5" stopColor="#f0a45c" />
          <stop offset="1" stopColor="#6a2410" />
        </linearGradient>
        <linearGradient id={`${id}-frame`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#3a4148" />
          <stop offset="1" stopColor="#161a1f" />
        </linearGradient>
        <filter id={`${id}-glow`} x="-30%" y="-80%" width="160%" height="260%">
          <feGaussianBlur stdDeviation="6" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <rect x="70" y="18" width="44" height="264" rx="4" fill={`url(#${id}-frame)`} />
      <rect x="646" y="18" width="44" height="264" rx="4" fill={`url(#${id}-frame)`} />
      <rect x="70" y="18" width="620" height="14" rx="2" fill="#4a525b" />
      <rect x="70" y="268" width="620" height="14" rx="2" fill="#4a525b" />

      <Roll cx={380} cy={78} r={52} reverse />
      <Roll cx={380} cy={222} r={52} />

      <g filter={`url(#${id}-glow)`} className="slab-pass">
        <rect x="120" y="138" width="520" height="24" rx="3" fill={`url(#${id}-slab)`} />
        <rect
          x="120"
          y="146"
          width="520"
          height="6"
          fill="white"
          opacity="0.28"
          className="heat-pulse"
        />
      </g>

      <text x="380" y="24" textAnchor="middle" fill="#c5ccd3" fontSize="11" letterSpacing="2.4">
        MUNKAHENGEREK · SZÚRÁS
      </text>
    </svg>
  );
}

export function MillTypeDiagram({ type }: { type: "duo" | "trio" | "quarto" | "cluster" }) {
  if (type === "duo") {
    return (
      <svg viewBox="0 0 280 260" className="h-auto w-full" aria-hidden>
        <rect x="18" y="20" width="20" height="220" rx="3" fill="#2c333a" />
        <rect x="242" y="20" width="20" height="220" rx="3" fill="#2c333a" />
        <Roll cx={140} cy={78} r={46} reverse fast />
        <rect x="54" y="122" width="172" height="16" rx="2" fill="#c45a2a" />
        <Roll cx={140} cy={182} r={46} fast />
      </svg>
    );
  }

  if (type === "trio") {
    return (
      <svg viewBox="0 0 280 260" className="h-auto w-full" aria-hidden>
        <rect x="18" y="12" width="20" height="236" rx="3" fill="#2c333a" />
        <rect x="242" y="12" width="20" height="236" rx="3" fill="#2c333a" />
        <Roll cx={140} cy={48} r={32} reverse />
        <rect x="70" y="82" width="140" height="12" rx="2" fill="#c45a2a" />
        <Roll cx={140} cy={130} r={28} fast />
        <rect x="70" y="166" width="140" height="12" rx="2" fill="#c45a2a" opacity="0.55" />
        <Roll cx={140} cy={210} r={32} />
      </svg>
    );
  }

  if (type === "quarto") {
    return (
      <svg viewBox="0 0 280 280" className="h-auto w-full" aria-hidden>
        <rect x="14" y="10" width="22" height="260" rx="3" fill="#2c333a" />
        <rect x="244" y="10" width="22" height="260" rx="3" fill="#2c333a" />
        <Roll cx={140} cy={52} r={38} reverse />
        <Roll cx={140} cy={112} r={22} reverse fast />
        <rect x="62" y="132" width="156" height="14" rx="2" fill="#c45a2a" />
        <Roll cx={140} cy={168} r={22} fast />
        <Roll cx={140} cy={228} r={38} />
      </svg>
    );
  }

  const satellites = Array.from({ length: 8 }).map((_, i) => {
    const a = (i * Math.PI) / 4 + Math.PI / 8;
    return { cx: 140 + Math.cos(a) * 78, cy: 130 + Math.sin(a) * 86 };
  });

  return (
    <svg viewBox="0 0 280 260" className="h-auto w-full" aria-hidden>
      {satellites.map((s, i) => (
        <circle key={i} cx={s.cx} cy={s.cy} r={16} fill="#3a424a" stroke="#8b939c" strokeWidth="1" />
      ))}
      <Roll cx={140} cy={104} r={18} reverse fast />
      <rect x="88" y="122" width="104" height="10" rx="2" fill="#c45a2a" />
      <Roll cx={140} cy={154} r={18} fast />
    </svg>
  );
}

export function MannesmannDiagram({ className }: { className?: string }) {
  const id = useId();
  return (
    <svg
      viewBox="0 0 560 260"
      className={cn("h-auto w-full", className)}
      role="img"
      aria-label="Mannesmann-féle ferdehengerlés: két ferde henger, izzó buga és lyukasztódugó"
    >
      <defs>
        <linearGradient id={`${id}-hot`} x1="0" x2="1">
          <stop offset="0" stopColor="#5a1e0c" />
          <stop offset="0.5" stopColor="#e08940" />
          <stop offset="1" stopColor="#5a1e0c" />
        </linearGradient>
      </defs>
      <text x="280" y="22" textAnchor="middle" fill="#8c929b" fontSize="11" letterSpacing="2">
        FERDEHENGERLÉS · LYUKASZTÁS
      </text>
      <g transform="rotate(-18 200 130)">
        <Roll cx={200} cy={78} r={48} reverse fast />
      </g>
      <g transform="rotate(18 200 130)">
        <Roll cx={200} cy={182} r={48} fast />
      </g>
      <ellipse cx="118" cy="130" rx="70" ry="28" fill={`url(#${id}-hot)`} />
      <ellipse cx="300" cy="130" rx="86" ry="22" fill={`url(#${id}-hot)`} />
      <ellipse cx="300" cy="130" rx="48" ry="10" fill="#1a0d08" opacity="0.55" />
      <polygon points="348,130 430,118 430,142" fill="#c5ccd3" />
      <rect x="428" y="124" width="92" height="12" rx="2" fill="#9aa3ad" />
      <text x="118" y="178" textAnchor="middle" fill="#ece8e1" fontSize="11">
        buga
      </text>
      <text x="300" y="172" textAnchor="middle" fill="#ece8e1" fontSize="11">
        hüvely
      </text>
      <text x="455" y="158" textAnchor="middle" fill="#ece8e1" fontSize="11">
        dugó
      </text>
    </svg>
  );
}

export function WeldedDiagram({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 560 200"
      className={cn("h-auto w-full", className)}
      role="img"
      aria-label="Varratos csőgyártás: szalag fokozatos hajlítása, majd hegesztés"
    >
      <text x="280" y="22" textAnchor="middle" fill="#8c929b" fontSize="11" letterSpacing="2">
        SZALAG → CSŐSZELVÉNY → VARRAT
      </text>
      <rect x="24" y="92" width="110" height="10" fill="#9aa3ad" />
      <path d="M150 97 C 190 97 190 70 230 70 S 270 97 300 97" fill="none" stroke="#9aa3ad" strokeWidth="10" />
      <path d="M300 97 C 340 97 350 60 380 72" fill="none" stroke="#9aa3ad" strokeWidth="8" />
      <circle cx="430" cy="97" r="28" fill="none" stroke="#9aa3ad" strokeWidth="8" />
      <line x1="430" y1="69" x2="430" y2="78" stroke="#c45a2a" strokeWidth="3" />
      <circle cx="510" cy="97" r="28" fill="none" stroke="#c5ccd3" strokeWidth="8" />
      <text x="78" y="128" textAnchor="middle" fill="#ece8e1" fontSize="11">
        szalag
      </text>
      <text x="230" y="150" textAnchor="middle" fill="#ece8e1" fontSize="11">
        hajlítás
      </text>
      <text x="430" y="150" textAnchor="middle" fill="#ece8e1" fontSize="11">
        hegesztés
      </text>
      <text x="510" y="150" textAnchor="middle" fill="#ece8e1" fontSize="11">
        cső
      </text>
    </svg>
  );
}

export function FormulaBar() {
  return (
    <div className="grid gap-3 sm:grid-cols-3">
      {[
        { k: "Térfogat-állandóság", v: "h₁·b₁·l₁ = h₂·b₂·l₂" },
        { k: "Nyújtási tényező", v: "λ = A₁ / A₂ = l₂ / l₁" },
        { k: "Nyomott ív vetülete", v: "lₐ ≈ √(R · Δh)" },
      ].map((item) => (
        <div key={item.k} className="metal-panel rounded-xl px-4 py-4">
          <p className="font-display text-xs tracking-[0.18em] text-muted uppercase">{item.k}</p>
          <p className="mt-2 font-display text-xl tracking-wide text-foreground">{item.v}</p>
        </div>
      ))}
    </div>
  );
}
