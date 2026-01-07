import React, { useEffect } from "react";
import { Link, Link as RouterLink, useLocation } from "react-router-dom";
import { Link as ScrollLink, scroller } from "react-scroll";
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
  const isHomePage = location.pathname === "/";

  // ✅ Smooth scroll when coming from another page
  useEffect(() => {
    if (location.hash) {
      const target = location.hash.replace("#", "");
      scroller.scrollTo(target, {
        smooth: true,
        duration: 500,
        offset: -70,
      });
    }
  }, [location]);

  return (
    <nav className="bg-black shadow sticky top-0 z-50 w-full text-white uppercase">
      <div className=" w-2/3 mx-auto px-8 py-6 poppins-semibold text-xl flex justify-between items-center">
        <h1 className="carter-one-bold tracking-widest text-3xl hover:text-dangerRed hover:cursor-pointer">
          <Link to="/"> Tiger MMA</Link>
        </h1>
        <div className="hidden lg:flex items-center justify-center space-x-6 poppins-semibold tracking-wider">
          <ul className="flex space-x-10">
            {links.map((link, index) => {
              /* ✅ DROPDOWN MENU */
              if (link.dropdown) {
                return (
                  <li key={index} className="relative group">
                    <span className="cursor-pointer hover:text-dangerRed">
                      {link.name}
                    </span>

                    <ul
                      className="
    absolute top-full left-0 mt-3
    w-[420px]
    bg-black text-white
    rounded-xl shadow-2xl border border-red-600/40
    grid grid-cols-2 gap-1
    opacity-0 invisible translate-y-2
    group-hover:opacity-100 group-hover:visible group-hover:translate-y-0
    transition-all duration-300
  "
                    >
                      {link.dropdown.map((item, idx) => (
                        <li key={idx}>
                          <RouterLink
                            to={item.to}
                            className="block px-4 py-2 text-sm text-white hover:bg-dangerRed hover:text-white rounded-md"
                          >
                            {item.name}
                          </RouterLink>
                        </li>
                      ))}
                    </ul>
                  </li>
                );
              }

              /* ✅ NORMAL ROUTE LINKS */
              if (link.to) {
                return (
                  <li key={index}>
                    <RouterLink to={link.to} className="hover:text-dangerRed">
                      {link.name}
                    </RouterLink>
                  </li>
                );
              }

              /* ✅ SCROLL LINKS */
              return (
                <li key={index}>
                  {isHomePage ? (
                    <ScrollLink
                      to={link.scrollTo}
                      smooth={true}
                      duration={500}
                      offset={-70}
                      className="cursor-pointer hover:text-dangerRed"
                    >
                      {link.name}
                    </ScrollLink>
                  ) : (
                    <RouterLink
                      to={`/#${link.scrollTo}`}
                      className="hover:text-dangerRed"
                    >
                      {link.name}
                    </RouterLink>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
