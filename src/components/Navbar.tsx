import { motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { IconGithub } from "./SocialIcons";
import { profile } from "../data/profile";
import { useNavigation, type Section } from "../context/NavigationContext";
import { useTheme } from "../context/ThemeContext";

const navItems: { label: string; id: Section }[] = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Skills", id: "skills" },
  { label: "Projects", id: "projects" },
];

function NavDivider() {
  return <div className="mx-1 hidden h-4 w-px bg-apple-divider md:block" aria-hidden />;
}

export function Navbar({ hidden = false }: { hidden?: boolean }) {
  const { section, projectId, navigate } = useNavigation();
  const { isDark, toggleTheme } = useTheme();
  const active = projectId ? "projects" : section;

  return (
    <motion.header
      initial={false}
      animate={{
        opacity: hidden ? 0 : 1,
        y: hidden ? -28 : 0,
      }}
      transition={{ duration: 0.32, ease: [0.4, 0, 0.2, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 px-4 pt-4 md:px-6 ${
        hidden ? "pointer-events-none" : ""
      }`}
    >
      <nav className="relative mx-auto flex max-w-6xl items-center rounded-2xl border border-apple-divider bg-transparent px-3 py-2 md:px-4 md:py-2.5">
        <button
          type="button"
          onClick={() => navigate("home")}
          aria-label="Go to home"
          className="flex items-center gap-2.5 rounded-xl px-1 py-1 transition-colors hover:opacity-80"
        >
          <div className="flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-apple-divider bg-transparent">
            <img
              src="/image/logo-avatar.png"
              alt=""
              className="h-full w-full object-contain"
              draggable={false}
            />
          </div>
          <div className="hidden text-left sm:block">
            <p className="text-sm font-semibold leading-tight tracking-tight text-apple-text">
              {profile.firstName}
            </p>
            <p className="text-[10px] font-medium uppercase tracking-[0.12em] text-apple-secondary">
              {profile.lastName}
            </p>
          </div>
        </button>

        <NavDivider />

        <div className="absolute left-1/2 hidden -translate-x-1/2 items-center md:flex">
          <div className="flex items-center rounded-xl border border-apple-divider p-0.5">
            {navItems.map((item) => {
              const isActive = active === item.id;

              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => navigate(item.id)}
                  className={`relative rounded-lg px-4 py-1.5 text-sm font-medium transition-colors duration-300 ${
                    isActive
                      ? "text-apple-text"
                      : "text-apple-secondary hover:text-apple-text"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-lg border border-apple-divider bg-apple-bg/40 dark:bg-white/5"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{item.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="ml-auto flex items-center gap-1.5">
          <div className="hidden sm:block">
            <SocialIcon href={profile.social.github} icon={IconGithub} />
          </div>

          <div className="hidden h-4 w-px bg-apple-divider sm:block" aria-hidden />

          <button
            type="button"
            onClick={toggleTheme}
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
            className="flex h-8 w-8 items-center justify-center rounded-full border border-transparent text-apple-secondary transition-colors hover:border-apple-divider hover:text-apple-text"
          >
            {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
        </div>
      </nav>

      <div className="mx-auto mt-2 flex max-w-6xl justify-center gap-1 rounded-2xl border border-apple-divider bg-transparent p-1 md:hidden">
        {navItems.map((item) => {
          const isActive = active === item.id;

          return (
            <button
              key={item.id}
              type="button"
              onClick={() => navigate(item.id)}
              className={`rounded-lg border px-3 py-1 text-xs font-medium transition-colors ${
                isActive
                  ? "border-apple-divider bg-apple-bg/40 text-apple-text dark:bg-white/5"
                  : "border-transparent text-apple-secondary"
              }`}
            >
              {item.label}
            </button>
          );
        })}
      </div>
    </motion.header>
  );
}

function SocialIcon({
  href,
  icon: Icon,
}: {
  href: string;
  icon: React.ComponentType<{ className?: string }>;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex h-8 w-8 items-center justify-center rounded-full border border-transparent text-apple-secondary transition-colors hover:border-apple-divider hover:text-apple-text"
    >
      <Icon className="h-4 w-4" />
    </a>
  );
}
