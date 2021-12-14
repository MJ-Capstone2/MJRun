import React from 'react';
import { makeStyles, Typography, Tooltip, IconButton } from '@material-ui/core';
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
    marginBottom: 10,
  },
  title: {
    marginTop: '0.8em',
  },
  predictRatio: {
    margin: '0.8em',
  },
  total: {
    padding: '0.8em',
    borderTop: 'solid 1px #777',
    flexDirection: 'row',
    display: 'flex',
    alignItems: 'center',
  },
}));

const PredictPresenter = ({ loading, ord1, ord2, ord3, week, month }) => {
  const classes = useStyles();
  
  return (
    <UserLayout loading={loading}>
      <div className={classes.root}>
        <Typography variant="h5" className={classes.title}>
          <b>AI금주 예측률</b>
        </Typography>
        <RadialBar week={week}/>
        <Typography className={classes.predictRatio}>
          1등: {ord1}%
        </Typography>
        <Typography className={classes.predictRatio}>
          2등: {ord2}%
        </Typography>
        <Typography className={classes.predictRatio}>
          3등: {ord3}%
        </Typography>
        <div className={classes.total}>
          <Tooltip title="누적 예측률?\n예측이 맞은 횟수/전체 예측 횟수\n월간을 기준으로 계산되었습니다.">
            <IconButton
              size="small"
              color="default"
              aria-label="upload picture"
              component="span"
            >
              <HelpOutlineIcon
                fontSize="small"
                style={{ marginRight: '0.6em' }}
              />
            </IconButton>
          </Tooltip>

          <Typography>누적 예측률: {month}%</Typography>
        </div>
      </div>
    </UserLayout>
  );
};

export default PredictPresenter;
