import Image from "next/image";

const Hero = () => {
  return (
    <main>
      <Image src="/hero/header_bg_1.jpg" alt="Events" fill className="object-cover w-[300px] h-[300px]" />
      <Image src="/hero/header_bg_2.jpg" alt="Events" fill className="object-cover w-[300px] h-[300px]" />
      <Image src="/hero/hagt.svg" alt="Events" fill className="object-cover w-[300px] h-[300px]" />
      <Image src="/icon/Logo.svg" alt="Events" fill className="object-cover w-[300px] h-[300px]" />
      <Image src="/bottom_line.png" alt="Events" fill className="object-cover w-[300px] h-[300px]" />
    </main>
  );
};

export default Hero;
