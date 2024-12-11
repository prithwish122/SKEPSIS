"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LinkedinIcon as LinkedIn } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface TeamMember {
  name: string;
  role: string;
  description: string;
  linkedin: string;
  imageUrl: string;
}

interface TeamCardProps {
  members: TeamMember[];
}

export function MemberCard({ members }: TeamCardProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const getVisibleMembers = () => {
    const total = members.length;
    return [
      members[(currentIndex - 2 + total) % total],
      members[(currentIndex - 1 + total) % total],
      members[currentIndex],
      members[(currentIndex + 1) % total],
      members[(currentIndex + 2) % total],
    ];
  };

  const visibleMembers = getVisibleMembers();

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % members.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [members.length]);

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + members.length) % members.length);
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % members.length);
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto mt-16 md:mt-32">
      <div className="bg-white w-full rounded-[48px] p-8 md:p-16 relative shadow-lg">
        {/* Hexagons */}
        {[0, 1, 3, 4].map((index) => (
          <TooltipProvider key={index}>
            <Tooltip>
              <TooltipTrigger asChild>
                <motion.div
                  className={`absolute ${
                    index < 2 ? "left-4 md:left-16" : "right-4 md:right-16"
                  } ${
                    index % 2 === 0 ? "top-1/3" : "bottom-1/3"
                  } cursor-pointer hidden sm:block`}
                  onClick={() => setCurrentIndex((currentIndex + index - 2 + members.length) % members.length)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <div className="w-16 md:w-20 h-16 md:h-20 border-2 border-gray-300 rounded-[24px] relative overflow-hidden shadow-md">
                    <img
                      src={visibleMembers[index].imageUrl}
                      alt={visibleMembers[index].name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </motion.div>
              </TooltipTrigger>
              <TooltipContent>
                <p>{visibleMembers[index].name}</p>
                <p className="text-xs text-muted-foreground">{visibleMembers[index].role}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        ))}

        {/* Main Circle */}
        <motion.div
          className="absolute  -top-12 transform -translate-x-1/2 z-10"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ duration: 0.45 }}
        >
          <div className="w-28 h-28 md:w-36 md:h-36 border-4 border-blue-500 rounded-full mx-auto overflow-hidden shadow-lg">
            <img
              src={visibleMembers[2].imageUrl}
              alt={visibleMembers[2].name}
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        {/* Main Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            className="text-center max-w-xl mx-auto pt-20"
            initial={{ x: direction * 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: direction * -50, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-2xl font-bold mb-2">{visibleMembers[2].name}</h3>
            <p className="text-gray-600 mb-4">{visibleMembers[2].role}</p>
            <div className="text-gray-600 px-5 text-sm leading-relaxed text-center h-28 overflow-hidden mb-4">
              {visibleMembers[2].description}
            </div>
            <a
              href={visibleMembers[2].linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-blue-500 hover:underline"
            >
              <LinkedIn className="w-5 h-5" />
              View LinkedIn
            </a>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Buttons */}
      <div className="flex items-center justify-between absolute top-1/2 w-full px-4 transform -translate-y-1/2">
        <button
          onClick={handlePrev}
          className="w-8 h-8 md:w-10 md:h-10 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300"
        >
          ‹
        </button>
        <button
          onClick={handleNext}
          className="w-8 h-8 md:w-10 md:h-10 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300"
        >
          ›
        </button>
      </div>
    </div>
  );
}
