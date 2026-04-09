import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Myinfo from "./pages/Myinfo";

function App() {
  return (
    <BrowserRouter>
      
      <div className="flex flex-col min-h-screen">
        
        <Navbar />

        {/* Main Content */}
        <div className="grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/myinfo" element={<Myinfo/>}/>
          </Routes>
        </div>  

        <Footer /> 

      </div>

    </BrowserRouter>
  );
}

export default App;