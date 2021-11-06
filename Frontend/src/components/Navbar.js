import React from "react";
import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  makeStyles,
  useTheme,
  useMediaQuery,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import DrawerComponent from "./Drawer";

const useStyles = makeStyles((theme) => ({
  root:{
    background:"#ffffff"
  },
  navlinks: {
    marginLeft: theme.spacing(4),
    display: "flex",
  },
  logo: {
    flexGrow: "1",
    color: "#393F93",
    cursor: "pointer"
  },
  link: {
    textDecoration: "none",
    color: "#393F93",
    fontSize: "20px",
    marginLeft: theme.spacing(12),
    "&:hover": {
      color: "yellow"
    },
  },
}));

function Navbar() {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <AppBar position="static" className={classes.root}>
      <CssBaseline />
      <Toolbar>
        <Typography variant="h4" className={classes.logo}>
          MJ.RUN
        </Typography>
        {isMobile ? (
          <DrawerComponent />
        ) : (
          <div className={classes.navlinks}>
            <Link to="/" className={classes.link}>
              Home
            </Link>
            <Link to="/about" className={classes.link}>
              About
            </Link>
            <Link to="/contact" className={classes.link}>
              Contact
            </Link>
            <Link to="/faq" className={classes.link}>
              FAQ
            </Link>
          </div>
        )}
      </Toolbar>
    </AppBar>
  );
}
export default Navbar;
