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
          In early 2022 I decided to make a life change. I left my established career in Supply Chain to start fresh in the Tech industry. Over the past year, I've dedicated over 80 hrs per week towards earning my certificate as a Front End Developer from Turing School of Software and Design. 
          </p>
          <p>I have a diverse work history that includes cooking in some of Denver's top restaurants, wholesale food production, inventory data analysis, and numerous buyer roles. 
          </p>
          <p>In the past eight years I spent in Supply Chain I worked as a Buyer and Category Analyst. I developed strong problem solving, multi-tasking and collaboration skills. Think having to make decisions on the fly as new information presents itself in an often-changing environment. That was my experience in wholesale food production and I believe that experience will set me up for success as a Developer. </p>
          <a href={CV} download className="btn primary"> Download Resume <AiOutlineCloudDownload/></a>
        </div>
      </div>
    </section>
  );
};

export default About;
