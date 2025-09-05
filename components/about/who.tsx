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
        transition={{ duration: 0.6, ease: "easeInOut" }}
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
      "I’m Aryan — CS grad (cum laude) from VU Amsterdam, originally from India. I left MIT Manipal to chase something messier: growth that doesn’t come with a syllabus. These past few years in 🇳🇱 taught me how to unlearn, adapt, crash, rebuild — and trust the itch that says ‘there’s more.’"
  },
  {
    title: " What I Do",
    content:
      "I’ve built backend systems at Orq.ai, led an AI project that won best project at NAHSS, and pitched globally through Huawei’s Seeds for the Future. Also hosted workshops, co-founded a student org, and learned to lead beyond just code. TL;DR: I ship, I pitch, I break stuff (then fix it better)."
  },
  {
    title: " What I Believe",
    content:
      "Success isn’t a checklist it’s a compass. I believe in chasing energy, taking uncomfortable paths, and learning by building. We’ve only got ~4,000 weeks on this planet. I want mine to spark something real for me, and for the people I build with."
  },
  {
    title: " Right Now?",
    content:
      "Just wrapped up my degree and I’m on a Dutch search year visa. Looking for a full-time role in software, AI, or growth — or to join a scrappy, early-stage startup where I can build with purpose. Open to collabs, co-founders, or anyone figuring sh*t out in public."
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