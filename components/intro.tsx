"use client";
import Image from "next/image";
import React from "react";
import Avatar1 from "@/public/avatar1.jpg";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);

  return (
    <section
    ref={ref}
    id="home"
    className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
  >
    <div className="flex items-center justify-center">
      <div className="relative">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            type: "tween",
            duration: 0.2,
          }}
        >
          <div className="flex items-center justify-center">
            <div className="relative">
              <Image
                src={Avatar1}
                alt="avatar"
                quality="95"
                priority={true}
                className="w-20 h-20 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
              />
              <motion.span
                className="absolute bottom-0 right-0 text-4xl"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 125,
                  delay: 0.1,
                  duration: 0.7,
                }}
              >
                👋
              </motion.span>
            </div>
            <h1 className="px-4 text-5xl font-titleFont font-bold cursor-default">Hello World!
            </h1>
          </div>
          
        </motion.div>
      </div>
    </div>

    <motion.h1
      className="mb-10 mt-[3rem] px-4 text-3xl font-medium !leading-[1.5]"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <span>Hello, I&apos;m </span>
      <span className="font-bold">Rezky Mandar Suaib</span> a graphic designer with 6 years of experience, specializing in UI/UX design for 3 years, and having 1 year of expertise as a front-end developer.
    </motion.h1>

    <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.1,
            }}
          >
            <Link
              href="#contact"
              className="group bg-[#1f1f1f] text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:before:scale-110 hover:scale-110 hover:bg-[#1f1f1f] active:scale-105 transition"
            >
              {" "}
              Contact me here{" "}
              <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
            </Link>
            <a
              className="group bg-white text-[#1f1f1f] px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:before:scale-110 hover:scale-110 hover:bg-white-800 active:scale-105 transition cursor-pointer border border-[#1f1f1f]/10 dark:bg-white/10 dark:text-white/60"
              href="/uiux-resume.pdf"
              download
            >
              Download CV{" "}
              <HiDownload className="opacity-70 group-hover:translate-x-1 transition" />
            </a>
            <a
              className="bg-white text-[#252525] p-4 flex items-center gap-2 rounded-full outline-none hover:scale-110 hover:bg-white-800 active:scale-105 transition cursor-pointer border border-[#1f1f1f]/10 dark:bg-white/10 dark:text-white/60"
              href="https://www.linkedin.com/in/rezkymndr/"
            >
              <BsLinkedin />
            </a>
            <a
              className="bg-white text-[#252525] p-4 flex items-center gap-2 rounded-full outline-none hover:scale-110 hover:bg-white-800 active:scale-105 transition cursor-pointer border border-[#1f1f1f]/10 dark:bg-white/10 dark:text-white/60"
              href="https://github.com/priglusci"
            >
              <FaGithubSquare />
            </a>
          </motion.div>
  </section>
  );
}
