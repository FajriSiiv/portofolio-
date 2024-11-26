import React from "react";
import Layer from "../Section/Layer";
import TitleSection from "../Text/TitleSection";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import Button from "../Button/button";
import { MdEmail } from "react-icons/md";

const Contact = () => {
  return (
    <Layer>
      <div className="flex flex-col gap-y-10 justify-center items-center min-h-[50vh]">
        <TitleSection>Contact me</TitleSection>
        <div className="flex justify-center items-center gap-x-5">
          <Button
            text="Github"
            icon={<BsGithub />}
            components="a"
            href="https://ui.shadcn.com/docs/installation/vite"
            target="_blank"
          />
          <Button
            text="LinkedIn"
            icon={<BsLinkedin />}
            components="a"
            href="https://ui.shadcn.com/docs/installation/vite"
            target="_blank"
          />
          <Button
            text="Email"
            icon={<MdEmail />}
            components="a"
            href="https://ui.shadcn.com/docs/installation/vite"
            target="_blank"
          />
        </div>
      </div>
    </Layer>
  );
};

export default Contact;