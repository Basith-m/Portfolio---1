import React, { useEffect, useState } from "react";
import { projectData, projectNav } from "./Data";
import WorkItems from "./WorkItems";

const Works = () => {
  const [active, setActive] = useState(0);
  const [item, setItem] = useState({ name: "all" });
  const [projects, setProjects] = useState([])

  const handleClick = (e, index) => {
    setItem({ name: e.target.textContent.toLowerCase() });
    setActive(index);
  };

  useEffect(() => {
    if(item.name === "all"){
        setProjects(projectData)
    }else {
        const newProjects = projectData.filter(project => {
            return project.category.toLowerCase() === item.name
        }) 
        setProjects(newProjects)
    }
  }, [item])

  return (
    <div>
      <div className="work_filters">
        {projectNav.map((item, index) => {
          return (
            <span
              onClick={(e) => handleClick(e, index)}
              className={`${
                active === index ? "active_work work_item" : "work_item"
              }`}
              key={index}
            >
              {item.name}
            </span>
          );
        })}
      </div>

      <div className="work_container grid">
        {
            projects.map(item => {
                return <WorkItems item={item} key={item.id} />
            })
        }
      </div>
    </div>
  );
};

export default Works;
