import About from "@/components/about";
import Contact from "@/components/contact";
import Designer from "@/components/designer";
import Figmaa from "@/components/figmaa";
import Intro from "@/components/intro";
import Projects from "@/components/projects";
import SectionDivider from "@/components/section-divider";
import Skills from "@/components/skills";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-10">
      <Intro />
      <SectionDivider/>
      <About/>
      <Skills/>
      <Projects/>
      <Figmaa/>
      <Designer/>
      <Contact/>
    </main>
  )
}
