"use client";

import { motion } from "framer-motion";
import { GitHubIcon, LinkedInIcon, MailIcon } from "./icons";

const ease = [0.22, 1, 0.36, 1] as const;

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-[--color-subtle]">
      <div className="mx-auto w-full max-w-4xl px-6 md:px-8 py-24 md:py-32">
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.5, ease }}
          className="mb-10 text-xs uppercase tracking-[0.22em] text-muted"
        >
          Get in touch
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.6, ease, delay: 0.05 }}
          className="max-w-2xl text-lg leading-relaxed text-foreground md:text-xl"
        >
          Got a question, a wild idea, or just wanna talk about{" "}
          <span className="font-serif italic">anything under the sun</span>?
          Just book a call.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.6, ease, delay: 0.15 }}
          className="mt-10"
        >
          <a
            href="https://cal.com/aryan-sharma-mwdtuc/20-mins"
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-base font-medium text-background transition-colors hover:bg-[--color-muted]"
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
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.6, ease, delay: 0.2 }}
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

        <div className="mt-20 flex items-center justify-between border-t border-[--color-subtle] pt-6 text-xs text-muted">
          <span>&copy; {new Date().getFullYear()} Aryan Sharma</span>
          <span>Amsterdam</span>
        </div>
      </div>
    </footer>
  );
}
