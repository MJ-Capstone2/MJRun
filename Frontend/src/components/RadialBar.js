import React from "react";
import {
  makeStyles, Typography
} from "@material-ui/core";
import { CircularProgressBar } from "@tomik23/react-circular-progress-bar";

const percentage = 66;

const useStyles = makeStyles((theme) => ({
  graphContainer: {
    width : '16em',
    height: '16em',
    marginBottom: '3.2em',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  }
}));

function RadialBar(){

  const classes = useStyles();

  return(
    <div className={classes.graphContainer}>
      <CircularProgressBar
        percent={percentage}
        linearGradient={["#4286f4", "#373B44"]}
        animationSmooth="1s ease-out"
        fontSize="1rem"
        speed={180}
        size={200}
        round
      >
      </CircularProgressBar>
    </div>  
  );
}

export default RadialBar;