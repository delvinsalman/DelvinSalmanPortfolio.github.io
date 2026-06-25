import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LayoutGrid } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { projects, categoryLabels } from "../data/projects";
import { useNavigation, type ProjectsFilter } from "../context/NavigationContext";
import { ProjectIcon } from "./ProjectIcon";
import { projectCategoryIcons } from "../utils/projectCategoryIcons";
import type { Project } from "../data/projects";

type Filter = ProjectsFilter;

function shuffleProjects<T>(items: T[]): T[] {
  const next = [...items];
  for (let i = next.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [next[i], next[j]] = [next[j], next[i]];
  }
  return next;
}

const filterOptions: {
  id: Filter;
  label: string;
  icon?: LucideIcon;
}[] = [
  { id: "all", label: "All Projects", icon: LayoutGrid },
  { id: "game-dev", label: categoryLabels["game-dev"], icon: projectCategoryIcons["game-dev"] },
  { id: "software-ai", label: categoryLabels["software-ai"], icon: projectCategoryIcons["software-ai"] },
  { id: "web", label: categoryLabels.web, icon: projectCategoryIcons.web },
  { id: "creative-data", label: categoryLabels["creative-data"], icon: projectCategoryIcons["creative-data"] },
] satisfies { id: Filter; label: string; icon?: LucideIcon }[];

export function Projects() {
  const { openProject, projectsFilter: filter, setProjectsFilter: setFilter } =
    useNavigation();
  const [allProjectsOrder, setAllProjectsOrder] = useState<Project[]>(projects);

  useEffect(() => {
    if (filter === "all") {
      setAllProjectsOrder(shuffleProjects(projects));
    }
  }, [filter]);

  const filtered =
    filter === "all"
      ? allProjectsOrder
      : projects.filter((p) => p.category === filter);

  const activeLabel =
    filterOptions.find((option) => option.id === filter)?.label ?? "All Projects";

  return (
    <section className="pl-8 pr-6 pb-16 pt-6 md:pl-11 md:pr-8 md:pb-20 md:pt-10">
      <div className="mx-auto w-full max-w-6xl">
        <div className="pt-2">
          <p className="text-sm font-medium tracking-wide text-apple-secondary uppercase">
            Projects
          </p>
          <h2
            className="mt-2 text-2xl font-semibold tracking-tight text-apple-text md:text-3xl"
            style={{ letterSpacing: "-0.03em" }}
          >
            Project Archives
          </h2>
          <p className="mt-1 text-sm text-apple-secondary">
            A curated list of my professional work, open-source contributions,
            and side projects.
          </p>

          <div className="mt-5 flex flex-wrap items-center justify-between gap-4 overflow-visible rounded-2xl border border-apple-divider bg-transparent px-4 py-2.5 md:px-5 md:py-3">
            <div className="flex items-center gap-3 text-base">
              <span className="font-semibold text-apple-text">
                {projects.length} total
              </span>
              <div className="h-4 w-px bg-apple-divider" aria-hidden />
              <span className="rounded-lg border border-apple-divider px-3 py-1 text-sm font-medium text-apple-text">
                {filtered.length} {filter === "all" ? "Shown" : activeLabel}
              </span>
            </div>

            <div className="flex max-w-full flex-wrap justify-end overflow-visible rounded-xl border border-apple-divider p-0.5">
              {filterOptions.map((option) => {
                const isActive = filter === option.id;
                const Icon = option.icon;

                return (
                  <button
                    key={option.id}
                    type="button"
                    onClick={() => setFilter(option.id)}
                    aria-label={option.label}
                    className={`group relative flex items-center justify-center rounded-lg transition-colors ${
                      option.id === "all"
                        ? `px-4 py-1.5 text-sm font-medium md:px-5 md:py-2 ${
                            isActive
                              ? "text-apple-text"
                              : "text-apple-secondary hover:text-apple-text"
                          }`
                        : `h-9 w-9 ${
                            isActive
                              ? "text-apple-text"
                              : "text-apple-secondary hover:text-apple-text"
                          }`
                    }`}
                  >
                    {option.id !== "all" && (
                      <span
                        role="tooltip"
                        className="pointer-events-none absolute bottom-[calc(100%+8px)] left-1/2 z-30 -translate-x-1/2 whitespace-nowrap rounded-lg border border-apple-divider bg-apple-bg px-2.5 py-1 text-xs font-medium text-apple-text opacity-0 shadow-apple-sm transition-all duration-200 group-hover:translate-y-0 group-hover:opacity-100 dark:bg-apple-surface translate-y-1"
                      >
                        {option.label}
                        <span
                          className="absolute left-1/2 top-full -translate-x-1/2 border-[5px] border-transparent border-t-apple-divider"
                          aria-hidden
                        />
                        <span
                          className="absolute left-1/2 top-full -translate-x-1/2 -mt-px border-[4px] border-transparent border-t-apple-bg dark:border-t-apple-surface"
                          aria-hidden
                        />
                      </span>
                    )}
                    {isActive && (
                      <motion.span
                        layoutId="filter-pill"
                        className="absolute inset-0 rounded-lg border border-apple-divider bg-apple-bg/40 dark:bg-white/5"
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10">
                      {option.id === "all" ? (
                        <span className="whitespace-nowrap">{option.label}</span>
                      ) : (
                        Icon && <Icon className="h-4 w-4" strokeWidth={1.75} />
                      )}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, index) => (
              <motion.button
                key={project.id}
                layout
                type="button"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                onClick={() => openProject(project.id)}
                className="group relative flex w-full border-b border-apple-divider py-5 pl-3 text-left outline-none last:border-b-0 focus-visible:ring-2 focus-visible:ring-apple-blue/25 md:py-6 md:pl-5"
              >
                <span
                  aria-hidden
                  className="pointer-events-none absolute inset-x-1 inset-y-0 rounded-none bg-apple-muted opacity-0 shadow-none transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:opacity-100 group-hover:shadow-apple-sm group-focus-visible:opacity-100 group-focus-visible:shadow-apple-sm dark:group-hover:bg-white/[0.07] dark:group-focus-visible:bg-white/[0.07]"
                />
                <span className="relative z-10 flex w-full items-center gap-4">
                  <ProjectIcon project={project} className="h-[52px] w-[52px] shrink-0" />

                  <div className="min-w-0 flex-1">
                    <h3 className="text-sm font-semibold tracking-tight text-apple-text transition-colors duration-300 group-hover:text-apple-text md:text-base">
                      {index + 1}. {project.name}
                    </h3>
                    <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-apple-secondary transition-colors duration-300 group-hover:text-apple-text/80 md:text-sm">
                      {project.description}
                    </p>
                    <div className="mt-2 flex flex-wrap gap-1.5">
                      {project.tech.slice(0, 3).map((t) => (
                        <span
                          key={t}
                          className="rounded-lg border border-apple-divider bg-transparent px-3 py-1 text-xs font-medium text-apple-text"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </span>
              </motion.button>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
