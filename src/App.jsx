import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";

import MainPage from "../pages/mainPage";
import About from "../pages/about";
import Contact from "../pages/contact";
import CV from "../pages/cv";
import MyApps from "../pages/myapps";
import Pitch from "../pages/pitch";
import TechStack from "../pages/techstack";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/techstack" element={<TechStack />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/pitch" element={<Pitch />} />
        <Route path="/myapps" element={<MyApps />} />
        <Route path="/cv" element={<CV />} />
      </Routes>
    </div>
  );
}

export default App;
