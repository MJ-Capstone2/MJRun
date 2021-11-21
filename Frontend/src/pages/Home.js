import React from 'react';
import {
  Typography,
  makeStyles
} from "@material-ui/core";
import PredictOrder from '../components/PredictOrder';
import Info from '../components/Info';

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
    justifyContent: 'space-between',
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
  },
  live_badge: {
    background: '#FFDCDC',
    color: '#FF0F0F',
    borderRadius: '0.1em',
    padding: '0.2em 0.6em'
  }
}));

const horses = [
  {
    name: '금빛질주',
    age: 10
  },
  {
    name: '마이리더',
    age: 10
  },
  {
    name: '금빛질주',
    age: 10
  }
]

const Home = () => {
  const classes = useStyles();

  return(
    <div>
      <div className={classes.card_container}>
        <div className={classes.title_wrap}>
          <Typography variant="h5"><b>서울 R1 (14:30)</b></Typography>
          <div className={classes.live_badge}>
            LIVE
          </div>
        </div>
      </div>
      <div className={classes.card_container}>
        <div className={classes.content_wrap}>
          <Typography variant="h6"><b>예측번호</b></Typography>
          <div className={classes.order_wrap}>
            {
              horses.map((horse, idx) => (
                  <PredictOrder key={idx} order={idx+1} name={horse.name} age={horse.age}/>
              ))
            }
          </div>
        </div>
      </div>
      <div className={classes.card_container}>
        <div className={classes.content_wrap}>
          <Typography variant="h6"><b>말/기수/조교사 정보</b></Typography>
        </div>
      </div>
      <div className={classes.card_container}>
        <div className={classes.content_wrap}>
          <Info />
        </div>
      </div>
    </div>
  );
};

export default Home;