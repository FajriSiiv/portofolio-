import React from "react";
import AnimationReveal from "../Animation/AnimationReveal";

const TitleSection = ({ children }) => {
  return (
    <AnimationReveal>
      <h2 className="uppercase tracking-wider text-5xl font-extrabold xs:text-2xl sm:text-3xl">
        {children}
      </h2>
    </AnimationReveal>
  );
};

export default TitleSection;
