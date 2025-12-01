"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function LoadingRipple() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if animation has been shown this session
    const hasShownAnimation = sessionStorage.getItem("hasShownLoadingAnimation");

    if (hasShownAnimation) {
      setIsLoading(false);
      return;
    }

    // Show animation for first visit
    const timer = setTimeout(() => {
      setIsLoading(false);
      sessionStorage.setItem("hasShownLoadingAnimation", "true");
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-white"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          {/* Multiple ripple circles */}
          {[0, 1, 2].map((index) => (
            <motion.div
              key={index}
              className="absolute rounded-full border-2 border-blue-500/20"
              initial={{ scale: 0, opacity: 0.8 }}
              animate={{
                scale: [0, 2, 4],
                opacity: [0.6, 0.3, 0],
              }}
              transition={{
                duration: 1.2,
                delay: index * 0.2,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              style={{
                width: "100vmax",
                height: "100vmax",
              }}
            />
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
