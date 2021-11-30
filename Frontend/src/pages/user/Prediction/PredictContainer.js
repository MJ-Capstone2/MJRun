import React from 'react';
import PredictPresenter from './PredictPresenter';

const PredictContainer = () => {
  const predicts = [12.2, 5.6, 10.5] 
  return(
    <PredictPresenter predicts={predicts}/>
  )
}
export default PredictContainer;