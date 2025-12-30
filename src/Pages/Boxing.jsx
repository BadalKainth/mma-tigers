import React from "react";
import img1 from "../images/img1.jpg";

export default function Boxing() {
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
            BOXING CLASSES
          </h1>

          <p className="text-xl md:text-2xl poppins-semibold text-dangerRed tracking-widest">
            🥊 BOXING CLASSES IN DELHI — BEST BOXING GYM & TRAINING ACADEMY
          </p>

          <p className="text-lg md:text-xl opacity-90">
            Fitness • Self-Defense • Strength • Speed • Competition • Kids •
            Women • Adults
          </p>

          <p className="text-gray-300 max-w-4xl mx-auto leading-relaxed">
            MMA Tigers offers boxing classes in Delhi for beginners, kids,
            women, teens, adults, and professional athletes. Located near Tilak
            Nagar Metro Station, our academy is one of the finest boxing gyms in
            West Delhi.
          </p>
        </div>
      </section>

      {/* MAIN BOXING INFO */}
      <section className="w-7/12 mx-auto py-20 space-y-12">
        <div className="space-y-6">
          <h2 className="text-4xl font-extrabold text-dangerRed">
            Boxing Classes in Delhi – Train at the Best Boxing Gym
          </h2>

          <p className="text-gray-700 leading-relaxed">
            Training programs are structured for fitness, self-defense, weight
            reduction, skill enhancement, and competitive preparation. Certified
            coaches provide systematic and practical instruction for all levels.
          </p>

          <p className="text-gray-700 leading-relaxed">
            Whether you're looking to increase fitness, help your child develop
            discipline, or train professionally — we have specialized programs
            for you.
          </p>
        </div>

        {/* WHY WE ARE BEST */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-dangerRed">
            Why MMA Tigers Is the Best Boxing Gym in Delhi
          </h2>

          <ul className="space-y-3 text-gray-800">
            <li>✔ Certified & experienced boxing coaches</li>
            <li>
              ✔ Training for kids, beginners, women, teens & professionals
            </li>
            <li>✔ Safe, technique-focused training environment</li>
            <li>✔ Strength, endurance & conditioning programs</li>
            <li>✔ Sparring & competition-oriented training</li>
            <li>✔ Modern equipment & hygienic training space</li>
            <li>✔ One-on-one coaching on request</li>
            <li>✔ Programs for ages 3 to 60+</li>
          </ul>
        </div>

        {/* LOCATION & ACCESS */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-dangerRed">
            Boxing Training Near Me in West Delhi
          </h2>

          <p className="text-gray-700 leading-relaxed">
            MMA Tigers is easily accessible from:
          </p>

          <ul className="columns-2 md:columns-3 text-gray-700 space-y-1">
            <li>• Tilak Nagar</li>
            <li>• Janakpuri</li>
            <li>• Rajouri Garden</li>
            <li>• Hari Nagar</li>
            <li>• Ashok Nagar</li>
            <li>• Vikaspuri</li>
            <li>• Subhash Nagar</li>
            <li>• Tagore Garden</li>
          </ul>

          <p className="text-gray-700 font-semibold">
            Morning • Evening • Weekend batches available.
          </p>
        </div>

        {/* MEMBERSHIP */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-dangerRed">
            Affordable Boxing Classes in Delhi – Membership Plans
          </h2>

          <p className="text-gray-700 leading-relaxed">
            Plans available for kids, teens, women, beginners, adults &
            professional fighters.
          </p>

          <ul className="space-y-2 text-gray-700">
            <li>✔ Weight loss programs</li>
            <li>✔ Strength development</li>
            <li>✔ Technique improvement</li>
            <li>✔ Discipline & confidence building</li>
            <li>✔ Functional fitness</li>
          </ul>
        </div>

        {/* PROGRAMS */}
        <div className="space-y-10">
          <h2 className="text-3xl font-bold text-dangerRed">
            Specialized Boxing Programs (Ages 3 to 60+)
          </h2>

          {/* Program Blocks */}
          {[
            {
              title: "1. Boxing Classes for Beginners (Age 10+)",
              list: [
                "Stance & footwork",
                "Basic punches & combinations",
                "Defense & blocking",
                "Bag work & pad drills",
                "Conditioning & endurance",
              ],
            },
            {
              title: "2. Women’s Boxing Classes (Age 13–30+)",
              list: [
                "Self-defense skills",
                "Full-body fitness",
                "Strength & stamina",
                "Fat loss & body toning",
                "Stress reduction",
              ],
            },
            {
              title: "3. Kids Boxing Training (Ages 3–13)",
              list: [
                "Coordination & balance",
                "Discipline",
                "Focus & confidence",
                "Basic punches",
                "Self-defense foundation",
              ],
            },
            {
              title: "4. Teen Boxing Classes (Ages 13–18)",
              list: [
                "Strength & fitness",
                "Confidence building",
                "Self-defense",
                "Competitive training",
                "Sparring available",
              ],
            },
            {
              title: "5. Boxing Fitness Classes (All Ages)",
              list: [
                "Cardio workouts",
                "Strength training",
                "Conditioning drills",
                "Fat-burning exercises",
                "Flexibility & mobility",
              ],
            },
            {
              title: "6. Professional Boxing Training",
              list: [
                "Advanced techniques",
                "Sparring sessions",
                "Strength & conditioning",
                "Fight strategy",
                "State & national-level prep",
              ],
            },
          ].map((item, idx) => (
            <div key={idx} className="shadow-lg p-8 border rounded-xl bg-white">
              <h3 className="text-2xl font-bold mb-4">{item.title}</h3>

              <ul className="space-y-2 text-gray-700">
                {item.list.map((i, j) => (
                  <li key={j}>✔ {i}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* BENEFITS */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-dangerRed">
            Benefits of Boxing Training
          </h2>

          <ul className="space-y-2 text-gray-700">
            <li>✔ Strength & power</li>
            <li>✔ Stamina & endurance</li>
            <li>✔ Reflexes & coordination</li>
            <li>✔ Balance & agility</li>
            <li>✔ Confidence & discipline</li>
            <li>✔ Practical self-defense</li>
          </ul>
        </div>

        {/* LOCATION SECTION */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-dangerRed">
            Join MMA Tigers – Best Boxing Gym in West Delhi
          </h2>

          <p className="text-gray-700 leading-relaxed">
            <strong>Location:</strong> 4B/1, Tilak Nagar, New Delhi – 110058
            Near Tilak Nagar Metro Station (Gate No. 2), Pillar No. 499.
          </p>

          <ul className="space-y-2 text-gray-700">
            <li>✔ Certified trainers</li>
            <li>✔ Affordable plans</li>
            <li>✔ Safe training environment</li>
            <li>✔ Modern equipment</li>
            <li>✔ Programs for ages 3–60+</li>
            <li>✔ PAN-India coaching recognition</li>
          </ul>
        </div>

        {/* FAQs */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-dangerRed">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4 text-gray-700">
            <p>
              <strong>1. What is the most popular boxing gym in Delhi?</strong>{" "}
              MMA Tigers is ranked among the top, offering certified boxing
              programs for all age groups.
            </p>
            <p>
              <strong>2. Do you offer beginner packages?</strong> Yes, stance,
              footwork, punching, defense & fitness training included.
            </p>
            <p>
              <strong>3. Do you offer women’s boxing classes?</strong> Yes,
              focused on fitness & self-defense.
            </p>
            <p>
              <strong>4. What age can a child start?</strong> Kids can start as
              early as 3 years old.
            </p>
            <p>
              <strong>5. Is competition training available?</strong> Yes — we
              prepare athletes for state & national levels.
            </p>
            <p>
              <strong>6. What are the class timings?</strong> Morning, evening &
              weekend batches.
            </p>
            <p>
              <strong>7. How to register?</strong> Visit our academy or contact
              us for a free trial class.
            </p>
          </div>
        </div>
        {/* CONCLUSION SECTION */}
        <div className="bg-white shadow-xl rounded-2xl p-10 border-l-4 border-dangerRed">
          <h2 className="text-3xl font-bold text-dangerRed mb-6">
            Conclusion — Why MMA Tigers Is the Best Boxing Academy in Delhi
          </h2>

          <p className="text-gray-700 leading-relaxed mb-4">
            MMA Tigers Delhi एक भरोसेमंद, सुरक्षित और Top-Rated Boxing Academy
            है जहाँ Beginners से लेकर Professional Fighters तक हर स्तर के
            छात्रों को प्रशिक्षण दिया जाता है। Certified Coaches, Modern
            Equipment और Safe Training Environment आपको सर्वोत्तम अनुभव प्रदान
            करते हैं।
          </p>

          <p className="text-gray-700 leading-relaxed mb-4">
            चाहे आप Fitness के लिए Boxing सीखना चाहते हों, Kids के लिए
            Discipline और Confidence बढ़ाना चाहते हों, Women’s Self-Defense की
            जरूरत हो, या फिर Professional Level पर Competition की तैयारी करनी हो
            — MMA Tigers आपकी सभी जरूरतों को पूरा करने वाला Best Boxing Training
            Center है।
          </p>

          <p className="text-gray-700 leading-relaxed">
            Affordable Fees, Flexible Timings और Age 3–60+ के लिए अलग-अलग
            Programs के साथ, MMA Tigers West Delhi का सबसे Complete और Trusted
            Boxing Training Destination है।
          </p>
        </div>
      </section>
      {/* REGISTER SECTION */}
      <section className="w-full py-16 poppins-regular bg-[#0f0f0f] text-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* LEFT CONTENT */}
          <div className="space-y-6">
            <h2 className="text-4xl poppins-bold tracking-widest uppercase">
              Register Now
            </h2>

            <h3 className="text-xl font-semibold uppercase tracking-wide">
              Schedule your free trial class at the nearest branch of Knockout
            </h3>

            <p className="text-gray-400 leading-relaxed">
              We provide the best MMA training for our members. The free trial
              class lets you get a taste of what is in store for you. You will
              also get a consultation from one of our experts who will guide you
              on how you can achieve your goals faster than you ever thought
              possible.
            </p>
          </div>

          {/* RIGHT FORM */}
          <div className="w-full bg-[#1a1a1a] shadow-2xl p-8">
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col">
                <label className="text-sm mb-1 tracking-wide">Full Name</label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="bg-transparent border border-gray-600 px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#DD1111]"
                />
              </div>

              <div className="flex flex-col">
                <label className="text-sm mb-1 tracking-wide">
                  Phone Number
                </label>
                <input
                  type="tel"
                  placeholder="Enter your phone number"
                  className="bg-transparent border border-gray-600 px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#DD1111]"
                />
              </div>

              <div className="flex flex-col md:col-span-2">
                <label className="text-sm mb-1 tracking-wide">Email</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-transparent border border-gray-600 px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#DD1111]"
                />
              </div>

              <div className="flex flex-col md:col-span-2">
                <label className="text-sm mb-1 tracking-wide">
                  Description
                </label>
                <textarea
                  rows={4}
                  placeholder="Enter description..."
                  className="bg-transparent border border-gray-600 px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#DD1111]"
                />
              </div>

              <div className="md:col-span-2">
                <button
                  type="submit"
                  className="w-full bg-[#DD1111] hover:bg-red-700 transition py-3 font-semibold tracking-widest uppercase"
                >
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="w-full bg-dangerRed text-white py-16 text-center">
        <h2 className="text-3xl md:text-4xl font-bold tracking-wide">
          Train Like a Champion — Join the Best Boxing Classes in Delhi
        </h2>

        <p className="mt-4 text-lg">
          Tilak Nagar & Janakpuri — Book Your Free Trial Now
        </p>

        <div className="flex flex-wrap gap-6 mt-8 justify-center">
          <a
            href="tel:+91XXXXXXXXXX"
            className="px-12 py-4 bg-black text-white uppercase tracking-widest hover:bg-white hover:text-black transition font-semibold"
          >
            Call Now →
          </a>
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
