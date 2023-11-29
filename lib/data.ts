import React from "react";

import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LiaUniversitySolid } from "react-icons/lia";

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
    title: "Graduate Master's Degree",
    location: "Manchester, UK",
    description:
      "I have Graduated from Manchester Metropolitan University with a Master's Degree in Analytics. Here, my fascination with computer languages and programming began.",
    icon: React.createElement(LiaUniversitySolid),
    date: "2020",
  },
  {
    title: "Fleet Manager",
    location: "Bruntingthorpe, UK",
    description:
      "I managed a demonstration and events fleet for Jaguar and Land-Rover. I have created and overseen a process of vehicle preparations for events such as wimbledon.",
    icon: React.createElement(CgWorkAlt),
    date: "2020 - 2022",
  },
  {
    title: "Graduated Bootcamp's",
    location: "Leicester, GB",
    description:
      "I have completed a number of bootcamp's to learn new skills and technologies. These include Javascript, React, Next.js, Node.js, TypeScript, Redux, Tailwind and more.",
    icon: React.createElement(FaReact),
    date: "2020 - 2022",
  },
  {
    title: "Transport Co-ordinator",
    location: "Ashby-de-la-Zouch, UK",
    description:
      "I am a shift co-ordinator/shift-manager for a well known transport company. I am responsible for managing a fleet of around 200 Drivers and everything that comes with it.",
    icon: React.createElement(CgWorkAlt),
    date: "2022 - present",
  },
  {
    title: "Freelance Developer",
    location: "Leicester, GB",
    description:
      "Working both on personal and freelance projects, to gain experience and build my portfolio.",
    icon: React.createElement(FaReact),
    date: "2022 - present",
  },
] as const;

export const projectsData = [
  {
    title: "The Wild Oasis",
    description:
      "The Wild Oasis is designed to manage hotel operations, including sales statistics, cabin management, user management, booking management and so much more!",
    tags: ["React", "React Query", "Redux", "Supabase", "Styled Components"],
    imageUrl: "/thewildoasis.png",

    projectUrl: "https://thewildoasis-cms.netlify.app/login",
  },
  {
    title: "Fast Pizza",
    description:
      "A quick and convinient way to order pizza online. Add your pizza to the cart, manage the quanitity, track your order and more.",
    tags: ["React", "React Router", "Redux Toolkit", "Tailwind"],
    imageUrl: "/fastpizza.png",
    projectUrl: "https://fast-react-pizza-fewakes.netlify.app/",
  },
  {
    title: "World Wise",
    description:
      "This web app is a travel tracking and adventure registration application. Show off your travels and adventures to your friends and family.",
    tags: ["React", "Context API", "Thunks"],
    imageUrl: "/wordwise.png",
    projectUrl: null,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "SASS",
  "Tailwind",
  "Styled Components",
  "Material-ui",
  "JavaScript",
  "TypeScript",
  "React.js",
  "React Query",
  "React Router",
  "Redux",
  "Redux Toolkit",
  "Next.js",
  "Node.js",
  "Supabase",
  "Framer Motion",
  "Git",
] as const;
