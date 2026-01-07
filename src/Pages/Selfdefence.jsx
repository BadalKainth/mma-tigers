import React from "react";
import img1 from "../images/img1.jpg";
import SEO from "../component/SEO";

export default function SelfDefensePage() {
  return (
    <div className="poppins-regular text-white bg-[#0f0f0f] min-h-screen">
      {/* HERO */}
      <section className="w-full bg-black text-white py-10 poppins-regular relative">
        <SEO
          title="Best Self-Defense Classes in Delhi | Tiger MMA – Practical Real-Life Training"
          description="Join Tiger MMA for the best self-defense classes in Delhi. Learn real-life self-defense, awareness, and confidence with expert trainers. Women, kids & corporate training available."
          keywords="Contact Tigers MMA, Martial Arts Delhi, Boxing Classes Delhi, MMA Training Contact, Tilak Nagar, Tiger mma self-defense classes Delhi | Best self-defense classes in Delhi | Self-defense training Delhi | Women’s self-defense classes Delhi | Self-defense classes near me Delhi | Self-defense for girls in Delhi | Self-defense for kids in Delhi | Corporate self-defense workshop Delhi | Workplace safety training Delhi | Corporate safety training Delhi | Reality-based self-defense Delhi | Mixed martial arts self-defense Delhi | Taekwondo self-defense Delhi | Krav Maga self-defense Delhi | Practical self-defense training Delhi | Self-defense academy in Delhi | Self-defense classes for beginners Delhi
| Advanced self-defense training Delhi | Self-defense course in Delhi | Affordable self-defense classes Delhi | Personal safety training Delhi | Self-defense coaching near me Delhi | Tiger MMA self-defense classes Delhi | Professional self-defense trainers Delhi"
          url="https://mmatigers.com/training-programs/11"
        />
        {/* BACKGROUND IMAGE */}
        <img
          src={img1}
          alt="Self Defense"
          className="w-full h-full md:h-80 object-cover"
        />

        {/* BLACK OVERLAY 70% */}
        <div className="absolute inset-0 bg-black/70"></div>

        {/* TEXT CONTENT */}
        <div className="w-10/12 mx-auto text-center space-y-6 absolute inset-0 flex flex-col items-center justify-center text-white">
          {/* MAIN HEADING */}
          <h1 className="text-3xl md:text-5xl poppins-bold uppercase tracking-widest text-white drop-shadow-2xl">
            Self-Defense Classes
          </h1>

          {/* SUB HEADING — YOUR PROVIDED TEXT */}
          <p className="text-xl md:text-2xl poppins-semibold text-dangerRed tracking-widest max-w-3xl">
            Self-Defense Classes in Delhi – Practical Training for Everyday
            Safety
          </p>
          <p className="text-lg md:text-xl opacity-90 max-w-4xl mx-auto">
            Strength • Flexibility • Discipline • Confidence
          </p>

          {/* PARAGRAPH — YOUR PROVIDED TEXT */}
          <p className="mt-4 text-gray-300 max-w-3xl">
            Tiger MMA offers Delhi’s most practical and reality-based
            self-defense programs designed for women, kids, teens, adults,
            professionals, and corporate groups.
          </p>
        </div>
      </section>

      {/* TITLE BANNER */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <div className="mt-6 bg-[#121212] p-6 rounded-2xl shadow-lg">
          <h3 className="text-2xl poppins-bold">
            Learn Real-World Self-Defense — Not Fancy Moves
          </h3>
          <p className="mt-3 text-gray-300">
            Training includes awareness, real-life attack scenarios, escaping
            grabs & chokes, defense against weapons, and psychological
            readiness.
          </p>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="max-w-6xl mx-auto px-6 py-8 grid lg:grid-cols-3 gap-8 items-start">
        {/* LEFT CONTENT */}
        <div className="lg:col-span-2 space-y-6">
          {/* WHY CHOOSE */}
          <div className="bg-[#111111] p-6 rounded-xl">
            <h3 className="text-xl poppins-bold">Why Choose Tiger MMA</h3>
            <p className="mt-3 text-gray-300 leading-relaxed">
              Our training focuses on instinctive movements, efficient escape,
              and simple techniques anyone can learn — even complete beginners.
            </p>

            <ul className="mt-4 text-gray-400 list-disc list-inside space-y-2">
              <li>Reality-based self-defense training</li>
              <li>Defense against grabs, chokes, locks & weapons</li>
              <li>Street-survival attack scenarios</li>
              <li>Safe indoor training environment</li>
              <li>
                Certified instructors from MMA, Taekwondo, BJJ & Krav Maga
              </li>
            </ul>
          </div>

          {/* WOMEN'S SELF DEFENSE */}
          <div className="bg-[#111111] p-6 rounded-xl">
            <h3 className="text-xl poppins-bold">Women’s Self-Defense</h3>
            <p className="mt-3 text-gray-300 leading-relaxed">
              Specialized programs for awareness, safe escapes, confidence, and
              real-world threat handling.
            </p>
            <ul className="mt-3 text-gray-400 list-disc list-inside space-y-1">
              <li>Escaping grabs, holds & harassment situations</li>
              <li>Defense against common real attacks on women</li>
              <li>Confidence-building & voice command techniques</li>
            </ul>
          </div>

          {/* KIDS & TEENS */}
          <div className="bg-[#111111] p-6 rounded-xl">
            <h3 className="text-xl poppins-bold">
              Self-Defense for Kids & Teens
            </h3>
            <p className="mt-2 text-gray-300">
              Kids learn awareness, bully prevention, confidence, and practical
              safety techniques.
            </p>
            <ul className="mt-3 text-gray-400 list-disc list-inside space-y-1">
              <li>Escape from grabs & holds</li>
              <li>Situational awareness</li>
              <li>Confidence & emotional balance</li>
            </ul>
          </div>

          {/* CORPORATE */}
          <div className="bg-[#111111] p-6 rounded-xl">
            <h3 className="text-xl poppins-bold">
              Corporate Self-Defense Workshops
            </h3>
            <p className="mt-2 text-gray-300">
              Safety programs for companies, workplaces, and professionals.
            </p>
            <ul className="mt-3 text-gray-400 list-disc list-inside space-y-1">
              <li>Workplace safety skills</li>
              <li>Team-building activities</li>
              <li>Stress reduction & confidence</li>
            </ul>
          </div>

          {/* REAL-LIFE TRAINING */}
          <div className="bg-[#111111] p-6 rounded-xl">
            <h3 className="text-xl poppins-bold">
              Real-Life Defense Techniques
            </h3>
            <ul className="mt-3 text-gray-400 list-disc list-inside space-y-1">
              <li>Defense against chokes & grabs</li>
              <li>Weapon threat handling (sticks & knives)</li>
              <li>Ground survival techniques</li>
              <li>Rapid escape strategies</li>
            </ul>
          </div>

          {/* FAQ */}
          <div className="bg-[#111111] p-6 rounded-xl">
            <h3 className="text-xl poppins-bold">FAQ — Self-Defense Classes</h3>

            <ol className="mt-3 list-decimal list-inside text-gray-400 space-y-3">
              <li>
                <strong>Are these classes beginner-friendly?</strong>
                <p className="mt-1">Yes. No martial arts background needed.</p>
              </li>

              <li>
                <strong>Do you offer classes only for women?</strong>
                <p className="mt-1">Yes — women-only batches are available.</p>
              </li>

              <li>
                <strong>Do you cover weapon-threat situations?</strong>
                <p className="mt-1">
                  Yes — defense against sticks, knives & aggressive attacks.
                </p>
              </li>
            </ol>
          </div>
        </div>

        {/* SIDEBAR */}
        <aside className="space-y-6">
          <div className="bg-[#111111] p-6 rounded-xl">
            <h4 className="poppins-bold text-lg">Quick Benefits</h4>
            <ul className="mt-3 text-gray-400 list-disc list-inside space-y-2">
              <li>Higher awareness & safety</li>
              <li>Better reflexes & confidence</li>
              <li>Practical real-world skills</li>
            </ul>
          </div>

          <div className="bg-[#111111] p-6 rounded-xl">
            <h4 className="poppins-bold text-lg">Training Locations</h4>
            <ul className="mt-3 text-gray-400 list-disc list-inside space-y-1">
              <li>Tilak Nagar</li>
              <li>Janakpuri</li>
              <li>Najafgarh</li>
              <li>Rohini</li>
              <li>Paschim Vihar</li>
            </ul>
          </div>

          <div className="bg-[#DD1111] p-4 rounded-lg text-black text-center font-semibold">
            Join Self-Defense Training — Call/WhatsApp: +91 9999443678
          </div>
        </aside>
      </section>

      {/* CTA FOOTER */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <div className="bg-[#121212] p-8 rounded-2xl text-center">
          <h3 className="text-2xl poppins-bold">
            Take Charge of Your Safety Today
          </h3>
          <p className="mt-3 text-gray-300">
            Join Delhi’s most practical and result-oriented self-defense
            training. Free trial classes available.
          </p>

          <div className="mt-6 inline-flex gap-4">
            <a
              href="tel:+919999443678"
              className="bg-[#DD1111] px-6 py-3 rounded-lg font-semibold text-black"
            >
              Call/WhatsApp: +91 9999443678
            </a>

            <a
              href="https://www.mmatigers.com"
              className="border border-gray-600 px-6 py-3 rounded-lg text-gray-300"
            >
              Visit Website
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
