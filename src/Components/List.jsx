import React from 'react'
import PropTypes from 'prop-types';
const List = (props) => {


// Let's the The Array of object 
const fruits = props.Array;
  // fruits.sort((a,b) => a.name.localeCompare(b.name))  
     fruits.sort((a,b) => b.cal -a.cal)

     const lowCalFruits = fruits.filter(a => a.cal <= 200 )
     lowCalFruits.sort((a, b) => a.cal - b.cal)

     const highCalFruits = fruits.filter(fruit => fruit.cal >= 200)
     highCalFruits.sort((a,b) => a.cal - b.cal)


const listItems = fruits.map((fruit, index)=>{
                return <li className='text-2xl' key={fruit.id}>{index + 1}. <span>  </span> 
                {fruit.name} <b>: {fruit.cal}</b> </li>
})

const lowListItems = lowCalFruits.map((fruit, index)=>{
                return <li className='text-2xl' key={fruit.id}>{index + 1}. <span>  </span> 
                {fruit.name} <b>: {fruit.cal}</b> </li>
})

const highListItems = highCalFruits.map((fruit, index) => {
                      return <li className='text-2xl ' key={fruit.id}> {index + 1}. <span> </span>
                                  {fruit.name}  : <b>{fruit.cal}</b></li>
})


  return (
<>

<h1 className="big-t mt-24 ">{props.Category} List Generation </h1>

  <div className="flex flex-col items-center justify-center gap-y-6  my-6 ">
                <ul>
                  <h1 className="big-t ">{props.Category} and Cal : </h1>
                  {listItems}
                  </ul>

                  <ul>
                    <h1 className='big-t'>Low Cal {props.Category}  : </h1>
                    {lowListItems}
                  </ul>

                  <ul>
                    <h1 className='big-t'>High Cal {props.Category}  : </h1>
                    {highListItems}
                  </ul>
  </div>


</>

  )
}
List.propTypes = {
  category: PropTypes.string,
  Array: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      cal: PropTypes.number,
    })
  ),
};

List.defaultProps = {
  category: "Category",
  Array: ["Please create an Array "],
};


export default List