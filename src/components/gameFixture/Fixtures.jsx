import React from "react";
import './index.css'
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






const Fixtures=()=>{
    return(
        <div>
              <header className='header-profile user-profile'>
       
      <div className='nav-titles'>
         <Link  to='/' className='to-home'>    <AiFillHome size={40}/>     </Link>
       
        <h1 className='heading'>Fixtures</h1>
         <Link to='/fixtures' className='to-home2'><AiOutlineUser size={40}/></Link>
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
        <p className="game-time ">All times shown are your &#160;<span style={{fontWeight:'bold'}}>local time
        </span>&#160;& all games are timed for <span style={{fontWeight:'bolder'}}>
         &#160; 8 minutes</span></p>
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
       <span className="live">live</span>
          <div className='teams-fixture'><figure className="image logo-image box is-64x64">  <img src={arsenal} alt="" />
          </figure><span className="team-name">Arsenal</span> </div> 
            <p className="vs-teams">20:30</p>
        <div className='teams-fixture'><figure className="image logo-image box is-64x64">  <img src={chelsea} alt="" />
          </figure><span className="team-name">Chelsea</span></div> 

        </p>

         <p className="box box-1 online">
             <span className="live">half-time</span>
          <div className='teams-fixture'><figure className="image logo-image box is-64x64">  <img src={newcastle} alt="" />
          </figure><span className="team-name">Newcastle</span> </div> 
            <p className="vs-teams">20:30</p>
        <div className='teams-fixture'><figure className="image logo-image box  box is-64x64 ">  <img src={manu} alt="" />
          </figure><span className="team-name">Man U</span></div> 

        </p>

          <p className="box box-1 online">
            <span className="live">post</span>
            <div className='teams-fixture'><figure className="image logo-image box  is-64x64">  <img src={astonvilla} alt="" />
          </figure><span className="team-name">Aston Villa</span></div> 
              <p className="vs-teams">22:30</p>
        <div className='teams-fixture'><figure className="image logo-image box  is-64x64">  <img src={liverpool} alt="" />
          </figure><span className="team-name">Liverpool</span></div> 
        </p>
      </section>
        </div>
    )
} 
export default Fixtures;