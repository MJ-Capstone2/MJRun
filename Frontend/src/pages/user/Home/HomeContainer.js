import React, { useState, useEffect } from 'react';
import HomePresenter from './HomePresenter';
import { homeApi } from '../../../api';
import { parseDate } from '../../../utils';

 const HomeContainer = () => {
    const [raceDate, setRaceDate] = useState('2019-02-24');
    const [HomeData, setHomeData] = useState({
      raceData: null,
      raceErr: null
    });
    const [loading, setLoading] = useState(true);

    const handleDate = (date) => {
      setLoading(true);
      setRaceDate(parseDate(date));
    }

    const getData = async () => {
      const [raceData, raceErr] = await homeApi(raceDate);
      console.log("Date: ", raceDate);
      setHomeData({
        raceData,
        raceErr
      });
      setLoading(false);
    }

    useEffect(() => {
      getData();
    }, [raceDate]);

  return (
    <HomePresenter loading={loading} handleDate={handleDate} {...HomeData.raceData} raceDate={raceDate}/>
  );
}

export default HomeContainer;