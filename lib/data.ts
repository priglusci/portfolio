import React from "react";
import priglusci from "@/public/priglusci-app.png";
import taskplanner from "@/public/taskplanner.png";

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
    name: "Skills",
    hash: "#skills",
  },
  
  {
    name: "Projects",
    hash: "#projects",
  },
  
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const projectsData = [
  {
    title: "Task Planner",
    description:
      "Task Planner is a practical tool for easily planning activities. It was my first experience with Dart, and through this project, I gained proficiency in the language.",
    tags: ["Dart", "C++", "SQL"],
    imageUrl: taskplanner,
    linkk:"https://github.com/priglusci/taskplanner"
  },
  {
    title: "Priglusci",
    description:
      "The website that I designed to learn next.js and at the same time for my perfume business.",
    tags: ["React", "JavaScript", "Next.js", "Tailwind", "MongoDB"],
    imageUrl: priglusci,
    linkk:"https://github.com/priglusci/priglusci-app"
  },
] as const;

export const skillsData = [
  "C++",
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "MongoDB",
  "Flutter",
  "Firebase",
  "Python",
  "Framer Motion",
] as const;