import data from "./data";
import Card from "../../components/card/card.component";
import Longs from "../../assets/EPC.jpeg";

import "./services.styles.css";

const Services = () => {
  return (
    <section id="services" style={{ backgroundImage: `url(${Longs})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}>
      <h2 className='service-tag'>Services and Tech Stack</h2>
      <br/>
      <div className="container services__container">
        {data.map((item) => (
          <Card key={item.id} className="service light">
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
