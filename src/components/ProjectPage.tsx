import { useState, useEffect, useRef, useLayoutEffect, useCallback } from "react";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  Globe,
} from "lucide-react";
import { projects, getProjectOpenSourceLabel } from "../data/projects";
import { useNavigation } from "../context/NavigationContext";
import { IconGithub } from "./SocialIcons";
import { resolveProjectImageSrc, resolveProjectLink } from "../utils/projectAssets";
import { ScreenshotLightbox } from "./ScreenshotLightbox";
import type { Project } from "../data/projects";

type Tab = "overview" | "process";

const SCREENSHOTS_PER_VIEW = 3;
const SCREENSHOT_GAP_PX = 8;

export function ProjectPage() {
  const { projectId, closeProject } = useNavigation();
  const [tab, setTab] = useState<Tab>("overview");
  const [slide, setSlide] = useState(0);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const tabsContainerRef = useRef<HTMLDivElement>(null);
  const tabButtonRefs = useRef<Partial<Record<Tab, HTMLButtonElement>>>({});
  const [indicator, setIndicator] = useState({ left: 0, width: 0 });
  const [indicatorReady, setIndicatorReady] = useState(false);

  const updateIndicator = useCallback(() => {
    const container = tabsContainerRef.current;
    const button = tabButtonRefs.current[tab];
    if (!container || !button) return;

    const containerRect = container.getBoundingClientRect();
    const buttonRect = button.getBoundingClientRect();
    setIndicator({
      left: buttonRect.left - containerRect.left,
      width: buttonRect.width,
    });
    setIndicatorReady(true);
  }, [tab]);

  useLayoutEffect(() => {
    updateIndicator();
  }, [updateIndicator, projectId]);

  useEffect(() => {
    const container = tabsContainerRef.current;
    if (!container) return;

    const resizeObserver = new ResizeObserver(() => {
      updateIndicator();
    });
    resizeObserver.observe(container);

    window.addEventListener("resize", updateIndicator);
    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", updateIndicator);
    };
  }, [updateIndicator]);

  useEffect(() => {
    setSlide(0);
    setTab("overview");
    setLightboxIndex(null);
    setIndicatorReady(false);
  }, [projectId]);

  const project = projects.find((p) => p.id === projectId);
  if (!project) return null;

  const screenshots = project.screenshots.map((src) =>
    resolveProjectImageSrc(project.id, src),
  );
  const gapsInView = SCREENSHOTS_PER_VIEW - 1;
  const screenshotItemWidth = `calc((100% - ${gapsInView * SCREENSHOT_GAP_PX}px) / ${SCREENSHOTS_PER_VIEW})`;
  const screenshotSlideStep = `calc((100% - ${gapsInView * SCREENSHOT_GAP_PX}px) / ${SCREENSHOTS_PER_VIEW} + ${SCREENSHOT_GAP_PX}px)`;
  const maxSlide = Math.max(0, screenshots.length - SCREENSHOTS_PER_VIEW);
  const canScroll = screenshots.length > SCREENSHOTS_PER_VIEW;

  const tabs: { id: Tab; label: string }[] = [
    { id: "overview", label: "Overview" },
    { id: "process", label: "Process" },
  ];

  const longDescriptionParagraphs = project.longDescription.split('\n\n').filter(p => p.trim());

  return (
    <motion.div
      key={project.id}
      initial={{ opacity: 0, x: 24 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -24 }}
      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      onAnimationComplete={updateIndicator}
      className="project-page flex h-full flex-col overflow-hidden bg-apple-bg"
    >
      {/* Header */}
      <div className="shrink-0 border-b border-apple-divider px-6 py-5 pt-6 md:px-8 md:pt-8">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div className="min-w-0 flex-1 pl-2 md:pl-3">
            <h1 className="text-xl font-semibold tracking-tight text-apple-text md:text-2xl">
              {project.name}
            </h1>
            <p className="mt-1 line-clamp-2 max-w-lg text-sm leading-relaxed text-apple-secondary">
              {project.description}
            </p>
          </div>
          <div className="flex shrink-0 items-center gap-2 sm:pt-1">
            <button
              type="button"
              onClick={closeProject}
              className="flex items-center gap-1.5 rounded-xl border border-apple-border px-4 py-2.5 text-sm font-medium text-apple-text transition-colors hover:bg-apple-muted"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              Back
            </button>
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="min-h-0 flex-1 overflow-y-auto px-6 py-6 pb-16 md:px-8 md:pb-24">
        <div className="mx-auto max-w-6xl rounded-2xl border border-apple-border p-6 md:p-8">
          <div className="space-y-6">
            <div className="w-full">
              <div className="relative">
                <div className="overflow-hidden rounded-xl">
                  <div
                    className="flex gap-2 transition-transform duration-500 ease-out"
                    style={{
                      transform: `translateX(calc(-${slide} * (${screenshotSlideStep})))`,
                    }}
                  >
                    {screenshots.map((src, i) => (
                      <button
                        key={i}
                        type="button"
                        onClick={() => setLightboxIndex(i)}
                        className="group shrink-0 overflow-hidden rounded-lg border border-apple-divider bg-apple-muted text-left transition-colors hover:border-apple-blue/40"
                        style={{ width: screenshotItemWidth }}
                        aria-label={`View ${project.name} screenshot ${i + 1} full screen`}
                      >
                        <img
                          src={src}
                          alt={`${project.name} screenshot ${i + 1}`}
                          className="aspect-[16/10] w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                        />
                      </button>
                    ))}
                  </div>
                </div>

                {canScroll && (
                  <>
                    <button
                      type="button"
                      onClick={() => setSlide((s) => Math.max(0, s - 1))}
                      disabled={slide === 0}
                      className="absolute top-1/2 left-2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-apple-surface/90 shadow-sm backdrop-blur-sm transition-opacity disabled:pointer-events-none disabled:opacity-0"
                    >
                      <ChevronLeft className="h-4 w-4 text-apple-text" />
                    </button>
                    <button
                      type="button"
                      onClick={() => setSlide((s) => Math.min(maxSlide, s + 1))}
                      disabled={slide === maxSlide}
                      className="absolute top-1/2 right-2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-apple-surface/90 shadow-sm backdrop-blur-sm transition-opacity disabled:pointer-events-none disabled:opacity-0"
                    >
                      <ChevronRight className="h-4 w-4 text-apple-text" />
                    </button>
                  </>
                )}
              </div>

              {canScroll && (
                <div className="mt-2 flex justify-center gap-1.5">
                  {Array.from({ length: maxSlide + 1 }).map((_, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => setSlide(i)}
                      className={`h-1.5 rounded-full transition-all ${
                        slide === i ? "w-4 bg-apple-blue" : "w-1.5 bg-black/15 dark:bg-white/15"
                      }`}
                      aria-label={`Go to screenshot ${i + 1}`}
                    />
                  ))}
                </div>
              )}
            </div>

            <div
              ref={tabsContainerRef}
              className="relative flex gap-6 border-b border-apple-divider"
            >
              {tabs.map((t) => (
                <button
                  key={t.id}
                  ref={(el) => {
                    if (el) tabButtonRefs.current[t.id] = el;
                  }}
                  type="button"
                  onClick={() => setTab(t.id)}
                  className={`relative z-10 pb-3 text-sm font-medium transition-colors ${
                    tab === t.id ? "text-apple-blue" : "text-apple-secondary"
                  }`}
                >
                  {t.label}
                </button>
              ))}
              <motion.span
                aria-hidden
                className="pointer-events-none absolute bottom-0 h-0.5 bg-apple-blue"
                initial={false}
                animate={{
                  left: indicator.left,
                  width: indicator.width,
                  opacity: indicatorReady ? 1 : 0,
                }}
                transition={{ type: "spring", stiffness: 500, damping: 38 }}
              />
            </div>

            <div className="overflow-hidden rounded-2xl border border-apple-divider">
              <div className="grid lg:grid-cols-5 lg:items-stretch">
                <div className="lg:col-span-3 p-5">
                  {tab === "overview" && (
                    <>
                      <div className="mb-3 flex items-center gap-2">
                        <span className="text-xs font-medium tracking-wide text-apple-secondary uppercase">
                          Project Overview
                        </span>
                        {project.promoted && (
                          <span className="rounded-full bg-apple-blue/10 px-2 py-0.5 text-xs font-medium text-apple-blue">
                            Promoted
                          </span>
                        )}
                      </div>
                      <h2 className="text-lg font-semibold tracking-tight text-apple-text">
                        {project.name}
                      </h2>
                      <div className="mt-3 space-y-3 text-sm leading-relaxed text-apple-tertiary">
                        {longDescriptionParagraphs.map((paragraph, idx) => (
                          <p key={idx}>{paragraph}</p>
                        ))}
                      </div>
                    </>
                  )}

                  {tab === "process" && (
                    <>
                      <h3 className="font-semibold text-apple-text">Development Process</h3>
                      <ol className="mt-5 space-y-5">
                        {project.process.map((step, idx) => (
                          <li key={step.title} className="flex gap-4">
                            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-apple-divider bg-transparent text-xs font-semibold text-apple-text">
                              {idx + 1}
                            </span>
                            <div>
                              <p className="text-sm font-semibold text-apple-text">{step.title}</p>
                              <p className="mt-1 text-sm leading-relaxed text-apple-tertiary">
                                {step.description}
                              </p>
                            </div>
                          </li>
                        ))}
                      </ol>
                    </>
                  )}
                </div>

                <ProjectInfoBox
                  project={project}
                  className="border-t border-apple-divider lg:col-span-2 lg:border-t-0 lg:border-l"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <ScreenshotLightbox
        images={screenshots}
        activeIndex={lightboxIndex}
        projectName={project.name}
        onClose={() => setLightboxIndex(null)}
        onIndexChange={setLightboxIndex}
      />
    </motion.div>
  );
}

function ProjectInfoBox({
  project,
  className = "",
}: {
  project: Project;
  className?: string;
}) {
  const openSourceLabel = getProjectOpenSourceLabel(project);

  return (
    <aside
      className={`flex h-full flex-col px-5 pb-5 pt-5 ${className}`}
    >
      <span className="text-xs font-medium tracking-wide text-apple-secondary uppercase">
        Project Info
      </span>

      <div className="mt-5 space-y-1.5">
        {project.url && project.url !== project.githubUrl && (
          <a
            href={resolveProjectLink(project.url)}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-sm text-apple-secondary transition-colors hover:text-apple-text"
          >
            Website
            <Globe className="h-3.5 w-3.5 text-apple-blue" />
          </a>
        )}
        {project.githubUrl && (
          <a
            href={resolveProjectLink(project.githubUrl)}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-sm text-apple-secondary transition-colors hover:text-apple-text"
          >
            GitHub
            <IconGithub className="h-3.5 w-3.5 text-apple-blue" />
          </a>
        )}
        <p className="text-sm text-apple-secondary">
          Launched in {project.launched}
        </p>
        <p className="text-sm text-apple-secondary">
          Timeline
          {": "}
          <span className="text-apple-text">{project.timeline}</span>
        </p>
        {project.team.map((member) => (
          <p key={member.name} className="text-sm text-apple-secondary">
            {project.projectType === "team" ? "Launch Team" : "Individual Project"}
            {": "}
            <span className="text-apple-text">
              {project.teamMembers && project.teamMembers.length > 0
                ? `${member.name}, ${project.teamMembers.join(", ")}`
                : member.name}
            </span>
          </p>
        ))}
        {openSourceLabel && (
          <p className="text-sm text-apple-secondary">
            Open Source
            {": "}
            <span className="text-apple-text">{openSourceLabel}</span>
          </p>
        )}
      </div>

      <div className="mt-4 border-t border-apple-divider pt-4">
        <span className="text-xs font-medium tracking-wide text-apple-secondary uppercase">
          Tech Stack
        </span>
        <div className="mt-2 flex flex-wrap gap-1.5">
          {project.tech.map((t) => (
            <span
              key={t}
              className="rounded-lg border border-apple-divider bg-transparent px-2.5 py-0.5 text-xs font-medium text-apple-text"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </aside>
  );
}
