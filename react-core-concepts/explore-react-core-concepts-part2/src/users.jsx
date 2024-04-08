import { useEffect, useState } from "react"
import User from "./user"

export default function Users(){
    const [users, setUsers] = useState([])
    useEffect(()=>{
        fetch('http://jsonplaceholder.typicode.com/users')
        .then(response=>response.json())
        .then(data => setUsers(data))
    },[])
    return (
        <>
       <h4>User Information</h4>
        {
            users.map((user)=> <User user={user}></User>)
        }
        </>
    )
}