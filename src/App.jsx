import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./Pages/Layout.jsx";
import Home from "./Pages/Home.jsx";
import NoPage from "./Pages/NoPage.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

function App() {
  

  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
