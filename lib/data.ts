import React from "react";
import priglusci from "@/public/priglusci-app.png";
import taskplanner from "@/public/taskplanner.png";
import ypt from "@/public/ypt.png";
import manpro from "@/public/manpro2.png";
import iconplus from "@/public/manpro1.png";
import viatoriss from "@/public/viatoris.png";
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
export const figmaData = [
  {
    title: "Internship at Yayasan Pendidikan Telkom",
    description:
      "Re-design Application WEB-Based of SPPD Online.",
    tags: ["Figma", "Adobe Photoshop"],
    imageUrl: ypt,
    linkk:"https://www.figma.com/file/8UP3Y6iWdetDnCCtppOuYS/YPT?type=design&node-id=0%3A1&mode=design&t=LSAY60h92sfIPXJx-1"
  },
  {
    title: "Viatoris",
    description:
      "Travel application created to fulfill college assignment obligations.",
    tags: ["Figma", "Adobe Photoshop", "Adobe Illustrator"],
    imageUrl: viatoriss,
    linkk:"https://www.figma.com/file/7Vx1NmjtKeeiVQDLbtDOMT/Viatoris?type=design&node-id=0%3A1&mode=design&t=1LRjHZ0HwgzDTsG9-1"
  },
  {
    title: "Manpro",
    description:
      "Cashier mobile application. This design was created to fulfill the obligations of the Project Management course assignment.",
    tags: ["Figma"],
    imageUrl: manpro,
    linkk:"https://www.figma.com/file/1TPqKwmCzhfdlLsQEGV0dw/MANPRO?type=design&node-id=0%3A1&mode=design&t=trzD9eDqpcTomOsX-1"
  },
  {
    title: "Icon +++",
    description:
      "I made my friend a web-based Icon +++ application prototype for his assignment.",
    tags: ["Figma"],
    imageUrl: iconplus,
    linkk:"https://www.figma.com/file/KmowPkuryRpfzUqr21leCQ/Manpro?type=design&node-id=0%3A1&mode=design&t=E78VkqpVMF3n73Ah-1"
  },
] as const;

export const skillsData = [
  "Adobe Photoshop",
  "Adobe Illustrator",
  "Figma",
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
  "Framer Motion",
] as const;