import React, { useEffect, useState } from "react";
import axios from 'axios'
const FormPage=(props)=>{
    const [obj,setobj]=useState({})
    const [fullName,setFullName]=useState('')
    const [emailAddress,setEmailAddress]=useState('')
    const [contactNumber,setContactNumber]=useState('')
    const [applyingForJob,setApplyingForJob]=useState('')
    const [experience,setExperience]=useState('')
    const [technicalSkill,setTechnicalSkill]=useState('')
    const [success,setsuccess]=useState(false)
    const handleFullNameChange=(e)=>{
        setFullName(e.target.value)
    }
    const handleEmailAddressChange=(e)=>{
        setEmailAddress(e.target.value)
    }
    const handleContactNumberChange=(e)=>{
        setContactNumber(e.target.value)
    }
    const handleApplyingForJobChange=(e)=>{
        setApplyingForJob(e.target.value)
    }
    const handleExperienceChange=(e)=>{
        setExperience(e.target.value)
    }
    const handleTechnicalSkillChange=(e)=>{
        setTechnicalSkill(e.target.value)
    }
    
    const handleSubmit=(e)=>{
        e.preventDefault()
        const temp={
            name:fullName,
            email:emailAddress,
            phone:contactNumber,
            skills:technicalSkill,
            jobTitle:applyingForJob,
            experience:experience
        }
        setobj(temp)
        setFullName('')
        setEmailAddress('')
        setContactNumber('')
        setApplyingForJob('')
        setExperience('')
        setExperience('')
        setTechnicalSkill('')
    }
    useEffect(()=>{
        axios.post('http://dct-application-form.herokuapp.com/users/application-form',obj)
        .then((response)=>{
            if(!response.data.hasOwnProperty('errors')){
                setsuccess(true)
            }
        })
        .catch((err)=>{
            alert(err.message)
        })
    },[obj])
   
    return(
        <div className="container">
            <h1>Apply For Job</h1>
            <form onSubmit={handleSubmit}>
               {// <img src='https://images.unsplash.com/photo-1520209759809-a9bcb6cb3241?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1nfGVufDB8fDB8fA%3D%3D&w=1000&q=80' alt='hai'/>
               }
                <div className='form-group row'><label className="col-sm-2 col-form-label">Full Name</label>
                <div className="col-sm-10">
                <input type='text'className="form-control" value={fullName} onChange={handleFullNameChange}/></div></div><br/><hr/>
                <div  className='form-group row'><label className="col-sm-2 col-form-label">Email Address</label>
                <div className="col-sm-10">
                <input type='email'className="form-control" placeholder="example@email.com" value={emailAddress}  onChange={handleEmailAddressChange}/></div></div><br/><hr/>
                <div  className='form-group row'> <label  className="col-sm-2 col-form-label">Contact Number</label>
                <div className="col-sm-10">
                <input type='text'className="form-control" placeholder="+91 91644432121" value={contactNumber}  onChange={handleContactNumberChange}/></div></div><br/><hr/>
                <div  className='form-group row'><label className="col-sm-2 col-form-label">Applying For Job</label>
                <div className="col-sm-10">
                <select className="form-control" value={applyingForJob}  onChange={handleApplyingForJobChange}>
                    <option >---select---</option>
                    <option  value='Front-End Developer'>Front End Developer</option>
                    <option  value='Node.js Developer'>Node JS Developer</option>
                    <option  value='MEAN Stack.Developer'>MEAN Stack Developer</option>
                    <option  value='FULL Stack Developer'>FULL Stack Developer</option>
                </select><br/><hr/></div></div>
                <div  className='form-group row'><label className="col-sm-2 col-form-label">Experience</label>
                <div className="col-sm-10">
                <input type='text'className="form-control" placeholder="Experience(2 years,3 months" value={experience}  onChange={handleExperienceChange}/></div></div><br/><hr/>
                <div  className='form-group row'><label className="col-sm-2 col-form-label">Technical Skill</label>
                <div className="col-sm-10">
                <textarea className="form-control" placeholder="Technival Skills" value={technicalSkill}  onChange={handleTechnicalSkillChange}></textarea></div></div><br/><hr/>
                {success&&<h2 style={{color:'green'}}>Submitted SuccessFully</h2>}
                <input type='submit'className= "btn btn-primary" value='Send Application'/>
            </form>
        </div>
    )
}
export default FormPage