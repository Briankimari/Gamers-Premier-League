import { Box,  Divider, TextField, useMediaQuery } from "@mui/material";
import React, { useState } from "react";
import {  Navigate } from 'react-router-dom';
import {toast} from 'react-toastify'
import axios from 'axios'




const Form=()=>{
    const isNonMobile=useMediaQuery("(min-width:600px)");
    const [firstName,setFirstName]=useState('');
    const [lastName,setLastName]=useState('');
    const [email,setEmail]=useState('');
    const [region,setRegion]=useState('');
    const [photo,setPhoto]=useState({myPhoto:''});
    const [team,setTeam]=useState('');
    

    const handleFileUpload= async(e)=> {
        const file= e.target.files[0];
        const base64=await convertToBase64(file)
        setPhoto({...photo,myPhoto:base64})
    };
    const PlayerLogin=async(e)=> {
      e.preventDefault();

      try {
        await axios.post('https://localhost:8080/profile-users',{
          firstName,lastName,email,region,photo,team
        });
        toast.success("Player profile added successfully")
        Navigate('/profile')
      } catch (error) {
        if(!firstName || !lastName || !email || !region || !photo || !team) {
          return toast.error("All fields are required");
        }
      }
    }

 
    return ( 
      
<form onSubmit={PlayerLogin} >
  <Box  display='grid' gap='50px' gridTemplateColumns='repeat(4,minmax(0,1fr))'
  sx={{"&>div":{gridColumn: isNonMobile ? undefined : 'span 4' }}}>
      <>
      <TextField 
      name="firstName"
      onChange={(e)=>setFirstName(e.target.value)}
      value={firstName}
      label='First Name' 
      required 
      sx={{gridColumn:'span 2'}}
      />

        <TextField 
      name="lastName"
      onChange={(e)=>setLastName(e.target.value)}
      value={lastName}
      label='Last Name' 
      required 
      sx={{gridColumn:'span 2'}}
      />

        <TextField 
      name="email"
      onChange={(e)=>setEmail(e.target.value)}
      value={email}
      type="email"
      label='Email' 
      required 
      sx={{gridColumn:'span 4'}}
      />

        <TextField 
        type="country"
      name="region"
      onChange={(e)=>setRegion(e.target.value)}
      value={region}
      label='Region/Country' 
      required 
      sx={{gridColumn:'span 4'}}
      />
                      

<Box sx={{gridColumn:'span 4'}} className='input input-control is-danger is-large' >
  
  <select style={{width:'100%',color:'orange',fontSize:'1.7rem',fontFamily:'cursive'}} className="is-large is-primary"  required value={team} name="team"
  id="team " onChange={(e)=>setTeam(e.target.value)} >
  
  <option  value='' disabled>EPL Teams</option>
    <Divider sx={{width:'100%'}}/>
  <option value='arsenal' >Arsenal</option>
  <option value='chelsea' >Chelsea</option>
  <option value='manchester-united' >Manchester United</option>
  <option value='manchester-city' >Manchester City</option>
  <option value='liverpool' >LiverPool</option>
  <option value='totenhum' >Totenhum</option>
  <option value='crystal-palace' >Crystal Palace</option>
  <option value='everton' >Everton</option>
  <option value='leicester' >Leicester City</option>
  <option value='Aston-villa' >Aston Villa</option>
  <option value='newcastle' >NewCastle United</option>
  <option value='westham' >Westham United</option>


  <option value='#' disabled>Laliga Santander</option>
      <Divider sx={{width:'100%'}}/>
  <option value='bercelona' >Bercelona</option>
  <option value='real-madrid' >Real Madrid</option>
  <option value='real-betis' >Real</option>
  <option value='atletico-madrid' >Atletico De Madrid</option>
  <option value='real-sociedad' >Real Sociedad</option>
  <option value='sevilla' >Sevilla Fc</option>
  <option value='valencia' >Valencia Fc</option>

  <option value='#' disabled>Ligue 1</option>
      <Divider sx={{width:'100%'}}/>
  <option value='psg' >Paris Sant-German(PSG)</option>
  <option value='monaco' >As Monaco</option>
  <option value='mersaille' >Olympique de Merseille</option>
  <option value='lynonnais' >Olympique Lynonnais</option>
  
  <option value='#' disabled>Bundesliga</option>
      <Divider sx={{width:'100%'}}/>
  <option value='bayern' >Fc Bayern Munchen</option>
  <option value='BVB' >Borussia Dortmund(BVB)</option>
  <option value='leipzig' >RB Leipzig</option>
  <option value='leverkusen' >Bayer 04 leverkusen</option>
  <option value='wolfsburg' >VFL WolfsBurg</option>
 
 <option value='#' disabled>Serial A Tim</option>
      <Divider sx={{width:'100%'}}/>
  <option value='fiorentina' >AFC Fiorentina</option>
  <option value='inter' >Inter</option>
  <option value='juventus' >Juventus Fc</option>
  <option value='lazio' >S.S Lazio</option>
  <option value='milan' >Ac Milan</option>
  <option value='napoli' >Napoli </option>
  <option value='roma' >As Roma</option>


  </select>
</Box>

  <Box sx={{gridColumn:'span 4',width:'100%'}}  className='input  selects input-control is-danger is-large '>
  <input
  type="file"
  label="image"
  name="myImage"
  id="file-upload"
  accept=".jpeg,.png,.jpg"
  onChange={(e)=>handleFileUpload(e)}
  />
  </Box>
  </>
</Box>
  <Box sx={{
        mt:'2rem',
    }}>
    <button type="submit" fullWidth  className="button is-fullwidth is-danger is-large">
        SUBMIT
    </button>

    </Box>
</form>
      
    
)
}
export default Form;


function convertToBase64(file){
return new Promise((resolve,reject) => {
const fileReader= new FileReader();
fileReader.readAsDataURL(file);
fileReader.onload=()=> {
  resolve(fileReader.result)
};
fileReader.onerror =(error) => {
  reject(error)
}
})
}