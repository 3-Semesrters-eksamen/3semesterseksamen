"use client";

import Image from "next/image";
import { useState } from "react";

const Hero = () => {
  const [bgImage] = useState(() => (Math.random() > 0.5 ? "/hero/header_bg_1.jpg" : "/hero/header_bg_2.jpg"));

  return (
    <section className="relative w-full h-screen">
      <Image src={bgImage} alt="Night Club" fill className="object-cover" priority />

      <div className="relative z-10 flex flex-col items-center justify-center h-full gap-6">
        <div className="relative w-48 lg:w-64 h-24 lg:h-32">
          <Image src="/icon/Logo.svg" alt="Night Club" fill className="object-contain" />
        </div>

        <div className="relative w-48 lg:w-64 h-8">
          <Image src="/hero/hagt.svg" alt="Have a good time" fill className="object-contain" />
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full">
        <Image src="/bottom_line.png" alt="" width={1920} height={10} className="w-full" />
      </div>
    </section>
  );
};

export default Hero;
