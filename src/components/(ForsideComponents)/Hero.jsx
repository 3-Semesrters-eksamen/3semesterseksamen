"use client";
import Image from "next/image";
import { useState } from "react";
import BookTableBtn from "@/components/(ForsideComponents)/BookTableBtn";
import Logo from "@/components/(globalComponents)/Logo";
const Hero = () => {
  const [bgImage] = useState(() => (Math.random() > 0.5 ? "/hero/header_bg_1.jpg" : "/hero/header_bg_2.jpg"));
  return (
    <section className="relative w-full pt-20 h-[47rem] md:h-[28rem] lg:h-[36rem] bg-black">
      <Image src={bgImage} alt="Night Club" fill className="object-cover" priority />
      <div className="relative z-10 flex flex-col items-center justify-center h-full">
        <Logo />
      </div>
      <BookTableBtn />
    </section>
  );
};
export default Hero;
