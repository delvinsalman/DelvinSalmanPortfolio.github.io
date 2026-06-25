import { createContext, useContext, useState, useCallback, type ReactNode } from "react";
import type { ProjectCategory } from "../data/projects";

export type Section = "home" | "about" | "skills" | "projects";
export type ProjectsFilter = "all" | ProjectCategory;

type NavigationContextValue = {
  section: Section;
  projectId: string | null;
  projectsFilter: ProjectsFilter;
  setProjectsFilter: (filter: ProjectsFilter) => void;
  navigate: (section: Section) => void;
  openProject: (id: string) => void;
  closeProject: () => void;
};

const NavigationContext = createContext<NavigationContextValue | null>(null);

export function NavigationProvider({ children }: { children: ReactNode }) {
  const [section, setSection] = useState<Section>("home");
  const [projectId, setProjectId] = useState<string | null>(null);
  const [projectsFilter, setProjectsFilter] = useState<ProjectsFilter>("all");

  const navigate = useCallback((next: Section) => {
    setProjectId(null);
    if (next !== "projects") {
      setProjectsFilter("all");
    }
    setSection(next);
  }, []);

  const openProject = useCallback((id: string) => {
    setSection("projects");
    setProjectId(id);
  }, []);

  const closeProject = useCallback(() => {
    setProjectId(null);
  }, []);

  return (
    <NavigationContext.Provider
      value={{
        section,
        projectId,
        projectsFilter,
        setProjectsFilter,
        navigate,
        openProject,
        closeProject,
      }}
    >
      {children}
    </NavigationContext.Provider>
  );
}

export function useNavigation() {
  const ctx = useContext(NavigationContext);
  if (!ctx) throw new Error("useNavigation must be used within NavigationProvider");
  return ctx;
}
