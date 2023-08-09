import React, { useState } from "react";
import './index.css'
import { Box,  TextField, useMediaQuery } from "@mui/material";
import { AiFillHome } from "react-icons/ai";
import { Link, Navigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const Admin=()=>{
    const isNonMobile=useMediaQuery("(min-width:600px)");
    const [playerName,setPlayerName]=useState('');
    const [playerClub,setPlayerClub]= useState('');
    const [playerId, setPlayerId]=useState('');
    const [Percentage,setPercentage]=useState('');
    const [played,setPlayed]=useState('');
    const [win,setWin]= useState('');
    const [draw,setDraw]= useState('');
    const [lost,setLost]= useState('');
    const [goalDiffrence,setGoalDiffrence]= useState('');
    const [goalAggregate,setAggregate]=useState('');
    const [points,setPoints]=useState('');

    const saveGpl=async(e)=>{
      e.preventDefault();
      try {
        await axios.post('https://localhost:8080/admin',{
          playerName,playerClub,playerId,Percentage,played,win,draw,lost,goalAggregate,
          goalDiffrence,points
        });
        toast.success("Player info added")
        Navigate('/')
      } catch (error) {
      if(!playerName || !playerId || !win || !Percentage || !playerClub || !draw || !lost || !goalAggregate 
      ||  !goalDiffrence || !points ){
          return toast.error("All fields are required")
        }
      }
    }

    return(
        <div className="full-admin">
            <header className="header-admin ">
                <h1 className="title heading"> Admin Only Form</h1>
               
            </header>
            <Box className="admin-home">
                <div style={{padding:'1% 2rem'}}>
                    <Link to='/'>
                    <Box color='orange' className="home-admin">
                         <AiFillHome size={45}/>
                    </Box>
                       
                
                    </Link>
                   
                </div>
            </Box>

            {/* section-fill form */}
            <section className="admin-form">
               
                 <div className="text-1 title heading">

                <h1>Strickly!! Only For Admins</h1>
                        </div>
                  
                    <div className="admin-fill"> 
                   
                   
                        <form action="">
                           <Box display='grid'  fontSize='6rem' gap='30px' gridTemplateColumns='repeat(4,minmax(0,1fr))'
                         sx={{"&>div":{gridColumn: isNonMobile ? undefined : 'span 4' }}}>
                          <>
                          <TextField
                          className=""
                          type="text"
                          required
                          label='Player Name'
                          sx={{gridColumn:'span 2',background:'white',}}
                          />

                           <TextField
                           type="text"
                           required
                          label='Player Club'
                          sx={{gridColumn:'span 2',background:'white'}}
                          />

                             <TextField
                             type="number"
                             required
                          label='Player id'
                          sx={{gridColumn:'span 2',background:'white'}}
                          />

                             <TextField
                             type="text"
                          label='Percentage Actured'
                          sx={{gridColumn:'span 2',background:'white'}}
                          />

                          {/* points */}
                             <TextField
                             type="number"
                             required
                          label='Played'
                          sx={{gridColumn:'span 2',background:'white'}}
                          />

                             <TextField
                          label='win'
                          sx={{gridColumn:'span 2',background:'white'}}
                          />

                            <TextField
                             type="number"
                             required
                          label='Draw'
                          sx={{gridColumn:'span 2',background:'white'}}
                          />

                            <TextField
                             type="number"
                             required
                          label='Lose'
                          sx={{gridColumn:'span 2',background:'white'}}
                          />

                            <TextField
                             type="number"
                             required
                          label='Goal Diffrence'
                          sx={{gridColumn:'span 2',background:'white'}}
                          />

                            <TextField
                             type="number"
                             required
                          label='Goal Aggregate'
                          sx={{gridColumn:'span 2',background:'white'}}
                          />

                           
                            <TextField
                             type="number"
                             required
                          label='Points'
                          sx={{gridColumn:'span 2',background:'white'}}
                          />
                          </>
                        </Box>
                         <Box display='flex' justifyContent='center' className='gpl-btn'>
              <button style={{
                width:'100%',marginTop:'4rem',height:'5vh'
              }} className="button is-primary is-medium ">
                <span style={{fontSize:'3rem',fontFamily:'sans-serif'}}>
                  Submit
                </span>
              </button>
            </Box>

                <Box display='flex' justifyContent='center' className='gpl-btn'>
              <button style={{
                width:'100%',marginTop:'4rem',height:'5vh'
              }} className="button is-danger is-medium ">
                <span style={{fontSize:'3rem',fontFamily:'sans-serif'}}>
                  Edit 
                </span>
              </button>
            </Box>

             
                        </form>
                        </div>
                
               
            </section>
            
        </div>
    )
}
export default Admin