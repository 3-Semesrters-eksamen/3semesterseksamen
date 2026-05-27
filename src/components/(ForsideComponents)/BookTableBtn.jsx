"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function BookTableBtn() {
  const router = useRouter();

  return (
    <motion.button className="relative px-8 py-4 text-white font-normal tracking-widest uppercase text-sm overflow-hidden bg-fuchsia-600 shadow-md transition" whileHover="hover" whileTap={{ scale: 0.97 }} onClick={() => router.push("/BookTable")}>
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-pink-500 to-fuchsia-600 "
        variants={{
          hover: { opacity: 0.3 },
        }}
        initial={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      />
      <span className="relative z-10">BOOK TABLE</span>
    </motion.button>
  );
}
