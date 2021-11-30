import React, { useState, useEffect } from 'react';
import PredictPresenter from './PredictPresenter';
export default () => {
  const predicts = [12.2, 5.6, 10.5] 
  return(
    <PredictPresenter predicts={predicts}/>
  )
}