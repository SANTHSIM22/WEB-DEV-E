import "./login.css";
import Nav from "../components/header";
export default function Login(){
    return(
           <>
           <Nav/>
            <div>
              <h1>LOGIN</h1>
              <form >
                <div>
                <label htmlFor="username"> Username: </label>
                <input className="" type="text" placeholder="ENTER USERNAME" id="username"></input>
                </div>
                <div>
                <label htmlFor="password">Password:</label>
                <input className="" type="password" id="password" placeholder="ENTER PASSWORD"></input>
                </div>
                <button type="submit">Login</button>

              </form>
            </div>
           </>
    )
}