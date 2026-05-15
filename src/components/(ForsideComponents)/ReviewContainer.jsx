"use client";

import { useState } from "react";
import Image from "next/image";
import { FaFacebook, FaTwitter } from "react-icons/fa";

const ReviewContainer = ({ testimonials }) => {
  const [current, setCurrent] = useState(0);

  const testimonial = testimonials[current];

  return (
    <section className="relative py-16 flex flex-col items-center text-white text-center px-6" style={{ backgroundImage: "url('/backgrounds/footerbg.jpg')", backgroundSize: "cover", backgroundPosition: "center" }}>
      <div className="absolute inset-0 bg-black/80" />

      <div className="relative z-9 flex flex-col items-center w-full">
        {/* Billede */}
        <div className="relative w-24 h-24 rounded-full overflow-hidden mb-4">
          <Image src={`${process.env.NEXT_PUBLIC_API_URL}${testimonial.asset.url}`} alt={testimonial.asset.alt} fill className="object-cover" />
        </div>

        {/* Navn */}
        <p className="text-white font-bold tracking-widest text-sm mb-4">{testimonial.name}</p>

        {/* Indhold */}
        <p className="text-gray-300 text-sm leading-relaxed max-w-2xl mb-6">{testimonial.content}</p>

        {/* SoMe ikoner */}
        <div className="flex gap-4 mb-8">
          <a href={testimonial.facebook} target="_blank" className="text-gray-400 hover:text-pink-500 transition-colors">
            <FaFacebook size={18} />
          </a>
          <a href={testimonial.twitter} target="_blank" className="text-gray-400 hover:text-pink-500 transition-colors">
            <FaTwitter size={18} />
          </a>
        </div>

        {/* Navigationsfirkanter */}
        <div className="flex gap-2">
          {testimonials.map((_, index) => (
            <button key={index} onClick={() => setCurrent(index)} className={`w-3 h-3 transition-colors duration-300 ${current === index ? "bg-pink-500" : "bg-gray-600 hover:bg-gray-400"}`} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewContainer;
