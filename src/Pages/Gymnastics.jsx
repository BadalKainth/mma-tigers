import React from "react";
import img1 from "../images/img1.jpg";
import SEO from "../component/SEO";

export default function Gymnastics() {
  return (
    <main className="min-h-screen poppins-regular">
      {/* HERO SECTION */}
      <section className="w-full bg-black text-white  py-10 poppins-regular relative">
        <SEO
          title="Tigers MMA – Best Gymnastics Classes in Delhi for Kids & Teens"
          description="Join Tigers MMA Tilak Nagar for the best gymnastics classes in Delhi for kids & teens. Improve strength, flexibility & confidence with certified coaches. Free trial available!"
          keywords="Contact Tigers MMA, Martial Arts Delhi, Boxing Classes Delhi, MMA Training Contact, Tilak Nagar,gymnastics classes near me, gymnastics near me, gymnastics classes delhi, best gymnastics classes, gymnastics academy in delhi, nearby gymnastics, gymnastics clubs near me, gymnastics academy near me, gymnastics beginners delhi, kids gymnastics delhi, teens gymnastics delhi, junior gymnastics delhi, gymnastics training west delhi, gymnastics classes tilak nagar, kids gymnastics near me, Children’s Gymnastics Classes Delhi,Junior Gymnastics Delhi, Teens Gymnastics Delhi, Gymnastics Academy in Delhi,
 Youth Gymnastics Near Me, Best Gymnastics Classes Delhi
 Kids Gymnastics Near Me, West Delhi, Nearby Gymnastics Classes, Kids Gymnastics Delhi, Gymnastics Classes for Kids Near Me, Gymnastics Academy Near Me, Gymnastics for Beginners, Gymnastics Classes Tilak Nagar,
"
          url="https://mmatigers.com/training-programs/4"
        />
        {/* BACKGROUND IMAGE */}
        <img
          src={img1}
          alt="Self Defense"
          className="w-full h-full md:h-80 object-cover"
        />

        {/* BLACK OVERLAY 70% */}
        <div className="absolute inset-0 bg-black/70"></div>

        <div className="w-10/12 mx-auto text-center space-y-2 md:space-y-6 absolute inset-0 flex flex-col items-center justify-center text-white px-2">
          <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-6xl font-bold tracking-wide">
            GYMNASTICS CLASSES IN DELHI
          </h1>

          <p className="text-xs sm:text-sm md:text-xl lg:text-2xl poppins-semibold text-dangerRed tracking-widest">
            🐯 Tigers MMA – TILAK NAGAR • KIDS & TEENS GYMNASTICS ACADEMY
          </p>

          <p className="text-lg md:text-xl opacity-90 max-w-4xl mx-auto">
            Strength • Flexibility • Discipline • Confidence
          </p>

          <p className="text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Join Tigers MMA Tilak Nagar for the best Gymnastics classes in
            Delhi. Improve strength, flexibility, balance, confidence & posture
            with certified coaches in a safe indoor training environment.
          </p>
        </div>
      </section>

      {/* MAIN SECTION */}
      <section className="w-10/12 md:w-7/12 mx-auto py-20 space-y-20">
        {/* WHY CHOOSE US */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 border-l-4 border-dangerRed pl-6">
            <h2 className="text-4xl font-extrabold tracking-wide">
              Best Gymnastics Academy in{" "}
              <span className="text-dangerRed">West Delhi</span>
            </h2>

            <p className="text-gray-700">
              Our certified coaches guide students step-by-step through safe,
              structured gymnastics training.
            </p>

            <ul className="space-y-3 text-gray-700">
              <li>Strength, flexibility & posture improvement</li>
              <li>Balance, coordination & body control</li>
              <li>Self-confidence & discipline development</li>
              <li>Safe indoor padded flooring</li>
              <li>Small batches & personal attention</li>
              <li>Perfect for sports preparation & height growth</li>
            </ul>

            <p className="text-gray-700">
              Easily accessible from Tilak Nagar, Janakpuri, Subhash Nagar,
              Tagore Garden, Uttam Nagar & more.
            </p>
          </div>

          <img
            src="https://images.pexels.com/photos/3763700/pexels-photo-3763700.jpeg"
            alt="Gymnastics Training"
            className="shadow-xl aspect-square h-[400px] object-cover w-full"
          />
        </div>

        {/* TINY MOVERS 3–6 */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <img
            src="https://images.pexels.com/photos/3763700/pexels-photo-3763700.jpeg"
            alt="Kids Gymnastics"
            className="hidden md:block shadow-xl h-[400px] w-full aspect-square object-cover"
          />

          <div className="space-y-6 border-l-4 border-dangerRed pl-6">
            <h2 className="text-4xl font-extrabold">
              Kids Gymnastics <span className="text-dangerRed">(Ages 3–6)</span>
            </h2>

            <p className="text-gray-700">
              “Tiny Movers — Big Dreams” Basic movement, balance & fun learning.
            </p>

            <ul className="space-y-3 text-gray-700">
              <li>Basic rolls, jumps & landings</li>
              <li>Motor skills & coordination</li>
              <li>Respect, discipline & social learning</li>
              <li>Fun games & interactive activities</li>
            </ul>
          </div>
        </div>

        {/* JUNIOR 7–12 */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 border-l-4 border-dangerRed pl-6">
            <h2 className="text-4xl font-extrabold">
              Junior Gymnastics{" "}
              <span className="text-dangerRed">(Ages 7–12)</span>
            </h2>

            <p className="text-gray-700">
              Strength • Balance • Flexibility • Confidence
            </p>

            <ul className="space-y-3 text-gray-700">
              <li>Balance & flexibility development</li>
              <li>Safe tumbling techniques</li>
              <li>Core strengthening & posture correction</li>
              <li>Agility, speed & coordination drills</li>
              <li>Self-defense basics included</li>
            </ul>
          </div>

          <img
            src="https://images.pexels.com/photos/3763700/pexels-photo-3763700.jpeg"
            alt="Junior Gymnastics"
            className="shadow-xl h-[400px] w-full aspect-square object-cover"
          />
        </div>

        {/* TEENS 13–17 */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <img
            src="https://images.pexels.com/photos/3763700/pexels-photo-3763700.jpeg"
            alt="Teen Gymnastics"
            className="hidden md:block shadow-xl h-[400px] w-full aspect-square object-cover"
          />

          <div className="space-y-6 border-l-4 border-dangerRed pl-6">
            <h2 className="text-4xl font-extrabold">
              Teen Gymnastics{" "}
              <span className="text-dangerRed">(Ages 13–17)</span>
            </h2>

            <p className="text-gray-700">“Fit. Confident. Mentally Strong.”</p>

            <ul className="space-y-3 text-gray-700">
              <li>Strength, flexibility & agility improvement</li>
              <li>Safe progressive stunts & tumbling</li>
              <li>Discipline & performance confidence</li>
              <li>Team skills & leadership building</li>
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="w-10/12 md:w-7/12 mx-auto py-20">
        <h2 className="text-3xl font-bold text-dangerRed mb-10">
          Frequently Asked Questions
        </h2>

        <div className="space-y-10 text-gray-700 leading-relaxed">
          <div>
            <h3 className="font-semibold text-xl mb-2">
              1. What ages can learn gymnastics at Tigers MMA?
            </h3>
            <p>
              We have separate batches: 3–6 years, 7–12 years & 13–17 years.
              Each program is designed for safe, progressive learning.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-xl mb-2">
              2. Is prior experience needed?
            </h3>
            <p>No, beginners can start easily with step-by-step training.</p>
          </div>

          <div>
            <h3 className="font-semibold text-xl mb-2">
              3. Are the classes safe?
            </h3>
            <p>
              Yes — soft-floor setup, certified coaches & safety supervision
              make training completely safe for kids & teens.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-xl mb-2">
              4. Does gymnastics help with height & posture?
            </h3>
            <p>
              Yes, gymnastics improves posture, flexibility, bone alignment &
              overall physical development, supporting natural height growth.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-xl mb-2">
              5. Is gymnastics good for shy or less active kids?
            </h3>
            <p>
              Absolutely! It improves confidence, social interaction & physical
              activity in a fun, motivating environment.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-xl mb-2">
              6. How to get started?
            </h3>
            <p>
              Book your FREE trial class by calling or WhatsApp at 9999443678.
            </p>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="bg-dangerRed text-white py-16 text-center">
        <h2 className="text-3xl md:text-4xl font-bold">
          Start Your Gymnastics Journey Today!
        </h2>
        <p className="mt-4 text-lg">
          Tilak Nagar • West Delhi — Book Your Free Trial Class
        </p>

        <div className="flex flex-wrap gap-6 mt-8 justify-center">
          <a
            href="tel:+919999443678"
            className="px-12 py-4 bg-black text-white uppercase tracking-widest 
            hover:bg-white hover:text-black transition font-semibold"
          >
            Call Now →
          </a>

          <a
            href="https://wa.me/919999443678"
            className="px-12 py-4 bg-[#25D366] text-white uppercase tracking-widest 
            hover:bg-white hover:text-[#25D366] transition font-semibold"
          >
            WhatsApp →
          </a>
        </div>
      </section>
    </main>
  );
}
