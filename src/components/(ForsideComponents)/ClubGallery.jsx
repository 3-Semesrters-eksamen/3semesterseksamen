import H1 from "@/components/(globalComponents)/H1";

export default async function ClubGallery() {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL;

  const res = await fetch(`${baseUrl}/gallery`, { cache: "no-store" });
  let gallery = await res.json().catch(() => null);

  // Sikring mod API-fejl
  if (!Array.isArray(gallery)) gallery = [];

  return (
    <div className="flex flex-col items-center mt-10">
      <H1 className="text-white text-xl mb-6">NIGHT CLUB GALLERY</H1>

      <div className="grid grid-rows-2 grid-flow-col auto-cols-max w-full overflow-hidden">
        {gallery.map((img) => (
          <img key={img.id} src={`${baseUrl}${img.asset?.url}`} alt={img.asset?.alt || "Gallery image"} className="h-40 object-cover" />
        ))}
      </div>
    </div>
  );
}
