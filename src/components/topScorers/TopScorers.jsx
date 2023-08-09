import React from "react";
import './index.css'
import { AiFillHome,  AiOutlineUsergroupAdd } from "react-icons/ai";
import { Link } from "react-router-dom";
import { Box, Divider, Typography } from "@mui/material";
import harrykane from '../data/harrykane1.png'
import totenhum from '../logos/totenhum.png'
import arsenal from '../logos/arsenal.png'
import psg from '../logos/psg.png'


const TopScores=()=>{
    return(
        <div className="stats-full">
             <header className='header-profile user-profile'>
       
      <div className='nav-titles'>
         <Link  to='/' className='to-home'>    <AiFillHome size={40}/>     </Link>
       
        <h1 className='is-title'>GPL Top Scrores & Assists</h1>
         <Link to='/' className='to-home2'><AiOutlineUsergroupAdd size={40}/></Link>
      </div>

    
      </header> 
      <section className="stats">
          <Box className='transfer-box'>
    <div className="option-selects input input-control is-large is-primary ">
            <select style={{
            width:'100%',background:'#eb09eb',color:'white',fontSize:'1.8rem'
            }}>
                <option disabled >Dashboard</option>
                <option value="player-stats">Player Stats</option>
                <option value="club-stats">Club Stats</option>
                <option value="club-stats">History</option>

            </select>
        </div>
        </Box>
        <h3 className="gpl-stats">2022/23 Premier League Player Stats</h3>
      </section>
      {/* player stats goals */}
      <section className="player-stats">
        <Box className="box box-stats">
            <h2>Goals</h2>
            <div className="player-section">
               <p style={{display:'flex',justifyContent:'space-between'}}>
               
                <p className="player-1 "> <span>1. </span> Harry Kane 
                
                 </p>
                
                <figure className="image is-128x128">
                    <img src={harrykane} alt="Harry Kane" />
                    <h3 className="num-1">46 </h3>
                </figure>
            
               </p>
                <span className="logo-stats">
                   <figure className="image  logo-stats box is-64x64">
                    <img src={totenhum} alt="totenhum" />
                    
                </figure>
                
                </span>

                
             
            </div>
              <Divider/>
              <Box>
                <p style={{display:'flex'}}>
               
                <p className="player-2"> 2.
                     <figure className="image is-64x64">
                    <img src={arsenal} alt="ARS" />
                </figure>
                 
                    <Box className="player-name">
                         <h3 >Bukayo Saka </h3> <h2 >32 <span className="tag">goals</span> </h2>
                                 
                        </Box>  
                        
                  
                      </p>

                   </p>
                    <Divider/>
                    <p style={{display:'flex'}}>
               
                <p className="player-2"> 3.
                     <figure className="image is-64x64">
                    <img src={psg} alt="psg" />
                </figure>
                 
                    <Box className="player-name">
                         <h3 >Neymah Jr </h3> <h2 >25<span className="tag">goals</span></h2>
                                 
                     
                        </Box>  
                        
                  
                      </p>

                   </p>
              </Box>
              <Divider/>
        </Box>

        {/* assists */}
         <Box className="box box-stats">
            <h2>Assists</h2>
            <div className="player-section">
               <p style={{display:'flex',justifyContent:'space-between'}}>
               
                <p className="player-1 "> <span>1. </span> Harry Kane 
                
                 </p>
                
                <figure className="image is-128x128">
                    <img src={harrykane} alt="Harry Kane" />
                     <h3 className="num-1">46 </h3>
                </figure>
            
               </p>
                <span className="logo-stats">
                   <figure className="image  logo-stats box is-64x64">
                    <img src={totenhum} alt="totenhum" />
                    
                </figure>
                
                </span>

                
             
            </div>
              <Divider/>
              <Box>
                <p style={{display:'flex'}}>
               
                <p className="player-2"> 2.
                     <figure className="image is-64x64">
                    <img src={arsenal} alt="ARS" />
                </figure>
                 
                    <Box className="player-name">
                         <h3 >Bukayo Saka </h3> <h2 >32 <span className="tag">Assists</span></h2>
                                 
                        </Box>  
                        
                  
                      </p>

                   </p>
                    <Divider/>
                    <p style={{display:'flex'}}>
               
                <p className="player-2"> 3.
                     <figure className="image is-64x64">
                    <img src={psg} alt="psg" />
                </figure>
                 
                    <Box className="player-name">
                         <h3 >Neymah Jr </h3> <h2 >25<span className="tag">Assists</span></h2>
                                 
                     
                        </Box>  
                        
                  
                      </p>

                   </p>
              </Box>
              <Divider/>
        </Box>

        {/* player ranking */}
         <Box className="box box-stats">
            <h2>Gamer Ranking</h2>
            <div className="player-section">
               <p style={{display:'flex',justifyContent:'space-between'}}>
               
                <p className="player-1 "> <span>1. </span> Harry Kane 
                
                 </p>
                
                <figure className="image is-128x128">
                    <img src={harrykane} alt="Harry Kane" />
                     <h3 className="num-1">46% </h3>
                </figure>
            
               </p>
                <span className="logo-stats">
                   <figure className="image  logo-stats box is-64x64">
                    <img src={totenhum} alt="totenhum" />
                    
                </figure>
                
                </span>

                
             
            </div>
              <Divider/>
              <Box>
                <p style={{display:'flex'}}>
               
                <p className="player-2"> 2.
                     <figure className="image is-64x64">
                    <img src={arsenal} alt="ARS" />
                </figure>
                 
                    <Box className="player-name">
                         <h3 >Bukayo Saka </h3> <h2 >32% </h2>
                                 
                        </Box>  
                        
                  
                      </p>

                   </p>
                    <Divider/>
                    <p style={{display:'flex'}}>
               
                <p className="player-2"> 3.
                     <figure className="image is-64x64">
                    <img src={psg} alt="psg" />
                </figure>
                 
                    <Box className="player-name">
                         <h3 >Neymah Jr </h3> <h2 >25% </h2>
                                 
                     
                        </Box>  
                        
                  
                      </p>

                   </p>
              </Box>
              <Divider/>
        </Box>
        
      </section>
      
        </div>
    ) 
}
export default TopScores;