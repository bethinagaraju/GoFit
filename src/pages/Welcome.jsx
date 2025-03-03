import React, { useEffect } from 'react';
import './welcome.css';

import getExercises from "../getExercises";
import { useState , createContext, useContext} from 'react';
import { useNavigate } from 'react-router-dom';
import { useBodyPart } from './BodyPartContext';
import LogoutIcon from '@mui/icons-material/Logout';
import { ClassNames } from '@emotion/react';







function Welcome() {

  
  const navigate = useNavigate();

  const { bodyPart, setBodyPart } = useBodyPart();
  const [exercises, setExercises] = useState([]);
  const [userName, setUserName] = useState('');
  const [customer, setCustomer] = useState('');
  const{name} = useBodyPart();
  // const [streak, setStreak] = useState(0);




  let stringname;
  useEffect(() => {
    // let stringname = '';
    // let flag = 0;
    // for (let i = 0; i < name.length; i++) {
    //   if (name[i] === '@') {
    //     flag = 1;
    //   }
    //   if (flag === 0 && name[i] !== ' ') {
    //     stringname += name[i];
    //   }
    //   if (flag === 1) {
    //     break;
    //   }
    // }

    setCustomer(name);

    console.log(customer);
  },[name])

  function handle(value) {
    setBodyPart(value);
    navigate('/excercise');
  }


  useEffect(() => {
    console.log(bodyPart);
  }, [bodyPart]);
  

  // const fetchExercises = async () => {
  //   console.log("Fetching exercises...");
  //   if (!bodyPart) return; // Ensure bodyPart is provided

  //   try {
  //     const data = await getExercises(bodyPart); // Corrected bodyPart usage
  //     console.log(data);
  //     if (data) {
  //       setExercises(data);
  //     }
  //   } catch (error) {
  //     console.error("Error fetching exercises:", error.message);
  //   }
  // };

  
  return (
    <div>

    
      {/* <button onClick={checkbtn}>CLICK</button> */}

  

    <div style={{backgroundColor:'black'}}>
      <div style={{justifyContent:'space-between', display:'flex'}}>

    <div onClick={() => navigate('/bmi')} style={{display:'flex', cursor:'pointer'}}>
    <img style={{width: '35px', height: '35px', marginLeft:'20px'}} src='bmilogo2.png' alt='logo' />
    <p style={{color:'white', fontSize:'15px', marginTop:'10px', fontWeight:'bold', marginLeft:'10px', cursor:'pointer'}}>BMI CALCULATOR</p>
    </div>
    
    <h3 onClick={() => navigate('/about')} style={{color:'white', marginTop:'9px', cursor:'pointer'}}>About us</h3>

    <h3  style={{color:'white', textAlign:'right', marginRight:'60px', marginTop:'9px', display:'inline'}}> Hello {customer.toUpperCase()}</h3>
    <LogoutIcon onClick={() => navigate('/login')} style={{color:'white', cursor:'pointer',marginTop:'9px', fontSize:'30px', marginRight:'30px'}}/>
    </div>
      <marquee style={{color:'white'}}><span style={{ whiteSpace: 'pre' }}>GoFit    Move  Sweat  Achieve                GoFit    Move  Sweat  Achieve                GoFit    Move  Sweat  Achieve                GoFit    Move  Sweat  Achieve                GoFit    Move  Sweat  Achieve                GoFit    Move  Sweat  Achieve                GoFit    Move  Sweat  Achieve                GoFit    Move  Sweat  Achieve                GoFit    Move  Sweat  Achieve                GoFit    Move  Sweat  Achieve                GoFit    Move  Sweat  Achieve                GoFit    Move  Sweat  Achieve                GoFit    Move  Sweat  Achieve                GoFit    Move  Sweat  Achieve                GoFit    Move  Sweat  Achieve                GoFit    Move  Sweat  Achieve                GoFit    Move  Sweat  Achieve                GoFit    Move  Sweat  Achieve                GoFit    Move  Sweat  Achieve                GoFit    Move  Sweat  Achieve                GoFit    Move  Sweat  Achieve                GoFit    Move  Sweat  Achieve                GoFit    Move  Sweat  Achieve                GoFit    Move  Sweat  Achieve                GoFit    Move  Sweat  Achieve                GoFit    Move  Sweat  Achieve                GoFit    Move  Sweat  Achieve                GoFit    Move  Sweat  Achieve                GoFit    Move  Sweat  Achieve                GoFit    Move  Sweat  Achieve                GoFit    Move  Sweat  Achieve                GoFit    Move  Sweat  Achieve                GoFit    Move  Sweat  Achieve                GoFit    Move  Sweat  Achieve                GoFit    Move  Sweat  Achieve                GoFit    Move  Sweat  Achieve                GoFit    Move  Sweat  Achieve                GoFit    Move  Sweat  Achieve                GoFit    Move  Sweat  Achieve                GoFit    Move  Sweat  Achieve                GoFit    Move  Sweat  Achieve                GoFit    Move  Sweat  Achieve                GoFit    Move  Sweat  Achieve                GoFit    Move  Sweat  Achieve                GoFit    Move  Sweat  Achieve                GoFit    Move  Sweat  Achieve                GoFit    Move  Sweat  Achieve                GoFit    Move  Sweat  Achieve                
      GoFit    Move  Sweat  Achieve                GoFit    Move  Sweat  Achieve                GoFit    Move  Sweat  Achieve                GoFit    Move  Sweat  Achieve                GoFit    Move  Sweat  Achieve                GoFit    Move  Sweat  Achieve                GoFit    Move  Sweat  Achieve                GoFit    Move  Sweat  Achieve                GoFit    Move  Sweat  Achieve                GoFit    Move  Sweat  Achieve                GoFit    Move  Sweat  Achieve                GoFit    Move  Sweat  Achieve                GoFit    Move  Sweat  Achieve                GoFit    Move  Sweat  Achieve                GoFit    Move  Sweat  Achieve                GoFit    Move  Sweat  Achieve                GoFit    Move  Sweat  Achieve                GoFit    Move  Sweat  Achieve                GoFit    Move  Sweat  Achieve                GoFit    Move  Sweat  Achieve                GoFit    Move  Sweat  Achieve                GoFit    Move  Sweat  Achieve                GoFit    Move  Sweat  Achieve                GoFit    Move  Sweat  Achieve                GoFit    Move  Sweat  Achieve                GoFit    Move  Sweat  Achieve                GoFit    Move  Sweat  Achieve                GoFit    Move  Sweat  Achieve                GoFit    Move  Sweat  Achieve                GoFit    Move  Sweat  Achieve                GoFit    Move  Sweat  Achieve                GoFit    Move  Sweat  Achieve                GoFit    Move  Sweat  Achieve                GoFit    Move  Sweat  Achieve                GoFit    Move  Sweat  Achieve                GoFit    Move  Sweat  Achieve                GoFit    Move  Sweat  Achieve                GoFit    Move  Sweat  Achieve                GoFit    Move  Sweat  Achieve                GoFit    Move  Sweat  Achieve                GoFit    Move  Sweat  Achieve                GoFit    Move  Sweat  Achieve                GoFit    Move  Sweat  Achieve                GoFit    Move  Sweat  Achieve                GoFit    Move  Sweat  Achieve                GoFit    Move  Sweat  Achieve                GoFit    Move  Sweat  Achieve                GoFit    Move  Sweat  Achieve                GoFit    Move  Sweat  Achieve                GoFit    Move  Sweat  Achieve                </span></marquee>

      
      </div>   
  <div className='logo'>
    <div className='header-div'>
    <h1  style={{textAlign:'center', marginTop:'5px', display:'inline'}}>Find the right exercise, the right way – GoFit.</h1>
    </div>
    <div className='fixed-div'>
  <div onClick={() => navigate('/chatui')} className='logo-div'>
    <img className='bot-logo' style={{width:'60px', height:'60px'}} src="bot.png" alt="Banner" />
    <p>AI BOT</p>
  
    </div>
    </div>
  
    </div>

    <div className='banner'>
        <img className='banner-img' src="bannerimg.jpeg" alt="Banner" />
        
    </div>
    <h3 className='choose'>Choose your workout</h3>
    <div>
      <div className='setpage'>
    <div className='workoutype'>
    
      
      <div className='workout'>

        <div onClick={() => handle('back')} className='imgdiv'>
          <img src='Back.webp' alt='BACK'></img>
        </div>

      <p style={{textAlign:'center'}}>Back</p>
         </div>

      <div onClick={() => handle('upper legs')} className='workout'>

      <div className='imgdiv'>
          <img src='upperlegsleo.jpeg' alt='BACK'></img>
      </div>
        <p>Upper Legs</p>
         </div>

      <div onClick={() => handle('lower legs')} className='workout'> <div className='imgdiv'>
          <img src='lowerlegleo.jpeg' alt='BACK'></img>
        </div>
        <p>Lower Legs</p>
         </div>

      <div onClick={() => handle('cardio')} className='workout'> 
      <div className='imgdiv'>
          <img src='cardio.jpg' alt='BACK'></img>
        </div>
        <p>Cardio</p>
      </div>

      <div onClick={() => handle('neck')} className='workout'> 
      <div className='imgdiv'>
          <img src='neck.webp' alt='BACK'></img>
        </div>
        <p>Neck</p>
      </div>

      <div onClick={() => handle('upper arms')} className='workout'>
      <div className='imgdiv'>
          <img src='upperarms.jpg' alt='BACK'></img>
        </div>
        <p>Upper Arms</p>
         </div>

      <div onClick={() => handle('lower arms')} className='workout'>
      <div className='imgdiv'>
          <img src='lowerarmsleo.jpeg' alt='BACK'></img>
        </div>
        <p>Lower Arms</p>
         </div>

      <div onClick={() => handle('chest')} className='workout'>
      <div className='imgdiv'>
          <img src='chest.jpg' alt='BACK'></img>
        </div>
        <p>Chest</p>
         </div>

      <div onClick={() => handle('shoulders')} className='workout'>
      <div className='imgdiv'>
          <img src='shoulder.webp' alt='BACK'></img>
        </div>
        <p>Shoulder</p>
         </div>

         <div onClick={() => handle('waist')} className='workout'>
      <div className='imgdiv'>
          <img src='waistleo.jpg' alt='BACK'></img>
        </div>
        <p>Waist</p>
         </div>
      
      </div>
      </div>
    </div>

  </div>
  );
}

export default Welcome;
