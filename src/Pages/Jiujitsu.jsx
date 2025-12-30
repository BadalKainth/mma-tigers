import React from "react";
import img1 from "../images/img1.jpg";

export default function Bjj() {
  return (
    <main className="min-h-screen poppins-regular">
      {/* HERO SECTION */}
      <section className="w-full bg-black text-white  py-10 poppins-regular relative">
        {/* BACKGROUND IMAGE */}
        <img
          src={img1}
          alt="Self Defense"
          className="w-full h-full md:h-80 object-cover"
        />

        {/* BLACK OVERLAY 70% */}
        <div className="absolute inset-0 bg-black/70"></div>

        <div className="w-10/12 mx-auto text-center space-y-6 absolute inset-0 flex flex-col items-center justify-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold tracking-wide">
            BRAZILIAN JIU-JITSU (BJJ)
          </h1>

          <p className="text-xl md:text-2xl poppins-semibold text-dangerRed tracking-widest">
            🐯 BEST BRAZILIAN JIU-JITSU CLASSES IN DELHI – TIGERS MMA
          </p>

          <p className="text-lg md:text-xl opacity-90 max-w-4xl mx-auto">
            Learn Brazilian Jiu-Jitsu in a structured, safe & motivating
            environment. Kids, Teens, Adults & Professionals — all levels
            welcome.
          </p>

          <p className="text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Tigers MMA Tilak Nagar offers Delhi’s leading Brazilian Jiu-Jitsu
            (BJJ) training with expert coaches, practical self-defense, ground
            techniques, submissions, fitness training & competition preparation.
          </p>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="w-7/12 mx-auto py-20 space-y-20">
        {/* WHY TIGERS MMA */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 border-l-4 border-dangerRed pl-6">
            <h2 className="text-4xl font-extrabold tracking-wide">
              Why Choose <span className="text-dangerRed">Tigers MMA</span> for
              BJJ?
            </h2>

            <ul className="space-y-3 text-gray-700">
              <li>Certified & highly experienced BJJ coaches</li>
              <li>Safe, structured & technique-focused training</li>
              <li>Separate batches for Kids, Teens, Adults & Pros</li>
              <li>Sparring, submissions & competition preparation</li>
              <li>Morning, evening & weekend class timings</li>
            </ul>
          </div>

          <img
            src={img1}
            className="aspect-square h-[400px] w-full shadow-xl object-cover"
            alt="BJJ Training"
          />
        </div>

        {/* KIDS BJJ */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <img
            src={img1}
            className="hidden md:block aspect-square h-[400px] w-full object-cover shadow-xl"
            alt="Kids BJJ"
          />

          <div className="space-y-6 border-l-4 border-dangerRed pl-6">
            <h2 className="text-4xl font-extrabold tracking-wide">
              Kids Brazilian Jiu-Jitsu{" "}
              <span className="text-dangerRed">(Ages 3–13)</span>
            </h2>

            <p className="text-gray-700">
              Fun, safe & skill-building classes for young learners.
            </p>

            <ul className="space-y-3 text-gray-700">
              <li>Coordination, balance & flexibility</li>
              <li>Focus, discipline & confidence</li>
              <li>Practical self-defense basics</li>
              <li>Engaging games & drills</li>
            </ul>
          </div>
        </div>

        {/* TEENS & ADULTS BJJ */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 border-l-4 border-dangerRed pl-6">
            <h2 className="text-4xl font-extrabold tracking-wide">
              Teen & Adult BJJ Training
            </h2>

            <p className="text-gray-700">
              Build strength, skill & real-world self-defense ability.
            </p>

            <ul className="space-y-3 text-gray-700">
              <li>Ground control & grappling</li>
              <li>Submissions & escapes</li>
              <li>Strength & conditioning</li>
              <li>Sparring & technique refinement</li>
            </ul>
          </div>

          <img
            src={img1}
            className="aspect-square h-[400px] w-full shadow-xl object-cover"
            alt="Teen Adult BJJ"
          />
        </div>

        {/* ADVANCED BJJ */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <img
            src={img1}
            className="hidden md:block aspect-square h-[400px] w-full shadow-xl object-cover"
            alt="Advanced BJJ"
          />

          <div className="space-y-6 border-l-4 border-dangerRed pl-6">
            <h2 className="text-4xl font-extrabold tracking-wide">
              Advanced / Competition-Level BJJ
            </h2>

            <p className="text-gray-700">
              For serious athletes preparing for tournaments & higher-level
              training.
            </p>

            <ul className="space-y-3 text-gray-700">
              <li>Advanced submissions & joint locks</li>
              <li>Competitive sparring sessions</li>
              <li>Fight strategy & game planning</li>
              <li>National & international competition prep</li>
            </ul>
          </div>
        </div>
      </section>
      {/* FAQ SECTION */}
      <section className="w-7/12 mx-auto py-20">
        <h2 className="text-3xl font-bold text-dangerRed mb-10">
          Frequently Asked Questions (FAQs)
        </h2>

        <div className="space-y-10 text-gray-700 leading-relaxed">
          <div>
            <h3 className="font-semibold text-xl mb-2">
              1. What is Brazilian Jiu-Jitsu and why should I learn it?
            </h3>
            <p>
              BJJ focuses on ground fighting, grappling & submissions. It builds
              strength, confidence, flexibility, and practical self-defense
              skills.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-xl mb-2">
              2. Do you offer BJJ classes for kids?
            </h3>
            <p>
              Yes! Kids learn discipline, coordination, focus & basic
              self-defense in a fun, structured way.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-xl mb-2">
              3. Can beginners join BJJ at Tigers MMA?
            </h3>
            <p>
              Absolutely. No prior experience required — we teach fundamentals
              step-by-step.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-xl mb-2">
              4. Do you offer advanced/competition-level BJJ training?
            </h3>
            <p>
              Yes! We train athletes for state, national & international
              competitions.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-xl mb-2">
              5. What are the fitness benefits of BJJ?
            </h3>
            <p>
              BJJ boosts stamina, strength, mobility, reflexes, weight loss &
              mental focus.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-xl mb-2">
              6. How can I join BJJ classes at Tigers MMA?
            </h3>
            <p>
              Call or WhatsApp us to book a free trial class. Flexible timings
              are available.
            </p>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="bg-dangerRed text-white py-16 text-center">
        <h2 className="text-3xl md:text-4xl font-bold tracking-wide">
          Start Your Brazilian Jiu-Jitsu Journey Today
        </h2>
        <p className="mt-4 text-lg">
          Train with certified BJJ coaches at Tilak Nagar & Janakpuri.
        </p>

        <div className="flex flex-wrap gap-6 mt-8 justify-center">
          <a
            href="tel:+919999443678"
            className="px-12 py-4 bg-black text-white uppercase tracking-widest hover:bg-white hover:text-black transition font-semibold"
          >
            Call Now →
          </a>

          <a
            href="https://wa.me/919999443678"
            className="px-12 py-4 bg-[#25D366] text-white uppercase tracking-widest hover:bg-white hover:text-[#25D366] transition font-semibold"
          >
            WhatsApp →
          </a>
        </div>
      </section>
    </main>
  );
}
