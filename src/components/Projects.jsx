import React from "react";
import checklistLaptop from "../assets/checklist-desktop.png";
import checklistMobile from "../assets/checklist-mobile.png";
import portfolioLaptop from "../assets/portfolio-desktop.png";
import portfolioMobile from "../assets/portfolio-mobile.png";
import sitesGarageLaptop from "../assets/sites-garage-desktop.png";
import sitesGarageMobile from "../assets/sites-garage-mobile.png";
import laptop from "../assets/laptop.png";
import mobile from "../assets/mobile.png";

const Projects = () => {
  const projectList = [
    {
      name: "Food App using Swiggy’s live API",
      nameColor: "text-orange-400",
      className: "food-app",
      desktopImg: laptop,
      mobileImg: mobile,
      techStack: ["React.js"],
      description:
        "My Food App integrates Swiggy's live API to dynamically render restaurants and their menus directly from Swiggy also integrated search and sort feature and also added cart to add dishes.",
      liveLink: "https://bhavyatodo.netlify.app/",
      codeLink: "https://github.com/bhavyarana/CheckList-App-React.js",
    },
    {
      name: "Real-time Chat App",
      nameColor: "text-purple-400",
      className: "chat-app",
      desktopImg: laptop,
      mobileImg: mobile,
      techStack: ["React.js", "Sass", "Firebase"],
      description:
        "I built this responsive chat application with the help of firebase documentation enabling the users to engage in real-time conversations, share media, and seamlessly register or log in.",
      liveLink: "https://bhavyatodo.netlify.app/",
      codeLink: "https://github.com/bhavyarana/CheckList-App-React.js",
    },
    {
      name: "Checklist App",
      nameColor: "text-blue-400",
      className: "checklist-app",
      desktopImg: checklistLaptop,
      mobileImg: checklistMobile,
      techStack: ["React.js"],
      description:
        "CheckList App is a modern, efficient task management application designed to boost productivity. Built with React.js, it offers a seamless, user-friendly experience.",
      liveLink: "https://bhavyatodo.netlify.app/",
      codeLink: "https://github.com/bhavyarana/CheckList-App-React.js",
    },
    {
      name: "Personal Portfolio",
      nameColor: "text-[#7247ff]",
      className: "portfolio-app",
      desktopImg: portfolioLaptop,
      mobileImg: portfolioMobile,
      techStack: ["React.js", "Tailwind"],
      description:
        "This platform showcases my skills, projects, and abilities in web development. With a dynamic UI and sleek design. Let's connect for collaborations or opportunities. Thanks for visiting!",
      liveLink: "https://bhavyaranaportfolio.netlify.app/",
      codeLink: "https://github.com/bhavyarana/my-portfolio",
    },
    {
      name: "Sites Garage",
      nameColor: "text-red-400",
      className: "sites-garage",
      desktopImg: sitesGarageLaptop,
      mobileImg: sitesGarageMobile,
      techStack: ["Html", "css", "Javascript"],
      description:
        "Sites Garage, an innovative website agency website crafted by me. With cutting-edge design and seamless functionality,it showcases our expertise in web development and design services. Explore our portfolio, services, and client testimonials. Let's collaborate on your next digital project!",
      liveLink: "https://sitesgarage.netlify.app/",
      codeLink: "https://github.com/bhavyarana/sites-garage",
    },
  ];
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
            {projectList.map((project) => {
              const {
                name,
                nameColor,
                className,
                desktopImg,
                mobileImg,
                techStack,
                description,
                liveLink,
                codeLink,
              } = project;
              return (
                <div
                  className={`${className} w-full h-auto flex justify-between items-center lg:flex-row flex-col-reverse gap-6 lg:gap-0`}
                >
                  <div>
                    <img
                      src={desktopImg}
                      alt=""
                      className="w-[300px] hover:scale-125 duration-300"
                    />
                  </div>
                  <div className="lg:w-[60%] w-[90%] flex items-center justify-center  gap-3">
                    <div>
                      <div className="flex items-center lg:gap-3 gap-0">
                        <h1
                          className={`lg:text-4xl text-3xl mb-5 text-bold ${nameColor}`}
                        >
                          {name}
                        </h1>
                        <div className="flex gap-2 ">
                          {techStack.map((tech) => {
                            return (
                              <div className="px-3 py-1 rounded-full dark:bg-[#383838] bg-[#e7ebff] mb-4">
                                {tech}
                              </div>
                            );
                          })}
                        </div>
                      </div>
                      <p className="lg:text-xl text-md">{description}</p>

                      <div className=" mt-5 flex gap-4">
                        <a href={liveLink} target="_blank">
                          <div className="dark:bg-[#282828] bg-[#e7ebff] text-green-500 text-bold p-3 rounded-md dark:hover:bg-[#353535] hover:bg-[#bec9ff] duration-200 ">
                            Live
                          </div>
                        </a>
                        <a href={codeLink} target="_blank">
                          <div className="dark:bg-[#282828] bg-[#e7ebff] text-red-500  p-3 rounded-md text-bold dark:hover:bg-[#2e2e2e] hover:bg-[#bec9ff] duration-200 ">
                            Code
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div>
                    <img
                      src={mobileImg}
                      alt=""
                      className="w-[150px] hover:scale-125 duration-300 lg:inline-block hidden"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
