import React, { useRef } from "react";
import Layer from "../components/Section/Layer";
import { useScroll, motion, useTransform } from "framer-motion";

const Showcase = () => {
  return (
    <div className="pt-24">
      <Layer className="!bg-transparent !shadow-none">
        <div className="flex flex-col gap-y-10">
          <ShowcaseProject />
          <ShowcaseProject />
          <ShowcaseProject />
          <ShowcaseProject />
          <ShowcaseProject />
        </div>
      </Layer>
    </div>
  );
};

const ShowcaseProject = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "start center"],
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [0.5, 1]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.5, 1]);
  const height = useTransform(scrollYProgress, [0, 1], ["20vh", "50vh"]);

  return (
    <motion.div
      style={{
        opacity,
        scale,
        height: height,
      }}
      ref={ref}
      className="h-[70vh] w-full bg-rose-500"
    ></motion.div>
  );
};

export default Showcase;
