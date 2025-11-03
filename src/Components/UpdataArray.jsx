import React from 'react'
import { useState } from 'react'

const UpdataArray = () => {

const [list, setList] = useState(["Do 10 push-ups" , "Study for 30min" , "10min deep wrok"])

const updateList = () =>{
    const newItem = document.getElementById('add-list').value;
    document.getElementById('add-list').value = "";
    setList(l => [...l, newItem])
}
const deleteListItem = (index) =>{
    setList(list.filter((_, i)=> i !== index) )
}



  return (
    <div className="flex flex-col justify-center items-center ">
            <h1 className='big-t'>List : </h1>
        <ul className="text-2xl m-4 ">
            {list.map((item, index)=>
                <li key={index} onClick={() => deleteListItem(index)} ><b>{index + 1} .</b> {item}</li>
            )}
        </ul>



            <label className='text-3xl font-medium ' htmlFor="">Add list : 
                <input className='px-4 py-1 ml-4 text-2xl' type="text" id="add-list" placeholder="type here ...  "/>

                <button onClick={updateList} className="px-5 py-2 text-xl  bg-black text-white rounded-xl border border-transparent ml-4 shadow-sm shadow-black hover:shadow-2xl hover:border-black hover:bg-white hover:text-black active:opacity-40 ">Add </button>
            </label>

    </div>
  )
}

export default UpdataArray