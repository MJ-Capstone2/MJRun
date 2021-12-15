import React, { useState, useEffect } from 'react';
import HomePresenter from './HomePresenter';
import { homeApi } from '../../../api';
import { parseDate } from '../../../utils';

 const HomeContainer = () => {
    const [raceDate, setRaceDate] = useState('2019-02-24');
    const [HomeData, setHomeData] = useState({
      raceData: null,
      raceErr: null,
      ord1: null,
      ord1Err: null,
      ord2: null,
      ord2Err: null,
      ord3: null,
      ord3Err: null,
    });
    const [loading, setLoading] = useState(true);

    const handleDate = (date) => {
      setLoading(true);
      setRaceDate(parseDate(date));
    }

    const getData = async () => {
      const [raceData, raceErr] = await homeApi.raceData(raceDate);
      const [ord1, ord1Err] = await homeApi.ord1;
      const [ord2, ord2Err] = await homeApi.ord2;
      const [ord3, ord3Err] = await homeApi.ord3;

      setHomeData({
        raceData,
        raceErr,
        ord1: ord1.toFixed(2),
        ord1Err,
        ord2: ord2.toFixed(2),
        ord2Err,
        ord3: ord3.toFixed(2),
        ord3Err
      });
      setLoading(false);
    }

    useEffect(() => {
      getData();
    }, [raceDate]);

  return (
    <HomePresenter
      loading={loading}
      handleDate={handleDate}
      {...HomeData.raceData}
      raceDate={raceDate}
      ord1={HomeData.ord1}
      ord2={HomeData.ord2}
      ord3={HomeData.ord3}
    />
  );
}

export default HomeContainer;