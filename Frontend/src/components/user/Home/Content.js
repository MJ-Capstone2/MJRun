import React from "react";
import {
  Typography,
  makeStyles,
  Tooltip
} from "@material-ui/core";
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
  },
  root: {
    display:'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '1.2em'
  },
  order_title: {
    background: '#f1f4ff',
    color: '#1F2478',
    borderRadius: '2em',
    padding: '0.3em 0.8em'
  },
}));

const Content = ({ race, attendant, predict, result, handleDate, raceDate, ord1, ord2, ord3 }) => {

  const classes = useStyles();

  return(
    <>
      <div className={classes.card_container}>
        <div className={classes.title_wrap}>
          <Typography variant="h5"><b>{getLabel(race)} {race.start_time}</b></Typography>
          <div className={classes.order_wrap}>
            <Typography><b>{raceDate}</b></Typography>
            <DatePicker handleDate={handleDate} raceDate={raceDate}/>
          </div>
        </div>
      </div>
      <div className={classes.card_container}>
        <div className={classes.content_wrap}>
          <Typography variant="h6"><b>예측번호</b></Typography>
          <div className={classes.order_wrap}>
            <div className={classes.root}>
              <div className={classes.order_title}>
                1위
              </div>
              <Typography>{predict[0].name} ({predict[0].no})</Typography>
              <Tooltip title="1위 월간 예측정확도">
                <Typography>
                  {ord1} %
                </Typography>
              </Tooltip>
            </div>
            <div className={classes.root}>
              <div className={classes.order_title}>
                2위
              </div>
              <Typography>{predict[1].name} ({predict[1].no})</Typography>
              <Tooltip title="2위 월간 예측정확도">
                <Typography>
                  {ord2} %
                </Typography>
              </Tooltip>
            </div>
            <div className={classes.root}>
              <div className={classes.order_title}>
                3위
              </div>
              <Typography>{predict[2].name} ({predict[2].no})</Typography>
              <Tooltip title="3위 월간 예측정확도">
                <Typography>
                  {ord3} %
                </Typography>
              </Tooltip>
            </div>
          </div>
        </div>
      </div>
            {
              result &&
              <div className={classes.card_container}>
                <div className={classes.content_wrap}>
                  <Typography variant="h6"><b>경기결과</b></Typography>
                  <div className={classes.order_wrap}>
                    <div className={classes.root}>
                      <div className={classes.order_title}>
                        1위
                      </div>
                      <Typography>{result[0].line_number} ({result[0].name})</Typography>
                    </div>
                    <div className={classes.root}>
                      <div className={classes.order_title}>
                        2위
                      </div>
                      <Typography>{result[1].line_number} ({result[1].name})</Typography>
                    </div>
                    <div className={classes.root}>
                      <div className={classes.order_title}>
                        3위
                      </div>
                      <Typography>{result[2].line_number} ({result[2].name})</Typography>
                    </div>
                  </div>
                </div>
              </div>
            }
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