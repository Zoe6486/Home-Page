import "./App.css";
import Layout from "./Layout";
import Navbar from "./components/navbar/Navbar";
import Content from "./components/content/Content";

function App() {
  return <Layout header={<Navbar />} content={<Content />} />;
}

export default App;
