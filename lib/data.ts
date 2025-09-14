import { url } from "inspector";
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
    title: "Lecturer in Statistics and Data Analysis",
    location: "Doha, Qatar",
    description:
      "Delivered lectures on complex statistical topics, preparing students for exams. Utilized tools like Python, R, and Excel in teaching, developing students' analytical and problem-solving skills.",
    icon: React.createElement(CgWorkAlt),
    date: "July 2024 - July 2025",
  },
  {
    title: "Freelance & Front-End Developer",
    location: "Leicester, UK",
    description:
      "As a freelance and in-house developer, I created and maintained web applications for a B2B startup. I successfully delivered high-quality projects using technologies like React, Next.js, Redux, and Tailwind, directly improving the user experience and service offering.",
    icon: React.createElement(FaReact),
    date: "June 2023 - July 2025",
  },
  {
    title: "Data Analyst",
    location: "Ashby-de-la-Zouch, UK",
    description:
      "Promoted to Data Analyst, where I developed and implemented data-driven reports in Power BI and Excel. These reports provided actionable insights that significantly improved company KPIs, including delivery time and fleet utilization.",
    icon: React.createElement(CgWorkAlt),
    date: "June 2022 - May 2024",
  },
  {
    title: "Transport Coordinator & Fleet Management",
    location: "Manchester, UK",
    description:
      "Managed and optimized a fleet of 150 drivers, serving as the main point of contact for clients. I leveraged data analysis to make strategic decisions that significantly improved efficiency, customer satisfaction, and fleet utilization.",
    icon: React.createElement(CgWorkAlt),
    date: "Sept 2020 - May 2022",
  },
  {
    title: "Education",
    location: "Manchester, UK",
    description:
      "I hold a Bachelor's degree in International Business Management and a Master's in Data Analysis from Manchester Metropolitan University. I have also completed numerous bootcamps to specialize in technologies such as React, Next.js, Redux, and TypeScript.",
    icon: React.createElement(LiaUniversitySolid),
    date: "2015 - 2018 (BA) & 2019 (MA)",
  },
];

export const projectsData = [
  {
    title: "Rootly",
    description:
      "A modern contact management tool enabling professionals to organize, filter, and track relationships. Features tagging, grouping, and an integrated activity log for a seamless, scalable workflow.",
    tags: [
      "React",
      "shadcn",

      "tailwind",
      "typescript",
      "zod",
      "recharts",
      "hook form",
      "sonner",
      "framer-motion",
      "date-fns",
      "AUTH",
      "supabase",
    ],
    imageUrl: "/thumbnails/Rootly.png",

    projectUrl: null, //"https://thewildoasis-cms.netlify.app",
    url: "1118468552",
  },
  {
    title: "The Wild Oasis - CMR",
    description:
      "An internal management system for staff to oversee bookings, cabins, and users. Includes dashboards, check-ins, payment verification, and activity tracking, ensuring smooth operations and guest satisfaction.",
    tags: [
      "Next.js",
      "Auth.js",
      "Server Actions",
      "SSG",
      "Moder Hooks",
      "Supabase",
    ],
    imageUrl: "/thumbnails/TheWildOasis_CMR.png",
    projectUrl: null, //"https://fast-react-pizza-fewakes.netlify.app/",
    url: "1118471674",
  },
  {
    title: "The Wild Oasis - Booking ",
    description:
      "A guest-facing booking platform showcasing cabins, prices, and real-time availability. Customers can easily browse options, book stays, leave personalized notes, and manage their reservations, all through a smooth, intuitive, and fully mobile-friendly experience.",
    tags: ["React", "React Query", "Redux", "Styled Components", "Supabase"],
    imageUrl: "/thumbnails/TheWildOasis_Guest.png",
    projectUrl: null,
    url: "1118471664",
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
  "SQL",
  "PowerBI",
  "Prisma",
  "Zustand",
] as const;
