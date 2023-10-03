import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import "./App.css";
import './Mobile.css'
import { Home } from "./pages/Home";
import Benefits from "./pages/Benefits";
import Access from "./pages/Access";
import About from "./pages/About";
// import "./Mobile.css";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={
            <Home />
          } />
          <Route path="/benefits" element={<Benefits />} />
          <Route path="/get-access" element={<Access />} />
          <Route path="/pricing" element={<About />} />
          {/* <Route path="/user-register" */}
          {/* element={<Register />} /> */}
          {/* <Route path="/login" */}
          {/* element={<Login />} /> */}
        </Routes>
      </BrowserRouter>
    </>

  );
}

export default App;
