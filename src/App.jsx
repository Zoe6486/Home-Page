import "./App.css";
import Layout from "./Layout";
import Navbar from "./components/navbar/Navbar";
import Content from "./components/content/Content";
import AnimationBackground from "./components/animationBackground/AnimationBackground";

function App() {
  return (
    <Layout
      header={<Navbar />}
      content={<Content />}
      animationBackground={<AnimationBackground />}
    />
  );
}

export default App;
