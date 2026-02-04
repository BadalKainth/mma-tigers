import React from "react";
import img1 from "../images/img1.jpg";

export default function WeightLossPage() {
  return (
    <div className="poppins-regular text-white bg-[#0f0f0f] min-h-screen">
      {/* HERO */}
      <section className="w-full bg-black text-white  py-10 poppins-regular relative">
        {/* BACKGROUND IMAGE */}
        <img
          src={img1}
          alt="Self Defense"
          className="w-full h-full md:h-80 object-cover"
        />

        {/* BLACK OVERLAY 70% */}
        <div className="absolute inset-0 bg-black/70"></div>

        <div className="w-10/12 mx-auto text-center space-y-2 md:space-y-6 absolute inset-0 flex flex-col items-center justify-center text-white px-2">
          <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl poppins-bold uppercase tracking-widest text-white text-center drop-shadow-2xl">
            Weight Loss Classes
          </h1>
          <p className="text-xs sm:text-sm md:text-xl lg:text-2xl poppins-semibold text-dangerRed tracking-widest max-w-3xl">
            Weight Loss Classes in Delhi | Tiger Institute India | Best Fat Loss
            & Body Transformation Courses
          </p>
          <p className="text-lg md:text-xl opacity-90 max-w-4xl mx-auto">
            Strength • Flexibility • Discipline • Confidence
          </p>
          <p className="mt-4 text-gray-300 max-w-3xl">
            If you’re searching for weight loss classes in Delhi, a fat-loss
            program that actually works, or a professional weight-loss training
            institute, Tiger Institute India offers one of the most trusted and
            results-driven programs in Delhi NCR.
          </p>
        </div>
      </section>

      {/* TITLE BANNER */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <div className="mt-6 bg-[#121212] p-6 rounded-2xl shadow-lg">
          <h3 className="text-2xl poppins-bold text-dangerRed">
            Transform your body with science-backed training
          </h3>
          <p className="mt-3 text-gray-300">
            We combine scientifically designed training, practical
            weight-management strategies, and customised coaching to deliver
            lasting transformation.
          </p>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="max-w-6xl mx-auto px-6 py-8 grid lg:grid-cols-3 gap-8 items-start">
        <div className="lg:col-span-2 space-y-6">
          {/* WHY CHOOSE */}
          <div className="bg-[#111111] p-6 rounded-xl">
            <h3 className="text-xl poppins-bold">
              Why Choose Tiger Institute India for Weight Loss Classes in Delhi?
            </h3>
            <p className="mt-3 text-gray-300 leading-relaxed">
              Tiger Institute India is recognised as one of the best weight-loss
              training centres in Delhi. Our structured, evidence-based system
              blends MMA-inspired workouts with nutrition and personalised
              coaching.
            </p>

            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 bg-[#0f0f0f] rounded-md">
                <h4 className="font-semibold text-gray-200">
                  Evidence-Based Training
                </h4>
                <ul className="mt-2 text-gray-400 list-disc list-inside space-y-1 text-sm">
                  <li>Targeted fat-burning exercises</li>
                  <li>HIIT & MMA-inspired drills</li>
                  <li>Cardio kickboxing & functional training</li>
                </ul>
              </div>

              <div className="p-4 bg-[#0f0f0f] rounded-md">
                <h4 className="font-semibold text-gray-200">
                  Personalized Coaching
                </h4>
                <ul className="mt-2 text-gray-400 list-disc list-inside space-y-1 text-sm">
                  <li>Personal fitness assessment</li>
                  <li>Custom workout & nutrition plans</li>
                  <li>Weekly progress monitoring</li>
                </ul>
              </div>
            </div>
          </div>

          {/* COURSES & CERTIFICATION */}
          <div className="bg-[#111111] p-6 rounded-xl">
            <h3 className="text-xl poppins-bold">
              Professional Weight Loss Courses & Certification
            </h3>
            <p className="mt-3 text-gray-300 leading-relaxed">
              Become a certified weight-loss coach with our comprehensive course
              covering weight-loss science, nutrition, psychology, program
              design, and transformation techniques.
            </p>

            <ul className="mt-3 text-gray-400 list-disc list-inside space-y-1">
              <li>Weight-loss fundamentals & fat metabolism</li>
              <li>Nutrition, meal planning & client psychology</li>
              <li>Assessment, tracking & transformation protocols</li>
            </ul>
          </div>

          {/* PROGRAMS */}
          <div className="bg-[#111111] p-6 rounded-xl">
            <h3 className="text-xl poppins-bold">
              Programs for Beginners & Adults
            </h3>
            <p className="mt-2 text-gray-300 leading-relaxed">
              Our classes are beginner-friendly and tailored for adults aiming
              for safe, sustainable fat-loss and body toning.
            </p>

            <ul className="mt-3 text-gray-400 list-disc list-inside space-y-1">
              <li>Cardio circuits & HIIT</li>
              <li>MMA-based fat-loss drills & cardio kickboxing</li>
              <li>Strength, mobility & flexibility training</li>
            </ul>
          </div>

          {/* BODY TRANSFORMATION */}
          <div className="bg-[#111111] p-6 rounded-xl">
            <h3 className="text-xl poppins-bold">
              Tiger Institute Body Transformation Program
            </h3>
            <p className="mt-2 text-gray-300">
              Our transformation program focuses on posture correction,
              inch-loss protocols, meal planning, and full-body toning for
              visible, long-term results.
            </p>
          </div>

          {/* ONLINE / OFFLINE */}
          <div className="bg-[#111111] p-6 rounded-xl">
            <h3 className="text-xl poppins-bold">
              Online & Offline Weight Loss Courses
            </h3>
            <p className="mt-2 text-gray-300">
              Flexible options with live virtual sessions, diet support, and
              progress tracking for remote trainees.
            </p>
            <ul className="mt-3 text-gray-400 list-disc list-inside space-y-1">
              <li>Live virtual workouts & online diet coaching</li>
              <li>Personalized progress monitoring</li>
            </ul>
          </div>

          {/* FAQ */}
          <div className="bg-[#111111] p-6 rounded-xl">
            <h3 className="text-xl poppins-bold text-dangerRed">
              Top FAQ — Weight Loss Classes
            </h3>
            <ol className="mt-3 list-decimal list-inside text-gray-400 space-y-3">
              <li>
                <strong>What is the best weight loss class in Delhi?</strong>
                <p className="text-gray-400 mt-1">
                  Tiger Institute India offers a structured program using HIIT,
                  MMA fitness, and personalised coaching to deliver fast and
                  safe fat-loss.
                </p>
              </li>
              <li>
                <strong>How much weight can I lose?</strong>
                <p className="text-gray-400 mt-1">
                  Results vary; many students see 2–5 kg per month with
                  consistent training and diet adherence.
                </p>
              </li>
              <li>
                <strong>Do I need prior experience?</strong>
                <p className="text-gray-400 mt-1">
                  No. Programs are beginner-friendly with progressive intensity.
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
              <li>Faster fat-burning & higher metabolism</li>
              <li>Improved muscle tone & stamina</li>
              <li>Personalized diet & workout plans</li>
            </ul>
          </div>

          <div className="bg-[#111111] p-6 rounded-xl">
            <h4 className="poppins-bold text-lg">Where We Train</h4>
            <p className="mt-2 text-gray-400">
              Tiger Institute India offers classes across Delhi NCR — South,
              West, East, North Delhi and surrounding areas.
            </p>
            <ul className="mt-3 text-gray-400 list-disc list-inside space-y-1">
              <li>South Delhi</li>
              <li>West Delhi</li>
              <li>East Delhi</li>
              <li>North Delhi</li>
            </ul>
          </div>

          <div className="bg-[#DD1111] p-4 rounded-lg text-black text-center font-semibold">
            Start Your Weight Loss Journey — Call/WhatsApp: +91 9999443678
          </div>
        </aside>
      </section>

      {/* CTA FOOTER */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <div className="bg-[#121212] p-8 rounded-2xl text-center">
          <h3 className="text-2xl poppins-bold">
            Join Our Fat Loss & Body Transformation Programs
          </h3>
          <p className="mt-3 text-gray-300">
            Enroll in Tiger Institute's proven programs to get real results.
            Free trial classes and certification courses available.
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

      {/* SEO NOTES */}
      {/*
        SEO TITLE– Best Weight Loss Classes in Delhi | Tiger Institute India
        META-DESCRIPTION– Scientific, MMA-inspired fat-loss programs and weight loss certification in Delhi. Free trial classes available.
      */}
    </div>
  );
}
