"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { signOut } from "next-auth/react";
import { LayoutDashboard, Users, LogOut } from "lucide-react";
import Image from "next/image";

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void; 
}

export default function Sidebar({ isOpen, setIsOpen }: SidebarProps) {
  const pathname = usePathname(); 

  const navItems = [
    { name: "Dashboard", href: "/admin/dashboard", icon: LayoutDashboard },
    { name: "Members", href: "/admin/dashboard/members", icon: Users },
  ];

  const handleLinkClick = () => {
    if (isOpen) {
      setIsOpen(false);
    }
  };

  const handleLogout = async () => {
    await signOut({ callbackUrl: "/admin/auth/login" });
  };

  return (
    <>
      {/* ── Premium Frosted Mobile Backdrop ── */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-40 lg:hidden animate-in fade-in duration-300"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* ── Sidebar Container ── */}
      <aside
        className={`fixed top-0 left-0 h-screen w-[260px] bg-white border-r border-gray-200 z-50 flex flex-col transition-transform duration-400 ease-out transform overflow-hidden ${
          isOpen ? "translate-x-0 shadow-2xl" : "-translate-x-full lg:translate-x-0"
        }`}
        style={{
          /* Signature Top Border Accent */
          borderTop: "4px solid var(--color-secondary)",
        }}
      >
        {/* ── Abstract Background Watermark ── */}
        <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.03]" aria-hidden="true">
          <svg className="w-full h-full text-black" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <circle cx="-10%" cy="10%" r="150" />
            <circle cx="120%" cy="90%" r="200" opacity="0.5" />
          </svg>
        </div>

        {/* Content Wrapper */}
        <div className="relative z-10 flex flex-col h-full">
          
          {/* ── Brand Header ── */}
          <div className="flex flex-col px-6 pt-8 pb-6 shrink-0 border-b border-gray-100">
            <div className="flex items-center gap-3 mb-4">
              {/* <div className="relative w-10 h-10 shrink-0">
                <Image
                  src="/logo2.jpeg"
                  alt="Organization Logo"
                  fill
                  className="object-contain"
                />
              </div> */}
              <div className="flex flex-col">
                <span className="font-body font-bold uppercase text-[0.55rem] tracking-[0.25em] text-[var(--color-secondary)] mb-0.5">
                  Official Portal
                </span>
                <h2 className="font-heading font-bold uppercase text-[var(--color-primary)] text-lg leading-none">
                  SEWOS
                </h2>
              </div>
            </div>
            {/* Accent Divider */}
            <div className="w-8 h-[2px] bg-[var(--color-accent)]" />
          </div>

          {/* ── Navigation Links ── */}
          <div className="flex-1 overflow-y-auto no-scrollbar flex flex-col gap-1.5 px-4">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              const Icon = item.icon;

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={handleLinkClick}
                  className={`relative flex items-center gap-4 px-4 py-3.5 text-[0.7rem] font-body font-bold uppercase tracking-[0.18em] transition-all duration-300 group overflow-hidden ${
                    isActive
                      ? "text-white bg-[var(--color-secondary)] shadow-md"
                      : "text-gray-500 hover:bg-gray-50 hover:text-[var(--color-primary)]"
                  }`}
                >
                  {/* Subtle hover background slide effect for inactive links */}
                  {!isActive && (
                    <div className="absolute inset-0 bg-gray-100 -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out z-0" />
                  )}
                  
                  <Icon
                    className={`relative z-10 w-4 h-4 shrink-0 transition-colors ${
                      isActive
                        ? "text-white"
                        : "text-gray-400 group-hover:text-[var(--color-secondary)]"
                    }`}
                    strokeWidth={isActive ? 2 : 1.5}
                  />
                  <span className="relative z-10 mt-0.5">{item.name}</span>
                </Link>
              );
            })}
          </div>

          {/* ── Bottom Actions (Logout) ── */}
          <div className="p-4 border-t border-gray-100 bg-white shrink-0">
            <button
              onClick={handleLogout}
              className="w-full flex items-center gap-4 px-4 py-3.5 text-[0.7rem] font-body font-bold uppercase tracking-[0.18em] text-gray-500 hover:text-white hover:bg-[var(--color-accent)] transition-colors duration-300 group shadow-sm"
            >
              <LogOut
                className="w-4 h-4 shrink-0 text-gray-400 group-hover:text-white transition-colors"
                strokeWidth={1.5}
              />
              <span className="mt-0.5">Log Out</span>
            </button>
          </div>

        </div>
      </aside>
    </>
  );
}