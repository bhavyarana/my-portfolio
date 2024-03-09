import React from "react";
import Slider from "./Slider";

const Certifications = () => {
  return (
    <>
      <section
        name="certifications"
        className="w-full min-h-screen text-white "
      >
        <div className="flex flex-col justify-center items-center gap-5 h-screen">
          <h1 className="dark:text-yellow-300 text-blue-500 text-4xl text-bold mb-5 mt-20">
            Certificates
          </h1>
          <p className="lg:text-xl text-sm text-blue-500 dark:text-[#cfcfcf]">
            Swipe to see next and click to open
          </p>
          <div className="flex flex-col items-center justify-center  w-[900px]  h-auto gap-5 -mb-8 ">
            <Slider />
          </div>
        </div>
      </section>
    </>
  );
};

export default Certifications;
