import React from "react";
import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  makeStyles,
  Button
} from "@material-ui/core";
import { Link } from "react-router-dom";
import DrawerComponent from "./Drawer";

const useStyles = makeStyles((theme) => ({
  root:{
    background: theme.overrides.background,
    borderBottom: "solid 1px #ccc",
    flexDirection: 'column'
  },
  row:{
    width: '100%',
    flexDirection: 'row',
    display:'flex',
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
    fontWeight:"900"
  }
}));

function Navbar() {
  const classes = useStyles();

  return (
    <AppBar position="sticky" elevation={0}>
      <CssBaseline />
      <Toolbar className={classes.root}>
        <div className={classes.row}>
          <DrawerComponent className={classes.drawerm}/>
          <Link to="/" className={classes.logo}>
            <Typography variant="h5" className={classes.logo_font}>
              MJ.RUN
            </Typography>
          </Link>
          <span style={{width:'8em'}}></span>
        </div>
        <div className={classes.row}>
          <Button>← 이전 경기</Button>
          <Button>다음 경기 →</Button>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
