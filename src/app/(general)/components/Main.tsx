import React from "react";

const ArrowRightCircle = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-5 h-5 ml-2"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
);

const Main = () => {
  const statsData = [
    {
      title: "3M+",
      subtitle: "MEMBERS",
      desc: "Registered women forming an unbreakable bond across the South East region.",
    },
    {
      title: "20",
      subtitle: "YEARS OF INFLUENCE",
      desc: "Two decades of legislative advocacy and socio-political transformation.",
    },
    {
      title: "VAST",
      subtitle: "GRASSROOTS NETWORK",
      desc: "Direct reach into every community, ward, and district in our territory.",
    },
  ];

  const movementData = [
    {
      title: "Regional Summit 2023",
      image: "/img1.jpeg",
      category: "Summit",
    },
    {
      title: "Legislative Walk 2022",
      image: "/img2.jpeg",
      category: "Advocacy",
    },
    {
      title: "Annual Substance Conference",
      image: "/img3.jpeg",
      category: "Conference",
    },
  ];

  const teamData = [
    {
      name: "High Chief Samson Umejidike Ifediba",
      role: "President/Founder",
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

  return (
    <>
      <section className="relative min-h-[85vh] lg:min-h-[90vh] flex items-center overflow-hidden">
        {/* Background Layer */}
        <div className="absolute inset-0 z-0">
          <img
            alt="A massive assembly of empowered women standing together in unity"
            className="w-full h-full object-cover scale-105 animate-slow-zoom"
            src="/img3.jpeg"
          />

          {/* The Shadow Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent z-10"></div>
        </div>

        {/* --- Floating Image Patches Layer (Bubbles) --- */}
        
        {/* ----------------------------------------- */}

        {/* Content Layer */}
        <div className="main-container relative z-20 pt-24 pb-16 md:py-0 w-full">
          <div className="max-w-4xl relative z-30">
            {/* Eyebrow / Tagline */}
            <div className="flex items-center gap-4 mb-6">
              <span className="w-12 h-[2px] bg-[var(--color-secondary)] hidden md:block shadow-sm"></span>
              <p className="font-body text-[var(--color-secondary)] font-semibold tracking-[0.25em] text-xs md:text-sm uppercase drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
                Established Excellence
              </p>
            </div>

            {/* Main Headline */}
            <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl text-white leading-[1.15] uppercase font-bold drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)]">
              South East{" "}
              <span className="text-[var(--color-secondary)]">Women</span> of
              Substance
            </h1>

            {/* Subtitle / Description */}
            <div className="mt-8 border-l-4 border-[var(--color-secondary)] pl-5 md:pl-6 shadow-sm py-2 pr-4 rounded-r-md ">
              <p className="font-body text-lg md:text-xl text-slate-100 max-w-2xl leading-relaxed font-medium drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                A powerful gathering of women across the South East with over 3
                million registered members driving change and community impact.
              </p>
            </div>

            {/* Call to Action Buttons */}
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <button className="font-body px-8 py-4 bg-[var(--color-secondary)] text-white font-bold uppercase text-sm tracking-wider hover:bg-teal-500 transition-colors duration-300 shadow-[0_4px_14px_0_rgba(0,0,0,0.4)] rounded-sm pointer-events-auto">
                Join Our Mission
              </button>
              <button className="font-body px-8 py-4 border border-white/50 text-white font-bold uppercase text-sm tracking-wider hover:bg-white/10 hover:border-white transition-all duration-300 shadow-[0_4px_14px_0_rgba(0,0,0,0.4)] rounded-sm bg-black/20 pointer-events-auto">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-20 lg:py-28">
        <div className="main-container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-10 lg:gap-16">
            {statsData.map((stat, index) => (
              <div
                key={index}
                className="bg-white/80 border p-8 flex flex-col items-start gap-4 "
              >
                {/* Decorative Accent Bar */}
                <div className="w-12 h-1 bg-[var(--color-secondary)] rounded-full mb-2"></div>

                {/* Number / Value */}
                <h2 className="font-heading text-5xl lg:text-6xl font-bold text-[var(--color-accent)]">
                  {stat.title}
                </h2>

                {/* Subtitle */}
                <h3 className="font-heading text-sm lg:text-base font-semibold tracking-wide text-[#85702D] uppercase">
                  {stat.subtitle}
                </h3>

                {/* Description */}
                <p className="font-body text-[#5D5555] leading-relaxed text-base">
                  {stat.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MISSION & HISTORY SECTION */}
      <section className="bg-[var(--color-bg)] py-20 lg:py-32">
        <div className="main-container">
          <div className="flex flex-col md:flex-row items-center gap-10 lg:gap-14">
            <div className="w-full lg:w-1/2">
              <div className="mission-image-container relative overflow-hidden">
                <img
                  src="/img2.jpeg"
                  alt="Women of Substance - Mission and History"
                  className="w-full h-[50vh] object-cover"
                />
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <p className="font-body text-sm md:text-base font-bold tracking-[0.2em] uppercase mb-4 text-[#85702D]">
                Our Legacy
              </p>
              <h2 className="font-heading text-3xl lg:text-5xl text-[var(--color-secondary)] font-extrabold leading-tight mb-8">
                OUR MISSION & <br /> HISTORY
              </h2>

              <div className="font-body space-y-6 text-[#5D5555] text-lg leading-relaxed">
                <p>
                  For twenty years, the South East Women of Substance
                  Organization has stood as the definitive voice for progress,
                  equality, and empowerment. Founded on the principles of
                  collective action and socio-political engagement, we have
                  evolved from a local assembly to a 3-million-strong movement.
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

      {/* --- NEW: OUR IMPACT SECTION --- */}
      <section className="relative w-full py-24 lg:py-32 flex items-center justify-center bg-[var(--color-accent)]">
        {/* Right Blue Accent Line */}
        <div className="absolute top-0 right-0 w-[5px] h-full bg-[#333399]"></div>

        <div className="max-w-[800px] text-center px-6 relative z-10 flex flex-col items-center">
          {/* Golden Quote Marks */}
          <span className="block text-[80px] md:text-[110px] text-[#FFCC66] font-serif leading-none -mb-8 md:-mb-12">
            ”
          </span>
          
          {/* Heading */}
          <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-[0.1em] text-[#FFFFCC] font-heading mb-8 md:mb-12">
            Our Impact
          </h2>
          
          {/* Quote Body */}
          <p className="text-lg md:text-2xl leading-relaxed text-[#FFFFCC] font-serif italic drop-shadow-sm">
            "We do not just occupy space; we define it. Our influence is
            measured not by the loudness of our voices, but by the tangible
            change we bring to our homes, our communities, and our nation.
            Through 20 years of unwavering commitment, we have proven that
            when women of substance stand together, the future is
            rewritten."
          </p>
        </div>
      </section>
      {/* ------------------------------- */}

      <section className="w-full bg-white">
        <div className="text-center max-w-4xl mx-auto py-16 px-6 lg:py-24">
          <h2 className="font-heading text-3xl lg:text-5xl font-bold text-[var(--color-secondary)] mb-6">
            South East Women Directors
          </h2>
          <p className="font-body text-base md:text-lg leading-relaxed max-w-3xl mx-auto text-[#5D5555]">
            With over 3 million registered members, our global team is united in
            our belief that empowered women build stronger nations. Our team is
            committed to helping marginalized women achieve their goals and
            realize their dreams, by listening to and working directly with
            women to ensure our programs respond to their needs.
          </p>
          <div className="w-8 h-[2px] bg-[#0D9488] mx-auto mt-6"></div>
        </div>

        <div className="w-full flex flex-col">
          {teamData.map((member, index) => {
            // Determines layout alternating (left vs right)
            const isEven = index % 2 !== 0;

            // Define the visual sequence to match the screenshot flow
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

            const currentTheme = themes[index % themes.length];
            const bgColor = currentTheme.bg;
            const textColor = currentTheme.text;
            const imagePosition = isEven ? "left-0" : "right-0";
            const gradientDirection = isEven
              ? currentTheme.gradientLeft
              : currentTheme.gradientRight;

            const contentAlignment = isEven
              ? "justify-end pr-8 md:pr-24 lg:pr-48"
              : "justify-start pl-8 md:pl-24 lg:pl-48";

            return (
              <div
                key={index}
                className={`relative w-full min-h-[350px] md:min-h-[450px] flex items-center overflow-hidden ${bgColor}`}
              >
                <div
                  className={`absolute top-0 bottom-0 w-full md:w-3/4 lg:w-2/3 ${imagePosition}`}
                >
                  <div
                    className={`absolute inset-0 z-10 ${gradientDirection}`}
                  ></div>

                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-top md:object-center opacity-40 md:opacity-100"
                  />
                </div>

                <div
                  className={`relative z-20 w-full flex ${contentAlignment}`}
                >
                  <div className="max-w-md">
                    <h3
                      className={`font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-2 ${textColor}`}
                    >
                      {member.role}
                    </h3>
                    <h4
                      className={`font-heading text-lg md:text-xl font-medium mb-4 opacity-90 ${textColor}`}
                    >
                      {member.name}
                    </h4>
                    <a
                      href="#"
                      className={`font-body inline-flex items-center text-sm md:text-base font-semibold hover:opacity-80 transition-opacity ${textColor}`}
                    >
                      {member.linkText} <ArrowRightCircle />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="bg-[var(--color-bg)] py-20 lg:py-32">
        <div className="main-container">
          {/* Section Header */}
          <div className="text-center mb-16">
            <p className="font-body text-sm font-bold tracking-[0.3em] uppercase mb-3 text-[#85702D]">
              Our Movements
            </p>
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-[var(--color-secondary)] mb-6">
              Past Political Events
            </h2>
          </div>

          {/* Video/Image Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {movementData.map((item, index) => (
              <div
                key={index}
                className="group relative cursor-pointer overflow-hidden rounded-xl shadow-xl transition-all duration-500 hover:-translate-y-2"
              >
                {/* Image Container */}
                <div className="aspect-[4/3] w-full overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Dark Overlay */}
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300"></div>
                </div>

                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-12 bg-white rounded-xl flex items-center justify-center shadow-2xl transform group-hover:scale-110 transition-transform duration-300">
                    <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[12px] border-l-[#4A0E0E] border-b-[8px] border-b-transparent ml-1"></div>
                  </div>
                </div>

                {/* Text Content */}
                <div className="absolute bottom-0 left-0 p-6 w-full">
                  <h3 className="font-heading text-white text-lg md:text-xl font-bold uppercase tracking-wider drop-shadow-md">
                    {item.title}
                  </h3>
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