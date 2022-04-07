import { BrowserRouter, Routes, Route } from "react-router-dom";
import {useState} from 'react'
import React from "react";

import MainPage from "./components/MainPage";
import Sign from "./components/Sign-up";
import Subscriptions from "./components/Subscriptions";
import Home from "./components/Home";
import Plan1 from "./components/plans/plan1";
import Plan2 from "./components/plans/plan2";
import Plan3 from "./components/plans/plan3";

import DataContext from "./context/Datacontext";

function App(){
  const [datas, setDatas] = useState([])
 
  return(
    <DataContext.Provider value={{datas, setDatas}}>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/sign-up" element={<Sign />} />
        <Route path="/subscriptions" element={<Subscriptions />} />
        <Route path="/home" element={<Home />} />
        <Route path="/subscriptions/:idPlan" element={<Plan1 />} />
        <Route path="/subscriptions/:idPlan" element={<Plan2 />} />
        <Route path="/subscriptions/:idPlan" element={<Plan3 />} />
        </Routes>
      </BrowserRouter>
    </DataContext.Provider>
  )
}

export default App;

