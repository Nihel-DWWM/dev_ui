import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Formulaire from './Components/Formulaire'
import Connexion from "./Components/Connexion"
import User from './Components/User'

import { Routes, Route, useNavigate } from 'react-router-dom'
//import User from './pages/User'
import Slider from './Components/Slider'

function App() {
  

  return (
    <>
    <h1>Bienvenue sur l'application</h1>

            {/* <Slider/> */}

      
      <Routes>
        <Route path="/" element={<Formulaire />} />
        <Route path="/user" element={<Connexion />} />
        <Route path="/user/connect" element={<User />} />
      </Routes>

    </>
  )
}

export default App
