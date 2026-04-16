interface WindowsLogoProps {
  accent: string;
  className?: string;
}

export default function WindowsLogo({ accent, className }: WindowsLogoProps) {
  return (
    <svg
      viewBox="0 0 64 64"
      className={className}
      role="img"
      aria-label="Windows"
    >
      <rect x="6" y="8" width="24" height="22" rx="2.5" fill={accent} opacity="0.95" />
      <rect x="34" y="8" width="24" height="22" rx="2.5" fill={accent} opacity="0.8" />
      <rect x="6" y="34" width="24" height="22" rx="2.5" fill={accent} opacity="0.85" />
      <rect x="34" y="34" width="24" height="22" rx="2.5" fill={accent} opacity="0.65" />
    </svg>
  );
}

