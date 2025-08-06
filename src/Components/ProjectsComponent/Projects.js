import React from "react";
import { ProjectData } from "./ProjectsData";

const Projects = () => {
  return (
    <div className="text-white font-poppins flex flex-col">
      <h1 className="text-5xl md:text-6xl mt-8 mb-2">PROJECTS</h1>
      <span className="text-base md:text-lg text-teal-400">
        Not just code — crafted experiences
      </span>
      <div className="w-full flex flex-col">
        {ProjectData.map((project, index) => (
          <div
            key={index}
            className="flex flex-col justify-center items-center gap-2 px-2 my-2 mt-8"
          >
            <div className="flex flex-row text-white gap-2 w-full">
              <span className="text-xl md:text-2xl">{project.number} .</span>
              <h1 className="text-4xl md:text-5xl">{project.title}</h1>
            </div>

            <img
              src={require(`../assets/images/${project.img}`)}
              className="object-contain h-64 w-full border-2 rounded-lg p-6 bg-white"
              alt="project-logo"
            />

            <h1 className="text-neutral-400 text-sm md:text-base">
              {project.description}
            </h1>

            <ul className="flex flex-wrap text-white list-none w-full">
              {project.components.map((tool, index) => (
                <li
                  key={index}
                  className="border border-teal-600 rounded-md mt-2 px-2 text-sm md:text-base mr-2"
                >
                  {tool.tools}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
