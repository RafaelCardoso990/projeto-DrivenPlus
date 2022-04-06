import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";

import MainPage from "./components/MainPage";
import Sign from "./components/Sign-up";


function App(){
  return(
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/sign-up" element={<Sign />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;

