import React from 'react'
import './Marquee.css'
import { animate, motion} from 'framer-motion'
const Marquee = () => {
  return (
    <div className='marquee  w-full py-10 bg-[#004d43]'>
      <div className="text ">
      
        <motion.h1 initial={{x:0}} animate ={{x:"-100%"}} transition={{ease:"linear", repeat:Infinity,duration:5}}>we are ochi</motion.h1>
        <motion.h1 initial={{x:50}} animate ={{x:"-100%"}} transition={{ease:"linear", repeat:Infinity,duration:5}}>we are ochi</motion.h1>
        <motion.h1 initial={{x:70}} animate ={{x:"-100%"}} transition={{ease:"linear", repeat:Infinity,duration:5}}>we are ochi</motion.h1>
        
        
      </div>
    </div>
  )
}

export default Marquee
