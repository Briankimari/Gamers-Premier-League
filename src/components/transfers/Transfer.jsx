import React from "react";
import { AiFillHome, AiOutlineUser } from "react-icons/ai";
import { Link } from "react-router-dom";
import './index.css'
import { Box, Divider } from "@mui/material";
import players from '../data/players.jpg'

 const Transfer=()=>{
    return(
        <div className="transfer-full">
             <header className='header-profile user-profile'>
       
      <div className='nav-titles'>
         <Link  to='/' className='to-home'>    <AiFillHome size={40}/>     </Link>
       
        <h1 className='heading'>Transfers</h1>
         <Link to='' className='to-home2'><AiOutlineUser size={40}/></Link>
      </div>

    
      </header> 
      <section className="section-transfer">
        <Box className='transfer-box'>
    <div className="option-selects input input-control is-large is-primary ">
         <select style={{width:'100%',background:'#eb09eb',color:'white',fontSize:'1.8rem'}}>
                <option disabled value="transfers">Transfers</option>
                <option value="summer-transfer">Summer Transfer</option>
                <option value="january-window">January Window</option>
        </select>
        </div>

        </Box>
    
        <div className="see-transfer">
            <h1 className="see-more">See more</h1>
           <a>
            <Link>2023 January transfers</Link>
            <Link>2022 Summer transfers</Link>
            <Link>2021 January transfers</Link>
            <Link>2020 Summer transfers</Link>
            <Link>2019 January transfers</Link>
            <Link>2019 Summer transfers</Link>
            </a> 
        </div>
      </section>

    {/* transfer lists */}
    <section className="latest-transfer">
        <div>
             <h1 className="see-newstransfer">Latest Transfer News</h1>
      <Divider />
        </div>
        <Box className='image-transfer'>
            <figure className="image image1 ">
                <img src={players} alt="player" />
                <div className="player-status">
                    
                    <p>
                        <h2>Transfers</h2>
                       Bournemouth turn Traore loan into permanent deal
                    </p>
                </div>
                
            </figure>
            <Divider/>
             <figure className="image image1 ">
                <img src={players} alt="player" />
                <div className="player-status">
                   
                    <p>
                        <h2>Transfers</h2>
                       Summer 2023 Transfers & news
                       </p>
                </div>
            </figure>
           <Divider/>
             <figure className="image image1 ">
                <img src={players} alt="player" />
                <div className="player-status">
                    
                    <p>
                        <h2>Transfers</h2>
                      Nottingham Forest sign Andre Ayew
                       </p>
                </div>
            </figure>
            <Divider/>
        </Box>
    </section>
        </div>
    )
}
export default Transfer;