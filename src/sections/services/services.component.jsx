import { useEffect } from "react";
import data from "./data";
import Card from "../../components/card/card.component";
import EPC from "../../assets/EPC.jpeg";
import AOS from 'aos'
import 'aos/dist/aos.css'
import "./services.styles.css";

const Services = () => {
  useEffect(() => {
    AOS.init({duration: 1500})
  },[])

  return (
    <section id="services" style={{ backgroundImage: `url(${EPC})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize:'cover' }}>
      <h2 className='service-tag'>Services and Tech Stack</h2>
      <br/>
      <div className="container services__container" data-aos='zoom-in-up'>
        {data.map((item) => (
          <Card key={item.id} className="service light" >
            <div className="service__icon">{item.icon}</div>
            <div className="service__details">
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Services;
