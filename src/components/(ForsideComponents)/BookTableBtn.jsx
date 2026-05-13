"use client";
import { useRouter } from "next/navigation";

export default function BookTableBtn() {
  const router = useRouter();

  return (
    <button className="px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold rounded-lg shadow-md hover:opacity-90 hover:purple-500 active:scale-95 transition" onClick={() => router.push("/login")}>
      BOOK TABLE
    </button>
  );
}
