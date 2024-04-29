import { Link,NavLink } from "react-router-dom";
export default function Nav(){
    return(
        <div>
            <ol className='flex flex-row-reverse'>
                <Link className="p-4 text-black" to={'/login'}><li>Login</li></Link>
                <Link className="p-4 text-black" to={'/signup'}><li>sign up</li></Link>
                <Link className="p-4 text-black" to={'/home'}><li>home</li></Link>
            </ol>
        </div>
    )
}