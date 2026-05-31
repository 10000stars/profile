"use client";
import { IconArrowLeft, IconArrowRight, IconX, IconMapPin } from "@tabler/icons-react";
import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";

export const Animatedtemplate = ({ testimonials, autoplay = false }) => {
  const [active, setActive] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImageIndex, setModalImageIndex] = useState(0);
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

  if (!mounted) return null;

  const randomRotateY = () => 5;

  return (
    <>
      <div className="mx-auto lg:max-w-5xl px-4 py-10 font-sans antialiased md:max-w-4xl md:px-8 lg:px-12">
        <div className="relative grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-20">
          <div>
            <div className="z-0 relative w-full aspect-square">
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
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}>
              <h3 className="text-xl font-bold text-white">
                {testimonials[active].name}
              </h3>
              <p className="text-sm text-neutral-400">
                {testimonials[active].year}
              </p>
              <div className="mt-8 space-y-4">
                {testimonials[active].desc.map((paragraph, paraIndex) => (
                  <motion.p key={paraIndex} className="text-xs md:text-sm text-white">
                    {paragraph.split(" ").map((word, index) => (
                      <motion.span
                        key={index}
                        initial={{ filter: "blur(10px)", opacity: 0, y: 5 }}
                        animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
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

            <div className="flex gap-4 pt-12 md:pt-4 justify-between">
              <div className="flex gap-4">
                <button
                  onClick={handlePrev}
                  className="group/button flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 dark:bg-neutral-800">
                  <IconArrowLeft className="h-7 w-7 text-black transition-transform duration-300 group-hover/button:rotate-12 dark:text-neutral-400" />
                </button>
                <button
                  onClick={handleNext}
                  className="group/button flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 dark:bg-neutral-800">
                  <IconArrowRight className="h-7 w-7 text-black transition-transform duration-300 group-hover/button:-rotate-12 dark:text-neutral-400" />
                </button>
              </div>
                {testimonials[active].images?.length > 0 ? (
                <button
                  onClick={() => { setModalOpen(true); setModalImageIndex(0); }}
                  className="border-black rounded-xl bg-white px-4 py-1.5 text-sm font-medium text-black hover:scale-105 transition">
                  Explore
                </button>
              ) : testimonials[active].link && (
                <a
                  href={testimonials[active].link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-black rounded-xl bg-white px-4 py-1.5 text-sm font-medium text-black hover:scale-105 transition">
                  Read more
                </a>
              )}
            </div>
            </div>
          </div>
        </div>

      {/* Modal */}
      {modalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
          onClick={() => setModalOpen(false)}>
          <div
            className="relative bg-[#0d0f14] border border-white/10 rounded-2xl w-full max-w-5xl mx-4 overflow-hidden"
            onClick={e => e.stopPropagation()}>

            {/* Header */}
            <div className="flex justify-between items-center px-5 py-3 border-b border-white/10">
              <span className="text-white font-medium text-sm">{testimonials[active].name}</span>
              <button onClick={() => setModalOpen(false)}>
                <IconX className="text-white/40 hover:text-white/80 transition" size={18} />
              </button>
            </div>

            {/* Body */}
            <div className="flex flex-col md:flex-row min-h-[320px]">

              {/* Left: image */}
              {/* Left: image with overlaid arrows */}
              <div className="md:w-1/2 bg-[#1a1f2b] relative flex items-center justify-center p-4">
                <img
                  src={testimonials[active].images?.[modalImageIndex] ?? testimonials[active].src}
                  className="rounded-xl object-cover w-full aspect-[4/3]"
                  alt=""
                />

                {/* Left arrow */}
                {modalImageIndex > 0 && (
                  <button
                    onClick={() => setModalImageIndex(i => i - 1)}
                    className="absolute left-6 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/70 transition rounded-full p-2">
                    <IconArrowLeft className="text-white w-5 h-5" />
                  </button>
                )}

                {/* Right arrow */}
                {modalImageIndex < testimonials[active].images?.length - 1 && (
                  <button
                    onClick={() => setModalImageIndex(i => i + 1)}
                    className="absolute right-6 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/70 transition rounded-full p-2">
                    <IconArrowRight className="text-white w-5 h-5" />
                  </button>
                )}
              </div>

              {/* Right: caption + footer */}
              <div className="md:w-1/2 flex flex-col justify-between p-5">
                <div className="space-y-3">
                {(testimonials[active].captions?.[modalImageIndex] ?? []).map((paragraph, i) => (
                  <p key={i} className="text-sm text-white/75 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
                <div className="flex justify-between items-center pt-4 border-t border-white/10 mt-4">
                  {testimonials[active].locations?.[modalImageIndex] && (
                  <span className="text-xs text-white/35 flex items-center gap-1">
                    <IconMapPin size={13} />
                    {testimonials[active].locations[modalImageIndex]}
                  </span>
                )}
            {testimonials[active].links?.[modalImageIndex] && (
              <a
                href={testimonials[active].links[modalImageIndex]}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-blue-400/70 hover:text-blue-400 transition"
              >
                Read more
              </a>
            )}
                </div>
              </div>
            </div>

            {/* Image dots nav */}
            {testimonials[active].images?.length > 1 && (
              <div className="flex justify-center gap-2 py-3 border-t border-white/10">
                {testimonials[active].images.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setModalImageIndex(i)}
                    className={`w-2 h-2 rounded-full transition ${
                      i === modalImageIndex ? "bg-white/80" : "bg-white/20"
                    }`}
                  />
                ))}
              </div>
            )}

          </div>
        </div>
      )}
    </>
  );
};