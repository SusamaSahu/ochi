import React from 'react'
const content=["we create","eye opening","presentations"]
import './Landing.css'
const Landing = () => {
  return (
    <>
        <div className="landing">
            {content.map((item,index)=>{
                return (
                    <div className="masker" key={index}>
                    {
                        index===1 && (<div className='box h-[vw] w-[9vw] bg-green-200 align-top '></div>)
                    }
                    <h1 key={index}>{item}</h1>
                    </div>
                )

            })}
            <div className='hrline'></div>
            <div className="part">
                <p>For public and private companies</p>
                <p>From the first pitch to IPO</p>
                <button>start the project</button>
            </div>
        </div>
    </>
  )
}

export default Landing
