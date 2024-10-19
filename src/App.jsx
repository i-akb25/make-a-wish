import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import YesPage from "./components/YesPage";
import NoPage1 from "./components/NoPage1";
import NoPage2 from "./components/NoPage2";
import NoPage3 from "./components/NoPage3";
import './App.css';  

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/yes" element={<YesPage />} />
        <Route path="/no1" element={<NoPage1 />} />
        <Route path="/no2" element={<NoPage2 />} />
        <Route path="/no3" element={<NoPage3 />} />
      </Routes>
    </Router>
  );
}

export default App;
