"use client";
import { useState, useEffect } from "react";
import PickTable from "./PickTable";
import ReserveForm from "./ReserveForm";

export default function ReserveTable({ event, eventId, apiUrl }) {
  const [selectedTable, setSelectedTable] = useState(null);
  const [occupiedTables, setOccupiedTables] = useState([]);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const t = params.get("table");
    if (t) setSelectedTable(parseInt(t));
  }, []);

  useEffect(() => {
    if (!eventId) return;
    fetch(`${apiUrl}/reservations?eventId=${eventId}`)
      .then((res) => res.json())
      .then((data) => {
        const occupied = Array.isArray(data) ? data.map((r) => parseInt(r.table)) : [];
        setOccupiedTables(occupied);
      })
      .catch(() => {});
  }, [eventId]);

  const handleDatePick = async (dateStr) => {
    if (!dateStr) return;
    try {
      const res = await fetch(`${apiUrl}/reservations?date=${dateStr}`);
      if (!res.ok) return;
      const data = await res.json();
      const occupied = Array.isArray(data) ? data.map((r) => parseInt(r.table)) : [];
      setOccupiedTables(occupied);
      if (selectedTable && occupied.includes(selectedTable)) {
        setSelectedTable(null);
      }
    } catch {}
  };

  const handleSelectTable = (id) => {
    setSelectedTable(id);
    if (window.innerWidth < 768) {
      document.getElementById("reserve-form-section")?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleTableConflict = (tableId) => {
    setOccupiedTables((prev) => (prev.includes(tableId) ? prev : [...prev, tableId]));
    setSelectedTable(null);
  };

  const eventDate = event?.date ?? null;

  return (
    <div>
      {event && (
        <div className="mx-6 sm:mx-10 lg:mx-20 mb-4 px-4 py-3 border border-[#c9a84c]/30 bg-[#c9a84c]/5 rounded">
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

      <PickTable onSelectTable={handleSelectTable} selectedTable={selectedTable} occupiedTables={occupiedTables} />

      <p className="text-center text-[12px]  text-[#555] mb-8 px-4">{selectedTable ? `✓ Table ${selectedTable} selected — fill in your details below` : "Click a table above to select it"}</p>

      <div id="reserve-form-section" className="max-w-2xl mx-auto px-6 sm:px-10 pb-20">
        <p className="text-white  font-bold text-sm tracking-[0.2em] mb-6 uppercase">Book a Table</p>
        <ReserveForm selectedTable={selectedTable} eventId={eventId} eventDate={eventDate} onTableConflict={handleTableConflict} onDatePick={!eventId ? handleDatePick : undefined} apiUrl={apiUrl} />
      </div>
    </div>
  );
}
