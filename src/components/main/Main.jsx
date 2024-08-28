import { Outlet, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Projects from "../pages/Projects";

function Main() {
  return (
    <Routes>
      <Route path="/" Component={Home} />
      <Route path="/about" Component={About} />
      <Route path="/projects" Component={Projects} />
    </Routes>
  );
}

export default Main;
