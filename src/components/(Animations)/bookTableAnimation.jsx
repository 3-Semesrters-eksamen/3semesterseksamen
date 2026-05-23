"use client";

import { motion } from "framer-motion";

export default function BookTableBtn() {
  return (
    <motion.button className="relative px-10 py-4 text-white font-semibold tracking-widest uppercase text-sm overflow-hidden bg-fuchsia-600" whileHover="hover" whileTap={{ scale: 0.97 }}>
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-pink-500 to-fuchsia-600"
        variants={{
          hover: { opacity: 0.3 }, // 👈 Skift denne værdi
        }}
        initial={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      />
      <span className="relative z-10">Book Table</span>
    </motion.button>
  );
}
