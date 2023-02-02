import Logo from "../../assets/name-logo.png";
import data from "./data";

import {AiOutlineBgColors} from 'react-icons/ai';

import "./navbar.styles.css";

const Navbar = () => {
  return (
    <nav>
      <div className="container nav-container">
        <a href="index.html" className="nav-logo">
          <img src={Logo} alt="Logo" />
        </a>
        <ul className="nav-menu">
          {data.map((category) => (
            <li key={category.id}>
              <a href={category.link}>{category.title}</a>
            </li>
          ))}
        </ul>
        <button id='theme-icon'><AiOutlineBgColors /></button>
      </div>
    </nav>
  );
};

export default Navbar;
