import CategoryButton from "./categoryButton.component";
import { useState } from "react";

const ProjectCategories = ({ categories, onFilterProjects }) => {
  const [activeCategory, setActiveCategory] = useState("all");
  const changeCategoryHandler = (activeCategory) => {
    setActiveCategory(activeCategory);
    onFilterProjects(activeCategory);
  };

  return (
    <div className="portfolio__categories">
      {categories.map((category) => (
        <CategoryButton
          key={category}
          category={category}
          onChangeCategory={() => changeCategoryHandler(category)}
          className={`btn cat__btn ${
            activeCategory === category ? "primary" : "white"
          }`}
        />
      ))}
    </div>
  );
};

export default ProjectCategories;
