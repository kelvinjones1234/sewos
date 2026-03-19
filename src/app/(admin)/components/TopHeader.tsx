"use client";

import React from "react";
import { Menu, ExternalLink } from "lucide-react";
import Link from "next/link";

interface TopHeaderProps {
  setSidebarOpen: (isOpen: boolean) => void;
}

export default function TopHeader({ setSidebarOpen }: TopHeaderProps) {
  return (
    <header className="h-20 bg-white border-b border-gray-200 sticky top-0 z-30 overflow-hidden flex items-center">
      
      {/* ── Abstract Background Watermark ── */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.03]" aria-hidden="true">
        <svg className="w-full h-full text-black" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <circle cx="80%" cy="-50%" r="200" />
          <circle cx="20%" cy="150%" r="300" opacity="0.5" />
        </svg>
      </div>

      {/* ── Content Container ── */}
      <div className="relative z-10 w-full px-6 flex items-center justify-between">
        
        {/* Left side: Hamburger (Mobile) & Title */}
        <div className="flex items-center gap-5">
          {/* Hamburger Menu (Crisp, sharp button instead of a soft pill) */}
          <button
            onClick={() => setSidebarOpen(true)}
            className="lg:hidden w-10 h-10 border border-gray-200 bg-gray-50 flex items-center justify-center shrink-0 hover:bg-[var(--color-secondary)] hover:border-[var(--color-secondary)] hover:text-white text-gray-500 transition-all duration-300 shadow-sm"
          >
            <Menu className="w-5 h-5" strokeWidth={1.5} />
          </button>

          <div className="hidden sm:flex flex-col justify-center">
            {/* Signature tracked-out overline */}
            <span className="font-body font-bold uppercase text-[0.55rem] tracking-[0.25em] text-[var(--color-secondary)] mb-0.5">
              System Overview
            </span>
            {/* Bold Heading */}
            <h2 className="font-heading font-bold text-xl md:text-2xl uppercase text-[var(--color-primary)] leading-none">
              Admin Dashboard
            </h2>
          </div>
        </div>

        {/* Right side: Actions */}
        <div className="flex items-center gap-6 shrink-0">
          
          {/* Subtle Accent Divider (hidden on mobile) */}
          <div className="hidden sm:block w-[1px] h-8 bg-gray-200" />

          {/* "View Site" Button - Matches your secondary button styling */}
          <Link 
            href="/" 
            className="group flex items-center gap-2 font-body font-bold uppercase text-[0.65rem] tracking-[0.18em] px-5 py-3 bg-white border border-gray-200 text-gray-500 hover:text-white hover:bg-[var(--color-primary)] hover:border-[var(--color-primary)] transition-all duration-300 shadow-sm"
          >
            <span>View Site</span>
            <ExternalLink 
              className="w-3.5 h-3.5 shrink-0 text-gray-400 group-hover:text-white transition-colors" 
              strokeWidth={2} 
            />
          </Link>
          
        </div>
      </div>

      {/* ── Bottom Border Accent ── */}
      {/* A very subtle 1px teal line at the very bottom of the header to tie the brand together */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-[var(--color-secondary)] via-[var(--color-secondary)]/20 to-transparent" />
    </header>
  );
}