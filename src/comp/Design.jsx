import React from 'react';
import './Design.css';

function Design(props) {
  return (
   
      <div className='container'>
        <div className='imgContainer'>
            <img src={props.gifUrl} alt='img'></img>
        </div>

        <div className='content'>
            <span id='title'>{props.bodyPart}</span>
           
            <span ><span style={{fontWeight: 800}}>Target: </span>{props.name}</span>
            <br></br>
            
            <span style={{fontWeight: 800}}>Instructions:</span>
         
            <ul>
              
              {props.instructions.map((x,index) => 
                <li key={index}>{x}</li>
              )}

            </ul>
        </div>
    </div>
  );
}

export default Design;
