"use client";

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type Card = {
  image: string;
  caption?: string;
};

const ImageTile = ({ cards }: { cards: Card[] }) => {
  const [index, setIndex] = useState(0);
  const [selectedCard, setSelectedCard] = useState<Card | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % cards.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [cards.length]);

  return (
    <div className="fixed left-2/7 top-1/2 -translate-y-1/2 -translate-x-1/2 z-50 pointer-events-none">
      <div className="bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 shadow-xl p-4 w-[400px] h-[650px] pointer-events-auto overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.img
            key={cards[index].image}
            src={cards[index].image}
            alt={`Photo ${index + 1}`}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.02 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            className="w-full h-full object-cover object-top rounded-xl cursor-pointer"
            onClick={() => setSelectedCard(cards[index])}
          />
        </AnimatePresence>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedCard && (
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-[999]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCard(null)}
          >
            <motion.div
              className="bg-white rounded-lg p-6 max-w-sm text-center shadow-lg"
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedCard.image}
                alt="Selected"
                className="w-full h-72 object-cover object-top rounded-md mb-4"
              />
              <p className="text-gray-800">{selectedCard.caption}</p>
              <button
                onClick={() => setSelectedCard(null)}
                className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition pointer-events-auto"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ImageTile;
