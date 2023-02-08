import Logo from "../../assets/name-logo.png";
import data from "./data";

import {MdOutlineColorLens} from 'react-icons/md';



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
        <button id='theme-icon'><MdOutlineColorLens /></button>
      </div>
    </nav>
  );
};

export default Navbar;
