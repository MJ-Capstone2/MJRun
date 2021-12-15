import React, { useState, useEffect } from 'react';
import HomePresenter from './HomePresenter';
import { homeApi } from '../../../api';
import { getYYYYMMDD } from '../../../utils';

 const HomeContainer = () => {
    const [raceDatas, setRaceDatas] = useState('2019-02-24');
    const [HomeData, setHomeData] = useState({
      loading: true,
      raceData: null,
      raceErr: null
    });

    const getData = async () => {
      const [raceData, raceErr] = await homeApi('2019-02-24');
      setHomeData({
        loading: false,
        raceData,
        raceErr
      });
    }

    useEffect(() => {
      getData();
    }, []);

  return (
    <HomePresenter loading={HomeData.loading} {...HomeData.raceData}/>
  );
}

export default HomeContainer;