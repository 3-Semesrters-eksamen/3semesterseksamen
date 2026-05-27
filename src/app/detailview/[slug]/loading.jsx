export default async function EventsPage({ searchParams }) {
  // Midlertidigt delay til test — fjern bagefter
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
      <img src="/loader/madbars.gif" alt="Loading..." />
    </div>
  );
}
