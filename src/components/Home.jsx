import React from "react";
import { PiBagSimpleFill } from "react-icons/pi";

const Home = () => {
  return (
    <>
      <section name="home">
        <div className="w-full h-[100vh] text-white ">
          <div className="w-full h-[100vh] flex justify-center items-center">
            <div className="flex justify-start flex-col w-[900px] gap-4">
              <p className="text-4xl">Hello,</p>
              <p className=" text-6xl">
                I am <span className="text-yellow-200">Bhavya</span>
              </p>
              <p className="text-yellow-400 text-6xl">Frontend Web Developer</p>
              <p className="text-xl">
                I am a skilled passionate web developer with experience in
                creating visually appealing and user-friendly web apps.
              </p>
              <span className="bg-white text-gray-800 rounded-full p-2 w-32 flex justify-center items-center gap-2 text-bold cursor-pointer hover:scale-110 duration-200 mt-3">
                <PiBagSimpleFill />
                <p>Hire me</p>
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
