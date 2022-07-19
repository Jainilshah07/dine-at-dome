import "./App.css";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { Routes, Route, Link } from "react-router-dom";
import Contact from "./components/Contact";
import Destinations from "./components/Destinations";
import Media from "./components/Media";
import About from "./components/About";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/destination" element={<Destinations />} />
        <Route path="/media" element={<Media />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/" element={<Footer/>} /> */}
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
