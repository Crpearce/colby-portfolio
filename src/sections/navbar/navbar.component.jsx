import data from "./data";
import { MdOutlineDarkMode } from "react-icons/md";
import { AiOutlineHome } from "react-icons/ai";
import { useModalContext } from "../../contexts/modal.context";
import "./navbar.styles.css";

const Navbar = () => {
  const {showModalHandler} = useModalContext();
  return (
    <nav>
      <div className="container nav-container">
        <a href="index.html" className="nav__logo" aria-label='link to home'>
          <AiOutlineHome className="logo" />
        </a>
        <ul className="nav-menu">
          {data.map((category) => (
            <li key={category.id}>
              <a href={category.link}>{category.title}</a>
            </li>
          ))}
        </ul>
        <button id="theme-icon" aria-label='darkmode toggle' onClick={showModalHandler}><MdOutlineDarkMode className="moon"/></button>
      </div>
    </nav>
  );
};

export default Navbar;
