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
        <h2>Hey there -- I'm Colby.</h2>
        <br></br>
        <h4 className="colored-detail">Front-End Software Developer. Based in Colorado.</h4>
        <p>
          I specialize in JavaScript, CSS, HTML and React. I enjoy and welcome
          fast-paced, team-centric environments. Get in touch, and let's get
          started.{" "}
        </p>
        <div className="header-cta">
          <a href="#contact" className="btn primary">
            {" "}
            Let's Talk!{" "}
          </a>
          <a href="#portfolio" className="btn light">
            {" "}
            My Work{" "}
          </a>
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
