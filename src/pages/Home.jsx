import React, { useState } from 'react';
import './Home.css'
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { Button } from '@mui/material';
import { SignInPage } from '@toolpad/core/SignInPage';
import { TextField, Container, Typography, Paper } from "@mui/material";
import { getAuth } from "firebase/auth";
import { signUp } from "../auth";
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

// import { signInWithEmailAndPassword } from "firebase/auth";.
// import { createUserWithEmailAndPassword } from "firebase/auth";

function Home() {



    const[feets, setFeets] = useState(0);
    const[inches, setInches] = useState(0);
    const[weight, setWeight] = useState(0);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [displayname, setDisplayName] = useState("");

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    let response = await signUp(email, password, displayname);
      
    if(response === true){
      alert('USer created successfully.');
      navigate('/login');
    }
    // else{
    //   console.log(response);
    //   alert('user already exists you login.');
    // }
  };

    // (6×0.3048)+(2×0.0254)=1.8288+0.0508=1.8796 m

    const calculateBmi = () => {
        const height = (feets * 0.3048) + (inches * 0.0254);
        const bmi = weight / (height * height);
        const btn1 = document.querySelector('.msg');
        const btn2 = document.querySelector('.result');

        btn2.innerHTML = "BMI:"+bmi;



        if(bmi<18.5){
            btn1.innerHTML = "Underweight";
            btn1.style.color = 'red';
        }
        else if(bmi<25){
            btn1.innerHTML = "Normal";
            btn1.style.color = 'green';
        }
        else{
            btn1.innerHTML = "Over weight";
            btn1.style.color = 'red';
        }

        console.log(bmi);
    }
  return (
    <div className='Home'>
        <div className='bmi'>
            <div className='bmi2'>
            <h1>BMI Calculator</h1>
           
            
            <Box sx={{ width: 300 }}>
              <br></br>
            <h3>Height(feets)  {feets}</h3>
      <Slider
        size="small"
        defaultValue={70}
        aria-label="Height"
        valueLabelDisplay="auto"
        min={0}
        max={10}
        value={feets}
        onChange={(e) => setFeets(e.target.value)}
      />
    <h3>Hight(inches){inches}</h3>

<Slider
        size="small"
        defaultValue={50}
        aria-label="Height-inches"
        valueLabelDisplay="auto"
        min={0}
        max={12}
        value={inches}
        onChange={(e) => setInches(e.target.value)}
      />
 <h3>Weight(kg)  {weight}</h3>
      <Slider
        size="small"
        defaultValue={50}
        aria-label="Weight"
        valueLabelDisplay="auto"
        min={0}
        max={120}
        value={weight}
        onChange={(e) => setWeight(e.target.value)}
      />
    </Box>

    <Button onClick={calculateBmi} variant="contained">Calculate BMI</Button>
    <h3 className='result'></h3>
    <h2 className='msg'></h2>
            
        </div>

        </div>

        <div className='container2'>
            <div className='signup'>
        <Container component="main" maxWidth="xs">
      <Paper elevation={3} style={{ padding: 20, marginTop: 50, textAlign: "center" }}>
        <Typography variant="h5">Sign In</Typography>
        <form>

        <TextField
            label="Display Name"
            type="name"
            fullWidth
            margin="normal"
            variant="outlined"
            value={displayname}
            onChange={(e) => setDisplayName(e.target.value)}
          />

          <TextField
            label="Email"
            type="email"
            fullWidth
            margin="normal"
            variant="outlined"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            label="Password"
            type="password"
            fullWidth
            margin="normal"
            variant="outlined"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          
          <Button onClick={handleSubmit} type="submit" fullWidth variant="contained" color="primary" style={{ marginTop: 20 }}>
            Sign In
          </Button>

          <p>already have an account</p>
          <Typography variant="body2" align="center">
            <Link to="/login" style={{ textDecoration: 'none', color: 'inherit' }}>
              Login here
            </Link>
          </Typography>
        </form>
      </Paper>
    </Container>
                                                                
      </div>
        </div>
    </div>
  );
}

export default Home;

