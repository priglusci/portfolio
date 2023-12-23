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
// Element div digunakan sebagai "divider" atau pemisah. Div banyak digunakan untuk mengelompokan sekumpulan element. Sedangkan span digunakan sebagai container untuk inline element. Nah untuk section sendiri tidak memiliki fungsionalitas atau karakteristik khusus. Adapun element lainnya yang mirip seperti yakni tidak memiliki perilaku tertentu seperti article, header, dan footer.

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);

  return (
    <section ref={ref} id="home" className="max-w-[78rem] sm:mb-0 scroll-mt-[100rem]">
      <motion.div
        className="flex flex-row items-center justify-center mx-40"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="relative">
          <Image
            src={Avatar1}
            alt="Avatar"
            width="400"
            height="400"
            quality="95"
            priority={true}
            className="h-30 w-30 rounded-full object-cover border-[0.50rem] border-white shadow-xl"
          />
        </div>
        <div className="container pl-[3rem] py-[3rem]">
          <h1 className="font-bold text-5xl">Hello World!</h1>
          <br/>
          <p className="text-lg font-semibold text-justify ">
            <span>I'm </span>
            <span className="font-bold ">Rezky Mandar Suaib </span>
            <span>
              someone who likes doing everything related to technology. Computers are not just electronic devices for me, but loyal friends who are always present at every step of my life journey.
            </span>
          </p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 py-[3rem] text-lg font-medium"
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
              href="/CV.pdf"
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
        </div>
      </motion.div>
    </section>
  );
}
