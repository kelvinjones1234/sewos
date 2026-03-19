"use client";

import React from "react";
import Image from "next/image";
import { Target, Shield, Heart, ArrowRight } from "lucide-react";

/* ── Static Data ── */
const coreValues = [
  {
    icon: <Target className="w-6 h-6" strokeWidth={1.5} />,
    title: "Purpose-Driven",
    desc: "Every initiative, policy draft, and community outreach is rooted in clear, actionable goals to elevate women's status.",
    color: "var(--color-secondary)", // Teal
  },
  {
    icon: <Shield className="w-6 h-6" strokeWidth={1.5} />,
    title: "Unwavering Integrity",
    desc: "We operate with absolute transparency and ethical rigor, building deep trust within the communities we serve.",
    color: "var(--color-primary)", // Navy
  },
  {
    icon: <Heart className="w-6 h-6" strokeWidth={1.5} />,
    title: "Profound Sisterhood",
    desc: "We foster an unbreakable bond, ensuring no woman in our network ever has to walk her leadership journey alone.",
    color: "var(--color-accent)", // Deep Red
  },
];

const milestones = [
  {
    year: "2003",
    title: "The Foundation",
    desc: "Started as a small assembly of 50 women in Enugu.",
  },
  {
    year: "2012",
    title: "Regional Expansion",
    desc: "Established active chapters across all 5 South East states.",
  },
  {
    year: "2018",
    title: "Legislative Victory",
    desc: "Successfully lobbied for the regional Women's Economic Empowerment Bill.",
  },
  {
    year: "2025",
    title: "3 Million Strong",
    desc: "Reached a historic milestone of registered, active community members.",
  },
];

export default function AboutPage() {
  return (
    <main className="w-full bg-white">
      {/* ══════════════════════
          ABOUT HERO (Smaller than landing hero)
      ══════════════════════ */}
      <section className="relative flex items-center overflow-hidden min-h-[60vh] pt-24 pb-16">
        {/* Background */}
        <div className="absolute inset-0 bg-black">
          <Image
            src="/img2.jpeg"
            alt="Women of Substance — About Us"
            fill
            /* Grayscale editorial look */
            className="object-cover grayscale"
            priority
          />
          {/* High-End Monochrome Wash & Blur */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/50 to-white/20 backdrop-blur-[2px]" />
        </div>

        {/* Top border strip - Uses Secondary (Teal) */}
        <div className="absolute top-0 left-0 right-0 z-10 h-[4px] bg-[var(--color-secondary)]" />

        {/* Content */}
        <div className="main-container relative z-10 w-full">
          <div className="max-w-[720px]">
            {/* Overline */}
            <p className="font-body font-semibold uppercase text-[var(--color-secondary)] text-[0.7rem] tracking-[0.3em] mb-4 drop-shadow-sm">
              Our Story · Our Legacy
            </p>

            <h1 className="font-heading font-bold text-white uppercase text-[clamp(2.4rem,5vw,4.5rem)] leading-[1.1] tracking-[0.01em] drop-shadow-md">
              A Sisterhood of{" "}
              <span className="text-[var(--color-secondary)] drop-shadow-md">
                Purpose
              </span>
            </h1>

            {/* Divider */}
            <div className="w-12 h-[3px] bg-[var(--color-accent)] my-6 drop-shadow-sm" />

            <p className="font-body text-white/90 text-[1.1rem] leading-[1.8] max-w-[580px] drop-shadow-md">
              For over two decades, the South East Women of Substance
              Organization has stood as the definitive voice for progress,
              equality, and community empowerment.
            </p>
          </div>
        </div>
      </section>

      {/* ══════════════════════
          WHO WE ARE (The Overlapping Composition)
      ══════════════════════ */}
      <section className="bg-white">
        <div className="main-container py-20 lg:py-28">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-center">
            {/* Left: Text Content */}
            <div className="w-full lg:w-1/2">
              <div className="flex items-center gap-3.5 mb-6">
                <div className="w-7 h-0.5 bg-[var(--color-secondary)]" />
                <span className="font-body font-semibold uppercase text-[0.68rem] tracking-[0.28em] text-[var(--color-secondary)]">
                  Who We Are
                </span>
              </div>

              <h2 className="font-heading font-bold text-[var(--color-primary)] text-[clamp(1.8rem,3vw,2.6rem)] leading-[1.2] tracking-[0.01em] mb-6">
                A Coalition of Strength, Purpose, and Action
              </h2>

              <p className="font-body text-gray-600 text-[0.95rem] leading-[1.85] mb-8">
                The South East Women of Substance (SEWOS) is more than an
                organization; it is a profound sisterhood dedicated to elevating
                the socio-economic and political status of women. We believe
                that when women are empowered, entire communities thrive. Our
                programs bridge the gap between policy and grassroots impact.
              </p>

              <ul className="flex flex-col gap-4 mb-10">
                {[
                  "Advocating for legislative inclusion and equal rights.",
                  "Providing grassroots mentorship and leadership training.",
                  "Fostering a supportive network of female professionals.",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-4">
                    {/* Small accent square for bullets */}
                    <div className="mt-2 w-1.5 h-1.5 bg-[var(--color-accent)] shrink-0 rotate-45" />
                    <span className="font-body text-gray-700 leading-relaxed text-[0.9rem]">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right: Overlapping Image Composition */}
            <div className="w-full lg:w-1/2 relative mt-10 lg:mt-0">
              {/* Main Image */}
              <div className="relative aspect-[4/5] w-[85%] ml-auto z-10">
                <Image
                  src="/img1.jpeg"
                  alt="Women of Substance Assembly"
                  fill
                  className="object-cover shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
                />
                {/* Decorative border accent */}
                <div className="absolute -top-5 -right-5 w-24 h-24 border-t-[4px] border-r-[4px] border-[var(--color-secondary)] pointer-events-none" />
              </div>

              {/* Smaller Overlapping Image */}
              <div className="absolute -bottom-10 left-0 w-48 h-48 sm:w-56 sm:h-56 bg-white p-2 shadow-xl z-20 hidden sm:block">
                <div className="relative w-full h-full">
                  <Image
                    src="/img3.jpeg"
                    alt="Community Outreach"
                    fill
                    className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  />
                </div>
              </div>

              {/* Abstract dot pattern behind the images for texture */}
              <div
                className="absolute top-10 left-10 w-32 h-32 opacity-20 pointer-events-none z-0"
                style={{
                  backgroundImage:
                    "radial-gradient(var(--color-primary) 2px, transparent 2px)",
                  backgroundSize: "12px 12px",
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════
          CORE VALUES
      ══════════════════════ */}
      <section className="relative bg-[var(--color-bg)] border-t border-gray-200 overflow-hidden">
        {/* Background Watermark */}
        <div
          className="absolute inset-0 z-0 pointer-events-none opacity-[0.03]"
          aria-hidden="true"
        >
          <svg
            className="w-full h-full text-[var(--color-primary)]"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="-5%" cy="-50%" r="450" />
            <circle cx="105%" cy="150%" r="600" opacity="0.8" />
            <circle cx="85%" cy="-20%" r="300" opacity="0.5" />
          </svg>
        </div>

        <div className="main-container relative z-10 py-20 lg:py-24">
          <div className="text-center mb-16">
            <span className="font-body font-semibold uppercase text-[0.68rem] tracking-[0.28em] text-[var(--color-secondary)]">
              Our Principles
            </span>
            <h2 className="font-heading font-bold text-[var(--color-primary)] text-[clamp(1.8rem,3vw,2.4rem)] mt-3">
              Core Values
            </h2>
            <div className="w-12 h-0.5 bg-[var(--color-accent)] mx-auto mt-6" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {coreValues.map((val, i) => (
              <div
                key={i}
                className="bg-white p-10 shadow-lg hover:shadow-xl transition-shadow duration-300 relative group"
                style={{ borderTop: `4px solid ${val.color}` }}
              >
                <div
                  className="mb-6 inline-flex p-3 rounded-full bg-slate-50 transition-colors duration-300 group-hover:bg-slate-100"
                  style={{ color: val.color }}
                >
                  {val.icon}
                </div>
                <h3 className="font-heading font-bold text-xl text-[var(--color-primary)] mb-3">
                  {val.title}
                </h3>
                <p className="font-body text-gray-600 text-[0.9rem] leading-[1.7]">
                  {val.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════
          TIMELINE / IMPACT (Dark Section)
      ══════════════════════ */}
      <section className="relative bg-[var(--color-primary)] overflow-hidden">
        {/* Abstract Background Sweeps */}
        <div
          className="absolute inset-0 z-0 pointer-events-none opacity-5"
          aria-hidden="true"
        >
          <svg
            className="w-full h-full text-white"
            viewBox="0 0 1440 600"
            preserveAspectRatio="xMidYMid slice"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <path d="M-200,600 C400,200 800,700 1600,100" />
            <path d="M-200,-100 C300,400 1000,100 1600,500" />
            <circle cx="1200" cy="300" r="400" />
          </svg>
        </div>

        <div className="main-container relative z-10 py-20 lg:py-28 flex flex-col lg:flex-row gap-16 lg:gap-24">
          <div className="w-full lg:w-1/3">
            <div className="w-0.5 h-16 bg-[var(--color-secondary)] mb-6" />
            <h2 className="font-heading font-bold text-white text-[clamp(1.8rem,3vw,2.4rem)] leading-[1.2] mb-6">
              A Legacy of Real Impact
            </h2>
            <p className="font-body text-white/70 text-[0.95rem] leading-[1.8]">
              From a small gathering to a formidable force across the region,
              our timeline is a testament to the resilience and unyielding power
              of women united for a common cause.
            </p>
          </div>

          <div className="w-full lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-12">
            {milestones.map((ms, i) => (
              <div key={i} className="relative pl-6 border-l border-white/10">
                {/* Timeline Dot */}
                <div className="absolute top-0 -left-[5px] w-[9px] h-[9px] bg-[var(--color-secondary)] rounded-full" />

                <span className="font-body font-bold text-[var(--color-secondary)] text-sm tracking-widest uppercase block mb-2">
                  {ms.year}
                </span>
                <h3 className="font-heading font-bold text-white text-lg mb-2">
                  {ms.title}
                </h3>
                <p className="font-body text-white/60 text-sm leading-[1.6]">
                  {ms.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════
          CALL TO ACTION
      ══════════════════════ */}
      <section className="bg-gray-100 border-t border-gray-200">
        <div className="main-container py-20 flex flex-col items-center text-center">
          <h2 className="font-heading font-bold text-[var(--color-primary)] text-[clamp(1.8rem,3vw,2.4rem)] mb-4">
            Be Part of Our Next Chapter
          </h2>
          <p className="font-body text-gray-600 max-w-[600px] mb-8">
            Whether you are looking for mentorship, ready to advocate for
            change, or want to support our grassroots initiatives, there is a
            place for you here.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button
              type="button"
              className="font-body font-semibold uppercase text-white text-[0.72rem] tracking-[0.18em] px-8 py-4 bg-[var(--color-secondary)] hover:bg-[var(--color-primary)] transition-colors duration-300 shadow-lg flex items-center gap-2"
            >
              Become a Member <ArrowRight className="w-4 h-4" />
            </button>
            <button
              type="button"
              className="font-body font-semibold uppercase text-[var(--color-primary)] text-[0.72rem] tracking-[0.18em] px-8 py-4 bg-transparent border border-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white transition-all duration-300"
            >
              Support Our Cause
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
