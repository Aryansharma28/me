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
          className="mb-10 flex items-center gap-4"
        >
          <Image
            src="/aryan.jpg"
            alt="Aryan Sharma"
            width={96}
            height={96}
            priority
            className="h-16 w-16 rounded-full object-cover md:h-20 md:w-20"
          />
          <span className="font-display text-2xl leading-none tracking-tight text-foreground md:text-3xl">
            Aryan Sharma
          </span>
        </motion.div>

        <motion.p
          {...fadeUp}
          transition={{ duration: 0.6, ease, delay: 0.08 }}
          className="max-w-3xl text-2xl font-medium leading-[1.15] tracking-tight text-foreground md:text-4xl lg:text-5xl"
        >
          <span className="font-serif italic">Building</span> at{" "}
          <a
            href="https://langwatch.ai"
            target="_blank"
            rel="noreferrer"
            className="link-underline hover:text-muted transition-colors"
          >
            LangWatch
          </a>
          . <span className="font-serif italic">Incoming</span> at{" "}
          <a
            href="https://booking.com"
            target="_blank"
            rel="noreferrer"
            className="link-underline hover:text-muted transition-colors"
          >
            Booking.com
          </a>
          .
        </motion.p>

        <motion.p
          {...fadeUp}
          transition={{ duration: 0.5, ease, delay: 0.2 }}
          className="mt-4 text-sm text-muted md:text-base"
        >
          Previously{" "}
          <a
            href="https://orq.ai"
            target="_blank"
            rel="noreferrer"
            className="link-underline hover:text-foreground transition-colors"
          >
            orq.ai
          </a>{" "}
          and{" "}
          <a
            href="https://vu.nl"
            target="_blank"
            rel="noreferrer"
            className="link-underline hover:text-foreground transition-colors"
          >
            VU Amsterdam
          </a>
          .
        </motion.p>

        <motion.div
          {...fadeUp}
          transition={{ duration: 0.6, ease, delay: 0.22 }}
          className="mt-10"
        >
          <a
            href="https://cal.com/aryan-sharma-mwdtuc/20-mins"
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background shadow-sm transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-[--color-muted] hover:shadow-lg"
          >
            Book a 20-min call
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
              className="inline-flex transition-all duration-200 ease-out hover:-translate-y-0.5 hover:scale-110 hover:text-foreground"
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
              className="inline-flex transition-all duration-200 ease-out hover:-translate-y-0.5 hover:scale-110 hover:text-foreground"
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
              className="inline-flex transition-all duration-200 ease-out hover:-translate-y-0.5 hover:scale-110 hover:text-foreground"
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
