import { AiOutlineLinkedin } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { MdComputer } from "react-icons/md";
import { GiBroadsword } from "react-icons/gi"
import hawaii from "../../assets/hawaii.jpg";
import fam from "../../assets/fam.jpg";
import crater from "../../assets/crater.jpg";
import header from "../../assets/header.jpg";
import fish from "../../assets/fish.jpg";
import rmnp from "../../assets/rmnp.jpg";

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
  {
    id: 4,
    link: "https://www.codewars.com/users/Crpearce",
    icon: <GiBroadsword />,
  },
];

export const photos = [
  {
    id: 1,
    photo: header,
  },
  {
    id: 2,
    photo: hawaii,
  },
  {
    id: 3,
    photo: fam,
  },
  {
    id: 4,
    photo: crater,
  },

  {
    id: 6,
    photo: rmnp,
  },
  {
    id: 10,
    photo: fish,
  }
];

export default photos;
