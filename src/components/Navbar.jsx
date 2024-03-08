import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { FiMessageSquare } from "react-icons/fi";
import { MdDarkMode } from "react-icons/md";
import { FaSun } from "react-icons/fa6";
import { FaBars } from "react-icons/fa";
import { CgClose } from "react-icons/cg";

const Navbar = () => {
  const [theme, setTheme] = useState("dark");
  const [showMenu, setShowMenu] = useState(false);
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);
  const handleCLick = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  const showMenuHandle = () => {
    if (showMenu === true) {
      setShowMenu(false);
    } else {
      setShowMenu(true);
    }
    document.querySelector(".nav-menu").classList.toggle("hidden");
  };
  return (
    <>
      <header className="w-screen fixed bg-white dark:bg-[#1e1e1e] dark:text-white z-50">
        <nav className=" xl:flex justify-between items-center w-9/12 text-3xl p-3 mx-auto hidden">
          <div>
            <h1 className="text-2xl dark:text-yellow-500 text-blue-500  text-bold">
              Bhavya Rana
            </h1>
          </div>
          <div>
            <ul className="flex gap-10 ">
              <li className="dark:hover:text-yellow-500 hover:text-blue-500  cursor-pointer ">
                <Link to="home" smooth={true} duration={500}>
                  Home
                </Link>
              </li>

              <li className="dark:hover:text-yellow-500 hover:text-blue-500  cursor-pointer ">
                <Link to="skills" smooth={true} duration={500}>
                  Skills
                </Link>
              </li>
              <li className="dark:hover:text-yellow-500 hover:text-blue-500  cursor-pointer ">
                <Link to="projects" smooth={true} duration={500}>
                  Projects
                </Link>
              </li>
              <li className="dark:hover:text-yellow-500 hover:text-blue-500  cursor-pointer ">
                <Link to="certifications" smooth={true} duration={500}>
                  Certifications
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex items-center gap-3">
            <Link to="contact" smooth={true} duration={500}>
              <div className="dark:bg-white dark:text-gray-700 bg-[#929292] text-white  rounded-full px-4 py-3  text-bold cursor-pointer text-base ">
                <span className="flex justify-center items-center gap-2 ">
                  <FiMessageSquare /> Contact me
                </span>
              </div>
            </Link>
            <div onClick={handleCLick} className="cursor-pointer">
              {theme === "dark" ? (
                <MdDarkMode />
              ) : (
                <FaSun className="text-[#929292]" />
              )}
            </div>
          </div>
        </nav>
        <nav className=" xl:hidden  justify-between items-center w-screen text-3xl p-3 mx-auto flex flex-col gap-3">
          <div className="flex justify-between w-screen px-3">
            <h1 className="text-xl dark:text-yellow-500 text-blue-500  text-bold">
              Bhavya Rana
            </h1>
            <div className="flex items-center justify-center gap-2">
              <div onClick={handleCLick} className="cursor-pointer">
                {theme === "dark" ? (
                  <MdDarkMode />
                ) : (
                  <FaSun className="text-[#929292]" />
                )}
              </div>
              <div
                className="text-[25px] cursor-pointer dark:text-white text-[#929292]"
                onClick={showMenuHandle}
              >
                {showMenu === true ? <CgClose /> : <FaBars />}
              </div>
            </div>
          </div>
          <div className="nav-menu absolute right-3 top-12 dark:bg-[#6d6d6dce] bg-[#dbeaffd4] p-5 rounded-md hidden">
            <ul className="flex flex-col gap-5 text-lg ">
              <li className="dark:hover:text-yellow-500 hover:text-blue-500 cursor-pointer ">
                <Link to="home" smooth={true} duration={500}>
                  Home
                </Link>
              </li>

              <li className="dark:hover:text-yellow-500 hover:text-blue-500 cursor-pointer ">
                <Link to="skills" smooth={true} duration={500}>
                  Skills
                </Link>
              </li>
              <li className="dark:hover:text-yellow-500 hover:text-blue-500 cursor-pointer ">
                <Link to="projects" smooth={true} duration={500}>
                  Projects
                </Link>
              </li>
              <li className="dark:hover:text-yellow-500 hover:text-blue-500 cursor-pointer ">
                <Link to="certifications" smooth={true} duration={500}>
                  Certifications
                </Link>
              </li>
              <li className="dark:hover:text-yellow-500 hover:text-blue-500 cursor-pointer ">
                <Link to="contact" smooth={true} duration={500}>
                  Contact me
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
