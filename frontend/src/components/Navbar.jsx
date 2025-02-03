import { Link } from "react-router-dom"; // Import Link for routing
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { menuLinks } from "./constants";
import MobileMenu from "./MobileMenu";
import { motion } from "framer-motion"; // Import Framer Motion for animation

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [show, setShow] = useState(false);

  const handleMobileMenu = () => {
    setShow(!show);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50);
    };

    // Add the event listener when the component mounts
    window.addEventListener("scroll", handleScroll);

    // Cleanup function: Remove the event listener when the component unmounts
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full md:px-20 top-0 z-50 transition-all duration-300 ${isSticky ? "bg-white shadow-md" : "bg-transparent"}`}
    >
      {/* Navbar Container */}
      <nav className="container mx-auto px-4 py-2 flex justify-between items-center">
        {/* Logo Section */}
        <div>
          <h1 className="text-xl font-bold text-gray-800">DIGITAL INITIATE</h1>
        </div>

        {/* Menu Links Section */}
        <ul className="hidden md:flex space-x-10">
          {menuLinks.map((menu) => (
            <li key={menu.url}>
              <Link
                to={menu.url}
                className="text-gray-800 hover:text-yellow-500 transition-colors"
              >
                {menu.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Contact Us Button */}
        <a href="tel:+918586035778">
          <button className="bg-yellow-400 text-gray-900 font-semibold py-3 px-6 rounded-full shadow-lg transform transition-all duration-300 hover:bg-yellow-500 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-yellow-400">
            Contact Us
          </button>
        </a>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden" onClick={handleMobileMenu}>
          {show ? (
            <X className="text-gray-800 cursor-pointer" />
          ) : (
            <Menu className="text-gray-800 cursor-pointer" />
          )}
        </div>
      </nav>

      {/* Mobile Menu (Hidden by Default) */}
      <motion.div
        className={`bg-white shadow-lg ${show ? "block" : "hidden"}`}
        initial={{ x: "-100%" }}
        animate={{ x: show ? "0%" : "-100%" }}
        transition={{ type: "spring" }}
      >
        <ul className="flex flex-col space-y-4 p-4">
          {menuLinks.map((menu) => (
            <MobileMenu key={menu.url} menu={menu} />
          ))}
        </ul>
      </motion.div>
    </header>
  );
};

export default Navbar;
