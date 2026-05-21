"use client";

const TABLE_IMAGE_MAP = {
  1: "table_1.png",
  2: "table_1.png",
  3: "table_2.png",
  4: "table_1.png",
  5: "table_3.png",
  6: "table_1.png",
  7: "table_1.png",
  8: "table_2.png",
  9: "table_1.png",
  10: "table_3.png",
  11: "table_1.png",
  12: "table_1.png",
  13: "table_2.png",
  14: "table_1.png",
  15: "table_3.png",
};

export default function PickTable({ onSelectTable, selectedTable, occupiedTables = [] }) {
  const tables = Array.from({ length: 15 }, (_, i) => i + 1);

  return (
    <div className="w-full bg-[#0d0d0d] px-6 sm:px-10 lg:px-20 py-10">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-10 w-full mx-auto">
        {tables.map((id) => {
          const isOccupied = occupiedTables.includes(id);
          const isSelected = selectedTable === id;
          {
            /*Den tjekker om bordet er optaget eller om det er valgt.
          //  hvis bordet er optaget vil knappen deaktivere.
          //  hvis bordet er  valgt ved klik vil bordet få en ny stil.*/
          }
          return (
            <button key={id} onClick={() => !isOccupied && onSelectTable?.(id)} disabled={isOccupied} aria-label={`Table ${id}${isOccupied ? " – occupied" : isSelected ? " – selected" : ""}`} aria-pressed={isSelected} className={["relative flex items-center justify-center bg-transparent border-none p-0 transition-all duration-150", isOccupied ? "cursor-not-allowed opacity-30 grayscale" : isSelected ? "scale-110 brightness-150 cursor-pointer" : "cursor-pointer hover:scale-110 hover:brightness-150"].join(" ")}>
              {/* Den del der siger disabled=isOccupied er den der deaktiverer knappen. og så er der styling for at du trykker det valgte bord vil poppe op en smule. */}
              <img src={`/table/${TABLE_IMAGE_MAP[id]}`} alt={`Table ${id}`} className="w-full h-auto object-contain block" style={isSelected ? { filter: "sepia(1) saturate(3) hue-rotate(5deg) brightness(1.3)" } : {}} />
              {/* img er hvor bordet vises men også ud fra bordets id har en nummer der vises oven på. også at talet ikke forstyre når du klikker bordet. */}
              <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-sm font-bold font-mono tracking-wide pointer-events-none drop-shadow-md">{id}</span>
            </button>
          );
        })}
      </div>
      {/* Legend */}
      {/* Det her er bare de små linjer der fortæller hvad de forskellige typer af borde betyder */}
      <div className="flex gap-6 mt-8 justify-center text-xs font-mono text-[#666]">
        <span className="flex items-center gap-2">
          <span className="inline-block w-3 h-3 rounded-full bg-[#555]" />
          Available
        </span>
        <span className="flex items-center gap-2">
          <span className="inline-block w-3 h-3 rounded-full bg-[#ba1806] opacity-40" />
          Occupied
        </span>
        <span className="flex items-center gap-2">
          <span className="inline-block w-3 h-3 rounded-full bg-[#d89e29]" />
          Selected
        </span>
      </div>
    </div>
  );
}
