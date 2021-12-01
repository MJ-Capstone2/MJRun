import React from 'react';
import UserLayout from '../../../layout/UserLayout';
import {
  Typography,
  makeStyles
} from "@material-ui/core";
import Selector from '../../../components/user/Selector';
import PredictOrder from '../../../components/user/Home/PredictOrder';
import Info from '../../../components/user/Home/Info';
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

const HomePresenter = ({ races, raceIdx, handleChange, race_attendant, predicts, race }) => {

  const classes = useStyles();

  return(
    <UserLayout>
      <Selector races={races} raceIdx={raceIdx} handleChange={handleChange}/>
      <div className={classes.card_container}>
        <div className={classes.title_wrap}>
          <Typography variant="h5"><b>{getLabel(race)} {race.start_time}</b></Typography>
        </div>
      </div>
      <div className={classes.card_container}>
        <div className={classes.content_wrap}>
          <Typography variant="h6"><b>예측번호</b></Typography>
          <div className={classes.order_wrap}>
            {
             predicts.map((pre, idx)=>(
              <PredictOrder key={idx} order={idx+1} name={race_attendant[pre-1].horse.name} age={race_attendant[pre-1].num}/>
             ))
            }
          </div>
        </div>
      </div>
      <div className={classes.card_container}>
        <div className={classes.content_wrap}>
          <Typography variant="h6"><b>말/기수/조교사 정보</b></Typography>
          <Info />
        </div>
      </div>
    </UserLayout>
  );
};

export default HomePresenter;