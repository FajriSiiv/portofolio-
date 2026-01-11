import React, { useRef, useState } from "react";
import Layer from "../Section/Layer";

import { motion, useAnimationFrame } from "framer-motion";
import AnimationReveal from "../Animation/AnimationReveal";
import { VelocityText } from "../VelocityText";
import TitleSection from "../Text/TitleSection";

const Accordion = ({ items }) => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <div className="">
      {items.map((item, index) => (
        <div key={index} className="border">
          <button
            onClick={() => toggleAccordion(index)}
            className={`w-full flex items-center justify-between px-4 py-3 text-left text-gray-800 hover:bg-gray-100 text-lg font-semibold ${
              openIndex === index ? "bg-gray-100" : "bg-transparent"
            }`}
          >
            <AnimationReveal>{item.title}</AnimationReveal>
            <motion.span
              animate={{
                rotate: openIndex === index ? 180 : 0,
              }}
              transition={{ duration: 0.3 }}
              className="ml-2"
            >
              ▼
            </motion.span>
          </button>
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{
              height: openIndex === index ? "auto" : 0,
              opacity: openIndex === index ? 1 : 0,
            }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden px-4 text-lg xs:text-base"
          >
            <div className="py-2 h-[150px] xs:text-sm">{item.content}</div>
          </motion.div>
        </div>
      ))}
    </div>
  );
};

export const WhatIDo = () => {
  const accordionWhatIDo = [
    {
      title: "What skills do you have?",
      content:
        "I have both Front-end and Back-end skills, including expertise in React, Figma, Next.js, Node.js, Tailwind CSS, State Management (Zustand), Shadcn UI, Postman, Framer Motion, GSAP, Supabase, MySQL, and many other frameworks and tools.",
    },
    {
      title: "What projects have you worked on?",
      content:
        "I've worked on a variety of projects, a personal portfolio, and a task management app. These projects utilized React, Vue, Nuxt.js, Next.js, and Supabase for dynamic and scalable applications.",
    },
    {
      title: "What services do you offer?",
      content:
        "I can build responsive websites, create interactive UI animations, optimize website performance, and integrate APIs for seamless functionality",
    },
    {
      title: "What certifications do you have?",
      content:
        "I hold certifications in Frontend Development from Udemy Course and completed a React.js Bootcamp.",
    },
    {
      title: "What are your interests outside coding?",
      content:
        "I enjoy learning about UX design, exploring new frontend libraries, and playing video games in my free time.",
    },
  ];

  const ref = useRef();

  return (
    <Layer id="about">
      <div className="p-5 grid grid-cols-2 h-[600px] gap-x-10 overflow-hidden relative md:h-fit">
        <div className="relative bg-secondary w-full h-fit py-10 flex flex-col overflow-hidden cursor-default rounded-md rotate-12 scale-150 sm:absolute sm:left-0 sm:top-1/3">
          <VelocityText refVelo={ref} word="React. " />
          <VelocityText refVelo={ref} reverse word="Figma. " />
          <VelocityText refVelo={ref} word="Node.JS " />
          <VelocityText refVelo={ref} reverse word="Next.JS " />
          <VelocityText refVelo={ref} word="TailwindCSS " />
          <VelocityText refVelo={ref} reverse word="Framer motion " />
          <VelocityText refVelo={ref} reverse word="Nuxt.JS " />
          <VelocityText refVelo={ref} reverse word="Vue " />
        </div>
        <div className="flex flex-col h-full gap-y-4 z-10 bg-white p-5 rounded-md sm:col-span-2">
          <TitleSection>What i can do</TitleSection>

          <Accordion items={accordionWhatIDo} />
        </div>
      </div>
    </Layer>
  );
};
