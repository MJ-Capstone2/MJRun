import React from "react";
import {
  Typography,
  makeStyles
} from "@material-ui/core";
import PredictOrder from '../../../components/user/Home/PredictOrder';
import Info from '../../../components/user/Home/Info';
import DatePicker from '../../../components/user/DatePicker';
import { getLabel } from '../../../utils';

const useStyles = makeStyles((theme) => ({
  card_container : {
    marginTop: '1em',
    marginBottom: '1em'
    
  },
  title_wrap: {
    width: '100%',
    flexDirection: 'row',
    display:'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: theme.palette.background.paper,
  },
  content_wrap: {
    display:'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: theme.palette.background.paper,
    paddingTop: '0.5em',
    paddingBottom: '0.5em'
  },
  order_wrap: {
    display:'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }
}));

const Content = ({ race, attendant, predict, handleDate, raceDate }) => {

  const classes = useStyles();

  return(
    <>
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
  );
}

export default Content;