import React from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <>
      <header className="w-full fixed bg-[#1e1e1e] text-white ">
        <nav className=" flex justify-between items-center w-9/12 text-3xl p-3 mx-auto">
          <div>
            <h1 className="text-2xl text-yellow-300">Bhavya Rana</h1>
          </div>
          <div>
            <ul className="flex gap-10 ">
              <li className="hover:text-yellow-300 cursor-pointer ">
                <Link to="home" smooth={true} duration={500}>
                  Home
                </Link>
              </li>
              <li className="hover:text-yellow-300 cursor-pointer ">
                <Link to="about" smooth={true} duration={500}>
                  About
                </Link>
              </li>
              <li className="hover:text-yellow-300 cursor-pointer ">
                <Link to="skills" smooth={true} duration={500}>
                  Skills
                </Link>
              </li>
              <li className="hover:text-yellow-300 cursor-pointer ">
                <Link to="work" smooth={true} duration={500}>
                  Work
                </Link>
              </li>
            </ul>
          </div>
          <div className="bg-white text-black rounded-full text-xl px-4 py-3 cursor-pointer">
            <Link to="contact" smooth={true} duration={500}>
              <span>Contact me</span>
            </Link>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
