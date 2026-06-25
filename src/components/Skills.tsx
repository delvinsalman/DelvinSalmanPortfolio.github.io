import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Code2,
  Gamepad2,
  LayoutGrid,
  Palette,
  Wrench,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { skills, skillProficiency } from "../data/profile";
import { SkillIcon } from "./SkillIcon";

type SkillFilter = "all" | (typeof skills)[number]["id"];

const filterOptions: {
  id: SkillFilter;
  label: string;
  icon?: LucideIcon;
}[] = [
  { id: "all", label: "All Skills", icon: LayoutGrid },
  { id: "languages", label: "Languages & Frameworks", icon: Code2 },
  { id: "game-dev", label: "Game Development", icon: Gamepad2 },
  { id: "software", label: "Software & Technical Tools", icon: Wrench },
  { id: "creative", label: "Creative & Design Tools", icon: Palette },
];

const categoryIcons: Record<string, LucideIcon> = {
  languages: Code2,
  "game-dev": Gamepad2,
  software: Wrench,
  creative: Palette,
};

const totalSkills = skills.reduce((sum, group) => sum + group.items.length, 0);

export function Skills() {
  const [filter, setFilter] = useState<SkillFilter>("all");

  const filtered =
    filter === "all" ? skills : skills.filter((group) => group.id === filter);

  const shownCount =
    filter === "all"
      ? totalSkills
      : skills.find((group) => group.id === filter)?.items.length ?? 0;

  const activeLabel =
    filterOptions.find((option) => option.id === filter)?.label ?? "All Skills";

  return (
    <section className="pl-8 pr-6 pb-16 pt-6 md:pl-11 md:pr-8 md:pb-20 md:pt-10">
      <div className="mx-auto w-full max-w-6xl">
        <div className="pt-2">
          <p className="text-sm font-medium tracking-wide text-apple-secondary uppercase">
            Skills
          </p>
          <h2
            className="mt-2 text-2xl font-semibold tracking-tight text-apple-text md:text-3xl"
            style={{ letterSpacing: "-0.03em" }}
          >
            Tools I work with.
          </h2>
          <p className="mt-1 text-sm text-apple-secondary">
            A focused toolkit for building projects that are fast, accessible,
            and engineered.
          </p>

          <div className="mt-5 flex flex-wrap items-center justify-between gap-4 overflow-visible rounded-2xl border border-apple-divider bg-transparent px-4 py-2.5 md:px-5 md:py-3">
            <div className="flex items-center gap-3 text-base">
              <span className="font-semibold text-apple-text">
                {totalSkills} total
              </span>
              <div className="h-4 w-px bg-apple-divider" aria-hidden />
              <span className="rounded-lg border border-apple-divider px-3 py-1 text-sm font-medium text-apple-text">
                {shownCount} {filter === "all" ? "Shown" : activeLabel}
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
                        layoutId="skills-filter-pill"
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
            {filter === "all"
              ? filtered.map((group, index) => {
                  const Icon = categoryIcons[group.id] ?? Code2;
                  return (
                    <motion.div
                      key={group.id}
                      layout
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="flex w-full items-start gap-4 border-b border-apple-divider py-5 pl-3 md:py-6 md:pl-5"
                    >
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-apple-divider bg-transparent">
                        <Icon className="h-5 w-5 text-apple-text" strokeWidth={1.75} />
                      </div>
                      <div className="min-w-0 flex-1">
                        <h3 className="text-sm font-semibold tracking-tight text-apple-text md:text-base">
                          {index + 1}. {group.category}
                        </h3>
                        <p className="mt-1 text-xs text-apple-secondary md:text-sm">
                          {group.items.length} tools
                        </p>
                        <div className="mt-3 flex flex-wrap gap-1.5">
                          {group.items.map((skill) => (
                            <span
                              key={skill}
                              className="rounded-lg border border-apple-divider bg-transparent px-3 py-1 text-xs font-medium text-apple-text"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  );
                })
              : filtered.flatMap((group) =>
                  group.items.map((skill, index) => (
                    <motion.div
                      key={skill}
                      layout
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="flex w-full items-center gap-4 border-b border-apple-divider py-5 pl-3 md:py-6 md:pl-5"
                    >
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-apple-divider bg-transparent">
                        <SkillIcon name={skill} size="md" />
                      </div>
                      <div className="flex min-w-0 flex-1 items-center justify-between gap-4">
                        <div className="min-w-0">
                          <h3 className="text-sm font-semibold tracking-tight text-apple-text md:text-base">
                            {index + 1}. {skill}
                          </h3>
                          <p className="mt-1 text-xs text-apple-secondary md:text-sm">
                            {group.category}
                          </p>
                        </div>
                        {skillProficiency[skill] && (
                          <motion.span
                            initial={{ opacity: 0, x: 8 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.35, delay: 0.06 + index * 0.03 }}
                            className="shrink-0 text-[11px] font-medium tracking-wide text-apple-tertiary md:text-xs"
                          >
                            {skillProficiency[skill]}
                          </motion.span>
                        )}
                      </div>
                    </motion.div>
                  )),
                )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
