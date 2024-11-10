"use client";
import React from 'react';
import Image from 'next/image';
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import Link from 'next/link';
import { TypeAnimation } from 'react-type-animation';
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-container">
        <div className="hero-text">
          <h1 className="hero-heading">
            <span>Hello, I'm </span>
            <TypeAnimation
              sequence={['TOOBA', 1000, 'Frontend Developer', 1000]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="hero-description">
            A passionate Frontend developer with expertise in HTML, CSS, and TypeScript. Programming enthusiast with a passion for AI. (GIAIC Student)
          </p>
          <div className="socials">
            <Link href="https://github.com/Toobailyas" target="_blank">
              <Image src={GithubIcon} alt="Github Icon" />
            </Link>
            <Link href="https://linkedin.com/in/tooba-ilyas-6277982b6" target="_blank">
              <Image src={LinkedinIcon} alt="Linkedin Icon" />
            </Link>
          </div>
          <div className="hero-buttons">
            <Link href="mailto:toobailyas30@gmail.com" target="_blank">
              <button className="hire-button">HIRE ME</button>
            </Link>
            <Link href="https://milestone1and2-xi.vercel.app" target="_blank">
              <button className="resume-button">
                <span>My Resume</span>
              </button>
            </Link>
          </div>
        </div>
        <div className="profile-image-container">
          <Image
            className="profile-image"
            src="/profile-picture.png"
            alt="Hero Image"
            width={250}
            height={250}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
