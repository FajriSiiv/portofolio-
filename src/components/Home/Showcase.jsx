import React, { useRef } from "react";
import Layer from "../Section/Layer";
import { useScroll, useTransform, motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import Image1 from "../../assets/portofolio-image/porto-img.png";

const Showcase = () => {
  const ShowcaseProject = () => {
    const ref = useRef();
    const { scrollYProgress } = useScroll({
      target: ref,
      offset: ["center center", "start end"],
    });

    const scale = useTransform(scrollYProgress, [0, 1], ["1.15", "1"]);

    return (
      <div
        ref={ref}
        className="relative w-full h-fit flex justify-start gap-x-5 max-h-[500px] mt-20"
      >
        <div className="flex-[2] h-[500px]  relative">
          <div className="w-full h-full overflow-hidden rounded-xl">
            <motion.img
              src={Image1}
              alt="Porto 1"
              className="w-full h-full scale-105"
              style={{
                scale: scale,
              }}
            />
          </div>
        </div>
        <div className="flex-1 w-full h-[500px] font-matter flex flex-col justify-end items-start pb-10 gap-y-7">
          <h3 className="uppercase text-5xl font-extrabold tracking-wider text-left relative -left-32 bg-[#fee35d] p-3">
            Portofolio Website
          </h3>
          <div className="flex flex-wrap gap-3">
            <p className="px-4 py-2 bg-primary text-secondary rounded-md uppercase font-semibold">
              React
            </p>
            <p className="px-4 py-2 bg-primary text-secondary rounded-md uppercase font-semibold">
              TailwindCSS
            </p>
            <p className="px-4 py-2 bg-primary text-secondary rounded-md uppercase font-semibold">
              SHADCN-UI
            </p>
            <p className="px-4 py-2 bg-primary text-secondary rounded-md uppercase font-semibold">
              Framer Motion
            </p>
          </div>
          <div className="flex gap-x-2 justify-center items-center">
            <h3 className="text-2xl font-light uppercase">Visit Github</h3>
            <FiArrowRight size={32} />
          </div>
        </div>
      </div>
    );
  };

  return (
    <Layer className="">
      <div className="h-fit p-10">
        <h2 className="uppercase text-5xl font-bold tracking-wider">
          Showcase
        </h2>
        <div className="w-full h-full mt-10">
          <ShowcaseProject />
          <ShowcaseProject />
        </div>
      </div>
    </Layer>
  );
};

export default Showcase;
