import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 poppins-regular pt-12 pb-6">
      <div className="max-w-screen-2xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* LOGO + ABOUT */}
        <div>
          <Link to="/">
            <h2 className="text-3xl poppins-bold text-dangerRed tracking-wide hover:text-red-600 transition-colors">
              TIGER MMA
            </h2>
          </Link>
          <p className="mt-4 text-gray-400 text-sm leading-relaxed">
            Delhi's No.1 Martial Arts & Fitness Academy. Professional training
            in MMA, Boxing, Kickboxing, Taekwondo, Kung-Fu, Weight-Loss &
            Self-Defense.
          </p>

          <div className="mt-6 flex gap-4 items-center justify-center">
            <a
              href="https://www.facebook.com/mmatigers"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-dangerRed text-white text-xl transition-colors"
            >
              <i className="fa-brands fa-facebook-f"></i>
            </a>
            <a
              href="https://www.instagram.com/mmatigers"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-dangerRed text-white text-xl transition-colors"
            >
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a
              href="https://www.youtube.com/mmatigers"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-dangerRed text-white text-xl transition-colors"
            >
              <i className="fa-brands fa-youtube"></i>
            </a>
            <a
              href="https://wa.me/919999443678"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-dangerRed text-white text-xl transition-colors"
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
            <li>
              <Link
                to="/"
                className="hover:text-dangerRed transition-colors cursor-pointer block"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="hover:text-dangerRed transition-colors cursor-pointer block"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/blogs"
                className="hover:text-dangerRed transition-colors cursor-pointer block"
              >
                Blogs
              </Link>
            </li>
            <li>
              <Link
                to="/gallery"
                className="hover:text-dangerRed transition-colors cursor-pointer block"
              >
                Gallery
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="hover:text-dangerRed transition-colors cursor-pointer block"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* TRAINING PROGRAMS */}
        <div>
          <h3 className="text-xl poppins-bold text-white mb-4 border-b border-gray-600 pb-2">
            Programs
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link
                to="/training-programs/5"
                className="hover:text-dangerRed transition-colors cursor-pointer block"
              >
                Kickboxing
              </Link>
            </li>
            <li>
              <Link
                to="/training-programs/2"
                className="hover:text-dangerRed transition-colors cursor-pointer block"
              >
                Boxing
              </Link>
            </li>
            <li>
              <Link
                to="/training-programs/7"
                className="hover:text-dangerRed transition-colors cursor-pointer block"
              >
                Taekwondo
              </Link>
            </li>
            <li>
              <Link
                to="/training-programs/8"
                className="hover:text-dangerRed transition-colors cursor-pointer block"
              >
                Kung-Fu
              </Link>
            </li>
            <li>
              <Link
                to="/training-programs/10"
                className="hover:text-dangerRed transition-colors cursor-pointer block"
              >
                Self-Defense
              </Link>
            </li>
            <li>
              <Link
                to="/training-programs/9"
                className="hover:text-dangerRed transition-colors cursor-pointer block"
              >
                Weight Loss
              </Link>
            </li>
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
              <a
                href="tel:+919999443678"
                className="hover:text-dangerRed transition-colors"
              >
                +91 9999443678
              </a>
            </li>
            <li className="flex items-center gap-3">
              <i className="fa-solid fa-envelope text-dangerRed"></i>
              <a
                href="mailto:support@mmatigers.com"
                className="hover:text-dangerRed transition-colors break-all"
              >
                support@mmatigers.com
              </a>
            </li>
            <li className="flex items-center gap-3">
              <i className="fa-solid fa-location-dot text-dangerRed"></i>
              <span>
                4B-1 Tilak Nagar Metro Pillar No. 499, New Delhi, 110058
              </span>
            </li>
            <li className="flex items-center gap-3">
              <i className="fa-solid fa-location-dot text-dangerRed"></i>
              <span>
                Shop No. 11/22, Double Storey, Shivaji Marg, Block-2, Tilak
                Nagar, New Delhi, 110058
              </span>
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
