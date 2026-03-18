import React from "react";

/* ── Static Data (Moved Outside Component) ── */
const quickLinks = [
  { label: "Our Mission & History", href: "#" },
  { label: "Meet the Directors", href: "#" },
  { label: "Past Events & Gallery", href: "#" },
  { label: "Join the Movement", href: "#" },
];

const contactInfo = [
  {
    id: "address",
    icon: (
      <svg className="w-5 h-5 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
    content: (
      <>
        Regional Headquarters
        <br />
        Enugu, Enugu State, Nigeria
      </>
    ),
  },
  {
    id: "phone",
    icon: (
      <svg className="w-5 h-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.864-1.051l-3.21-.536a2.25 2.25 0 00-2.516.92l-1.06 1.59a11.92 11.92 0 01-5.739-5.739l1.59-1.06a2.25 2.25 0 00.92-2.516l-.536-3.21a2.25 2.25 0 00-1.051-.864H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
      </svg>
    ),
    content: "+234 (0) 800 000 0000",
  },
  {
    id: "email",
    icon: (
      <svg className="w-5 h-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
    content: "contact@sewomenofsubstance.org",
  },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer 
      aria-label="Site Footer" 
      className="bg-[var(--color-primary)] pt-16 pb-8 border-t-[4px] border-[var(--color-secondary)]"
    >
      <div className="main-container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 mb-12">
          
          {/* Brand & Mission Section */}
          <div className="flex flex-col gap-5">
            <h2 className="font-heading text-2xl lg:text-3xl font-bold uppercase text-white drop-shadow-sm">
              South East Women of Substance{" "}
              <span className="text-[var(--color-secondary)]">(SEWOS)</span>
            </h2>
            <p className="font-body text-slate-300 leading-relaxed text-sm md:text-base opacity-90 pr-4">
              Empowering women across the South East through advocacy,
              leadership, and community impact. Building a legacy of substance
              for over two decades.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-4">
            <h3 className="font-heading text-sm md:text-base font-bold uppercase tracking-[0.15em] text-[#85702D] mb-2">
              Explore
            </h3>
            <ul className="flex flex-col gap-3 font-body text-sm md:text-base text-slate-300">
              {quickLinks.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    className="group flex items-center gap-2 hover:text-[var(--color-secondary)] transition-colors duration-300"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-600 group-hover:bg-[var(--color-secondary)] transition-colors duration-300" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col gap-4">
            <h3 className="font-heading text-sm md:text-base font-bold uppercase tracking-[0.15em] text-[#85702D] mb-2">
              Connect
            </h3>
            <address className="not-italic flex flex-col gap-4 font-body text-sm md:text-base text-slate-300">
              {contactInfo.map((info) => (
                <p key={info.id} className="flex items-start gap-3">
                  <span className="text-[var(--color-secondary)]">{info.icon}</span>
                  <span>{info.content}</span>
                </p>
              ))}
            </address>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-body text-xs md:text-sm text-slate-400">
            &copy; {currentYear} South East Women of Substance. All rights reserved.
          </p>
          <div className="flex gap-6 font-body text-xs md:text-sm text-slate-400">
            <a href="#" className="hover:text-white transition-colors duration-300">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors duration-300">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;