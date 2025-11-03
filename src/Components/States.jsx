import { useState , useEffect} from 'react'


const States = ({ card ='Ayanakoji Kyotaka'}) => {

  useEffect(()=>{
    console.log(`The ${card} Card has been liked`)
  }, [card])

  const [btnColor , setBtnColor] = useState(true)
  let [count, setCount] = useState(0);

  function btn(){
    setBtnColor(! btnColor)
    setCount((count) => count + 1);
  }





  return (
    <div className="flex flex-col items-center ">

 <h1 className="big-t ">Practicing States and Effects </h1>

    <div className="w-11/12 min-[500px]:w-[450px] sm:w-[550px] md:w-7/12 lg:w-7/12 xl:w-[600px] bg-neutral-900 p-8 rounded-2xl shadow-black shadow-sm hover:scale-105 hover:shadow-2xl transition-all duration-300 ">
      <h1 className="text-white text-xl sm:text-2xl md:text-2xl lg:text-3xl font-bold  mb-6 ">Ayanokōji Kiyotaka (綾小路 清隆)</h1>
      <p className="text-neutral-400 font-medium text-xs sm:text-base md:text-md lg:text-xl ">Ayanokōji is a highly intelligent, calculating, and emotionally restrained student at the Tokyo Metropolitan Advanced Nurturing High School, an elite institution run by the Japanese government to train the next generation of leaders. He is a member of Class D, a group initially seen as the school’s lowest-ranking class.</p>
      <div className="flex justify-between items-center mt-6">
       <button onClick={btn} className={` ${btnColor ? "bg-white text-black " : "bg-red-600 text-white "}text-xl sm:text-2xl border-2 border-transparent font-medium px-6 py-2  rounded-2xl shadow-white shadow-sm hover:text-white hover:border-white hover:bg-black hover:shadow-2xl  transition-all duration-200`}>🧠 Brain</button> 

       <h3 className="text-2xl text-black font-medium bg-white px-3 py-2 rounded-2xl  ">{count}</h3>
      </div>
      

    </div>





    </div>
  )
}

export default States 


