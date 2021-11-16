import React from "react";
import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  makeStyles,
  IconButton
} from "@material-ui/core";
import AssessmentIcon from '@material-ui/icons/Assessment';
import { Link } from "react-router-dom";
import DrawerComponent from "./Drawer";

const useStyles = makeStyles((theme) => ({
  root:{
    background: theme.overrides.background,
    alignItems: "center",
    justifyContent: "space-between",
    borderBottom: "solid 1px #ccc"
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
    fontWeight:"900"
  }
}));

function Navbar() {
  const classes = useStyles();

  return (
    <AppBar position="sticky" elevation={0}>
      <CssBaseline />
      <Toolbar className={classes.root}>
        <IconButton>
          <AssessmentIcon color="action" fontSize="large" />
        </IconButton>

        <Link to="/" className={classes.logo}>
          <Typography variant="h5" className={classes.logo_font}>
            MJ.RUN
          </Typography>
        </Link>
        <DrawerComponent className={classes.drawerm}/>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
