import React from 'react';
import './spinner.scss';


export default function Spinner ({ size = 25, color = 'white' }) {

  return <div className="Spinner-component">
    <svg width={size} height={size} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"
         preserveAspectRatio="xMidYMid" className="lds-rolling">
      <circle cx="50" cy="50" fill="none" stroke={color}
              strokeWidth="10" r="30" strokeDasharray="141.37166941154067 49.12388980384689"
              transform="rotate(341.799 50 50)">
        <animateTransform attributeName="transform" type="rotate" calcMode="linear" values="0 50 50;360 50 50"
                          keyTimes="0;1" dur="1s" begin="0s" repeatCount="indefinite"></animateTransform>
      </circle>
    </svg>
  </div>
}
