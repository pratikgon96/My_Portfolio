import { React, useState } from 'react';
import "./index.css";
import Home from "./Routes/Home";
import Prjects from "./Routes/Projects";
import About from "./Routes/About";
import ContactUs from "./Routes/ContactUs";

import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/projects' element={<Prjects />}/>
          <Route path='/about' element={<About />}/>
          <Route path='/contact' element={<ContactUs />}/>
        </Routes>
    </>
  )
}

export default App
