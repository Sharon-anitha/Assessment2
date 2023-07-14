
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Landing from './components/Landing';
import Newticket from './components/Newticket';

const App = () => {
  return (
    <Router basename="/login">
      <Routes>
        <Route exact path="/login" element={<Login />} />
        <Route path="/landing/:name" element={<Landing />} />
        <Route path="/new-ticket" element={<Newticket />} />
        <Route  path ="*" component={<NotFound/>} />
      </Routes>
    </Router>
  );
};

export default App;