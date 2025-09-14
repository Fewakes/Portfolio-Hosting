"use client";

import { useRef, useState } from "react";
import { projectsData } from "@/lib/data";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { FaPlay } from "react-icons/fa";

// Ensure ProjectProps includes optional projectUrl
type ProjectProps = (typeof projectsData)[number] & {
  index: number;
  projectUrl?: string;
};

export default function Project({
  title,
  description,
  tags,
  imageUrl,
  projectUrl, // optional string
  url, // Vimeo video ID
  index,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  const [openVideo, setOpenVideo] = useState(false);
  const isEven = index % 2 === 1;

  return (
    <>
      <motion.div
        ref={ref}
        style={{ scale: scaleProgess, opacity: opacityProgess }}
        className="group mb-3 sm:mb-8 last:mb-0"
      >
        <section className="relative max-w-[50rem] mx-auto bg-gray-100 border border-black/5 rounded-lg overflow-hidden sm:h-[22rem] hover:bg-gray-200 transition dark:text-white dark:bg-white/10 dark:hover:bg-white/20">
          {/* Text Section */}
          <div
            className={`pt-6 pb-8 px-6 sm:pt-12 sm:pb-12 sm:max-w-[60%] flex flex-col h-full justify-between ${
              isEven
                ? "sm:ml-auto sm:text-right sm:items-end"
                : "sm:mr-auto sm:text-left sm:items-start"
            }`}
          >
            {projectUrl ? (
              <a
                className="text-2xl font-semibold"
                href={projectUrl} // just use string
                target="_blank"
                rel="noopener noreferrer"
              >
                {title}
              </a>
            ) : (
              <span className="text-2xl font-semibold">{title}</span>
            )}

            <p className="mt-3 leading-relaxed text-gray-700 dark:text-white/70">
              {description}
            </p>

            <ul className="flex flex-wrap mt-5 gap-2 sm:mt-auto">
              {tags.map((tag, idx) => (
                <li
                  key={idx}
                  className="bg-black/[0.7] px-3 py-1 text-[0.75rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
                >
                  {tag}
                </li>
              ))}
            </ul>
          </div>

          {/* Thumbnail with play overlay */}
          <div
            onClick={() => setOpenVideo(true)}
            className={`absolute top-8 w-[28.25rem] h-[16rem] z-10 cursor-pointer transition-transform duration-300 ${
              isEven
                ? "sm:-left-40 group-hover:translate-x-3 group-hover:translate-y-3 group-hover:rotate-2"
                : "sm:-right-40 group-hover:-translate-x-3 group-hover:translate-y-3 group-hover:-rotate-2"
            }`}
          >
            <Image
              src={imageUrl}
              alt={title}
              quality={95}
              width={3012}
              height={1642}
              className="rounded-t-lg shadow-2xl object-cover w-full h-full"
            />

            {/* Play Icon Overlay */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="bg-black/50 rounded-full p-4 pointer-events-auto">
                <FaPlay className="text-white text-5xl" />
              </div>
            </div>
          </div>
        </section>
      </motion.div>

      {/* Video Modal */}
      {openVideo && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
          <button
            onClick={() => setOpenVideo(false)}
            className="absolute top-5 right-5 text-white text-3xl z-50"
          >
            &times;
          </button>
          <div className="relative w-full max-w-4xl aspect-video">
            <iframe
              src={`https://player.vimeo.com/video/${url}`}
              title={title}
              allow="autoplay; fullscreen"
              allowFullScreen
              className="w-full h-full rounded-lg"
            ></iframe>
          </div>
        </div>
      )}
    </>
  );
}
