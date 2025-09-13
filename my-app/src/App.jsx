import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Formulaire from './Components/Formulaire'
import Connexion from "./Components/Connexion"
import User from './Components/User'
import Home from './pages/Home'
import Contact from './pages/Contact'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Routes, Route, useNavigate } from 'react-router-dom'
//import User from './pages/User'
import Slider from './Components/Slider'
import PermisInternational from './pages/PermisInternational'
import ScrollToHashElement from './Components/ScrollToHashElement'
import Apropos from './pages/Apropos'
import Documents from './pages/Documents'
//import { Contact } from 'lucide-react'

function App() {
  

  return (
    <>

    <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light" // tu peux changer en "dark"
        toastClassName="custom-toast"
      />


    {/* <h1>Bienvenue sur l'application</h1> */}

            {/* <Slider/> */}

      <ScrollToHashElement />
      <Routes>
        <Route path="/inscription" element={<Formulaire />} />
        <Route path="/login" element={<Connexion />} />
        <Route path="/user/connect" element={<User />} />
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/permis" element={<PermisInternational/>} />
        <Route path="/apropos" element={<Apropos/>} />
        <Route path="/documents" element={<Documents/>} />
      </Routes>

    </>
  )
}

export default App
