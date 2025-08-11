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
      {/* Hamburger Menu */}
      <div className="w-full text-end sticky px-4 flex justify-end right-0 top-[30px] z-20">
        <button
          className="flex flex-col justify-center items-end gap-2 group"
          onClick={handleNavClick}
        >
          <span className="w-10 bg-teal-400 rounded-lg h-1 transition-all group-hover:w-8"></span>
          <span className="w-8 bg-teal-400 rounded-lg h-1 transition-all group-hover:w-6"></span>
        </button>
      </div>

      {/* Navigation Menu */}
      <div
        className={`fixed top-0 right-0 z-20 w-[80%] sm:w-[60%] md:w-[400px] 2xl:w-[450px] h-screen text-white transform transition-transform duration-500 ease-out
          ${isNavActive ? "translate-x-0" : "translate-x-full"}
        `}
      >
        <div className="flex flex-col bg-neutral-800 font-bebas px-8 py-6 text-2xl h-full">
          <button
            className="self-end transition hover:scale-[0.9]"
            onClick={handleNavClick}
          >
            <CloseIcon />
          </button>

          {/* Menu  */}
          <div className="flex flex-col">
            <h1 className="text-sm text-neutral-400 font-poppins mt-8 mb-4 pb-2 border-b border-neutral-500">
              MENU
            </h1>
            <ul className="flex flex-col gap-8">
              {sections.map((section, index) => (
                <li
                  key={index}
                  style={{
                    transitionDelay: `${isNavActive ? index * 80 + 200 : 0}ms`,
                  }}
                  className={`flex items-center gap-4 transform transition-all duration-500 ease-out
                    ${
                      isNavActive
                        ? "opacity-100 translate-x-0"
                        : "opacity-0 translate-x-6"
                    }
                  `}
                >
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

          {/* Socials */}
          <div className="flex flex-col">
            <h1 className="text-sm text-neutral-400 font-poppins mt-8 mb-4 pb-2 border-b border-neutral-500">
              SOCIALS
            </h1>
            <ul className="flex flex-col gap-8">
              {socialLinks.map((social, index) => (
                <li
                  key={index}
                  style={{
                    transitionDelay: `${isNavActive ? index * 80 + 500 : 0}ms`,
                  }}
                  className={`flex items-center gap-4 transform transition-all duration-500 ease-out
                    ${
                      isNavActive
                        ? "opacity-100 translate-x-0"
                        : "opacity-0 translate-x-6"
                    }
                  `}
                >
                  <a
                    href={social.link}
                    key={index}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 hover:text-teal-400 transition-colors"
                  >
                    {social.icon}
                    {social.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Email */}
          <div
            style={{
              transitionDelay: `${isNavActive ? 900 : 0}ms`,
            }}
            className={`flex flex-col grow justify-end mb-3 transform transition-all duration-500 ease-out
              ${
                isNavActive
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }
            `}
          >
            <h1 className="text-sm text-neutral-400">Email</h1>
            <h5 className="text-base text-teal-400">
              JayssenDeCastro@gmail.com
            </h5>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
