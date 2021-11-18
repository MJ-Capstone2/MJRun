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
    alignContent: 'center',
  },
  typo: {
    textAlign: 'center'
  },
  form: {
    '& > *': {
      margin: theme.spacing(1),
      width: '60%',
    },
    textAlign: 'center',
    verticalAlign: 'middle',
  }
}));

const Login = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography className={classes.typo}>MJ.RUN</Typography>
      
      <form className={classes.form} noValidate autoComplete="off">
        <TextField id="outlined-basic" label="ID" variant="outlined" />
        <TextField id="outlined-basic" label="PW" type="password" variant="outlined" />

        <Button variant="contained" color="primary" className={classes.button} type="submit">로그인</Button>
      </form>
    </div>
  );
};
export default Login;
