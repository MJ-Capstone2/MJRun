import React, { useState, useEffect } from 'react';
import PredictPresenter from './PredictPresenter';
import { precisionApi } from '../../../api';
const PredictContainer = () => {
  const [precisions, setPrecision] = useState({
    loading: true,
    ord1: 0,
    ord1Err: null,
    ord2: 0,
    ord2Err: null,
    ord3: 0,
    ord3Err: null,
    week: 0,
    weekErr: null,
    month: 0,
    monthErr: null,
  });

  const getData = async () => {
    const [ord1, ord1Err] = await precisionApi.ord1;
    const [ord2, ord2Err] = await precisionApi.ord2;
    const [ord3, ord3Err] = await precisionApi.ord3;
    const [week, weekErr] = await precisionApi.week;
    const [month, monthErr] = await precisionApi.month;
    setPrecision({
      loading: false,
      ord1: ord1.toFixed(2),
      ord1Err,
      ord2: ord2.toFixed(2),
      ord2Err,
      ord3: ord3.toFixed(2),
      ord3Err,
      week: Number(week.toFixed()),
      weekErr,
      month: month.toFixed(2),
      monthErr,
    })
  }
  useEffect(() => {
    getData();
  },[]);
  return(
    <PredictPresenter {...precisions}/>
  )
}
export default PredictContainer;