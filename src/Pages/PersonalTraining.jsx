import React from "react";
import img1 from "../images/img1.jpg";
import SEO from "../component/SEO";

export default function PersonalTraining() {
  return (
    <main className="min-h-screen poppins-regular">
      {/* HERO SECTION */}
      <section className="w-full bg-black text-white py-10 relative">
        <SEO
          title="Personal MMA, Boxing & Kickboxing Training in Delhi | Tiger MMA"
          description="Join Tiger MMA Delhi for personal training in MMA, boxing, kickboxing, self-defence, karate & gymnastics. Expert coaches. All levels welcome."
          keywords="Contact Tigers MMA, Martial Arts Delhi, Boxing Classes Delhi, MMA Training Contact, Tilak Nagar"
          url="https://mmatigers.com/training-programs/11"
        />
        <img
          src={img1}
          alt="Personal Training"
          className="w-full h-full md:h-80 object-cover"
        />
        <div className="absolute inset-0 bg-black/70"></div>

        <div className="w-10/12 mx-auto text-center space-y-6 absolute inset-0 flex flex-col items-center justify-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold tracking-wide">
            Personal Training in Boxing, Kickboxing, MMA & More
          </h1>

          <p className="text-xl md:text-2xl poppins-semibold text-dangerRed tracking-widest">
            Elite Personal Martial Arts Training in Delhi – Tiger MMA
          </p>

          <p className="text-lg md:text-xl opacity-90 max-w-4xl mx-auto">
            One-on-one training programs in Boxing, Kickboxing, Self-Defence,
            Karate, Gymnastics & MMA.
          </p>

          <p className="text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Train smarter, faster and stronger with customized coaching for all
            ages and fitness levels.
          </p>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="w-7/12 mx-auto py-20 space-y-20">
        {/* WHY PERSONAL TRAINING */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 border-l-4 border-dangerRed pl-6">
            <h2 className="text-4xl font-extrabold tracking-wide">
              Why Choose Personal Training at Tiger MMA Delhi?
            </h2>

            <ul className="space-y-3 text-gray-700">
              <li>Complete coach attention for faster progress</li>
              <li>Customized workouts & technique development</li>
              <li>Improved strength, stamina & flexibility</li>
              <li>Safer training with injury prevention focus</li>
              <li>Confidence building through guided progress</li>
            </ul>
          </div>

          <img
            src="https://images.pexels.com/photos/5646004/pexels-photo-5646004.jpeg"
            className="aspect-square h-[400px] w-full shadow-xl object-cover"
            alt="Personal Training"
          />
        </div>

        {/* BOXING */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <img
            src="https://images.pexels.com/photos/5646004/pexels-photo-5646004.jpeg"
            className="hidden md:block aspect-square h-[400px] w-full object-cover shadow-xl"
            alt="Boxing Training"
          />

          <div className="space-y-6 border-l-4 border-dangerRed pl-6">
            <h2 className="text-4xl font-extrabold tracking-wide">
              Personal Boxing Classes in Delhi
            </h2>

            <ul className="space-y-3 text-gray-700">
              <li>Stance, footwork & movement training</li>
              <li>Advanced punching techniques</li>
              <li>Defensive skills & counter-attacks</li>
              <li>Cardio conditioning & core strengthening</li>
              <li>Competition preparation</li>
            </ul>
          </div>
        </div>

        {/* KICKBOXING */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 border-l-4 border-dangerRed pl-6">
            <h2 className="text-4xl font-extrabold tracking-wide">
              Kickboxing Personal Training
            </h2>

            <ul className="space-y-3 text-gray-700">
              <li>Powerful & accurate kicking techniques</li>
              <li>Strike combinations for real-life situations</li>
              <li>Improved agility, balance & flexibility</li>
              <li>Fat loss & stress relief training</li>
              <li>Self-defence striking skills</li>
            </ul>
          </div>

          <img
            src="https://images.pexels.com/photos/5646004/pexels-photo-5646004.jpeg"
            className="aspect-square h-[400px] w-full shadow-xl object-cover"
            alt="Kickboxing Training"
          />
        </div>

        {/* SELF DEFENCE */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <img
            src="https://images.pexels.com/photos/5646004/pexels-photo-5646004.jpeg"
            className="hidden md:block aspect-square h-[400px] w-full object-cover shadow-xl"
            alt="Self Defence"
          />

          <div className="space-y-6 border-l-4 border-dangerRed pl-6">
            <h2 className="text-4xl font-extrabold tracking-wide">
              Self-Defence Training for All
            </h2>

            <ul className="space-y-3 text-gray-700">
              <li>Real-world safety & awareness training</li>
              <li>Escaping grabs & dangerous situations</li>
              <li>Street defence techniques</li>
              <li>Mental preparedness drills</li>
              <li>Confidence & empowerment training</li>
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
              1. Is personal training suitable for beginners?
            </h3>
            <p>
              Yes, personal training is ideal for beginners with no prior
              experience.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-xl mb-2">
              2. Do you offer self-defence training for women?
            </h3>
            <p>
              Yes, we provide specialized personal self-defence programs for
              women.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-xl mb-2">
              3. Are coaches certified and experienced?
            </h3>
            <p>
              All coaches at Tiger MMA Delhi are certified and professionally
              trained.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-dangerRed text-white py-16 text-center">
        <h2 className="text-3xl md:text-4xl font-bold tracking-wide">
          Start Your Personal Training Journey Today
        </h2>

        <p className="mt-4 text-lg">
          Train smart. Train strong. Train with Tiger MMA Delhi.
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
