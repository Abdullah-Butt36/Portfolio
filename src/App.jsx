import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Education from "./Components/Education/Education";
import Skills from "./Components/Skills/Skills";
import Footer from "./Components/Footer/Footer";
import Project from "./Components/Projects/Project";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./Components/Contact/Contact";
import About from "./Components/About/About";
import Refresh from "./Refresh";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Refresh />
        <Navbar />

        <main>
          <Routes>
            <Route path="/" element={<Hero />} />
            
            <Route path="/about" element={<About />} />

            <Route path="/education" element={<Education />} />

            <Route path="/skills" element={<Skills />} />

            <Route path="/projects" element={<Project />} />

            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
