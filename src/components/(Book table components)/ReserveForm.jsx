"use client";
import action from "@/app/actions/actionReserveTable";
import Form from "next/form";
import { useActionState } from "react";

const NIGHTS = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

const ReserveForm = () => {
  const [state, resAction, isPending] = useActionState(action, {
    message: "",
  });

  return (
    <div className="border border-[#2a2a2a] rounded-[3px] p-[16px_14px] flex flex-col gap-3.5">
      {state && state.message && <div className={`mb-4 p-3 rounded-lg text-sm font-medium ${state.success ? "bg-green-100 text-green-800 border border-green-300" : "bg-red-100 text-red-800 border border-red-300"}`}>{state.message}</div>}

      <Form action={resAction} className="flex flex-col gap-2.5">
        <input className="bg-[#1c1c1c] border border-[#333] rounded-xs text-[#ccc] text-[13px] font-mono px-3.5 py-3 outline-none w-full" type="text" name="name" placeholder="Your Name" />
        <input className="bg-[#1c1c1c] border border-[#333] rounded-xs text-[#ccc] text-[13px] font-mono px-3.5 py-3 outline-none w-full" type="email" name="email" placeholder="Your Email" />
        <input className="bg-[#1c1c1c] border border-[#333] rounded-xs text-[#ccc] text-[13px] font-mono px-3.5 py-3 outline-none w-full" type="text" name="tableNumber" placeholder="Table Number" />
        <input className="bg-[#1c1c1c] border border-[#333] rounded-xs text-[#ccc] text-[13px] font-mono px-3.5 py-3 outline-none w-full" type="number" name="guests" placeholder="Number of Guests" />

        <select className="bg-[#1c1c1c] border border-[#333] rounded-xs text-[#ccc] text-[13px] font-mono px-3.5 py-3 outline-none w-full" name="night" defaultValue="">
          <option value="" disabled>
            Choose Night
          </option>
          {NIGHTS.map((n) => (
            <option key={n} value={n.toLowerCase()}>
              {n}
            </option>
          ))}
        </select>

        <input className="bg-[#1c1c1c] border border-[#333] rounded-xs text-[#ccc] text-[13px] font-mono px-3.5 py-3 outline-none w-full" type="tel" name="contact" placeholder="Your Contact Number" />

        <textarea className="bg-[#1c1c1c] border border-[#333] rounded-xs text-[#ccc] text-[13px] font-mono px-3.5 py-3 outline-none w-full min-h-25 resize-y" name="comment" placeholder="Your Comment" />

        <div className="flex justify-end mt-1.5">
          <button type="submit" className="bg-[#1c1c1c] border border-[#555] text-[#ccc] font-mono text-[12px] font-bold tracking-[0.2em] px-7 py-3 cursor-pointer rounded-xs">
            {isPending ? "RESERVING..." : "RESERVE"}
          </button>
        </div>
      </Form>
    </div>
  );
};

export default ReserveForm;
