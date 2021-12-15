import React, { useState, useEffect } from 'react';
import HomePresenter from './HomePresenter';
import { homeApi } from '../../../api';
import { getYYYYMMDD } from '../../../utils';

 const HomeContainer = () => {
    const [raceDate, setRaceDate] = useState('2019-02-24');
    const [HomeData, setHomeData] = useState({
      loading: true,
      raceData: null,
      raceErr: null
    });

    const getData = async () => {
      const [raceData, raceErr] = await homeApi(raceDate);
      console.log("Date: ", raceDate);
      setHomeData({
        loading: false,
        raceData,
        raceErr
      });
    }

    useEffect(() => {
      getData();
    }, [raceDate]);

  return (
    <HomePresenter loading={HomeData.loading} handleDate={setRaceDate} {...HomeData.raceData} raceDate={raceDate}/>
  );
}

export default HomeContainer;