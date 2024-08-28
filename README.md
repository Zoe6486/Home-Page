# React + Vite + tailwind + Yarn + React Router + React Hooks

# personal website

https://zoe6486.github.io/Home-Page/

#### 一些问题：

1. 如果需要把项目 deploy 到 GitHub 的 Pages：
   vite.config.js 中配置 base 路径，用于区分其他项目；

   ```js
   import { defineConfig } from "vite";
   import react from "@vitejs/plugin-react";
   import { join } from "node:path";
   
   // https://vitejs.dev/config/
   export default defineConfig({
     plugins: [react()],
     // deploy到GitHub时，配置基础路径
     base: "/Home-Page/",
     // 配置@路径, 应用组件时使用@代替./src/
     resolve: {
       alias: {
         // eslint-disable-next-line no-undef
         "@": join(__dirname, "src"),
       },
     },
     
   });
   ```

   同时，在 `src` 目录下创建一个 `config.js` 文件，用于存储配置变量（上面的基础路径），用于其他组件中使用（使用路由时）,

   ```js
   // src/config.js
   export const BASE_PATH = '/Home-Page/';
   
   ```

   其他组件导入使用BASE_PATH

   ```jsx
   import { Route, Routes } from "react-router-dom";
   import Home from "../pages/Home";
   import About from "../pages/About";
   import Projects from "../pages/Projects";
   import { BASE_PATH } from "../config"; // 导入 BASE_PATH
   
   function Content() {
     return (
       <Routes>
         {/* 使用 BASE_PATH 作为路径前缀 */}
         <Route path={`${BASE_PATH}/`} element={<Home />} />
         <Route path={`${BASE_PATH}/about`} element={<About />} />
         <Route path={`${BASE_PATH}/projects`} element={<Projects />} />
       </Routes>
     );
   }
   
   export default Content;
   
   ```

   注意：你可以在 `vite.config.js` 中直接使用 `config.js` 中定义的变量，但需要注意一些细节。由于 Vite 的配置文件是运行在 Node.js 环境下的，而 `config.js` 文件通常是给浏览器端的代码使用的，直接引入 `config.js` 文件可能会导致一些问题，比如使用浏览器特有的语法或模块可能会导致构建失败。

   然而，如果 `config.js` 文件只是简单地导出一些配置常量，那么可以直接在 `vite.config.js` 中引入并使用。

2. asfdasf

3. afsda
