import "./portfolio.styles.css";
import ProjectCategories from "./projectCategories.component";
import Projects from "./projects.component";
import data from "./data";
import { useState } from "react";

const Portfolio = () => {
  const [projects, setProjects] = useState(data);
  const categories = data.map(item => item.category);
  const uniqueCategories = ["all", ...new Set(categories)]

  return (
    <section id="portfolio">
      <h2>Recent Projects</h2>
      <p>
        Check out some of the projects I have recently been working on. Use the
        buttons to toggle different categories.
      </p>
      <div className="container portfolio__container">
        <ProjectCategories categories={uniqueCategories}/>
        <Projects projects={projects}/>
      </div>
    </section>
  );
};

export default Portfolio;
