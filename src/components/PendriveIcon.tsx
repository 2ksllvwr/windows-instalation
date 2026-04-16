interface PendriveIconProps {
  accent: string;
  className?: string;
}

export default function PendriveIcon({ accent, className }: PendriveIconProps) {
  return (
    <svg viewBox="0 0 64 64" className={className} role="img" aria-label="Pendrive">
      <rect x="6" y="6" width="52" height="52" rx="12" fill="#ffffff" />
      <rect
        x="6"
        y="6"
        width="52"
        height="52"
        rx="12"
        fill="none"
        stroke={accent}
        strokeWidth="4"
      />

      {/* Simple USB stick glyph */}
      <g fill="#111827">
        <path d="M29 18h6c1.7 0 3 1.3 3 3v10c0 1.7-1.3 3-3 3h-6c-1.7 0-3-1.3-3-3V21c0-1.7 1.3-3 3-3z" />
        <path d="M25 26h14v4H25z" />
        <path d="M30 36h4v10c0 2.2-1.8 4-4 4s-4-1.8-4-4v-1h4v1c0 .6.4 1 1 1s1-.4 1-1V36z" />
        <rect x="28" y="20" width="3" height="4" rx="1" fill="#ffffff" opacity="0.85" />
        <rect x="33" y="20" width="3" height="4" rx="1" fill="#ffffff" opacity="0.85" />
      </g>
    </svg>
  );
}

