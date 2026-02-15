"use client";;
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { motion, AnimatePresence } from "motion/react";

import { useEffect, useState } from "react";

export const Animatedtemplate = ({ testimonials, autoplay = false }) => {
  const [active, setActive] = useState(0);
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const handleNext = () => {
    setActive((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const isActive = (index) => {
    return index === active;
  };

  useEffect(() => {
    if (!autoplay) return;
    const id = setInterval(() => setActive((p) => (p + 1) % testimonials.length), 5000);
    return () => clearInterval(id);
  }, [autoplay, testimonials.length]);

  if (!mounted) return null; // prevents SSR/CSR mismatch

  const randomRotateY = () => 5;
  return (
    <div
      className=" mx-auto lg:max-w-5xl px-4 py-10 font-sans antialiased md:max-w-4xl md:px-8 lg:px-12">
      <div className="relative grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-20">
        <div>
          <div className=" z-0 relative w-full aspect-square">
            <AnimatePresence>
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.src}
                  initial={{
                    opacity: 0,
                    scale: 0.9,
                    z: -100,
                    rotate: randomRotateY(),
                  }}
                  animate={{
                    opacity: isActive(index) ? 1 : 0.7,
                    scale: isActive(index) ? 1 : 0.95,
                    z: isActive(index) ? 0 : -100,
                    rotate: isActive(index) ? 0 : randomRotateY(),
                    zIndex: isActive(index)
                      ? 40
                      : testimonials.length + 2 - index,
                    y: isActive(index) ? [0, -80, 0] : 0,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.9,
                    z: 100,
                    rotate: randomRotateY(),
                  }}
                  transition={{
                    duration: 0.4,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0 origin-bottom">
                  <img
                    src={testimonial.src}
                    alt={testimonial.name}
                    width={500}
                    height={500}
                    draggable={false}
                    className="h-full w-full rounded-3xl object-cover object-center" />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
        <div className="flex flex-col justify-between">
          <motion.div
            key={active}
            initial={{
              y: 20,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            exit={{
              y: -20,
              opacity: 0,
            }}
            transition={{
              duration: 0.2,
              ease: "easeInOut",
            }}>
            <h3 className="text-xl font-bold text-white">
              {testimonials[active].name}
            </h3>
            <p className="text-sm text-neutral-400">
              {testimonials[active].year}
            </p>
            <div className="mt-8 space-y-4">
      {testimonials[active].desc.map((paragraph, paraIndex) => (
        <motion.p key={paraIndex} className="text-sm text-white">
          {paragraph.split(" ").map((word, index) => (
            <motion.span
              key={index}
              initial={{
                filter: "blur(10px)",
                opacity: 0,
                y: 5,
              }}
              animate={{
                filter: "blur(0px)",
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.2,
                ease: "easeInOut",
                delay: 0.02 * index,
              }}
              className="inline-block">
              {word}&nbsp;
            </motion.span>
          ))}
        </motion.p>
      ))}
    </div>
          </motion.div>
          <div className="flex gap-4 pt-12 md:pt-0 justify-between">
            <div className="flex gap-4">
            <button
              onClick={handlePrev}
              className="group/button flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 dark:bg-neutral-800">
              <IconArrowLeft
                className="h-7 w-7 text-black transition-transform duration-300 group-hover/button:rotate-12 dark:text-neutral-400" />
            </button>
            <button
              onClick={handleNext}
              className="group/button flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 dark:bg-neutral-800">
              <IconArrowRight
                className="h-7 w-7 text-black transition-transform duration-300 group-hover/button:-rotate-12 dark:text-neutral-400" />
            </button>
            </div>
                    {testimonials[active].link && (
            <a
              href={testimonials[active].link}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-4 border-black rounded-xl bg-white px-4 py-1.5 text-sm font-medium text-black hover:scale-105 transition"
            >
              Read more
            </a>
          )}
          </div>
        </div>
      </div>
    </div>
  );
};
