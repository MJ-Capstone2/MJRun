import React, { useState, useEffect } from 'react';
import HomePresenter from './HomePresenter';
import { homeApi } from '../../../api';
import { getYYYYMMDD } from '../../../utils';

 const HomeContainer = () => {
    const [raceIdx, setRaceIdx] = useState(0);
    const [raceDatas, setRaceDatas] = useState(null);
    const [attendants, setAttendants] = useState(null);
    const [pre, setPre] = useState(null);
    const [raceDate, setRaceDate] = useState(getYYYYMMDD);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
      const fetchData = async() => {
        setLoading(true);
        try{
          const data = await homeApi(raceDate);
          setRaceDatas(data[0].races);
          setAttendants(data[0].race_attendant);
          setPre(data[0].predicts);
          setLoading(false);
        }catch(err){
          console.log(err);
        }
      };
      fetchData();
    }, [raceDate]);

    if(!raceDatas || !attendants || !pre){
      return null;
    }

  const races = raceDatas;
  const race_attendant = attendants;
  const predicts = pre;
  
  const handleChange = (e, newValue) => {
    setRaceIdx(newValue);
  };
  const handleDate = (date) => {
    setRaceDate(date);
  }
  const race = races[raceIdx];
  const predict = predicts[raceIdx];
  const attendant = race_attendant[raceIdx];
  const createdata = (races, attendant, predict, race) => {
    return { races, attendant, predict, race };
  }

  return (
    <HomePresenter
      { ...createdata(races, attendant, predict, race) }
      isRace={raceDatas.length}
      raceIdx={raceIdx}
      handleChange={handleChange}
      raceDate={raceDate}
      handleDate={handleDate}
      loading={loading}
    />
  );
}

export default HomeContainer;