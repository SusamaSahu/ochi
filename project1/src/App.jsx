
import React from 'react'
import Navbar from './Navbar'
import Landing from './component/Landing'
import Marquee from './component/Marquee'
import About from './component/About'
import Simple from './Simple'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Landing/>
      <Marquee/>
      <About/>
      <Simple/>
    </div>
  )
}

export default App
