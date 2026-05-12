import EventCard from "./EventCard";
import Link from "next/link";

const EventsList = ({ events, currentPage, totalPages }) => {
  return (
    <section className="bg-black">
      {events.map((event) => (
        <EventCard key={event.id} id={event.id} title={event.title} date={event.date} location={event.location} excerpt={event.excerpt} image={`${process.env.NEXT_PUBLIC_API_URL}${event.asset.url}`} />
      ))}

      <div className="flex items-center justify-center gap-3 py-12 text-white text-sm tracking-widest">
        {currentPage === totalPages && (
          <Link href={`/Event?page=${currentPage - 1}`} className="hover:text-pink-500">
            &lt; tilbage
          </Link>
        )}

        {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
          <Link key={pageNum} href={`/Event?page=${pageNum}`} className={`hover:text-pink-500 ${currentPage === pageNum ? "text-pink-500" : ""}`}>
            {pageNum}
          </Link>
        ))}

        {currentPage < totalPages && (
          <Link href={`/Event?page=${currentPage + 1}`} className="hover:text-pink-500">
            næste &gt;
          </Link>
        )}
      </div>
    </section>
  );
};

export default EventsList;
