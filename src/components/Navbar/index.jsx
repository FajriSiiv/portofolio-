import React from "react";
import Button from "../Button/button";
import { BsGithub } from "react-icons/bs";
import { useScroll, motion, useTransform } from "framer-motion";

const Navbar = () => {
  const { scrollY } = useScroll();
  const backgroundColor = useTransform(
    scrollY,
    [60, 100],
    ["transparent", "#ffffff"]
  );

  const boxShadowNav = useTransform(
    scrollY,
    [60, 100],
    [
      "none",
      "0px 4px 8px rgba(34,42,53,.05), 0px 0px 0px 1px rgba(34,42,53,.08), 0px 1px 5px -4px rgba(19,19,22,.7)",
    ]
  );

  return (
    <motion.nav
      className="fixed px-6 py-2 bg-transparent text-primary top-5 left-1/2 max-w-[1170px] w-full -translate-x-1/2 rounded-[1rem] h-[60px] flex items-center justify-between z-50 "
      style={{ backgroundColor, boxShadow: boxShadowNav }}
      initial={{ backgroundColor: "transparent" }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <p className="text-lg uppercase tracking-wide font-semibold">Indonesia</p>
      <div className="flex justify-center items-center gap-x-5 text-lg">
        <p>Home</p>
        <p>Showcase</p>
        <Button
          className="rounded-[1rem]"
          components="a"
          icon={<BsGithub />}
          text="Github"
        />
      </div>
    </motion.nav>
  );
};

export default Navbar;
