import React, { useEffect, useState } from 'react';
import { AiFillHome, AiOutlineUser } from 'react-icons/ai';
import './index.css'
import {  Box } from '@mui/material';
import pad1 from './images/pad1.jpg'
import { Link } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';

const Setprofile = () => {
const [gplProfile,setGplProfile]=useState([])

    useEffect(()=>{
      getProfiles();
    })
   // get player details
   const getProfiles=async()=>{
      const responce=await axios.get('https://localhost:8080/profile-user');
      setGplProfile(responce.data);
   }
   // delete profile
   const deleteGpl=async(id)=>{
      try {
         await axios.delete(`https://localhost:8080/profile-user/${id}`);
         getProfiles();
         toast.success("Profile deleted successfully")
      } catch (error) {
         console.log(error);
         toast.error("error while deleting..!!,try deleting again")
      }
   }
  return (
    <div className='pl-full'>
      <header className='header-profile user-profile'>
       
      <div className='nav-titles'>
         <Link  to='/' className='to-home'>    <AiFillHome size={40}/>     </Link>
       
        <h1 className='title'>Players Profile</h1>
         <Link to='/player-form' className='to-home2'><AiOutlineUser size={40}/></Link>
      </div>

    
      </header> 
    

      <section className='users'>
        <p className='heading' style={{fontSize:'2rem',fontWeight:'600'}}>
       Cards Below Consists of All Players On The GPL Table,Maximum Players add-up-to 20
        </p>
        <Box className="box-images"> 
        {gplProfile.map((profile,index)=>(
           <Box className='box'>
            <Box  className='images' >
                <h1 className='title'>{profile.firstName} &#160;<span> {profile.lastName}</span> </h1>
                
               <figure className=''>
                  <img className='imgs' src={profile.photo} alt='User Name'/>
               </figure>
               <div className='player-details'>
               
                   
                   <label className='label'><span style={{ color:'orange',fontWeight:'800'}}>
                  Team:</span> {profile.team}</label>

                   <label className='label'><span style={{ color:'orange',fontWeight:'800'}}>
                  Player Rating:</span> 67%</label>

                   <label className='label'><span style={{ color:'orange',fontWeight:'800'}}>
                  Games Played:</span> 14</label>

                   <label className='label'><span style={{ color:'orange',fontWeight:'800'}}>
                  GPL Position:</span> 2</label>

                 </div>
              <div className='last-buttons' >
               <Link>
                 <button className='button is-large is-link'>Edit</button>
               </Link>
             <Link>
              <button onClick={()=> deleteGpl(profile._id)} className='button is-large is-danger'>Delete</button>
             </Link>
              
              </div>
            </Box>
        
          </Box>
        ))}
        

           <Box className='box'>
            <Box  className='images' >
                <h1 className='title'>Brian &#160;<span> Bandi</span></h1>
               <figure className=''>
                  <img className='imgs' src={pad1} alt='User Name'/>
               </figure>
               <div className='player-details'>
               
                   
                   <label className='label'><span style={{ color:'orange',fontWeight:'800'}}>
                  Team:</span> Arsenal FC</label>

                   <label className='label'><span style={{ color:'orange',fontWeight:'800'}}>
                  Player Rating:</span> 67%</label>

                   <label className='label'><span style={{ color:'orange',fontWeight:'800'}}>
                  Games Played:</span> 14</label>

                   <label className='label'><span style={{ color:'orange',fontWeight:'800'}}>
                  GPL Position:</span> 2</label>

                 </div>
              
            </Box>
        
          </Box>

             <Box className='box'>
              <Box  className='images' >
                <h1 className='title'>Brian &#160;<span> Bandi</span></h1>
               <figure className=''>
                  <img className='imgs' src={pad1} alt='User Name'/>
               </figure>
               <div className='player-details'>
               
                   
                   <label className='label'><span style={{ color:'orange',fontWeight:'800'}}>
                  Team:</span> Arsenal FC</label>

                   <label className='label'><span style={{ color:'orange',fontWeight:'800'}}>
                  Player Rating:</span> 67%</label>

                   <label className='label'><span style={{ color:'orange',fontWeight:'800'}}>
                  Games Played:</span> 14</label>

                   <label className='label'><span style={{ color:'orange',fontWeight:'800'}}>
                  GPL Position:</span> 2</label>

                 </div>
              
            </Box>
        
          </Box>

           <Box className='box'>
             <Box  className='images' >
                <h1 className='title'>Brian &#160;<span> Bandi</span></h1>
               <figure className=''>
                  <img className='imgs' src={pad1} alt='User Name'/>
               </figure>
               <div className='player-details'>
               
                   
                   <label className='label'><span style={{ color:'orange',fontWeight:'800'}}>
                  Team:</span> Arsenal FC</label>

                   <label className='label'><span style={{ color:'orange',fontWeight:'800'}}>
                  Player Rating:</span> 67%</label>

                   <label className='label'><span style={{ color:'orange',fontWeight:'800'}}>
                  Games Played:</span> 14</label>

                   <label className='label'><span style={{ color:'orange',fontWeight:'800'}}>
                  GPL Position:</span> 2</label>

                 </div>
              
            </Box>
        
          </Box>
        </Box>
         {/* second-row */}
       <Box className="box-images"   
      >
          <Box className='box'>
             <Box  className='images' >
                <h1 className='title'>Brian &#160;<span> Bandi</span></h1>
               <figure className=''>
                  <img className='imgs' src={pad1} alt='User Name'/>
               </figure>
               <div className='player-details'>
               
                   
                   <label className='label'><span style={{ color:'orange',fontWeight:'800'}}>
                  Team:</span> Arsenal FC</label>

                   <label className='label'><span style={{ color:'orange',fontWeight:'800'}}>
                  Player Rating:</span> 67%</label>

                   <label className='label'><span style={{ color:'orange',fontWeight:'800'}}>
                  Games Played:</span> 14</label>

                   <label className='label'><span style={{ color:'orange',fontWeight:'800'}}>
                  GPL Position:</span> 2</label>

                 </div>
              
            </Box>
        
          </Box>

             <Box className='box'>
             <Box  className='images' >
                <h1 className='title'>Brian &#160;<span> Bandi</span></h1>
               <figure className=''>
                  <img className='imgs' src={pad1} alt='User Name'/>
               </figure>
               <div className='player-details'>
               
                   
                   <label className='label'><span style={{ color:'orange',fontWeight:'800'}}>
                  Team:</span> Arsenal FC</label>

                   <label className='label'><span style={{ color:'orange',fontWeight:'800'}}>
                  Player Rating:</span> 67%</label>

                   <label className='label'><span style={{ color:'orange',fontWeight:'800'}}>
                  Games Played:</span> 14</label>

                   <label className='label'><span style={{ color:'orange',fontWeight:'800'}}>
                  GPL Position:</span> 2</label>

                 </div>
              
            </Box>
        
          </Box>

             <Box className='box'>
             <Box  className='images' >
                <h1 className='title'>Brian &#160;<span> Bandi</span></h1>
               <figure className=''>
                  <img className='imgs' src={pad1} alt='User Name'/>
               </figure>
               <div className='player-details'>
               
                   
                   <label className='label'><span style={{ color:'orange',fontWeight:'800'}}>
                  Team:</span> Arsenal FC</label>

                   <label className='label'><span style={{ color:'orange',fontWeight:'800'}}>
                  Player Rating:</span> 67%</label>

                   <label className='label'><span style={{ color:'orange',fontWeight:'800'}}>
                  Games Played:</span> 14</label>

                   <label className='label'><span style={{ color:'orange',fontWeight:'800'}}>
                  GPL Position:</span> 2</label>

                 </div>
              
            </Box>
        
          </Box>

           <Box className='box'>
            <Box  className='images' >
                <h1 className='title'>Brian &#160;<span> Bandi</span></h1>
               <figure className=''>
                  <img className='imgs' src={pad1} alt='User Name'/>
               </figure>
               <div className='player-details'>
               
                   
                   <label className='label'><span style={{ color:'orange',fontWeight:'800'}}>
                  Team:</span> Arsenal FC</label>

                   <label className='label'><span style={{ color:'orange',fontWeight:'800'}}>
                  Player Rating:</span> 67%</label>

                   <label className='label'><span style={{ color:'orange',fontWeight:'800'}}>
                  Games Played:</span> 14</label>

                   <label className='label'><span style={{ color:'orange',fontWeight:'800'}}>
                  GPL Position:</span> 2</label>

                 </div>
              
            </Box>
        
          </Box>
        </Box>
        {/* 3rd-row */}
        <Box className="box-images"   
      >
          <Box className='box'>
             <Box  className='images' >
                <h1 className='title'>Brian &#160;<span> Bandi</span></h1>
               <figure className=''>
                  <img className='imgs' src={pad1} alt='User Name'/>
               </figure>
               <div className='player-details'>
               
                   
                   <label className='label'><span style={{ color:'orange',fontWeight:'800'}}>
                  Team:</span> Arsenal FC</label>

                   <label className='label'><span style={{ color:'orange',fontWeight:'800'}}>
                  Player Rating:</span> 67%</label>

                   <label className='label'><span style={{ color:'orange',fontWeight:'800'}}>
                  Games Played:</span> 14</label>

                   <label className='label'><span style={{ color:'orange',fontWeight:'800'}}>
                  GPL Position:</span> 2</label>

                 </div>
              
            </Box>
        
          </Box>

             <Box className='box'>
             <Box  className='images' >
                <h1 className='title'>Brian &#160;<span> Bandi</span></h1>
               <figure className=''>
                  <img className='imgs' src={pad1} alt='User Name'/>
               </figure>
               <div className='player-details'>
               
                   
                   <label className='label'><span style={{ color:'orange',fontWeight:'800'}}>
                  Team:</span> Arsenal FC</label>

                   <label className='label'><span style={{ color:'orange',fontWeight:'800'}}>
                  Player Rating:</span> 67%</label>

                   <label className='label'><span style={{ color:'orange',fontWeight:'800'}}>
                  Games Played:</span> 14</label>

                   <label className='label'><span style={{ color:'orange',fontWeight:'800'}}>
                  GPL Position:</span> 2</label>

                 </div>
              
            </Box>
        
          </Box>

             <Box className='box'>
             <Box  className='images' >
                <h1 className='title'>Brian &#160;<span> Bandi</span></h1>
               <figure className=''>
                  <img className='imgs' src={pad1} alt='User Name'/>
               </figure>
               <div className='player-details'>
               
                   
                   <label className='label'><span style={{ color:'orange',fontWeight:'800'}}>
                  Team:</span> Arsenal FC</label>

                   <label className='label'><span style={{ color:'orange',fontWeight:'800'}}>
                  Player Rating:</span> 67%</label>

                   <label className='label'><span style={{ color:'orange',fontWeight:'800'}}>
                  Games Played:</span> 14</label>

                   <label className='label'><span style={{ color:'orange',fontWeight:'800'}}>
                  GPL Position:</span> 2</label>

                 </div>
              
            </Box>
        
          </Box>

           <Box className='box'>
            <Box  className='images' >
                <h1 className='title'>Brian &#160;<span> Bandi</span></h1>
               <figure className=''>
                  <img className='imgs' src={pad1} alt='User Name'/>
               </figure>
               <div className='player-details'>
               
                   
                   <label className='label'><span style={{ color:'orange',fontWeight:'800'}}>
                  Team:</span> Arsenal FC</label>

                   <label className='label'><span style={{ color:'orange',fontWeight:'800'}}>
                  Player Rating:</span> 67%</label>

                   <label className='label'><span style={{ color:'orange',fontWeight:'800'}}>
                  Games Played:</span> 14</label>

                   <label className='label'><span style={{ color:'orange',fontWeight:'800'}}>
                  GPL Position:</span> 2</label>

                 </div>
              
            </Box>
        
          </Box>
        </Box>
        {/* 4th-row */}
         <Box className="box-images"   
      >
          <Box className='box'>
            <Box  className='images' >
                <h1 className='title'>Brian &#160;<span> Bandi</span></h1>
               <figure className=''>
                  <img className='imgs' src={pad1} alt='User Name'/>
               </figure>
               <div className='player-details'>
               
                   
                   <label className='label'><span style={{ color:'orange',fontWeight:'800'}}>
                  Team:</span> Arsenal FC</label>

                   <label className='label'><span style={{ color:'orange',fontWeight:'800'}}>
                  Player Rating:</span> 67%</label>

                   <label className='label'><span style={{ color:'orange',fontWeight:'800'}}>
                  Games Played:</span> 14</label>

                   <label className='label'><span style={{ color:'orange',fontWeight:'800'}}>
                  GPL Position:</span> 2</label>

                 </div>
              
            </Box>
        
          </Box>

              <Box className='box'>
             <Box  className='images' >
                <h1 className='title'>Brian &#160;<span> Bandi</span></h1>
               <figure className=''>
                  <img className='imgs' src={pad1} alt='User Name'/>
               </figure>
               <div className='player-details'>
               
                   
                   <label className='label'><span style={{ color:'orange',fontWeight:'800'}}>
                  Team:</span> Arsenal FC</label>

                   <label className='label'><span style={{ color:'orange',fontWeight:'800'}}>
                  Player Rating:</span> 67%</label>

                   <label className='label'><span style={{ color:'orange',fontWeight:'800'}}>
                  Games Played:</span> 14</label>

                   <label className='label'><span style={{ color:'orange',fontWeight:'800'}}>
                  GPL Position:</span> 2</label>

                 </div>
              
            </Box>
          </Box>

            <Box className='box'>
             <Box  className='images' >
                <h1 className='title'>Brian &#160;<span> Bandi</span></h1>
               <figure className=''>
                  <img className='imgs' src={pad1} alt='User Name'/>
               </figure>
               <div className='player-details'>
               
                   
                   <label className='label'><span style={{ color:'orange',fontWeight:'800'}}>
                  Team:</span> Arsenal FC</label>

                   <label className='label'><span style={{ color:'orange',fontWeight:'800'}}>
                  Player Rating:</span> 67%</label>

                   <label className='label'><span style={{ color:'orange',fontWeight:'800'}}>
                  Games Played:</span> 14</label>

                   <label className='label'><span style={{ color:'orange',fontWeight:'800'}}>
                  GPL Position:</span> 2</label>

                 </div>
              
            </Box>
        
          </Box>

            <Box className='box'>
             <Box  className='images' >
                <h1 className='title'>Brian &#160;<span> Bandi</span></h1>
               <figure className=''>
                  <img className='imgs' src={pad1} alt='User Name'/>
               </figure>
               <div className='player-details'>
               
                   
                   <label className='label'><span style={{ color:'orange',fontWeight:'800'}}>
                  Team:</span> Arsenal FC</label>

                   <label className='label'><span style={{ color:'orange',fontWeight:'800'}}>
                  Player Rating:</span> 67%</label>

                   <label className='label'><span style={{ color:'orange',fontWeight:'800'}}>
                  Games Played:</span> 14</label>

                   <label className='label'><span style={{ color:'orange',fontWeight:'800'}}>
                  GPL Position:</span> 2</label>

                 </div>
              
            </Box>
        
          </Box>
        </Box>
        {/* 5th row */}
        <Box className="box-images"   
      >
          <Box className='box'>
              <Box  className='images' >
                <h1 className='title'>Brian &#160;<span> Bandi</span></h1>
               <figure className=''>
                  <img className='imgs' src={pad1} alt='User Name'/>
               </figure>
               <div className='player-details'>
               
                   
                   <label className='label'><span style={{ color:'orange',fontWeight:'800'}}>
                  Team:</span> Arsenal FC</label>

                   <label className='label'><span style={{ color:'orange',fontWeight:'800'}}>
                  Player Rating:</span> 67%</label>

                   <label className='label'><span style={{ color:'orange',fontWeight:'800'}}>
                  Games Played:</span> 14</label>

                   <label className='label'><span style={{ color:'orange',fontWeight:'800'}}>
                  GPL Position:</span> 2</label>

                 </div>
              
            </Box>
        
          </Box>

             <Box className='box'>
             <Box  className='images' >
                <h1 className='title'>Brian &#160;<span> Bandi</span></h1>
               <figure className=''>
                  <img className='imgs' src={pad1} alt='User Name'/>
               </figure>
               <div className='player-details'>
               
                   
                   <label className='label'><span style={{ color:'orange',fontWeight:'800'}}>
                  Team:</span> Arsenal FC</label>

                   <label className='label'><span style={{ color:'orange',fontWeight:'800'}}>
                  Player Rating:</span> 67%</label>

                   <label className='label'><span style={{ color:'orange',fontWeight:'800'}}>
                  Games Played:</span> 14</label>

                   <label className='label'><span style={{ color:'orange',fontWeight:'800'}}>
                  GPL Position:</span> 2</label>

                 </div>
              
            </Box>
        
          </Box>

             <Box className='box'>
             <Box  className='images' >
                <h1 className='title'>Brian &#160;<span> Bandi</span></h1>
               <figure className=''>
                  <img className='imgs' src={pad1} alt='User Name'/>
               </figure>
               <div className='player-details'>
               
                   
                   <label className='label'><span style={{ color:'orange',fontWeight:'800'}}>
                  Team:</span> Arsenal FC</label>

                   <label className='label'><span style={{ color:'orange',fontWeight:'800'}}>
                  Player Rating:</span> 67%</label>

                   <label className='label'><span style={{ color:'orange',fontWeight:'800'}}>
                  Games Played:</span> 14</label>

                   <label className='label'><span style={{ color:'orange',fontWeight:'800'}}>
                  GPL Position:</span> 2</label>

                 </div>
              
            </Box>
        
          </Box>

            <Box className='box'>
            <Box  className='images' >
                <h1 className='title'>Brian &#160;<span> Bandi</span></h1>
               <figure className=''>
                  <img className='imgs' src={pad1} alt='User Name'/>
               </figure>
               <div className='player-details'>
               
                   
                   <label className='label'><span style={{ color:'orange',fontWeight:'800'}}>
                  Team:</span> Arsenal FC</label>

                   <label className='label'><span style={{ color:'orange',fontWeight:'800'}}>
                  Player Rating:</span> 67%</label>

                   <label className='label'><span style={{ color:'orange',fontWeight:'800'}}>
                  Games Played:</span> 14</label>

                   <label className='label'><span style={{ color:'orange',fontWeight:'800'}}>
                  GPL Position:</span> 2</label>

                 </div>
              
            </Box>
          </Box>
        </Box>
         
      </section>
    </div>
  );
}

export default Setprofile;
