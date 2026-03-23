"use client";

import React from "react";
import Image from "next/image";
import { Target, Shield, Heart, ArrowRight, MapPin, Users } from "lucide-react";

/* ── Updated Static Data ── */
const coreValues = [
  {
    icon: <Users className="w-6 h-6" strokeWidth={1.5} />,
    title: "Regional Mobilization",
    desc: "We harness the collective power of women across the South East, transforming individual voices into a formidable regional force.",
    color: "var(--color-secondary)", // Teal
  },
  {
    icon: <Shield className="w-6 h-6" strokeWidth={1.5} />,
    title: "Formal Integrity",
    desc: "Registered as IT No. 77524, we operate as a recognized legal entity committed to the socio-political advancement of our members.",
    color: "var(--color-primary)", // Navy
  },
  {
    icon: <Heart className="w-6 h-6" strokeWidth={1.5} />,
    title: "Nation Builders",
    desc: "Guided by the philosophy that women are the bedrock of society, we foster leadership that begins at the grassroots level.",
    color: "var(--color-accent)", // Deep Red
  },
];

const milestones = [
  {
    year: "2015",
    title: "Official Incorporation",
    desc: "Formalized our mission in Awka, Anambra State, securing registration No. 77524 to advocate for South East women.",
  },
  {
    year: "2016",
    title: "Historic Mobilization",
    desc: "United over 350,000 women in a landmark rally, demonstrating the unmatched scale of our community influence.",
  },
  {
    year: "2017",
    title: "Political Advocacy",
    desc: "Active engagement in regional governance, ensuring women's voices are central to the South East's political discourse.",
  },
  {
    year: "Active Today",
    title: "The Awka Legacy",
    desc: "Continuing our tradition of high-impact rallies and community assemblies that celebrate the strength of our sisterhood.",
  },
];

export default function AboutPage() {
  return (
    <main className="w-full bg-white">
      {/* ══════════════════════
          ABOUT HERO 
      ══════════════════════ */}
      <section className="relative flex items-center overflow-hidden min-h-[60vh] pt-24 pb-16">
        <div className="absolute inset-0 bg-black">
          <Image
            src="/img2.jpeg"
            alt="South East Women of Substance Rally"
            fill
            className="object-cover grayscale opacity-60"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent backdrop-blur-[1px]" />
        </div>

        <div className="absolute top-0 left-0 right-0 z-10 h-[4px] bg-[var(--color-secondary)]" />

        <div className="main-container relative z-10 w-full">
          <div className="max-w-[720px]">
            <p className="font-body font-semibold uppercase text-[var(--color-secondary)] text-[0.7rem] tracking-[0.3em] mb-4">
              Registered IT No. 77524 • Awka, Nigeria
            </p>

            <h1 className="font-heading font-bold text-white uppercase text-[clamp(2.4rem,5vw,4.2rem)] leading-[1.1] tracking-[0.01em]">
              The Voice of <br />
              <span className="text-[var(--color-secondary)]">South East Women</span>
            </h1>
            
            <div className="w-12 h-[3px] bg-[var(--color-accent)] my-6" />

            <p className="font-body text-white/90 text-[1.1rem] leading-[1.8] max-w-[580px]">
              Rooted in the heart of Anambra State, we are a formalized movement 
              dedicated to regional mobilization, political awareness, and the 
              unwavering empowerment of the Nigerian woman.
            </p>
          </div>
        </div>
      </section>

      {/* ══════════════════════
          WHO WE ARE (Contextualized)
      ══════════════════════ */}
      <section className="bg-white">
        <div className="main-container py-20 lg:py-28">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-center">
            <div className="w-full lg:w-1/2">
              <div className="flex items-center gap-3.5 mb-6">
                <div className="w-7 h-0.5 bg-[var(--color-secondary)]" />
                <span className="font-body font-semibold uppercase text-[0.68rem] tracking-[0.28em] text-[var(--color-secondary)]">
                  Our Identity
                </span>
              </div>

              <h2 className="font-heading font-bold text-[var(--color-primary)] text-[clamp(1.8rem,3vw,2.6rem)] leading-[1.2] mb-6">
                A Legacy of Grassroots Mobilization
              </h2>

              <p className="font-body text-gray-600 text-[0.95rem] leading-[1.85] mb-6">
                The South East Women of Substance (SEWOS) Organization is a formally 
                incorporated body headquartered in Awka. Since our registration in 2015, 
                we have become synonymous with large-scale community action and 
                the celebration of women as the ultimate "Nation Builders."
              </p>

              <p className="font-body text-gray-600 text-[0.95rem] leading-[1.85] mb-8">
                Our presence is most felt during our hallmark rallies, where 
                hundreds of thousands of women gather to align on political 
                direction, economic growth, and social solidarity within the South East.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
                <div className="flex items-center gap-3">
                   <MapPin className="text-[var(--color-accent)] w-5 h-5" />
                   <span className="text-sm font-bold text-[var(--color-primary)]">Headquartered in Awka</span>
                </div>
                <div className="flex items-center gap-3">
                   <Users className="text-[var(--color-accent)] w-5 h-5" />
                   <span className="text-sm font-bold text-[var(--color-primary)]">350,000+ Strong Network</span>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-1/2 relative flex justify-center">
              <div className="relative aspect-[4/5] w-[85%] ml-auto z-10">
                <Image
                  src="/img1.jpeg"
                  alt="Women of Substance Mobilization Rally"
                  fill
                  className="object-cover shadow-2xl"
                />
                <div className="absolute -top-5 -right-5 w-24 h-24 border-t-[4px] border-r-[4px] border-[var(--color-secondary)]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════
          CORE VALUES 
      ══════════════════════ */}
      <section className="relative bg-slate-50 border-t border-gray-200 overflow-hidden">
        <div className="main-container relative z-10 py-20 lg:py-24">
          <div className="text-center mb-16">
            <span className="font-body font-semibold uppercase text-[0.68rem] tracking-[0.28em] text-[var(--color-secondary)]">
              Our Principles
            </span>
            <h2 className="font-heading font-bold text-[var(--color-primary)] text-[clamp(1.8rem,3vw,2.4rem)] mt-3">
              Why We Stand Together
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {coreValues.map((val, i) => (
              <div
                key={i}
                className="bg-white p-10 shadow-sm border-b-4 transition-all duration-300 hover:-translate-y-1"
                style={{ borderBottomColor: val.color }}
              >
                <div className="mb-6 inline-flex text-[var(--color-primary)]">
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
          TIMELINE (Verified Data)
      ══════════════════════ */}
      <section className="relative bg-[var(--color-primary)] overflow-hidden">
        <div className="main-container relative z-10 py-20 lg:py-28 flex flex-col lg:flex-row gap-16 lg:gap-24">
          <div className="w-full lg:w-1/3">
            <div className="w-0.5 h-16 bg-[var(--color-secondary)] mb-6" />
            <h2 className="font-heading font-bold text-white text-[clamp(1.8rem,3vw,2.4rem)] leading-[1.2] mb-6">
              Our Track Record
            </h2>
            <p className="font-body text-white/70 text-[0.95rem] leading-[1.8]">
              Since our formalization, we have consistently mobilized the women 
              of the South East for significant political and social causes.
            </p>
          </div>

          <div className="w-full lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-12">
            {milestones.map((ms, i) => (
              <div key={i} className="relative pl-6 border-l border-white/10">
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
      <section className="bg-white border-t border-gray-200">
        <div className="main-container py-20 flex flex-col items-center text-center">
          <h2 className="font-heading font-bold text-[var(--color-primary)] text-[clamp(1.8rem,3vw,2.4rem)] mb-4">
            Join the Movement
          </h2>
          <p className="font-body text-gray-600 max-w-[600px] mb-8">
            Connect with one of the most active women’s organizations in the 
            South East. Together, we continue our legacy of impact and collective growth.
          </p>
          <button
            type="button"
            className="font-body font-semibold uppercase text-white text-[0.72rem] tracking-[0.18em] px-10 py-5 bg-[var(--color-secondary)] hover:bg-[var(--color-primary)] transition-all shadow-lg flex items-center gap-2"
          >
            Connect With Us <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>
    </main>
  );
}