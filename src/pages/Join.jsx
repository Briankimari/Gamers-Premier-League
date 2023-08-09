import React, { useState } from "react";
import { AiFillHome, AiOutlineUsergroupAdd } from "react-icons/ai";
import { Link, Navigate } from "react-router-dom";
import './index.css'
import { Box, TextField, useMediaQuery } from "@mui/material";
import axios from "axios";
import { toast } from "react-toastify";

const Join=()=>{
     const isNonMobile=useMediaQuery("(min-width:600px)");
     const [firstName,setFirstName]=useState('');
     const [lastName,setLastName]=useState('');
     const [email,setEmail]=useState('');
     const [password,setPassword]=useState();
     const [confirmPassword,setConfirmPassword]=useState('')

     const saveJoin=async(e)=>{
      e.preventDefault();

      try {
        await axios.post('https://localhost:8080/join',{
          firstName,lastName,email,password
        });
        toast.success("logged in successfuly");
        Navigate('/')
      } catch (error) {
        if(!firstName || !lastName || !email || !password){
          return toast.error("All fields are required!!")
        };
        if(password.length < 6){
          return toast.error("Password too short,Please input more than 6 characters")
        };
        if(password !== confirmPassword) {
          toast.error("Password does not match");
        }
      }
     }
    return(
        <div>
              <header className='header-profile user-profile'>
       
      <div className='nav-titles'>
         <Link  to='/' className='to-home'>    <AiFillHome size={40}/>     </Link>
       
        <h1 className='is-title'>Welcome To GPL Play & Win Everything</h1>
         <Link to='/' className='to-home2'><AiOutlineUsergroupAdd size={40}/></Link>
      </div>

    
      </header> 
      {/* Auth section */}
      <section className="auth-section">
       <div className="auth">
        <Link to='/Admin'>
        <button className="button is-danger is-large">
            Auth Info Entry 
        </button>
        </Link>
        
      </div>
      </section>
      <section className="reg-section">
        <h2>Join Gpl To Start Building Your Team</h2>
        <div className="form-section">
        <form onSubmit={saveJoin}>
            <Box display='grid' mt='3rem' fontSize='4rem' gap='60px' gridTemplateColumns='repeat(4,minmax(0,1fr))'
  sx={{"&>div":{gridColumn: isNonMobile ? undefined : 'span 4' }}}>
            <>
            <TextField
            name="firstName"
            value={firstName}
            onChange={(e)=>setFirstName(e.target.value)}
            label='First Name'
            required
            sx={{gridColumn:'span 2'}}
            
            />

            <TextField
            name="lastName"
            value={lastName}
            onChange={(e)=>setLastName(e.target.value)}
            label="Last Name"
            required
            sx={{gridColumn:'span 2'}}
             
            />

              <TextField
            name="email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            type="email"
            label="Email"
            required
            sx={{gridColumn:'span 4'}}
             
            />

              <TextField
            name="password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            type="password"
            label="Password"
            required
            sx={{gridColumn:'span 4'}}
             
            />

              <TextField
            type="password"
            name="password"
            value={confirmPassword}
            onChange={(e)=>setConfirmPassword(e.target.value)}
            label="Confirm Password"
            required
            sx={{gridColumn:'span 4'}}
             
            />
            
            </>
           
          
            </Box>
            <Box display='flex' justifyContent='center' className='gpl-btn'>
              <button type="submit" style={{
                width:'100%',marginTop:'4rem',height:'5vh'
              }} className="button is-link is-large ">
                <span style={{fontSize:'3rem',fontFamily:'sans-serif',color:'yellow'}}>
                  JOIN GPL
                </span>
              </button>
            </Box>
        </form>
          
        </div>
       
      </section>
     
        </div>
    )
}
export default Join; 