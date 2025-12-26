import { useState } from 'react'

import './App.css'
import Nav from './nav'
import Home from './Home'
import Skills from './Skilles'

function App() {


  return (
<>

    <div className='bg-[#0B0B0B] w-full h-screen pl-1 md:pl-10  flex flex-col'>
<Nav/>
<Home/>

    </div>
    <Skills/>
</>
  )
}

export default App
