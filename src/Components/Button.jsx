import React from 'react'
import { useState } from 'react'

const Button = () => {
 let [click, setClick] = useState(true)
 function btn(){
    setClick(!click)
    
 }

 let btnColor = click ? "text-black bg-gray-200 hover:shadow-yellow-300 border-purple-500" : "text-white bg-neutral-800 hover:shadow-gray-800 border-indigo-500 ";

  return (
    <div className="flex justify-center my-8 ">
    
    <button onClick={btn} className={`text-2xl border-2 outline-0 px-5 py-2 rounded-xl font-medium shadow-2xl  
        ${btnColor} transition-all ease-in-out duration-200 `} >{click ? "Light ☀️": "Dark 🌑 "}</button>

    </div>
  )
}

export default Button