import Image from "next/image";
import Button from "@/components/(globalComponents)/Btn";

const Detailview = async ({ slug }) => {
  const eventRes = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/events/${slug}`);
  const event = await eventRes.json();

  const commentsRes = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/comments?eventId=${event.id}`);
  const comments = await commentsRes.json();

  if (!event) return <p className="text-white">Event ikke fundet</p>;

  return (
    <article className="text-white" style={{ backgroundImage: "url('/backgrounds/pattern_bg.jpg')" }}>
      <div className="relative w-full h-64 lg:h-[500px]">
        <Image src={`${process.env.NEXT_PUBLIC_API_URL}${event.heroAsset.url}`} alt={event.heroAsset.alt} fill className="object-cover brightness-75" />
      </div>

      <div className="container-base py-12">
        <h1 className="text-2xl lg:text-3xl font-bold tracking-widest mb-2">{event.title}</h1>
        <p className="text-pink-500 text-sm tracking-widest mb-8">
          {new Date(event.date).toLocaleDateString("en-US", { month: "short", day: "numeric" })} · {new Date(event.date).toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" })}
          <span className="text-white ml-2">| {event.location}</span>
        </p>

        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-2/3">
            <p className="text-gray-300 text-sm leading-relaxed mb-6">{event.description}</p>
            <p className="text-pink-500 text-xs tracking-widest uppercase mb-1">Important</p>
            <p className="text-gray-300 text-sm">To enter: {event.ageLimit}</p>

            <div className="flex gap-4 mt-8">
              <Button href={`/BookTable?eventId=${event.id}`} label="BOOK NOW" />
              <Button href="/Event" label="BACK TO EVENTS" />
            </div>
          </div>

          <div className="lg:w-1/3 flex flex-col gap-6">
            <div>
              <p className="text-pink-500 text-xs tracking-widest uppercase mb-2">Location</p>
              <p className="text-gray-300 text-sm">{event.location}</p>
            </div>
            <div>
              <p className="text-pink-500 text-xs tracking-widest uppercase mb-2">Opening Hours</p>
              <p className="text-gray-300 text-sm">Doors: {new Date(event.doorsOpen).toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" })}</p>
              <p className="text-gray-300 text-sm">Event start: {new Date(event.date).toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" })}</p>
            </div>
            <div>
              <p className="text-pink-500 text-xs tracking-widest uppercase mb-2">Price</p>
              <p className="text-gray-300 text-sm">{event.price}</p>
            </div>
            <div>
              <p className="text-pink-500 text-xs tracking-widest uppercase mb-2">Category</p>
              <p className="text-gray-300 text-sm">{event.category}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Kommentarer */}
      <div className="container-base py-12">
        <h2 className="text-2xl font-bold tracking-widest mb-8">{comments.length} COMMENTS</h2>

        {comments.map((comment) => (
          <div key={comment.id} className="border-b border-gray-800 py-6">
            <p className="text-white font-bold mb-1">
              {comment.name}
              <span className="text-pink-500 font-normal text-xs ml-2">Posted {new Date(comment.date).toLocaleDateString("en-US", { day: "2-digit", month: "short", year: "numeric" })}</span>
            </p>
            <p className="text-gray-300 text-sm leading-relaxed">{comment.content}</p>
          </div>
        ))}

        {comments.length === 0 && <p className="text-gray-500 text-sm">Ingen kommentarer endnu.</p>}
      </div>
    </article>
  );
};

export default Detailview;
