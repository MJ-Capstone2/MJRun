import React, { useState } from 'react';
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
    paddingTop: 100,
    paddingBottom: 100,
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

  const [ID, SetID] = useState("");
  const [Password, SetPassword] = useState("");

  const onIDHandler = (event) => {
    SetID(event.currentTarget.value)
  };
  const onPasswordHandler = (event) => {
    SetPassword(event.currentTarget.value)
  };
  const onSubmitHandler = (event) => {
    event.preventDefault();
    
    console.log('ID', ID)
    console.log('Password', Password)
  };

  return (
    <div className={classes.root}>
      <Typography className={classes.typo}>MJ.RUN</Typography>
      
      <form className={classes.form} onSubmit={onSubmitHandler}>
        <TextField id="id" label="ID" variant="outlined" value={ID} onChange={onIDHandler} />
        <TextField id="pwd" label="PW" type="password" variant="outlined" value={Password} onChange={onPasswordHandler} />

        <Button 
          type="submit" 
          variant="contained" 
          color="primary" 
          className={classes.button}
        >로그인</Button>
      </form>
    </div>
  );
};

export default Login;