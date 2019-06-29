import React from 'react';
import SignupForm from '../signup-form'


import './signup.scss';


export default function Signup () {
  return (
    <div className="Signup-component">
      <div className="wrapper">
        <h2 className="title">Sign Up to Coins.ph!</h2>
        <SignupForm />
      </div>

    </div>
  )
}
