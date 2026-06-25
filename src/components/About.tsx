import { motion } from "framer-motion";
import { GraduationCap, Sparkles, UserRound } from "lucide-react";
import { education, profile } from "../data/profile";

function AboutRow({
  index,
  icon: Icon,
  title,
  children,
  delay,
}: {
  index: number;
  icon: typeof UserRound;
  title: string;
  children: React.ReactNode;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, delay }}
      className="flex w-full items-start gap-4 border-b border-apple-divider py-5 pl-3 md:py-6 md:pl-5"
    >
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-apple-divider bg-transparent">
        <Icon className="h-5 w-5 text-apple-text" strokeWidth={1.75} />
      </div>
      <div className="min-w-0 flex-1 pt-0.5">
        <h3 className="text-sm font-semibold tracking-tight text-apple-text md:text-base">
          {index}. {title}
        </h3>
        {children}
      </div>
    </motion.div>
  );
}

export function About() {
  const educationEntry = education[0];

  return (
    <section className="flex h-full flex-col justify-center overflow-hidden pl-8 pr-6 py-8 md:pl-11 md:pr-8 md:py-10">
      <div className="mx-auto w-full max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="pt-1"
        >
          <p className="text-sm font-medium tracking-wide text-apple-secondary uppercase">
            About
          </p>
          <h2
            className="mt-2 text-2xl font-semibold tracking-tight text-apple-text md:text-3xl"
            style={{ letterSpacing: "-0.03em" }}
          >
            Background.
          </h2>
          <p className="mt-1 max-w-xl text-sm text-apple-secondary">
            {profile.tagline}
          </p>
        </motion.div>

        <div className="mt-6">
          <AboutRow index={1} icon={UserRound} title="Who I am" delay={0.06}>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-apple-secondary md:text-[0.9375rem] md:leading-7">
              {profile.aboutParagraphs[0]}
            </p>
          </AboutRow>

          {educationEntry && (
            <AboutRow index={2} icon={GraduationCap} title="Education" delay={0.12}>
              <div className="mt-2 flex items-start justify-between gap-4">
                <div className="min-w-0">
                  <p className="text-sm font-medium text-apple-text">
                    {educationEntry.institution}
                  </p>
                  <p className="mt-1 text-xs text-apple-secondary md:text-sm">
                    {educationEntry.program}
                  </p>
                  <p className="mt-2 max-w-2xl text-sm leading-relaxed text-apple-secondary md:text-[0.9375rem] md:leading-7">
                    {educationEntry.description}
                  </p>
                </div>
                <span className="shrink-0 text-[11px] font-medium tracking-wide text-apple-tertiary md:text-xs">
                  {educationEntry.period}
                </span>
              </div>
            </AboutRow>
          )}

          <AboutRow index={3} icon={Sparkles} title="What I build" delay={0.18}>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-apple-secondary md:text-[0.9375rem] md:leading-7">
              {profile.aboutParagraphs[1]}
            </p>
          </AboutRow>
        </div>
      </div>
    </section>
  );
}
