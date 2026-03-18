// import React from "react";

// const ArrowRightCircle = () => (
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     fill="none"
//     viewBox="0 0 24 24"
//     strokeWidth={1.5}
//     stroke="currentColor"
//     className="w-5 h-5 ml-2"
//   >
//     <path
//       strokeLinecap="round"
//       strokeLinejoin="round"
//       d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
//     />
//   </svg>
// );

// const Main = () => {
//   const statsData = [
//     {
//       title: "3M+",
//       subtitle: "MEMBERS",
//       desc: "Registered women forming an unbreakable bond across the South East region.",
//     },
//     {
//       title: "20",
//       subtitle: "YEARS OF INFLUENCE",
//       desc: "Two decades of legislative advocacy and socio-political transformation.",
//     },
//     {
//       title: "VAST",
//       subtitle: "GRASSROOTS NETWORK",
//       desc: "Direct reach into every community, ward, and district in our territory.",
//     },
//   ];

//   const movementData = [
//     {
//       title: "Regional Summit 2023",
//       image: "/img1.jpeg",
//       category: "Summit",
//     },
//     {
//       title: "Legislative Walk 2022",
//       image: "/img2.jpeg",
//       category: "Advocacy",
//     },
//     {
//       title: "Annual Substance Conference",
//       image: "/img3.jpeg",
//       category: "Conference",
//     },
//   ];

//   const teamData = [
//     {
//       name: "High Chief Samson Umejidike Ifediba",
//       role: "President/Founder",
//       linkText: "Meet Our Founder",
//       image: "/img1.jpeg",
//     },
//     {
//       name: "Lolo Madam Doris Umejidike Ifediba",
//       role: "Director",
//       linkText: "Meet Our Director",
//       image: "/img2.jpeg",
//     },
//     {
//       name: "Virginia Okefor",
//       role: "Secretary",
//       linkText: "Meet Our Secretary",
//       image: "/img3.jpeg",
//     },
//     {
//       name: "Elizabeth Okorie",
//       role: "Director",
//       linkText: "Meet Our Director",
//       image: "/img2.jpeg",
//     },
//   ];

//   return (
//     <>
//       <section className="relative min-h-[85vh] lg:min-h-[90vh] flex items-center overflow-hidden">
//         {/* Background Layer */}
//         <div className="absolute inset-0 z-0">
//           <img
//             alt="A massive assembly of empowered women standing together in unity"
//             className="w-full h-full object-cover scale-105 animate-slow-zoom"
//             src="/img3.jpeg"
//           />

//           {/* The Shadow Overlay */}
//           <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent z-10"></div>
//         </div>

//         {/* --- Floating Image Patches Layer (Bubbles) --- */}

//         {/* ----------------------------------------- */}

//         {/* Content Layer */}
//         <div className="main-container relative z-20 pt-24 pb-16 md:py-0 w-full">
//           <div className="max-w-4xl relative z-30">
//             {/* Eyebrow / Tagline */}
//             <div className="flex items-center gap-4 mb-6">
//               <span className="w-12 h-[2px] bg-[var(--color-secondary)] hidden md:block shadow-sm"></span>
//               <p className="font-body text-[var(--color-secondary)] font-semibold tracking-[0.25em] text-xs md:text-sm uppercase drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
//                 Established Excellence
//               </p>
//             </div>

//             {/* Main Headline */}
//             <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl text-white leading-[1.15] uppercase font-bold drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)]">
//               South East{" "}
//               <span className="text-[var(--color-secondary)]">Women</span> of
//               Substance
//             </h1>

//             {/* Subtitle / Description */}
//             <div className="mt-8 border-l-4 border-[var(--color-secondary)] pl-5 md:pl-6 shadow-sm py-2 pr-4 rounded-r-md ">
//               <p className="font-body text-lg md:text-xl text-slate-100 max-w-2xl leading-relaxed font-medium drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
//                 A powerful gathering of women across the South East with over 3
//                 million registered members driving change and community impact.
//               </p>
//             </div>

//             {/* Call to Action Buttons */}
//             <div className="mt-10 flex flex-col sm:flex-row gap-4">
//               <button className="font-body px-8 py-4 bg-[var(--color-secondary)] text-white font-bold uppercase text-sm tracking-wider hover:bg-teal-500 transition-colors duration-300 shadow-[0_4px_14px_0_rgba(0,0,0,0.4)] rounded-sm pointer-events-auto">
//                 Join Our Mission
//               </button>
//               <button className="font-body px-8 py-4 border border-white/50 text-white font-bold uppercase text-sm tracking-wider hover:bg-white/10 hover:border-white transition-all duration-300 shadow-[0_4px_14px_0_rgba(0,0,0,0.4)] rounded-sm bg-black/20 pointer-events-auto">
//                 Learn More
//               </button>
//             </div>
//           </div>
//         </div>
//       </section>

//       <section className="w-full py-20 lg:py-28">
//         <div className="main-container">
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-10 lg:gap-16">
//             {statsData.map((stat, index) => (
//               <div
//                 key={index}
//                 className="bg-white/80 border p-8 flex flex-col items-start gap-4 "
//               >
//                 {/* Decorative Accent Bar */}
//                 <div className="w-12 h-1 bg-[var(--color-secondary)] rounded-full mb-2"></div>

//                 {/* Number / Value */}
//                 <h2 className="font-heading text-5xl lg:text-6xl font-bold text-[var(--color-accent)]">
//                   {stat.title}
//                 </h2>

//                 {/* Subtitle */}
//                 <h3 className="font-heading text-sm lg:text-base font-semibold tracking-wide text-[#85702D] uppercase">
//                   {stat.subtitle}
//                 </h3>

//                 {/* Description */}
//                 <p className="font-body text-[#5D5555] leading-relaxed text-base">
//                   {stat.desc}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* MISSION & HISTORY SECTION */}
//       <section className="bg-[var(--color-bg)] py-20 lg:py-32">
//         <div className="main-container">
//           <div className="flex flex-col md:flex-row items-center gap-10 lg:gap-14">
//             <div className="w-full lg:w-1/2">
//               <div className="mission-image-container relative overflow-hidden">
//                 <img
//                   src="/img2.jpeg"
//                   alt="Women of Substance - Mission and History"
//                   className="w-full h-[50vh] object-cover"
//                 />
//               </div>
//             </div>
//             <div className="w-full lg:w-1/2">
//               <p className="font-body text-sm md:text-base font-bold tracking-[0.2em] uppercase mb-4 text-[#85702D]">
//                 Our Legacy
//               </p>
//               <h2 className="font-heading text-3xl lg:text-5xl text-[var(--color-secondary)] font-extrabold leading-tight mb-8">
//                 OUR MISSION & <br /> HISTORY
//               </h2>

//               <div className="font-body space-y-6 text-[#5D5555] text-lg leading-relaxed">
//                 <p>
//                   For twenty years, the South East Women of Substance
//                   Organization has stood as the definitive voice for progress,
//                   equality, and empowerment. Founded on the principles of
//                   collective action and socio-political engagement, we have
//                   evolved from a local assembly to a 3-million-strong movement.
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

//       {/* --- NEW: OUR IMPACT SECTION --- */}
//       <section className="relative w-full py-24 lg:py-32 flex items-center justify-center bg-[var(--color-accent)]">
//         {/* Right Blue Accent Line */}
//         <div className="absolute top-0 right-0 w-[5px] h-full bg-[#333399]"></div>

//         <div className="max-w-[800px] text-center px-6 relative z-10 flex flex-col items-center">
//           {/* Golden Quote Marks */}
//           <span className="block text-[80px] md:text-[110px] text-[#FFCC66] font-serif leading-none -mb-8 md:-mb-12">
//             ”
//           </span>

//           {/* Heading */}
//           <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-[0.1em] text-[#FFFFCC] font-heading mb-8 md:mb-12">
//             Our Impact
//           </h2>

//           {/* Quote Body */}
//           <p className="text-lg md:text-2xl leading-relaxed text-[#FFFFCC] font-serif italic drop-shadow-sm">
//             "We do not just occupy space; we define it. Our influence is
//             measured not by the loudness of our voices, but by the tangible
//             change we bring to our homes, our communities, and our nation.
//             Through 20 years of unwavering commitment, we have proven that
//             when women of substance stand together, the future is
//             rewritten."
//           </p>
//         </div>
//       </section>
//       {/* ------------------------------- */}

//       <section className="w-full bg-white">
//         <div className="text-center max-w-4xl mx-auto py-16 px-6 lg:py-24">
//           <h2 className="font-heading text-3xl lg:text-5xl font-bold text-[var(--color-secondary)] mb-6">
//             South East Women Directors
//           </h2>
//           <p className="font-body text-base md:text-lg leading-relaxed max-w-3xl mx-auto text-[#5D5555]">
//             With over 3 million registered members, our global team is united in
//             our belief that empowered women build stronger nations. Our team is
//             committed to helping marginalized women achieve their goals and
//             realize their dreams, by listening to and working directly with
//             women to ensure our programs respond to their needs.
//           </p>
//           <div className="w-8 h-[2px] bg-[#0D9488] mx-auto mt-6"></div>
//         </div>

//         <div className="w-full flex flex-col">
//           {teamData.map((member, index) => {
//             // Determines layout alternating (left vs right)
//             const isEven = index % 2 !== 0;

//             // Define the visual sequence to match the screenshot flow
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

//             const currentTheme = themes[index % themes.length];
//             const bgColor = currentTheme.bg;
//             const textColor = currentTheme.text;
//             const imagePosition = isEven ? "left-0" : "right-0";
//             const gradientDirection = isEven
//               ? currentTheme.gradientLeft
//               : currentTheme.gradientRight;

//             const contentAlignment = isEven
//               ? "justify-end pr-8 md:pr-24 lg:pr-48"
//               : "justify-start pl-8 md:pl-24 lg:pl-48";

//             return (
//               <div
//                 key={index}
//                 className={`relative w-full min-h-[350px] md:min-h-[450px] flex items-center overflow-hidden ${bgColor}`}
//               >
//                 <div
//                   className={`absolute top-0 bottom-0 w-full md:w-3/4 lg:w-2/3 ${imagePosition}`}
//                 >
//                   <div
//                     className={`absolute inset-0 z-10 ${gradientDirection}`}
//                   ></div>

//                   <img
//                     src={member.image}
//                     alt={member.name}
//                     className="w-full h-full object-cover object-top md:object-center opacity-40 md:opacity-100"
//                   />
//                 </div>

//                 <div
//                   className={`relative z-20 w-full flex ${contentAlignment}`}
//                 >
//                   <div className="max-w-md">
//                     <h3
//                       className={`font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-2 ${textColor}`}
//                     >
//                       {member.role}
//                     </h3>
//                     <h4
//                       className={`font-heading text-lg md:text-xl font-medium mb-4 opacity-90 ${textColor}`}
//                     >
//                       {member.name}
//                     </h4>
//                     <a
//                       href="#"
//                       className={`font-body inline-flex items-center text-sm md:text-base font-semibold hover:opacity-80 transition-opacity ${textColor}`}
//                     >
//                       {member.linkText} <ArrowRightCircle />
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </section>

//       <section className="bg-[var(--color-bg)] py-20 lg:py-32">
//         <div className="main-container">
//           {/* Section Header */}
//           <div className="text-center mb-16">
//             <p className="font-body text-sm font-bold tracking-[0.3em] uppercase mb-3 text-[#85702D]">
//               Our Movements
//             </p>
//             <h2 className="font-heading text-3xl md:text-5xl font-bold text-[var(--color-secondary)] mb-6">
//               Past Political Events
//             </h2>
//           </div>

//           {/* Video/Image Grid */}
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {movementData.map((item, index) => (
//               <div
//                 key={index}
//                 className="group relative cursor-pointer overflow-hidden rounded-xl shadow-xl transition-all duration-500 hover:-translate-y-2"
//               >
//                 {/* Image Container */}
//                 <div className="aspect-[4/3] w-full overflow-hidden">
//                   <img
//                     src={item.image}
//                     alt={item.title}
//                     className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
//                   />
//                   {/* Dark Overlay */}
//                   <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300"></div>
//                 </div>

//                 {/* Play Button Overlay */}
//                 <div className="absolute inset-0 flex items-center justify-center">
//                   <div className="w-16 h-12 bg-white rounded-xl flex items-center justify-center shadow-2xl transform group-hover:scale-110 transition-transform duration-300">
//                     <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[12px] border-l-[#4A0E0E] border-b-[8px] border-b-transparent ml-1"></div>
//                   </div>
//                 </div>

//                 {/* Text Content */}
//                 <div className="absolute bottom-0 left-0 p-6 w-full">
//                   <h3 className="font-heading text-white text-lg md:text-xl font-bold uppercase tracking-wider drop-shadow-md">
//                     {item.title}
//                   </h3>
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
import React from "react";
import Image from "next/image";

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

/* ── Static Data (Moved Outside Component to prevent re-renders) ── */
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
            className="hero-img object-cover"
            priority
          />
          {/* Overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/20" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
          <div className="absolute inset-y-0 left-0 hidden md:block w-[52%] backdrop-blur-[4px] saturate-65 bg-gradient-to-r from-black/20 to-transparent" />
        </div>

        {/* Top border strip */}
        <div className="absolute top-0 left-0 right-0 z-10 h-[3px] bg-[var(--color-secondary)]" />

        {/* Content */}
        <div className="main-container relative z-10 w-full pb-16 md:pb-20 pt-24 top-[-10vw] md:top-[-4rem]">
          <div className="max-w-[680px]">
            <p className="anim-1 font-body font-semibold uppercase text-white/90 text-[0.7rem] tracking-[0.3em] mb-5">
              South East Nigeria · Est. 2003
            </p>

            <h1 className="anim-2 font-heading font-bold text-white uppercase text-[clamp(2.6rem,6vw,5.2rem)] leading-[1.1] tracking-[0.01em]">
              Women of{" "}
              <span className="text-[var(--color-secondary)]">Substance</span>
            </h1>

            <div className="anim-3 w-12 h-0.5 bg-[var(--color-secondary)] my-6" />

            <p className="anim-3 font-body text-white/80 text-[1.05rem] leading-[1.75] max-w-[520px] mb-9">
              A movement of over three million women across the South East
              driving equality, policy reform, and lasting community
              transformation.
            </p>

            <div className="anim-4 flex flex-wrap gap-3">
              <button
                type="button"
                className="font-body font-semibold uppercase text-white text-[0.72rem] tracking-[0.18em] px-8 py-3.5 bg-[var(--color-secondary)] hover:opacity-80 transition-opacity"
              >
                Join Our Mission
              </button>
              <button
                type="button"
                className="font-body font-semibold uppercase text-white text-[0.72rem] tracking-[0.18em] px-8 py-[13px] bg-transparent border border-white/45 hover:border-white/90 transition-colors"
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="relative bg-[var(--color-primary)] border-t border-white/10 overflow-hidden">
        <div
          className="absolute inset-0 z-0 pointer-events-none opacity-[0.04]"
          aria-hidden="true"
        >
          <svg
            className="w-full h-full text-white"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="-5%" cy="-50%" r="450" />

            <circle cx="105%" cy="150%" r="600" opacity="0.8" />

            <circle cx="85%" cy="-20%" r="300" opacity="0.5" />
          </svg>
        </div>

        <div className="main-container relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3">
            {statsData.map((stat, i) => (
              <div
                key={i}
                className={`py-12 border-b md:border-b-0 border-transparent hover:border-[var(--color-secondary)] transition-colors duration-300
            ${i < 2 ? "md:pr-10 md:border-r md:border-white/10" : ""} 
            ${i > 0 ? "md:pl-10" : ""}
          `}
              >
                <div className="flex items-baseline gap-3 mb-2">
                  <span className="font-heading font-bold text-[clamp(2.4rem,4vw,3.5rem)] text-[var(--color-secondary)] leading-none">
                    {stat.title}
                  </span>
                  <span className="font-body font-semibold uppercase text-[0.65rem] tracking-[0.22em] text-white/60">
                    {stat.subtitle}
                  </span>
                </div>
                <p className="font-body text-[0.9rem] text-white/70 leading-[1.7]">
                  {stat.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section> */}



      <section className="relative bg-gray-100 border-t border-gray-200 overflow-hidden">
  
  {/* ── Background: Abstract Patches (Inverted for light background) ── */}
  <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.03]" aria-hidden="true">
    <svg className="w-full h-full text-black" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      {/* Massive sweep anchoring the top-left */}
      <circle cx="-5%" cy="-50%" r="450" />
      
      {/* Giant curve anchoring the bottom-right */}
      <circle cx="105%" cy="150%" r="600" opacity="0.8" />
      
      {/* Subtle intersecting arc on the top-right */}
      <circle cx="85%" cy="-20%" r="300" opacity="0.5" />
    </svg>
  </div>

  {/* ── Content ── */}
  <div className="main-container relative z-10">
    <div className="grid grid-cols-1 md:grid-cols-3">
      {statsData.map((stat, i) => (
        <div 
          key={i} 
          className={`py-12 border-b md:border-b-0 border-transparent hover:border-[var(--color-secondary)] transition-colors duration-300
            ${i < 2 ? "md:pr-10 md:border-r md:border-gray-300" : ""} 
            ${i > 0 ? "md:pl-10" : ""}
          `}
        >
          <div className="flex items-baseline gap-3 mb-2">
            <span className="font-heading font-bold text-[clamp(2.4rem,4vw,3.5rem)] text-[var(--color-secondary)] leading-none">
              {stat.title}
            </span>
            {/* Subtitle changed to gray-500 */}
            <span className="font-body font-semibold uppercase text-[0.65rem] tracking-[0.22em] text-gray-500">
              {stat.subtitle}
            </span>
          </div>
          {/* Description changed to gray-600 */}
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

              <div className="mt-9">
                <a
                  href="#"
                  className="inline-flex items-center text-[0.75rem] font-semibold tracking-[0.12em] uppercase text-[var(--color-secondary)] border-b border-[var(--color-secondary)] pb-0.5 hover:opacity-65 transition-opacity"
                >
                  Discover Our Story <Arrow />
                </a>
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
    </>
  );
};

export default Main;
