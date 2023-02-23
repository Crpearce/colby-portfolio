import { useEffect } from "react";
import CV from "../../assets/resume.pdf";
import Card from "../../components/card/card.component";
import data from './data'
import AOS from 'aos'
import AboutImage from "../../assets/about.jpg";
import { AiOutlineCloudDownload } from "react-icons/ai";
import 'aos/dist/aos.css'
import "./about.styles.css";

const About = () => {
  useEffect(() => {
    AOS.init({duration: 2000})
  },[])
  return (
    <section id="about">
      <div className="container about__container">
        <div className="about__left">
          <div className="about__portrait">
            <img src={AboutImage} alt="about me" />
          </div>
        </div>
        <div className="about__right">
          <h2 className='about'>About Me</h2>
          <div className="about__cards" data-aos='flip-right'>
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
          In early 2022 I decided to make a life change. I left my established career in Supply Chain to start fresh in the Tech industry. Over the past year, I've dedicated roughly 80 hrs per week towards earning my accredited certificate as a Front End Developer from Turing School of Software and Design. 
          </p>
          <p>I have a diverse work history that includes cooking in some of Denver's top restaurants, wholesale food production, category analysis, and numerous buyer roles. I am a dedicated husband, dad, weekend warrior skier, and outdoor enthusiast. 
          </p>
          <p>Before making the leap into a career transition, I spent the past eight years in the Food Supply Chain,  working as a Buyer and Category Analyst. I developed strong problem solving, multi-tasking and collaboration skills. Think having to make decisions on the fly as new information presents itself in an often-changing environment. My recent career experience particularly due to the logistical challenges thatcame with the Covid-19 pandemic, allowed me to strengthen my problem solving and analytical skills on a daily basis setting me up for success as a Developer. </p>
          <a href={CV} download className="btn primary"> Download Resume <AiOutlineCloudDownload/></a>
        </div>
      </div>
    </section>
  );
};

export default About;
