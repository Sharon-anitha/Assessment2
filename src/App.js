
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Landing from './components/Landing';
import Newticket from './components/Newticket';
import NotFound from './components/NotFound';
const App = () => {
  return (
    
    <Router basename="/Assessment2">
      <Routes>
        <Route exact path="/Assessment2" element={<Login />} />
        <Route path="/landing/:name" element={<Landing />} />
        <Route path="/new-ticket" element={<Newticket />} />
        <Route  path ="*" component={<NotFound/>} />
      </Routes>
    </Router>
  );
};

export default App;