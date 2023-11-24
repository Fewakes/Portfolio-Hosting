import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";

import WordwiseImg from "@/public/wordwise.png";
import FastpizzaImg from "@/public/fastpizza.png";
import ThewildoasisImg from "@/public/thewildoasis.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Title",
    location: "Location",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Title",
    location: "Location",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Title",
    location: "Location",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;

export const projectsData = [
  {
    title: "The Wild Oasis",
    description:
      "The Wild Oasis is designed to manage hotel operations, including sales statistics, cabin management, user management, booking management and so much more!",
    tags: ["React", "React Query", "Redux", "Supabase", "Styled Components"],
    imageUrl: ThewildoasisImg,
  },
  {
    title: "Fast Pizza",
    description:
      "A quick and convinient way to order pizza online. Add your pizza to the cart, manage the quanitity, track your order and more.",
    tags: ["React", "React Router", "Redux Toolkit", "Tailwind"],
    imageUrl: FastpizzaImg,
  },
  {
    title: "World Wise",
    description:
      "This web app is a travel tracking and adventure registration application. Show off your travels and adventures to your friends and family.",
    tags: ["React", "Context API", "Thunks"],
    imageUrl: WordwiseImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Redux",
  "Framer Motion",
] as const;
