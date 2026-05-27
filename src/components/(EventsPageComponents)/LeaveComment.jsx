"use client";
import { useState } from "react";

const inputBase = "w-full bg-transparent border border-white/15 rounded-sm text-white text-sm tracking-wider px-4 py-4 outline-none transition-colors duration-200 placeholder-white/30 focus:border-[#e8003a]";
const inputErr = "w-full bg-transparent border border-red-600 rounded-sm text-white text-sm tracking-wider px-4 py-4 outline-none transition-colors duration-200 placeholder-white/30";

export default function LeaveComment({ eventId, apiUrl }) {
  const [fields, setFields] = useState({ name: "", email: "", content: "" });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [rootError, setRootError] = useState(null);

  const set = (field) => (e) => {
    setFields((prev) => ({ ...prev, [field]: e.target.value }));
    setErrors((prev) => ({ ...prev, [field]: null }));
  };

  const validate = () => {
    const e = {};
    if (!fields.name.trim()) e.name = "Name is required";
    else if (fields.name.trim().length < 2) e.name = "Name must be at least 2 characters";
    else if (!/^[a-zA-ZæøåÆØÅ\s'-]+$/.test(fields.name)) e.name = "Name can only contain letters";

    if (!fields.email.trim()) e.email = "Email is required";
    else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(fields.email)) e.email = "Please enter a valid email";

    if (!fields.content.trim()) e.content = "Comment is required";
    else if (fields.content.trim().length < 5) e.content = "Comment must be at least 5 characters";

    return e;
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setRootError(null);

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    try {
      const res = await fetch(`${apiUrl}/comments`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...fields, eventId, date: new Date().toISOString() }),
      });

      if (res.ok) {
        setSubmitted(true);
        setFields({ name: "", email: "", content: "" });
      } else {
        setRootError("Something went wrong. Please try again.");
      }
    } catch {
      setRootError("Something went wrong. Please try again.");
    }

    setIsSubmitting(false);
  };

  if (submitted) {
    return <p className="text-gray-400 text-sm tracking-wider py-4">✓ Your comment has been submitted.</p>;
  }

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-3 mb-6" noValidate>
      {rootError && <div className="px-4 py-3 border border-red-800 bg-red-900/20 rounded text-red-400 text-[12px]">✗ {rootError}</div>}

      <div className="flex flex-col gap-1">
        <input type="text" placeholder="Your Name" value={fields.name} onChange={set("name")} className={errors.name ? inputErr : inputBase} />
        {errors.name && (
          <span className="text-red-400 text-[11px]" role="alert">
            {errors.name}
          </span>
        )}
      </div>

      <div className="flex flex-col gap-1">
        <input type="email" placeholder="Your Email" value={fields.email} onChange={set("email")} className={errors.email ? inputErr : inputBase} />
        {errors.email && (
          <span className="text-red-400 text-[11px]" role="alert">
            {errors.email}
          </span>
        )}
      </div>

      <div className="flex flex-col gap-1">
        <textarea placeholder="Your Comment" value={fields.content} onChange={set("content")} className={`${errors.content ? inputErr : inputBase} resize-y min-h-80`} />
        {errors.content && (
          <span className="text-red-400 text-[11px]" role="alert">
            {errors.content}
          </span>
        )}
      </div>

      <div className="flex justify-end">
        <button type="submit" disabled={isSubmitting} className="bg-transparent border-none text-white text-[0.82rem] font-bold tracking-[0.14em] cursor-pointer px-0 py-[0.4rem] relative transition-colors duration-200 hover:text-[#e8003a] group disabled:opacity-50">
          {isSubmitting ? "SENDING..." : "SEND"}
          <span className="absolute bottom-0 left-0 right-0 h-px bg-white/40 transition-colors duration-200 group-hover:bg-[#e8003a]" />
        </button>
      </div>
    </form>
  );
}
