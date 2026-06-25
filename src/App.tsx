import { useRef } from "react";
import { Navbar } from "./components/Navbar";
import { Home } from "./components/Home";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { ProjectPage } from "./components/ProjectPage";
import { NavigationProvider, useNavigation } from "./context/NavigationContext";
import { ThemeProvider } from "./context/ThemeContext";
import { AnimatePresence, motion } from "framer-motion";
import { useScrollHide } from "./hooks/useScrollHide";

const sectionOrder = ["home", "about", "skills", "projects"] as const;

function AppContent() {
  const { section, projectId } = useNavigation();
  const mainRef = useRef<HTMLElement>(null);
  const isScrollableSection = section === "projects" || section === "skills";
  const navHidden = useScrollHide(
    mainRef,
    isScrollableSection && !projectId,
  );

  if (projectId) {
    return (
      <div className="flex h-screen flex-col overflow-hidden">
        <ProjectPage />
      </div>
    );
  }

  return (
    <div className="flex h-screen flex-col overflow-hidden">
      <Navbar hidden={navHidden} />
      <main
        ref={mainRef}
        className={`relative min-h-0 flex-1 pt-[88px] ${
          isScrollableSection ? "overflow-y-auto" : "overflow-hidden"
        }`}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={section}
            initial={{ opacity: 0, x: sectionOrder.indexOf(section) > 0 ? 40 : -40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: sectionOrder.indexOf(section) > 0 ? -40 : 40 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className={
              isScrollableSection
                ? "min-h-full"
                : "h-full overflow-hidden"
            }
          >
            {section === "home" && <Home />}
            {section === "about" && <About />}
            {section === "skills" && <Skills />}
            {section === "projects" && <Projects />}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <NavigationProvider>
        <AppContent />
      </NavigationProvider>
    </ThemeProvider>
  );
}

export default App;
