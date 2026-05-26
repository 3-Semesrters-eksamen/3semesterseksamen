import ReserveTable from "./ReserveTable";
import LilleHero from "@/components/(globalComponents)/LilleHero";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

async function getEvent(eventId) {
  try {
    const res = await fetch(`${API_URL}/events/${eventId}`, { cache: "no-store" });
    if (!res.ok) return null;
    return await res.json();
  } catch {
    return null;
  }
}

export default async function BookTableContainer({ searchParams }) {
  const params = await searchParams;
  const eventId = params?.eventId ? parseInt(params.eventId) : null;
  const event = eventId ? await getEvent(eventId) : null;

  return (
    <div className="bg-[#111] min-h-screen">
      <div className="pt-10">
        <LilleHero className="text-3xl md:text-5xl">BOOK A TABLE</LilleHero>
      </div>
      <ReserveTable event={event} eventId={eventId} apiUrl={process.env.NEXT_PUBLIC_API_URL} />
    </div>
  );
}
