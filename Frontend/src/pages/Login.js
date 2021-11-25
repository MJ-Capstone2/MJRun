import React from 'react';
import { 
  Typography,
  TextField,
  Button
} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 100
  },
  typo: {
    fontSize: 25
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    width: '70%',
    maxWidth: 500,
    '&>*': {
      margin: 8
    }
  }
}));

const Login = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography className={classes.typo}>MJ.RUN</Typography>
      
      <form className={classes.form}>
        <TextField id="outlined-basic" label="ID" variant="outlined" />
        <TextField id="outlined-basic" label="PW" type="password" variant="outlined" />

        <Button variant="contained" color="primary" className={classes.button} type="submit">로그인</Button>
      </form>
    </div>
  );
};
export default Login;
