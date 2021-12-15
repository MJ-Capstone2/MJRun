import React from 'react';
import UserLayout from '../../../layout/UserLayout';
import Selector from '../../../components/user/Home/Selector';
import HomeNoRace from '../../../components/user/Home/HomeNoRace';



const HomePresenter = ({ loading, races, race_attendant, predicts }) => {
  return(
    <UserLayout loading={loading}>
      {
        !races || races.length === 0?
        <HomeNoRace/>:
        <>
          <Selector races={races} race_attendant={race_attendant} predicts={predicts}/>
        </>
      }
    </UserLayout>
  );
};

export default HomePresenter;