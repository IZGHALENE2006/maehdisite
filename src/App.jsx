import { useState } from 'react'

import './App.css'
import Nav from './nav'
import Home from './Home'
import Skills from './Skilles'
import Aboute from './Aboute'
import Project from './project'
import Contact from './Contact'

function App() {


  return (
  <>
      <div className="bg-[#0B0B0B] w-full min-h-screen px-3 md:px-10 flex flex-col">
        <Nav />
        <Home />
      </div>

      <Skills />
      <Aboute />
      <Project />
      <Contact/>
    </>
  )
}

export default App
