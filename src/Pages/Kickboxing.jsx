import React from "react";
import img1 from "../images/img1.jpg";
import SEO from "../component/SEO";
// import FAQDropdown from "../components/FAQDropdown"; // your FAQ component

export default function Kickboxing() {
  return (
    <main className="min-h-screen poppins-regular">
      {/* HERO SECTION */}
      <section className="w-full bg-black text-white  py-10 poppins-regular relative">
        <SEO
          title="Kickboxing Classes in Delhi – Kids, Teens & Adults | Tigers MMA Tilak Nagar"
          description="Join Tigers MMA Tilak Nagar for kickboxing classes for kids, teens, women & adults in Delhi. Certified trainers, affordable classes & self-defense training."
          keywords="Contact Tigers MMA, Martial Arts Delhi, Boxing Classes Delhi, MMA Training Contact, Tilak Nagar, Kickboxing classes for kids in Tilak Nagar Delhi|Best youth kickboxing training near me in Delhi|Top kickboxing and self-defense classes for children in Delhi|Affordable kids kickboxing classes with certified trainers in Delhi|Kickboxing classes with certified trainers in Delhi-Tigers MMA|Delhi Kick-Boxing Classes for Adult in Tilak Nagar|Delhi Kick-Boxing classes for girls in Janakpuri|Delhi Kick-Boxing classes for kids in Janakpuri|Kick-Boxing classes for ladies in Janakpuri|Kick-Boxing classes for teens in Janakpuri"
          url="https://mmatigers.com/training-programs/5"
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
          <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-6xl font-bold tracking-wide uppercase">
            Kickboxing Classes
          </h1>

          <p className="text-xs sm:text-sm md:text-xl lg:text-2xl font-semibold text-dangerRed tracking-widest">
            🥊 KICKBOXING CLASSES IN DELHI — CERTIFIED TRAINERS | TILAK NAGAR &
            JANAKPURI
          </p>

          <p className="text-lg md:text-xl opacity-90">
            Kids • Teens • Women • Adults • Fitness • Self-Defense • Competition
          </p>

          <p className="text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Tigers MMA Tilak Nagar offers professional kickboxing training for
            kids, teens, women, beginners and adults. Learn kickboxing in a
            safe, structured and motivating environment with certified trainers.
          </p>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="w-10/12 md:w-7/12 mx-auto py-20 space-y-24">
        {/* INTRO BLOCK */}
        <div className="space-y-6 border-l-4 border-dangerRed pl-6">
          <h2 className="text-4xl font-extrabold text-black">
            Kickboxing Classes in Delhi – Safe, Professional & Beginner-Friendly
          </h2>

          <p className="text-gray-700 leading-relaxed">
            Whether you're a complete beginner or advanced athlete, our training
            programs help you develop strength, self-defense, discipline,
            flexibility, and confidence.
          </p>

          <p className="text-gray-700 leading-relaxed">
            We offer separate kickboxing programs for kids, teens, women, and
            adults with certified coaches who ensure proper technique and
            injury-free training.
          </p>
        </div>

        {/* Kids Kickboxing */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 border-l-4 border-dangerRed pl-6">
            <h2 className="text-3xl font-bold text-black">
              Kids Kickboxing in Delhi – Fun, Safe & Affordable
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Our kids’ kickboxing classes improve balance, confidence,
              discipline, focus, and coordination through fun and structured
              activities.
            </p>

            <h3 className="text-xl font-bold">Benefits of Kids’ Kickboxing</h3>
            <ul className="space-y-2 text-gray-700">
              <li>✔ Build agility, balance, and stamina</li>
              <li>✔ Develop focus & discipline</li>
              <li>✔ Boost confidence & social skills</li>
              <li>✔ Learn safe self-defense basics</li>
            </ul>
          </div>

          <img
            src="https://images.pexels.com/photos/8991302/pexels-photo-8991302.jpeg"
            alt="Kids Kickboxing"
            className="shadow-xl aspect-square h-[400px] object-cover"
          />
        </div>

        {/* Youth Kickboxing */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <img
            src="https://images.pexels.com/photos/8991302/pexels-photo-8991302.jpeg"
            alt="Youth Kickboxing"
            className="shadow-xl aspect-square h-[400px] hidden md:block object-cover"
          />

          <div className="space-y-6 border-l-4 border-dangerRed pl-6">
            <h2 className="text-3xl font-bold text-black">
              Best Youth Kickboxing Training Near Me in Delhi
            </h2>
            <p className="text-gray-700">
              Teen kickboxing builds strength, mental focus, discipline, and
              confidence.
            </p>

            <h3 className="text-xl font-bold">
              Top Kickboxing & Self-Defense Classes for Youth
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li>✔ Sparring & technique training</li>
              <li>✔ Coordination & stamina drills</li>
              <li>✔ Discipline, respect & perseverance</li>
              <li>✔ Supportive atmosphere with certified coaches</li>
            </ul>
          </div>
        </div>

        {/* Adults Kickboxing */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 border-l-4 border-dangerRed pl-6">
            <h2 className="text-3xl font-bold text-black">
              Delhi Kickboxing Classes for Adults in Tilak Nagar
            </h2>
            <p className="text-gray-700">
              Adults learn practical self-defense, build strength, gain
              confidence, and enjoy high-energy workouts led by certified
              trainers.
            </p>

            <h3 className="text-xl font-bold">What You Will Learn</h3>
            <ul className="space-y-2 text-gray-700">
              <li>✔ Punches, kicks & elbow techniques</li>
              <li>✔ Footwork & defensive moves</li>
              <li>✔ Strength & cardio conditioning</li>
              <li>✔ Discipline, timing & resilience</li>
            </ul>
          </div>

          <img
            src="https://images.pexels.com/photos/8991302/pexels-photo-8991302.jpeg"
            alt="Ladies Kickboxing"
            className="shadow-xl aspect-square h-[400px] object-cover"
          />
        </div>

        {/* Girls Kickboxing */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <img
            src="https://images.pexels.com/photos/8991302/pexels-photo-8991302.jpeg"
            alt="Girls Kickboxing"
            className="shadow-xl aspect-square h-[400px] hidden md:block object-cover"
          />

          <div className="space-y-6 border-l-4 border-dangerRed pl-6">
            <h2 className="text-3xl font-bold text-black">
              Delhi Kickboxing Classes for Girls in Janakpuri
            </h2>

            <h3 className="text-xl font-bold">Why Join?</h3>
            <ul className="space-y-2 text-gray-700">
              <li>✔ Practical self-defense</li>
              <li>✔ Strength, flexibility & fitness</li>
              <li>✔ High confidence & safety awareness</li>
              <li>✔ Female-friendly, supportive environment</li>
            </ul>
          </div>
        </div>

        {/* Ladies Kickboxing */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 border-l-4 border-dangerRed pl-6">
            <h2 className="text-3xl font-bold text-black">
              Kickboxing Classes for Ladies in Janakpuri
            </h2>

            <h3 className="text-xl font-bold">Program Highlights</h3>
            <ul className="space-y-2 text-gray-700">
              <li>✔ Full-body fitness routine</li>
              <li>✔ Strength & stamina training</li>
              <li>✔ Flexibility & mobility workouts</li>
              <li>✔ Self-defense & confidence-building</li>
            </ul>
          </div>

          <img
            src="https://images.pexels.com/photos/8991302/pexels-photo-8991302.jpeg"
            alt="Girls Kickboxing"
            className="shadow-xl aspect-square h-[400px] object-cover"
          />
        </div>

        {/* Teens Kickboxing */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <img
            src="https://images.pexels.com/photos/8991302/pexels-photo-8991302.jpeg"
            alt="Teens Kickboxing"
            className="shadow-xl aspect-square h-[400px] hidden md:block object-cover"
          />

          <div className="space-y-6 border-l-4 border-dangerRed pl-6">
            <h2 className="text-3xl font-bold text-black">
              Kickboxing Classes for Teens in Janakpuri
            </h2>

            <h3 className="text-xl font-bold">Training Benefits</h3>
            <ul className="space-y-2 text-gray-700">
              <li>✔ Strength, agility & coordination</li>
              <li>✔ Discipline & mental focus</li>
              <li>✔ Self-defense skill development</li>
              <li>✔ Safe & motivating environment</li>
            </ul>
          </div>
        </div>

        {/* Tilak Nagar Kickboxing */}
        <div className="space-y-6 border-l-4 border-dangerRed pl-6">
          <h2 className="text-3xl font-bold text-black">
            Kickboxing Classes in Tilak Nagar Delhi – Comprehensive Training for
            All Ages
          </h2>

          <h3 className="text-xl font-bold">Why Choose Tigers MMA?</h3>
          <ul className="space-y-2 text-gray-700">
            <li>✔ Certified & experienced coaches</li>
            <li>✔ Flexible class timings</li>
            <li>✔ Affordable membership plans</li>
            <li>✔ Safe & structured environment</li>
            <li>✔ Fitness • Self-defense • Competitive training</li>
          </ul>
        </div>

        {/* General Benefits */}
        <div className="space-y-6 border-l-4 border-dangerRed pl-6">
          <h2 className="text-3xl font-bold text-black">
            General Benefits of Kickboxing
          </h2>
          <ul className="space-y-2 text-gray-700">
            <li>✔ Strength & endurance</li>
            <li>✔ Fat-burning & fitness</li>
            <li>✔ Improved reflexes & reaction time</li>
            <li>✔ Confidence & mental toughness</li>
            <li>✔ Practical self-defense skills</li>
          </ul>
        </div>

        {/* Conclusion */}
        <section className="bg-white shadow-xl rounded-2xl p-10 border-l-4 border-dangerRed">
          <h2 className="text-3xl font-bold text-dangerRed mb-6">Conclusion</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Tigers MMA Tilak Nagar and Janakpuri offer the most complete and
            trusted kickboxing programs in Delhi for kids, teens, women, and
            adults. Whether your goal is fitness, self-defense, or professional
            training, our certified coaches guide you with safe, structured, and
            effective methods.
          </p>
          <p className="text-gray-700">
            Join the best kickboxing classes in Delhi today and transform your
            fitness, strength, skills, and confidence!
          </p>
        </section>
      </section>
      {/* FAQ SECTION */}
      <section className="w-10/12 md:w-7/12 mx-auto py-16">
        <h2 className="text-3xl font-bold text-dangerRed mb-10">
          Frequently Asked Questions
        </h2>

        <div className="space-y-10 text-gray-700 leading-relaxed">
          <div>
            <h3 className="font-semibold text-xl mb-2">
              1. What age groups can join kickboxing classes at Tigers MMA Tilak
              Nagar?
            </h3>
            <p>
              Kickboxing classes are available for kids (3+ years), teens,
              women, and adults. Each group trains separately for focus, safety,
              and skill development.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-xl mb-2">
              2. Are the kickboxing trainers certified and experienced?
            </h3>
            <p>
              Yes! Tigers MMA has certified and highly experienced kickboxing
              coaches who ensure correct technique and injury-free training.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-xl mb-2">
              3. Can complete beginners join kickboxing or self-defense classes?
            </h3>
            <p>
              Absolutely. Our beginner-friendly programs teach punching,
              kicking, footwork, balance, and self-defense step-by-step — no
              prior experience needed.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-xl mb-2">
              4. Do you offer kickboxing classes for girls/ladies in Janakpuri?
            </h3>
            <p>
              Yes! We have safe, supportive, female-focused kickboxing classes
              for girls and women of all ages, emphasizing fitness and practical
              self-defense.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-xl mb-2">
              5. What are the benefits of kickboxing for children?
            </h3>
            <p>
              Kids develop confidence, focus, stamina, agility, discipline, and
              practical self-defense skills. It also builds respect, teamwork,
              and social confidence.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-xl mb-2">
              6. How to join kickboxing classes at Tigers MMA?
            </h3>
            <p>
              You can call us directly or book a Free Trial Class at our Tilak
              Nagar or Janakpuri branches — both easily accessible by metro.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full bg-dangerRed text-white py-16 text-center">
        <h2 className="text-3xl md:text-4xl font-bold">
          Start Your Kickboxing Journey Today
        </h2>

        <p className="mt-4 text-lg">
          Book Your Free Trial Class — Tilak Nagar & Janakpuri
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
