import React from 'react';
import './Landing.css';
import { useParams } from 'react-router-dom';
import {  useNavigate } from 'react-router-dom'
const Landing = () => {
    const navigate=useNavigate ();
    const {name}=useParams();
  const getTimeOfDay = () => {
    const currentHour = new Date().getHours();
    if (currentHour < 12) {
      return 'morning';
    } else if (currentHour < 18) {
      return 'afternoon';
    } else {
      return 'evening';
    }
  };

  return (
    <div className="landing-container">
      <h1>Good {getTimeOfDay()}, Rescuer!</h1>
      <h2>How are you doing today, {name}?</h2>
     
      <nav>
      
        <button type="submit" onClick={()=> navigate('/new-ticket')} >New Ticket</button>
          
        
      </nav>
    </div>
  );
};

export default Landing;
