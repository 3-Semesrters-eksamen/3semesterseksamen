import PinkFrame from "@/components/(H_GlobalComponents)/PinkFrame";

const WelcomeClubCard = ({ image, title, text, icon: Icon, iconImage }) => {
  return (
    <div className="group relative w-full h-[320px] sm:h-[380px] lg:h-[460px] overflow-hidden shadow-md cursor-pointer">
      <img src={image} alt={title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />

      <div className="absolute inset-0 z-20 opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none">
        <PinkFrame />
      </div>

      <div className="absolute inset-0 z-10 bg-black/90 flex flex-col justify-center items-center text-center p-6 gap-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        {Icon && <Icon className="w-16 h-16 text-nightclub-pink text-5xl p-3 border-2 border-nightclub-pink rounded-lg bg-transparent" />}
        {iconImage && <img src={iconImage} alt="Icon" className="w-16 h-16 p-3 border-2 border-nightclub-pink rounded-lg bg-transparent object-contain" />}
        <h3 className="text-white text-xl font-bold uppercase scale-50 group-hover:scale-80 opacity-0 group-hover:opacity-100 transition-all duration-1000">{title}</h3>
        <p className="text-white/90 text-sm opacity-0 group-hover:opacity-100 translate-x-10 group-hover:translate-x-0 transition-all duration-700 delay-200">{text}</p>
      </div>
    </div>
  );
};

export default WelcomeClubCard;
