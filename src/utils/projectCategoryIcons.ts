import { BrainCircuit, Gamepad2, Globe, Palette } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { ProjectCategory } from "../data/projects";

export const projectCategoryIcons: Record<ProjectCategory, LucideIcon> = {
  "game-dev": Gamepad2,
  "software-ai": BrainCircuit,
  web: Globe,
  "creative-data": Palette,
};
