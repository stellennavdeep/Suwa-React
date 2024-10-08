import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./Pages/Layout.jsx";
import Home from "./Pages/Home.jsx";
import NoPage from "./Pages/NoPage.jsx";
import About from "./Pages/About.jsx";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Contact from "./Pages/Contact.jsx";
import Login from "./Auth/Login.jsx";

function App() {
  

  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="*" element={<NoPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
