import { MdComputer } from "react-icons/md";
import { AiOutlineLinkedin } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";

export const links = [
  { id: 1, link: "#", title: "Home" },
  { id: 2, link: "#about", title: "About" },
  { id: 3, link: "#services", title: "Services" },
  { id: 4, link: "#portfolio", title: "Portfolio" },
  { id: 5, link: "#contact", title: "Contact" },
];

export const socials = [
  {
    id: 1,
    link: "https://www.linkedin.com/in/colby-pearce1/",
    icon: <AiOutlineLinkedin />,
  },
  { id: 2, link: "https://github.com/Crpearce", icon: <AiFillGithub /> },
  {
    id: 3,
    link: "https://terminal.turing.edu/profiles/1596",
    icon: <MdComputer />,
  },
];
