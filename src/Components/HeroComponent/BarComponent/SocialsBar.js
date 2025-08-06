import React from "react";
import { socialLinks } from "../../NavigationComponent/SocialLinks";

const SocialsBar = () => {
  return (
    <div
      className={`
        w-80 py-2
        absolute bottom-[50px] left-1/2 transform -translate-x-1/2
        bg-neutral-800 rounded-3xl flex flex-row items-center justify-evenly
        shadow-md z-10

        lg:h-80 lg:fixed lg:px-3 lg:py-0 lg:top-1/2 lg:right-4 lg:left-auto lg:flex-col lg:transform lg:-translate-y-1/2
        lg:w-fit
      `}
    >
      {socialLinks.map((social, index) => (
        <a
          href={social.link}
          key={index}
          target="_blank"
          rel="noopener noreferrer"
          className="lg:my-2 text-neutral-400 hover:text-teal-500 transition-colors duration-300"
        >
          {social.icon}
        </a>
      ))}
    </div>
  );
};

export default SocialsBar;
