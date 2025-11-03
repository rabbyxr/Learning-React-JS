import React from 'react'

const Props = (props) => {
  return (
    <>

    <div className="text-2xl font-medium shadow-lg shadow-gray-500 w-3/12  p-8 m-8  ">
    <p>Name : {props.name}</p>
    <p>Age : {props.age}</p>
    <p>isStudent : {props.isStudent ? "Yes" : "No"}</p>

    </div>
    
    
    </>
  )
}


export default Props