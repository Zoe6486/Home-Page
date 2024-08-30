import React from "react";

function AnimationList({ width, height, top, left }) {
  return (
    <li
      style={{
        width: `${width}px`,
        height: `${height}px`,
        top: `${top}%`,
        left: `${left}%`,
      }}
      className="bg-cubeColor absolute animate-listFloat"
    ></li>
  );
}

export default AnimationList;
