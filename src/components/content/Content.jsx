import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Projects from "../pages/Projects";
import { BASE_PATH } from "@/config"; // 导入 BASE_PATH

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
