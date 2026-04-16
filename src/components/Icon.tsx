import PendriveIcon from "./PendriveIcon";
import WindowsLogo from "./WindowsLogo";

interface IconProps {
  icon: string;
  accent: string;
  className?: string;
  label?: string;
}

export default function Icon({ icon, accent, className, label }: IconProps) {
  if (icon === "PENDRIVE") return <PendriveIcon accent={accent} className={className} />;
  if (icon === "🪟") return <WindowsLogo accent={accent} className={className} />;

  return (
    <span className={className} aria-label={label}>
      {icon}
    </span>
  );
}

