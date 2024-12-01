import React, { useEffect, useState } from "react";
import { useScroll, motion, useTransform } from "framer-motion";
import { linkNav } from "../../constants";

const Navbar = () => {
  const [navClick, setnavClick] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const boxes = [1, 2, 3, 4, 5];
  // const { scrollY } = useScroll({
  //   layoutEffect: false,
  // });
  // const backgroundColor = useTransform(
  //   scrollY,
  //   [60, 100],
  //   ["transparent", "#ffffff"]
  // );

  // const boxShadowNav = useTransform(
  //   scrollY,
  //   [60, 100],
  //   [
  //     "none",
  //     "0px 4px 8px rgba(34,42,53,.05), 0px 0px 0px 1px rgba(34,42,53,.08), 0px 1px 5px -4px rgba(19,19,22,.7)",
  //   ]
  // );

  const handleClickNav = () => {
    if (navClick) {
      setnavClick(false);
      console.log("false");
    } else {
      setnavClick(true);
      console.log("true");
    }
  };

  const variants = {
    initial: {
      x: "-100%",
    },
    animate: {
      x: "0%",
    },
  };

  const transitionTogether = {
    duration: 0.5,
    ease: [1, 0.08, 0.28, 0.87],
    delay: 0.3,
  };

  const containerVariants = {
    show: {
      transition: {
        staggerChildren: 0.04,
        delayChildren: 0.3,
      },
    },
    hidden: {},
  };

  const itemVariants = {
    show: {
      x: 0,
      transition: {
        duration: 0.4,
        ease: [1, 0.08, 0.28, 0.87],
      },
    },
    hidden: {
      x: "-120%",
      transition: {
        duration: 0.4,
        ease: [1, 0.08, 0.28, 0.87],
      },
    },
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 600);
      setIsTablet(window.innerWidth >= 600 && window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <motion.div
        className="fixed h-16 w-16 z-50  left-10 top-10 flex justify-center items-center cursor-pointer rounded-md"
        onClick={handleClickNav}
        animate={
          navClick
            ? isMobile
              ? {
                  top: "80%",
                  left: "calc(50% - 40px)",
                  scale: 0.7,
                }
              : isTablet
              ? {
                  left: "80%",
                  top: "10%",
                  scale: 0.8,
                }
              : {
                  left: "90%",
                  top: "calc(50% - 80px)",
                  background: "#0000000",
                  width: "80px",
                  height: "80px",
                }
            : isMobile
            ? {
                top: "10px",
                left: "10px",
                scale: 0.7,
              }
            : {
                left: "40px",
                top: "40px",
                background: "#000",
                width: "64px",
                height: "64px",
              }
        }
        transition={
          navClick
            ? transitionTogether
            : {
                duration: 0.72,
                ease: [0.69, 0.08, 0.28, 0.87],
              }
        }
      >
        <motion.div
          className="w-10 h-10 absolute left-1/2 top-1/2 -translate-y-1/2  z-50 cursor-pointer"
          style={{
            left: "calc(50% - 20px)",
          }}
          transition={transitionTogether}
        >
          <motion.div
            initial={{
              top: "calc(33% - 6.5px)",
              y: "0%",
              rotate: "0deg",
              scale: 1,
              backgroundColor: "#fff",
            }}
            animate={
              navClick
                ? {
                    top: "50%",
                    y: "-50%",
                    rotate: "-45deg",
                    scale: 1.8,
                    backgroundColor: "rgb(244, 62, 93)",
                  }
                : {
                    top: "calc(33% - 6.5px)",
                    y: "0%",
                    rotate: "0deg",
                    scale: 1,
                    backgroundColor: "#fff",
                  }
            }
            transition={transitionTogether}
            className="w-10 h-1.5  absolute top-1/4 left-0 rounded-sm"
          ></motion.div>
          <motion.div
            animate={
              navClick
                ? {
                    top: "50%",
                    y: "-50%",
                    rotate: "45deg",
                    scale: 0,
                    backgroundColor: "rgb(244, 62, 93)",
                    opacity: 0,
                  }
                : {
                    top: "calc(66% - 6.5px)",
                    y: "0%",
                    rotate: "0deg",
                    scale: 1,
                    backgroundColor: "#fff",
                    opacity: 1,
                  }
            }
            initial={{
              top: "calc(66% - 6.5px)",
              y: "0%",
              rotate: "0deg",
              scale: 1,
              backgroundColor: "#fff",
              opacity: 1,
            }}
            transition={transitionTogether}
            className="w-10 h-1.5  absolute top-1/2 left-0 rounded-sm "
          ></motion.div>
          <motion.div
            animate={
              navClick
                ? {
                    top: "50%",
                    y: "-50%",
                    rotate: "45deg",
                    scale: 1.8,
                    backgroundColor: "rgb(244, 62, 93)",
                    width: "40px",
                  }
                : {
                    top: "calc(99% - 6.5px)",
                    y: "0%",
                    rotate: "0deg",
                    scale: 1,
                    backgroundColor: "#fff",
                  }
            }
            initial={{
              top: "calc(99% - 6.5px)",
              y: "0%",
              rotate: "0deg",
              scale: 1,
              backgroundColor: "#fff",
            }}
            transition={transitionTogether}
            className="w-5 h-1.5  absolute top-1/2 left-0 rounded-sm "
          ></motion.div>
        </motion.div>
      </motion.div>
      <motion.div
        initial="initial"
        animate={navClick ? "animate" : "initial"}
        variants={variants}
        transition={{
          duration: 0.8,
          ease: [1, 0.08, 0.28, 0.87],
        }}
        className="fixed left-0 top-0 w-screen h-screen bg-black z-40"
      >
        {linkNav.map((box, index) => (
          <motion.div
            className="absolute w-[500px] h-[300px] left-1/2 top-1/2 -translate-x-1/2 translate-y-1/2"
            style={{
              top: `calc(50% - 300px)`,
            }}
            key={box}
            animate={
              hoveredIndex === index + 1
                ? {
                    opacity: 1,
                    backgroundColor: box.color,
                    clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
                  }
                : {
                    backgroundColor: "#0000000",
                    clipPath: "polygon(0% 50%, 100% 50%, 100% 50%, 0% 50%)",
                  }
            }
            transition={{
              duration: 0.5,
            }}
          >
            <img
              src={box.imgUrl}
              alt={box.name}
              className={`w-full h-full object-cover`}
            />
          </motion.div>
        ))}

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={navClick ? "show" : "hidden"}
          className="flex flex-col gap-y-2 text-white w-fit h-fit absolute left-20 top-1/2 -translate-y-1/2 overflow-hidden uppercase text-[60px] font-extrabold leading-snug sm:text-4xl"
        >
          {linkNav.map((item, index) => (
            <motion.a
              key={index}
              variants={itemVariants}
              className="cursor-pointer transition-all"
              onMouseEnter={(e) => (e.target.style.color = item.color)}
              onMouseLeave={(e) => (e.target.style.color = "")}
              href={item.url}
              onClick={handleClickNav}
              onHoverStart={() => setHoveredIndex(index + 1)}
              onHoverEnd={() => setHoveredIndex(null)}
            >
              {item.name}
            </motion.a>
          ))}
        </motion.div>
      </motion.div>
    </>
  );
};

export default Navbar;
