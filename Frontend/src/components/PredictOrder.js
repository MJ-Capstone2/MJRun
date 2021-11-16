import React from "react";
import {
  Typography,
  makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display:'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '1.2em'
  },
  order_title: {
    background: '#f1f4ff',
    color: '#1F2478',
    borderRadius: '2em',
    padding: '0.3em 0.8em'
  },
}));

const PredictOrder = ({ order, name, age }) => {

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.order_title}>
        {order}위
      </div>
      <Typography>{name}({age})</Typography>
    </div>
  );
}

export default PredictOrder;