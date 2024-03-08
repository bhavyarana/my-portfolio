import React from "react";

const Contact = () => {
  return (
    <>
      <section
        name="contact"
        className="w-full min-h-screen text-white flex  justify-center items-center "
      >
        <div className="flex flex-col justify-center items-center gap-5">
          <h1 className="dark:text-yellow-300 text-blue-500 text-4xl text-bold mb-5 ">
            Let's Connect
          </h1>
          <p className="lg:text-xl text-sm text-blue-500 dark:text-[#cfcfcf]">
            Please fill out the form below to discuss any work opportunities
          </p>
          <div className="flex flex-col items-center justify-center  lg:w-[900px] w-[90%]  gap-5 ">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full rounded-lg p-4 text-xl dark:bg-[#282828] bg-[#e6e6e6] dark:text-white text-black  outline-none "
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full rounded-lg p-4 text-xl dark:bg-[#282828] bg-[#e6e6e6] dark:text-white text-black  outline-none "
            />
            <textarea
              placeholder="Your Message"
              className="w-full rounded-lg p-4 text-xl dark:bg-[#282828] bg-[#e6e6e6] dark:text-white text-black  outline-none min-h-44"
            ></textarea>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
