import axios from "axios";
import React, { useEffect, useState } from "react";
import Table from "./Table";
import {useDispatch } from "react-redux";
import {init} from './action/dataAction'
const AdminPage=(props)=>{
    const [filterBy,setFilterBy]=useState('')
    const dispatch=useDispatch()

    useEffect(()=>{
        axios.get('https://dct-application-form.herokuapp.com/users/application-forms')
        .then((response)=>{
           dispatch(init(response.data))
        })
        .catch((err)=>{
            alert(err.message)
        })
    },[])
    return(
        <div>
            <h1>AdminPage</h1>
            <div>
                <button className="btn btn-outline-primary" onClick={()=>{setFilterBy('')}}>All Applicants</button>
                <button className="btn btn-outline-primary" onClick={()=>{setFilterBy('Front-End Developer')}}>Front End Developer</button>
                <button className="btn btn-outline-primary"onClick={()=>{setFilterBy('Node.js Developer')}}>Node JS Developer</button>
                <button className="btn btn-outline-primary"onClick={()=>{setFilterBy('MEAN Stack Developer')}}>MEAN Stack Developer</button>
                <button className="btn btn-outline-primary"onClick={()=>{setFilterBy('FULL Stack Developer')}}>FULL Stack Developer</button>
            </div>
            {<Table filterBy={filterBy} />}
        </div>
    )
}
export default AdminPage