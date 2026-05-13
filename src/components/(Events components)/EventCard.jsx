import Image from "next/image";
import Button from "@/components/(globalComponents)/Btn";

const EventCard = ({ event, title, date, scene, description, image, imageLeft = true }) => {
  return (
    <article className="flex flex-col lg:flex-row lg:even:flex-row-reverse">
      {/* Billede */}
      <div className="relative w-full lg:w-1/2 aspect-video lg:aspect-auto lg:min-h-[400px]">
        <Image src={image} alt={title} fill className="object-cover" />
      </div>
      {/* Tekst */}
      <div
        className={`w-full lg:w-1/2 p-6 lg:p-12 flex flex-col justify-center bg-black
        ${imageLeft ? "lg:order-2" : "lg:order-1"}`}
      >
        <h2 className="text-white text-xl lg:text-2xl font-bold tracking-widest mb-3">{title}</h2>
        <p className="text-pink-500 text-sm tracking-widest mb-1">
          {date} <span className="text-white">| {scene}</span>
        </p>
        <p className="text-gray-300 text-sm leading-relaxed mt-4 mb-8">{description}</p>

        <div className="w-fit">{/* <Button href={`/detailview/${event.slug}`} label="READ MORE" /> */}</div>
      </div>
    </article>
  );
};

export default EventCard;
