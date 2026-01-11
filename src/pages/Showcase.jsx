import React, { useRef } from "react";
import Layer from "../components/Section/Layer";
import { useScroll, motion, useTransform } from "framer-motion";
import KreasiHexaProject from "../assets/portofolio-image/kreasihexa-img.png";
import PortofolioProject from "../assets/portofolio-image/porto-img.png";
import { showcaseJson } from "../constants/showcase";
import { TbWorld } from "react-icons/tb";
import { BsGithub } from "react-icons/bs";

const Showcase = () => {
  return (
    <div className="pt-24">
      <Layer className="!bg-transparent !shadow-none">
        <h1 className="uppercase text-7xl font-black text-center mb-10 md:text-3xl sm:text-2xl">
          Showcase
        </h1>
        <div className="flex justify-evenly flex-wrap gap-5 sm:flex-col sm:px-5">
          {showcaseJson.map((project, index) => (
            <ShowcaseProject
              key={index}
              img={project.img}
              name={project.name}
              url={project.url}
              no={index + 1}
              url_github={project.url_github}
            />
          ))}
        </div>
      </Layer>
    </div>
  );
};

const ShowcaseProject = ({ img, name, url, no ,url_github}) => {
  const ref = useRef();
  const marginTop = no % 2 === 0;
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 50]);

  return (
    <motion.a
      ref={ref}
      className={`w-[40%] h-[400px] sm:w-full  ${
        marginTop ? "mt-24 sm:mt-0" : "mt-0"
      }`}
      style={{
        y,
      }}
      target="_blank"
      href={url}
    >
      <div className="w-full h-full flex flex-col gap-y-3">
        <div className="w-full h-[300px] bg-white rounded-md overflow-hidden">
          <img
            src={img}
            alt={name}
            className="w-full h-full object-cover hover:scale-105 transition-all"
          />
        </div>
        <div className="flex justify-between w-full uppercase text-3xl font-black xs:text-xl gap-10">
           <div className="flex gap-2 text-lg h-fit">
          {url_github && (
            <a href={url_github} target="_blank" className="p-2 rounded-md border-primary border">
              <BsGithub />
            </a>
          )}
          {url && (
            <a href={url} target="_blank" className="p-2 rounded-md border-primary border">
              <TbWorld  />
            </a>
          )}

        </div>
          <p className="text-right"  >{name}</p>
        </div>

       
      </div>
    </motion.a>
  );
};

export default Showcase;
