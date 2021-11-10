import React from "react";
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const percentage = 66;

function RadialBar(){
  return(
    <div style={{ width: 200, height: 200 }}>
      <CircularProgressbar value={percentage} text={`${percentage}%`}/>
    </div>
  );
}

export default RadialBar;