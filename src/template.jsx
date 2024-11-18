import { useEffect } from "react";
import { animatePageIn } from "./utils/animation";

export default function Template({ children }) {
  useEffect(() => {
    animatePageIn();
  }, []);
  return (
    <div>
      <div
        id="banner-1"
        className="min-h-screen bg-neutral-950 z-10 fixed top-0 left-0 w-0 origin-right"
      />
      <div
        id="banner-2"
        className="min-h-screen bg-neutral-300 z-10 fixed top-0 left-0 w-0 origin-right"
      />

      {/* <div
        id="banner-1"
        className="h-10 w-10 scale-1 rounded-full bg-neutral-950 z-10 fixed top-1/2 left-1/2  -translate-x-1/2"
      />
      <div
        id="banner-2"
        className="h-5 w-5 scale-1 rounded-full bg-rose-500 z-10 fixed top-1/2 left-1/2  -translate-x-1/2"
      /> */}
      {children}
    </div>
  );
}
