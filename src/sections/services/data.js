import { SiAdobexd } from "react-icons/si";
import { RiReactjsLine } from "react-icons/ri";
import { FaServer } from "react-icons/fa";
import { AiFillAppstore } from "react-icons/ai";

const data = [
  {
    id: 1,
    icon: <SiAdobexd />,
    title: "UI/UX Design",
    desc: "Modern, intutive, accessibility focuesed designs. I use industry-standard rules to make sure ALL users can enjoy using a product.",
  },
  {
    id: 2,
    icon: <RiReactjsLine />,
    title: "Frontend Development",
    desc: "Your product will look good and will be accessible on all devices by using media queries to adjust component layout on mobile phones, tablets, and desktop.",
  },
  {
    id: 3,
    icon: <FaServer />,
    title: "Backend Development",
    desc: "Although new to coding in general, I have completed multiple projects built with PostgreSQL. I look forward to the opportunity to continue to learn and grow in this area specifically",
  },
  {
    id: 4,
    icon: <AiFillAppstore />,
    title: "Tech Stack",
    desc: " JavaScript / React / HTML5 / CSS3 / Cypress / GraphQL / Express.js / PostgreSQL / Knex.js",
  },
];

export default data;
