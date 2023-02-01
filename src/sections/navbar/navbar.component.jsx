import "./navbar.styles.css";
import Logo from '../../assets/name-logo.png'

const Navbar = () => {
  return (
    <nav>
      <div className="container nav__container">
        <a href="">
          <img src={Logo} alt="working?" />
        </a>
        <ul></ul>
        <button></button>
      </div>
    </nav>
  );
};

export default Navbar;
