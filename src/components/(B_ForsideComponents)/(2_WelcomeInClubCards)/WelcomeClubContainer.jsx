"use client";
import H2 from "@/components/(A_NavigationComponent)/(Titles)/H2";
import WelcomeClubCard from "@/components/(B_ForsideComponents)/(2_WelcomeInClubCards)/WelcomeClubCard";
import { PiCheersFill } from "react-icons/pi";
import { RiServiceBellLine } from "react-icons/ri";

export default function WelcomeClub() {
  return (
    <div className="flex flex-col items-center py-16 w-full">
      <H2>WELCOME IN NIGHTCLUB</H2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-[1200px] px-4 mx-auto">
        <WelcomeClubCard image="/contentImg/thumb1.jpg" title="Welcome to Our Club" text="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable." iconImage="/icon/favicon.png" />
        <WelcomeClubCard image="/contentImg/reastaurant_1.jpg" title="Our Restaurant" text="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout." icon={RiServiceBellLine} />
        <WelcomeClubCard image="/contentImg/thumb2.jpg" title="Join Us" text="Contrary to popular belief, Lorem Ipsum is not simply random text." icon={PiCheersFill} />
      </div>
    </div>
  );
}
