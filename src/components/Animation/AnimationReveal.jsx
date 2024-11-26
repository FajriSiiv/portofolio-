import { useInView, motion, useAnimation } from "framer-motion";
import React, { useEffect, useRef } from "react";

const AnimationReveal = ({ children, width = "fit-content", delaySec = 0 }) => {
  const ref = useRef();
  const isInView = useInView(ref, { once: true });

  const mainAnimation = useAnimation();
  const slideAnimation = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainAnimation.start("visible");
      slideAnimation.start("visible");
    }
  }, [isInView]);

  return (
    <div style={{ position: "relative", width, overflow: "hidden" }} ref={ref}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainAnimation}
        transition={{ duration: 0.5, delay: 0.25 + delaySec }}
      >
        {children}
      </motion.div>
      <motion.div
        variants={{
          hidden: { left: 0 },
          visible: { left: "100%" },
        }}
        initial="hidden"
        animate={slideAnimation}
        transition={{ duration: 0.5, delay: delaySec, ease: "easeIn" }}
        className="absolute top-1 bottom-1 left-0 right-0 z-20 bg-primary"
      ></motion.div>
    </div>
  );
};

export default AnimationReveal;
