import React from "react";
import img1 from "../images/img1.jpg";
import SEO from "../component/SEO";

export default function Taekwondo() {
  return (
    <main className="min-h-screen poppins-regular">
      {/* HERO SECTION */}
      <section className="w-full bg-black text-white  py-10 poppins-regular relative">
        <SEO
          title="Best Taekwondo Academy in Delhi | Tiger MMA – Professional Martial Arts Training"
          description="Delhi’s top Taekwondo academy for kids, teens, and adults. Improve fitness, confidence, and self-defense with expert instructors at Tiger MMA Tilak Nagar."
          keywords="Contact Tigers MMA, Martial Arts Delhi, Boxing Classes Delhi, MMA Training Contact, Tilak Nagar,Taekwondo classes near me, Taekwondo classes Delhi, Best Taekwondo classes in Delhi, Taekwondo training Delhi, Taekwondo academy in Delhi, Kids Taekwondo classes Delhi, Teens Taekwondo classes Delhi, Adult Taekwondo classes Delhi, Beginner Taekwondo classes Delhi, Advanced Taekwondo training Delhi, Taekwondo classes Janakpuri, Taekwondo classes Lajpat Nagar, Taekwondo classes Laxmi Nagar, Taekwondo classes Tilak Nagar, Taekwondo classes Najafgarh, Taekwondo classes Gurugram, Taekwondo classes Badarpur, Taekwondo classes Rohini, Taekwondo classes GTB Nagar, Taekwondo classes Rajouri Garden, Taekwondo classes Noida, Taekwondo classes Nagloi, Taekwondo classes Preet Vihar, Kids Taekwondo near me, Teens Taekwondo training Delhi, Adult Taekwondo near me, Taekwondo for beginners Delhi, Taekwondo for competition Delhi, Taekwondo self-defense classes Delhi, Martial arts Taekwondo classes Delhi, Taekwondo sparring classes Delhi, Taekwondo fitness training Delhi, Professional Taekwondo coaching Delhi, Taekwondo classes with certified instructors in Delhi, Best martial arts training for kids in Delhi, Taekwondo classes for self-defense in Delhi"
          url="https://mmatigers.com/training-programs/7"
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
          <h1 className="text-4xl md:text-6xl font-bold tracking-wide uppercase">
            Taekwondo Classes
          </h1>

          <p className="text-xl md:text-2xl font-semibold text-dangerRed tracking-widest">
            🥋 TAEKWONDO CLASSES IN DELHI | TIGER MMA – TILAK NAGAR
          </p>

          <p className="text-lg md:text-xl opacity-90">
            Strength • Discipline • Confidence • Self-Defense
          </p>

          <p className="text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Join Tiger MMA Tilak Nagar for the best Taekwondo classes in Delhi.
            Expert training for kids, teens, and adults with fitness,
            discipline, and self-defense. Free trial available!
          </p>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="w-7/12 mx-auto py-20 space-y-24">
        {/* INTRO BLOCK */}
        <div className="space-y-6 border-l-4 border-dangerRed pl-6">
          <h2 className="text-4xl font-extrabold text-black">
            Taekwondo Classes in Delhi – Safe, Professional & Beginner-Friendly
          </h2>

          <p className="text-gray-700 leading-relaxed">
            Are you looking for Taekwondo classes near me in Delhi? Tiger MMA
            offers structured, safe, and certified Taekwondo training for kids,
            teens, and adults to improve fitness, confidence, discipline, and
            self-defense.
          </p>

          <p className="text-gray-700 leading-relaxed">
            Students join us from Tilak Nagar, Janakpuri, Subash Nagar,
            Najafgarh, Rohini, Rajouri Garden, Nagloi, Tagore Garden, and nearby
            West Delhi areas.
          </p>
        </div>

        {/* Kids Taekwondo */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 border-l-4 border-dangerRed pl-6">
            <h2 className="text-3xl font-bold text-black">
              Kids Taekwondo Classes Delhi (Ages 3–12)
            </h2>

            <p className="text-gray-700 leading-relaxed">
              Kids learn basic Taekwondo techniques including punches, kicks,
              blocks, stances — all in a fun, encouraging, and safe environment.
            </p>

            <h3 className="text-xl font-bold">Benefits for Kids</h3>
            <ul className="space-y-2 text-gray-700">
              <li>✔ Improve balance, flexibility & coordination</li>
              <li>✔ Develop focus, discipline & concentration</li>
              <li>✔ Learn basic self-defense skills</li>
              <li>✔ Build respect, confidence & social skills</li>
              <li>✔ Encourage teamwork & healthy habits</li>
            </ul>
          </div>

          <img
            src="https://images.pexels.com/photos/7988956/pexels-photo-7988956.jpeg"
            alt="Kids Taekwondo"
            className="shadow-xl aspect-square h-[400px] object-cover"
          />
        </div>

        {/* Teens Taekwondo */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <img
            src="https://images.pexels.com/photos/7988956/pexels-photo-7988956.jpeg"
            alt="Teens Taekwondo"
            className="shadow-xl aspect-square h-[400px] hidden md:block object-cover"
          />

          <div className="space-y-6 border-l-4 border-dangerRed pl-6">
            <h2 className="text-3xl font-bold text-black">
              Teens Taekwondo Classes (13–17 years)
            </h2>

            <p className="text-gray-700">
              Teens build strength, agility, mental toughness, and competitive
              skills through structured Taekwondo training.
            </p>

            <h3 className="text-xl font-bold">Training Includes</h3>
            <ul className="space-y-2 text-gray-700">
              <li>✔ Sparring, tumbling & advanced kicks</li>
              <li>✔ Strength, stamina & mobility</li>
              <li>✔ Discipline, leadership & teamwork</li>
              <li>✔ Practical self-defense skills</li>
              <li>✔ Preparation for competitions</li>
            </ul>
          </div>
        </div>

        {/* Adults Taekwondo */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 border-l-4 border-dangerRed pl-6">
            <h2 className="text-3xl font-bold text-black">
              Adult Taekwondo Classes in Delhi
            </h2>

            <p className="text-gray-700">
              Adults learn real self-defense, get fitter, reduce stress, and
              build strength with expert instructors.
            </p>

            <h3 className="text-xl font-bold">Benefits for Adults</h3>
            <ul className="space-y-2 text-gray-700">
              <li>✔ Full-body fitness & flexibility</li>
              <li>✔ Self-defense for everyday life</li>
              <li>✔ Stress reduction & mental focus</li>
              <li>✔ Beginner to advanced progression</li>
              <li>✔ Supportive training community</li>
            </ul>
          </div>

          <img
            src="https://images.pexels.com/photos/7988956/pexels-photo-7988956.jpeg"
            alt="Adults Taekwondo"
            className="shadow-xl aspect-square h-[400px] object-cover"
          />
        </div>

        {/* WHY CHOOSE TIGER MMA */}
        <div className="space-y-6 border-l-4 border-dangerRed pl-6">
          <h2 className="text-3xl font-bold text-black">
            Why Choose Tiger MMA Tilak Nagar?
          </h2>

          <ul className="space-y-2 text-gray-700">
            <li>✔ Certified & experienced instructors</li>
            <li>✔ Soft flooring & padded safe indoor setup</li>
            <li>✔ Kids, Teens & Adults dedicated batches</li>
            <li>✔ Self-defense, fitness & competition prep</li>
            <li>✔ Personalized coaching & progress tracking</li>
            <li>✔ State-level Taekwondo preparation</li>
          </ul>
        </div>

        {/* Location Based Training */}
        <div className="space-y-6 border-l-4 border-dangerRed pl-6">
          <h2 className="text-3xl font-bold text-black">
            Locations – Find Taekwondo Classes Near You
          </h2>

          <ul className="space-y-2 text-gray-700">
            <li>✔ Tilak Nagar – Main Training Center</li>
            <li>✔ Janakpuri – Kids & Teens Classes</li>
            <li>✔ Najafgarh – Beginners & Advanced Training</li>
            <li>
              ✔ Subhash Nagar, Rajouri Garden, Vikaspuri, Paschim Vihar, Nagloi
            </li>
          </ul>
        </div>

        {/* General Benefits */}
        <div className="space-y-6 border-l-4 border-dangerRed pl-6">
          <h2 className="text-3xl font-bold text-black">
            Benefits of Taekwondo Training at Tiger MMA
          </h2>

          <ul className="space-y-2 text-gray-700">
            <li>✔ Improved endurance, flexibility & balance</li>
            <li>✔ Real-life self-defense skills</li>
            <li>✔ Confidence, leadership & mental toughness</li>
            <li>✔ Competition preparation (beginner to state-level)</li>
          </ul>
        </div>

        {/* Conclusion */}
        <section className="bg-white shadow-xl rounded-2xl p-10 border-l-4 border-dangerRed">
          <h2 className="text-3xl font-bold text-dangerRed mb-6">Conclusion</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Tiger MMA Tilak Nagar offers the best Taekwondo classes in Delhi for
            kids, teenagers, and adults. Build physical fitness, confidence,
            discipline, and real self-defense skills with expert instructors.
          </p>
          <p className="text-gray-700">
            Join today and unlock your full potential in Taekwondo!
          </p>
        </section>
      </section>

      {/* FAQ SECTION */}
      <section className="w-7/12 mx-auto py-16">
        <h2 className="text-3xl font-bold text-dangerRed mb-10">
          Frequently Asked Questions
        </h2>

        <div className="space-y-10 text-gray-700 leading-relaxed">
          <div>
            <h3 className="font-semibold text-xl mb-2">
              1. Who can join Taekwondo classes at Tiger MMA?
            </h3>
            <p>
              Kids, teens, women, and adults — with separate professional
              batches.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-xl mb-2">
              2. Are the Taekwondo instructors certified?
            </h3>
            <p>
              Yes, all instructors are certified and experienced in safe
              training.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-xl mb-2">
              3. Do I need experience to join?
            </h3>
            <p>
              No, beginners are welcome. We start with basics and progress
              gradually.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-xl mb-2">
              4. Are there Taekwondo classes for teenagers?
            </h3>
            <p>
              Yes — special batches for 13–17 years focusing on strength,
              discipline, and competition.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-xl mb-2">
              5. How do I join Taekwondo classes at Tiger MMA?
            </h3>
            <p>
              Call us or book your FREE trial class at Tilak Nagar or Janakpuri
              branch.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full bg-dangerRed text-white py-16 text-center">
        <h2 className="text-3xl md:text-4xl font-bold">
          Start Your Taekwondo Journey Today
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
