import React, { useState } from 'react';
import { 
  Typography,
  TextField,
  Button
} from "@material-ui/core";
import { adminApi } from '../../api';
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

  const [Id, SetId] = useState("");
  const [Pwd, SetPwd] = useState("");

  const onIdHandler = (event) => {
    SetId(event.target.value)
  };
  const onPwdHandler = (event) => {
    SetPwd(event.target.value)
  };

  const onClickLogin = async () => {
    await adminApi.login(Id,Pwd);
    window.location.href = '/admin';
  }

  const onKeyPress = (e) => {
    if(e.key === 'Enter'){
      onClickLogin();
    }
  };

  return (
    <div className={classes.root}>
      <Typography className={classes.typo}>MJ.RUN</Typography>
      
      <div className={classes.form}>
        <TextField label="ID" variant="outlined" value={Id} onChange={onIdHandler} onKeyPress={onKeyPress}/>
        <TextField label="PW" type="password" variant="outlined" value={Pwd} onChange={onPwdHandler} onKeyPress={onKeyPress}/>

        <Button 
          type="submit" 
          variant="contained" 
          color="primary"
          onClick={onClickLogin} 
          className={classes.button}
        >로그인</Button>
      </div>
    </div>
  );
};

export default Login;