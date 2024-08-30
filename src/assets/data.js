import { BASE_PATH } from "@/config";

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
  { id: 1, key: "home", to: `${BASE_PATH}/`, content: "HOME" },
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
    icon: "icon",
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
    icon: "icon",
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
