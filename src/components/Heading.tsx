import React from "react";
import { motion } from "framer-motion";
import Chevron from "./Chevron";

const Heading = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => {
  return (
    <div className="w-full mx-auto gt flex flex-col  relative overflow-hidden">
      <div className="py-4 px-2  flex flex-col items-center">
        <div className="relative w-full flex items-center justify-center">
          <Chevron />
          <h1 className="text-xl font-bold text-yellow-400 lg:text-4xl z-10">
            {title}
          </h1>
        </div>

        <motion.div
          id={title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 2 }}
          className="w-full pt-10"
        >
          {children}
        </motion.div>
      </div>
    </div>
  );
};

export default Heading;
