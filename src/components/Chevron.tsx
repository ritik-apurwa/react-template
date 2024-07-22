import  { useRef } from "react";
import { motion, useInView } from "framer-motion";

const Chevron = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false,    amount: 0.5 });

  const rightarrowVariants = {
    initial: {  opacity: 0, x: 0, rotate: 0 },
    animate: {
      y: 0,
      x: 100,
      rotate: 90,
      scale: 1.5,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        duration: 1,
      },
    },
  };
  const leftarrowVariants = {
    initial: { opacity: 0, x: 0, scale: 1, rotate: 0 },
    animate: {
      y: 0,
      x: -100,
      scale: 1.5,
      rotate: -90,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        duration: 1,
      },
    },
  };

  return (
    <div
      ref={ref}
      className="flex justify-between w-full max-w-7xl mx-auto absolute top-0 left-0 right-0"
    >
      <motion.div
        className=" text-4xl text-yellow-400"
        initial="initial"
        animate={isInView ? "animate" : "initial"}
        variants={rightarrowVariants}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-chevrons-up"
        >
          <path d="m17 11-5-5-5 5" />
          <path d="m17 18-5-5-5 5" />
        </svg>
      </motion.div>
      <motion.div
        className="text-4xl -rotate-90 text-yellow-400"
        initial="initial"
        animate={isInView ? "animate" : "initial"}
        variants={leftarrowVariants}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-chevrons-up"
        >
          <path d="m17 11-5-5-5 5" />
          <path d="m17 18-5-5-5 5" />
        </svg>
      </motion.div>
    </div>
  );
};

export default Chevron;
