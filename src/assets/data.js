import { BASE_PATH } from "@/config";
import catImg from "@/assets/cat.png";
import app100Img from "@/assets/100App.png";

// background data
export const backgroundData = [
  { id: 0, width: 30, height: 30, top: 140, left: 5 },
  { id: 1, width: 80, height: 80, top: 100, left: 20 },
  { id: 2, width: 140, height: 140, top: 130, left: 35 },
  { id: 3, width: 40, height: 40, top: 165, left: 55 },
  { id: 4, width: 110, height: 110, top: 150, left: 75 },
  { id: 5, width: 40, height: 40, top: 120, left: 90 },
];

// Header
export const navLinkData = [
  { id: 1, key: "home", to: `${BASE_PATH}/home`, content: "HOME" },
  { id: 2, key: "about", to: `${BASE_PATH}/about`, content: "ABOUT" },
  { id: 3, key: "projects", to: `${BASE_PATH}/projects`, content: "PROJECTS" },
];

export const projectsData = [
  {
    id: 1,
    title: "Catch Bugs Game",
    content: "create game using Canvas Api",
    tags: [
      { id: 1, name: "javaScript" },
      { id: 2, name: "Canvas" },
    ],
    icon: catImg,
    url: "https://zoe6486.github.io/CatchingBugsGame/",
  },
  {
    id: 2,
    title: "101 React Apps",
    content: "Try to finish 100 apps with React",
    tags: [
      { id: 1, name: "react" },
      { id: 2, name: "scss" },
    ],
    icon: app100Img,
    url: "https://zoe6486.github.io/CatchingBugsGame/",
  },
  {
    id: 3,
    title: "Catch Bugs Game",
    content: "create game using Canvas Api",
    tags: [
      { id: 1, name: "javaScript" },
      { id: 2, name: "Canvas" },
    ],
    icon: catImg,
    url: "https://zoe6486.github.io/CatchingBugsGame/",
  },
  {
    id: 4,
    title: "101 React Apps",
    content: "Try to finish 100 apps with React",
    tags: [
      { id: 1, name: "react" },
      { id: 2, name: "scss" },
    ],
    icon: app100Img,
    url: "https://zoe6486.github.io/CatchingBugsGame/",
  },
  {
    id: 5,
    title: "Catch Bugs Game",
    content: "create game using Canvas Api",
    tags: [
      { id: 1, name: "javaScript" },
      { id: 2, name: "Canvas" },
    ],
    icon: catImg,
    url: "https://zoe6486.github.io/CatchingBugsGame/",
  },
  {
    id: 6,
    title: "101 React Apps",
    content: "Try to finish 100 apps with React",
    tags: [
      { id: 1, name: "react" },
      { id: 2, name: "scss" },
    ],
    icon: app100Img,
    url: "https://zoe6486.github.io/CatchingBugsGame/",
  },
];

// Home
export const socialLinksData = [
  {
    id: 1,
    title: "facebook",
    anchor: "https://www.facebook.com/robin.wong.904108",
    icon2: "https://img.icons8.com/sf-regular-filled/48/1c1e26/facebook.png",
    icon1: "https://img.icons8.com/sf-regular-filled/48/fb80c2/facebook.png",
  },
  {
    id: 2,
    title: "twitter",
    anchor: "https://twitter.com/Robin666",
    icon2: "https://img.icons8.com/sf-regular-filled/48/1c1e26/twitter.png",
    icon1: "https://img.icons8.com/sf-regular-filled/48/fb80c2/twitter.png",
  },
  {
    id: 3,
    title: "linkedIn",
    anchor: "https://www.linkedin.com/in/zoe6486/",
    icon2: "https://img.icons8.com/sf-regular-filled/48/1c1e26/linkedin.png",
    icon1: "https://img.icons8.com/sf-regular-filled/48/fb80c2/linkedin.png",
  },
  {
    id: 4,
    title: "gitHub",
    anchor: "https://github.com/Zoe6486",
    icon2: "https://img.icons8.com/sf-regular-filled/48/1c1e26/github.png",
    icon1: "https://img.icons8.com/sf-regular-filled/48/fb80c2/github.png",
  },
];

export const aboutData = [
  {
    id: "01",
    title: "Ui/Ux Design",
    content:
      "Design user-friendly interfaces using tools like Figma, Sketch, and Adobe XD.  Focus on making products both functional and visually appealing.",
    link: "/icons/quill-pen-line.svg",
    path: "M6.94 14.036c-.233.624-.43 1.2-.606 1.783.96-.697 2.101-1.139 3.418-1.304 2.513-.314 4.746-1.973 5.876-4.058l-1.456-1.455 1.413-1.415 1-1.001c.43-.43.915-1.224 1.428-2.368-5.593.867-9.018 4.292-11.074 9.818zM17 9.001L18 10c-1 3-4 6-8 6.5-2.669.334-4.336 2.167-5.002 5.5H3C4 16 6 2 21 2c-1 2.997-1.998 4.996-2.997 5.997L17 9.001z",
  },
  {
    id: "02",
    title: "Web Development",
    content:
      "Build responsive and dynamic websites using HTML, CSS, JavaScript, and React. Aim to create fast, secure, and user-friendly web applications.",
    link: "/icons/code-s-slash-line.svg",
    path: "M24 12l-5.657 5.657-1.414-1.414L21.172 12l-4.243-4.243 1.414-1.414L24 12zM2.828 12l4.243 4.243-1.414 1.414L0 12l5.657-5.657L7.07 7.757 2.828 12zm6.96 9H7.66l6.552-18h2.128L9.788 21z",
  },
  {
    id: "03",
    title: "Mobile App Development",
    content:
      "Develop mobile apps using React Native and Flutter. Focus on creating smooth, efficient, and user-friendly applications for both iOS and Android.",
    link: "/icons/smartphone-line.svg",
    path: "M7 4v16h10V4H7zM6 2h12a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1zm6 15a1 1 0 1 1 0 2 1 1 0 0 1 0-2z",
  },
];
