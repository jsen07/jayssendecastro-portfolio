import React, { useState } from "react";
import { ProjectData } from "./ProjectsData";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import LaunchIcon from "@mui/icons-material/Launch";
import { InView } from "../hooks/Observer";

const Projects = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [ref, isVisible] = InView();

  const handleClick = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="text-white font-poppins flex flex-col">
      <h1 className="text-5xl md:text-6xl mt-8 mb-2">PROJECTS</h1>
      <span className="text-base md:text-lg text-teal-400">
        Not just code — crafted experiences
      </span>

      <div ref={ref} className="w-full flex flex-col">
        {ProjectData.map((project, index) => {
          const isOpen = activeIndex === index;

          return (
            <div
              key={index}
              style={{ transitionDelay: `${index * 500}ms` }}
              className={`flex flex-col justify-center items-center gap-2 px-2 my-2 mt-8 pb-4 border-neutral-600 border-b transform transition-all duration-700 ease-out
                ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-6"
                }
              `}
            >
              <div
                className="flex flex-row text-white gap-2 w-full justify-between items-center cursor-pointer"
                onClick={() => handleClick(index)}
              >
                <div className="flex flex-row items-end">
                  <span className="text-xl mr-2 md:text-2xl">
                    {project.number}.
                  </span>
                  <h1 className="text-4xl md:text-5xl">{project.title}</h1>
                </div>
                <ExpandMoreIcon
                  className={`text-3xl text-teal-600 transition-transform duration-300 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </div>

              <div
                className={`transition-all duration-500 ease-in-out overflow-hidden w-full ${
                  isOpen
                    ? "max-h-[1000px] opacity-100 scale-100"
                    : "max-h-0 opacity-0 scale-95"
                }`}
              >
                <div className="pt-4">
                  <div className="w-full flex justify-end gap-4">
                    <a
                      className="px-4 py-1 border border-neutral-600 rounded-md transition hover:scale-[0.97] hover:text-teal-400"
                      target="_blank"
                      rel="noopener noreferrer"
                      href={project.code}
                    >
                      Code
                    </a>
                    <a
                      className="px-4 py-1 border border-neutral-600 rounded-md flex flex-row gap-2 transition hover:scale-[0.97] hover:text-teal-400"
                      target="_blank"
                      rel="noopener noreferrer"
                      href={project.live}
                    >
                      <span>View</span>
                      <LaunchIcon />
                    </a>
                  </div>
                  <img
                    src={require(`../assets/images/${project.img}`)}
                    className="object-contain h-46 w-full border border-neutral-600 rounded-lg bg-white my-4"
                    alt={project.title}
                  />
                  <p className="text-neutral-400 text-sm md:text-base text-start w-full mb-2">
                    {project.description}
                  </p>
                </div>
              </div>

              <ul className="flex flex-wrap text-white list-none w-full mt-2">
                {project.components.map((tool, idx) => (
                  <li
                    key={idx}
                    className="border border-teal-800 bg-neutral-900 rounded-md mt-2 px-2 text-xs py-1 md:text-base mr-2"
                  >
                    {tool.tools}
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
