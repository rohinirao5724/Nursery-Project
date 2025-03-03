import React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLogin from "./components/AppLogin";
import Registration from "./components/Registration";
import LandingPage from "./components/LandingPage";





export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
         <Route path="/" element ={<AppLogin />} />
         <Route path="/reg" element ={<Registration />} />
         <Route path="/landing" element ={<LandingPage />} />
        
        </Routes>
      </BrowserRouter>
    </div>
  );
}