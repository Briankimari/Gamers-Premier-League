import React from "react";
import {Box, Button} from "@mui/material"
import { AiFillHome, AiOutlineUser } from "react-icons/ai";
import { Link } from "react-router-dom";
import bundeslinga from '../logos/bundesliga.png'
import laliga from '../logos/laliga.png'
import serieA from '../logos/serialA.png'
import ligue1 from '../logos/ligue1.png'
import premierLeague from '../logos/premierLeague.png'
import premierLeague2 from '../logos/premierLeague2.png'
import arsenal from '../logos/arsenal.png'
import chelsea from '../logos/chelsea.png'
import manu from '../logos/manchester-united.png'
import newcastle from '../logos/newcastle.png'
import astonvilla from '../logos/astonvilla.png'
import liverpool from '../logos/liverpool.png'
import gpl from '../data/gpl.jpg'






const Results=()=>{
    return(
        <div>
              <header className='header-profile user-profile'>
       
      <div className='nav-titles'>
         <Link  to='/' className='to-home'>    <AiFillHome size={40}/>     </Link>
       
        <h1 className='heading'>GPL Results</h1>
         <Link to='/' className='to-home2'><AiOutlineUser size={40}/></Link>
      </div>

    
      </header> 
      <section className="section-logo">
        <div className="fixture-logo">
            <figure className="image is-128x128 box box-1">
            <img src={premierLeague} alt="budesliga Logo"/>
            </figure>

              <figure className="image is-128x128 box box-1">
            <img src={laliga} alt="budesliga Logo"/>
            </figure>

            <figure className="image is-128x128 box box-1">
            <img src={bundeslinga} alt="budesliga Logo"/>
            </figure>

               <figure className="image is-128x128 box box-1">
            <img src={serieA} alt="budesliga Logo"/>
            </figure>

               <figure className="image is-128x128 box box-1">
            <img src={ligue1} alt="budesliga Logo"/>
            </figure>
            
        </div>
        <p className="game-time strong heading ">AllMatch Day Games</p>
        <Box justifyContent='center' display='flex' alignItems='center'>
     <figure className="image is-128x128 ">
            <img src={gpl} alt="gpl" />
        </figure>
        </Box>
        
      </section>

      {/* fixture box */}
      <section className="section-fixture">
       
        <div className="date-time">
            <h2>Sat 20 May 2023</h2>
            <figure className="image is-64x64 ">
                <img src={premierLeague2} alt="premier League" />
            </figure>
        </div>
        <p className="box box-1 online">
       <span className="live">
        <figure className="image is-64x64">
            <img src={gpl} alt="gpl" />
        </figure>
       </span>
          <div className='teams-fixture'><figure className="image logo-image box is-64x64">  <img src={arsenal} alt="" />
          </figure><span className="team-name">Arsenal</span> </div> 
          <h1 className="goals-scr">3</h1>
            <p className="vs-teams">VS</p>
            <h1 className="goals-scr">1</h1>
        <div className='teams-fixture'><figure className="image logo-image box is-64x64">  <img src={chelsea} alt="" />
          </figure><span className="team-name">Chelsea</span></div> 

        </p>

         <p className="box box-1 online">
             <span className="live">
                <figure className="image is-64x64">
            <img src={gpl} alt="gpl" />
        </figure>
             </span>
          <div className='teams-fixture'><figure className="image logo-image box is-64x64">  <img src={newcastle} alt="" />
          </figure><span className="team-name">Newcastle</span> </div> 
            <h1 className="goals-scr">0</h1>
            <p className="vs-teams">VS</p>
              <h1 className="goals-scr">1</h1>
        <div className='teams-fixture'><figure className="image logo-image box  box is-64x64 ">  <img src={manu} alt="" />
          </figure><span className="team-name">Man U</span></div> 
 
        </p>

          <p className="box box-1 online">
            <span className="live">
                <figure className="image is-64x64">
            <img src={gpl} alt="gpl" />
        </figure>
            </span>
            <div className='teams-fixture'><figure className="image logo-image box  is-64x64">  <img src={astonvilla} alt="" />
          </figure><span className="team-name">Aston Villa</span></div> 
            <h1 className="goals-scr">3</h1>
              <p className="vs-teams">VS</p>
                <h1 className="goals-scr">3</h1>
        <div className='teams-fixture'><figure className="image logo-image box  is-64x64">  <img src={liverpool} alt="" />
          </figure><span className="team-name">Liverpool</span></div> 
        </p>
      </section>
        </div>
    )
} 
export default Results;