import React from "react";
import { useState } from "react";
import { BiSolidMoon, BiSolidSun } from "react-icons/bi";
// import ResponsiveMenu from './ResponsiveMenu.jsx'

const NavLinks = [
  {
    id: "1",
    name: "HOME",
    link: "/#",
  },
  {
    id: "2",
    name: "CARS",
    link: "/#cars",
  },
  {
    id: "3",
    name: "ABOUT",
    link: "/#about",
  },
  {
    id: "4",
    name: "BOOKINGS",
    link: "/#booking",
  },
];


const Navbar = ({ theme, setTheme }) => {
  

  // const [showMenu , setShowMenu] = useState(false);
  // const togglemenu = () => {
  //   setShowMenu(!showMenu);
  // };

  return (
    <nav className="shadow-md bg-white 
    dark:bg-dark dark:text-white duration-300  relative z-40">
      <div className="container py-3 md:py-0">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold font-serif">Drive On</h1>
          </div>
          <div className="hidden md:block">
            {/* Adding the div for mapping the list elements */}
            <ul className="flex items-center gap-8">
              {NavLinks.map((data) => (
                <li key={data.id} className="py-4">
                  <a
                    href={data.link}
                    className="py-2 hover:border-b-2 hover:text-primary hover:border-primary transition-colors duration-500
                    text-lg font-medium"
                  >
                    {data.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            {theme == "dark" ? (
              <BiSolidSun
                onClick={() => setTheme("light")}
                className="text-2xl"
              />
            ) : (
              <BiSolidMoon
                onClick={() => setTheme("dark")}
                className="text-2xl"
              />
            )}

            {/* Mobile Hamburger icon */}
            {showMenu ? (
              <HiMenuAlt1
                onClick={toggleMenu}
                className=" cursor-pointer transition-all"
                size={30}
              />
            ) : (
              <HiMenuAlt3
                onClick={toggleMenu}
                className="cursor-pointer transition-all"
                size={30}
              />
            )}
          </div>
        </div>
      </div>
      {/* <ResponsiveMenu showMenu={showMenu} /> */}
    </nav>
  );
};

export default Navbar;
