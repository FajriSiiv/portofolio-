import React, { useRef } from "react";
import Layer from "../Section/Layer";
import { useScroll, useTransform, motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import Image1 from "../../assets/portofolio-image/porto-img.png";
import KreasiHexa from "../../assets/portofolio-image/kreasihexa-img.png";
import AnimationReveal from "../Animation/AnimationReveal";
import TitleSection from "../Text/TitleSection";

const Showcase = () => {
  const ShowcaseProject = ({ title, listSkills, url, imgUrl }) => {
    const ref = useRef();
    const { scrollYProgress } = useScroll({
      target: ref,
      offset: ["center center", "start end"],
      layoutEffect: false,
    });

    const scale = useTransform(scrollYProgress, [0, 1], ["1.15", "1"]);

    return (
      <div
        ref={ref}
        className="relative w-full h-fit flex justify-start gap-x-5 max-h-[500px] mt-20 sm:flex-col sm:gap-y-5"
      >
        <div className="flex-[2] h-[500px]  relative">
          <div className="w-full h-full overflow-hidden rounded-xl">
            <motion.img
              src={imgUrl}
              alt={title}
              className="w-full h-full scale-105 object-cover"
              style={{
                scale: scale,
              }}
            />
          </div>
        </div>
        <div className="flex-1 w-full h-[500px] font-matter flex flex-col justify-end items-start pb-10 gap-y-7">
          <h3 className="uppercase text-5xl font-extrabold tracking-wider text-left relative -left-32 bg-[#fee35d] p-3 md:left-0 xs:text-lg xs:py-1">
            <AnimationReveal>{title}</AnimationReveal>
          </h3>
          <div className="flex flex-wrap gap-3 xs:text-sm">
            {listSkills.map((list, index) => (
              <p
                key={index}
                className="px-4 py-2 bg-primary text-secondary rounded-md uppercase font-semibold"
              >
                {list}
              </p>
            ))}
          </div>
          <div className="flex gap-x-2 justify-center items-center">
            <a
              href={url}
              target="_blank"
              className="text-2xl font-light uppercase"
            >
              Visit Website
            </a>
            <FiArrowRight size={32} />
          </div>
        </div>
      </div>
    );
  };

  const listPorto = [
    {
      id: 1,
      title: "Kreasihexa",
      urlLink: "https://www.kreasihexa.com/",
      imgUrl: KreasiHexa,
      skilss: ["React.JS", "TailwindCSS", "Shadcn-UI"],
    },
    {
      id: 2,
      title: "Portofolio Website",
      urlLink: "/",
      imgUrl: Image1,
      skilss: ["React.JS", "TailwindCSS", "GSAP", "Framer-Motion"],
    },
  ];

  return (
    <Layer className="">
      <div className="h-fit p-10 xs:p-2">
        <TitleSection>Show case</TitleSection>

        <div className="w-full h-full mt-10">
          {listPorto.map((list) => (
            <ShowcaseProject
              imgUrl={list.imgUrl}
              title={list.title}
              url={list.urlLink}
              listSkills={list.skilss}
            />
          ))}
          {/* <ShowcaseProject /> */}
        </div>
      </div>
    </Layer>
  );
};

export default Showcase;
