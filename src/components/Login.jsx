import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import "./Login.css"

export const Login = () => {

    const [username , setusername] = useState("")
    const [password , setpassword] = useState("")
    const navigate = useNavigate();



    function input1Handler(event){
        setusername(event.target.value)
    }
    function input2Handler(event){
        setpassword(event.target.value)
    }
    function result(){
        if(username === "admin" && password === "123"){
            // alert("your id is correct")
            navigate("Layout")
            
        }
        else{
            alert("please enter valid username or password")
        }

    }

  return (
    <div className='main'>
        <h1>LOG IN</h1>
        <p>Username: <br /> <input type="text" value={username} onChange={input1Handler} /></p>
        <p>password: <br /><input type="password" value={password} onChange={input2Handler} /></p>
        <button onClick={result}>login</button>
    </div>
  )
}

export default Login
