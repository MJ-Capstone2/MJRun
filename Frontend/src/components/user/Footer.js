import React from 'react';
import {
  makeStyles,
  Typography
} from "@material-ui/core";

import logo from '../../constants/logo2.png';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#393F93',
    paddingTop: 15,
    paddingBottom: 15,
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  logo: {
    height: 40,
  },
  typo: {
    fontSize: 8,
    color: 'white',
    position: 'absolute',
    right: 2,
    bottom: 2
  }
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <img src={logo} alt='logo' className={classes.logo}/>

      <Typography className={classes.typo}>Copyright © MJ.RUN All rights reserved.</Typography>
    </div>
  );
};

export default Footer;
