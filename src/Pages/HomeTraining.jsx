import React from "react";
import img1 from "../images/img1.jpg";
import SEO from "../component/SEO";

export default function HomeTraining() {
  return (
    <main className="min-h-screen poppins-regular">
      {/* HERO SECTION */}
      <section className="w-full bg-black text-white py-10 relative">
        <SEO
          title="Home Martial Arts & Personal Training in Delhi | Tiger MMA"
          description="Join Tiger MMA Delhi for home martial arts training in Delhi. Professional martial arts training at your home with certified personal coaches and complete equipment. Train with Delhi’s most trusted home training academy and achieve fitness, confidence & self-protection."
          keywords="Contact Tigers MMA, Martial Arts Delhi, Boxing Classes Delhi, MMA Training Contact, Tilak Nagar, Home Martial Arts Training in Delhi, Home Martial Arts Training Delhi, Home Martial Arts Training West Delhi, Home Martial Arts Training South Delhi, Home Martial Arts Training Dwarka, Home Martial Arts Training Janakpuri, Home Martial Arts Training Tilak Nagar, Home Martial Arts Training Janakpuri, Home Martial Arts Training Tilak Nagar, Home Martial Arts Training Janakpuri, Home Martial Arts Training Tilak Nagar"
          url="https://mmatigers.com/training-programs/13"
        />
        <img
          src={img1}
          alt="Home Martial Arts Training"
          className="w-full h-full md:h-80 object-cover"
        />
        <div className="absolute inset-0 bg-black/70"></div>

        <div className="w-10/12 mx-auto text-center space-y-2 md:space-y-6 absolute inset-0 flex flex-col items-center justify-center text-white px-2">
          <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-6xl font-bold tracking-wide">
            Home Martial Arts & Personal Training in Delhi
          </h1>

          <p className="text-xs sm:text-sm md:text-xl lg:text-2xl poppins-semibold text-dangerRed tracking-widest">
            Muay Thai • Kickboxing • MMA • Boxing • Karate • Self-Defense
          </p>

          <p className="text-lg md:text-xl opacity-90 max-w-4xl mx-auto">
            Professional martial arts training at your home with certified
            personal coaches and complete equipment.
          </p>

          <p className="text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Train with Delhi’s most trusted home training academy and achieve
            fitness, confidence & self-protection.
          </p>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="w-10/12 md:w-7/12 mx-auto py-20 space-y-20">
        {/* WHY TIGER MMA */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 border-l-4 border-dangerRed pl-6">
            <h2 className="text-4xl font-extrabold tracking-wide">
              Why Choose Tiger MMA Home Training?
            </h2>

            <ul className="space-y-3 text-gray-700">
              <li>Certified & experienced martial arts trainers</li>
              <li>One-on-one personal coaching at home</li>
              <li>Flexible timings & customized routines</li>
              <li>Training for men, women & kids</li>
              <li>Affordable packages with fast results</li>
            </ul>
          </div>

          <img
            src="https://images.pexels.com/photos/3985249/pexels-photo-3985249.jpeg"
            className="aspect-square h-[400px] w-full shadow-xl object-cover"
            alt="Home Training"
          />
        </div>

        {/* HOME MUAY THAI */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <img
            src="https://images.pexels.com/photos/3985249/pexels-photo-3985249.jpeg"
            className="hidden md:block aspect-square h-[400px] w-full object-cover shadow-xl"
            alt="Muay Thai Training"
          />

          <div className="space-y-6 border-l-4 border-dangerRed pl-6">
            <h2 className="text-4xl font-extrabold tracking-wide">
              Home Muay Thai Training
            </h2>

            <ul className="space-y-3 text-gray-700">
              <li>Clean punching & powerful kicking techniques</li>
              <li>Elbow & knee strikes with proper form</li>
              <li>Footwork, balance & padwork combinations</li>
              <li>Fight conditioning & fat-loss workouts</li>
            </ul>
          </div>
        </div>

        {/* HOME KICKBOXING */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 border-l-4 border-dangerRed pl-6">
            <h2 className="text-4xl font-extrabold tracking-wide">
              Home Kickboxing Training
            </h2>

            <ul className="space-y-3 text-gray-700">
              <li>High-energy fat burning workouts</li>
              <li>Strength & stamina improvement</li>
              <li>Weight loss & stress relief sessions</li>
              <li>Self-defense striking skills</li>
            </ul>
          </div>

          <img
            src="https://images.pexels.com/photos/3985249/pexels-photo-3985249.jpeg"
            className="aspect-square h-[400px] w-full shadow-xl object-cover"
            alt="Kickboxing Training"
          />
        </div>

        {/* SELF DEFENSE */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <img
            src="https://images.pexels.com/photos/3985249/pexels-photo-3985249.jpeg"
            className="hidden md:block aspect-square h-[400px] w-full object-cover shadow-xl"
            alt="Self Defense Training"
          />

          <div className="space-y-6 border-l-4 border-dangerRed pl-6">
            <h2 className="text-4xl font-extrabold tracking-wide">
              Home Self-Defense Training
            </h2>

            <ul className="space-y-3 text-gray-700">
              <li>Real-life safety & awareness techniques</li>
              <li>Escaping grabs, holds & dangerous situations</li>
              <li>Women & kids specialized self-defense programs</li>
              <li>Confidence & mental preparedness training</li>
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="w-10/12 md:w-7/12 mx-auto py-20">
        <h2 className="text-3xl font-bold text-dangerRed mb-10">
          Frequently Asked Questions (FAQs)
        </h2>

        <div className="space-y-10 text-gray-700 leading-relaxed">
          <div>
            <h3 className="font-semibold text-xl mb-2">
              Do you provide home classes across Delhi?
            </h3>
            <p>
              Yes, we offer home martial arts training throughout West Delhi,
              South Delhi, Dwarka, Janakpuri, Tilak Nagar & nearby areas.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-xl mb-2">
              Do trainers bring their own equipment?
            </h3>
            <p>
              Yes. Our trainers bring complete safety and training equipment to
              your home.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-xl mb-2">
              Is home training safe for beginners?
            </h3>
            <p>
              Absolutely. Programs are customized for beginners, women, kids &
              professionals.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-dangerRed text-white py-16 text-center">
        <h2 className="text-3xl md:text-4xl font-bold tracking-wide">
          Book Your First Home Session Today
        </h2>

        <p className="mt-4 text-lg">
          Experience professional martial arts training at your doorstep.
        </p>

        <div className="flex flex-wrap gap-6 mt-8 justify-center">
          <a
            href="tel:+919999443678"
            className="px-12 py-4 bg-black uppercase tracking-widest hover:bg-white hover:text-black transition font-semibold"
          >
            Call Now →
          </a>

          <a
            href="https://wa.me/919999443678"
            className="px-12 py-4 bg-[#25D366] uppercase tracking-widest hover:bg-white hover:text-[#25D366] transition font-semibold"
          >
            WhatsApp →
          </a>
        </div>
      </section>
    </main>
  );
}
