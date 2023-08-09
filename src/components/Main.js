import React from "react";
import {Box, Button, Tooltip} from "@mui/material"
import gameplay from './data/gameplay.jpg'
import { AiOutlineMail} from 'react-icons/ai'
import { BiFootball} from 'react-icons/bi'
import {FaFacebookF} from 'react-icons/fa'
import { ImProfile} from 'react-icons/im'
import {BsTwitter, BsWhatsapp} from 'react-icons/bs'
import {MdArrowUpward} from 'react-icons/md'
import pad1 from './data/pad3.png'
import pad2 from './data/pad2.jpg'
import liga from './data/liga.jpg'
import Chelsea from './data/chelse.jpg'
import celebrate from './data/celebration.jpg'
import mancity from './data/mancity.jpg'
import edit from './data/edit.jpg'
import napoli from './data/napoli.jpg'
import pack from './data/packs.jpg'
import realmadrid from './data/realmadrid.jpg'
import season1 from './data/seeson1.jpg'
import { MdSportsEsports } from "react-icons/md";
import shotgoal from './data/shotgoal.jpg'
import yellowcard  from './data/yellowcard.jpg'
import trailer from './data/trailer.jpg'
import throws from './data/throw.jpg'
import skill from './data/skill.jpg'
import freekick from './data/freekick.jpg'
import gpl from '../components/data/gpl.webp'
import { Link } from "react-router-dom";






function Main() {
 
  return (
  <div className="full">
  <header className="header">
<a href="#" className="logo">Gamers<span> League</span>
<span 
style={{color:''}}>

  </span></a>
   
    <div>
      <p className="control has-icons-left search">
        <input className="input is-danger search" type="text" placeholder='Search'/>
        <span className="icon is-left"></span>
        <i className="fas fa-search" aria-hidden="true"></i>
      </p>
     </div>
    
     <div className="menu" id="menu-icon">
     </div>
    
     <nav className="navbars">
      <Link to='join-gpl' >
        <button style={{
          fontSize:'1.2rem'
        }} className="button ">
          Join Gamers
        </button>
      </Link>
     </nav>
     
  </header>
  {/* section */}
  <div className="">

<Box className="below-navs" id="home">
 <div className="pl-table" >
<figure className="image is-128x128">
 <img src={pad1} alt="img1"/>
</figure>

<h2>Gamers<span>League</span></h2>
<figure className="image is-128x128">
 <img  src={pad2} alt="img1"/>
</figure>

 </div>
 <div className="profiles" >
  <div className="player-profile">
   <Link to='profile' style={{textDecoration:'none',color:'white'}}>
     <ImProfile size={65}/>
    
        <p>Gamer Profile </p>
     </Link>
   
  </div>
    <figure className="image is-128x128">
    <img src={gpl} />
  </figure>
  <div className="team-profile">
    <Link to='player-form'  style={{textDecoration:'none',color:'white'}}>
        <BiFootball size={65}/>
  <p>Set Your Profile</p>
    </Link>
 
   </div>
 
   
 </div> 
  
  </Box>
    </div>

 {/* gamers table section */}
 <section className="gamers-table" id="tables">
  
 <div className="nav-items">
<span><Link to='fixtures'><abbr> Fixtures</abbr></Link></span>
<span><Link to='transfers'> <abbr>Transfer</abbr></Link></span>
<span><Link to='top-scorers'><abbr>Stats</abbr></Link></span>

</div>

<div className="nav-items">
<span><Link to='results'><abbr>Results</abbr> </Link></span>

  <span><Link to='/'><abbr title="comming soon">Europa League</abbr> </Link></span>


  <span><Link aria-disabled to='portfolio'><abbr title="coming soon">Portfolio</abbr> </Link></span>

  

</div>

  <div className="header2">
    <h2>Gamers PremearLe<span>ague Table(GPL)</span> </h2>
  </div>
  {/* tables */}
  <table className="table is-hoverable   is-striped" style={{fontSize:'2.5rem'}} >
    <thead>
      <tr className="head">
        <th><abbr title="Position">Pos</abbr></th>
        <th>Team</th>
        <th><abbr title="played">Pl</abbr></th>
        <th><abbr title="Won">W</abbr></th>
        <th><abbr title="Drawn">D</abbr></th>
        <th><abbr title="Lost">L</abbr></th>
        <th><abbr title="Goal for">GF</abbr></th>
        <th><abbr title="Goal against">GA</abbr></th>
        <th><abbr title="Goals diffrence">GD</abbr></th>
        <th><abbr title="Points">Pts</abbr></th>
        </tr>
    </thead>
   <tbody>
    <tr>
      
      <th ><span className="champions-league-first">1</span> </th>
      
      <td><a href="" title="Arsenal"></a>ARS</td>
      <td>38</td>
      <td>23</td>
      <td>12</td>
      <td>3</td>
      <td>68</td>
      <td>36</td>
      <td>+32</td>
      <td>81</td>
    </tr>

     <tr>
      <th><span className="champions-league">2</span></th>
      <td><a href="" title="Manchester City"></a>MCI</td>
      <td>38</td>
      <td>23</td>
      <td>12</td>
      <td>3</td>
      <td>68</td>
      <td>36</td>
      <td>+32</td>
      <td>81</td>
    </tr>

     <tr className="">
      <th><span className="champions-league">3</span></th>
      <td><a href="" title="Newcastle"></a>NEW</td>
      <td>38</td>
      <td>23</td>
      <td>12</td>
      <td>3</td>
      <td>68</td>
      <td>36</td>
      <td>+32</td>
      <td>81</td>
    </tr>

    <tr>
      <th ><span className="champions-league">4</span></th>
      <td><a href="" title="Manchester United"></a>MUN</td>
      <td>38</td>
      <td>23</td>
      <td>12</td>
      <td>3</td>
      <td>68</td>
      <td>36</td>
      <td>+32</td>
      <td>81</td>
    </tr>

    <tr>
      <th><span className="champions-league-europa">5</span></th>
      <td><a href="" title="Liverpool"></a>LIV</td>
      <td>38</td>
      <td>23</td>
      <td>12</td>
      <td>3</td>
      <td>68</td>
      <td>36</td>
      <td>+32</td>
      <td>81</td>
    </tr>

    <tr>
      <th>6</th>
      <td><a href="" title="Totenhum"></a>TOT</td>
      <td>38</td>
      <td>23</td>
      <td>12</td>
      <td>3</td>
      <td>68</td>
      <td>36</td>
      <td>+32</td>
      <td>81</td>
    </tr>

    <tr>
      <th>7</th>
      <td><a href="" title="Aston Villa"></a>AVL</td>
      <td>38</td>
      <td>23</td>
      <td>12</td>
      <td>3</td>
      <td>68</td>
      <td>36</td>
      <td>+32</td>
      <td>81</td>
    </tr>

    <tr>
      <th>8</th>
      <td><a href="" title="Briton"></a>BHA</td>
      <td>38</td>
      <td>23</td>
      <td>12</td>
      <td>3</td>
      <td>68</td>
      <td>36</td>
      <td>+32</td>
      <td>81</td>
    </tr>

    <tr>
      <th>9</th>
      <td><a href="" title="Brentford"></a>BRE</td>
      <td>38</td>
      <td>23</td>
      <td>12</td>
      <td>3</td>
      <td>68</td>
      <td>36</td>
      <td>+32</td>
      <td>81</td>
    </tr>

    <tr>
      <th>10</th>
      <td><a href="" title="Fulham"></a>FUL</td>
      <td>38</td>
      <td>23</td>
      <td>12</td>
      <td>3</td>
      <td>68</td>
      <td>36</td>
      <td>+32</td>
      <td>81</td>
    </tr>

    <tr>
      <th>11</th>
      <td><a href="" title="Crystal Palace"></a>CRY</td>
      <td>38</td>
      <td>23</td>
      <td>12</td>
      <td>3</td>
      <td>68</td>
      <td>36</td>
      <td>+32</td>
      <td>81</td>
    </tr>

    <tr>
      <th>12</th>
      <td><a href="" title="Chelsea"></a>CHE</td>
      <td>38</td>
      <td>23</td>
      <td>12</td>
      <td>3</td>
      <td>68</td>
      <td>36</td>
      <td>+32</td>
      <td>81</td>
    </tr>
    <tr>
      <th>13</th>
      <td><a href="" title="Bournmouth"></a>BOU</td>
      <td>38</td>
      <td>23</td>
      <td>12</td>
      <td>3</td>
      <td>68</td>
      <td>36</td>
      <td>+32</td>
      <td>81</td>
    </tr>
    <tr>
      <th>14</th>
      <td><a href="" title="Wolves"></a>WOL</td>
      <td>38</td>
      <td>23</td>
      <td>12</td>
      <td>3</td>
      <td>68</td>
      <td>36</td>
      <td>+32</td>
      <td>81</td>
    </tr>

    <tr>
      <th>15</th>
      <td><a href="" title="Westham United"></a>WHU</td>
      <td>38</td>
      <td>23</td>
      <td>12</td>
      <td>3</td>
      <td>68</td>
      <td>36</td>
      <td>+32</td>
      <td>81</td>
    </tr>

    <tr>
      <th>16</th>
      <td><a href="" title="Leister City"></a>LEI</td>
      <td>38</td>
      <td>23</td>
      <td>12</td>
      <td>3</td>
      <td>68</td>
      <td>36</td>
      <td>+32</td>
      <td>81</td>
    </tr>

    <tr>
      <th>17</th>
      <td><a href="" title="Leeds United"></a>LEE</td>
      <td>38</td>
      <td>23</td>
      <td>12</td>
      <td>3</td>
      <td>68</td>
      <td>36</td>
      <td>+32</td>
      <td>81</td>
    </tr>

    <tr>
      <th><span className="champions-league-last">18</span></th>
      <td><a href="" title="Nohtinghum Forest"></a>NFO</td>
      <td>38</td>
      <td>23</td>
      <td>12</td>
      <td>3</td>
      <td>68</td>
      <td>36</td>
      <td>+32</td>
      <td>81</td>
    </tr>

    <tr>
      <th><span className="champions-league-last">19</span></th>
      <td><a href="" title="Everton"></a>EVE</td>
      <td>38</td>
      <td>23</td>
      <td>12</td>
      <td>3</td>
      <td>68</td>
      <td>36</td>
      <td>+32</td>
      <td>81</td>
    </tr>

    <tr>
      <th><span className="champions-league-last">20</span></th>
      <td><a href="" title="Southerntom"></a>SOU</td>
      <td>38</td>
      <td>23</td>
      <td>12</td>
      <td>3</td>
      <td>68</td>
      <td>36</td>
      <td>+32</td>
      <td>81</td>
    </tr>
   </tbody>
  
  </table>
   <Box mt='5rem' gap='30px' p='1% 2rem' >
    <h2 style={{marginBottom:'3rem'}}>Key</h2>
    <p className="qr"><span  className="qr-1"></span> Champions League Qualifiers</p>
    <p className="qr"><span  className="qr-2"></span> Europa League Qualifiers</p>
    <p className="qr"><span  className="qr-3"></span> Regelate</p>

   </Box>
 </section>

 {/* view */}
 <Box className="about" id="about">
  <div style={{display:'flex',justifyContent:'center',alignItems:'center',
color:'purple'}}>
    <h2 style={{fontStyle:'bold',fontSize:'1.9rem',fontWeight:'700'}}>OverView</h2>
  </div>
  <div className="about-images">
<figure className="image "style={{width:'300px'}}>
<img src={trailer} alt="image1 "/>
</figure>
<figure className="image "style={{width:'300px'}}>
<img src={yellowcard} alt="image1 "/>
</figure>
<figure className="image "style={{width:'300px'}}>
<img src={throws} alt="image1 "/>
</figure>
<figure className="image "style={{width:'300px'}}>
<img src={skill} alt="image1 "/>
</figure>

  </div>
{/* images for gpl */}
    <div className="about-images">
<figure className="image "style={{width:'300px'}}>
<img src={shotgoal} alt="image1 "/>
</figure>
<figure className="image "style={{width:'300px'}}>
<img src={season1} alt="image1 "/>
</figure>
<figure className="image "style={{width:'300px'}}>
<img src={napoli} alt="image1 "/>
</figure>
<figure className="image "style={{width:'300px'}}>
<img src={celebrate} alt="image1 "/>
</figure>

  </div>

      <div className="about-images">
<figure className="image "style={{width:'300px'}}>
<img src={edit} alt="image1 "/>
</figure>
<figure className="image "style={{width:'300px'}}>
<img src={realmadrid} alt="image1 "/>
</figure>
<figure className="image "style={{width:'300px'}}>
<img src={mancity} alt="image1 "/>
</figure>
<figure className="image "style={{width:'300px'}}>
<img src={Chelsea} alt="image1 "/>
</figure>

  </div>

      <div className="about-images">
<figure className="image "style={{width:'300px'}}>
<img src={pack} alt="image1 "/>
</figure>
<figure className="image "style={{width:'300px'}}>
<img src={liga} alt="image1 "/>
</figure>
<figure className="image "style={{width:'300px'}}>
<img src={gameplay} alt="image1 "/>
</figure>
<figure className="image "style={{width:'300px'}}>
<img src={freekick} alt="image1 "/>
</figure>

  </div>
 </Box>

 <Box className="footer-abouts" >
     <h2 style={{color:'white',
     display:'flex',justifyContent:'center'
     ,fontSize:'2rem',fontWeight:'700'}}>About</h2>
 
 
 <div className="about-content">
<p>Gamers League is a unreal game league consisting of a set number of teams selected teams 
  by particular players.Players who qualify to be up to position 8 have
  an advantage of playing  champions League.

</p>

<p>
  Hense those who get down to bottom three are relagerated from gamers league to 
  championship gamers league.Players also have the ability to transfer players buying
  them from other gamers.Player just need to register and select 
  his/her favourite team and start competing.
  </p>

</div>

 </Box>
 
 <Box className="footer-abouts" >
     <h2 style={{color:'white',
     display:'flex',justifyContent:'center'
     ,fontSize:'2rem',fontWeight:'700'}}>Social</h2>
  
 <div className="icon-me">

   <a href="https://wa.me/25498163231/?text=Hello,Thenkie for reaching me here,now let's talk about the Business.">
    <i> <BsWhatsapp/> </i></a>

   <a href='mailto:briankim7587@gmail.com'><i><AiOutlineMail/></i></a>
   <a href='https://msng.link/o/?BryanBandi=fm'><i> <FaFacebookF/> </i></a>
  <a href='https://www.twitter.com'><i><BsTwitter/></i></a>

</div>

<div style={{ display:'flex',justifyContent:'center',alignItems:'center', marginTop:'8rem',color:'yellow',cursor:'pointer'}}>
  <MdSportsEsports size={150}/>
</div>

 </Box>
 <footer className="footer">
<h2 >&copy; GAMERS LEAGUE 2023.</h2>
<div className="terms"> 
<p>
  Modern Slavery <span className="dot">.</span> Equality,Diversity and Inclusion Standard
  <span className="dot">.</span> Terms & Conditions <span className="dot">.</span> Policies 
   <span className="dot">.</span> Cookie Policy  <span className="dot">.</span> Manage Cookie
</p>
</div>
<div >
 <a className="to-tops" href="#"><i><MdArrowUpward size={40}/></i></a>
</div>
 </footer>

  </div>
  );
}

export default Main;
