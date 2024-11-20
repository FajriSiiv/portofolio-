import React, { useState } from "react";
import Layer from "../Section/Layer";

import { motion, useAnimationFrame } from "framer-motion";

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
            {item.title}
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
            className="overflow-hidden px-4 text-lg "
          >
            <div className="py-2 h-[150px]">{item.content}</div>
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
        "I have both Front-end and Back-end skills, including expertise in React, Figma, Next.js, Node.js, Tailwind CSS, Zustand, Shadcn UI, Postman, Framer Motion, GSAP, Supabase, MySQL, and many other frameworks and tools.",
    },
    {
      title: "What projects have you worked on?",
      content:
        "I've worked on a variety of projects, a personal portfolio, and a task management app. These projects utilized React, Next.js, and Supabase for dynamic and scalable applications.",
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

  const [position, setPosition] = useState({ x: 0, y: 0 });

  useAnimationFrame((time) => {
    const radius = 100; // Radius lingkaran
    const angle = (time / 1000) * 2 * Math.PI; // Mengonversi waktu ke sudut (radian)

    // Hitung posisi x dan y berdasarkan trigonometri
    const x = radius * Math.cos(angle);
    const y = radius * Math.sin(angle);

    setPosition({ x, y });
  });
  return (
    <Layer>
      <div className="p-5 grid grid-cols-2 h-[600px] gap-x-10">
        <div className="relative p-5 bg-rose-500 w-full h-full">
          {/* <motion.div
            className="w-[100px] h-[100px] bg-white absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
            style={{
              translateX: position.x,
              translateY: position.y,
            }}
          ></motion.div> */}
        </div>
        <div className="flex flex-col h-full gap-y-4">
          <h2 className="uppercase tracking-wider text-4xl font-extrabold">
            What i can do
          </h2>

          <Accordion items={accordionWhatIDo} />
        </div>
      </div>
    </Layer>
  );
};
