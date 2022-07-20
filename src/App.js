import "./App.css";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { Routes, Route, Link } from "react-router-dom";
import Contact from "./components/Contact";
import Destinations from "./components/Destinations";
import Media from "./components/Media";
import About from "./components/About";
import Carousel from "./components/Carousel";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/destination" element={<Carousel/>} />
        <Route path="/media" element={<Media />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
