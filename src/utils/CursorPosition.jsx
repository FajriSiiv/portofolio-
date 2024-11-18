import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const CursorFollower = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setCursorPosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <motion.div
      className="cursor"
      style={{
        position: "absolute",
        width: "200px",
        height: "200px",
        left: "-25%",
        top: "-45%",
        backgroundColor: "black",
        borderRadius: "50%",
        pointerEvents: "none",
        transform: "translate(10%, 10%)",
      }}
      animate={{
        x: cursorPosition.x,
        y: cursorPosition.y,
      }}
      transition={{
        type: "spring",
        stiffness: 100,
      }}
    />
  );
};

export default CursorFollower;
