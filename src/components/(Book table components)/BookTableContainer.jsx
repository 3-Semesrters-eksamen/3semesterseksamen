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

async function getOccupiedTables(date) {
  try {
    const res = await fetch(`${API_URL}/reservations?date=${date}`, { cache: "no-store" });
    if (!res.ok) return [];
    const data = await res.json();
    return Array.isArray(data) ? data.map((r) => parseInt(r.table)) : [];
  } catch {
    return [];
  }
}

export default async function BookTableContainer({ searchParams }) {
  const params = await searchParams;
  const eventId = params?.eventId ? parseInt(params.eventId) : null;

  let event = null;
  let initialOccupied = [];

  if (eventId) {
    event = await getEvent(eventId);
    if (event?.date) {
      const dateStr = new Date(event.date).toISOString().split("T")[0];
      initialOccupied = await getOccupiedTables(dateStr);
    }
  }

  return (
    <div className="bg-[#111] min-h-screen">
      <div className="pt-10">
        <LilleHero className="text-3xl md:text-5xl">BOOK A TABLE</LilleHero>
      </div>
      <ReserveTable event={event} initialOccupied={initialOccupied} />
    </div>
  );
}
