"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import BookTableBtn from "@/components/(B_ForsideComponents)/(1_Hero)/BookTableBtn";
import ViewEventBtn from "@/components/(B_ForsideComponents)/(1_Hero)/ViewEventBtn";

const DURATION = 1.1;
const EASE = [0.56, 0, 0.24, 1];

const Hero = () => {
  const [bgImage, setBgImage] = useState("/hero/header_bg_1.jpg");

  useEffect(() => {
    const randomImg = Math.random() > 0.5 ? "/hero/header_bg_1.jpg" : "/hero/header_bg_2.jpg";
    setBgImage(randomImg);
  }, []);

  return (
    <section className="max-w-[2200px] mx-auto relative w-full pt-20 h-[47rem] md:h-[28rem] lg:h-[36rem] bg-black overflow-hidden">
      <div className="absolute inset-0 bg-black/70 z-10" />

      <Image src={bgImage} alt="Night Club" fill className="object-cover" priority />

      <div className="relative z-20 flex flex-col items-center justify-center h-full gap-2">
        <div className="overflow-hidden">
          <motion.div initial={{ y: "-100%" }} animate={{ y: "0%" }} transition={{ duration: DURATION, ease: EASE, delay: 0 }}>
            <Image src="/icon/Logo.svg" alt="Logo" width={700} height={150} priority />
          </motion.div>
        </div>

        <div className="overflow-hidden">
          <motion.div className="flex flex-col items-center gap-2" initial={{ y: "-100%" }} animate={{ y: "0%" }} transition={{ duration: DURATION, ease: EASE, delay: DURATION + 0.002 }}>
            <Image src="/hero/hagt.svg" alt="Have a good time" width={590} height={20} />
            <Image src="/bottom_line.png" alt="Bottom line" width={500} height={20} />
          </motion.div>
        </div>

        <motion.div className="flex flex-row items-center gap-6 mt-6" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: DURATION, ease: EASE, delay: DURATION * 2 }}>
          <ViewEventBtn href="/Event" />
          <BookTableBtn href="/BookTable" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
