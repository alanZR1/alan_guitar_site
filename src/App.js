import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <Router>
      <>      
      <Navbar/>
      </>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/music" element={<h1>Music</h1>} />
        <Route path="/videos" element={<h1>Videos</h1>} />
        <Route path="/gear" element={<h1>Gear</h1>} />
        <Route path="/presets" element={<h1>Presets</h1>} />
        <Route path="/contact" element={<h1>Contact</h1>} />
      </Routes>

      <>
      <Footer/>
      </>

    </Router>
  );
}

export default App;