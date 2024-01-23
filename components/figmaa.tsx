"use client"
import React from "react";
import SectionHeading from "./section-heading";
import { figmaData } from "@/lib/data";
import Figma from "./figma";
import { useSectionInView } from "@/lib/hooks";

export default function Figmaa() {
  const { ref } = useSectionInView("Projects", 0.5);
  return (
    <section ref={ref} id="figma" className="mt-[4rem]">
       <div className="mb-3 max-w-[45rem] text-center"><SectionHeading>My Projects as UI Designer</SectionHeading></div> 
      <div>
        {figmaData.map((figma, index) => (
          <React.Fragment key={index}>
            <Figma {...figma} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}