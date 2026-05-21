"use client";
import action from "@/app/actions/actionLogin";
import Form from "next/form";
import Btn from "@/components/(globalComponents)/Btn";
import { useActionState } from "react";

const LoginForm = () => {
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
              text-white text-[0.82rem] tracking-wider px-4 py-[0.85rem]
              outline-none transition-colors duration-200 placeholder-white/30
              focus:border-[#e8003a]
            "
          name="email"
          type="email"
          placeholder="Email"
        />

        <input
          className="
              w-full bg-transparent border border-white/15 rounded-sm
              text-white text-[0.82rem] tracking-wider px-4 py-[0.85rem]
              outline-none transition-colors duration-200 placeholder-white/30
              focus:border-[#e8003a]
            "
          type="password"
          placeholder="Password"
        />

        <div className="flex justify-end mb-8">
          <div>
            <Btn label="LOG IN" />
          </div>
        </div>
      </Form>
    </div>
  );
};

export default LoginForm;
