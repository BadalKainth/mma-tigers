import React from "react";
import img1 from "../images/img1.jpg"; // replace with real image
import img2 from "../images/img2.jpg";
import SEO from "../component/SEO";

export default function AboutUs() {
  return (
    <main className="bg-[#0f0f0f] text-white poppins-regular">
      <SEO
        title="About Tigers MMA – Tilak Nagar, Delhi"
        description="Tigers MMA is Delhi’s premier martial arts academy with over 9+ years of professional experience and more than 15,000 students trained across Delhi & NCR. We specialize in MMA, Karate, BJJ, Muay Thai, Kickboxing, Boxing, Taekwondo, Kung-Fu, Tai-Chi, Gymnastics, Judo & practical Self-Defense."
        keywords="Contact Tigers MMA, Martial Arts Delhi, Boxing Classes Delhi, MMA Training Contact, Tilak Nagar, About Tigers MMA, Tigers MMA Tilak Nagar, Tigers MMA Delhi, Tigers MMA NCR, Tigers MMA Gym, Tigers MMA Fitness, Tigers MMA Self-Defense, Tigers MMA Karate, Tigers MMA BJJ, Tigers MMA Muay Thai, Tigers MMA Kickboxing, Tigers MMA Boxing, Tigers MMA Taekwondo, Tigers MMA Kung-Fu, Tigers MMA Tai-Chi, Tigers MMA Gymnastics, Tigers MMA Judo, Tigers MMA Self-Defense"
        url="https://mmatigers.com/about"
      />
      {/* HERO SECTION */}
      <section className="w-full bg-black text-white py-10 poppins-regular relative">
        {/* BACKGROUND IMAGE */}
        <img
          src={img1}
          alt="Self Defense"
          className="w-full h-full md:h-80 object-cover"
        />

        {/* BLACK OVERLAY 70% */}
        <div className="absolute inset-0 bg-black/70"></div>

        {/* TEXT CONTENT */}
        <div className="w-10/12 mx-auto text-center space-y-2 md:space-y-6 absolute inset-0 flex flex-col items-center justify-center text-white px-2">
          <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-6xl poppins-bold uppercase tracking-widest drop-shadow-2xl text-white">
            About Tigers MMA
          </h1>
          <p className="text-lg md:text-xl opacity-90 max-w-4xl mx-auto text-white">
            Strength • Flexibility • Discipline • Confidence
          </p>
          <p className="text-gray-300">
            Shop No. 11/22, Double Storey, Shivaji Marg, Block-2, Tilak Nagar,
            New Delhi, 110058
          </p>
          <p className="text-gray-300">
            4B-1 Tilak Nagar Metro Pillar No. 499, New Delhi, 110058
          </p>
        </div>
      </section>

      {/* INTRO SECTION */}
      <section className="max-w-6xl mx-auto px-6 py-12 space-y-6">
        <h2 className="text-dangerRed text-3xl poppins-bold uppercase tracking-wide">
          Welcome to Tigers MMA – Tilak Nagar, Delhi
        </h2>

        <p className="text-gray-300 leading-relaxed">
          Tigers MMA is Delhi’s premier martial arts academy with over{" "}
          <strong className="text-white">
            9+ years of professional experience
          </strong>
          and more than{" "}
          <strong className="text-white">15,000 students trained</strong> across
          Delhi & NCR. We specialize in MMA, Karate, BJJ, Muay Thai, Kickboxing,
          Boxing, Taekwondo, Kung-Fu, Tai-Chi, Gymnastics, Judo & practical
          Self-Defense.
        </p>

        <div className="bg-[#121212] p-6 rounded-xl border-l-4 border-dangerRed">
          <h3 className="text-2xl poppins-bold mb-2">Our Mission</h3>
          <p className="text-gray-300">
            To empower individuals through world-class martial arts training
            that builds discipline, confidence, mental strength, and practical
            self-defense for real life.
          </p>
        </div>

        <div className="bg-[#121212] p-6 rounded-xl border-l-4 border-dangerRed">
          <h3 className="text-2xl poppins-bold mb-2">Our Vision</h3>
          <p className="text-gray-300">
            To become Delhi’s leading martial arts academy, known for producing
            champions and shaping individuals with strong character, fitness and
            resilience.
          </p>
        </div>
      </section>

      {/* TRAINER PROFILE */}
      <section className="max-w-6xl mx-auto px-6 py-12 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-4xl poppins-bold text-dangerRed tracking-wide uppercase">
            Gopi Roy
          </h2>
          <h3 className="text-lg mt-2 text-gray-300">
            Black Belt 3rd Dan • MMA Profighter
          </h3>
          <p className="text-dangerRed font-semibold">(President & Founder)</p>

          <p className="mt-4 text-gray-300 leading-relaxed">
            With <strong>15+ years of martial arts experience</strong> and
            <strong>17 years of teaching</strong>, Gopi Roy has trained over
            <strong> 15,000 students</strong> in Delhi NCR. His journey began at
            age 8 at the Buddha Temple martial arts school, where he trained
            intensively for over a decade.
          </p>

          <h4 className="poppins-bold text-xl mt-6">Expertise In:</h4>
          <ul className="mt-3 grid grid-cols-2 gap-2 text-gray-400 text-sm">
            <li>Karate</li>
            <li>MMA</li>
            <li>Brazilian Jiu-Jitsu</li>
            <li>Muay Thai</li>
            <li>Kickboxing</li>
            <li>Boxing</li>
            <li>Tai-Chi</li>
            <li>Taekwondo</li>
            <li>Judo</li>
            <li>Gymnastics</li>
            <li>Martial Arts Weapons</li>
          </ul>

          <p className="mt-4 text-gray-300">
            He has also won major tournaments including the{" "}
            <strong>1997 Dragon Martial Arts Championship (70kg)</strong>.
          </p>
        </div>

        <div>
          <img
            src={img2}
            alt="Master Gopi Roy"
            className="rounded-xl shadow-2xl border-2 border-dangerRed object-cover"
          />
        </div>
      </section>

      {/* BRANCH DETAILS */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-3xl poppins-bold text-center text-dangerRed uppercase tracking-widest">
          Our Branches
        </h2>

        <div className="grid md:grid-cols-2 gap-8 mt-10">
          <div className="bg-[#121212] p-6 rounded-xl border border-gray-700">
            <h3 className="poppins-bold text-xl">Branch 1 – Tilak Nagar</h3>
            <p className="text-gray-300 mt-2">
              4B-1 Tilak Nagar Metro Pillar No. 499, New Delhi, 110058
            </p>
          </div>

          <div className="bg-[#121212] p-6 rounded-xl border border-gray-700">
            <h3 className="poppins-bold text-xl">Branch 2 – Tilak Nagar</h3>
            <p className="text-gray-300 mt-2">
              Shop No. 11/22, Double Storey, Shivaji Marg, Block-2, Tilak Nagar,
              New Delhi, 110058
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-center text-3xl poppins-bold uppercase text-dangerRed">
          Contact Us
        </h2>

        <div className="grid md:grid-cols-2 gap-10 mt-12">
          {/* FORM */}
          <form className="bg-[#121212] p-6 rounded-xl grid gap-4">
            <input
              type="text"
              placeholder="Name"
              className="bg-transparent border border-gray-600 px-4 py-3 rounded-md text-white"
            />
            <input
              type="email"
              placeholder="Email"
              className="bg-transparent border border-gray-600 px-4 py-3 rounded-md text-white"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className="bg-transparent border border-gray-600 px-4 py-3 rounded-md text-white"
            />
            <textarea
              rows="4"
              placeholder="Message"
              className="bg-transparent border border-gray-600 px-4 py-3 rounded-md text-white"
            ></textarea>

            <button className="bg-dangerRed text-black font-semibold py-3 rounded-md">
              Submit
            </button>
          </form>

          {/* CONTACT DETAILS */}
          <div className="space-y-6">
            <div className="bg-[#121212] p-6 rounded-xl">
              <h3 className="poppins-bold text-xl">Email</h3>
              <p className="text-gray-300 mt-2">info@mmatigers.com</p>
              <p className="text-gray-300">support@mmatigers.com</p>
            </div>

            <div className="bg-[#121212] p-6 rounded-xl">
              <h3 className="poppins-bold text-xl">Call Us</h3>
              <p className="text-gray-300 mt-2">+91 84709 79378</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
