import React, {  } from 'react'
import { useState } from 'react'

const OnChange = () => {

    const [name, setName] =useState("")
    const [email, setEmail] = useState("")
    const [payment, setPayment] =useState("")
    const [address , setAddress] = useState("")
    const [shipping, setShipping] = useState("Delivery")

    function getName(e){
        setName(e.target.value)
    }
    function getEmail(e){
        setEmail(e.target.value)
    }
    function getPayment(e){
        setPayment(e.target.value)
    }
    const getAddress = (e)=>{
        setAddress(e.target.value)
    }
    const getShipping = (e)=>{
        setShipping(e.target.value)
    }




  return (
    <div className="flex-center-col gap-y-2 ">

        <label className="text-2xl font-medium " htmlFor="name">Name : 
            <input className="text-2xl px-5 py-2 " onChange={getName} type="text" value={name} placeholder="Type here" required/></label>

        <label className="text-2xl font-medium " htmlFor="email">Email : 
            <input type="text" className="text-2xl px-5 py-2 " onChange={getEmail}  value={email} placeholder="your@gmail.com" required/>
        </label>

        <label className="text-2xl font-medium " htmlFor="payment">Payment Method : 
                        <select name="payment" onChange={getPayment} value={payment}>
                            <option value="">-- Choose your option --</option>
                            <option value="Visa">Visa</option>
                            <option value="Master Card">Master Card</option>
                            <option value="Gift Card">Gift Card</option>
                        </select>
            </label>
            <label className="text-2xl font-medium " htmlFor="address">Your Address : <br />
                        <textarea className="text-2xl px-5 py-2 " name="address" onChange={getAddress} value={address}>

                        </textarea>
            </label>
            <label className="text-2xl px-5 py-2 " htmlFor="">
                <input  type="radio" value="Delivery"
                        checked={shipping === "Delivery"}
                        onChange={getShipping}/>
                        Delivery
                     
            </label>
             <label className="text-2xl px-5 py-2 " htmlFor="">
                <input  type="radio" value="Pick up"
                        checked={shipping === "Pick up"}
                        onChange={getShipping}/>
                         Pick up
                     
            </label>
            


        <div className=" ">
                <h3 className='big-t '>User info </h3>
                <h3 className="text-xl font-medium">Your Name : {name}</h3>
                <h3 className="text-xl font-medium">Your Email : {email}</h3>
                <h3 className="text-xl font-medium">Your Payment Method : {payment}</h3>
                <h3 className="text-xl font-medium">Your Address : {address}</h3>
                <h3 className="text-xl font-medium">Your Shipping Method : {shipping}</h3>


        </div>
        
    </div>
  )
}

export default OnChange