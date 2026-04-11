"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { GitHubIcon, LinkedInIcon, MailIcon } from "../icons";

const fadeUp = {
  initial: { opacity: 0, y: 8 },
  animate: { opacity: 1, y: 0 },
};

const ease = [0.22, 1, 0.36, 1] as const;

export default function HeroSection() {
  return (
    <section
      id="top"
      className="relative flex min-h-[calc(100vh-3.5rem)] items-center"
    >
      <div className="mx-auto w-full max-w-4xl px-6 md:px-8 py-24 md:py-28">
        <motion.div
          {...fadeUp}
          transition={{ duration: 0.6, ease }}
          className="mb-8"
        >
          <Image
            src="/aryan.jpg"
            alt="Aryan Sharma"
            width={96}
            height={96}
            priority
            className="h-20 w-20 rounded-full object-cover md:h-24 md:w-24"
          />
        </motion.div>

        <motion.p
          {...fadeUp}
          transition={{ duration: 0.5, ease, delay: 0.05 }}
          className="mb-6 text-xs uppercase tracking-[0.22em] text-muted"
        >
          Aryan Sharma &middot; Builder
        </motion.p>

        <motion.p
          {...fadeUp}
          transition={{ duration: 0.6, ease, delay: 0.12 }}
          className="max-w-3xl text-3xl font-medium leading-[1.1] tracking-tight text-foreground md:text-5xl lg:text-6xl"
        >
          <span className="font-serif italic">Building</span> at LangWatch.{" "}
          <span className="font-serif italic">Incoming</span> at Booking.com.
          <br className="hidden md:block" />
          <span className="text-muted"> Previously orq.ai and VU Amsterdam.</span>
        </motion.p>

        <motion.div
          {...fadeUp}
          transition={{ duration: 0.6, ease, delay: 0.22 }}
          className="mt-10"
        >
          <a
            href="https://calendly.com/aryansharma2k2/aryan-x-15-mins"
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-colors hover:bg-[--color-muted]"
          >
            Book a 15-min call
            <span
              aria-hidden
              className="inline-block transition-transform duration-200 group-hover:translate-x-0.5"
            >
              →
            </span>
          </a>
        </motion.div>

        <motion.ul
          {...fadeUp}
          transition={{ duration: 0.6, ease, delay: 0.3 }}
          className="mt-8 flex items-center gap-5 text-muted"
        >
          <li>
            <a
              href="mailto:aryansharma2k2@gmail.com"
              aria-label="Email"
              className="inline-flex hover:text-foreground transition-colors"
            >
              <MailIcon />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/aryansharma28"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="inline-flex hover:text-foreground transition-colors"
            >
              <GitHubIcon />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/aryansharma12282002/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="inline-flex hover:text-foreground transition-colors"
            >
              <LinkedInIcon />
            </a>
          </li>
        </motion.ul>
      </div>
    </section>
  );
}

export { HeroSection };
