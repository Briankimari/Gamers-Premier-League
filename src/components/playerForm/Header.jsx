import React from 'react';
import {Box,Typography,useTheme,useMediaQuery} from '@mui/material';
import Form from './Form';
import { Link } from 'react-router-dom';
import { AiFillHome, AiOutlineUser } from 'react-icons/ai';



const Header = () => {

  const isNonMobileScreens= useMediaQuery("(min-width: 1000px)");
  return (
    <Box sx={{background:'#ff4e50',height:'100vh'}}>
   <header className='header-3' style={{
    marginBottom:'4rem'
   }}>
       
      <div className='nav-titles'>
         <Link  to='/' className='to-home'>    <AiFillHome size={40}/>     </Link>
        
        <h1  style={{fontFamily:'sans-serif'}}>Players Form</h1>
       
          <Link to='/profile' className='to-home2'><AiOutlineUser size={40}/></Link>
       
       
      </div>

    
      </header>
      <Box className='fill-form' width={isNonMobileScreens ? "60%" : "93%"} height='80vh'
      p="2rem" m="2rem auto "  borderRadius="1.5rem" sx={{
        
      }}
      >
      <Typography  fontWeight="500" variant='h5' sx={{mb: "4.5rem",mt:'7.5rem',display:'flex',justifyContent:'center',alignItems:'center'}}>
        Welcome to Gamers Premear League.
      </Typography>
      <Form/>
      </Box>
   </Box>
  );
}

export default Header;
