import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  box_container: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
    borderRadius: '1.5em',
    border: '#ccc solid 1px',
    margin: '1em',
    boxShadow : '0 0 1em 0 rgba(50,50,93,0.1)',
    padding: '1em'
  }
}));

const CardBox = ({children}) => {

  const classes = useStyles();

  return (
    <div className={classes.box_container}>
      { children }
    </div>
  );
}

export default CardBox;