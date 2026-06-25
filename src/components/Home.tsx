import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { profile } from "../data/profile";
import { useNavigation } from "../context/NavigationContext";

const ease = [0.16, 1, 0.3, 1] as const;

function useTorontoTime() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const format = () => {
      setTime(
        new Intl.DateTimeFormat("en-US", {
          timeZone: "America/Toronto",
          hour: "numeric",
          minute: "2-digit",
          hour12: true,
        }).format(new Date()),
      );
    };

    format();
    const id = window.setInterval(format, 1000);
    return () => window.clearInterval(id);
  }, []);

  return time;
}

export function Home() {
  const { navigate } = useNavigation();
  const fullName = `${profile.firstName} ${profile.lastName}`;
  const torontoTime = useTorontoTime();

  return (
    <section className="relative flex h-full items-center overflow-hidden px-6 md:px-8">
      <div className="relative z-10 mx-auto w-full max-w-6xl pl-1 md:pl-6 lg:pl-10">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, ease, delay: 0.08 }}
          className="home-pin-name m-0 text-left"
          style={{ letterSpacing: "-0.045em" }}
        >
          {fullName}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease, delay: 0.16 }}
          className="mt-5 max-w-2xl text-base leading-relaxed text-apple-secondary md:text-[1.125rem] md:leading-8"
        >
          {profile.homeDescription}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease, delay: 0.24 }}
          className="mt-6 flex flex-wrap items-center justify-start gap-x-3 gap-y-1 text-sm"
        >
          <span className="home-meta-time tabular-nums">Toronto · {torontoTime || "—"}</span>
          <span className="text-apple-tertiary" aria-hidden>
            ·
          </span>
          <button type="button" onClick={() => navigate("about")} className="home-meta-link font-medium">
            About
          </button>
          <span className="text-apple-tertiary" aria-hidden>
            ·
          </span>
          <button type="button" onClick={() => navigate("projects")} className="home-meta-link font-medium">
            Work
          </button>
        </motion.div>
      </div>
    </section>
  );
}
