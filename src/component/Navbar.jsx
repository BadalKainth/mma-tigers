import React, { useEffect, useState } from "react";
import { Link, Link as RouterLink, useLocation } from "react-router-dom";
import { scroller } from "react-scroll";
import trainingsData from "../utils/trainingData";

const links = [
  {
    name: "Training",
    dropdown: trainingsData.map((trainings) => ({
      name: trainings.title,
      to: `/training-programs/${trainings.id}`,
    })),
  },
  { name: "About", to: "/about" },
  { name: "Gallery", to: "/gallery" },
  { name: "Blogs", to: "/blogs" },
  { name: "Contact", to: "/contact" },
];

const Navbar = () => {
  const location = useLocation();

  const [mobileOpen, setMobileOpen] = useState(false);
  const [trainingOpen, setTrainingOpen] = useState(false);

  // Smooth scroll for hash links
  useEffect(() => {
    if (location.hash) {
      scroller.scrollTo(location.hash.replace("#", ""), {
        smooth: true,
        duration: 500,
        offset: -70,
      });
    }
    setMobileOpen(false);
    setTrainingOpen(false);
  }, [location]);

  return (
    <nav className="bg-black sticky top-0 z-50 w-full text-white uppercase shadow">
      <div className="max-w-screen-2xl mx-auto px-6 py-5 flex justify-between items-center">

        {/* LOGO */}
        <h1 className="carter-one-bold text-2xl md:text-3xl tracking-widest hover:text-dangerRed">
          <Link to="/">Tiger MMA</Link>
        </h1>

        {/* HAMBURGER */}
        <button
          className="lg:hidden text-3xl"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <i className={`fa-solid ${mobileOpen ? "fa-xmark" : "fa-bars"}`}></i>
        </button>

        {/* DESKTOP MENU */}
        <div className="hidden lg:flex items-center space-x-10 poppins-semibold tracking-wider">
          <ul className="flex space-x-10">
            {links.map((link, index) =>
              link.dropdown ? (
                <li key={index} className="relative group">
                  <span className="cursor-pointer hover:text-dangerRed">
                    {link.name}
                  </span>

                  <ul className="absolute top-full left-0 mt-3 w-[420px] bg-black rounded-xl shadow-2xl border border-red-600/40 grid grid-cols-2 gap-1 opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300">
                    {link.dropdown.map((item, idx) => (
                      <li key={idx}>
                        <RouterLink
                          to={item.to}
                          className="block px-4 py-2 text-sm hover:bg-dangerRed rounded-md"
                        >
                          {item.name}
                        </RouterLink>
                      </li>
                    ))}
                  </ul>
                </li>
              ) : (
                <li key={index}>
                  <RouterLink to={link.to} className="hover:text-dangerRed">
                    {link.name}
                  </RouterLink>
                </li>
              )
            )}
          </ul>
        </div>
      </div>

      {/* MOBILE MENU */}
      {mobileOpen && (
        <div className="lg:hidden bg-black border-t border-gray-800 px-6 pb-6">
          <ul className="flex flex-col gap-4 text-lg poppins-semibold">

            {links.map((link, index) =>
              link.dropdown ? (
                <li key={index}>
                  <button
                    onClick={() => setTrainingOpen(!trainingOpen)}
                    className="w-full flex justify-between items-center hover:text-dangerRed"
                  >
                    {link.name}
                    <i
                      className={`fa-solid fa-chevron-${trainingOpen ? "up" : "down"
                        }`}
                    ></i>
                  </button>

                  {trainingOpen && (
                    <ul className="mt-3 ml-4 space-y-2 text-sm">
                      {link.dropdown.map((item, idx) => (
                        <li key={idx}>
                          <RouterLink
                            to={item.to}
                            className="block hover:text-dangerRed"
                          >
                            {item.name}
                          </RouterLink>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ) : (
                <li key={index}>
                  <RouterLink to={link.to} className="hover:text-dangerRed">
                    {link.name}
                  </RouterLink>
                </li>
              )
            )}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
