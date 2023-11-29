"use client";
import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";

import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className=" mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        After graduating with a degree in{" "}
        <span className="fojnt-medium">Management & Analytics</span>, I decided
        to pursue my passion for programming. I enrolled for a variety of
        courses and learned{" "}
        <span className="font-medium">front-end web development</span>.{" "}
        <span className="italic">My favourite part of programming</span> is the
        problem-solving aspect, as well as the never-ending 'chase' to learn new
        things. I <span className="underline">love</span> the feeling of finally
        figuring out a solution to a problem. My core stack is{" "}
        <span className="font-medium">React.js</span>. I am also familiar with
        TypeScript. I am always looking to learn new technologies. I am
        currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a software
        developer.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy going
        go-karting,watching f1, and playing with my cat. I also enjoy{" "}
        <span className="font-medium">reading books</span>. My favourite author
        is <span className="font-medium">Dan Brown</span>.
      </p>
    </motion.section>
  );
}
