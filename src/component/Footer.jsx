import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 poppins-regular pt-12 pb-6">
      <div className="max-w-screen-2xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* LOGO + ABOUT */}
        <div>
          <h2 className="text-3xl poppins-bold text-dangerRed tracking-wide">
            TIGER MMA
          </h2>
          <p className="mt-4 text-gray-400 text-sm leading-relaxed">
            Delhi’s No.1 Martial Arts & Fitness Academy. Professional training
            in MMA, Boxing, Kickboxing, Taekwondo, Kung-Fu, Weight-Loss &
            Self-Defense.
          </p>

          <div className="mt-6 flex gap-4 items-center justify-center">
            <a
              href="https://www.facebook.com/mmatigers"
              className="hover:text-dangerRed text-white text-xl"
            >
              <i className="fa-brands fa-facebook-f"></i>
            </a>
            <a
              href="https://www.instagram.com/mmatigers"
              className="hover:text-dangerRed text-white text-xl"
            >
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a
              href="https://www.youtube.com/mmatigers"
              className="hover:text-dangerRed text-white text-xl"
            >
              <i className="fa-brands fa-youtube"></i>
            </a>
            <a
              href="https://wa.me/919999443678"
              className="hover:text-dangerRed text-white text-xl"
            >
              <i className="fa-brands fa-whatsapp"></i>
            </a>
          </div>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="text-xl poppins-bold text-white mb-4 border-b border-gray-600 pb-2">
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-dangerRed cursor-pointer">Home</li>
            <li className="hover:text-dangerRed cursor-pointer">Programs</li>
            <li className="hover:text-dangerRed cursor-pointer">Trainers</li>
            <li className="hover:text-dangerRed cursor-pointer">Gallery</li>
            <li className="hover:text-dangerRed cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* TRAINING PROGRAMS */}
        <div>
          <h3 className="text-xl poppins-bold text-white mb-4 border-b border-gray-600 pb-2">
            Programs
          </h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-dangerRed cursor-pointer">Kickboxing</li>
            <li className="hover:text-dangerRed cursor-pointer">Boxing</li>
            <li className="hover:text-dangerRed cursor-pointer">Taekwondo</li>
            <li className="hover:text-dangerRed cursor-pointer">Kung-Fu</li>
            <li className="hover:text-dangerRed cursor-pointer">
              Self-Defense
            </li>
            <li className="hover:text-dangerRed cursor-pointer">Weight Loss</li>
          </ul>
        </div>

        {/* CONTACT DETAILS */}
        <div>
          <h3 className="text-xl poppins-bold text-white mb-4 border-b border-gray-600 pb-2">
            Contact Us
          </h3>
          <ul className="text-sm space-y-3">
            <li className="flex items-center gap-3">
              <i className="fa-solid fa-phone text-dangerRed"></i>
              +91 9999443678
            </li>
            <li className="flex items-center gap-3">
              <i className="fa-solid fa-envelope text-dangerRed"></i>
              support@mmatigers.com
            </li>
            <li className="flex items-center gap-3">
              <i className="fa-solid fa-location-dot text-dangerRed"></i>
              4B-1 Tilak Nagar Metro Pillar No. 499, New Delhi, 110058
            </li>
            <li className="flex items-center gap-3">
              <i className="fa-solid fa-location-dot text-dangerRed"></i>
              Shop No. 11/22, Double Storey, Shivaji Marg, Block-2, Tilak Nagar,
              New Delhi, 110058
            </li>
          </ul>
        </div>
      </div>

      {/* COPYRIGHT BAR */}
      <div className="mt-12 border-t border-gray-700 pt-4 text-center text-sm">
        © {new Date().getFullYear()} Tiger MMA — Train Smart. Train Strong.
        Transform Yourself. <br />
        <span>
          Developed by
          <a href="https://bukul.vercel.app" className="text-dangerRed">
            {" "}
            Badal Kainth.
          </a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
