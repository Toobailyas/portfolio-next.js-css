import React from "react";
import Image from "next/image";
import "./ProjectCard.css";

const ProjectCard = () => {
  return (
    <div id="projectCard">
      <section className="section-header">
        <h2>MY PROJECTS</h2>
      </section>
      <div className="project-grid">
        <div className="project-card">
          <a href="https://html-css-final-assignment-cpi8.vercel.app" target="blank">
            <Image
              src="/card/panacloud.jpeg"
              alt="Panacloud Website"
              width={100}
              height={100}
              className="project-image"
            />
            <h3 className="project-title">Panacloud Website</h3>
            <p className="project-description">Clone of Panacloud website using HTML & CSS</p>
          </a>
        </div>
        <div className="project-card">
          <a href="https://resume-builder-hackathon-jmzk.vercel.app" target="blank">
            <Image
              src="/card/Dynamic-Resume.jpeg"
              alt="Dynamic Resume Builder"
              width={100}
              height={100}
              className="project-image"
            />
            <h3 className="project-title">Dynamic Resume Builder</h3>
            <p className="project-description">A website where you can generate your resume</p>
          </a>
        </div>
        <div className="project-card">
          <a href="https://github.com/Toobailyas/Project-02.git" target="blank">
            <Image
              src="/card/num-game.PNG"
              alt="Number Guessing Game"
              width={100}
              height={100}
              className="project-image"
            />
            <h3 className="project-title">Number Guessing Game</h3>
            <p className="project-description">A fun CLI game using TypeScript</p>
          </a>
        </div>
        <div className="project-card">
          <a href="https://github.com/Toobailyas/cli-simple-calculator.git" target="blank">
            <Image
              src="/card/cli-calculator.PNG"
              alt="CLI Calculator"
              width={100}
              height={100}
              className="project-image"
            />
            <h3 className="project-title">CLI Calculator</h3>
            <p className="project-description">A CLI calculator using TypeScript</p>
          </a>
        </div>
        <div className="project-card">
          <a href="https://milestone1and2-xi.vercel.app" target="blank">
            <Image
              src="/card/static-resume.png"
              alt="Static Resume Project"
              width={100}
              height={100}
              className="project-image"
            />
            <h3 className="project-title">Static Resume Project</h3>
            <p className="project-description">My static resume project using HTML & CSS</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
