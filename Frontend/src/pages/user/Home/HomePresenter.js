import React from 'react';
import UserLayout from '../../../layout/UserLayout';
import {
  Typography,
  makeStyles
} from "@material-ui/core";
import Selector from '../../../components/user/Selector';
import PredictOrder from '../../../components/user/Home/PredictOrder';
import Info from '../../../components/user/Home/Info';
import DatePicker from '../../../components/user/DatePicker';
import HomeNoRace from '../../../components/user/Home/HomeNoRace';
import { getLabel } from '../../../utils';

const useStyles = makeStyles((theme) => ({
  card_container : {
    background: theme.overrides.background,
    margin: '1em 0',
    padding: '0.8em 0.4em',
  },
  title_wrap: {
    width: '100%',
    flexDirection: 'row',
    display:'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 20,
    paddingRight: 20
  },
  content_wrap: {
    display:'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  order_wrap: {
    display:'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }
}));

const HomePresenter = ({ loading, isRace, races, raceIdx, handleChange, attendant, predict, race, raceDate, handleDate }) => {
  const classes = useStyles();
  console.log(race, predict, attendant);
  return(
    <UserLayout loading={loading}>
      {
        isRace === 0?
        <HomeNoRace handleDate={handleDate}/>:
        <>
          <Selector races={races} raceIdx={raceIdx} handleChange={handleChange}/>
          <div className={classes.card_container}>
            <div className={classes.title_wrap}>
              <Typography variant="h5"><b>{getLabel(race)} {race.start_time}</b></Typography>
              <div className={classes.order_wrap}>
                <Typography><b>{raceDate}</b></Typography>
                <DatePicker handleDate={handleDate}/>
              </div>
            </div>
          </div>
          <div className={classes.card_container}>
            <div className={classes.content_wrap}>
              <Typography variant="h6"><b>예측번호</b></Typography>
              <div className={classes.order_wrap}>
                {
                predict.map((pre, idx)=>(
                  <PredictOrder key={idx} order={idx+1} name={pre.name} age={pre.no}/>
                ))
                }
              </div>
            </div>
          </div>
          <div className={classes.card_container}>
            <div className={classes.content_wrap}>
              <Typography variant="h6"><b>말/기수/조교사 정보</b></Typography>
              <Info attendant={attendant}/>
            </div>
          </div>
        </>
      }
    </UserLayout>
  );
};

export default HomePresenter;