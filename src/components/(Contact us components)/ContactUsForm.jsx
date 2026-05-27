"use client";
import action from "@/app/actions/actionContactUs";
import Form from "next/form";
import { useActionState } from "react";
import Btn from "@/components/(globalComponents)/Btn";

const ContactUsForm = () => {
  const [state, resAction, isPending] = useActionState(action, {
    message: "",
  });
  return (
    <div className="flex justify-center items-center ">
      {state && state.message && <div className={`mb-4 p-3 rounded-lg text-sm font-medium ${state.success ? "bg-green-100 text-green-800 border border-green-300" : "bg-red-100 text-red-800 border border-red-300"}`}>{state.message}</div>}
      <Form action={resAction} className="flex flex-col gap-3 mb-6 w-full max-w-lg px-4 sm:px-6">
        <input
          className="
            w-full bg-transparent border border-white rounded-sm
            text-white text-sm tracking-wider px-4 py-4 outline-none
            transition-colors duration-200 placeholder-white/30
            focus:border-[#e8003a]
          "
          type="text"
          placeholder="Your Name"
        />
        <input
          className="
            w-full bg-transparent border border-white rounded-sm
            text-white text-sm tracking-wider px-4 py-4 outline-none
            transition-colors duration-200 placeholder-white/30
            focus:border-[#e8003a]
          "
          type="email"
          placeholder="Your Email"
        />
        <textarea
          className="
            w-full bg-transparent border border-white rounded-sm
            text-white text-sm tracking-wider px-4 py-4 outline-none
            transition-colors duration-200 placeholder-white/30
            focus:border-[#e8003a] resize-y min-h-80
          "
          placeholder="Your Comment"
        />

        <Btn label="SEND" className="self-end" />
      </Form>
    </div>
  );
};

export default ContactUsForm;
