import H1 from "@/components/(globalComponents)/H1";

export default async function ClubGallery() {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL;

  const res = await fetch(`${baseUrl}/gallery`, { cache: "no-store" });
  let gallery = await res.json().catch(() => null);

  if (!Array.isArray(gallery)) gallery = [];

  return (
    <div className="flex flex-col items-center mt-10">
      <H1 className="text-white text-xl mb-6">NIGHT CLUB GALLERY</H1>

      <div
        className="
        grid 
        grid-cols-2 
        sm:grid-cols-3 
        md:grid-cols-4 
        lg:grid-cols-[repeat(auto-fit,minmax(200px,1fr))]
        gap-4 
        w-full
      "
      >
        {gallery.map((img) => (
          <img
            key={img.id}
            src={`${baseUrl}${img.asset?.url}`}
            alt={img.asset?.alt || "Gallery image"}
            className="
              w-full 
              h-auto 
              object-cover 
              rounded
              lg:h-40   /* behold desktop-højde */
            "
          />
        ))}
      </div>
    </div>
  );
}
