"use client";

import { motion } from "framer-motion";

type Project = {
  name: string;
  description: string;
  meta: string;
  href: string;
};

const projects: Project[] = [
  {
    name: "better-agents",
    description: "Standards for building agents, better. Open-source contributor at LangWatch.",
    meta: "TypeScript · 1.5k ★",
    href: "https://github.com/langwatch/better-agents",
  },
  {
    name: "data-analytics-agent",
    description: "SQL analytics agent. Open-source contributor at LangWatch.",
    meta: "TypeScript",
    href: "https://github.com/langwatch/data-analytics-agent",
  },
  {
    name: "Thesis 2025",
    description: "VU Amsterdam BSc Computer Science thesis.",
    meta: "Python · 2025",
    href: "https://github.com/Aryansharma28/Thesis_2025",
  },
  {
    name: "vr_hackation",
    description: "VR project built at a hackathon. Unity / C#.",
    meta: "C# · Hackathon",
    href: "https://github.com/s4ddo/vr_hackation",
  },
];

const ease = [0.22, 1, 0.36, 1] as const;

export default function Projects() {
  return (
    <section id="projects" className="border-t border-[--color-subtle]">
      <div className="mx-auto w-full max-w-4xl px-6 md:px-8 py-24 md:py-32">
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.5, ease }}
          className="mb-10 text-xs uppercase tracking-[0.22em] text-muted"
        >
          Selected Projects
        </motion.p>

        <ul className="divide-y divide-[--color-subtle] border-y border-[--color-subtle]">
          {projects.map((project, i) => (
            <motion.li
              key={project.name}
              initial={{ opacity: 0, y: 6 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-5%" }}
              transition={{ duration: 0.4, ease, delay: Math.min(i * 0.05, 0.2) }}
            >
              <a
                href={project.href}
                target="_blank"
                rel="noreferrer"
                className="group block px-1 py-6 transition-colors hover:bg-[--color-surface]"
              >
                <div className="grid grid-cols-1 gap-1 md:grid-cols-[1fr_auto] md:items-baseline md:gap-6">
                  <div>
                    <h3 className="text-base font-medium text-foreground md:text-lg">
                      <span className="link-underline">{project.name}</span>{" "}
                      <span
                        aria-hidden
                        className="inline-block translate-x-0 text-muted opacity-0 transition-all duration-200 group-hover:translate-x-1 group-hover:opacity-100"
                      >
                        ↗
                      </span>
                    </h3>
                    <p className="mt-1 max-w-2xl text-sm leading-relaxed text-muted md:text-base">
                      {project.description}
                    </p>
                  </div>
                  <span className="text-sm text-muted tabular-nums">
                    {project.meta}
                  </span>
                </div>
              </a>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
