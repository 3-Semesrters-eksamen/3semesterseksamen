"use client";
import { useState, useEffect } from "react";
import PickTable from "./PickTable";
import ReserveForm from "./ReserveForm";

export default function ReserveTable({ event, initialOccupied = [] }) {
  const [selectedTable, setSelectedTable] = useState(null);
  const [occupiedTables, setOccupiedTables] = useState(initialOccupied);

  // Pre-select table from URL param e.g. ?table=3
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const t = params.get("table");
    if (t) setSelectedTable(parseInt(t));
  }, []);

  const handleSelectTable = (id) => {
    setSelectedTable(id);
    // On mobile, scroll down to the form
    if (window.innerWidth < 768) {
      document.getElementById("reserve-form-section")?.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Called by ReserveForm when a 409 or client-side conflict is detected
  const handleTableConflict = (tableId) => {
    setOccupiedTables((prev) => (prev.includes(tableId) ? prev : [...prev, tableId]));
    setSelectedTable(null);
  };

  const eventDate = event?.date ?? null;
  const eventId = event?.id ?? null;

  return (
    <div>
      {/* Event badge */}
      {event && (
        <div className="mx-6 sm:mx-10 lg:mx-20 mb-4 px-4 py-3 border border-[#c9a84c]/30 bg-[#c9a84c]/5 rounded font-mono">
          <span className="text-[#c9a84c] text-[10px] tracking-[0.2em] uppercase block mb-0.5">Event</span>
          <span className="text-[#e8d080] font-semibold block">{event.name || event.title}</span>
          {event.date && (
            <span className="text-[#666] text-[12px] block mt-0.5">
              {new Date(event.date).toLocaleDateString("en-GB", {
                weekday: "long",
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </span>
          )}
        </div>
      )}

      {/* Table picker */}
      <PickTable onSelectTable={handleSelectTable} selectedTable={selectedTable} occupiedTables={occupiedTables} />

      {/* Selection hint */}
      <p className="text-center text-[12px] font-mono text-[#555] mb-8 px-4">{selectedTable ? `✓ Table ${selectedTable} selected — fill in your details below` : "Click a table above to select it"}</p>

      {/* Reservation form */}
      <div id="reserve-form-section" className="max-w-2xl mx-auto px-6 sm:px-10 pb-20">
        <p className="text-white font-mono font-bold text-sm tracking-[0.2em] mb-6 uppercase">Book a Table</p>
        <ReserveForm selectedTable={selectedTable} eventId={eventId} eventDate={eventDate} onTableConflict={handleTableConflict} />
      </div>
    </div>
  );
}
