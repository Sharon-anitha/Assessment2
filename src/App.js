
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Landing from './components/Landing';
import Newticket from './components/Newticket';
import NotFound from './components/NotFound';
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/landing/:name" element={<Landing />} />
        <Route path="/new-ticket" element={<Newticket />} />
        <Route path="*" element={<NotFound />}/>
      </Routes>
    </Router>
  );
};

export default App;