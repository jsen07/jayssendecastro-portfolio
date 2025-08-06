import React from "react";
import { FrontendStack, BackendStack, Tools } from "./TechStackData";
import TechStackCard from "./TechStackCard";

const TechStack = () => {
  return (
    <div className="flex flex-col space-y-8">
      <div className="flex flex-row items-center mt-8 justify-between">
        <div className="block px-2 w-full relative">
          <h1 className="text-5xl md:text-6xl text-white text-neutral-400">
            {" "}
            Tech Stack{" "}
          </h1>
          <span className="text-base md:text-lg text-teal-400">
            What’s in my developer toolbox.
          </span>
          <div className="h-24 w-24 absolute right-0 bottom-0 -z-10">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
              <path fill="none" d="M0 0h200v200H0z"></path>

              {/* Left rotating cog */}
              <path
                fill="none"
                strokeLinecap="round"
                stroke="#0D9488"
                strokeWidth="12"
                transformOrigin="center"
                d="M70 95.5V112m0-84v16.5m0 0a25.5 25.5 0 1 0 0 51 25.5 25.5 0 0 0 0-51Zm36.4 4.5L92 57.3M33.6 91 48 82.7m0-25.5L33.6 49m58.5 33.8 14.3 8.2"
              >
                <animateTransform
                  attributeName="transform"
                  type="rotate"
                  values="0;-60;0"
                  keyTimes="0;0.5;1"
                  keySplines="0.42 0 1 1;0 0 0.58 1"
                  dur="3.5s"
                  repeatCount="indefinite"
                />
              </path>

              {/* Right rotating cog */}
              <path
                fill="none"
                strokeLinecap="round"
                stroke="#DC2626"
                strokeWidth="12"
                transformOrigin="center"
                d="M130 155.5V172m0-84v16.5m0 0a25.5 25.5 0 1 0 0 51 25.5 25.5 0 0 0 0-51Zm36.4 4.5-14.3 8.3M93.6 151l14.3-8.3m0-25.4L93.6 109m58.5 33.8 14.3 8.2"
              >
                <animateTransform
                  attributeName="transform"
                  type="rotate"
                  values="0;60;0"
                  keyTimes="0;0.5;1"
                  keySplines="0.42 0 1 1;0 0 0.58 1"
                  dur="3.5s"
                  repeatCount="indefinite"
                />
              </path>
            </svg>
          </div>
        </div>
      </div>

      {/* Frontend */}
      <div className="flex flex-col">
        <h1 className="text-neutral-400 text-3xl md:text-4xl tracking-wide mb-8 text-shadow-lg">
          Frontend
        </h1>

        <ul className="w-full flex flex-wrap items-center justify-center gap-4">
          {FrontendStack.map((stack, index) => (
            <li
              key={index}
              className="flex flex-col justify-center items-center gap-2 px-6 py-4 rounded-lg bg-neutral-800 shadow-lg"
            >
              <TechStackCard logo={stack.logo} name={stack.name} />
            </li>
          ))}
        </ul>
      </div>

      {/* Backend */}
      <div className="flex flex-col">
        <h1 className="text-neutral-400 text-3xl md:text-4xl tracking-wide mb-8 text-shadow-lg">
          Backend
        </h1>

        <ul className="w-full flex flex-wrap items-center justify-center gap-4">
          {BackendStack.map((stack, index) => (
            <li
              key={index}
              className="flex flex-col justify-center items-center gap-2 px-6 py-4 rounded-lg bg-neutral-800 shadow-lg"
            >
              <TechStackCard logo={stack.logo} name={stack.name} />
            </li>
          ))}
        </ul>
      </div>

      {/* Tools */}
      <div className="flex flex-col">
        <h1 className="text-neutral-400 text-3xl md:text-4xl tracking-wide mb-8 text-shadow-lg">
          Tools
        </h1>

        <ul className="w-full flex flex-wrap items-center justify-center gap-4">
          {Tools.map((stack, index) => (
            <li
              key={index}
              className="flex flex-col justify-center items-center gap-2 px-6 py-4 rounded-lg bg-neutral-800 shadow-lg"
            >
              <TechStackCard logo={stack.logo} name={stack.name} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TechStack;
