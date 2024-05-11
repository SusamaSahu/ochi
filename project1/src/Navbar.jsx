import React from 'react'
import "./component/Navbar.css"
const navbar=["services","our work","about us",'insights']
const Navbar = () => {
  return (
    <div className='navbar  flex justify-between px-10 py-4 capitalize'>
    <div className="log">
      <h1 className='text-3xl font-bold '> ochi</h1>
    </div>
<div className="nav flex gap-10">
    {navbar.map((item,index)=>{
      return (
<a href="/" key={index} className=" navlink text-md font-semibold-400 ">{item}</a>
      )
    })}
    </div>
    <div className="contact text-md font-semibold">contact us</div>
      
    </div>
  )
}

export default Navbar
