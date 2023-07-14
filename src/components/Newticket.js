import React, { useState } from 'react';
import './Newticket.css';
import {  useNavigate } from 'react-router-dom'
const Newticket = () => {
  const navigate=useNavigate();
  const [leadSource, setLeadSource] = useState('');
  const [name, setName] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [email, setEmail] = useState('');
  const [vehicleMake, setVehicleMake] = useState('');
  const [vehicleRegistration, setVehicleRegistration] = useState('');
  const [breakdownIssue, setBreakdownIssue] = useState('');
  const [location, setLocation] = useState('');
  const [serviceFee, setServiceFee] = useState('');
  const [assistanceTime, setAssistanceTime] = useState('');
  const [comments, setComments] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log('New ticket submitted!');
   
    setLeadSource('');
    setName('');
    setContactNumber('');
    setEmail('');
    setVehicleMake('');
    setVehicleRegistration('');
    setBreakdownIssue('');
    setLocation('');
    setServiceFee('');
    setAssistanceTime('');
    setComments('');
    setIsSubmitted(true);
  };

  return (
    <div className="new-ticket-container">
      <h1>New Ticket</h1>
      {isSubmitted && (
        <div className="popup">
          <p>New Task Created Successfully</p>
         
        
         <button onClick={()=>navigate('/login')}>ok</button></div>
      )}
      <form onSubmit={handleSubmit}>
        <label>
          Lead Source:
          <select value={leadSource} onChange={(e) => setLeadSource(e.target.value)}>
            <option value="">Select</option>
            <option value="Web">Web</option>
            <option value="Chat">Chat</option>
            <option value="Call">Call</option>
          </select>
        </label>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>
        <label>
          Contact Number:
          <input
            type="tel"
            value={contactNumber}
            onChange={(e) => setContactNumber(e.target.value)}
            required
          />
        </label>
        <label>
          Email Address:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <label>
          Vehicle Make:
          <input
            type="text"
            value={vehicleMake}
            onChange={(e) => setVehicleMake(e.target.value)}
            required
          />
        </label>
        <label>
          Vehicle Registration Number:
          <input
            type="text"
            value={vehicleRegistration}
            onChange={(e) =>
              setVehicleRegistration(e.target.value.replace(/\s+/g, '').toUpperCase())
            }
            required
          />
        </label>
        <label>
          Breakdown Issue:
          <textarea
            value={breakdownIssue}
            onChange={(e) => setBreakdownIssue(e.target.value)}
            required
          ></textarea>
        </label>
        <label>
          Location:
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
          />
        </label>
        <label>
          Service Fee:
          <input
            type="text"
            value={serviceFee}
            onChange={(e) => setServiceFee(e.target.value)}
          />
        </label>
        <label>
          Assistance Time:
          <input
            type="text"
            value={assistanceTime}
            onChange={(e) => setAssistanceTime(e.target.value)}
          />
        </label>
        <label>
          Comments:
          <textarea value={comments} onChange={(e) => setComments(e.target.value)}></textarea>
        </label>
        <button type="submit">Submit</button>
      </form>
      
    </div>
  );
};

export default Newticket;
