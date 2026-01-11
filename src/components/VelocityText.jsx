import {
  motion,
  useScroll,
  useVelocity,
  useTransform,
  useSpring,
} from "framer-motion";
import "../index.css";

export const VelocityText = ({ word, refVelo, reverse }) => {
  const { scrollYProgress } = useScroll({
    target: refVelo,
    offset: ["start start", "end start"],
    layoutEffect: false,
  });

  const scrollVelocity = useVelocity(scrollYProgress);

  const skewXRaw = useTransform(
    scrollVelocity,
    [-0.5, 0.5],
    ["45deg", "-45deg"]
  );
  const skewX = useSpring(skewXRaw, { mass: 3, stiffness: 200, damping: 80 });

  const xRaw = useTransform(
    scrollYProgress,
    [0, 1],
    reverse ? [-1000, 0] : [0, -1000]
  );
  const x = useSpring(xRaw, { mass: 10, stiffness: 200, damping: 80 });

  const count = 10;

  const wordsArray = Array(count).fill(word);

  return (
    <section className="text-primary">
      <div className="flex h-fit items-center overflow-hidden">
        <motion.p
          style={{ skewX, x }}
          className="origin-bottom-left whitespace-nowrap text-[70px] font-black uppercase leading-[0.85]  md:leading-[0.85] xs:text-5xl"
        >
          {wordsArray
            .join(" ")
            .split(" ")
            .map((child, i) => (
              <span className={`hoverText hover:text-yellow-500`} key={i}>
                {child}
              </span>
            ))}
        </motion.p>
      </div>
    </section>
  );
};
