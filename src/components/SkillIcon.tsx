import {
  getSkillCustomIcon,
  getSkillDeviconClass,
  getSkillThemedDevicon,
} from "../utils/skillIcons";

type SkillIconSize = "sm" | "md" | "lg";

const sizeClasses: Record<SkillIconSize, string> = {
  sm: "text-base",
  md: "text-[1.75rem]",
  lg: "text-[2rem]",
};

const imageSizeClasses: Record<SkillIconSize, string> = {
  sm: "h-4 w-4",
  md: "h-7 w-7",
  lg: "h-8 w-8",
};

interface SkillIconProps {
  name: string;
  size?: SkillIconSize;
  className?: string;
}

export function SkillIcon({ name, size = "md", className = "" }: SkillIconProps) {
  const customIcon = getSkillCustomIcon(name);

  if (customIcon) {
    return (
      <img
        src={customIcon}
        alt=""
        className={`${imageSizeClasses[size]} object-contain ${className}`}
        draggable={false}
        title={name}
      />
    );
  }

  const themedDevicon = getSkillThemedDevicon(name);

  if (themedDevicon) {
    return (
      <i
        className={`${themedDevicon} ${sizeClasses[size]} leading-none ${className}`}
        aria-hidden
        title={name}
      />
    );
  }

  const devicon = getSkillDeviconClass(name);

  if (devicon) {
    return (
      <i
        className={`${devicon} ${sizeClasses[size]} leading-none ${className}`}
        aria-hidden
        title={name}
      />
    );
  }

  return (
    <span
      className={`inline-flex items-center justify-center font-semibold text-apple-secondary ${size === "sm" ? "text-[10px]" : size === "md" ? "text-xs" : "text-sm"} ${className}`}
      aria-hidden
      title={name}
    >
      {name.slice(0, 2).toUpperCase()}
    </span>
  );
}
