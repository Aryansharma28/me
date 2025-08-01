"use client";
import ImageTile from "./rotating_cards";
import { motion } from "framer-motion";

export default function HeroSection() {

  const cards = [
  {
    image: "/images/IMG_20240120_120618.jpg",
    caption: "This is me",
  },
  {
    image: "/images/IMG_20240724_123359.jpg",
    caption: "Exploring the world",
  },
  {
    image: "/images/IMG-20220731-WA0054.jpg",
    caption: "Just Being Me",
  },
  {
    image: "/images/IMG-20240624-WA0034.jpg",
    caption: "Tech excites me too much",
  },
  {
    image: "/images/RJ_03081-opq3558734422.jpg",
    caption: "Random shot of me at seeds",
  },
];

  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left Side - Image/Card */}
        <div className="flex justify-center">
          <ImageTile cards={cards} />
        </div>

        {/* Right Side - Text */}
       <section className="min-h-screen flex items-center justify-center bg-white px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeInOut" }}
        className="max-w-3xl text-left"
      >
        <h1 className="text-5xl md:text-6xl font-bold leading-tight text-gray-900">
          Hey, I'm Aryan. <br />
        </h1>
        <h2 className="text-3xl md:text-4xl font-bold leading-tight text-gray-800">
          <i>Founder-ish. Builder Always.</i>
        </h2>
        <p className="mt-4 text-lg md:text-2xl text-gray-600 leading-tight">
          Most devs write code. I bring products to life. <br />
        </p>
      </motion.div>
    </section>
      </div>
    </div>
  );
}

export { HeroSection };