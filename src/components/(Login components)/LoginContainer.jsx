"use client";
import Hero from "@/components/(ForsideComponents)/Hero";
// import { Suspense } from "react";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
export default function RootLayout({ children }) {
  const [ready, setReady] = useState(false);
  useEffect(() => {
    setTimeout(() => setReady(true), 1000);
  }, []);
  return (
    <section>
      <AnimatePresence>
        {!ready && (
          <motion.div exit={{ opacity: 0 }} transition={{ duration: 0.5 }} className="fixed inset-0 z-50 flex items-center justify-center bg-black">
            <img src="./loader/madbars.gif" alt="" />
          </motion.div>
        )}
        <Hero />
      </AnimatePresence>
    </section>
  );
}
// export default function LoginContainer() {
//   return (
//     <section>
//       <Suspense fallback={<img src="./loader/madbars.gif" alt="Loader..." />}>
//         <Hero />
//       </Suspense>
//     </section>
//   );
// }
