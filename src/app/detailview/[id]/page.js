import Detailview from "@/components/(EventsPage components)/Detailview";
import { Suspense } from "react";
import Navigation from "@/components/(globalComponents)/Navigation";

export default async function EventDetailPage({ params }) {
  const { slug } = await params;

  console.log("slug:", slug);
  console.log("event:", event);

  return (
    <main className="bg-black min-h-screen">
      <Navigation />
      <Suspense fallback={<div className="text-white p-8">Indlæser event...</div>}>
        <Detailview slug={slug} />
      </Suspense>
    </main>
  );
}
