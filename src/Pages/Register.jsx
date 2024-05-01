import React, { useState } from 'react'
import './CSS/LoginSignup.css'
import { Link } from 'react-router-dom'


function Register(){

    const [formData, setFormData] = useState({
        username:"",
        password:"",
        email:""
    })


    const signup = async () => {
        console.log("Signup Function executed",formData)
        let responseData
        await fetch('http://localhost:4000/signup',{
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
            <h1>Sign Up</h1>
            <div className='loginsignup-fields'>
                <input type='text' name='username' value={formData.username} onChange={changeHandler} placeholder='Your Name' />
                <input type='email' name='email' value={formData.email} onChange={changeHandler} placeholder='Email Address' />
                <input type='password' name='password' value={formData.password} onChange={changeHandler} placeholder='Password' />
            </div>
            <div className='loginsignup-agree'>
                <input type="checkbox"/><span>By continuing, i agree to the terms and conditions.</span>
            </div>
            <button onClick={()=>{signup()}}>Continue</button>
            <p className='loginsignup-login'>Already have an account?<span><Link to='/login'>Login here</Link></span></p>
        </div>
    </div>
  )
}

export default Register 
