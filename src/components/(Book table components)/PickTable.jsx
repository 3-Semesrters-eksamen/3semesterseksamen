"use client";

// table_1.png: 4-seat cross   → 1, 2, 4, 6, 7, 9, 11, 12, 14
// table_2.png: 6-seat rect     → 3, 8, 13
// table_3.png: 8-seat large    → 5, 10, 15

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

export default function PickTable({ onSelectTable }) {
  const tables = Array.from({ length: 15 }, (_, i) => i + 1);

  return (
    <div className="min-h-screen w-full bg-[#0d0d0d] flex flex-col">
      {/* Table grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-10 lg:gap-12 w-full max-w-1400px mx-auto px-6 sm:px-10 lg:px-20 py-14">
        {tables.map((id) => (
          <button key={id} className="relative flex items-center justify-center bg-transparent border-none p-0 cursor-pointer transition-transform duration-150 hover:scale-110 hover:brightness-150" onClick={() => onSelectTable?.(id)} aria-label={`Book table ${id}`}>
            <img src={`/table/${TABLE_IMAGE_MAP[id]}`} alt={`Table ${id}`} className="w-full h-auto object-contain block" />
            <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-sm font-bold font-mono tracking-wide pointer-events-none drop-shadow-md">{id}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
