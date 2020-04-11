import React from 'react';
import './App.scss';
import Home from './features/home/Home';
import {Router, Redirect} from '@reach/router';
import { useSelector } from 'react-redux';
import { getAuth } from './app/authSlice';
import Detail from './features/detail/Detail';

function App() {
  return (
    <div className="App">
      <Router>
        <Home path="/" />
        <Detail path="/detail/:id" />
      </Router> 
    </div>
  );
}


export default App;
