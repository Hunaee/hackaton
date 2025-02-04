import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./pages/home";
import Contact from "./pages/contact";

function App() {
  return (
    <Router>
      <link href="https://cdn.jsdelivr.net/npm/tailwindcss@latest/dist/tailwind.min.css" rel="stylesheet" />
      <nav className="nav-bar">
        <ul>
          <li><Link to="/">Accueil</Link></li>
          <li><Link to="/blog">Blog</Link></li>
          <li><Link to="/vente">En vente</Link></li>
          <li><Link to="/expert">Trouver un expert</Link></li>
          <li><Link to="/contact">Contact</Link></li>

        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
