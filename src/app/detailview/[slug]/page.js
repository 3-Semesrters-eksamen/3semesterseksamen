import { Suspense } from "react";
import Navigation from "@/components/(A_NavigationComponent)/(Nav)/Navigation";
import Detailview from "@/components/(D_DetailEventComponents)/(1_EventDetails)/Detailview";
import Footer from "@/components/(G_FooterComponents)/Footer";

export default async function EventDetailPage({ params }) {
  const { slug } = await params;

  console.log("slug:", slug);

  return (
    <main className="bg-black min-h-screen">
      <Navigation />
      <Suspense fallback={<div className="text-white p-8">Indlæser event...</div>}>
        <Detailview slug={slug} />
      </Suspense>
      <Footer />
    </main>
  );
}
