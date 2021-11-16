import React from 'react';
import {
  makeStyles,
  Typography,
  Tooltip,
  IconButton
} from "@material-ui/core";
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import RadialBar from '../components/RadialBar';
import InfoTab from '../components/Info/InfoTab';

const useStyles = makeStyles((theme) => ({
  area: {
    display: 'flex',
  },
  leftArea : {
    flex: 1,
    background: '#fff',
    borderRight: 'solid 1px #cccccc',
    display: 'flex',
    alignItems:'center',
    paddingTop:'5em',
    flexDirection:'column',
  },
  rightArea : {
    flex: 4

  },
  predictRatio: {
    margin: '0.8em',
  },
  total: {
    padding: '0.8em',
    borderTop: 'solid 1px #ccc',
    flexDirection: 'row',
    display: 'flex',
    alignItems: 'center'
  }
}));

const predicts = [12.2, 5.6, 10.5] 

const Race = () => {
  const classes = useStyles();

  return (
    <div className={classes.area}>
        <div className={classes.leftArea}>
        <Typography style={{marginBottom:'0.3em'}}>AI금주 예측률</Typography>
        <RadialBar />
        {
          predicts.map((pre, idx) => (
            <Typography className={classes.predictRatio}>{idx+1}등: {pre}%</Typography>
          ))
        }
        <div className={classes.total}>
          <Tooltip title="누적 예측률? 전체 예측횟수/맞힌 예측횟수">
            <IconButton size="small" color="#ccc" aria-label="upload picture" component="span">
              <HelpOutlineIcon fontSize="small" style={{marginRight:'0.6em'}}/>
            </IconButton>
          </Tooltip>
          <Typography>
            누적 예측률: 18.5%
          </Typography>
        </div>
      </div>
    
      <div className={classes.rightArea}>
        <InfoTab />
      </div>
    </div>
  );
}

export default Race;
