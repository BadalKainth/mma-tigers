import React, { useState, useEffect, useRef, useCallback } from "react";
import img2 from "../images/img2.jpg";
import trainingsData from "../utils/trainingData";
import TrainingSlider from "../component/slider";
import main from "../images/main.jpeg";
import SEO from "../component/SEO";
// import Card from "../component/Card";

const Home = () => {
  return (
    <>
      <SEO
        title="MMA Tigers - Delhi's No.1 Martial Arts & Fitness Academy"
        description="Professional training in MMA, Boxing, Kickboxing, Taekwondo, Kung-Fu, Weight-Loss & Self-Defense. Join Delhi's premier martial arts academy with 15+ years of experience."
        keywords="MMA, Boxing, Kickboxing, Taekwondo, Kung-Fu, Martial Arts, Fitness, Self-Defense, Delhi, Tilak Nagar, MMA Training Delhi"
        url="https://mmatigers.com"
      />
      {/* HERO IMAGE */}
      <section>
        <div>
          <img
            className="w-full h-screen object-cover"
            src={main}
            alt="MMA Tigers"
          />
        </div>
      </section>
      {/* TRAINING PROGRAMS */}
      {/* <section className="w-full poppins-regular flex text-white flex-col bg-[#0f0f0f] items-center justify-center">
        <h2 className="text-4xl poppins-bold my-10 tracking-widest uppercase">
          Our Training Programs
        </h2>
        <div className="w-full text-center grid grid-cols-2">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </section> */}
      <TrainingSlider trainingsData={trainingsData} />

      <section className="relative w-full bg-black text-white py-24 px-6 md:px-16 overflow-hidden">
        {/* ANGLED RED STRIPE BACKGROUND */}
        <div className="absolute inset-0 -skew-y-2 bg-gradient-to-r from-[#DD1111]/20 to-transparent"></div>

        <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* LEFT — SPORTY IMAGE FRAME */}
          <div className="relative group">
            {/* Outer Glow Frame */}
            <div className="absolute -inset-4 bg-[#DD1111]/40 blur-2xl rounded-3xl opacity-60 group-hover:opacity-100 transition"></div>

            <img
              src="https://images.pexels.com/photos/4761598/pexels-photo-4761598.jpeg"
              alt="Boxing Training"
              className="relative rounded-3xl w-full object-cover shadow-[0px_0px_40px_rgba(221,17,17,0.4)] group-hover:scale-105 transition duration-300"
            />

            {/* Badge */}
            <div className="absolute bottom-4 left-4 bg-[#DD1111] px-4 py-1 rounded-md font-bold text-sm tracking-wide">
              PRO TRAINING
            </div>
          </div>

          {/* RIGHT — CONTENT */}
          <div className="space-y-8">
            <p className="uppercase text-[#DD1111] tracking-widest font-semibold">
              Unleash Your Power • Train Like a Fighter
            </p>

            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight uppercase">
              Boxing Classes in Delhi
              <span className="text-[#DD1111] block">
                Best Boxing Gym & Training Academy
              </span>
            </h2>

            <p className="text-lg opacity-90 tracking-wide">
              Fitness • Strength • Speed • Defense • Competition • Kids • Women
              • Adults
            </p>

            <p className="text-gray-300 leading-relaxed max-w-xl">
              MMA Tigers offers elite boxing training for beginners, kids,
              teens, women, adults, and professionals. With certified coaches
              and high-energy sessions, our academy delivers unmatched fitness,
              power, and real fighting skills.
            </p>

            {/* CTA BUTTONS */}
            <div className="flex gap-6 pt-4">
              <a
                href="tel:+919999443678"
                className="bg-[#DD1111] px-8 py-3 rounded-xl uppercase font-bold tracking-widest hover:bg-[#ff2a2a] transition-all"
              >
                Join Now
              </a>

              <a
                href="training-programs/2"
                className="border border-gray-500 px-8 py-3 rounded-xl uppercase font-bold tracking-widest hover:bg-white hover:text-black transition-all"
              >
                View Classes
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="relative w-full bg-black text-white py-24 px-6 md:px-16 overflow-hidden">
        {/* ANGLED RED STRIPE BACKGROUND */}
        <div className="absolute inset-0 -skew-y-2 bg-gradient-to-r from-[#DD1111]/20 to-transparent"></div>

        <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* RIGHT CONTENT */}
          <div className="space-y-6">
            {/* TOP BADGE */}
            <p className="text-dangerRed tracking-[0.3em] uppercase text-sm poppins-semibold">
              🐯 MMA TIGERS – TILAK NAGAR • KIDS & TEENS GYMNASTICS ACADEMY
            </p>

            {/* MAIN HEADING */}
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight uppercase">
              Gymnastics Classes <br /> in Delhi
              <span className="text-[#DD1111] block">
                Best Gymnastics Gym & Training Academy
              </span>
            </h2>

            {/* SUB LINE */}
            <p className="text-lg opacity-90 tracking-wide">
              Strength • Flexibility • Discipline • Confidence
            </p>

            {/* PARAGRAPH */}
            <p className="text-gray-300 leading-relaxed max-w-xl">
              Join MMA Tigers Tilak Nagar for the best Gymnastics classes in
              Delhi. Improve strength, flexibility, balance, confidence &
              posture with certified coaches in a safe indoor training
              environment.
            </p>

            {/* CTA BUTTONS */}
            <div className="flex gap-6 pt-4">
              <a
                href="tel:+919999443678"
                className="bg-[#DD1111] px-8 py-3 rounded-xl uppercase font-bold tracking-widest
               hover:bg-[#ff2a2a] shadow-md shadow-red-900/40 transition-all"
              >
                Join Now
              </a>

              <a
                href="training-programs/4"
                className="border border-gray-500 px-8 py-3 rounded-xl uppercase font-bold tracking-widest
               hover:bg-white hover:text-black transition-all"
              >
                View Classes
              </a>
            </div>
          </div>
          {/* LEFT — SPORTY IMAGE FRAME */}
          <div className="relative group">
            {/* Outer Glow Frame */}
            <div className="absolute -inset-4 bg-[#DD1111]/40 blur-2xl rounded-3xl opacity-60 group-hover:opacity-100 transition"></div>

            <img
              src="https://images.pexels.com/photos/864989/pexels-photo-864989.jpeg"
              alt="Boxing Training"
              className="relative rounded-3xl w-full object-cover shadow-[0px_0px_40px_rgba(221,17,17,0.4)] group-hover:scale-105 transition duration-300"
            />

            {/* Badge */}
            <div className="absolute bottom-4 left-4 bg-[#DD1111] px-4 py-1 rounded-md font-bold text-sm tracking-wide">
              PRO TRAINING
            </div>
          </div>
        </div>
      </section>
      <section className="relative w-full bg-black text-white py-24 px-6 md:px-16 overflow-hidden">
        {/* ANGLED RED STRIPE */}
        <div className="absolute inset-0 -skew-y-2 bg-gradient-to-r from-[#DD1111]/20 to-transparent"></div>

        <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* IMAGE */}
          <div className="relative group">
            <div className="absolute -inset-4 bg-[#DD1111]/40 blur-2xl rounded-3xl opacity-60 group-hover:opacity-100 transition"></div>

            <img
              src="https://images.pexels.com/photos/6295825/pexels-photo-6295825.jpeg"
              alt="Mixed Martial Arts Training"
              className="relative rounded-3xl w-full object-cover
        shadow-[0px_0px_40px_rgba(221,17,17,0.4)]
        group-hover:scale-105 transition duration-300"
            />

            <div className="absolute bottom-4 left-4 bg-[#DD1111] px-4 py-1 rounded-md font-bold text-sm tracking-wide">
              ELITE ACADEMY
            </div>
          </div>
          {/* CONTENT */}
          <div className="space-y-6">
            <p className="text-[#DD1111] tracking-[0.3em] uppercase text-sm font-semibold">
              🐯 MMA TIGERS – PREMIER MARTIAL ARTS ACADEMY IN DELHI
            </p>

            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight uppercase">
              Mixed Martial Arts
              <span className="text-[#DD1111] block">
                Train with the Best in Delhi
              </span>
            </h2>

            <p className="text-lg opacity-90 tracking-wide">
              Kickboxing • MMA • Wrestling • Grappling • Self-Defense • Tai Chi
              • Fitness
            </p>

            <p className="text-gray-300 leading-relaxed max-w-xl">
              Welcome to Tigers MMA — Tilak Nagar & Janakpuri, Delhi’s premier
              Martial Arts & Fitness Academy for kids, teens, women, and adults
              aiming for transformation in fitness, strength, discipline, and
              confidence.
            </p>

            <div className="flex gap-6 pt-4">
              <a
                href="tel:+919999443678"
                className="bg-[#DD1111] px-8 py-3 rounded-xl uppercase font-bold tracking-widest
          hover:bg-[#ff2a2a] shadow-md shadow-red-900/40 transition-all"
              >
                Join Now
              </a>

              <a
                href="/training-programs/1"
                className="border border-gray-500 px-8 py-3 rounded-xl uppercase font-bold tracking-widest
          hover:bg-white hover:text-black transition-all"
              >
                View Programs
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="relative w-full bg-black text-white py-24 px-6 md:px-16 overflow-hidden">
        {/* ANGLED RED STRIPE */}
        <div className="absolute inset-0 -skew-y-2 bg-gradient-to-r from-[#DD1111]/20 to-transparent"></div>

        <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* CONTENT */}
          <div className="space-y-6">
            <p className="text-[#DD1111] tracking-[0.3em] uppercase text-sm font-semibold">
              🐯 BEST BRAZILIAN JIU-JITSU CLASSES IN DELHI – TIGERS MMA
            </p>

            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight uppercase">
              Brazilian Jiu-Jitsu (BJJ)
              <span className="text-[#DD1111] block">
                Master Ground Combat & Self-Defense
              </span>
            </h2>

            <p className="text-lg opacity-90 tracking-wide">
              Kids • Teens • Adults • Professionals • All Levels Welcome
            </p>

            <p className="text-gray-300 leading-relaxed max-w-xl">
              Learn Brazilian Jiu-Jitsu in a structured, safe & motivating
              environment. Tigers MMA Tilak Nagar offers Delhi’s leading BJJ
              training with expert coaches, practical self-defense, ground
              techniques, submissions, fitness conditioning & professional
              competition preparation.
            </p>

            <div className="flex gap-6 pt-4">
              <a
                href="tel:+919999443678"
                className="bg-[#DD1111] px-8 py-3 rounded-xl uppercase font-bold tracking-widest
          hover:bg-[#ff2a2a] shadow-md shadow-red-900/40 transition-all"
              >
                Join BJJ Today
              </a>

              <a
                href="/training-programs/3"
                className="border border-gray-500 px-8 py-3 rounded-xl uppercase font-bold tracking-widest
          hover:bg-white hover:text-black transition-all"
              >
                View BJJ Program
              </a>
            </div>
          </div>

          {/* IMAGE */}
          <div className="relative group">
            <div className="absolute -inset-4 bg-[#DD1111]/40 blur-2xl rounded-3xl opacity-60 group-hover:opacity-100 transition"></div>

            <img
              src="https://images.pexels.com/photos/17292197/pexels-photo-17292197.jpeg"
              alt="Brazilian Jiu-Jitsu Training"
              className="relative rounded-3xl w-full object-cover
        shadow-[0px_0px_40px_rgba(221,17,17,0.4)]
        group-hover:scale-105 transition duration-300"
            />

            <div className="absolute bottom-4 left-4 bg-[#DD1111] px-4 py-1 rounded-md font-bold text-sm tracking-wide">
              BJJ ELITE
            </div>
          </div>
        </div>
      </section>

      <section className="relative w-full bg-black text-white py-24 px-6 md:px-16 overflow-hidden">
        {/* ANGLED RED STRIPE */}
        <div className="absolute inset-0 -skew-y-2 bg-gradient-to-r from-[#DD1111]/20 to-transparent"></div>

        <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* IMAGE */}
          <div className="relative group">
            <div className="absolute -inset-4 bg-[#DD1111]/40 blur-2xl rounded-3xl opacity-60 group-hover:opacity-100 transition"></div>

            <img
              src="https://images.pexels.com/photos/598631/pexels-photo-598631.jpeg"
              alt="Kickboxing Training"
              className="relative rounded-3xl w-full object-cover
        shadow-[0px_0px_40px_rgba(221,17,17,0.4)]
        group-hover:scale-105 transition duration-300"
            />

            <div className="absolute bottom-4 left-4 bg-[#DD1111] px-4 py-1 rounded-md font-bold text-sm tracking-wide">
              FIGHT READY
            </div>
          </div>
          {/* CONTENT */}
          <div className="space-y-6">
            <p className="text-[#DD1111] tracking-[0.3em] uppercase text-sm font-semibold">
              🥊 KICKBOXING CLASSES IN DELHI — CERTIFIED TRAINERS | TILAK NAGAR
              & JANAKPURI
            </p>

            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight uppercase">
              Kickboxing Classes
              <span className="text-[#DD1111] block">
                Power, Speed & Professional Training
              </span>
            </h2>

            <p className="text-lg opacity-90 tracking-wide">
              Kids • Teens • Women • Adults • Fitness • Self-Defense •
              Competition
            </p>

            <p className="text-gray-300 leading-relaxed max-w-xl">
              MMA Tigers Tilak Nagar offers professional kickboxing training for
              kids, teens, women, beginners and adults. Learn kickboxing in a
              safe, structured and motivating environment with certified
              trainers focused on real results.
            </p>

            <div className="flex gap-6 pt-4">
              <a
                href="tel:+919999443678"
                className="bg-[#DD1111] px-8 py-3 rounded-xl uppercase font-bold tracking-widest
          hover:bg-[#ff2a2a] shadow-md shadow-red-900/40 transition-all"
              >
                Join Kickboxing
              </a>

              <a
                href="/training-programs/5"
                className="border border-gray-500 px-8 py-3 rounded-xl uppercase font-bold tracking-widest
          hover:bg-white hover:text-black transition-all"
              >
                View Program
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="relative w-full bg-black text-white py-24 px-6 md:px-16 overflow-hidden">
        {/* ANGLED RED STRIPE */}
        <div className="absolute inset-0 -skew-y-2 bg-gradient-to-r from-[#DD1111]/20 to-transparent"></div>

        <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* CONTENT */}
          <div className="space-y-6">
            <p className="text-[#DD1111] tracking-[0.3em] uppercase text-sm font-semibold">
              🐯 TIGER MMA TILAK NAGAR – PROFESSIONAL KARATE TRAINING FOR ALL
              AGES
            </p>

            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight uppercase">
              Karate Classes in Delhi
              <span className="text-[#DD1111] block">
                Discipline, Strength & Self-Defense
              </span>
            </h2>

            <p className="text-lg opacity-90 tracking-wide">
              Kids • Teens • Adults • Women • Beginners to Advanced
            </p>

            <p className="text-gray-300 leading-relaxed max-w-xl">
              Learn Karate for fitness, discipline, confidence & real
              self-defense in a professional training environment. TigerMMA
              Tilak Nagar offers expert Karate training with certified
              instructors, structured programs, flexible timings and a safe,
              motivating environment for all age groups.
            </p>

            <div className="flex gap-6 pt-4">
              <a
                href="tel:+919999443678"
                className="bg-[#DD1111] px-8 py-3 rounded-xl uppercase font-bold tracking-widest
          hover:bg-[#ff2a2a] shadow-md shadow-red-900/40 transition-all"
              >
                Join Karate
              </a>

              <a
                href="/training-programs/6"
                className="border border-gray-500 px-8 py-3 rounded-xl uppercase font-bold tracking-widest
          hover:bg-white hover:text-black transition-all"
              >
                View Karate Program
              </a>
            </div>
          </div>

          {/* IMAGE */}
          <div className="relative group">
            <div className="absolute -inset-4 bg-[#DD1111]/40 blur-2xl rounded-3xl opacity-60 group-hover:opacity-100 transition"></div>

            <img
              src="https://images.pexels.com/photos/7045750/pexels-photo-7045750.jpeg"
              alt="Karate Training"
              className="relative rounded-3xl w-full object-cover
        shadow-[0px_0px_40px_rgba(221,17,17,0.4)]
        group-hover:scale-105 transition duration-300"
            />

            <div className="absolute bottom-4 left-4 bg-[#DD1111] px-4 py-1 rounded-md font-bold text-sm tracking-wide">
              KARATE ELITE
            </div>
          </div>
        </div>
      </section>

      <section className="relative w-full bg-black text-white py-24 px-6 md:px-16 overflow-hidden">
        {/* ANGLED RED STRIPE */}
        <div className="absolute inset-0 -skew-y-2 bg-gradient-to-r from-[#DD1111]/20 to-transparent"></div>

        <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* IMAGE */}
          <div className="relative group">
            <div className="absolute -inset-4 bg-[#DD1111]/40 blur-2xl rounded-3xl opacity-60 group-hover:opacity-100 transition"></div>

            <img
              src="https://images.pexels.com/photos/7045592/pexels-photo-7045592.jpeg"
              alt="Taekwondo Training"
              className="relative rounded-3xl w-full object-cover
        shadow-[0px_0px_40px_rgba(221,17,17,0.4)]
        group-hover:scale-105 transition duration-300"
            />

            <div className="absolute bottom-4 left-4 bg-[#DD1111] px-4 py-1 rounded-md font-bold text-sm tracking-wide">
              TAEKWONDO ELITE
            </div>
          </div>
          {/* CONTENT */}
          <div className="space-y-6">
            <p className="text-[#DD1111] tracking-[0.3em] uppercase text-sm font-semibold">
              🥋 TAEKWONDO CLASSES IN DELHI | TIGER MMA – TILAK NAGAR
            </p>

            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight uppercase">
              Taekwondo Classes
              <span className="text-[#DD1111] block">
                Strength, Discipline & Self-Defense
              </span>
            </h2>

            <p className="text-lg opacity-90 tracking-wide">
              Strength • Discipline • Confidence • Self-Defense
            </p>

            <p className="text-gray-300 leading-relaxed max-w-xl">
              Join Tiger MMA Tilak Nagar for the best Taekwondo classes in
              Delhi. Expert training for kids, teens, and adults focused on
              fitness, discipline and real-world self-defense. Free trial
              available!
            </p>

            <div className="flex gap-6 pt-4">
              <a
                href="tel:+919999443678"
                className="bg-[#DD1111] px-8 py-3 rounded-xl uppercase font-bold tracking-widest
          hover:bg-[#ff2a2a] shadow-md shadow-red-900/40 transition-all"
              >
                Start Free Trial
              </a>

              <a
                href="/training-programs/7"
                className="border border-gray-500 px-8 py-3 rounded-xl uppercase font-bold tracking-widest
          hover:bg-white hover:text-black transition-all"
              >
                View Taekwondo Program
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="relative w-full bg-black text-white py-24 px-6 md:px-16 overflow-hidden">
        {/* ANGLED RED STRIPE */}
        <div className="absolute inset-0 -skew-y-2 bg-gradient-to-r from-[#DD1111]/20 to-transparent"></div>

        <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* CONTENT */}
          <div className="space-y-6">
            <p className="text-[#DD1111] tracking-[0.3em] uppercase text-sm font-semibold">
              🐅 TIGER MMA – BEST KUNG FU & MMA CLASSES IN DELHI
            </p>

            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight uppercase">
              Kung Fu Classes
              <span className="text-[#DD1111] block">
                Strength, Discipline & Confidence
              </span>
            </h2>

            <p className="text-lg opacity-90 tracking-wide">
              Strength • Flexibility • Discipline • Confidence
            </p>

            <p className="text-gray-300 leading-relaxed max-w-xl">
              Professional Kung Fu, MMA, Self-Defense & Fighting Skills training
              for kids, teens and adults in a high-performance environment.
              Build power, control, confidence and real combat ability with
              expert coaches at Tiger MMA.
            </p>

            <div className="flex gap-6 pt-4">
              <a
                href="tel:+919999443678"
                className="bg-[#DD1111] px-8 py-3 rounded-xl uppercase font-bold tracking-widest
          hover:bg-[#ff2a2a] shadow-md shadow-red-900/40 transition-all"
              >
                Join Kung Fu
              </a>

              <a
                href="/training-programs/8"
                className="border border-gray-500 px-8 py-3 rounded-xl uppercase font-bold tracking-widest
          hover:bg-white hover:text-black transition-all"
              >
                View Kung Fu Program
              </a>
            </div>
          </div>

          {/* IMAGE */}
          <div className="relative group">
            <div className="absolute -inset-4 bg-[#DD1111]/40 blur-2xl rounded-3xl opacity-60 group-hover:opacity-100 transition"></div>

            <img
              src="https://images.pexels.com/photos/4428290/pexels-photo-4428290.jpeg"
              alt="Kung Fu Training"
              className="relative rounded-3xl w-full object-cover
        shadow-[0px_0px_40px_rgba(221,17,17,0.4)]
        group-hover:scale-105 transition duration-300"
            />

            <div className="absolute bottom-4 left-4 bg-[#DD1111] px-4 py-1 rounded-md font-bold text-sm tracking-wide">
              KUNG FU ELITE
            </div>
          </div>
        </div>
      </section>

      <section className="relative w-full bg-black text-white py-24 px-6 md:px-16 overflow-hidden">
        {/* ANGLED RED STRIPE */}
        <div className="absolute inset-0 -skew-y-2 bg-gradient-to-r from-[#DD1111]/20 to-transparent"></div>

        <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* IMAGE */}
          <div className="relative group">
            <div className="absolute -inset-4 bg-[#DD1111]/40 blur-2xl rounded-3xl opacity-60 group-hover:opacity-100 transition"></div>

            <img
              src="https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg"
              alt="Weight Loss Training"
              className="relative rounded-3xl w-full object-cover
        shadow-[0px_0px_40px_rgba(221,17,17,0.4)]
        group-hover:scale-105 transition duration-300"
            />

            <div className="absolute bottom-4 left-4 bg-[#DD1111] px-4 py-1 rounded-md font-bold text-sm tracking-wide">
              BODY TRANSFORMATION
            </div>
          </div>
          {/* CONTENT */}
          <div className="space-y-6">
            <p className="text-[#DD1111] tracking-[0.3em] uppercase text-sm font-semibold">
              Weight Loss Classes in Delhi | Tiger Institute India | Best Fat
              Loss & Body Transformation Courses
            </p>

            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight uppercase">
              Weight Loss Classes
              <span className="text-[#DD1111] block">
                Fat Loss & Total Body Transformation
              </span>
            </h2>

            <p className="text-lg opacity-90 tracking-wide">
              Strength • Flexibility • Discipline • Confidence
            </p>

            <p className="text-gray-300 leading-relaxed max-w-xl">
              If you’re searching for weight loss classes in Delhi, a fat-loss
              program that actually works, or a professional weight-loss
              training institute, Tiger Institute India delivers one of the most
              trusted and results-driven transformation programs in Delhi NCR —
              built for real, lasting change.
            </p>

            <div className="flex gap-6 pt-4">
              <a
                href="tel:+919999443678"
                className="bg-[#DD1111] px-8 py-3 rounded-xl uppercase font-bold tracking-widest
          hover:bg-[#ff2a2a] shadow-md shadow-red-900/40 transition-all"
              >
                Start Transformation
              </a>

              <a
                href="/training-programs/9"
                className="border border-gray-500 px-8 py-3 rounded-xl uppercase font-bold tracking-widest
          hover:bg-white hover:text-black transition-all"
              >
                View Program
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="relative w-full bg-black text-white py-24 px-6 md:px-16 overflow-hidden">
        {/* ANGLED RED STRIPE */}
        <div className="absolute inset-0 -skew-y-2 bg-gradient-to-r from-[#DD1111]/20 to-transparent"></div>

        <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* CONTENT */}
          <div className="space-y-6">
            <p className="text-[#DD1111] tracking-[0.3em] uppercase text-sm font-semibold">
              Self-Defense Classes in Delhi – Practical Training for Everyday
              Safety
            </p>

            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight uppercase">
              Self-Defense Classes
              <span className="text-[#DD1111] block">
                Real-World Protection & Confidence
              </span>
            </h2>

            <p className="text-lg opacity-90 tracking-wide">
              Strength • Flexibility • Discipline • Confidence
            </p>

            <p className="text-gray-300 leading-relaxed max-w-xl">
              Tiger MMA offers Delhi’s most practical and reality-based
              self-defense programs designed for women, kids, teens, adults,
              professionals and corporate groups. Learn awareness, control,
              striking, escapes and real-life survival skills.
            </p>

            <div className="flex gap-6 pt-4">
              <a
                href="tel:+919999443678"
                className="bg-[#DD1111] px-8 py-3 rounded-xl uppercase font-bold tracking-widest
          hover:bg-[#ff2a2a] shadow-md shadow-red-900/40 transition-all"
              >
                Join Self-Defense
              </a>

              <a
                href="/training-programs/10"
                className="border border-gray-500 px-8 py-3 rounded-xl uppercase font-bold tracking-widest
          hover:bg-white hover:text-black transition-all"
              >
                View Program
              </a>
            </div>
          </div>

          {/* IMAGE */}
          <div className="relative group">
            <div className="absolute -inset-4 bg-[#DD1111]/40 blur-2xl rounded-3xl opacity-60 group-hover:opacity-100 transition"></div>

            <img
              src="https://images.pexels.com/photos/10823763/pexels-photo-10823763.jpeg"
              alt="Self-Defense Training"
              className="relative rounded-3xl w-full object-cover
        shadow-[0px_0px_40px_rgba(221,17,17,0.4)]
        group-hover:scale-105 transition duration-300"
            />

            <div className="absolute bottom-4 left-4 bg-[#DD1111] px-4 py-1 rounded-md font-bold text-sm tracking-wide">
              STAY SAFE
            </div>
          </div>
        </div>
      </section>

      {/* TRAINING METHODOLOGY SECTION */}
      <section className="w-full bg-black text-white py-20 poppins-regular px-4 md:px-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          {/* LEFT IMAGE */}
          <div className="relative flex justify-center">
            <div className="absolute -top-6 -left-6 w-40 h-40 bg-[#DD1111]"></div>
            <img
              src={img2}
              alt="Awards Ceremony"
              className="relative z-10 w-full max-w-md grayscale hover:grayscale-0 transition-all duration-300 object-cover"
            />
            <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-[#DD1111]"></div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="space-y-6">
            <p className="text-[#DD1111] tracking-widest uppercase text-sm">
              4 Pillars of World Class Training
            </p>

            <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-wide leading-tight">
              Our Training <br /> Methodologies to be <br /> World Class
            </h2>

            <p className="text-gray-400 max-w-xl">
              Over the years, we have refined our training methodologies to be
              world class. These are some of the things that make our training
              unique and impactful.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
              {[
                {
                  title: "Focus on Fundamentals",
                  desc: "We ensure you learn the basics well and build a strong foundation. Improve strength, stamina, flexibility & mental focus",
                },
                {
                  title: "Safe Training",
                  desc: "Zero risk of injuries so you can train without worries. Improve strength, stamina, flexibility & mental focus",
                },
                {
                  title: "Holistic Training",
                  desc: "Improve strength, stamina, flexibility & mental focus. Improve strength, stamina, flexibility & mental focus",
                },
                {
                  title: "Martial Arts for Everyone",
                  desc: "We train all ages & all skill levels. Improve strength, stamina, flexibility & mental focus",
                },
              ].map((item, index) => (
                <div key={index}>
                  <h4 className="flex items-center text-xl  font-semibold mb-2">
                    <span className="w-6 h-6 mr-2 flex items-center  justify-center bg-[#DD1111]">
                      ✔
                    </span>
                    {item.title}
                  </h4>
                  <p className="text-gray-400 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>

            <button className="mt-8 inline-flex items-center bg-[#DD1111] hover:bg-red-700 transition px-8 py-4 rounded-none uppercase tracking-widest font-semibold">
              Start My Free Trial
              <span className="ml-3">→</span>
            </button>
          </div>
        </div>
      </section>

      {/* STATISTICS SECTION */}
      <StatisticsSection />
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
      <section className="w-full bg-black text-white py-20 poppins-regular px-4 md:px-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          {/* LEFT IMAGE */}
          <div className="relative flex flex-col  justify-center">
            <h2 className="text-4xl max-w-6xl poppins-bold text-dangerRed tracking-wide uppercase">
              Gopi Roy
            </h2>
            <h3 className="text-lg mt-2 text-gray-300">
              Black Belt 3rd Dan • MMA Profighter
            </h3>
            <p className="text-dangerRed font-semibold">
              (President & Founder)
            </p>

            <p className="mt-4 text-gray-300 leading-relaxed">
              With <strong>15+ years of martial arts experience</strong> and
              <strong> 17 years of teaching</strong>, Gopi Roy has trained over
              <strong> 15,000 students</strong> in Delhi NCR. His journey began
              at age 8 at the Buddha Temple martial arts school, where he
              trained intensively for over a decade.
            </p>

            <h4 className="poppins-bold text-xl mt-6">Expertise In:</h4>
            <ul className="mt-3 grid grid-cols-2 gap-2 text-gray-400 text-sm">
              <li>Karate</li>
              <li>MMA</li>
              <li>Brazilian Jiu-Jitsu</li>
              <li>Muay Thai</li>
              <li>Kickboxing</li>
              <li>Boxing</li>
              <li>Tai-Chi</li>
              <li>Taekwondo</li>
              <li>Judo</li>
              <li>Gymnastics</li>
              <li>Martial Arts Weapons</li>
            </ul>

            <p className="mt-4 text-gray-300">
              He has also won major tournaments including the{" "}
              <strong className="text-dangerRed">
                1997 Dragon Martial Arts Championship (70kg)
              </strong>
              .
            </p>
          </div>

          <div className="flex justify-center items-center">
            <img
              src={img2}
              alt="Master Gopi Roy"
              className="rounded-x shadow-2xl border-2 border-dangerRed/40 object-cover"
            />
          </div>
        </div>
      </section>
    </>
  );
};

// Statistics Component with Animated Counters
const STATS_TARGETS = {
  years: 15,
  branches: 20,
  coaches: 50,
  students: 5000,
};

const StatisticsSection = () => {
  const [counts, setCounts] = useState({
    years: 0,
    branches: 0,
    coaches: 0,
    students: 0,
  });
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef(null);

  const animateCounters = useCallback(() => {
    const duration = 2000; // 2 seconds
    const steps = 60;
    const interval = duration / steps;

    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;

      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);

      setCounts({
        years: Math.floor(STATS_TARGETS.years * easeOutQuart),
        branches: Math.floor(STATS_TARGETS.branches * easeOutQuart),
        coaches: Math.floor(STATS_TARGETS.coaches * easeOutQuart),
        students: Math.floor(STATS_TARGETS.students * easeOutQuart),
      });

      if (currentStep >= steps) {
        setCounts({
          years: STATS_TARGETS.years,
          branches: STATS_TARGETS.branches,
          coaches: STATS_TARGETS.coaches,
          students: STATS_TARGETS.students,
        });
        clearInterval(timer);
      }
    }, interval);
  }, []);

  useEffect(() => {
    const currentRef = sectionRef.current;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            animateCounters();
          }
        });
      },
      { threshold: 0.3 }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [hasAnimated, animateCounters]);

  const formatStudents = (num) => {
    if (num >= 1000) {
      const kValue = num / 1000;
      // If it's a whole number, don't show decimal
      if (kValue % 1 === 0) {
        return `${kValue}K`;
      }
      return `${kValue.toFixed(1)}K`;
    }
    return num.toString();
  };

  return (
    <section ref={sectionRef} className="w-full bg-black py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Years of Experience */}
          <div className="text-center">
            <div className="flex items-baseline justify-center gap-2 mb-2">
              <span className="text-6xl md:text-7xl font-bold text-white poppins-bold">
                {counts.years}
              </span>
              <span className="text-4xl md:text-5xl font-bold text-dangerRed poppins-bold">
                +
              </span>
            </div>
            <p className="text-gray-400 text-sm md:text-base leading-tight">
              Years Of
              <br />
              Experiences
            </p>
          </div>

          {/* Training Branches */}
          <div className="text-center">
            <div className="flex items-baseline justify-center gap-2 mb-2">
              <span className="text-6xl md:text-7xl font-bold text-white poppins-bold">
                {counts.branches}
              </span>
              <span className="text-4xl md:text-5xl font-bold text-dangerRed poppins-bold">
                +
              </span>
            </div>
            <p className="text-gray-400 text-sm md:text-base leading-tight">
              Training
              <br />
              Branches
            </p>
          </div>

          {/* Professional Coaches */}
          <div className="text-center">
            <div className="flex items-baseline justify-center gap-2 mb-2">
              <span className="text-6xl md:text-7xl font-bold text-white poppins-bold">
                {counts.coaches}
              </span>
              <span className="text-4xl md:text-5xl font-bold text-dangerRed poppins-bold">
                +
              </span>
            </div>
            <p className="text-gray-400 text-sm md:text-base leading-tight">
              Professional
              <br />
              Coaches
            </p>
          </div>

          {/* Students Enrolled */}
          <div className="text-center">
            <div className="flex items-baseline justify-center gap-2 mb-2">
              <span className="text-6xl md:text-7xl font-bold text-white poppins-bold">
                {formatStudents(counts.students)}
              </span>
              <span className="text-4xl md:text-5xl font-bold text-dangerRed poppins-bold">
                +
              </span>
            </div>
            <p className="text-gray-400 text-sm md:text-base leading-tight">
              Students
              <br />
              Enrolled
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
