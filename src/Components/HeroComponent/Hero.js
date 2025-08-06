import React, { useEffect, useRef, useState } from "react";
import SocialsBar from "./BarComponent/SocialsBar";
import DownloadIcon from "@mui/icons-material/Download";

const Hero = () => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const currentRef = ref.current;
    if (!currentRef) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`relative h-[100vh] flex flex-col justify-center transition-all ease-out duration-[1500ms]
        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"}
      `}
    >
      <div className="relative z-10 text-white px-2">
        <div className="text-7xl md:text-8xl font-bebas font-bold text-white tracking-wider">
          <h1 className="text-teal-400">FULLSTACK</h1>
          <h1 className="ml-4">DEVELOPER</h1>
        </div>

        <div className="text-lg md:text-xl font-poppins font-base mt-2 py-4 relative border-b border-transparent">
          <span className="absolute top-0 left-0 h-[1px] w-1/2 bg-teal-600"></span>

          <h1 className="font-bold">Hello, I am -</h1>

          <h1 className="font-bold text-teal-500 mb-4 text-2xl md:text-3xl">
            Jayssen De Castro.
          </h1>

          <span className="absolute bottom-0 right-0 h-[1px] w-1/2 bg-teal-600"></span>

          <p className="mb-4 text-2xl md:text-3xl">
            Crafting <b className="text-teal-500">Digital Experiences</b>,{" "}
            <b className="text-teal-500">One Pixel</b> at a Time.
          </p>

          <p className="text-sm md:text-base text-neutral-400">
            A passionate junior front end developer striving to create
            captivating digital experiences that blend creativity with
            functionality.
          </p>

          <div
            className="border-2 px-4 py-2 rounded-xl mt-4 text-base md:text-lg border-teal-700 text-white bg-teal-700 
              flex w-36 justify-between transform transition-transform duration-300 ease-out"
          >
            <a
              href="/Resume/Jayssen-De-Castro-CV-2025.pdf"
              download
              className="flex items-center gap-2"
            >
              Resume
              <DownloadIcon className="text-neutral-900" />
            </a>
          </div>
        </div>
      </div>

      <div className="lg:hidden">
        <SocialsBar />
      </div>
    </div>
  );
};

export default Hero;
