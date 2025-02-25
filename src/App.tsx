
import React from 'react'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import AppLogin from './components/AppLogin'

export default function App(){

  return(
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLogin/>} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}
 


