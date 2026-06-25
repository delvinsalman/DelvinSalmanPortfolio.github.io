interface AppIconProps {
  src: string;
  alt: string;
  className?: string;
}

export function AppIcon({ src, alt, className = "h-12 w-12" }: AppIconProps) {
  return (
    <div
      className={`relative shrink-0 overflow-hidden rounded-[22%] shadow-apple-sm ring-1 ring-black/8 dark:ring-white/10 ${className}`}
    >
      <img
        src={src}
        alt={alt}
        className="h-full w-full object-cover"
        draggable={false}
        loading="lazy"
      />
    </div>
  );
}
