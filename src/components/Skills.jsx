import React from "react";
import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import react from "../assets/react.png";
import tailwind from "../assets/tailwind.png";
import redux from "../assets/redux.png";
import bootstrap from "../assets/bootstrap.png";
import sass from "../assets/sass.png";
import git from "../assets/git.png";
import github from "../assets/github.png";
import vscode from "../assets/vscode.png";
import firebase from "../assets/firebase.webp";
import vitejs from "../assets/vitejs.svg";
import npm from "../assets/npm.png";
import photoshop from "../assets/photoshop.png";
import reactrouter from "../assets/react router.png";
import nodejs from "../assets/nodejs.png";
import express from "../assets/express.png";
import mongodb from "../assets/mongodb.png";

const Skills = () => {
  const skills = [
    html,
    css,
    javascript,
    react,
    redux,
    tailwind,
    bootstrap,
    sass,
    nodejs,
    express,
    mongodb,
    git,
    github,
    vitejs,
    reactrouter,
    firebase,
    npm,
    photoshop,
    vscode,
  ];
  return (
    <>
      <section
        name="skills"
        className="w-full min-h-screen text-white flex  justify-center items-center "
      >
        <div className="flex flex-col justify-center items-center gap-5">
          <h1 className="dark:text-yellow-300 text-blue-500 text-4xl text-bold mb-5 ">
            My expertise lies in
          </h1>

          <div className="flex items-center justify-center flex-wrap h-auto lg:w-[80%] w-full  p-4  lg:gap-5 gap-3 ">
            {skills.map((skill, index) => {
              return (
                <div key={index}>
                  <div className="lg:h-[130px] lg:w-[200px] h-[100px] w-[130px] dark:bg-[#282828] bg-[#e0e0e0] flex justify-center items-center rounded  hover:scale-110 duration-500">
                    <img src={skill} alt={skill + "logo"} className="w-[40%]" />
                  </div>
                </div>
              );
            })}
          </div>
          <p className="text-xl dark:text-[#b9b9b9] text-blue-600 ">
            These are the technologies I've worked with
          </p>
        </div>
      </section>
    </>
  );
};

export default Skills;
