import React from "react";
import img1 from "../images/img1.jpg";
import SEO from "../component/SEO";


export default function Mma() {
  return (
    <main className="min-h-screen poppins-regular">
      <section className="w-full bg-black text-white  py-10 poppins-regular relative">
        <SEO
          title=" Tigers MMA – Best MMA, Kickboxing & Self-Defense Academy in Delhi"
          description=" Join Tigers MMA — Best MMA & Kickboxing Academy in Tilak Nagar & Janakpuri, Delhi. Kids (3–13), Girls, Ladies & Adult Martial Arts | Weight Loss & Self-Defense Training | Free Trial Class."
          keywords="Contact Tigers MMA, Martial Arts Delhi, Boxing Classes Delhi, MMA Training Contact, Tilak Nagar, Best Mixed Martial Arts Training for Kids in Delhi
Women Self-Defense & Kickboxing Academy in Janakpuri,
MMA Gym for Beginners in Tilak Nagar, Delhi
Combat Sports & Martial Arts for Teens Delhi      ,
Top MMA Classes Near Me in West Delhi,
Physical Fitness & Self-Defense Training for Adults Delhi,
MMA and Kickboxing for Weight Loss Delhi,
"
          image="https://mmatigers.com/images/og-image.jpg"
          url="https://mmatigers.com/training-programs/1"
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
          <h1 className="text-4xl md:text-6xl font-bold tracking-wide text-white">
            MIXED MARTIAL ARTS
          </h1>
          <p className="text-xl md:text-2xl poppins-semibold text-dangerRed tracking-widest">
            🐯 Tigers MMA – PREMIER MARTIAL ARTS ACADEMY IN DELHI
          </p>
          <p className="text-lg md:text-xl opacity-90">
            Kickboxing • MMA • Wrestling • Grappling • Self-Defense • Tai Chi •
            Fitness
          </p>
          <p className="text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Welcome to Tigers MMA — Tilak Nagar & Janakpuri, Delhi’s premier
            Martial Arts & Fitness Academy for kids, teens, women, and adults
            aiming for transformation in fitness, strength, discipline, and
            confidence.
          </p>
        </div>
      </section>

      <section className="w-7/12 mx-auto py-5 space-y-5 poppins-regular">
        {/* Kids MMA */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 border-l-4 border-dangerRed pl-6">
            <h2 className="text-4xl font-extrabold text-black tracking-wide">
              Kids MMA <span className="text-dangerRed">(Age 3–13)</span>
            </h2>

            <p className="text-gray-700 leading-relaxed">
              Fun, fitness, discipline & confidence-building for young
              champions.
            </p>

            <ul className="space-y-3 text-gray-700">
              <li className="flex items-center gap-2">
                <span className="bg-dangerRed text-white rounded-full text-xs px-2 py-1">
                  ✔
                </span>{" "}
                Focus, discipline & self-confidence
              </li>
              <li className="flex items-center gap-2">
                <span className="bg-dangerRed text-white rounded-full text-xs px-2 py-1">
                  ✔
                </span>{" "}
                Real self-defense basics
              </li>
              <li className="flex items-center gap-2">
                <span className="bg-dangerRed text-white rounded-full text-xs px-2 py-1">
                  ✔
                </span>{" "}
                Improved balance & coordination
              </li>
              <li className="flex items-center gap-2">
                <span className="bg-dangerRed text-white rounded-full text-xs px-2 py-1">
                  ✔
                </span>{" "}
                Safe youth-friendly training
              </li>
            </ul>
          </div>

          <div className="relative group">
            <img
              src="https://images.pexels.com/photos/598687/pexels-photo-598687.jpeg"
              alt="Kids MMA"
              className=" shadow-xl aspect-square h-[400px] w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        </div>

        {/* Girls & Ladies Kickboxing */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative group hidden md:block">
            <img
              src="https://images.pexels.com/photos/598687/pexels-photo-598687.jpeg"
              alt="Girls Kickboxing"
              className=" shadow-xl aspect-square h-[400px] w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>

          <div className="space-y-6 border-l-4 border-dangerRed pl-6">
            <h2 className="text-4xl font-extrabold text-black tracking-wide">
              Girls MMA &{" "}
              <span className="text-dangerRed">Ladies Kickboxing</span>
            </h2>

            <p className="text-gray-700 leading-relaxed">
              Build confidence, strength & real-world self-defense skills.
            </p>

            <ul className="space-y-3 text-gray-700">
              <li className="flex items-center gap-2">
                <span className="bg-dangerRed text-white rounded-full text-xs px-2 py-1">
                  ✔
                </span>{" "}
                Effective self-defense
              </li>
              <li className="flex items-center gap-2">
                <span className="bg-dangerRed text-white rounded-full text-xs px-2 py-1">
                  ✔
                </span>{" "}
                HIIT + fat loss workout
              </li>
              <li className="flex items-center gap-2">
                <span className="bg-dangerRed text-white rounded-full text-xs px-2 py-1">
                  ✔
                </span>{" "}
                Confidence & stress relief
              </li>
              <li className="flex items-center gap-2">
                <span className="bg-dangerRed text-white rounded-full text-xs px-2 py-1">
                  ✔
                </span>{" "}
                Flexibility + stamina training
              </li>
            </ul>
          </div>
        </div>

        {/* Teen MMA */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 border-l-4 border-dangerRed pl-6">
            <h2 className="text-4xl font-extrabold text-black tracking-wide">
              Teen MMA <span className="text-dangerRed">(Age 13–18)</span>
            </h2>

            <p className="text-gray-700 leading-relaxed">
              Build strong bodies, sharp minds & leadership qualities.
            </p>

            <ul className="space-y-3 text-gray-700">
              <li className="flex items-center gap-2">
                <span className="bg-dangerRed text-white rounded-full text-xs px-2 py-1">
                  ✔
                </span>{" "}
                Strength & endurance
              </li>
              <li className="flex items-center gap-2">
                <span className="bg-dangerRed text-white rounded-full text-xs px-2 py-1">
                  ✔
                </span>{" "}
                Discipline & confidence
              </li>
              <li className="flex items-center gap-2">
                <span className="bg-dangerRed text-white rounded-full text-xs px-2 py-1">
                  ✔
                </span>{" "}
                Competitive MMA guidance
              </li>
            </ul>
          </div>

          <div className="relative group">
            <img
              src="https://images.pexels.com/photos/598687/pexels-photo-598687.jpeg"
              alt="Teen MMA"
              className=" shadow-xl aspect-square h-[400px] w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        </div>

        {/* Adults MMA */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative group hidden md:block">
            <img
              src="https://images.pexels.com/photos/598687/pexels-photo-598687.jpeg"
              alt="Adults MMA"
              className=" shadow-xl aspect-square h-[400px] w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>

          <div className="space-y-6 border-l-4 border-dangerRed pl-6">
            <h2 className="text-4xl font-extrabold text-black tracking-wide">
              Adults MMA <span className="text-dangerRed">(18–30+)</span>
            </h2>

            <p className="text-gray-700 leading-relaxed">
              High-intensity fitness, fat loss & real combat training.
            </p>

            <ul className="space-y-3 text-gray-700">
              <li className="flex items-center gap-2">
                <span className="bg-dangerRed text-white rounded-full text-xs px-2 py-1">
                  ✔
                </span>{" "}
                Striking + grappling basics
              </li>
              <li className="flex items-center gap-2">
                <span className="bg-dangerRed text-white rounded-full text-xs px-2 py-1">
                  ✔
                </span>{" "}
                Fat-burning HIIT
              </li>
              <li className="flex items-center gap-2">
                <span className="bg-dangerRed text-white rounded-full text-xs px-2 py-1">
                  ✔
                </span>{" "}
                Muscle + confidence building
              </li>
              <li className="flex items-center gap-2">
                <span className="bg-dangerRed text-white rounded-full text-xs px-2 py-1">
                  ✔
                </span>{" "}
                Beginner-friendly coaching
              </li>
            </ul>
          </div>
        </div>

        {/* Wrestling & Grappling */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 border-l-4 border-dangerRed pl-6">
            <h2 className="text-4xl font-extrabold text-black tracking-wide">
              Wrestling & <span className="text-dangerRed">Grappling</span>
            </h2>

            <p className="text-gray-700 leading-relaxed">
              Build strength, control & takedown skills like an athlete.
            </p>

            <ul className="space-y-3 text-gray-700">
              <li className="flex items-center gap-2">
                <span className="bg-dangerRed text-white rounded-full text-xs px-2 py-1">
                  ✔
                </span>{" "}
                Wrestling fundamentals
              </li>
              <li className="flex items-center gap-2">
                <span className="bg-dangerRed text-white rounded-full text-xs px-2 py-1">
                  ✔
                </span>{" "}
                Clinch & ground control
              </li>
              <li className="flex items-center gap-2">
                <span className="bg-dangerRed text-white rounded-full text-xs px-2 py-1">
                  ✔
                </span>{" "}
                Strength & conditioning
              </li>
            </ul>
          </div>

          <div className="relative group">
            <img
              src="https://images.pexels.com/photos/598687/pexels-photo-598687.jpeg"
              alt="Wrestling"
              className=" shadow-xl aspect-square h-[400px] w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        </div>

        {/* Tai Chi */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative group hidden md:block">
            <img
              src="https://images.pexels.com/photos/598687/pexels-photo-598687.jpeg"
              alt="Tai Chi"
              className=" shadow-xl aspect-square h-[400px] w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>

          <div className="space-y-6 border-l-4 border-dangerRed pl-6">
            <h2 className="text-4xl font-extrabold text-black tracking-wide">
              Tai Chi & <span className="text-dangerRed">Mindful Fitness</span>
            </h2>

            <p className="text-gray-700 leading-relaxed">
              Improve mobility, reduce stress & restore alignment.
            </p>

            <ul className="space-y-3 text-gray-700">
              <li className="flex items-center gap-2">
                <span className="bg-dangerRed text-white rounded-full text-xs px-2 py-1">
                  ✔
                </span>{" "}
                Balance & posture
              </li>
              <li className="flex items-center gap-2">
                <span className="bg-dangerRed text-white rounded-full text-xs px-2 py-1">
                  ✔
                </span>{" "}
                Meditation & breathing
              </li>
              <li className="flex items-center gap-2">
                <span className="bg-dangerRed text-white rounded-full text-xs px-2 py-1">
                  ✔
                </span>{" "}
                Joint-friendly movement
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-black text-white py-20">
        <div className="w-10/12 mx-auto text-center space-y-6">
          <h2 className="text-4xl text-dangerRed font-bold">
            Weight Loss & Fitness Transformation
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto leading-relaxed">
            HIIT • Strength • Cardio • Mobility • Personalized Plans • Diet Help
          </p>
        </div>
      </section>
      <section className="w-10/12 mx-auto py-20">
        <h2 className="text-4xl font-bold text-center text-dangerRed mb-12">
          Why Choose Tigers MMA?
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          <div className="bg-white p-8 shadow-lg rounded-xl border">
            <h3 className="text-xl font-bold mb-3">Certified Coaches</h3>
            <p>Learn from experienced, professional trainers.</p>
          </div>

          <div className="bg-white p-8 shadow-lg rounded-xl border">
            <h3 className="text-xl font-bold mb-3">Safe & Hygienic</h3>
            <p>Perfect for parents & working professionals.</p>
          </div>

          <div className="bg-white p-8 shadow-lg rounded-xl border">
            <h3 className="text-xl font-bold mb-3">Structured Programs</h3>
            <p>Separate batches for kids, teens & adults.</p>
          </div>
        </div>
      </section>
      <section className="w-full bg-dangerRed text-white py-16 text-center">
        <h2 className="text-3xl md:text-4xl font-bold tracking-wide">
          Transform Your Body. Train Your Mind. Become Your Best Self.
        </h2>
        <p className="mt-4 text-lg">
          Tilak Nagar & Janakpuri — Book Your Free Trial Now
        </p>

        <div className="flex flex-wrap gap-6 mt-8 justify-center">
          {/* CALL BUTTON */}
          <a
            href="tel:+91XXXXXXXXXX"
            className="px-12 py-4 bg-black text-white uppercase tracking-widest hover:bg-white hover:text-black transition font-semibold"
          >
            Call Now →
          </a>

          {/* WHATSAPP BUTTON */}
          <a
            href="https://wa.me/91XXXXXXXXXX"
            className="px-12 py-4 bg-[#25D366] text-white uppercase tracking-widest hover:bg-white hover:text-[#25D366] transition font-semibold"
          >
            WhatsApp →
          </a>
        </div>
      </section>
    </main>
  );
}
