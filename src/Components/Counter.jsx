import React from 'react'
import { useState } from 'react'


const Counter = () => {

    let [count, setCount] = useState(0);
    let [text, setText] = useState("Nothing has happend yet !");

    function add1(){
    setCount(count+ 1);
    setText("You've increased the number by +1")
    }
     function add2(){
    setCount(count+ 2);
    setText("You've increased the number by +2")
    }
     function minus(){
    setCount(count- 1);
    setText("You've decreased the number by -1")
    }
     function reset(){
    setCount(count = 0);
    setText("You've reset the counter. Start Again...")
    }

  return (
    <div>
        <h1 className="text-6xl font-bold text-center text-gray-800 ">Counter Game</h1>
        <div className="text-8xl font-bold text-gray-800 text-center mt-10 mb-22 ">
            {count} 
        </div>
        <div className="mb-10 flex justify-center gap-x-14">
<button onClick={add1} className="text-4xl font-medium py-2 px-5 bg-gray-800 text-white rounded-2xl hover:shadow-black hover:shadow-2xl">+ 1</button>
<button onClick={add2} className="text-4xl font-medium py-2 px-5 bg-gray-800 text-white rounded-2xl hover:shadow-black hover:shadow-2xl">+ 2</button>
<button onClick={minus} className="text-4xl font-medium py-2 px-5 bg-gray-800 text-white rounded-2xl hover:shadow-black hover:shadow-2xl">- 1</button>
<button onClick={reset} className="text-4xl font-medium py-2 px-5 bg-gray-800 text-white rounded-2xl hover:shadow-black hover:shadow-2xl">reset</button>
        </div>
        <h1 className="text-4xl text-center font-medium mb-10 ">{text}</h1>

    </div>
  )
}

export default Counter