import { Suspense } from "react";
import Detailview from "@/components/(EventsPage components)/Detailview";
import Navigation from "@/components/(globalComponents)/Navigation";

export default async function EventDetailPage({ params }) {
  const { id } = await params;

  return (
    <main>
      <Navigation />
      <Suspense fallback={<div className="p-4">Indlæser event...</div>}>
        <Detailview id={id} />
      </Suspense>
    </main>
  );
}
