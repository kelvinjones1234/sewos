// "use client";
// import React from "react";
// import Image from "next/image";

// /* ── Arrow icon ── */
// const Arrow = () => (
//   <svg
//     viewBox="0 0 20 20"
//     fill="none"
//     stroke="currentColor"
//     strokeWidth={1.5}
//     className="w-4 h-4 ml-2 shrink-0"
//   >
//     <path
//       strokeLinecap="round"
//       strokeLinejoin="round"
//       d="M4 10h12M10 4l6 6-6 6"
//     />
//   </svg>
// );

// const statsData = [
//   {
//     title: "3M+",
//     subtitle: "Members",
//     desc: "Registered women forming an unbreakable bond across the South East region.",
//   },
//   {
//     title: "20",
//     subtitle: "Years of Influence",
//     desc: "Two decades of legislative advocacy and socio-political transformation.",
//   },
//   {
//     title: "VAST",
//     subtitle: "Grassroots Network",
//     desc: "Direct reach into every community, ward, and district in our territory.",
//   },
// ];

// const movementData = [
//   { title: "Regional Summit 2023", image: "/img1.jpeg", category: "Summit" },
//   { title: "Legislative Walk 2022", image: "/img2.jpeg", category: "Advocacy" },
//   {
//     title: "Annual Substance Conference",
//     image: "/img3.jpeg",
//     category: "Conference",
//   },
// ];

// const teamData = [
//   {
//     name: "High Chief Samson Umejidike Ifediba",
//     role: "President / Founder",
//     linkText: "Meet Our Founder",
//     image: "/img1.jpeg",
//   },
//   {
//     name: "Lolo Madam Doris Umejidike Ifediba",
//     role: "Director",
//     linkText: "Meet Our Director",
//     image: "/img2.jpeg",
//   },
//   {
//     name: "Virginia Okefor",
//     role: "Secretary",
//     linkText: "Meet Our Secretary",
//     image: "/img3.jpeg",
//   },
//   {
//     name: "Elizabeth Okorie",
//     role: "Director",
//     linkText: "Meet Our Director",
//     image: "/img2.jpeg",
//   },
// ];

// const Main = () => {
//   return (
//     <>
//       {/* Note: For a production Next.js app, it's highly recommended to move
//         these keyframes into your tailwind.config.js or globals.css file.
//       */}
//       <style>{`
//         @keyframes heroZoom {
//           from { transform: scale(1.04); }
//           to   { transform: scale(1.00); }
//         }
//         @keyframes fadeUp {
//           from { opacity: 0; transform: translateY(18px); }
//           to   { opacity: 1; transform: translateY(0); }
//         }
//         .hero-img { animation: heroZoom 20s ease-in-out infinite alternate; }
//         .anim-1 { animation: fadeUp 0.7s 0.2s ease both; }
//         .anim-2 { animation: fadeUp 0.7s 0.4s ease both; }
//         .anim-3 { animation: fadeUp 0.7s 0.6s ease both; }
//         .anim-4 { animation: fadeUp 0.7s 0.8s ease both; }
//       `}</style>

//       {/* ══════════════════════
//           HERO
//       ══════════════════════ */}
//       {/* ══════════════════════
//           HERO
//       ══════════════════════ */}
//       <section className="relative flex items-end overflow-hidden min-h-[92vh]">
//         {/* Background */}
//         <div className="absolute inset-0 bg-black">
//           <Image
//             src="/img3.jpeg"
//             alt="South East Women of Substance — assembly"
//             fill
//             /* Keeps the grayscale editorial look so your brand colors stand out */
//             className="hero-img object-cover"
//             priority
//           />

//           {/* High-End Monochrome Wash & Blur */}
//           <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/70 " />
//         </div>

//         {/* Top border strip - Uses Secondary (Teal) */}

//         {/* Content */}
//         <div className="main-container relative z-10 w-full pb-16 md:pb-20 pt-24 top-[-10vw] md:top-[-4rem]">
//           <div className="max-w-[680px]">
//             {/* Overline uses Secondary (Teal) */}
//             <p className="anim-1 font-body font-semibold uppercase text-[var(--color-secondary)] text-[0.7rem] tracking-[0.3em] mb-5 drop-shadow-sm">
//               South East Nigeria · Est. 2003
//             </p>

//             <h1 className="anim-2 font-heading font-bold text-white uppercase text-[clamp(2.6rem,6vw,5.2rem)] leading-[1.1] tracking-[0.01em] drop-shadow-md">
//               Women of {/* Highlight uses Secondary (Teal) */}
//               <span className="text-[var(--color-secondary)] drop-shadow-md">
//                 Substance
//               </span>
//             </h1>

//             {/* Divider uses Accent (Deep Red) for a highly professional, subtle pop */}
//             <div className="anim-3 w-12 h-[3px] bg-[var(--color-accent)] my-6 drop-shadow-sm" />

//             {/* Main text remains white for readability against the dark wash */}
//             <p className="anim-3 font-body text-white/90 text-[1.05rem] leading-[1.75] max-w-[520px] mb-9 drop-shadow-md">
//               A movement of over three million women across the South East
//               driving equality, policy reform, and lasting community
//               transformation.
//             </p>

//             <div className="anim-4 flex flex-wrap gap-4">
//               {/* Primary Button: Uses Teal (Secondary) for high visibility, hovers to Navy (Primary) */}
//               {/* Primary Button: Stays Teal, smoothly shifts opacity */}
//               <button
//                 type="button"
//                 className="font-body font-semibold uppercase text-white text-[0.72rem] tracking-[0.18em] px-8 py-3.5 bg-[var(--color-secondary)] hover:opacity-85 transition-opacity duration-300 shadow-lg"
//               >
//                 Join Our Mission
//               </button>

//               {/* Secondary Button: Frosted glass lights up and becomes crisper on hover */}
//               <button
//                 type="button"
//                 className="font-body font-semibold uppercase text-white text-[0.72rem] tracking-[0.18em] px-8 py-[13px] bg-white/5 border border-white/50 hover:bg-white/20 hover:border-white transition-all duration-300 shadow-md backdrop-blur-sm"
//               >
//                 Learn More
//               </button>
//             </div>
//           </div>
//         </div>
//       </section>

//       <section className="relative bg-gray-200 border-t border-gray-300 overflow-hidden">
//         {/* ── Background: Abstract Patches ── */}
//         <div
//           className="absolute inset-0 z-0 pointer-events-none opacity-[0.03]"
//           aria-hidden="true"
//         >
//           <svg
//             className="w-full h-full text-black"
//             fill="currentColor"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <circle cx="-5%" cy="-50%" r="450" />
//             <circle cx="105%" cy="150%" r="600" opacity="0.8" />
//             <circle cx="85%" cy="-20%" r="300" opacity="0.5" />
//           </svg>
//         </div>

//         {/* ── Content ── */}
//         <div className="main-container relative z-10">
//           <div className="grid grid-cols-1 md:grid-cols-3">
//             {statsData.map((stat, i) => (
//               <div
//                 key={i}
//                 className={`py-12 md:border-b-0 border-[var(--color-secondary)] transition-colors duration-300
//             ${i !== statsData.length - 1 ? "border-b" : ""}
//             ${i < 2 ? "md:pr-10 md:border-r md:border-gray-300" : ""}
//             ${i > 0 ? "md:pl-10" : ""}
//           `}
//               >
//                 <div className="flex items-baseline gap-3 mb-2">
//                   <span className="font-heading font-bold text-[clamp(2.4rem,4vw,3.5rem)] text-[var(--color-secondary)] leading-none">
//                     {stat.title}
//                   </span>
//                   <span className="font-body font-semibold uppercase text-[0.65rem] tracking-[0.22em] text-gray-500">
//                     {stat.subtitle}
//                   </span>
//                 </div>
//                 <p className="font-body text-[0.9rem] text-gray-600 leading-[1.7]">
//                   {stat.desc}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//       {/* ══════════════════════
//           MISSION & HISTORY
//       ══════════════════════ */}
//       <section className="bg-[var(--color-bg)]">
//         <div className="main-container py-20 lg:py-28">
//           <div className="flex items-center gap-3.5 mb-12">
//             <div className="w-7 h-0.5 bg-[var(--color-secondary)]" />
//             <span className="font-body font-semibold uppercase text-[0.68rem] tracking-[0.28em] text-[var(--color-secondary)]">
//               Our Legacy
//             </span>
//           </div>

//           <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
//             {/* Image */}
//             <div className="w-full lg:w-1/2 shrink-0 relative h-[440px]">
//               <Image
//                 src="/img2.jpeg"
//                 alt="Women of Substance — Mission and History"
//                 fill
//                 className="object-cover"
//               />
//             </div>

//             {/* Text */}
//             <div className="w-full lg:w-1/2">
//               <h2 className="font-heading font-bold text-[var(--color-secondary)] text-[clamp(1.8rem,3vw,2.6rem)] leading-[1.2] tracking-[0.01em] mb-6">
//                 Our Mission &<br />
//                 History
//               </h2>

//               <div className="w-9 h-0.5 bg-[var(--color-secondary)] mb-7" />

//               <div className="font-body text-[#5D5555] text-base leading-[1.85] space-y-5">
//                 <p>
//                   For twenty years, the South East Women of Substance
//                   Organization has stood as the definitive voice for progress,
//                   equality, and empowerment. Founded on the principles of
//                   collective action and socio-political engagement, we have
//                   evolved from a local assembly to a three-million-strong
//                   movement.
//                 </p>
//                 <p>
//                   Our programs bridge the gap between policy and grassroots
//                   impact, ensuring that every woman in our region possesses the
//                   resources, knowledge, and platform to lead within her sphere
//                   of influence.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       <section className="relative bg-[var(--color-accent)] overflow-hidden">
//         {/* ── Background Sweeping Lines ── */}
//         <div
//           className="absolute inset-0 z-0 pointer-events-none opacity-10"
//           aria-hidden="true"
//         >
//           <svg
//             className="w-full h-full text-white"
//             viewBox="0 0 1440 600"
//             preserveAspectRatio="xMidYMid slice"
//             fill="none"
//             stroke="currentColor"
//             strokeWidth="1.5"
//           >
//             {/* Sweeping curve from bottom-left to top-right */}
//             <path d="M-200,600 C400,200 800,700 1600,100" />
//             {/* Sweeping curve from top-left to bottom-right */}
//             <path d="M-200,-100 C300,400 1000,100 1600,500" />
//             {/* Large circular arc on the right side */}
//             <circle cx="1200" cy="300" r="400" />
//             {/* Large circular arc on the left side */}
//             <circle cx="100" cy="100" r="600" />
//           </svg>
//         </div>

//         {/* ── Content (Added relative and z-10 to stay above the lines) ── */}
//         <div className="main-container py-20 lg:py-24 relative z-10">
//           <div className="flex flex-col lg:flex-row lg:items-center gap-12 lg:gap-20">
//             {/* Left: label */}
//             <div className="shrink-0 flex flex-col items-start gap-3">
//               <div className="w-0.5 h-16 bg-[var(--color-secondary)]" />
//               <span className="font-heading font-bold uppercase text-white text-[clamp(1.4rem,2.5vw,2rem)] tracking-[0.06em] leading-[1.2]">
//                 Our
//                 <br />
//                 Impact
//               </span>
//             </div>

//             {/* Right: quote */}
//             <blockquote className="font-body text-[clamp(1rem,1.8vw,1.25rem)] italic text-white/80 leading-[1.85] border-l-2 border-white/15 pl-8">
//               "We do not just occupy space; we define it. Our influence is
//               measured not by the loudness of our voices, but by the tangible
//               change we bring to our homes, our communities, and our nation.
//               Through 20 years of unwavering commitment, we have proven that
//               when women of substance stand together, the future is rewritten."
//             </blockquote>
//           </div>
//         </div>
//       </section>

//       {/* ══════════════════════
//           LEADERSHIP
//       ══════════════════════ */}
//       <section className="w-full bg-white">
//         {/* Header */}
//         <div className="main-container py-[4rem]">
//           <div className="flex items-center gap-3.5 mb-6">
//             <div className="w-7 h-0.5 bg-[#0D9488]" />
//             <span className="font-body font-semibold uppercase text-[0.68rem] tracking-[0.28em] text-[#0D9488]">
//               Leadership
//             </span>
//           </div>
//           <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
//             <h2 className="font-heading font-bold text-[var(--color-secondary)] text-[clamp(1.6rem,3vw,2.4rem)] leading-[1.2]">
//               South East Women Directors
//             </h2>
//             <p className="font-body text-[#5D5555] text-[0.95rem] leading-[1.75] max-w-[480px]">
//               United in the belief that empowered women build stronger nations,
//               our directors work directly with communities to ensure every
//               programme responds to real needs.
//             </p>
//           </div>
//         </div>

//         {/* Team rows */}
//         <div className="w-full flex flex-col">
//           {teamData.map((member, index) => {
//             const isEven = index % 2 !== 0;
//             const themes = [
//               {
//                 bg: "bg-[var(--color-secondary)]",
//                 text: "text-white",
//                 gradientLeft:
//                   "bg-gradient-to-l from-[var(--color-secondary)] to-transparent",
//                 gradientRight:
//                   "bg-gradient-to-r from-[var(--color-secondary)] to-transparent",
//               },
//               {
//                 bg: "bg-[var(--color-bg)]",
//                 text: "text-[var(--color-primary)]",
//                 gradientLeft:
//                   "bg-gradient-to-l from-[var(--color-bg)] to-transparent",
//                 gradientRight:
//                   "bg-gradient-to-r from-[var(--color-bg)] to-transparent",
//               },
//               {
//                 bg: "bg-[var(--color-secondary)]",
//                 text: "text-white",
//                 gradientLeft:
//                   "bg-gradient-to-l from-[var(--color-secondary)] to-transparent",
//                 gradientRight:
//                   "bg-gradient-to-r from-[var(--color-secondary)] to-transparent",
//               },
//               {
//                 bg: "bg-[var(--color-primary)]",
//                 text: "text-white",
//                 gradientLeft:
//                   "bg-gradient-to-l from-[var(--color-primary)] to-transparent",
//                 gradientRight:
//                   "bg-gradient-to-r from-[var(--color-primary)] to-transparent",
//               },
//             ];
//             const t = themes[index % themes.length];
//             const imagePos = isEven ? "left-0" : "right-0";
//             const gradientDir = isEven ? t.gradientLeft : t.gradientRight;
//             const contentAlign = isEven
//               ? "justify-end pr-8 md:pr-24 lg:pr-48"
//               : "justify-start pl-8 md:pl-24 lg:pl-48";

//             return (
//               <div
//                 key={index}
//                 className={`relative w-full min-h-[350px] md:min-h-[450px] flex items-center overflow-hidden ${t.bg}`}
//               >
//                 <div
//                   className={`absolute top-0 bottom-0 w-full md:w-3/4 lg:w-2/3 ${imagePos}`}
//                 >
//                   <div className={`absolute inset-0 z-10 ${gradientDir}`} />
//                   <Image
//                     src={member.image}
//                     alt={member.name}
//                     fill
//                     className="object-cover object-top md:object-center opacity-40 md:opacity-100"
//                   />
//                 </div>
//                 <div className={`relative z-20 w-full flex ${contentAlign}`}>
//                   <div className="max-w-md">
//                     <h3
//                       className={`font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-2 ${t.text}`}
//                     >
//                       {member.role}
//                     </h3>
//                     <h4
//                       className={`font-heading text-lg md:text-xl font-medium mb-4 opacity-90 ${t.text}`}
//                     >
//                       {member.name}
//                     </h4>
//                     <a
//                       href="#"
//                       className={`font-body inline-flex items-center text-sm md:text-base font-semibold hover:opacity-70 transition-opacity ${t.text}`}
//                     >
//                       {member.linkText}
//                       <Arrow />
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </section>

//       {/* ══════════════════════
//           PAST EVENTS
//       ══════════════════════ */}
//       <section className="bg-[var(--color-bg)]">
//         <div className="main-container py-20 lg:py-28">
//           {/* Header */}
//           <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-14">
//             <div>
//               <div className="flex items-center gap-3.5 mb-4">
//                 <div className="w-7 h-0.5 bg-[var(--color-secondary)]" />
//                 <span className="font-body font-semibold uppercase text-[0.68rem] tracking-[0.28em] text-[var(--color-secondary)]">
//                   Our Movements
//                 </span>
//               </div>
//               <h2 className="font-heading font-bold text-[var(--color-secondary)] text-[clamp(1.6rem,3vw,2.4rem)] leading-[1.2]">
//                 Past Political Events
//               </h2>
//             </div>
//             <a
//               href="#"
//               className="self-start md:self-end inline-flex items-center text-[0.75rem] font-semibold tracking-[0.12em] uppercase text-[var(--color-secondary)] border-b border-[var(--color-secondary)] pb-0.5 hover:opacity-65 transition-opacity"
//             >
//               View All <Arrow />
//             </a>
//           </div>

//           {/* Grid */}
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//             {movementData.map((item, i) => (
//               <div
//                 key={i}
//                 className="group relative overflow-hidden cursor-pointer bg-black aspect-[4/3]"
//               >
//                 <Image
//                   src={item.image}
//                   alt={item.title}
//                   fill
//                   className="object-cover opacity-75 group-hover:scale-105 transition-transform duration-700 ease-in-out"
//                 />

//                 {/* Overlay */}
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

//                 {/* Category */}
//                 <div className="absolute top-0 left-0 bg-[var(--color-secondary)] px-3.5 py-1.5">
//                   <span className="font-body font-semibold uppercase text-white text-[0.62rem] tracking-[0.22em]">
//                     {item.category}
//                   </span>
//                 </div>

//                 {/* Title */}
//                 <div className="absolute bottom-0 left-0 right-0 p-5">
//                   <h3 className="font-heading font-bold text-white text-base leading-[1.35] tracking-[0.02em] mb-2.5">
//                     {item.title}
//                   </h3>
//                   <div>
//                     <span className="inline-flex items-center text-[0.75rem] font-semibold tracking-[0.12em] uppercase text-white border-b border-white/50 pb-0.5 group-hover:opacity-65 transition-opacity">
//                       Watch <Arrow />
//                     </span>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default Main;

"use client";
import React, { useState } from "react";
import Image from "next/image";
import BecomeMemberModal from "./BecomeMemberModal"; // <-- 1. Imported the Modal

/* ── Arrow icon ── */
const Arrow = () => (
  <svg
    viewBox="0 0 20 20"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.5}
    className="w-4 h-4 ml-2 shrink-0"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M4 10h12M10 4l6 6-6 6"
    />
  </svg>
);

const statsData = [
  {
    title: "3M+",
    subtitle: "Members",
    desc: "Registered women forming an unbreakable bond across the South East region.",
  },
  {
    title: "20",
    subtitle: "Years of Influence",
    desc: "Two decades of legislative advocacy and socio-political transformation.",
  },
  {
    title: "VAST",
    subtitle: "Grassroots Network",
    desc: "Direct reach into every community, ward, and district in our territory.",
  },
];

const movementData = [
  { title: "Regional Summit 2023", image: "/img1.jpeg", category: "Summit" },
  { title: "Legislative Walk 2022", image: "/img2.jpeg", category: "Advocacy" },
  {
    title: "Annual Substance Conference",
    image: "/img3.jpeg",
    category: "Conference",
  },
];

const teamData = [
  {
    name: "High Chief Samson Umejidike Ifediba",
    role: "President / Founder",
    linkText: "Meet Our Founder",
    image: "/img1.jpeg",
  },
  {
    name: "Lolo Madam Doris Umejidike Ifediba",
    role: "Director",
    linkText: "Meet Our Director",
    image: "/img2.jpeg",
  },
  {
    name: "Virginia Okefor",
    role: "Secretary",
    linkText: "Meet Our Secretary",
    image: "/img3.jpeg",
  },
  {
    name: "Elizabeth Okorie",
    role: "Director",
    linkText: "Meet Our Director",
    image: "/img2.jpeg",
  },
];

const Main = () => {
  // 2. Added state to control the modal's visibility
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      {/* Note: For a production Next.js app, it's highly recommended to move 
        these keyframes into your tailwind.config.js or globals.css file. 
      */}
      <style>{`
        @keyframes heroZoom {
          from { transform: scale(1.04); }
          to   { transform: scale(1.00); }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(18px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .hero-img { animation: heroZoom 20s ease-in-out infinite alternate; }
        .anim-1 { animation: fadeUp 0.7s 0.2s ease both; }
        .anim-2 { animation: fadeUp 0.7s 0.4s ease both; }
        .anim-3 { animation: fadeUp 0.7s 0.6s ease both; }
        .anim-4 { animation: fadeUp 0.7s 0.8s ease both; }
      `}</style>

      {/* ══════════════════════
          HERO
      ══════════════════════ */}
      <section className="relative flex items-end overflow-hidden min-h-[92vh]">
        {/* Background */}
        <div className="absolute inset-0 bg-black">
          <Image
            src="/img3.jpeg"
            alt="South East Women of Substance — assembly"
            fill
            /* Keeps the grayscale editorial look so your brand colors stand out */
            className="hero-img object-cover"
            priority
          />

          {/* High-End Monochrome Wash & Blur */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/70 " />
        </div>

        {/* Content */}
        <div className="main-container relative z-10 w-full pb-16 md:pb-20 pt-24 top-[-10vw] md:top-[-4rem]">
          <div className="max-w-[680px]">
            {/* Overline uses Secondary (Teal) */}
            <p className="anim-1 font-body font-semibold uppercase text-[var(--color-secondary)] text-[0.7rem] tracking-[0.3em] mb-5 drop-shadow-sm">
              South East Nigeria · Est. 2003
            </p>

            <h1 className="anim-2 font-heading font-bold text-white uppercase text-[clamp(2.6rem,6vw,5.2rem)] leading-[1.1] tracking-[0.01em] drop-shadow-md">
              Women of {/* Highlight uses Secondary (Teal) */}
              <span className="text-[var(--color-secondary)] drop-shadow-md">
                Substance
              </span>
            </h1>

            {/* Divider uses Accent (Deep Red) for a highly professional, subtle pop */}
            <div className="anim-3 w-12 h-[3px] bg-[var(--color-accent)] my-6 drop-shadow-sm" />

            {/* Main text remains white for readability against the dark wash */}
            <p className="anim-3 font-body text-white/90 text-[1.05rem] leading-[1.75] max-w-[520px] mb-9 drop-shadow-md">
              A movement of over three million women across the South East
              driving equality, policy reform, and lasting community
              transformation.
            </p>

            <div className="anim-4 flex flex-wrap gap-4">
              {/* Primary Button: Uses Teal (Secondary) for high visibility, hovers to Navy (Primary) */}
              {/* 3. Added onClick handler here */}
              <button
                type="button"
                onClick={() => setIsModalOpen(true)}
                className="font-body font-semibold uppercase text-white text-[0.72rem] tracking-[0.18em] px-8 py-3.5 bg-[var(--color-secondary)] hover:opacity-85 transition-opacity duration-300 shadow-lg"
              >
                Join Our Mission
              </button>

              {/* Secondary Button: Frosted glass lights up and becomes crisper on hover */}
              <button
                type="button"
                className="font-body font-semibold uppercase text-white text-[0.72rem] tracking-[0.18em] px-8 py-[13px] bg-white/5 border border-white/50 hover:bg-white/20 hover:border-white transition-all duration-300 shadow-md backdrop-blur-sm"
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="relative bg-gray-200 border-t border-gray-300 overflow-hidden">
        {/* ── Background: Abstract Patches ── */}
        <div
          className="absolute inset-0 z-0 pointer-events-none opacity-[0.03]"
          aria-hidden="true"
        >
          <svg
            className="w-full h-full text-black"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="-5%" cy="-50%" r="450" />
            <circle cx="105%" cy="150%" r="600" opacity="0.8" />
            <circle cx="85%" cy="-20%" r="300" opacity="0.5" />
          </svg>
        </div>

        {/* ── Content ── */}
        <div className="main-container relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3">
            {statsData.map((stat, i) => (
              <div
                key={i}
                className={`py-12 md:border-b-0 border-[var(--color-secondary)] transition-colors duration-300
            ${i !== statsData.length - 1 ? "border-b" : ""} 
            ${i < 2 ? "md:pr-10 md:border-r md:border-gray-300" : ""} 
            ${i > 0 ? "md:pl-10" : ""}
          `}
              >
                <div className="flex items-baseline gap-3 mb-2">
                  <span className="font-heading font-bold text-[clamp(2.4rem,4vw,3.5rem)] text-[var(--color-secondary)] leading-none">
                    {stat.title}
                  </span>
                  <span className="font-body font-semibold uppercase text-[0.65rem] tracking-[0.22em] text-gray-500">
                    {stat.subtitle}
                  </span>
                </div>
                <p className="font-body text-[0.9rem] text-gray-600 leading-[1.7]">
                  {stat.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════
          MISSION & HISTORY
      ══════════════════════ */}
      <section className="bg-[var(--color-bg)]">
        <div className="main-container py-20 lg:py-28">
          <div className="flex items-center gap-3.5 mb-12">
            <div className="w-7 h-0.5 bg-[var(--color-secondary)]" />
            <span className="font-body font-semibold uppercase text-[0.68rem] tracking-[0.28em] text-[var(--color-secondary)]">
              Our Legacy
            </span>
          </div>

          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
            {/* Image */}
            <div className="w-full lg:w-1/2 shrink-0 relative h-[440px]">
              <Image
                src="/img2.jpeg"
                alt="Women of Substance — Mission and History"
                fill
                className="object-cover"
              />
            </div>

            {/* Text */}
            <div className="w-full lg:w-1/2">
              <h2 className="font-heading font-bold text-[var(--color-secondary)] text-[clamp(1.8rem,3vw,2.6rem)] leading-[1.2] tracking-[0.01em] mb-6">
                Our Mission &<br />
                History
              </h2>

              <div className="w-9 h-0.5 bg-[var(--color-secondary)] mb-7" />

              <div className="font-body text-[#5D5555] text-base leading-[1.85] space-y-5">
                <p>
                  For twenty years, the South East Women of Substance
                  Organization has stood as the definitive voice for progress,
                  equality, and empowerment. Founded on the principles of
                  collective action and socio-political engagement, we have
                  evolved from a local assembly to a three-million-strong
                  movement.
                </p>
                <p>
                  Our programs bridge the gap between policy and grassroots
                  impact, ensuring that every woman in our region possesses the
                  resources, knowledge, and platform to lead within her sphere
                  of influence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative bg-[var(--color-accent)] overflow-hidden">
        {/* ── Background Sweeping Lines ── */}
        <div
          className="absolute inset-0 z-0 pointer-events-none opacity-10"
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
            {/* Sweeping curve from bottom-left to top-right */}
            <path d="M-200,600 C400,200 800,700 1600,100" />
            {/* Sweeping curve from top-left to bottom-right */}
            <path d="M-200,-100 C300,400 1000,100 1600,500" />
            {/* Large circular arc on the right side */}
            <circle cx="1200" cy="300" r="400" />
            {/* Large circular arc on the left side */}
            <circle cx="100" cy="100" r="600" />
          </svg>
        </div>

        {/* ── Content (Added relative and z-10 to stay above the lines) ── */}
        <div className="main-container py-20 lg:py-24 relative z-10">
          <div className="flex flex-col lg:flex-row lg:items-center gap-12 lg:gap-20">
            {/* Left: label */}
            <div className="shrink-0 flex flex-col items-start gap-3">
              <div className="w-0.5 h-16 bg-[var(--color-secondary)]" />
              <span className="font-heading font-bold uppercase text-white text-[clamp(1.4rem,2.5vw,2rem)] tracking-[0.06em] leading-[1.2]">
                Our
                <br />
                Impact
              </span>
            </div>

            {/* Right: quote */}
            <blockquote className="font-body text-[clamp(1rem,1.8vw,1.25rem)] italic text-white/80 leading-[1.85] border-l-2 border-white/15 pl-8">
              "We do not just occupy space; we define it. Our influence is
              measured not by the loudness of our voices, but by the tangible
              change we bring to our homes, our communities, and our nation.
              Through 20 years of unwavering commitment, we have proven that
              when women of substance stand together, the future is rewritten."
            </blockquote>
          </div>
        </div>
      </section>

      {/* ══════════════════════
          LEADERSHIP
      ══════════════════════ */}
      <section className="w-full bg-white">
        {/* Header */}
        <div className="main-container py-[4rem]">
          <div className="flex items-center gap-3.5 mb-6">
            <div className="w-7 h-0.5 bg-[#0D9488]" />
            <span className="font-body font-semibold uppercase text-[0.68rem] tracking-[0.28em] text-[#0D9488]">
              Leadership
            </span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <h2 className="font-heading font-bold text-[var(--color-secondary)] text-[clamp(1.6rem,3vw,2.4rem)] leading-[1.2]">
              South East Women Directors
            </h2>
            <p className="font-body text-[#5D5555] text-[0.95rem] leading-[1.75] max-w-[480px]">
              United in the belief that empowered women build stronger nations,
              our directors work directly with communities to ensure every
              programme responds to real needs.
            </p>
          </div>
        </div>

        {/* Team rows */}
        <div className="w-full flex flex-col">
          {teamData.map((member, index) => {
            const isEven = index % 2 !== 0;
            const themes = [
              {
                bg: "bg-[var(--color-secondary)]",
                text: "text-white",
                gradientLeft:
                  "bg-gradient-to-l from-[var(--color-secondary)] to-transparent",
                gradientRight:
                  "bg-gradient-to-r from-[var(--color-secondary)] to-transparent",
              },
              {
                bg: "bg-[var(--color-bg)]",
                text: "text-[var(--color-primary)]",
                gradientLeft:
                  "bg-gradient-to-l from-[var(--color-bg)] to-transparent",
                gradientRight:
                  "bg-gradient-to-r from-[var(--color-bg)] to-transparent",
              },
              {
                bg: "bg-[var(--color-secondary)]",
                text: "text-white",
                gradientLeft:
                  "bg-gradient-to-l from-[var(--color-secondary)] to-transparent",
                gradientRight:
                  "bg-gradient-to-r from-[var(--color-secondary)] to-transparent",
              },
              {
                bg: "bg-[var(--color-primary)]",
                text: "text-white",
                gradientLeft:
                  "bg-gradient-to-l from-[var(--color-primary)] to-transparent",
                gradientRight:
                  "bg-gradient-to-r from-[var(--color-primary)] to-transparent",
              },
            ];
            const t = themes[index % themes.length];
            const imagePos = isEven ? "left-0" : "right-0";
            const gradientDir = isEven ? t.gradientLeft : t.gradientRight;
            const contentAlign = isEven
              ? "justify-end pr-8 md:pr-24 lg:pr-48"
              : "justify-start pl-8 md:pl-24 lg:pl-48";

            return (
              <div
                key={index}
                className={`relative w-full min-h-[350px] md:min-h-[450px] flex items-center overflow-hidden ${t.bg}`}
              >
                <div
                  className={`absolute top-0 bottom-0 w-full md:w-3/4 lg:w-2/3 ${imagePos}`}
                >
                  <div className={`absolute inset-0 z-10 ${gradientDir}`} />
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover object-top md:object-center opacity-40 md:opacity-100"
                  />
                </div>
                <div className={`relative z-20 w-full flex ${contentAlign}`}>
                  <div className="max-w-md">
                    <h3
                      className={`font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-2 ${t.text}`}
                    >
                      {member.role}
                    </h3>
                    <h4
                      className={`font-heading text-lg md:text-xl font-medium mb-4 opacity-90 ${t.text}`}
                    >
                      {member.name}
                    </h4>
                    <a
                      href="#"
                      className={`font-body inline-flex items-center text-sm md:text-base font-semibold hover:opacity-70 transition-opacity ${t.text}`}
                    >
                      {member.linkText}
                      <Arrow />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ══════════════════════
          PAST EVENTS
      ══════════════════════ */}
      <section className="bg-[var(--color-bg)]">
        <div className="main-container py-20 lg:py-28">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-14">
            <div>
              <div className="flex items-center gap-3.5 mb-4">
                <div className="w-7 h-0.5 bg-[var(--color-secondary)]" />
                <span className="font-body font-semibold uppercase text-[0.68rem] tracking-[0.28em] text-[var(--color-secondary)]">
                  Our Movements
                </span>
              </div>
              <h2 className="font-heading font-bold text-[var(--color-secondary)] text-[clamp(1.6rem,3vw,2.4rem)] leading-[1.2]">
                Past Political Events
              </h2>
            </div>
            <a
              href="#"
              className="self-start md:self-end inline-flex items-center text-[0.75rem] font-semibold tracking-[0.12em] uppercase text-[var(--color-secondary)] border-b border-[var(--color-secondary)] pb-0.5 hover:opacity-65 transition-opacity"
            >
              View All <Arrow />
            </a>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {movementData.map((item, i) => (
              <div
                key={i}
                className="group relative overflow-hidden cursor-pointer bg-black aspect-[4/3]"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover opacity-75 group-hover:scale-105 transition-transform duration-700 ease-in-out"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

                {/* Category */}
                <div className="absolute top-0 left-0 bg-[var(--color-secondary)] px-3.5 py-1.5">
                  <span className="font-body font-semibold uppercase text-white text-[0.62rem] tracking-[0.22em]">
                    {item.category}
                  </span>
                </div>

                {/* Title */}
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h3 className="font-heading font-bold text-white text-base leading-[1.35] tracking-[0.02em] mb-2.5">
                    {item.title}
                  </h3>
                  <div>
                    <span className="inline-flex items-center text-[0.75rem] font-semibold tracking-[0.12em] uppercase text-white border-b border-white/50 pb-0.5 group-hover:opacity-65 transition-opacity">
                      Watch <Arrow />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Placed the modal component here, right before closing the fragment */}
      <BecomeMemberModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};

export default Main;
