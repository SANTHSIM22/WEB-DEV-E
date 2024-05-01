import "./login.css";
import Nav from "../components/header";
export default function Login(){
    return(
           <>
           <Nav/>
           <div className="h-screen flex justify-center items-center">
           <form className="bg-white shadow-2xl rounded-lg p-14 border-gray-600 border-2 max-w-sm mx-auto">
  <p className="text-2xl font-bold mb-4">Login</p>
  <div className="mb-4">
    <input required="" className="input-field appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500" type="text" placeholder="Enter Email" />
  </div>
  <div className="mb-6">
    <input required="" className="input-field appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500" type="password" placeholder="Enter Password" />
  </div>
  <a href="#" className="text-blue-500">Forgot your password?</a>
  <div>
  <button class="submit-btn mt-6 bg-gradient-to-r from-gray-700 via-gray-700 to-black text-white font-bold  px-8 py-4 rounded-full focus:outline-none focus:shadow-outline hover:shadow-lg">Login</button>
  </div>
</form>
</div>

           </>
    )
}