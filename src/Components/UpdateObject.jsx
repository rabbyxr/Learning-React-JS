import React from 'react'
import { useState} from 'react'

const UpdateObject = () => {

    const [person, setPerson] = useState({name : "Alex" 
                                         ,age: 20,
                                          skill : "Learning"})

    const updateName = (e) =>{
       setPerson(p =>({...p, name : e.target.value })) 
    }
    const updateAge = (e)=>{
        setPerson(p => ({...p, age : e.target.value}))
    }
    const updateSkill = (e)=>{
        setPerson(p =>({...p, skill : e.target.value}))
    }


  return (
   <>
   
   <div className='text-2xl flex-center-col m-8 '>
    <h3>Name : {person.name}</h3>
    <h3>Age : {person.age}</h3>
    <h3>Skill : {person.skill}</h3>
    <div className='flex flex-col gap-y-4  '>
        <label htmlFor="name">Name : 
            <input className='px-5 py-2 ml-4 ' type="text" value={person.name} onChange={updateName} />
        </label>       

        <label htmlFor="age">Age : 
            <input className='px-5 py-2 ml-4 ' type="number" value={person.age} onChange={updateAge}/>
        </label>
        
        <label htmlFor="skill">Skill : 
            <input className='px-5 py-2 ml-4 ' type="text" value={person.skill} onChange={updateSkill}/>
        </label>
        


    </div>


   </div>
   
   
   
   </>
  )
}

export default UpdateObject