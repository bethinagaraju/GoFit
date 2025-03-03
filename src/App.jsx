import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Home'
import { Button } from '@mui/material';
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Login from './pages/Login'
import Welcome from './pages/Welcome'
import Excercise from './pages/Excercise'
import Bmi from './pages/Bmi'
import Aibot from './comp/Aibot'
import ChatUI from './pages/ChatUI'
import ProtectedRoute from './pages/ProtectedRoute'
import About from './pages/About'


import { BodyPartProvider } from "./pages/BodyPartContext";


function App() {
 

  return (
    <BodyPartProvider>
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/welcome" element={
            <ProtectedRoute><Welcome /></ProtectedRoute>} />
          <Route path="/excercise" element={
            <ProtectedRoute><Excercise /></ProtectedRoute>} />
          <Route path='/bmi' element={
            <ProtectedRoute><Bmi /></ProtectedRoute>} />
          <Route path='/bot' element={
            <ProtectedRoute><Aibot /></ProtectedRoute>} />
          <Route path='/chatui' element={
            <ProtectedRoute><ChatUI /></ProtectedRoute>} />

          <Route path='/about' element={
            <ProtectedRoute><About /></ProtectedRoute>} />
      
        </Routes>
      </div>
    </Router>
    </BodyPartProvider>
  )
}

export default App
