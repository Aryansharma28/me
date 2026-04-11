"use client";

import { motion } from "framer-motion";

type Role = {
  company: string;
  title: string;
  period: string;
  domain?: string;
  logo?: string;
};

const roles: Role[] = [
  {
    company: "Booking.com",
    title: "Incoming",
    period: "Summer 2026",
    domain: "booking.com",
  },
  {
    company: "LangWatch",
    title: "Engineering",
    period: "Nov 2025 — Present",
    domain: "langwatch.ai",
  },
  {
    company: "EuroTech Federation",
    title: "Fellow",
    period: "Apr 2026 — Present",
    domain: "eurotech-federation.com",
  },
  {
    company: "baby vc",
    title: "Bootcamp Lead, NL",
    period: "Mar 2026 — Present",
    domain: "babyvc.co",
  },
  {
    company: "orq.ai",
    title: "Software Engineer",
    period: "Feb 2025 — Jun 2025",
    domain: "orq.ai",
  },
  {
    company: "Royal De Heus (via NAHSS)",
    title: "Student Consultant",
    period: "Feb 2024 — Sep 2024",
    logo: "/logos/rdh.jpg",
  },
  {
    company: "VU Amsterdam",
    title: "Teaching Assistant",
    period: "Sep 2023 — Jan 2025",
    domain: "vu.nl",
  },
  {
    company: "Storks Robotics Lab",
    title: "Software Engineer",
    period: "Sep 2023 — Nov 2023",
    domain: "storks.ai",
  },
];

const ease = [0.22, 1, 0.36, 1] as const;

function Logo({
  company,
  domain,
  logo,
}: {
  company: string;
  domain?: string;
  logo?: string;
}) {
  const src =
    logo ??
    (domain
      ? `https://www.google.com/s2/favicons?domain=${domain}&sz=128`
      : null);

  if (src) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={src}
        alt=""
        width={20}
        height={20}
        loading="lazy"
        className="h-5 w-5 flex-shrink-0 rounded-[4px] object-contain"
      />
    );
  }
  return (
    <div
      aria-hidden
      className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-[4px] border border-[--color-subtle] bg-[--color-surface] text-[10px] font-medium text-muted"
    >
      {company.replace(/[^a-zA-Z]/g, "").charAt(0).toUpperCase() || "·"}
    </div>
  );
}

export default function Work() {
  return (
    <section id="work" className="border-t border-[--color-subtle]">
      <div className="mx-auto w-full max-w-4xl px-6 md:px-8 py-24 md:py-32">
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.5, ease }}
          className="mb-10 text-xs uppercase tracking-[0.22em] text-muted"
        >
          Work
        </motion.p>

        <ul className="divide-y divide-[--color-subtle] border-y border-[--color-subtle]">
          {roles.map((role, i) => (
            <motion.li
              key={`${role.company}-${i}`}
              initial={{ opacity: 0, y: 6 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-5%" }}
              transition={{ duration: 0.4, ease, delay: Math.min(i * 0.03, 0.2) }}
            >
              <div className="grid grid-cols-1 items-center gap-1 px-1 py-5 transition-colors hover:bg-[--color-surface] md:grid-cols-[1fr_auto] md:gap-6">
                <div className="flex items-center gap-3 md:gap-4">
                  <Logo
                    company={role.company}
                    domain={role.domain}
                    logo={role.logo}
                  />
                  <div className="flex flex-col gap-0.5 md:flex-row md:items-baseline md:gap-4">
                    <span className="text-base font-medium text-foreground md:text-lg">
                      {role.company}
                    </span>
                    <span className="text-sm text-muted md:text-base">
                      {role.title}
                    </span>
                  </div>
                </div>
                <span className="ml-8 text-sm text-muted tabular-nums md:ml-0">
                  {role.period}
                </span>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
