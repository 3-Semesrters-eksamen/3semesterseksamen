import PinkFrame from "@/components/(globalComponents)/PinkFrame";

const WelcomeClubCard = ({ image, title, text }) => {
  return (
    <div className="group relative flex-1 h-[400px] overflow-hidden rounded-xl shadow-md cursor-pointer">
      {/* Billedet (Bunden) */}
      <img src={image} alt={title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />

      {/* PinkFrame */}
      <div className="absolute inset-0 z-9 opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none">
        <PinkFrame />
      </div>

      {/* Tekst Overlay */}
      <div className="absolute inset-0 z-9 bg-black/50 flex flex-col justify-center items-center text-center p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <h3 className="text-white text-xl font-bold uppercase">{title}</h3>
        <p className="text-white/90 text-sm mt-2">{text}</p>
      </div>
    </div>
  );
};

export default WelcomeClubCard;
