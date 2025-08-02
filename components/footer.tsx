"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope, FaCalendarAlt, FaFileAlt } from "react-icons/fa";

export default function Footer() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <motion.footer
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="bg-black text-white px-6 py-12 md:px-16"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-12">
        {/* Left */}
        <div>
          <h2 className="text-3xl font-bold mb-2">Let’s Build Something.</h2>
          <p className="text-gray-400 max-w-md">
            Whether you're starting a wild idea, hiring someone who gives a damn,
            or just vibing with my journey — I’m open to talk.
          </p>
        </div>

        {/* Right */}
        <div className="flex flex-col gap-4 text-base">
          <a href="mailto:aryansharma2k2@gmail.com" className="hover:text-blue-400 transition-colors flex items-center gap-3" target="_blank">
            <FaEnvelope className="text-lg" /> Email Me
          </a>
          <a href="https://calendly.com/aryan-sharma/15min" className="hover:text-blue-400 transition-colors flex items-center gap-3" target="_blank">
            <FaCalendarAlt className="text-lg" /> Book a Call
          </a>
          <a href="https://www.linkedin.com/in/aryansharma" className="hover:text-blue-400 transition-colors flex items-center gap-3" target="_blank">
            <FaLinkedin className="text-lg" /> LinkedIn
          </a>
          <a href="https://github.com/aryansharma28" className="hover:text-blue-400 transition-colors flex items-center gap-3" target="_blank">
            <FaGithub className="text-lg" /> GitHub
          </a>
          <a href="https://www.instagram.com/lifeofaryansharma/" className="hover:text-blue-400 transition-colors flex items-center gap-3" target="_blank">
            <FaInstagram className="text-lg" /> Instagram
          </a>
          <a href="/Aryan_Sharma_Resume.pdf" className="hover:text-blue-400 transition-colors flex items-center gap-3" target="_blank">
            <FaFileAlt className="text-lg" /> View Resume
          </a>
        </div>
      </div>

      <div className="mt-12 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Aryan Sharma. Built with Next.js, Tailwind & a little chaos.
      </div>
    </motion.footer>
  );
}
