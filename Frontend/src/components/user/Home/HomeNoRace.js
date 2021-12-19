import React from 'react';
import { 
  Typography,
  makeStyles 
} from '@material-ui/core';
import DatePicker from '../DatePicker';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: 'white',
    marginTop: 10,
    marginBottom: 10,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  typo: {
    marginTop: 20,
    marginBottom: 10,
    maxWidth: '90%',
    textAlign: 'center'
  },
  btn: {
    marginTop: 10,
    marginBottom: 20
  },
  wrap_date: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  }
}));

const HomeNoRace = ({ raceDate }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="h4" className={classes.typo}>
        <b>오늘은 경기가 없습니다</b>
      </Typography>

      <div className={classes.wrap_date}>
        <Typography> 이전경기 보러가기</Typography>
        <DatePicker raceDate={raceDate}/>
      </div>
    </div>
  );
};

export default HomeNoRace;