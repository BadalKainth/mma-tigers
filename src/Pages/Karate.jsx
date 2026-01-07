import React from "react";
import img1 from "../images/img1.jpg";
import SEO from "../component/SEO";

export default function Karate() {
  return (
    <main className="min-h-screen poppins-regular">
      {/* HERO SECTION */}
      <section className="w-full bg-black text-white  py-10 poppins-regular relative">
        <SEO
          title="Karate Classes in Delhi – Best Training for Kids, Teens, Adults & Women | TigerMMA Tilak Nagar"
          description="Join TigerMMA Tilak Nagar for the best Karate classes in Delhi for kids, teens, adults and women. Learn self-defense, build confidence, and improve fitness with certified trainers."
          keywords="Contact Tigers MMA, Martial Arts Delhi, Boxing Classes Delhi, MMA Training Contact, Tilak Nagar, Karate classes in Delhi|Karate training in Tilak Nagar|Kids Karate classes in Delhi|Karate classes for women in Delhi|Best Karate academy in Delhi|Karate self-defense classes in Delhi|Karate classes for teens and adults|Karate coaching in Tilak Nagar Delhi|Certified Karate trainers in Delhi |Professional Karate training in Delhi"
          url="https://mmatigers.com/training-programs/6"
        />
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
            KARATE CLASSES IN DELHI
          </h1>

          <p className="text-xl md:text-2xl poppins-semibold text-dangerRed tracking-widest">
            🐯 TIGER MMA TILAK NAGAR – PROFESSIONAL KARATE TRAINING FOR ALL AGES
          </p>

          <p className="text-lg md:text-xl opacity-90 max-w-4xl mx-auto">
            Learn Karate for fitness, discipline, conf idence & real
            self-defense. Kids • Teens • Adults • Women — Beginners to Advanced.
          </p>

          <p className="text-gray-300 max-w-4xl mx-auto leading-relaxed">
            TigerMMA Tilak Nagar offers expert Karate training with certified
            instructors, structured programs, flexible timings, and a safe,
            motivating environment for all age groups.
          </p>
        </div>
      </section>

      {/* MAIN SECTION */}
      <section className="w-7/12 mx-auto py-20 space-y-20">
        {/* WHY TIGER MMA */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 border-l-4 border-dangerRed pl-6">
            <h2 className="text-4xl font-extrabold tracking-wide">
              Why Choose <span className="text-dangerRed">TigerMMA</span> for
              Karate?
            </h2>

            <ul className="space-y-3 text-gray-700">
              <li>Certified & experienced Karate instructors</li>
              <li>Programs for Kids, Teens, Adults & Women</li>
              <li>Safe, structured, and disciplined learning</li>
              <li>Fitness, self-defense, and competition prep</li>
              <li>Flexible mornings, evenings & weekend batches</li>
              <li>Age-appropriate & skill-level based teaching</li>
            </ul>
          </div>

          <img
            src={img1}
            alt="Karate"
            className="shadow-xl h-[400px] aspect-square w-full object-cover"
          />
        </div>

        {/* KIDS KARATE */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <img
            src={img1}
            alt="Kids Karate"
            className="hidden md:block shadow-xl h-[400px] w-full aspect-square object-cover"
          />

          <div className="space-y-6 border-l-4 border-dangerRed pl-6">
            <h2 className="text-4xl font-extrabold tracking-wide">
              Kids Karate <span className="text-dangerRed">(Ages 3–13)</span>
            </h2>

            <p className="text-gray-700">
              Build discipline, coordination, focus & self-confidence.
            </p>

            <ul className="space-y-3 text-gray-700">
              <li>Improve balance, agility & fitness</li>
              <li>Boost focus & self-discipline</li>
              <li>Learn teamwork & confidence</li>
              <li>Basic self-defense techniques</li>
              <li>Fun, safe & interactive drills</li>
            </ul>
          </div>
        </div>

        {/* TEEN KARATE */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 border-l-4 border-dangerRed pl-6">
            <h2 className="text-4xl font-extrabold tracking-wide">
              Teen Karate <span className="text-dangerRed">(Ages 13–18)</span>
            </h2>

            <p className="text-gray-700">
              Strength, fitness, focus & real self-defense skills.
            </p>

            <ul className="space-y-3 text-gray-700">
              <li>Strength, agility & flexibility training</li>
              <li>Advanced techniques & real-world defense</li>
              <li>Discipline & resilience building</li>
              <li>Teamwork, confidence & social skills</li>
              <li>Competition & belt progression</li>
            </ul>
          </div>

          <img
            src={img1}
            alt="Teen Karate"
            className="shadow-xl h-[400px] aspect-square w-full object-cover"
          />
        </div>

        {/* ADULT KARATE */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <img
            src={img1}
            alt="Adult Karate"
            className="hidden md:block shadow-xl h-[400px] w-full aspect-square object-cover"
          />

          <div className="space-y-6 border-l-4 border-dangerRed pl-6">
            <h2 className="text-4xl font-extrabold tracking-wide">
              Adult Karate <span className="text-dangerRed">(18+)</span>
            </h2>

            <p className="text-gray-700">
              Fitness, strength, self-defense & mental focus.
            </p>

            <ul className="space-y-3 text-gray-700">
              <li>Full-body strength & cardio workouts</li>
              <li>Practical real-world defensive skills</li>
              <li>Stress relief & mental clarity</li>
              <li>Endurance, flexibility & mobility</li>
              <li>Belt training & tournament prep</li>
            </ul>
          </div>
        </div>

        {/* WOMEN KARATE */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 border-l-4 border-dangerRed pl-6">
            <h2 className="text-4xl font-extrabold tracking-wide">
              Karate for Girls & <span className="text-dangerRed">Women</span>
            </h2>

            <p className="text-gray-700">
              Boost confidence, fitness & real-world self-defense.
            </p>

            <ul className="space-y-3 text-gray-700">
              <li>Self-defense techniques for women</li>
              <li>Strength, stamina & flexibility</li>
              <li>Confidence, focus & empowerment</li>
              <li>Safe, encouraging training environment</li>
              <li>Guidance from experienced instructors</li>
            </ul>
          </div>

          <img
            src={img1}
            alt="Women Karate"
            className="shadow-xl h-[400px] aspect-square w-full object-cover"
          />
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="w-7/12 mx-auto py-20">
        <h2 className="text-3xl font-bold text-dangerRed mb-10">
          Frequently Asked Questions
        </h2>

        <div className="space-y-10 text-gray-700 leading-relaxed">
          <div>
            <h3 className="font-semibold text-xl mb-2">
              1. What age groups can learn Karate?
            </h3>
            <p>
              We offer Karate classes for kids (3+), teens, adults & women —
              each trained in separate age-specific batches.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-xl mb-2">
              2. Do beginners need experience?
            </h3>
            <p>
              No experience needed! Our beginner program teaches basics
              step-by-step.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-xl mb-2">
              3. Are the instructors certified?
            </h3>
            <p>
              Yes, all instructors are certified, experienced & professionally
              trained.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-xl mb-2">
              4. Do you teach self-defense?
            </h3>
            <p>
              Yes — practical, real-world self-defense is a core part of
              training.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-xl mb-2">
              5. Are there classes for women?
            </h3>
            <p>
              Yes, we offer safe, empowering Karate classes exclusively for
              girls & women.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-xl mb-2">6. How do I join?</h3>
            <p>Call/WhatsApp to book a free trial. Classes available daily.</p>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="bg-dangerRed text-white py-16 text-center">
        <h2 className="text-3xl md:text-4xl font-bold tracking-wide">
          Start Your Karate Journey Today
        </h2>

        <p className="mt-4 text-lg">
          Tilak Nagar • Janakpuri — Book Your Free Trial Class Now
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
