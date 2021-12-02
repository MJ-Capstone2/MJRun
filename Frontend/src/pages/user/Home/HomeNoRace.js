import React from 'react';
import { 
  Button,
  Typography,
  makeStyles 
} from '@material-ui/core';

import UserLayout from '../../../layout/UserLayout';

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
  }
}));

const HomeNoRace = () => {
  const classes = useStyles();

  return (
    <UserLayout>
      <div className={classes.root}>
        <Typography variant="h4" className={classes.typo}>
          <b>오늘은 경기가 없습니다</b>
        </Typography>

        <Button variant="contained" color="primary" className={classes.btn}>
          이전경기 보러가기
        </Button>
      </div>
    </UserLayout>
  );
};

export default HomeNoRace;