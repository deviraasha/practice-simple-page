import React from "react";
import { FlipWords } from "./FlipWords";
import { motion } from "motion/react";

function HeroText() {
  const wording = ["Learn", "New", "Code"];
  const variant = {
    initial: { opacity: 0, x: -50 },
    animate: { opacity: 1, x: 0 },
  };
  return (
    <div className="z-10 mt-20 text-center md:mt-40 md:text-left rounded-2xl bg-clip-text">
      {/* Desktop View */}
      <div className="flex-col hidden md:flex c-space">
        <motion.h1
          className="text-4xl font-medium"
          variants={variant}
          initial="initial"
          animate="animate"
          transition={{ delay: 1 }}
        >
          Hi, i'm Asha
        </motion.h1>
        <div className="flex flex-col items-start">
          <motion.p
            className="text-5xl font-medium text-neutral-300"
            variants={variant}
            initial="initial"
            animate="animate"
            transition={{ delay: 1.3 }}
          >
            Practice makes perfect
          </motion.p>
          <motion.div
            variants={variant}
            initial="initial"
            animate="animate"
            transition={{ delay: 1.5 }}
          >
            <FlipWords
              words={wording}
              className="font-black text-white text-8xl"
            />
          </motion.div>
          <motion.p
            className="text-4xl font-medium text-neutral-300"
            variants={variant}
            initial="initial"
            animate="animate"
            transition={{ delay: 1.7 }}
          >
            web solution
          </motion.p>
        </div>
      </div>
      {/* Mobile View  */}
      <div className="flex flex-col space-y-4 md:hidden">
        <motion.p
          className="text-2xl font-medium"
          variants={variant}
          initial="initial"
          animate="animate"
          transition={{ delay: 1 }}
        >
          Hi, I'm Asha
        </motion.p>
        <div>
          <motion.p
            className="text-3xl font-black text-neutral-300"
            variants={variant}
            initial="initial"
            animate="animate"
            transition={{ delay: 1.3 }}
          >
            Practice makes perfect
          </motion.p>
          <motion.div
            variants={variant}
            initial="initial"
            animate="animate"
            transition={{ delay: 1.5 }}
          >
            <FlipWords
              words={wording}
              className="font-bold text-white text-7xl"
            />
          </motion.div>
          <motion.p
            className="text-4xl font-black text-neutral-300"
            variants={variant}
            initial="initial"
            animate="animate"
            transition={{ delay: 1.7 }}
          >
            Web Applications
          </motion.p>
        </div>
      </div>
    </div>
  );
}

export default HeroText;
