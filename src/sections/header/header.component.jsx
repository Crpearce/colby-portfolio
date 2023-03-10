import { useEffect } from "react";
import { photos, socials } from "./data";
import AOS from "aos";
import "aos/dist/aos.css";
import "./header.styles.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";

const Header = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <header id="header">
      <div className="container header-container">
        <div className="header-profile" data-aos="fade-in">
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
            {photos.map((photo) => (
              <SwiperSlide key={photo.id}>
                <img src={photo.photo} alt='carosel of colby'/>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <h2 className="greeting" data-aos="fade-up">
          Welcome! I'm Colby.
        </h2>
        <br></br>
        <h4 className="colored-detail" data-aos="fade-up">
          Front-End Software Developer. Based in Colorado.
        </h4>
        <p className="intro" data-aos="fade-up">
          I specialize in JavaScript, CSS, HTML and React. I enjoy and welcome
          fast-paced, team-centric environments, and I am passionate about
          creating accessible and intuitive interfaces.
        </p>
        <div className="header-cta" data-aos="fade-up">
          <a href="#contact" className="btn primary">
            Let's Talk!
          </a>
          <a href="#portfolio" className="btn">
            My Work
          </a>
        </div>
        <div className="header-socials">
          {socials.map((item) => (
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
