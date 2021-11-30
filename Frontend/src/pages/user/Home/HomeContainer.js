import React, { useState } from 'react';
import HomePresenter from './HomePresenter';

 const HomeContainer = () => {
  const races = [
    {
      id: 1,
      num: 1,
      location: '서울',
      start_time: '12:00'
    },
    {
      id: 2,
      num: 2,
      location: '서울',
      start_time: '13:30'
    },
    {
      id: 3,
      num: 1,
      location: '부경',
      start_time: '12:30'
    },
    {
      id: 4,
      num: 1,
      location: '제주',
      start_time: '13:00'
    }
  ]
  //1번 race
  const race_attendant = [
    {
      num: 1,
      horse: {
        name: '생각대로',
        age: 2,
        sex: '암',
        total_race: 20,
        total_ord1: 1,
        total_ord2: 0,
        total_ord3: 3,
      },
      jockey: {
        name: '유명길',
        total_race: 20,
        total_ord1: 1,
        total_ord2: 0,
        total_ord3: 3,
      },
      trainer: {
        name: '유재길',
        total_race: 20,
        total_ord1: 1,
        total_ord2: 0,
        total_ord3: 3,
      }
    },
    {
      num: 2,
      horse: {
        name: '생각대로',
        age: 2,
        sex: '암',
        total_race: 20,
        total_ord1: 1,
        total_ord2: 0,
        total_ord3: 3,
      },
      jockey: {
        name: '유명길',
        total_race: 20,
        total_ord1: 1,
        total_ord2: 0,
        total_ord3: 3,
      },
      trainer: {
        name: '유재길',
        total_race: 20,
        total_ord1: 1,
        total_ord2: 0,
        total_ord3: 3,
      }
    },
    {
      num: 3,
      horse: {
        name: '생각대로',
        age: 2,
        sex: '암',
        total_race: 20,
        total_ord1: 1,
        total_ord2: 0,
        total_ord3: 3,
      },
      jockey: {
        name: '유명길',
        total_race: 20,
        total_ord1: 1,
        total_ord2: 0,
        total_ord3: 3,
      },
      trainer: {
        name: '유재길',
        total_race: 20,
        total_ord1: 1,
        total_ord2: 0,
        total_ord3: 3,
      }
    },
    {
      num: 4,
      horse: {
        name: '생각대로',
        age: 2,
        sex: '암',
        total_race: 20,
        total_ord1: 1,
        total_ord2: 0,
        total_ord3: 3,
      },
      jockey: {
        name: '유명길',
        total_race: 20,
        total_ord1: 1,
        total_ord2: 0,
        total_ord3: 3,
      },
      trainer: {
        name: '유재길',
        total_race: 20,
        total_ord1: 1,
        total_ord2: 0,
        total_ord3: 3,
      }
    }
  ]
  const predicts = [1,2,3]

  const [raceIdx, setRaceIdx] = useState(0);
  const handleChange = (e, newValue) => {
    setRaceIdx(newValue);
  };
  const race = races[raceIdx];
  const createdata = (races, race_attendant, predicts, race) => {
    return { races, race_attendant, predicts, race };
  }

  return (
    <HomePresenter
      { ...createdata(races, race_attendant, predicts, race) }
      raceIdx={raceIdx}
      handleChange={handleChange}
    />
  );
}

export default HomeContainer;