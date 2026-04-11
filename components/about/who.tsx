"use client";

import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

export default function About() {
  return (
    <section
      id="about"
      className="border-t border-[--color-subtle]"
    >
      <div className="mx-auto w-full max-w-4xl px-6 md:px-8 py-24 md:py-32">
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.5, ease }}
          className="mb-10 text-xs uppercase tracking-[0.22em] text-muted"
        >
          About
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.6, ease, delay: 0.05 }}
          className="max-w-2xl text-lg leading-relaxed text-foreground md:text-xl"
        >
          CS grad from VU Amsterdam, originally from India. I&apos;m always
          optimising for{" "}
          <span className="font-serif italic">learning</span> and becoming the
          best version of myself, which usually means picking uncomfortable
          paths, <span className="font-serif italic">shipping</span> before
          I&apos;m ready, and building things with real users.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.6, ease, delay: 0.15 }}
          className="mt-6 max-w-2xl text-lg leading-relaxed text-muted md:text-xl"
        >
          Right now I&apos;m on the engineering team at LangWatch, and
          I&apos;ll be joining Booking.com after the summer. On the side:
          Bootcamp Lead for baby vc&apos;s NL expansion and Fellow at the
          EuroTech Federation.
        </motion.p>
      </div>
    </section>
  );
}

export { About };
