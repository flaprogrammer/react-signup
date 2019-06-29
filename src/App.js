import React from 'react';
import Signup from './components/signup';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.scss';

function App() {
  return (
    <div className="App-component">
      <Signup />
      <ToastContainer autoClose={4000} hideProgressBar={true}/>
    </div>
  );
}

export default App;
