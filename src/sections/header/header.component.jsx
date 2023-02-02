import HeaderImage from "../../assets/header.jpg";
import data from "./data";
import "./header.styles.css";

const Header = () => {
  return (
    <header id="header">
      <div className="container header-container">
        <div className="header-profile">
          <img src={HeaderImage} alt="Selfie with dog" />
        </div>
        <h3>Colby Pearce</h3>
        <p>
          Here is where I will put a phrase or saying welcoming someone to the app
        </p>
        <div className="header-cta">
          <a href="#contact" className="btn primary"> Let's Talk! </a>
          <a href="#portfolio" className="btn light"> My Work </a>
        </div>
        <div className="header-socials">
          {data.map((item) => (
            <a
              key={item.id}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              {item.icon}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
