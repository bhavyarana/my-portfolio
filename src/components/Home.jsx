import React, { useEffect } from "react";
import { PiBagSimpleFill } from "react-icons/pi";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { LuMail } from "react-icons/lu";
import { IoDocumentText } from "react-icons/io5";
import { BiSolidUpArrow } from "react-icons/bi";
import { Link } from "react-scroll";

const Home = () => {
  useEffect(() => {
    const upArrow = document.querySelector(".up-arrow");
    window.addEventListener("scroll", () => {
      if (scrollY <= 200) {
        upArrow.classList.add("hidden");
      } else {
        upArrow.classList.remove("hidden");
        upArrow.classList.add("flex");
      }
    });
  }, []);

  return (
    <>
      <section name="home">
        <div className="w-full min-h-screen text-white ">
          <div className="w-full h-screen flex justify-center items-center">
            <div className="flex justify-start flex-col lg:w-[900px] w-[90%] gap-4">
              <p className="lg:text-4xl text-2xl text-black dark:text-white">
                Hello,
              </p>
              <p className=" lg:text-6xl text-4xl text-black dark:text-white">
                I am{" "}
                <span className="lg:text-6xl text-4xl dark:text-yellow-200 text-blue-400">
                  Bhavya
                </span>
              </p>
              <p className="dark:text-yellow-400 text-blue-600 lg:text-6xl text-5xl">
                Frontend Web Developer
              </p>
              <p className="lg:text-xl text-lg text-black dark:text-white">
                I am a skilled passionate web developer with experience in
                creating visually appealing and user-friendly web apps.
              </p>
              <span className="dark:bg-white dark:text-gray-800 bg-blue-500 text-white rounded-full p-2 w-32 flex justify-center items-center gap-2 text-bold cursor-pointer hover:scale-110 duration-200 mt-3">
                <PiBagSimpleFill />
                <Link to="contact" smooth={true} duration={500}>
                  <p>Hire me</p>
                </Link>
              </span>
              <div className=" text-white z-50  xl:hidden inline-block">
                <ul className="flex gap-2 mt-10">
                  <li className="flex justify-between items-center bg-blue-400 dark:bg-blue-600  rounded-md">
                    <a
                      href="https://www.linkedin.com/in/bhavya-rana-6a024417b/"
                      target="_blank"
                      className="flex justify-between items-center w-full p-3 "
                    >
                      <FaLinkedin className="text-2xl" />
                    </a>
                  </li>
                  <li className="flex justify-between items-center bg-[#999999] dark:bg-[#333333] rounded-md  ">
                    <a
                      href="https://github.com/bhavyarana"
                      target="_blank"
                      className="flex justify-between items-center w-full p-3 "
                    >
                      <FaGithub className="text-2xl" />
                    </a>
                  </li>
                  <li className="flex justify-between items-center bg-[#9ad4c8] dark:bg-[#6fc2b0] rounded-md   ">
                    <a
                      href="mailto:bhavya.rana10@gmail.com"
                      target="_blank"
                      className="flex justify-between items-center w-full p-3 "
                    >
                      <LuMail className="text-2xl" />
                    </a>
                  </li>
                  <li className="flex justify-between items-center bg-[#899db4] dark:bg-[#565f69] rounded-md  ">
                    <a
                      href="https://drive.google.com/file/d/1_VSG_If3RXBJjmni_vted1IuLjJAfqPC/view?usp=sharing"
                      target="_blank"
                      className="flex justify-between items-center w-full p-3 "
                    >
                      Resume
                      <IoDocumentText className="text-2xl" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="fixed top-[35%] left-0 text-white cursor-pointer z-50 mlginline-block hidden xl:inline-block">
          <ul>
            <li className="flex justify-between items-center bg-blue-600 ml-[-100px]    w-[160px] h-[60px] hover:ml-[-10px] duration-300">
              <a
                href="https://www.linkedin.com/in/bhavya-rana-6a024417b/"
                target="_blank"
                className="flex justify-between items-center w-full px-5 text-base"
              >
                Linkedin <FaLinkedin className="text-2xl" />
              </a>
            </li>
            <li className="flex justify-between items-center bg-[#333333] ml-[-100px] w-[160px] h-[60px] hover:ml-[-10px] duration-300">
              <a
                href="https://github.com/bhavyarana"
                target="_blank"
                className="flex justify-between items-center w-full px-5 text-base"
              >
                Github <FaGithub className="text-2xl" />
              </a>
            </li>
            <li className="flex justify-between items-center bg-[#6fc2b0] ml-[-100px]   w-[160px] h-[60px] hover:ml-[-10px] duration-300">
              <a
                href="mailto:bhavya.rana10@gmail.com"
                target="_blank"
                className="flex justify-between items-center w-full px-5 text-base"
              >
                Email <LuMail className="text-2xl" />
              </a>
            </li>
            <li className="flex justify-between items-center bg-[#565f69] ml-[-100px]  w-[160px] h-[60px] hover:ml-[-10px] duration-300">
              <a
                href="https://drive.google.com/file/d/1_VSG_If3RXBJjmni_vted1IuLjJAfqPC/view?usp=sharing"
                target="_blank"
                className="flex justify-between items-center w-full px-5 text-base"
              >
                Resume <IoDocumentText className="text-2xl" />
              </a>
            </li>
          </ul>
        </div>
        <Link to="home" smooth={true} duration={500}>
          <div className="up-arrow fixed bottom-12 right-10 h-12 w-12 rounded-full dark:bg-[#6d6d6d81] bg-[#929292b6] cursor-pointer  justify-center items-center hover:scale-110 duration-300 dark:hover:bg-[#6d6d6d] hover:bg-black hidden">
            <BiSolidUpArrow className="text-2xl dark:text-[#202020] text-white z-10" />
          </div>
        </Link>
      </section>
    </>
  );
};

export default Home;
