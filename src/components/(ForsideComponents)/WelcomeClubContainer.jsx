"use client";
import WelcomeClubCard from "@/components/(ForsideComponents)/WelcomeClubCard";
import H1 from "@/components/(globalComponents)/H1";

export default function WelcomeClub() {
  return (
    <div className="flex flex-col items-center mt-10">
      <H1 className="text-white text-xl mb-6">WELCOME IN NIGHTCLUB</H1>
      <div className="flex flex-col md:flex-row gap-4 p-4 w-full max-w-7xl mx-auto">
        <WelcomeClubCard image="/contentImg/thumb1.jpg" title="Welcome to Our Club" text="Discover the best club experience!" />
        <WelcomeClubCard image="/contentImg/reastaurant_1.jpg" title="Our Restaurant" text="Enjoy delicious food and drinks!" />
        <WelcomeClubCard image="/contentImg/thumb2.jpg" title="Join Us" text="Become a member and get exclusive benefits!" />
      </div>
    </div>
  );
}
