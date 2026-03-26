"use client";

import React, { useState } from "react";
import MemberIdModal from "./MemberId";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isIdModalOpen, setIsIdModalOpen] = useState(false); // Modal State

  const navLinks = [
    { name: "Home", href: "/", isModal: false },
    { name: "About", href: "about-us", isModal: false },
    { name: "Leadership", href: "#leadership", isModal: false },
    { name: "Activities", href: "#activities", isModal: false },
    { name: "Member ID", href: "#", isModal: true }, // Flagged as a modal trigger
  ];

  const handleNavClick = (e: React.MouseEvent, isModal: boolean, href: string) => {
    if (isModal) {
      e.preventDefault();
      setIsIdModalOpen(true);
      setIsMenuOpen(false); // Close mobile menu if open
    } else {
      setIsMenuOpen(false);
    }
  };

  return (
    <>
      <nav className="sticky top-0 z-40 bg-[var(--color-bg)] border-b border-[var(--color-accent)] backdrop-blur-md">
        {/* Main Container */}
        <div className="main-container py-4 flex items-center justify-between px-4 sm:px-8">
          {/* Logo */}
          <div className="flex items-center">
            <div className="w-12 h-12 rounded-full overflow-hidden border border-[var(--color-accent)]">
              <img
                alt="Logo"
                src="/logo.jpg" 
                className="w-12 h-12 rounded-full overflow-hidden border border-[var(--color-accent)]"
              />
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.isModal, link.href)}
                className="text-sm font-medium text-[var(--color-primary)] hover:text-[var(--color-secondary)] transition-colors cursor-pointer"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Mobile Toggle Button */}
          <button
            className="lg:hidden text-[var(--color-primary)]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? (
              <svg className="w-9 h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-9 h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Dropdown */}
        <div
          className={`lg:hidden absolute top-full left-0 w-full bg-[var(--color-bg)] border-b border-[var(--color-accent)] shadow-xl transition-all duration-300 ease-in-out z-50 ${
            isMenuOpen
              ? "translate-y-0 opacity-100 visible"
              : "-translate-y-2 opacity-0 invisible pointer-events-none"
          }`}
        >
          <div className="flex flex-col py-6 px-4 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.isModal, link.href)}
                className="text-lg font-medium text-[var(--color-primary)] hover:text-[var(--color-secondary)] transition-colors cursor-pointer"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Render Modal Outside of Nav Flow */}
      <MemberIdModal
        isOpen={isIdModalOpen}
        onClose={() => setIsIdModalOpen(false)}
      />
    </>
  );
};

export default Navbar;