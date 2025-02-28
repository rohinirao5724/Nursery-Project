
import React from 'react'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import AppLogin from './components/AppLogin'
import Registration from './components/Registration'

export default function App(){

  return(
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLogin/>} />
        <Route path="/reg" element={<Registration/>} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}
 


