import React from 'react'
import { useState } from 'react'

const ColorPicker = () => {

    const [color, setColor] = useState("#263238")
    const getColor = (e)=>{
        setColor(e.target.value)
    }


  return (
    <div className="flex-center-col m-6 ">

        <div style={{ backgroundColor: color }} className={`h-[300px] w-[300px] rounded-2xl flex-center transition-all duration-200 ease-in `}>
           <h3 className="text-2xl font-bold text-white ">your Color</h3>
        </div>
        <h3 className="text-2xl font-medium ">Your Current color : {color}</h3>
        <label className="text-2xl font-medium " htmlFor="color">Select your Color : 
                    <input type="color" value={color} onChange={getColor} />
        </label>
        
    </div>
  )
}

export default ColorPicker