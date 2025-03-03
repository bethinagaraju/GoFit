import React, { useState } from 'react';
import { SignInPage } from '@toolpad/core/SignInPage';
import { TextField, Container, Typography, Paper, Button } from "@mui/material";
// import {signIn} from '../auth';
import { signIn } from "../auth";
import { getAuth } from "firebase/auth";
import './Login.css';
import { useNavigate } from 'react-router-dom';
import { useBodyPart } from './BodyPartContext';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
// import { signUp } from "../auth";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { name, setName } = useBodyPart();
  const {user, setUser} = useBodyPart();


  const navigate = useNavigate();


  const handleSubmit = (e) => {
  
    e.preventDefault();
    signIn(email, password).then((response) => {
      

      if(!response){
        alert('user not found');
        setUser(null);
        
        return;
      }
      else{
      setUser(response.user);
      navigate('/welcome');
      setName(response.user.displayName);
      }
    })
    .catch((error)=>{
      if(error.code === 'auth/user-not-found'){
        alert('user not found');
        setUser(null);
        return;
      }
      if(error.code === 'auth/invalid-email'){
      alert('invalid email');
    }
    });


  };

  return (
    <div className='login'>
        <ArrowBackIcon style={{position: 'absolute', top: '10px', left: '10px', cursor: 'pointer', color: 'white'}} onClick={() => navigate('/')}/>
        <div className='innerlogin'>
      <Container component="main" maxWidth="xs">
        <Paper elevation={3} style={{ padding: 20, marginTop: 50, textAlign: "center" }}>
          <Typography variant="h5">Sign In</Typography>
          <form >
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
          </form>
        </Paper>
      </Container>
      </div>
    </div>
  );
}

export default Login;


