import axios from ".//config/axios";
import React,{useState} from "react";
import { useDispatch } from "react-redux";
import {loggedIn} from './action/isLoginAction'
const Login=(props)=>{
    const [email,setEmail]=useState('admin7@gmail.com')
    const [password,setPassword]=useState('admin7')
    const handleChange=(e)=>{
        if(e.target.name==='email'){
            setEmail(e.target.value)
        }
        else if(e.target.name==='password'){
            setPassword(e.target.value)
        }
    }
    const dispatch=useDispatch()
    const handleSubmit=(e)=>{
        e.preventDefault()
        const formData={
            email,password
        }
        axios.post('/users/login',formData)
        .then(response=>{
            const result=response.data
            if(result.hasOwnProperty('errors')){
                alert('error')
            }
            else{
                dispatch(loggedIn())
                localStorage.setItem('tokens',result.token)
                props.history.push('/AdminPage')
            }

        })
        .catch(err=>{
           alert(err.message)
        })
    }
    return(
        <div>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <input type='text'  className="form-control" placeholder="enter email" value={email} onChange={handleChange} name='email'/><br/>
                <input type='text'  className="form-control" placeholder="enter password" value={password} onChange={handleChange} name='password'/><br/>
                <input type='submit'  className="btn btn-warning"/><br/>
            </form>
        </div>
    )
}
export default Login