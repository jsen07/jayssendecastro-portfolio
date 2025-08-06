import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LocalPhoneRoundedIcon from "@mui/icons-material/LocalPhoneRounded";
import InstagramIcon from "@mui/icons-material/Instagram";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";

export const socialLinks = [
  {
    title: "Github",
    icon: <GitHubIcon />,
    link: "https://github.com/jsen07",
  },
  {
    title: "LinkedIn",
    icon: <LinkedInIcon />,
    link: "https://www.linkedin.com/in/jayssen-de-castro-345236284/",
  },
  {
    title: "Watsapp",
    icon: <LocalPhoneRoundedIcon />,
    link: "https://wa.me/447956023418",
  },
  {
    title: "Instagram",
    icon: <InstagramIcon />,
    link: "https://www.instagram.com/j.sen_07/",
  },
];

export const sections = [
  {
    title: "Home",
    href: "#hero",
    icon: <ArrowCircleLeftIcon className="text-blue-400" />,
  },
  {
    title: "About Me",
    href: "#aboutme",
    icon: <ArrowCircleLeftIcon className="text-red-400 " />,
  },
  {
    title: "Projects",
    href: "#projects",
    icon: <ArrowCircleLeftIcon className="text-yellow-400" />,
  },
  {
    title: "Contact",
    href: "#contact",
    icon: <ArrowCircleLeftIcon className="text-teal-400" />,
  },
];
