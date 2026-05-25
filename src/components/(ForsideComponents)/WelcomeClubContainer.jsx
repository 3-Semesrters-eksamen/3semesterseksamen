"use client";
import WelcomeClubCard from "@/components/(ForsideComponents)/WelcomeClubCard";

export default function WelcomeClub() {
  return (
    <div className="flex flex-col items-center py-16 w-full">
      <h2 className="text-white text-2xl font-bold tracking-widest mb-6">WELCOME IN NIGHTCLUB</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-[1200px] px-4 mx-auto">
        <WelcomeClubCard image="/contentImg/thumb1.jpg" title="Welcome to Our Club" text="Discover the best club experience!" />
        <WelcomeClubCard image="/contentImg/reastaurant_1.jpg" title="Our Restaurant" text="Enjoy delicious food and drinks!" />
        <WelcomeClubCard image="/contentImg/thumb2.jpg" title="Join Us" text="Become a member and get exclusive benefits!" />
      </div>
    </div>
  );
}
