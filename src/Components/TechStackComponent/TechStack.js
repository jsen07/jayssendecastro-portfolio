import React from "react";
import { FrontendStack, BackendStack, Tools } from "./TechStackData";
import TechStackCard from "./TechStackCard";
import { InView } from "../hooks/Observer";

const TechStackList = ({ data }) => {
  const [ref, isVisible] = InView();

  return (
    <ul
      ref={ref}
      className="w-full flex flex-wrap items-center justify-center gap-4"
    >
      {data.map((stack, index) => (
        <li
          key={index}
          style={{ transitionDelay: `${index * 250}ms` }}
          className={`flex flex-col justify-center items-center gap-2 px-6 py-4 rounded-lg bg-neutral-800 shadow-lg transform transition-all duration-700 ease-out
            ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6"
            }
          `}
        >
          <TechStackCard logo={stack.logo} name={stack.name} />
        </li>
      ))}
    </ul>
  );
};

const TechStack = () => {
  return (
    <div className="flex flex-col space-y-8">
      {/* Frontend */}
      <section>
        <h1 className="text-neutral-400 text-3xl md:text-4xl tracking-wide mb-8">
          Frontend
        </h1>
        <TechStackList data={FrontendStack} />
      </section>

      {/* Backend */}
      <section>
        <h1 className="text-neutral-400 text-3xl md:text-4xl tracking-wide mb-8">
          Backend
        </h1>
        <TechStackList data={BackendStack} />
      </section>

      {/* Tools */}
      <section>
        <h1 className="text-neutral-400 text-3xl md:text-4xl tracking-wide mb-8">
          Tools
        </h1>
        <TechStackList data={Tools} />
      </section>
    </div>
  );
};

export default TechStack;
