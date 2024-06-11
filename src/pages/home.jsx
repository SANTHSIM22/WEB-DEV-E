import Nav from "../components/header";
import { supabase } from "../superbase";
export default function Home(){
    console.log(supabase)
    return (
        <>
        <Nav/>
        <h1>HOME</h1>
   
        </>
    )
}