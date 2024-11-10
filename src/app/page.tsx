"use client";
import Hero from "./component/Hero";
import About from "./component/About";
import ProjectCard from "./component/ProjectCard";
import Contact from "./component/Contact";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Hero />
      <About />
      <ProjectCard />
      <Contact />
    </main>
    
  );
}
