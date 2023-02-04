import AboutImage from "../../assets/about.jpg";
import CV from "../../assets/resume.pdf";
import Card from "../../components/card/card.component";
import { AiOutlineCloudDownload } from "react-icons/ai";
import data from './data'
import "./about.styles.css";

const About = () => {
  return (
    <section id="about">
      <div className="container about__container">
        <div className="about__left">
          <div className="about__portrait">
            <img src={AboutImage} alt="about me" />
          </div>
        </div>
        <div className="about__right">
          <h2>About Me</h2>
          <div className="about__cards">
            {
              data.map(item => (
                <Card key={item.id} className='about__card'>
                  <span className='about__card-icon'>{item.icon}</span>
                  <h5>{item.title}</h5>
                  <small>{item.desc}</small>
                </Card>
              ))
            }
          </div>
          <p>
            Building projects building projects projects building projects
            projects building projects projects building projects projects
            building projects projects building projects projects building
            projects projects building projects projects building projects
          </p>
          <p>
            Building projects building projects projects building projects
            projects building projects projects building projects projects
            building projects projects building projects projects building
            projects projects building projects projects building projects
            Building projects building projects projects building projects
            projects building projects projects building projects projects
            building projects projects building projects projects building
            projects projects building projects projects building projects
          </p>
          <a href={CV} download className="btn primary"> Download Resume <AiOutlineCloudDownload/></a>
        </div>
      </div>
    </section>
  );
};

export default About;
