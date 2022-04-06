import { BrowserRouter, Routes, Route } from "react-router-dom";
import {useState} from 'react'
import React from "react";

import MainPage from "./components/MainPage";
import Sign from "./components/Sign-up";
import Subscriptions from "./components/Subscriptions";
import Home from "./components/Home";

import DataContext from "./context/Datacontext";

function App(){
  const [data, setData] = useState([])
  return(
    <DataContext.Provider>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<MainPage value={data}/>} />
        <Route path="/sign-up" element={<Sign />} />
        <Route path="/subscriptions" element={<Subscriptions />} />
        <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </DataContext.Provider>
  )
}

export default App;

