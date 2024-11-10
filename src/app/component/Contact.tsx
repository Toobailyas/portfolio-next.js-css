"use client";
import React from "react";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";
import "./Contact.css";

const Contact = () => {
  return (
    <div id="contact" className="container">
      <section>
        <div className="contact">
          <h3>Let's Connect</h3>
          <p>
            I'm currently looking for new opportunities; my inbox is always open. I'll try my best to get back to you.
          </p>
          <p>
            My Email: <a href="mailto:toobailyas30@gmail.com">toobailyas30@gmail.com</a>
          </p>
          <div className="socials">
            <Link href="https://github.com/Toobailyas" target="_blank">
              <Image src={GithubIcon} alt="Github Icon" />
            </Link>
            <Link href="https://linkedin.com/in/tooba-ilyas-6277982b6" target="_blank">
              <Image src={LinkedinIcon} alt="Linkedin Icon" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
