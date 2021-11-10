import React from "react";
import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  makeStyles,
  useTheme,
  useMediaQuery,
  Button
} from "@material-ui/core";
import { Link } from "react-router-dom";
import DrawerComponent from "./Drawer";
import logo from '../constants/logo.png';

const useStyles = makeStyles((theme) => ({
  root:{
    background: theme.overrides.background,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  img:{
    width:"1.7em",
    height:"1.7em",
    marginRight:"0.5em"
  },
  navlinks: {
    display: "flex",
  },
  logo: {
    color: theme.palette.primary.main,
    cursor: "pointer",
    textDecoration: "none",
    display: "flex",
    flexDirection:"row",
    alignItems:"center",
    marginBottom: "0.15em"
  },
  logo_font: {
    fontStyle: "italic",
    fontFamily: '"Apple Color Emoji"',
    fontWeight:"900"
  },
  link: {
    textDecoration: "none",
    color: theme.palette.primary.main,
    fontSize: "1.3em",
    fontWeight:"500",
    marginRight: theme.spacing(5),
    "&:hover": {
      color: theme.palette.primary.dark
    },
  },
}));

function Navbar() {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <AppBar position="sticky" elevation={0}>
      <CssBaseline />
        {isMobile ? (
          <Toolbar className={classes.root}>
            <Link to="/" className={classes.logo}>
              <img src={logo} alt="logo" className={classes.img}/>
              <Typography variant="h4">
                MJ.RUN
              </Typography>
            </Link>
            <DrawerComponent />
          </Toolbar>
        ) : (
          <Toolbar className={classes.root}>
            <Link to="/" className={classes.logo}>
              <img src={logo} alt="logo" className={classes.img}/>
              <Typography variant="h5" className={classes.logo_font}>
                MJ.RUN
              </Typography>
            </Link>
            <div className={classes.navlinks}>
              <Link to="/prediction" className={classes.link}>
                경마예측
              </Link>
              <Link to="/info" className={classes.link}>
                경마정보
              </Link>
              <Link to="/rank" className={classes.link}>
                랭킹
              </Link>
            </div>
            <Button component={Link} to="/login" variant="contained" color="primary" disableElevation>
              로그인
            </Button>
          </Toolbar>
        )}
    </AppBar>
  );
}
export default Navbar;
