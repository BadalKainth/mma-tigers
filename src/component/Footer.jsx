import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/mmatigerslogo.jpeg";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 poppins-regular pt-12 pb-6">
      {/* MAIN FOOTER */}
      <div className="max-w-screen-xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:justify-between gap-10">

          {/* LOGO */}
          <div className="flex justify-center md:justify-start">
            <img
              src={logo}
              alt="Tigers MMA Logo"
              className="w-36 md:w-40 object-contain"
            />
          </div>

          {/* ABOUT */}
          <div className="flex flex-col items-center justify-center text-center md:items-start md:justify-start md:text-left w-full max-w-sm mx-auto">
            <Link to="/">
              <h2 className="text-2xl poppins-bold text-dangerRed hover:text-red-600 transition-colors">
                TIGERS MMA
              </h2>
            </Link>

            <p className="mt-3 text-gray-400 text-sm leading-relaxed">
              Delhi's No.1 Martial Arts & Fitness Academy. Professional training
              in MMA, Boxing, Kickboxing, Taekwondo, Kung-Fu, Weight-Loss &
              Self-Defense.
            </p>

            {/* SOCIAL ICONS */}
            <div className="mt-4 flex justify-center md:justify-start gap-4 text-xl w-full">
              <a href="https://www.facebook.com/mmatigers" target="_blank" rel="noopener noreferrer" className="hover:text-dangerRed">
                <i className="fa-brands fa-facebook-f"></i>
              </a>
              <a href="https://www.instagram.com/mmatigers" target="_blank" rel="noopener noreferrer" className="hover:text-dangerRed">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="https://www.youtube.com/mmatigers" target="_blank" rel="noopener noreferrer" className="hover:text-dangerRed">
                <i className="fa-brands fa-youtube"></i>
              </a>
              <a href="https://wa.me/919999443678" target="_blank" rel="noopener noreferrer" className="hover:text-dangerRed">
                <i className="fa-brands fa-whatsapp"></i>
              </a>
            </div>
          </div>

          {/* QUICK LINKS */}
          <div className="text-center md:text-left">
            <h3 className="text-lg poppins-bold text-white mb-3 border-b border-gray-700 pb-1">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-dangerRed">Home</Link></li>
              <li><Link to="/about" className="hover:text-dangerRed">About</Link></li>
              <li><Link to="/blogs" className="hover:text-dangerRed">Blogs</Link></li>
              <li><Link to="/gallery" className="hover:text-dangerRed">Gallery</Link></li>
              <li><Link to="/contact" className="hover:text-dangerRed">Contact</Link></li>
            </ul>
          </div>

          {/* PROGRAMS */}
          <div className="text-center md:text-left">
            <h3 className="text-lg poppins-bold text-white mb-3 border-b border-gray-700 pb-1">
              Programs
            </h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/training-programs/5" className="hover:text-dangerRed">Kickboxing</Link></li>
              <li><Link to="/training-programs/2" className="hover:text-dangerRed">Boxing</Link></li>
              <li><Link to="/training-programs/7" className="hover:text-dangerRed">Taekwondo</Link></li>
              <li><Link to="/training-programs/8" className="hover:text-dangerRed">Kung-Fu</Link></li>
              <li><Link to="/training-programs/10" className="hover:text-dangerRed">Self-Defense</Link></li>
              <li><Link to="/training-programs/9" className="hover:text-dangerRed">Weight Loss</Link></li>
            </ul>
          </div>

          {/* CONTACT */}
          <div className="text-center md:text-left">
            <h3 className="text-lg poppins-bold text-white mb-3 border-b border-gray-700 pb-1">
              Contact Us
            </h3>
            <ul className="text-sm space-y-3">
              <li className="flex justify-center md:justify-start gap-3">
                <i className="fa-solid fa-phone text-dangerRed"></i>
                <a href="tel:+919999443678" className="hover:text-dangerRed">
                  +91 9999443678
                </a>
              </li>
              <li className="flex justify-center md:justify-start gap-3">
                <i className="fa-solid fa-envelope text-dangerRed"></i>
                <a href="mailto:support@mmatigers.com" className="hover:text-dangerRed">
                  support@mmatigers.com
                </a>
              </li>
              <li className="flex justify-center md:justify-start gap-3">
                <i className="fa-solid fa-location-dot text-dangerRed"></i>
                <span>Tilak Nagar, New Delhi – 110058</span>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="mt-12 border-t border-gray-700 pt-4 text-center text-sm">
        © {new Date().getFullYear()} Tigers MMA — Train Smart. Train Strong.
        <br />
        <span>
          Developed by{" "}
          <a href="https://bukul.vercel.app" className="text-dangerRed">
            Badal Kainth
          </a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
