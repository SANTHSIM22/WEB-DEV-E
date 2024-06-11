import "./login.css";
import Nav from "../components/header";
import { supabase } from "./client";
export default function Login(){
    return(
           <>
           <Nav/>
           <div className="h-screen flex justify-center items-center ">
           <form className=" sm:p-10  bg-indigo-300 shadow-2xl rounded-lg p-8 max-w-sm mx-auto">
            <div>
  <p className="text-5xl font-mono text-center font-bold mb-6 text-indigo-700 roboto-regular-italic ">Login</p></div>
  <div className="mb-4 flex flex-row justify-center items-center">
    <label htmlFor="email" className="mr-1 text-indigo-700"> Username:</label>
    <input required="" className="input-field appearance-none border bg-violet-100 w-full py-2 px-4 rounded-full text-gray-700 leading-tight focus:outline-none focus:border-violet-500" type="text" placeholder="Enter Username" id="email" name="email" />
  </div>
  <div className="mb-4 flex flex-row justify-center items-center">
    <label className="mr-2 text-indigo-700" htmlFor="password"> Password:</label>
    <input required="" className="input-field appearance-none border bg-violet-100 w-full py-2 px-4 rounded-full text-gray-700 leading-tight focus:outline-none focus:border-violet-500" type="text" placeholder="Enter Password" id="password" name="password" />
  </div>
  <div className="flex justify-center">
  <a href="#" className="text-indigo-700">Forgot your password?</a>
  </div>
  <div className="flex justify-center">
  <button class="submit-btn mt-6 bg-violet-400  text-white font-bold  px-16 py-4 rounded-full focus:outline-none focus:shadow-outline hover:shadow-lg">Login</button>
  </div>
</form>
</div>

           </>
    )
}