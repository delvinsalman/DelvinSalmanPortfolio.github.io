import type { Project } from "../data/projects";
import { AppIcon } from "./AppIcon";
import { projectCategoryIcons } from "../utils/projectCategoryIcons";
import { projectCustomIcons } from "../utils/projectCustomIcons";

interface ProjectIconProps {
  project: Pick<Project, "id" | "name" | "appIcon" | "category">;
  className?: string;
  variant?: "tile" | "plain";
}

export function ProjectIcon({
  project,
  className = "h-12 w-12",
  variant = "tile",
}: ProjectIconProps) {
  if (project.appIcon) {
    return <AppIcon src={project.appIcon} alt={project.name} className={className} />;
  }

  const CustomIcon = projectCustomIcons[project.id];
  const CategoryIcon = projectCategoryIcons[project.category];
  const isSmall = /\bh-8\b/.test(className);

  const iconSize = isSmall ? "h-4 w-4" : "h-[22px] w-[22px]";
  const plainIconSize = isSmall ? "h-5 w-5" : "h-8 w-8";

  // Custom icons are solid (filled) glyphs, so pure black reads too heavy in
  // light mode — use a soft near-black there while keeping full strength in dark mode.
  const customIconColor = "text-[#2c2c2e] dark:text-apple-text";

  if (CustomIcon) {
    if (variant === "plain") {
      return (
        <div className={`flex shrink-0 items-center justify-center ${className}`}>
          <CustomIcon className={`${plainIconSize} ${customIconColor}`} />
        </div>
      );
    }

    return (
      <div
        className={`flex shrink-0 items-center justify-center rounded-xl border border-apple-divider bg-transparent transition-all duration-300 ease-out group-hover:border-apple-text/20 group-hover:bg-apple-muted/35 group-hover:shadow-apple-sm ${className}`}
      >
        <CustomIcon
          className={`${iconSize} ${customIconColor} transition-transform duration-300 ease-out group-hover:scale-105`}
        />
      </div>
    );
  }

  if (variant === "plain") {
    return (
      <div className={`flex shrink-0 items-center justify-center ${className}`}>
        <CategoryIcon
          className={`${plainIconSize} text-apple-text`}
          strokeWidth={1.75}
        />
      </div>
    );
  }

  return (
    <div
      className={`flex shrink-0 items-center justify-center rounded-xl border border-apple-divider bg-transparent transition-all duration-300 ease-out group-hover:border-apple-text/20 group-hover:bg-apple-muted/35 group-hover:shadow-apple-sm ${className}`}
    >
      <CategoryIcon
        className={`${iconSize} text-apple-text transition-transform duration-300 ease-out group-hover:scale-105`}
        strokeWidth={1.75}
      />
    </div>
  );
}
