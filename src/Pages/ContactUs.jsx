import React, { useState, useEffect, useRef, useCallback } from "react";
import img1 from "../images/img1.jpg";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
    // You can add API call here
    alert("Thank you for contacting us! We'll get back to you soon.");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <main className="bg-[#0f0f0f] text-white poppins-regular">
      {/* HERO SECTION */}
      <section className="w-full bg-black text-white py-10 poppins-regular relative">
        {/* BACKGROUND IMAGE */}
        <img
          src={img1}
          alt="Contact MMA Tigers"
          className="w-full h-full md:h-80 object-cover"
        />

        {/* BLACK OVERLAY 70% */}
        <div className="absolute inset-0 bg-black/70"></div>

        {/* TEXT CONTENT */}
        <div className="w-10/12 mx-auto text-center space-y-6 absolute inset-0 flex flex-col items-center justify-center text-white">
          <h1 className="text-4xl md:text-6xl poppins-bold uppercase tracking-widest drop-shadow-2xl text-white">
            Contact Us
          </h1>
          <p className="text-lg md:text-xl opacity-90 max-w-4xl mx-auto text-white">
            Get in Touch • Join Our Community • Start Your Journey
          </p>
        </div>
      </section>

      {/* STATISTICS SECTION */}
      <StatisticsSection />

      {/* CONTACT SECTION */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* LEFT SIDE - CONTACT FORM */}
          <div className="bg-black/50 rounded-2xl p-8 border border-gray-800">
            <h2 className="text-3xl poppins-bold text-dangerRed uppercase tracking-wide mb-6">
              Send Us a Message
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold mb-2 text-gray-300"
                >
                  Your Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:border-dangerRed text-white"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold mb-2 text-gray-300"
                >
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:border-dangerRed text-white"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-semibold mb-2 text-gray-300"
                >
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:border-dangerRed text-white"
                  placeholder="+91 9999443678"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold mb-2 text-gray-300"
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:border-dangerRed text-white resize-none"
                  placeholder="Tell us about your interest in training..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-dangerRed hover:bg-[#ff2a2a] text-white font-bold py-4 px-8 rounded-lg uppercase tracking-widest transition-all duration-300 transform hover:scale-105"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* RIGHT SIDE - CONTACT INFORMATION */}
          <div className="space-y-8">
            {/* CONTACT DETAILS */}
            <div className="bg-black/50 rounded-2xl p-8 border border-gray-800">
              <h2 className="text-3xl poppins-bold text-dangerRed uppercase tracking-wide mb-6">
                Get in Touch
              </h2>

              <div className="space-y-6">
                {/* PHONE */}
                <div className="flex items-start gap-4">
                  <div className="bg-dangerRed/20 p-3 rounded-lg">
                    <i className="fa-solid fa-phone text-dangerRed text-xl"></i>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Phone</h3>
                    <a
                      href="tel:+919999443678"
                      className="text-gray-300 hover:text-dangerRed transition-colors"
                    >
                      +91 9999443678
                    </a>
                  </div>
                </div>

                {/* EMAIL */}
                <div className="flex items-start gap-4">
                  <div className="bg-dangerRed/20 p-3 rounded-lg">
                    <i className="fa-solid fa-envelope text-dangerRed text-xl"></i>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Email</h3>
                    <a
                      href="mailto:support@mmatigers.com"
                      className="text-gray-300 hover:text-dangerRed transition-colors break-all"
                    >
                      support@mmatigers.com
                    </a>
                  </div>
                </div>

                {/* ADDRESS 1 */}
                <div className="flex items-start gap-4">
                  <div className="bg-dangerRed/20 p-3 rounded-lg">
                    <i className="fa-solid fa-location-dot text-dangerRed text-xl"></i>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Location 1</h3>
                    <p className="text-gray-300 leading-relaxed">
                      4B-1 Tilak Nagar Metro Pillar No. 499, New Delhi, 110058
                    </p>
                  </div>
                </div>

                {/* ADDRESS 2 */}
                <div className="flex items-start gap-4">
                  <div className="bg-dangerRed/20 p-3 rounded-lg">
                    <i className="fa-solid fa-location-dot text-dangerRed text-xl"></i>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Location 2</h3>
                    <p className="text-gray-300 leading-relaxed">
                      Shop No. 11/22, Double Storey, Shivaji Marg, Block-2,
                      Tilak Nagar, New Delhi, 110058
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* SOCIAL MEDIA */}
            <div className="bg-black/50 rounded-2xl p-8 border border-gray-800">
              <h2 className="text-3xl poppins-bold text-dangerRed uppercase tracking-wide mb-6">
                Follow Us
              </h2>
              <div className="flex gap-6 items-center justify-center">
                <a
                  href="https://www.facebook.com/mmatigers"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 hover:bg-dangerRed p-4 rounded-full transition-all duration-300 transform hover:scale-110"
                  aria-label="Facebook"
                >
                  <i className="fa-brands fa-facebook-f text-white text-2xl"></i>
                </a>
                <a
                  href="https://www.instagram.com/mmatigers"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 hover:bg-dangerRed p-4 rounded-full transition-all duration-300 transform hover:scale-110"
                  aria-label="Instagram"
                >
                  <i className="fa-brands fa-instagram text-white text-2xl"></i>
                </a>
                <a
                  href="https://www.youtube.com/mmatigers"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 hover:bg-dangerRed p-4 rounded-full transition-all duration-300 transform hover:scale-110"
                  aria-label="YouTube"
                >
                  <i className="fa-brands fa-youtube text-white text-2xl"></i>
                </a>
                <a
                  href="https://wa.me/919999443678"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 hover:bg-dangerRed p-4 rounded-full transition-all duration-300 transform hover:scale-110"
                  aria-label="WhatsApp"
                >
                  <i className="fa-brands fa-whatsapp text-white text-2xl"></i>
                </a>
              </div>
            </div>

            {/* QUICK ACTIONS */}
            <div className="bg-black/50 rounded-2xl p-8 border border-gray-800">
              <h2 className="text-3xl poppins-bold text-dangerRed uppercase tracking-wide mb-6">
                Quick Actions
              </h2>
              <div className="space-y-4">
                <a
                  href="tel:+919999443678"
                  className="block w-full bg-dangerRed hover:bg-[#ff2a2a] text-white font-bold py-3 px-6 rounded-lg uppercase tracking-widest text-center transition-all duration-300"
                >
                  <i className="fa-solid fa-phone mr-2"></i>
                  Call Now
                </a>
                <a
                  href="https://wa.me/919999443678"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg uppercase tracking-widest text-center transition-all duration-300"
                >
                  <i className="fa-brands fa-whatsapp mr-2"></i>
                  WhatsApp Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MAP SECTION */}
      <section className="max-w-7xl mx-auto px-6 pb-16">
        <div className="bg-black/50 rounded-2xl p-8 border border-gray-800">
          <h2 className="text-3xl poppins-bold text-dangerRed uppercase tracking-wide mb-6 text-center">
            Find Us on Map
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* MAP 1 */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-white">
                Location 1: Tilak Nagar Metro
              </h3>
              <div className="w-full h-64 bg-gray-800 rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.234567890123!2d77.1234567890123!3d28.6543210987654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDM5JzE1LjYiTiA3N8KwMDcnMjQuNSJF!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="MMA Tigers Location 1"
                ></iframe>
              </div>
              <p className="text-gray-300 text-sm">
                4B-1 Tilak Nagar Metro Pillar No. 499, New Delhi, 110058
              </p>
            </div>

            {/* MAP 2 */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-white">
                Location 2: Shivaji Marg
              </h3>
              <div className="w-full h-64 bg-gray-800 rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.234567890123!2d77.1234567890123!3d28.6543210987654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDM5JzE1LjYiTiA3N8KwMDcnMjQuNSJF!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="MMA Tigers Location 2"
                ></iframe>
              </div>
              <p className="text-gray-300 text-sm">
                Shop No. 11/22, Double Storey, Shivaji Marg, Block-2, Tilak
                Nagar, New Delhi, 110058
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* BUSINESS HOURS */}
      <section className="max-w-7xl mx-auto px-6 pb-16">
        <div className="bg-black/50 rounded-2xl p-8 border border-gray-800">
          <h2 className="text-3xl poppins-bold text-dangerRed uppercase tracking-wide mb-6 text-center">
            Training Hours
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="bg-gray-900/50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-dangerRed mb-3">
                Morning Sessions
              </h3>
              <p className="text-gray-300">6:00 AM - 10:00 AM</p>
            </div>
            <div className="bg-gray-900/50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-dangerRed mb-3">
                Evening Sessions
              </h3>
              <p className="text-gray-300">5:00 PM - 9:00 PM</p>
            </div>
            <div className="bg-gray-900/50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-dangerRed mb-3">
                Weekend Sessions
              </h3>
              <p className="text-gray-300">8:00 AM - 12:00 PM</p>
            </div>
          </div>
          <p className="text-center text-gray-400 mt-6">
            * Please call ahead to confirm class schedules and availability
          </p>
        </div>
      </section>
    </main>
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

export default ContactUs;
