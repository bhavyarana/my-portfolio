import React from "react";
import phone from "../assets/smartphone.png";
import laptop from "../assets/laptop.png";
import checklistLaptop from "../assets/checklist-desktop.png";
import checklistMobile from "../assets/checklist-mobile.png";

const Projects = () => {
  return (
    <>
      <section
        name="projects"
        className="w-full min-h-screen  text-black dark:text-white "
      >
        <div className="flex flex-col justify-center items-center gap-5 w-full ">
          <h1 className="dark:text-yellow-300 text-blue-500 text-4xl text-bold lg:mt-20 mt-24">
            My Projects
          </h1>
          <div className="flex justify-center items-center flex-col lg:w-[70%]  gap-32">
            <div className="food-app w-full h-auto flex justify-between items-center lg:flex-row flex-col-reverse gap-6 lg:gap-0">
              <div>
                <img
                  src={laptop}
                  alt=""
                  className="w-[300px] hover:scale-125 duration-300"
                />
              </div>
              <div className="lg:w-[60%] w-[90%] flex items-center justify-center  gap-3">
                <div>
                  <div className="flex items-center lg:gap-3 gap-0">
                    <h1 className="lg:text-4xl text-3xl mb-5 text-bold text-orange-400">
                      Food App using Swiggy’s live API
                    </h1>
                    <div className="flex gap-2 ">
                      <div className="px-3 py-1 rounded-full dark:bg-[#383838] bg-[#e7ebff] mb-4">
                        React.js
                      </div>
                    </div>
                  </div>
                  <p className="lg:text-xl text-md">
                    CheckList App is a modern, efficient task management
                    application designed to boost productivity. Built with
                    React.js, it offers a seamless, user-friendly experience.
                  </p>

                  <div className=" mt-5 flex gap-4">
                    <a href="https://bhavyatodo.netlify.app/" target="_blank">
                      <div className="dark:bg-[#282828] bg-[#e7ebff] text-green-500 text-bold p-3 rounded-md dark:hover:bg-[#353535] hover:bg-[#bec9ff] duration-200 ">
                        Live
                      </div>
                    </a>
                    <a
                      href="https://github.com/bhavyarana/CheckList-App-React.js"
                      target="_blank"
                    >
                      <div className="dark:bg-[#282828] bg-[#e7ebff] text-red-500  p-3 rounded-md text-bold dark:hover:bg-[#2e2e2e] hover:bg-[#bec9ff] duration-200 ">
                        Code
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              <div>
                <img
                  src={phone}
                  alt=""
                  className="w-[150px] hover:scale-125 duration-300 lg:inline-block hidden"
                />
              </div>
            </div>
            <div className="chat-app w-full h-auto flex justify-between items-center lg:flex-row flex-col-reverse gap-6 lg:gap-0">
              <div>
                <img
                  src={laptop}
                  alt=""
                  className="w-[300px] hover:scale-125 duration-300"
                />
              </div>
              <div className="lg:w-[60%] w-[90%] flex items-center justify-center  gap-3">
                <div>
                  <div className="flex items-center lg:gap-3 gap-0">
                    <h1 className="lg:text-4xl text-3xl mb-5 text-bold text-purple-400">
                      Real-time Chat App
                    </h1>
                    <div className="flex gap-2 ">
                      <div className="px-3 py-1 rounded-full dark:bg-[#383838] bg-[#e7ebff] mb-4">
                        React.js
                      </div>
                      <div className="px-3 py-1 rounded-full dark:bg-[#383838] bg-[#e7ebff] mb-4">
                        Sass
                      </div>
                      <div className="px-3 py-1 rounded-full dark:bg-[#383838] bg-[#e7ebff] mb-4">
                        Firebase
                      </div>
                    </div>
                  </div>
                  <p className="lg:text-xl text-md">
                    I built this responsive chat application with the help of
                    firebase documentation enabling the users to engage in
                    real-time conversations, share media, and seamlessly
                    register or log in.
                  </p>

                  <div className=" mt-5 flex gap-4">
                    <a href="https://bhavyatodo.netlify.app/" target="_blank">
                      <div className="dark:bg-[#282828] bg-[#e7ebff] text-green-500 text-bold p-3 rounded-md dark:hover:bg-[#353535] hover:bg-[#bec9ff] duration-200 ">
                        Live
                      </div>
                    </a>
                    <a
                      href="https://github.com/bhavyarana/CheckList-App-React.js"
                      target="_blank"
                    >
                      <div className="dark:bg-[#282828] bg-[#e7ebff] text-red-500  p-3 rounded-md text-bold dark:hover:bg-[#353535] hover:bg-[#bec9ff] duration-200 ">
                        Code
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              <div>
                <img
                  src={phone}
                  alt=""
                  className="w-[150px] hover:scale-125 duration-300 lg:inline-block hidden"
                />
              </div>
            </div>
            <div className="checklist-app w-full h-auto flex justify-between items-center lg:flex-row flex-col-reverse gap-6 lg:gap-0">
              <div>
                <img
                  src={checklistLaptop}
                  alt=""
                  className="w-[300px] hover:scale-125 duration-300"
                />
              </div>
              <div className="lg:w-[60%] w-[90%] flex items-center justify-center  gap-3">
                <div>
                  <div className="flex items-center lg:gap-3 gap-2">
                    <h1 className="lg:text-4xl text-3xl mb-5 text-bold text-blue-400">
                      Checklist App
                    </h1>
                    <div className="flex gap-2 ">
                      <div className="px-3 py-1 rounded-full dark:bg-[#383838] bg-[#e7ebff] mb-4">
                        React.js
                      </div>
                    </div>
                  </div>
                  <p className="lg:text-xl text-md">
                    CheckList App is a modern, efficient task management
                    application designed to boost productivity. Built with
                    React.js, it offers a seamless, user-friendly experience.
                  </p>

                  <div className=" mt-5 flex gap-4">
                    <a href="https://bhavyatodo.netlify.app/" target="_blank">
                      <div className="dark:bg-[#282828] bg-[#e7ebff] text-green-500 text-bold p-3 rounded-md dark:hover:bg-[#353535] hover:bg-[#bec9ff] duration-200 ">
                        Live
                      </div>
                    </a>
                    <a
                      href="https://github.com/bhavyarana/CheckList-App-React.js"
                      target="_blank"
                    >
                      <div className="dark:bg-[#282828] bg-[#e7ebff] text-red-500  p-3 rounded-md text-bold dark:hover:bg-[#353535] hover:bg-[#bec9ff] duration-200 ">
                        Code
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              <div>
                <img
                  src={checklistMobile}
                  alt=""
                  className="w-[150px] hover:scale-125 duration-300 lg:inline-block hidden"
                />
              </div>
            </div>
            <div className="sites-garage w-full h-auto flex justify-between items-center lg:flex-row flex-col-reverse gap-6 lg:gap-0">
              <div>
                <img
                  src={laptop}
                  alt=""
                  className="w-[300px] hover:scale-125 duration-300"
                />
              </div>
              <div className="lg:w-[60%] w-[90%] flex items-center justify-center  gap-3">
                <div>
                  <div className="flex items-center lg:gap-3 gap-2">
                    <h1 className="lg:text-4xl text-3xl mb-5 text-bold text-red-400">
                      Sites Garage
                    </h1>
                    <div className="flex gap-2 ">
                      <div className="px-3 py-1 rounded-full dark:bg-[#383838] bg-[#e7ebff] mb-4">
                        Html
                      </div>
                      <div className="px-3 py-1 rounded-full dark:bg-[#383838] bg-[#e7ebff] mb-4">
                        css
                      </div>
                      <div className="px-3 py-1 rounded-full dark:bg-[#383838] bg-[#e7ebff] mb-4">
                        Javascript
                      </div>
                    </div>
                  </div>
                  <p className="lg:text-xl text-md">
                    CheckList App is a modern, efficient task management
                    application designed to boost productivity. Built with
                    React.js, it offers a seamless, user-friendly experience.
                  </p>

                  <div className=" mt-5 flex gap-4">
                    <a href="https://sitesgarage.netlify.app/" target="_blank">
                      <div className="dark:bg-[#282828] bg-[#e7ebff] text-green-500 text-bold p-3 rounded-md dark:hover:bg-[#353535] hover:bg-[#bec9ff] duration-200 ">
                        Live
                      </div>
                    </a>
                    <a
                      href="https://github.com/bhavyarana/sites-garage"
                      target="_blank"
                    >
                      <div className="dark:bg-[#282828] bg-[#e7ebff] text-red-500  p-3 rounded-md text-bold dark:hover:bg-[#353535] hover:bg-[#bec9ff] duration-200 ">
                        Code
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              <div>
                <img
                  src={phone}
                  alt=""
                  className="w-[150px] hover:scale-125 duration-300 lg:inline-block hidden"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
