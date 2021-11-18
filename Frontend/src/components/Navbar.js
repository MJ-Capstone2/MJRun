import React from "react";
import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  makeStyles,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import DrawerComponent from "./Drawer";

const useStyles = makeStyles((theme) => ({
  root:{
    background: theme.overrides.background,
    borderBottom: "solid 1px #ccc",
    width: '100%',
    display:'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  logo: {
    color: theme.palette.primary.main,
    cursor: "pointer",
    textDecoration: "none",
    marginBottom: "0.15em",
  },
  logo_font: {
    fontStyle: "italic",
    fontFamily: '"Apple Color Emoji"',
    fontWeight:"900",
  }
}));

function Navbar() {
  const classes = useStyles();

  return (
    <AppBar position="sticky" elevation={0}>
      <CssBaseline />
      <Toolbar className={classes.root}>
        <DrawerComponent />

        <Link to="/" className={classes.logo}>
          <Typography variant="h5" className={classes.logo_font}>
            MJ.RUN
          </Typography>
        </Link>

        <span style={{width:'4em'}}></span>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
