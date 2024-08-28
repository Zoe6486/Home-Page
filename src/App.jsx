import "./App.css";
import Layout from "./Layout";
import Navbar from "./components/navbar/Navbar";
import Main from "./components/main/Main";
import Footer from "./components/footer/Footer";

function App() {
  return <Layout header={<Navbar />} main={<Main />} footer={<Footer />} />;
}

export default App;
