import React from 'react'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Intro from './components/Intro'
import Portfolio from './components/Portfolio'
import Timeline from './components/Timeline'
import { useEffect, useState } from 'react'
import Value from './components/Value'



const App = () => {
  

  return (
    
      <div className='App'>
        <Intro />
        <Portfolio />
        <Value />
        <Timeline />
        <Contact />
        <Footer />
      </div>
    
  )
}

export default App
