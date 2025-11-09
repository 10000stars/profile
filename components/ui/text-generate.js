"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate, useInView } from "motion/react";

const cn = (...classes) => classes.filter(Boolean).join(" ");

export const TextGenerateEffect = ({
  words,
  className,
  filter = true,
  duration = 0.5
}) => {
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope, { margin: "-100px" });
  
  let wordsArray = words.split(" ");
  
  useEffect(() => {
    if (isInView) {
      animate("span", {
        opacity: 1,
        filter: filter ? "blur(0px)" : "none",
      }, {
        duration: duration ? duration : 3,
        delay: stagger(0.5),
      });
    } else {
      animate("span", {
        opacity: 0,
        filter: filter ? "blur(10px)" : "none",
      }, {
        duration: 0.3,
      });
    }
  }, [isInView, animate, filter, duration]);

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {wordsArray.map((word, idx) => {
          return (
            <motion.span
              key={word + idx}
              className="text-white opacity-0"
              style={{
                filter: filter ? "blur(10px)" : "none",
              }}>
              {word}{" "}
            </motion.span>
          );
        })}
      </motion.div>
    );
  };

  return (
    <div className={cn("font-extralight", className)}>
      <div className="mt-4">
        <div className="text-white text-2xl leading-snug tracking-wide">
          {renderWords()}
        </div>
      </div>
    </div>
  );
};