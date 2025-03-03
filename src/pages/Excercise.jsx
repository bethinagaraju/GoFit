import React, { useEffect, useState } from 'react';
import Design from '../comp/Design';
import getExercises from "../getExercises";
import { Button, CircularProgress } from '@mui/material'; // Import CircularProgress for spinner
import { useBodyPart } from './BodyPartContext';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import './Excercise.css';


function Excercise() {
  const { bodyPart } = useBodyPart();
  const [workouts, setWorkouts] = useState([]);
  const [isLoading, setIsLoading] = useState(false); // State for loader

  const fetchExercises = async () => {
    
    if (!bodyPart) return; // Ensure bodyPart is provided

    setIsLoading(true); // Start loading
    try {
      const data = await getExercises(bodyPart);
      
      if (data) {
        setWorkouts(data);
      }
    } catch (error) {
      console.error("Error fetching exercises:", error.message);
    }
    setIsLoading(false); // Stop loading
  };

  useEffect(() => {
    fetchExercises();
  }, []);

  return (
    <div className='design'>
     
  
        <ArrowBackIcon style={{ color: "#1976d2", position: "fixed", size:"50px", cursor:"pointer" }} onClick={() => window.history.back()}/>
      

      {isLoading ? (
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center",width:"100vw",height:"100vh"}}>
          <CircularProgress />
          <p style={{ marginLeft: "10px" }}>Loading exercises...</p>
        </div>
      ) : (
        
        workouts.map((workout, index) => (
          <div key={index} >
          <Design 
            bodyPart={workout.bodyPart} 
            name={workout.name} 
            gifUrl={workout.gifUrl} 
            instructions={workout.instructions} />
          </div>
            
        ))
        
      )}
    </div>
  );
}

export default Excercise;


