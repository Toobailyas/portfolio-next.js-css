"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import './Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <Link href="/" className="navbar-logo">
        TOOBA ILYAS
      </Link>
      {/* Desktop Links */}
      <div className="nav-links">
        <Link href="#about">About</Link>
        <Link href="#projectCard">Projects</Link>
        <Link href="#contact">Contact</Link>
      </div>
      {/* Mobile Menu Toggle Button */}
      <button className="menu-toggle" onClick={toggleMenu}>
        ☰
      </button>
      {/* Mobile Menu */}
      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        <Link href="#about" onClick={() => setMenuOpen(false)}>About</Link>
        <Link href="#projects" onClick={() => setMenuOpen(false)}>Projects</Link>
        <Link href="#contact" onClick={() => setMenuOpen(false)}>Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;
