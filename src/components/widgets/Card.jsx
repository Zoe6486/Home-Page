import React from "react";

function Card({ item }) {
  return (
    <li className="w-full h-32  rounded-xl bg-subBgColor ">
      <a
        className="flex p-5 w-full h-full items-center justify-between"
        href={item.url}
        target="_blank"
      >
        {/* 左侧 */}
        <div className="flex h-full flex-col justify-around ">
          {/* title */}
          <div>
            <span className="text-xl font-bold">{item.title} </span>
            <span className="mx-2">react</span>
            <span>scss</span>
          </div>
          {/* content */}
          <p>{item.content}</p>
        </div>
        {/* 右侧 */}
        <div className="w-10 h-10 items-center ">{item.icon}</div>
      </a>
    </li>
  );
}

export default Card;
