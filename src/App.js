
import React from 'react';
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Landing from './components/Landing';
import Newticket from './components/Newticket';

const App = () => {
  return (
    <div className="project">
    <BrowserRouter basename="/Assessment2">
      <Routes>
        <Route exact path="/Assessment2" element={<Login />} />
        <Route path="/landing/:name" element={<Landing />} />
        <Route path="/new-ticket" element={<Newticket />} />
       
      </Routes>
    </BrowserRouter>
    </div>
  );
};

export default App;