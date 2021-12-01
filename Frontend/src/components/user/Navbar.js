import React from "react";
import {
  AppBar,
  CssBaseline,
  Typography,
  makeStyles,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import DrawerComponent from "./Drawer";
import DatePicker from "./DatePicker";

const useStyles = makeStyles((theme) => ({
  root:{
    background: theme.overrides.background,
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
    marginBottom: "0.15em"
  },
  logo_font: {
    fontStyle: "italic",
    fontFamily: '"Apple Color Emoji"',
    fontWeight:"900",
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
        <DrawerComponent />

        <Link to="/" className={classes.logo}>
          <Typography variant="h5" className={classes.logo_font}>
            MJ.RUN
          </Typography>
        </Link>

        <DatePicker />
      </div>
      </AppBar>
  );
};

export default Navbar;