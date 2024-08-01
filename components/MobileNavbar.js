// components/MobileNavbar.js
import React, { useState } from 'react';
import {
  BiMenu,
  BiEnvelope
} from "react-icons/bi";
import Link from "next/link";

const MobileNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="mobile-navbar">
      <div className="nav-container">
        {/* Hamburger Icon */}
        <BiMenu name="menu" onClick={() => setIsOpen(!isOpen)}></BiMenu>

        {/* Logo */}
        <Link href="/">
          <img src="logo-icon.svg" alt="Multisig Labs Logo" />
        </Link>

        {/* Contact Button */}
        <a
        className="btn btn--large"
        style={{ display: "flex", alignItems: "center", padding: '1em 1.2em' }}
        href="mailto:hello@multisiglabs.org?subject=New%20Message%20for%20Multisig%20Labs%20Team"
      >
        <BiEnvelope />
      </a>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="mobile-menu">
            <Link href="/">Home</Link>
            <a href="/about">About</a>
            <a href="/products">Products</a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default MobileNavbar;
