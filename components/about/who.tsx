"use client";
import { motion } from "framer-motion";
import { useState } from "react";

const FlipCard = ({ title, content }: { title: string; content: string }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div 
      className="h-48 cursor-pointer"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <motion.div
        className="relative w-full h-full"
        initial={false}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{
          duration: 0.7,
          ease: [0.43, 0.13, 0.23, 0.96],
          type: "spring",
          stiffness: 80,
          damping: 15
        }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Front */}
        <motion.div
          className="absolute inset-0 w-full h-full bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 shadow-xl flex items-center justify-center"
          style={{ backfaceVisibility: "hidden" }}
        >
          <h3 className="text-2xl font-semibold text-center">{title}</h3>
        </motion.div>
        
        {/* Back */}
        <motion.div
          className="absolute inset-0 w-full h-full bg-white/15 backdrop-blur-lg rounded-2xl border border-white/20 shadow-xl p-6 flex items-center"
          style={{ 
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)"
          }}
        >
          <p className="text-gray-700 text-sm leading-relaxed">{content}</p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default function aboutFunction(){
  const cards = [
  {
    title: " Who I Am",
    content:
      "CS grad from VU Amsterdam. Originally from India, left MIT Manipal to bet on myself. These years in Amsterdam taught me to crash hard, rebuild faster, and trust my gut when it says there's more."
  },
  {
    title: " What I Do",
    content:
      "Built backend at Orq.ai. Won best project at NAHSS. Pitched at Huawei Seeds for the Future. Co-founded a student org, ran workshops, shipped code. I build, I break, I ship."
  },
  {
    title: " What I Believe",
    content:
      "Success isn't checking boxes — it's following energy. I take uncomfortable paths and learn by doing. We've got ~4,000 weeks. Mine will count."
  },
  {
    title: " Right Now",
    content:
      "On a Dutch search year visa. Looking for full-time roles or early-stage startups where I can build something real. Open to collabs, co-founders, or anyone building in public."
  }
];


  return(
    <section className="flex flex-col items-center justify-center min-h-screen py-16 px-6">
      <h1 className="text-5xl font-bold text-center mb-12">About Me.</h1>
      <div className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 gap-6">
        {cards.map((card, index) => (
          <FlipCard key={index} title={card.title} content={card.content} />
        ))}
      </div>
    </section>
  )
}

export { aboutFunction };