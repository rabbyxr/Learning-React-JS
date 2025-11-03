import Props from "./Props"
import States from './States.jsx'
import List from "./List.jsx"
import Button from "./Button.jsx"
import OnChange from "./OnChange.jsx"
import ColorPicker from "./ColorPicker.jsx"
import UpdateObject from "./UpdateObject.jsx"
import UpdataArray from "./UpdataArray.jsx"
import UpdateArraysOfObjects from "./UpdateArraysOfObjects.jsx"

const Navbar = () => {
const fruits = [{id : 1, name : "Banana", cal : 95}, 
                {id : 2, name :"Orange", cal : 45}, 
                {id : 3, name : "Apple", cal : 110}, 
                {id : 4, name : "Avacado", cal : 200} , 
                {id : 5, name : "Water Melon" , cal : 1345}, 
                {id : 6, name : "Lime", cal : 32 }]
const vegetable = [{id : 7, name : "Mushrooms", cal : 7}, 
                {id : 8, name :"Pumpkin", cal : 15}, 
                {id : 9, name : "Broccoli", cal : 110}, 
                {id : 10, name : "Carrots", cal : 200} , 
                {id : 11, name : "Sweet potato" , cal : 1345}, 
                {id : 12, name : "Potato", cal : "tel" }]

const vegetables = [];

  return (
    <>
    
    <div className="text-5xl font-bold text-center ">navbar</div>
                  
      <States card="Alex Hormozi "/>
      <UpdateArraysOfObjects/>
      <UpdateObject/>
      <UpdataArray/>
      <ColorPicker/>
      <Button />
      <OnChange />
      <List Array ={fruits} Category ="Fruits "/>
   
      

     {vegetable.length > 0 &&  <List Array ={vegetable} Category ="Vegetable"/>} 
     {vegetables.length > 0 ?  <List Array ={vegetables} Category ="Vegetables"/> : null } 
   

    </>

    
          
  )
}

export default Navbar