import React from 'react';
import './About.css';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

function About() {
  return (
    <div className='about'>
      <div className='about-container1'>
        <ArrowBackIcon style={{cursor: 'pointer', color: 'white', marginLeft: '10px', marginTop: '10px'}} onClick={() => window.history.back()} />
        <div  className='boxl'><img style={{width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%'}} src='cartoon-fitness.jpg' alt='cartoon' /></div>
        <div id='box2'  className='boxr' style={{marginLeft: '25vw'}}><img style={{width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%'}} src='bot.png' alt='bot' /></div>
        <div className='boxl'><img style={{width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%'}} src='bmilogo2.png' alt='bmi' /></div>
        <div className='boxr' style={{marginLeft: '25vw'}}><img style={{width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%'}} src='cartoon2.jpg' alt='cartoon' /></div>
      </div>
      <div className='about-container2'>
      <h1>About GoFit</h1>

      <div className='content-div' >
        <h2>Welcome to GoFit – your ultimate fitness companion!</h2>
        <p>GoFit is designed to help you achieve your fitness goals. Whether you're starting your fitness journey or looking to take your workouts to the next level, GoFit is here to make your experience simple, motivating, and effective.</p>
        <h3>Our Features:</h3>
        <ul>
          <li>Exercise Guides: Detailed exercise guides for various muscle groups like neck, back, shoulder, and more to ensure you perform workouts with proper form.</li>
          <li>BMI Calculator: Easily calculate your Body Mass Index to track your fitness progress.</li>
          <li>AI Chatbot Assistance: Our chatbot answers all your fitness-related questions, including workout plans, diet tips, and exercise suggestions.</li>
          <li>Secure Access: We prioritize your privacy and security, ensuring that your data is protected and accessible only to you.</li>
        </ul>
        <p>At GoFit, we believe that fitness is not just about workouts – it's about building healthy habits and supporting each other every step of the way.</p>
        <p>Start your journey with GoFit today and become the best version of yourself!</p>
        <p>Let's GoFit, Together!</p>
      </div>
      
    </div>
    </div>
  );
}

export default About;
