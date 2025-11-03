import React from 'react'
import { useState , useEffect} from 'react';



const Card = ({bg="bg-white" ,company="Amazon" ,title="Senior UI/UX Designer" ,logo="/src/assets/amazon.png" ,earning="$200-250K" ,location="Dhaka ,Bangladesh" }) => {

  const [isSaved, setIsSaved] = useState(false);
  const color = isSaved ? "text-red-600" : "text-gray-300";

  function handleClick() {
    setIsSaved(!isSaved);
  }

//   Let's use useEffect here to learn how it works 
        useEffect(()=>{
        // console.log(`${title} has been saved : ${isSaved}`)
        console.log(`${company} has been saved : ${isSaved}`)

        } )

        // Fucntion for Apply 
        function apply(){
                alert(`Your Application for ${company} has been sent`)
        }

        // Function for part-time and Senior-level 
        let [part, setPart] = useState(true)
        function partTime(){
                setPart(!part)
        }
        let partBtn = part ? "bg-gray-200  text-black" : "bg-black text-white shadow-black hover:shadow-2xl";
         let [senior, setSenior] = useState(true)
        function seniorLevel(){
                setSenior(!senior)
        }
        let seniorBtn = senior ? "bg-gray-200  text-black" : "bg-black text-white shadow-black hover:shadow-2xl";


        
  return (
    <>
    
    <div className={`w-3/12 ${bg} rounded-xl shadow-md shadow-black m-8 hover:shadow-xl hover:shadow-indigo-500 hover:scale-110 hover:duration-250`}>
    {/* Section 1 */}

<div className=" flex justify-between items-center w-11/12 m-auto  pt-8 pb-6 ">

        <img className="w-[50px] h-[50px] rounded-full cursor-pointer"  src={`${logo}`} alt="Logo" />
        <button onClick= {handleClick} className="text-1xl font-medium px-4 py-2 border-2 bg-gray-100 border-gray-300 rounded-lg hover:bg-black hover:text-white hover:shadow-2xl hover:shadow-black  active:brightness-50  transition-all duration-150 ">Save<i className={`fa-solid fa-bookmark text-gray-300 ml-2 ${color}`}></i></button>
        
</div>
        {/* Section 2  */}
<div className="">
        <h2 className="text-2xl font-medium pl-6">{company} <span className='text-[16px] font-normal  text-gray-500 ml-2 '>5 days ago</span></h2>
        <h2 className="text-3xl font-bold pl-6 pt-2 ">{title}</h2>
        <div className="pl-6 pt-4 mb-28">
                    <button onClick={partTime} className={`px-4 py-1 ${partBtn} rounded-md  font-medium border border-white mr-8`}>Part-time</button>
                    <button onClick={seniorLevel}  className={`px-4 py-1 rounded-md  ${seniorBtn} font-medium border border-white`}>Senior Level</button>
        </div>

</div>
        {/* Section 3  */}
<div className="w-11/12 m-auto pb-1">
        <hr></hr>
        <div className="mt-5 flex justify-between items-center  mb-8 ">
<div>
        <h3 className="font-bold text-2xl ">{earning}</h3>
        <h4 className="font-medium text-gray-400">{location}</h4>
</div>
        <button onClick={apply} className="font-medium bg-black py-3  px-6 text-white rounded-xl hover:brightness-90 active:opacity-35 hover:shadow-2xl hover:shadow-black transition-all duration-150 ">Apply Now</button>
    
        </div>

</div>
    </div>
    
    
    
    </>
  )
}

export default Card