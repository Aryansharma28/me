"use client";
import ImageTile from "./rotating_cards";
import { motion } from "framer-motion";

export default function HeroSection() {

  const cards = [
  {
    image: "/images/IMG_20240120_120618.jpg",
    caption: "Just me.",
  },
  {
    image: "/images/IMG_20240724_123359.jpg",
    caption: "Somewhere in Europe.",
  },
  {
    image: "/images/IMG-20220731-WA0054.jpg",
    caption: "Being myself.",
  },
  {
    image: "/images/IMG-20240624-WA0034.jpg",
    caption: "Tech gets me going.",
  },
  {
    image: "/images/RJ_03081-opq3558734422.jpg",
    caption: "At Tech4Good conference.",
  },
];

  return (
    <section className="h-screen flex items-center justify-center bg-white px-4 relative">
      <div className="max-w-6xl w-full flex flex-col md:grid md:grid-cols-2 gap-6 md:gap-8 items-center justify-center h-full">
        {/* Image/Card - Top on mobile, Left on desktop */}
        <div className="flex justify-center items-center order-1 md:order-1">
          <div className="scale-75 md:scale-100">
            <ImageTile cards={cards} />
          </div>
        </div>

        {/* Text - Bottom on mobile, Right on desktop */}
        <div className="flex items-center justify-center order-2 md:order-2">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
            className="text-center md:text-left max-w-xl md:max-w-3xl"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900 mb-2">
              Hey, I'm Aryan.
            </h1>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-tight text-gray-800 mb-3">
              <i>Builder. Founder-ish.</i>
            </h2>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 leading-relaxed">
              I don't just write code. I ship things people use.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export { HeroSection };