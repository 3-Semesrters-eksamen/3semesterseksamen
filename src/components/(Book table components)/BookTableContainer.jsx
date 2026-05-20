import ReserveTable from "./ReserveTable";
import LilleHero from "@/components/(globalComponents)/LilleHero";

export default function BookTableContainer() {
  return (
    <div className=" bg-[#111]">
      <div>
        <LilleHero className="text-3xl md:text-5xl">BOOK A TABLE</LilleHero>
async function getEvent(eventId) {
  try {
    const res = await fetch(`https://mmd-b7-reservations.netlify.app/events/${eventId}`, { cache: "no-store" });
    if (!res.ok) return null;
    return await res.json();
  } catch {
    return null;
  }
}

async function getOccupiedTables(date) {
  try {
    const res = await fetch(`https://mmd-b7-reservations.netlify.app/reservations?date=${date}`, { cache: "no-store" });
    if (!res.ok) return [];
    const data = await res.json();
    return Array.isArray(data) ? data.map((r) => parseInt(r.table)) : [];
  } catch {
    return [];
  }
}
//CHECK OP PÅ HVORDAN DET DER EVENT SKAL FUNGERE//
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
      <div className="flex items-center justify-center pt-10 pb-2">
        <H1 className="text-white text-xl mb-6">BOOK TABLE</H1>
      </div>

      {/* ReserveTable is a client component — holds state for selected table */}
      <ReserveTable event={event} initialOccupied={initialOccupied} />
    </div>
  );
}
