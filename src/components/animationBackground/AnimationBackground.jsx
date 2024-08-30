import React from "react";
import AnimationList from "../widgets/AnimationList";
import { backgroundData } from "../../assets/data";

function AnimationBackground() {
  return (
    <ul className="w-full h-full">
      {backgroundData.map((li) => (
        <AnimationList
          key={li.id}
          width={li.width}
          height={li.height}
          top={li.top}
          left={li.left}
        />
      ))}
      {/* <AnimationList width={40} height={40} top={100} left={50} /> */}
    </ul>
  );
}

export default AnimationBackground;
