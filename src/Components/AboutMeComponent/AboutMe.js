import React from "react";

const timeline = [
  {
    year: "2017",
    description:
      "Completed BTEC Level 3 IT Extended Diploma (QCF) at Bournville College with DDD.",
  },
  {
    year: "2022",
    description:
      "Achieved Diploma of Higher Education in BSc Computer Science with Multimedia at Aston University.",
  },
  {
    year: "2023",
    description:
      "Completed University of Birmingham Coding Bootcamp with a 97% achievement score.",
  },
  {
    year: "2024",
    description:
      "Continued professional development and applied coding skills in practical projects post-bootcamp.",
  },
];
const AboutMe = () => {
  return (
    <div className="flex flex-col font-poppins py-8">
      <h1 className="text-5xl md:text-6xl text-white text-neutral-400 w-full px-2  mb-1 z-10">
        {" "}
        ABOUT ME{" "}
      </h1>
      <span className="text-sm md:text-base px-2 text-teal-400 border-b border-teal-400 pb-4 w-full">
        Just a developer who loves to build and learn.
      </span>

      <div className="w-full p-2 mt-2 flex flex-col">
        <p className="text-neutral-400 text-sm tracking-wide md:text-base">
          Hey there! I'm Jayssen, a passionate front-end developer with a keen
          eye for design and a love for creating engaging digital experiences. I
          am a detail-oriented developer who enjoys turning ideas into reality
          through code. With a background in /relevant field or education/, I've
          honed my skills in HTML, CSS, and JavaScript to craft user-friendly
          websites and applications.
        </p>

        <div className="flex flex-col mt-4 items-center justify-center bg-neutral-800 p-6 rounded-2xl sm:justify-between sm:flex-row sm:w-full">
          <img
            src={require(`../assets/images/IMG_3998.png`)}
            className="object-cover h-64 w-64 rounded-full border-neutral-800 sm:rounded-lg sm:w-[300px] sm:h-[400px] md:w-[350px] md:h-[350px]"
            alt="project-logo"
          ></img>

          <div className="bg-neutral-800 text-white font-poppins flex flex-col w-full mt-4 sm:mt-0 sm:w-[250px] md:w-[300px] 2xl:w-[450px]">
            <h1 className="text-3xl"> Timeline </h1>
            <h1 className="text-sm text-teal-400"> How it started.</h1>
            {timeline.map((event, index) => (
              <div key={index} className=" mt-2 text-sm flex flex-col">
                <h2 className="text-neutral-400 text-base">
                  {" "}
                  - {event.year} -
                </h2>
                <p className="px-2 text-sm"> {event.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
