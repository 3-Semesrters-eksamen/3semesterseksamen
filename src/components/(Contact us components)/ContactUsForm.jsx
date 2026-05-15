"use client";
import action from "@/app/actions/actionContactUs";
import Form from "next/form";
import { useActionState } from "react";

const ContactUsForm = () => {
  const [state, resAction, isPending] = useActionState(action, {
    message: "",
  });
  return (
    <div>
      {state && state.message && <div className={`mb-4 p-3 rounded-lg text-sm font-medium ${state.success ? "bg-green-100 text-green-800 border border-green-300" : "bg-red-100 text-red-800 border border-red-300"}`}>{state.message}</div>}
      <Form action={resAction} className="flex flex-col gap-3 mb-6">
        <input
          className="
            w-full bg-transparent border border-white/15 rounded-sm
            text-white text-sm tracking-wider px-4 py-4 outline-none
            transition-colors duration-200 placeholder-white/30
            focus:border-[#e8003a]
          "
          type="text"
          placeholder="Your Name"
        />
        <input
          className="
            w-full bg-transparent border border-white/15 rounded-sm
            text-white text-sm tracking-wider px-4 py-4 outline-none
            transition-colors duration-200 placeholder-white/30
            focus:border-[#e8003a]
          "
          type="email"
          placeholder="Your Email"
        />
        <textarea
          className="
            w-full bg-transparent border border-white/15 rounded-sm
            text-white text-sm tracking-wider px-4 py-4 outline-none
            transition-colors duration-200 placeholder-white/30
            focus:border-[#e8003a] resize-y min-h-80
          "
          placeholder="Your Comment"
        />

        <div className="flex justify-end">
          <button
            className="
            bg-transparent border-none text-white text-[0.82rem] font-bold
            tracking-[0.14em] cursor-pointer px-0 py-[0.4rem]
            relative transition-colors duration-200
            hover:text-[#e8003a] group
          "
          >
            SEND
            {/* ::after underline via a sibling span */}
            <span
              className="
              absolute bottom-0 left-0 right-0 h-px
              bg-white/40 transition-colors duration-200
              group-hover:bg-[#e8003a]
            "
            />
          </button>
        </div>
      </Form>
    </div>
  );
};

export default ContactUsForm;
