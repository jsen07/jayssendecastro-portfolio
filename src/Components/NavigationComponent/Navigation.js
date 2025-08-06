import React, { useState } from "react";
import { socialLinks, sections } from "./SocialLinks";
import CloseIcon from "@mui/icons-material/Close";

const Navigation = () => {
  const [isNavActive, setIsNavActive] = useState(false);

  const handleNavClick = () => {
    setIsNavActive((prev) => !prev);
  };

  const handleLinkClick = () => {
    setIsNavActive(false);
  };

  return (
    <>
      <div className="w-full text-end sticky px-4 flex justify-end right-0 top-[30px] z-20">
        <button
          className="flex flex-col justify-center items-end gap-2"
          onClick={() => {
            handleNavClick();
          }}
        >
          <span className="w-10 bg-teal-400 rounded-lg h-1"></span>
          <span className="w-8 bg-teal-400 rounded-lg h-1"></span>
        </button>
      </div>
      {isNavActive && (
        <div className="flex flex-col bg-neutral-800 font-bebas px-8 py-6 text-2xl fixed top-0 right-0 z-20 w-[80%] h-screen text-white sm:w-[60%] md:w-[400px] 2xl:w-[450px]">
          <button
            className="self-end hover:animate-pulse"
            onClick={() => {
              handleNavClick();
            }}
          >
            <CloseIcon />
          </button>

          <div className="flex flex-col">
            <h1 className="text-sm text-neutral-400 font-poppins mt-8 mb-4 pb-2 border-b border-neutral-500">
              {" "}
              MENU{" "}
            </h1>
            <ul className="flex flex-col gap-8">
              {sections.map((section, index) => (
                <li key={index} className="flex items-center gap-4">
                  {section.icon}
                  <a
                    href={section.href}
                    onClick={handleLinkClick}
                    className="hover:text-teal-400 transition-colors"
                  >
                    {section.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col">
            <h1 className="text-sm text-neutral-400 font-poppins mt-8 mb-4 pb-2 border-b border-neutral-500">
              {" "}
              SOCIALS{" "}
            </h1>
            <ul className="flex flex-col gap-8">
              {socialLinks.map((social, index) => (
                <li key={index} className="flex items-center gap-4">
                  {social.icon}
                  {social.title}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col grow justify-end mb-3">
            <h1 className="text-sm text-neutral-400">Email</h1>
            <h5 className="text-base text-teal-400">
              {" "}
              JayssenDeCastro@gmail.com
            </h5>
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation;
