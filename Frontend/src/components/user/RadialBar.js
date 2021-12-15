import React from "react";
import {
  makeStyles
} from "@material-ui/core";
import { CircularProgressBar } from "@tomik23/react-circular-progress-bar";

const useStyles = makeStyles((theme) => ({
  graphContainer: {
    width : '16em',
    height: '16em',
    margin: '0.5em',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
}));

function RadialBar({week}){

  const classes = useStyles();

  return(
    <div className={classes.graphContainer}>
      <CircularProgressBar
        percent={week}
        linearGradient={["#4286f4", "#373B44"]}
        animationSmooth="1s ease-out"
        fontSize="15px"
        speed={180}
        size={200}
        round
      >
      </CircularProgressBar>
    </div>  
  );
}

export default RadialBar;