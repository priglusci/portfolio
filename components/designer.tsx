"use client"
import React from "react";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";

export default function Designer() {
  const { ref } = useSectionInView("Projects", 0.5);
  return (
    
    <div ref={ref} id="projects" className="mt-[4rem] mb-28">
       <div className="mb-3 max-w-[45rem] text-center"><SectionHeading>My Projects as Graphic Designer</SectionHeading></div> 
       <iframe className="rounded-lg" width="520" height="400" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FrPOnS9WRHF3T0tjnhKqlRl%2FPorto%3Ftype%3Ddesign%26node-id%3D2-82%26t%3DXZLpgqm87Iji0D1i-1%26scaling%3Dmin-zoom%26page-id%3D0%253A1%26mode%3Ddesign" allowFullScreen></iframe>
    </div>
  );
}