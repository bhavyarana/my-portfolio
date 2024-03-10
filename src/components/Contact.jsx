import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_henixpi", "template_d73z7p5", form.current, {
        publicKey: "9wB7eqtJVh22eDBas",
      })
      .then(
        () => {
          alert(" Success! will get back to you as soon as possible");
          e.target.reset();
        },
        (error) => {
          alert("FAILED...", error.text);
        }
      );
  };
  return (
    <>
      <form ref={form} onSubmit={sendEmail}>
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
                name="user_name"
                type="text"
                required
                placeholder="Your Name"
                className="w-full rounded-lg p-4 text-xl dark:bg-[#282828] bg-[#e6e6e6] dark:text-white text-black  outline-none "
              />
              <input
                name="user_email"
                type="email"
                required
                placeholder="Your Email"
                className="w-full rounded-lg p-4 text-xl dark:bg-[#282828] bg-[#e6e6e6] dark:text-white text-black  outline-none "
              />
              <textarea
                name="message"
                required
                minLength={10}
                placeholder="Your Message"
                className="w-full rounded-lg p-4 text-xl dark:bg-[#282828] bg-[#e6e6e6] dark:text-white text-black  outline-none min-h-44"
              ></textarea>
              <button
                type="submit"
                className=" text-[#353535] dark:text-white border-2 dark:border-yellow-300  border-blue-500 rounded-lg px-4 py-3 text-lg dark:hover:bg-yellow-300 hover:bg-blue-500 duration-300 dark:hover:text-black hover:text-white"
              >
                Submit
              </button>
            </div>
          </div>
        </section>{" "}
      </form>
    </>
  );
};

export default Contact;
