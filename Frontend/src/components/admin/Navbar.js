import React from "react";
import {
  AppBar,
  CssBaseline,
  Typography,
  makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root:{
    background: theme.overrides.background,
    borderBottom: "solid 1px #ccc",
    width: '100%',
    display:'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '0.5em 0'
  },
  logo_font: {
    color: theme.palette.primary.main,
    fontStyle: "italic",
    fontFamily: '"Apple Color Emoji"',
    fontWeight:"900",
    textDecoration: "none",
  },
  paper : {
    backgroundColor: theme.palette.background.paper,
  }
}));

function Navbar() {
  const classes = useStyles();

  return (
    <AppBar position="static" className={classes.paper} elevation={0}>
      <CssBaseline />
      <div className={classes.root}>
        <Typography variant="h5" className={classes.logo_font}>
          MJ.RUN
        </Typography>
      </div>
    </AppBar>
  );
};

export default Navbar;