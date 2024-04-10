import { Link,NavLink } from "react-router-dom";
export default function Nav(){
    return(
        <div>
            <ol className='flex flex-row'>
                <Link to={'/login'}><li>Login</li></Link>
                <Link to={'/signup'}><li>sign up</li></Link>
                <Link to={'/home'}><li>home</li></Link>
            </ol>
        </div>
    )
}