import { useState } from "react"
import Nav from "../components/header"
import { supabase } from "./client";
export default function SignUP(){

  const [formdata,setformdata]=useState({
    fullname:' ',
    email:' ',
    password:' '
  })
  console.log(formdata)
  function handlechange (event){
         setformdata((prevdataform)=>{
                 return{
                  ...prevdataform,
                  [event.target.name]:event.target.value
                 }
         })
  }
  async function handlesubmit(e){
    e.preventDefault()
try {
  const { data, error } = await supabase.auth.signUp({
    email: formdata.email,
   password: formdata.password,
   data:{
     full_name:formdata.fullname
   }
 }) 
 alert("check the email for the verification link")
} catch (error) {
  alert(error)
} 
  }
    return(
        <>
        <Nav/>
                 <div className="h-screen flex justify-center items-center ">
           <form onSubmit={handlesubmit} className=" sm:p-10  bg-indigo-300 shadow-2xl rounded-lg p-8 max-w-sm mx-auto">
            <div>
  <p className="text-5xl font-mono text-center font-bold mb-6 text-indigo-700 roboto-regular-italic ">Sign Up</p></div>
  <div className="mb-4 flex flex-row justify-center items-center">
    <label htmlFor="fullname" className="mr-1 text-indigo-700"> Username:</label>
    <input onChange={handlechange} required="" className="input-field appearance-none border bg-violet-100 w-full py-2 px-4 rounded-full text-gray-700 leading-tight focus:outline-none focus:border-violet-500" type="text" placeholder="Enter Username" id="fullname" name="fullname" />
  </div>
  <div className="mb-4 flex flex-row justify-center items-center">
    <label htmlFor="email" className="mr-10 text-indigo-700"> Email:</label>
    <input onChange={handlechange} required="" className="input-field appearance-none border bg-violet-100 w-full py-2 px-4 rounded-full text-gray-700 leading-tight focus:outline-none focus:border-violet-500" type="text" placeholder="Enter Email" id="email" name="email" />
  </div>
  <div className="mb-4 flex flex-row justify-center items-center">
    <label className="mr-2 text-indigo-700" htmlFor="password"> Password:</label>
    <input onChange={handlechange} required="" className="input-field appearance-none border bg-violet-100 w-full py-2 px-4 rounded-full text-gray-700 leading-tight focus:outline-none focus:border-violet-500" type="password" placeholder="Enter Password" id="password" name="password" />
  </div>
  <div className="flex justify-center">
  <button type="submit" class="submit-btn mt-6 bg-violet-400  text-white font-bold  px-16 py-4 rounded-full focus:outline-none focus:shadow-outline hover:shadow-lg">Sign Up</button>
  </div>
</form>
</div>
        </>
    )
}