"use client";
import WelcomeClubCard from "@/components/(ForsideComponents)/WelcomeClubCard";

export default function WelcomeClub() {
  return (
    <div className="flex flex-col md:flex-row gap-4 p-4 w-full max-w-7xl mx-auto">
      {/* 1. Fjern "public" og start med / */}
      <WelcomeClubCard image="/contentImg/thumb1.jpg" title="Welcome to Our Club" text="Discover the best club experience!" />
      <WelcomeClubCard image="/contentImg/reastaurant_1.jpg" title="Our Restaurant" text="Enjoy delicious food and drinks!" />
      <WelcomeClubCard image="/contentImg/thumb2.jpg" title="Join Us" text="Become a member and get exclusive benefits!" />
    </div>
  );
}
