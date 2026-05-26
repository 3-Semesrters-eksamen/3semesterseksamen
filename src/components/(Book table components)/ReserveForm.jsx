"use client";
import actionReserveTable from "@/app/actions/actionReserveTable";
import Form from "next/form";
import { useActionState, useEffect, useState } from "react";
import { IoCheckmarkCircle } from "react-icons/io5";
import Btn from "@/components/(globalComponents)/Btn";

const inputBase = "bg-transparent border-b border-[#444] text-white placeholder-[#666] text-[13px] font-mono px-0 py-3 outline-none w-full transition-colors focus:border-[#c9a84c]";
const inputErr = "bg-transparent border-b border-red-600 text-white placeholder-[#666] text-[13px] font-mono px-0 py-3 outline-none w-full";

export default function ReserveForm({ selectedTable, eventId, eventDate, onTableConflict, onDatePick }) {
  const [state, formAction, isPending] = useActionState(actionReserveTable, null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (state?.success) setShowModal(true);
    if (state?.tableConflict) onTableConflict?.(state.tableConflict);
  }, [state]);

  const errors = (field) => (state && !state.success && state.field === field ? state.message : null);

  return (
    <>
      {showModal && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 px-4">
          <div className="bg-[#111] border border-[#2a2a2a] rounded-lg p-10 max-w-sm w-full flex flex-col items-center text-center shadow-2xl">
            <IoCheckmarkCircle className="text-[#c9a84c] text-6xl mb-5" />
            <h3 className="text-white font-mono font-bold text-xl tracking-widest mb-3 uppercase">Reservation Confirmed</h3>
            <p className="text-[#888] font-mono text-sm leading-relaxed mb-8">
              Table {state?.reservedTable} has been reserved.
              <br />
              We look forward to seeing you!
            </p>
            <button onClick={() => setShowModal(false)} className="border border-[#555] text-[#ccc] font-mono text-[11px] tracking-[0.25em] px-8 py-3 uppercase hover:border-[#c9a84c] hover:text-[#c9a84c] transition-colors">
              CLOSE
            </button>
          </div>
        </div>
      )}

      {state && !state.success && !state.field && <div className="mb-5 px-4 py-3 border border-red-800 bg-red-900/20 rounded text-red-400 text-[12px] font-mono">✗ {state.message}</div>}

      <Form action={formAction} className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6" noValidate>
        {eventId && <input type="hidden" name="eventId" value={eventId} />}

        {/* Name */}
        <div className="flex flex-col gap-1">
          <input name="name" type="text" placeholder="Your Name" className={errors("name") ? inputErr : inputBase} />
          {errors("name") && (
            <span className="text-red-400 text-[11px] font-mono" role="alert">
              {errors("name")}
            </span>
          )}
        </div>

        {/* Email */}
        <div className="flex flex-col gap-1">
          <input name="email" type="email" placeholder="Your Email" className={errors("email") ? inputErr : inputBase} />
          {errors("email") && (
            <span className="text-red-400 text-[11px] font-mono" role="alert">
              {errors("email")}
            </span>
          )}
        </div>

        {/* Table */}
        <div className="flex flex-col gap-1">
          <input name="table" type="number" placeholder="Table Number" value={selectedTable ?? ""} readOnly={!!selectedTable} onChange={() => {}} className={`${errors("table") ? inputErr : inputBase} ${selectedTable ? "text-[#c9a84c] cursor-default" : ""}`} />{" "}
          {errors("table") && (
            <span className="text-red-400 text-[11px] font-mono" role="alert">
              {errors("table")}
            </span>
          )}
        </div>

        {/* Guests */}
        <div className="flex flex-col gap-1">
          <input name="guests" type="number" placeholder="Number of Guests" min={1} max={20} className={errors("guests") ? inputErr : inputBase} />
          {errors("guests") && (
            <span className="text-red-400 text-[11px] font-mono" role="alert">
              {errors("guests")}
            </span>
          )}
        </div>

        {/* Date — fri valg hvis ingen event, låst hvis event */}
        {!eventDate ? (
          <div className="flex flex-col gap-1">
            <input name="date" type="date" min={new Date().toISOString().split("T")[0]} className={errors("date") ? inputErr : inputBase} style={{ colorScheme: "dark" }} onChange={(e) => onDatePick?.(e.target.value)} />
            {errors("date") && (
              <span className="text-red-400 text-[11px] font-mono" role="alert">
                {errors("date")}
              </span>
            )}
          </div>
        ) : (
          <div className="flex flex-col gap-1">
            <input
              type="text"
              readOnly
              value={new Date(eventDate).toLocaleDateString("en-GB", {
                weekday: "long",
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
              className={`${inputBase} text-[#c9a84c] cursor-default`}
            />
          </div>
        )}

        {/* Phone */}
        <div className="flex flex-col gap-1">
          <input name="phone" type="tel" placeholder="Your Phone Number" className={errors("phone") ? inputErr : inputBase} />
          {errors("phone") && (
            <span className="text-red-400 text-[11px] font-mono" role="alert">
              {errors("phone")}
            </span>
          )}
        </div>

        {/* Submit */}
        <div className="col-span-1 md:col-span-2 flex justify-end mt-2">
          <Btn type="submit" disabled={isPending}>
            {isPending ? "RESERVING..." : "RESERVE"}
          </Btn>
        </div>
      </Form>
    </>
  );
}
