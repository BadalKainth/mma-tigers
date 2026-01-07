import React from "react";
import img1 from "../images/img1.jpg";
import SEO from "../component/SEO";

export default function KungFu() {
  return (
    <main className="min-h-screen poppins-regular">
      {/* HERO SECTION */}
      <section className="w-full bg-black text-white  py-10 poppins-regular relative">
        <SEO
          title="Tiger MMA | Best Kung Fu Classes in Delhi | Top MMA Gym for Kids, Teens & Adults"
          description="Tiger MMA offers the best Kung Fu classes in Delhi, top MMA training, self-defense programs, kids martial arts, teen combat training, and adult MMA fitness. Learn tiger-style Kung Fu, Chinese martial arts, MMA striking, grappling, takedowns, and self-defense at Delhi’s leading martial arts academy. Enroll today."
          keywords="Contact Tigers MMA, Martial Arts Delhi, Boxing Classes Delhi, MMA Training Contact, Tilak Nagar,MMA gym in Delhi
kids martial arts training,
tiger style Kung Fu,
Chinese martial arts academy,
MMA for beginners,
adult martial arts classes,
self-defense classes Delhi,
tiger claw technique training,
traditional Kung Fu & MMA fusion ,
Delhi NCR martial arts academy,
"
          url="https://mmatigers.com/training-programs/8"
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
            Kung-Fu Classes
          </h1>

          <p className="text-xl md:text-2xl font-semibold text-dangerRed tracking-widest">
            🐅 TIGER MMA – BEST KUNG FU & MMA CLASSES IN DELHI
          </p>
          <p className="text-lg md:text-xl opacity-90 max-w-4xl mx-auto">
            Strength • Flexibility • Discipline • Confidence
          </p>

          <p className="text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Professional Kung Fu, MMA, Self-Defense & Fighting Skills Training
            for Kids, Teens & Adults.
          </p>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="w-7/12 mx-auto py-20 space-y-24">
        {/* INTRO BLOCK */}
        <div className="space-y-6 border-l-4 border-dangerRed pl-6">
          <h2 className="text-4xl font-extrabold text-black">
            Tiger MMA – Delhi's Best Kung Fu & Mixed Martial Arts Training
          </h2>

          <p className="text-gray-700 leading-relaxed">
            Tiger MMA is one of India's leading martial arts academies offering
            Kung Fu, MMA, fitness training, fighting skills, and real-world
            self-defense for all ages.
          </p>

          <p className="text-gray-700 leading-relaxed">
            Our academy combines traditional Chinese Kung Fu with modern MMA
            methods including Muay Thai, BJJ, Boxing, Wrestling & Wing Chun.
          </p>
        </div>

        {/* WHY CHOOSE TIGER MMA */}
        <div className="space-y-6 border-l-4 border-dangerRed pl-6">
          <h2 className="text-3xl font-bold text-black">
            Why Choose Tiger MMA?
          </h2>

          <ul className="space-y-2 text-gray-700">
            <li>✔ Animal-style Kung Fu training</li>
            <li>✔ Tiger style techniques & tiger claw training</li>
            <li>✔ Shaolin-inspired MMA drills</li>
            <li>✔ Wing Chun close-combat techniques</li>
            <li>✔ Modern MMA striking, grappling & clinch work</li>
            <li>✔ Strength, stamina & conditioning</li>
            <li>✔ Real-world self-defense training</li>
          </ul>
        </div>

        {/* Kids Kung Fu */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 border-l-4 border-dangerRed pl-6">
            <h2 className="text-3xl font-bold text-black">
              Kung Fu & MMA Classes for Kids (Ages 3+)
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Kids learn discipline, flexibility, confidence, coordination,
              motor skills, fitness & beginner combat techniques in a safe
              environment.
            </p>

            <h3 className="text-xl font-bold">Benefits for Kids</h3>
            <ul className="space-y-2 text-gray-700">
              <li>✔ Respect, discipline & confidence</li>
              <li>✔ Animal mimicry movement training</li>
              <li>✔ Basic Kung Fu forms</li>
              <li>✔ Strength & flexibility</li>
              <li>✔ Children’s self-defense</li>
            </ul>
          </div>

          <img
            src={img1}
            alt="Kids Kung Fu"
            className="shadow-xl aspect-square h-[400px] object-cover"
          />
        </div>

        {/* Teens Kung Fu */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <img
            src={img1}
            alt="Teens Kung Fu"
            className="shadow-xl aspect-square h-[400px] hidden md:block object-cover"
          />

          <div className="space-y-6 border-l-4 border-dangerRed pl-6">
            <h2 className="text-3xl font-bold text-black">
              Kung Fu & MMA Classes for Teens
            </h2>
            <p className="text-gray-700">
              Teens develop discipline, leadership, strength, flexibility,
              sparring skills & emotional balance through structured training.
            </p>

            <h3 className="text-xl font-bold">Training Includes</h3>
            <ul className="space-y-2 text-gray-700">
              <li>✔ Sparring fundamentals</li>
              <li>✔ Combat drills & MMA basics</li>
              <li>✔ Strength & flexibility training</li>
              <li>✔ Confidence & discipline building</li>
            </ul>
          </div>
        </div>

        {/* Adults Kung Fu */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 border-l-4 border-dangerRed pl-6">
            <h2 className="text-3xl font-bold text-black">
              Kung Fu & MMA Training for Adults
            </h2>
            <p className="text-gray-700">
              Adults train for fitness, self-defense, stress relief, weight loss
              & combat preparation in flexible batches.
            </p>

            <h3 className="text-xl font-bold">Adult Program Includes</h3>
            <ul className="space-y-2 text-gray-700">
              <li>✔ Tiger-style open-hand forms</li>
              <li>✔ San Da (Chinese Kickboxing)</li>
              <li>✔ Wing Chun self-defense</li>
              <li>✔ MMA striking & grappling</li>
              <li>✔ Strength & fighter conditioning</li>
            </ul>
          </div>

          <img
            src={img1}
            alt="Adults Kung Fu"
            className="shadow-xl aspect-square h-[400px] object-cover"
          />
        </div>

        {/* Five Animals Section */}
        <div className="space-y-6 border-l-4 border-dangerRed pl-6">
          <h2 className="text-3xl font-bold text-black">
            Traditional Kung Fu Meets Modern MMA
          </h2>
          <ul className="space-y-2 text-gray-700">
            <li>✔ Tiger, Crane, Snake, Leopard & Dragon styles</li>
            <li>✔ Tiger fist, tiger claw, stance drills</li>
            <li>✔ Muay Thai + MMA striking</li>
            <li>✔ BJJ & wrestling integrations</li>
            <li>✔ MMA conditioning & competition prep</li>
          </ul>
        </div>

        {/* Locations */}
        <div className="space-y-6 border-l-4 border-dangerRed pl-6">
          <h2 className="text-3xl font-bold text-black">
            Best Kung Fu & MMA Academy – Multiple Branches
          </h2>
          <ul className="space-y-2 text-gray-700">
            <li>✔ Tilak Nagar</li>
            <li>✔ Janakpuri</li>
            <li>✔ Paschim Vihar</li>
            <li>✔ Subhash Nagar</li>
            <li>✔ Rajouri Garden</li>
          </ul>
        </div>

        {/* Conclusion */}
        <section className="bg-white shadow-xl rounded-2xl p-10 border-l-4 border-dangerRed">
          <h2 className="text-3xl font-bold text-dangerRed mb-6">Conclusion</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Tiger MMA blends traditional Kung Fu with modern MMA to help
            students build confidence, strength, discipline, self-defense, and
            real combat skills.
          </p>
          <p className="text-gray-700">
            Start your Kung Fu & MMA journey today — Train Smart. Train Strong.
            Transform Yourself.
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
              1. What makes Tiger MMA the best Kung Fu & MMA academy?
            </h3>
            <p>
              Tiger MMA combines traditional Kung Fu with MMA for practical
              real-world combat and confidence.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-xl mb-2">
              2. Do you teach Tiger Style, Five Animals & traditional Kung Fu
              forms?
            </h3>
            <p>
              Yes. Students learn Tiger Style Kung Fu, Tiger Claw, Five Animals
              (Tiger, Crane, Snake, Leopard, Dragon) along with modern MMA
              integration for real-world application.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-xl mb-2">
              3. Are there separate batches for kids, teens & adults?
            </h3>
            <p>
              Yes. We provide age-specific classes ensuring safety, discipline,
              and personal progress.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-xl mb-2">
              4. Can complete beginners join?
            </h3>
            <p>
              Absolutely. No prior experience required. Classes start from
              basics and progress gradually.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-xl mb-2">
              5. What martial arts are included in your MMA program?
            </h3>
            <p>
              The program includes Muay Thai, BJJ, Boxing, Kickboxing,
              Wrestling, San Da, Wing Chun & Kung Fu striking.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-xl mb-2">
              6. Do you offer women’s self-defense training?
            </h3>
            <p>
              Yes. We teach Wing Chun, Kung Fu, and MMA-based self-defense for
              real-life situations.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-xl mb-2">
              7. What are the batch timings?
            </h3>
            <p>
              Morning, evening & weekend batches are available for kids, teens &
              adults.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-xl mb-2">
              8. Do you provide personal training?
            </h3>
            <p>
              Yes. 1-on-1 training, fighter conditioning, and competition
              preparation are available.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-xl mb-2">
              9. Can I train for MMA competitions?
            </h3>
            <p>
              Yes. Tiger MMA provides fighter-level training, advanced sparring,
              strength conditioning & coaching.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-xl mb-2">
              10. How can I join Tiger MMA?
            </h3>
            <p>
              Contact us to book a free trial, check batch timings, or enroll in
              any Kung Fu or MMA program.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full bg-dangerRed text-white py-16 text-center">
        <h2 className="text-3xl md:text-4xl font-bold">
          Start Your Kung Fu & MMA Journey Today
        </h2>

        <p className="mt-4 text-lg">Book Your Free Trial Class at Tiger MMA</p>

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
