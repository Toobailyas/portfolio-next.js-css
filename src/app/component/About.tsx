"use client";
import React from "react";
import Image from "next/image";
import "./About.css";

const About = () => {
    return (
        <div id="about" className="container">
            <section className="about-section">
                <Image src="/about-bg.png" alt="aboutMe" width={500} height={500} />
                <div>
                    <h1 className="about-header">ABOUT ME</h1>
                    <p className="about-description">
                        As a dedicated 12th-grade student and passionate frontend developer, I am eager to leverage my skills in HTML, CSS, and TypeScript to contribute to innovative web development projects...
                    </p>
                    <div className="skills">
                        <h2>Skills</h2>
                        <ul>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>TypeScript</li>
                        </ul>
                    </div>
                    <div className="education">
                        <h2>Education</h2>
                        <ul>
                            <li>Matriculation from TCF (Al-Muhaimin campus) with Science</li>
                            <li>GIAIC Student (Artificial Intelligence, Web 3.0 & metaverse) <span>continue</span></li>
                            <li>Intermediate from Khursheed Govt. college with Pre-Engineering <span>continue</span></li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
