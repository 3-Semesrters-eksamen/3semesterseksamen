import Detailview from "@/components/(EventsPage components)/Detailview";
import { Suspense } from "react";
import Navigation from "@/components/(globalComponents)/Navigation";
import CommentContainer from "@/components/(EventsPage components)/CommentContainer";

export default async function EventDetailPage({ params }) {
  const { slug } = await params;

  console.log("slug:", slug);

  return (
    <main className="bg-black min-h-screen">
      <Navigation />
      <Suspense fallback={<div className="text-white p-8">Indlæser event...</div>}>
        <Detailview slug={slug} />
        <CommentContainer />
      </Suspense>
    </main>
  );
}
