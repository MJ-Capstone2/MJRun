import React from 'react';
import UserLayout from '../../../layout/UserLayout';
import Selector from '../../../components/user/Home/Selector';
import HomeNoRace from '../../../components/user/Home/HomeNoRace';

const HomePresenter = ({ raceDate, loading, races, race_attendant, predicts, results, ord1, ord2, ord3 }) => {
  return(
    <UserLayout loading={loading}>
      {
        !races || races.length === 0?
        <HomeNoRace raceDate={raceDate}/>:
        <>
          <Selector
            raceDate={raceDate}
            races={races}
            race_attendant={race_attendant}
            predicts={predicts}
            results={results}
            ord1={ord1}
            ord2={ord2}
            ord3={ord3}
          />
        </>
      }
    </UserLayout>
  );
};

export default HomePresenter;