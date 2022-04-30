import React from 'react';
import './App.css';
import {HashRouter as Router,Routes, Route, Navigate} from "react-router-dom";

import Container from './modules/story/container'

function App() {
  return (
      <Router>
          <Routes>
              <Route exact path="/" element={<Container/>} />
             <Route render={()=><Navigate to="/"/>} />
          </Routes>
      </Router>
  );
}

export default App;
