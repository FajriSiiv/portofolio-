import { useEffect, useState } from "react";
import { animatePageIn } from "./utils/animation";
import { motion, AnimatePresence } from "framer-motion";

export default function Template({ children }) {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setLoading(false), 500);
          return 100;
        }
        return prev + 1;
      });
    }, 30);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (!loading) {
      animatePageIn();
    }
  }, [loading]);

  return (
    <div>
      <AnimatePresence>
        {loading && (
          <motion.div
            className="fixed inset-0 flex flex-col items-center justify-center bg-neutral-950 text-white z-50"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              className="text-4xl font-bold"
              key="progress"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5 }}
            >
              {progress}%
            </motion.div>
            <motion.div
              className="mt-4 w-64 bg-gray-700 h-2 rounded"
              initial={{ width: "0%" }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <div className="bg-blue-500 h-2 rounded"></div>
            </motion.div>
            <p className="text-sm mt-4">Loading...</p>
          </motion.div>
        )}
      </AnimatePresence>

      {!loading && (
        <>
          <div
            id="banner-1"
            className="min-h-screen bg-neutral-950 fixed top-0 left-0 w-full z-50 origin-right"
          />
          {children}
        </>
      )}
    </div>
  );
}
