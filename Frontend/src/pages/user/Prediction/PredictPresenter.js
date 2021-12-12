import React from 'react';
import {
  makeStyles,
  Typography,
  Tooltip,
  IconButton
} from "@material-ui/core";
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import RadialBar from '../../../components/user/RadialBar';
import UserLayout from '../../../layout/UserLayout';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10
  },
  title: {
    marginTop: '0.8em'
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

const PredictPresenter = ({predicts}) => {
  const classes = useStyles();

  return (
    <UserLayout>
      <div className={classes.root}>
        <Typography variant="h5" className={classes.title}><b>AI금주 예측률</b></Typography>

        <RadialBar />

        {
          predicts.map((pre, idx) => (
            <Typography className={classes.predictRatio}>{idx+1}등: {pre}%</Typography>
          ))
        }

        <div className={classes.total}>
<<<<<<< HEAD
          <Tooltip title="누적 예측률 = 맞힌 예측횟수/전체 예측횟수">
=======
          <Tooltip title="누적 예측률 = 전체 예측횟수 / 맞힌 예측횟수">
>>>>>>> 8ec544dc06d2759b70140cb5e610a46c4d13a20f
            <IconButton size="small" color="#ccc" aria-label="upload picture" component="span">
              <HelpOutlineIcon fontSize="small" style={{marginRight:'0.6em'}}/>
            </IconButton>
          </Tooltip>

          <Typography>
            누적 예측률: 18.5%
          </Typography>
        </div>
      </div>
    </UserLayout>
  );
}

export default PredictPresenter;
