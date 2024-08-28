import React from "react";
import { projectsData } from "../../assets/data";
import Card from "../widgets/Card";

function Projects() {
  const cardList = projectsData.map((item) => (
    <Card key={item.id} item={item} />
  ));
  return (
    <div className="w-4/5 flex flex-col justify-center items-center gap-5 p-5">
      {cardList}
    </div>
  );
}

export default Projects;
