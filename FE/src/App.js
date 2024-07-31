// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CustomerFeedback  from './Components/FeedbackForm/CustomerFeedback.jsx';
import  Dashboard  from './Components/Dashboard/Dashboard.jsx';
import  NotFound  from './Components/NotFound/NotFound.jsx';
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/feedback" element={<CustomerFeedback/>} />
        <Route path="/dashboard"element={<Dashboard/>}/>
        <Route path="*" element={<NotFound />} /> 
       
      </Routes>
    </Router>
  );
};

export default App;
