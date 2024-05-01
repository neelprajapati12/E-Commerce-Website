import React, { useState } from 'react'
import './CSS/LoginSignup.css'
import { Link } from 'react-router-dom'

function LoginSignup(){

    const [formData, setFormData] = useState({
        username:"",
        password:"",
        email:""
    })

    const login = async () => {
        console.log("Signup Function executed",formData)
        let responseData
        await fetch('http://localhost:4000/login',{
            method:"POST",
            headers:{
                Accept:'application/form-data',
                'Content-Type':'application/json',
            },
            body: JSON.stringify(formData),
        }).then((response) => response.json()).then((data)=>responseData=data)

        if(responseData.success){
            localStorage.setItem('auth-token',responseData.token)
            window.location.replace("/")
        }
        else{
            alert(responseData.errors)
        }
    }


    const changeHandler = (e) => {
        setFormData({...formData,[e.target.name]:e.target.value})
    }

  return (
    <div className='loginsignup'>
        <div className='loginsignup-container'>
            <h1>Login</h1>
            <div className='loginsignup-fields'>
                <input type='email' name='email' value={formData.email} onChange={changeHandler} placeholder='Email Address' />
                <input type='password' name='password' value={formData.password} onChange={changeHandler} placeholder='Password' />
            </div>
            <div className='loginsignup-agree'>
                <input type="checkbox"/><span>By continuing, i agree to the terms and conditions.</span>
            </div>
            <button onClick={()=>{login()}}>Continue</button>
            <p className='loginsignup-login'>Create an account?<span><Link to='/signup'>Sign Up here</Link></span></p>
        </div>
    </div>
  )
}

export default LoginSignup 
