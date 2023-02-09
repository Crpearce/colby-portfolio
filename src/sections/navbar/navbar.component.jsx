import data from "./data";
import { BsLightbulb } from "react-icons/bs";
import { AiOutlineHome } from "react-icons/ai";

import "./navbar.styles.css";

const Navbar = () => {
  return (
    <nav>
      <div className="container nav-container">
        <button className="nav-logo">
          <AiOutlineHome  className='logo'/>
        </button>
        <ul className="nav-menu">
          {data.map((category) => (
            <li key={category.id}>
              <a href={category.link}>{category.title}</a>
            </li>
          ))}
        </ul>
        <button id="theme-icon">
          <BsLightbulb className='bulb'/>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
