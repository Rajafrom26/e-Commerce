import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import HomePage from './Components/HomePage'
import Routings from './Routings/Routings'
import Footer from './Components/Footer'

function App() {

  return (
    <>
      <Navbar />
      <Routings />
      <Footer />
    </>
  )
}

export default App
