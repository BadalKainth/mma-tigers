import React from "react";
import img1 from "../images/img1.jpg";
import SEO from "../component/SEO";

export default function KidsMma() {
  return (
    <main className="min-h-screen poppins-regular">
      {/* HERO SECTION */}
      <section className="w-full bg-black text-white py-10 relative">
        <SEO
          title="Kids MMA Training in Tilak Nagar, New Delhi | Tigers MMA & Fitness Foundation"
          description="Best Kids MMA classes in Tilak Nagar, New Delhi for ages 3+. Build confidence, discipline & self-defense in a safe, fun environment. Enroll today!"
          keywords="Contact Tigers MMA, Martial Arts Delhi, Boxing Classes Delhi, MMA Training Contact, Tilak Nagar , Kids MMA Training in Tilak Nagar
            Kids MMA Classes New Delhi,
          Kids Martial Arts in West Delhi,
          Best MMA Academy for Kids in Delhi,
          Self-defense classes for kids,
          Martial arts for kids near me,"
          url="https://mmatigers.com/training-programs/12"
        />
        <img
          src={img1}
          alt="Kids MMA"
          className="w-full h-full md:h-80 object-cover"
        />
        <div className="absolute inset-0 bg-black/70"></div>

        <div className="w-10/12 mx-auto text-center space-y-2 md:space-y-6 absolute inset-0 flex flex-col items-center justify-center text-white px-2">
          <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-6xl font-bold tracking-wide">
            Kids MMA Training in Tilak Nagar, New Delhi
          </h1>

          <p className="text-xs sm:text-sm md:text-xl lg:text-2xl poppins-semibold text-dangerRed tracking-widest">
            Best Kids MMA Classes in Tilak Nagar, New Delhi
          </p>

          <p className="text-lg md:text-xl opacity-90 max-w-4xl mx-auto">
            Professionally designed MMA classes for children above 3 years of
            age — building confidence, discipline and focus.
          </p>

          <p className="text-gray-300 max-w-4xl mx-auto leading-relaxed">
            A life-changing program preparing kids physically and emotionally
            with endurance, self-defense & mental strength.
          </p>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="w-10/12 md:w-7/12 mx-auto py-20 space-y-20">
        {/* WHY KIDS MMA */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 border-l-4 border-dangerRed pl-6">
            <h2 className="text-4xl font-extrabold tracking-wide">
              Why Choose Kids MMA Training?
            </h2>

            <ul className="space-y-3 text-gray-700">
              <li>Boxing & Kickboxing techniques</li>
              <li>Wrestling & BJJ fundamentals</li>
              <li>Functional fitness & coordination</li>
              <li>Practical self-defense skills</li>
              <li>Team-building & confidence games</li>
            </ul>
          </div>

          <img
            src="https://images.pexels.com/photos/7045738/pexels-photo-7045738.jpeg"
            className="aspect-square h-[400px] w-full shadow-xl object-cover"
            alt="Kids MMA Training"
          />
        </div>

        {/* LIFE SKILLS */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <img
            src="https://images.pexels.com/photos/7045738/pexels-photo-7045738.jpeg"
            className="hidden md:block aspect-square h-[400px] w-full object-cover shadow-xl"
            alt="Life Skills"
          />

          <div className="space-y-6 border-l-4 border-dangerRed pl-6">
            <h2 className="text-4xl font-extrabold tracking-wide">
              Life Skills Learned Through Martial Arts
            </h2>

            <ul className="space-y-3 text-gray-700">
              <li>Self-confidence & self-belief</li>
              <li>Discipline & focus</li>
              <li>Respect & humility</li>
              <li>Emotional control</li>
              <li>Anti-bullying awareness</li>
            </ul>
          </div>
        </div>

        {/* SAFE TRAINING */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 border-l-4 border-dangerRed pl-6">
            <h2 className="text-4xl font-extrabold tracking-wide">
              Safe & Child-Friendly Training Environment
            </h2>

            <ul className="space-y-3 text-gray-700">
              <li>Certified child-specialized instructors</li>
              <li>Proper safety equipment</li>
              <li>Supervised partner drills</li>
              <li>Positive reinforcement & encouragement</li>
              <li>Fun, disciplined & motivating atmosphere</li>
            </ul>
          </div>

          <img
            src="https://images.pexels.com/photos/7045738/pexels-photo-7045738.jpeg"
            className="aspect-square h-[400px] w-full shadow-xl object-cover"
            alt="Safe MMA Training"
          />
        </div>

        {/* BENEFITS */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <img
            src="https://images.pexels.com/photos/7045738/pexels-photo-7045738.jpeg"
            className="hidden md:block aspect-square h-[400px] w-full object-cover shadow-xl"
            alt="Benefits"
          />

          <div className="space-y-6 border-l-4 border-dangerRed pl-6">
            <h2 className="text-4xl font-extrabold tracking-wide">
              Benefits of Kids MMA Training
            </h2>

            <ul className="space-y-3 text-gray-700">
              <li>Strong self-confidence & discipline</li>
              <li>Improved strength, flexibility & coordination</li>
              <li>Better focus & academic performance</li>
              <li>Self-defense against bullying</li>
              <li>Teamwork & social development</li>
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="w-10/12 md:w-7/12 mx-auto py-20">
        <h2 className="text-3xl font-bold text-dangerRed mb-10">
          Frequently Asked Questions (FAQs)
        </h2>

        <div className="space-y-10 text-gray-700 leading-relaxed">
          <div>
            <h3 className="font-semibold text-xl mb-2">1. What is Kids MMA?</h3>
            <p>
              Kids MMA is a structured martial arts program combining boxing,
              kickboxing, wrestling, BJJ & self-defense.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-xl mb-2">2. Is Kids MMA safe?</h3>
            <p>
              Yes, all training is conducted by certified child-specialized
              instructors with strict safety measures.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-xl mb-2">
              3. At what age can children start?
            </h3>
            <p>
              Children can start from 3 years of age with play-based martial
              arts training.
            </p>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="bg-dangerRed text-white py-16 text-center">
        <h2 className="text-3xl md:text-4xl font-bold tracking-wide">
          Join the Best Kids MMA Classes in Tilak Nagar
        </h2>

        <p className="mt-4 text-lg">
          Give your child confidence, discipline & lifelong skills.
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
