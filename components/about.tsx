"use client"
import React from "react";
import SectionHeading from "./section-heading";
import{ motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");
  return (
    <motion.section 
    ref={ref}
    className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-10 scroll-mt-[7rem]"
    initial={{opacity: 0, y: 100}}
    animate={{opacity: 1, y: 0}}
    transition={{delay: 0.175}}
    id="about"
    >
      <SectionHeading>About Me</SectionHeading>
      <p className="mb-3">
        <span>
        I am a passionate new graduate Information Technology student. My current interests is
        <span className="font-bold"> Data Analysis </span>
        <span>and </span>
        <span className="font-bold">Frontend Web Development. </span>
         Currently I have never had work experience in the field I want, every day I continue to learn to fulfill my portfolio which can indirectly expand my skills. <br/>I just graduated from the Information Technology Department at Telkom University with a GPA of 3.06 in a period of 4 years. <br/> <br/>
        </span>
      </p>
    </motion.section>
  );
}
