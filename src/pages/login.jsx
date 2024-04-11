
import Nav from "../components/header";
export default function Login(){
    return(
           <>
           <Nav/>
            <div className=" flex justify-center items-center h-screen">
      <div className="bg-white p-8 rounded-md shadow-md">
        <h2 className="text-2xl font-semibold mb-6 text-center">Login</h2>
        <form className="space-y-4" action="#" method="POST">
          <div>
            <label htmlFor="username" className="block font-medium">Username:</label>
            <input type="text" id="username" name="username" className="mt-1 px-4 py-2 block w-full rounded-md border border-gray-300 focus:outline-none focus:border-blue-500" required />
          </div>
          <div>
            <label htmlFor="password" className="block font-medium">Password:</label>
            <input type="password" id="password" name="password" className="mt-1 px-4 py-2 block w-full rounded-md border border-gray-300 focus:outline-none focus:border-blue-500" required />
          </div>
          <button type="submit" className="w-full bg-blue-500 text-white font-semibold py-2 rounded-md transition duration-300 hover:bg-blue-600">Login</button>
        </form>
      </div>
    </div>
           </>
    )
}