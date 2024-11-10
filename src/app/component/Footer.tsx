import React from "react";
import Image from "next/image";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <span>
          <Image className="logo" width={30} height={30} src="/logo.jpg" alt="logo" />
          <p>© 2024 Tooba Ilyas --- <a href="https://linkedin.com/in/tooba-ilyas-6277982b6" target="_blank"> @Tooba Ilyas </a></p>
        </span>
        <p className="rights">All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
