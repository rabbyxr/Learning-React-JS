import React, { } from 'react'
import { useState } from 'react'

const UpdateArraysOfObjects = () => {

    const [character, setCharacter] = useState([])
    const [name, setName] = useState("");
    const [age, setAge] = useState()
    const [power, setPower] = useState("")

    const getName = (e)=>{
       setName(e.target.value)
    }

    const getAge = (e)=>{
       setAge(e.target.value)
    }
    const getPower = (e)=>{
     setPower(e.target.value)
    }

    const addHero = ()=>{
        const newHero = {name : name , age: age, power: power}
        document.getElementById('name').value = "";
        document.getElementById('age').value = "";
        document.getElementById('power').value = "";
        setCharacter(c => [...c, newHero])
    }

    const removeHero = (index)=>{
        setCharacter(character.filter((_,i)=> i !== index))
    }

  return (
    <div>
    <h1 className="big-t ">List of Array objects : </h1>
        <ul>
            {character.map((person, index)=> 
                <li className='text-2xl text-center ' onClick={()=> removeHero(index)}  key={index}><b>{index + 1} . </b> Hero no{index + 1}. {person.name} , Age : {person.age}, Power : {person.power}</li>        
                        )}
        </ul>
        {/* Adding hero's here  */}
        <div className='flex-center-col'>
            <label className='text-2xl px-4 py-1 ml-4 font-medium ' htmlFor="">Hero name : <input className='text-2xl px-4 py-1 ml-4 font-light' onChange={getName} id='name' type="text" placeholder="type hero name... "/></label>

            <label className='text-2xl px-4 py-1 ml-4 font-medium ' htmlFor="">Hero's Age : <input className='text-2xl px-4 py-1 ml-4 font-light' id='age' onChange={getAge} type="number" placeholder='Enter you age... '/></label>

            <label className='text-2xl px-4 py-1 ml-4 font-medium ' htmlFor="">Power : <input className='text-2xl px-4 py-1 ml-4 font-light' id='power' onChange={getPower} type="text" placeholder="type hero name... "/></label>
                        
            <button onClick={addHero} className='btn my-4 active:opacity-40 transition-all duration-200 '>Add Hero</button>
            
        </div>           
    </div>
  )
}

export default UpdateArraysOfObjects