import React from "react";
import {
  makeStyles,
  AppBar,
  Tabs,
  Tab
} from '@material-ui/core';
import { getLabel } from '../../utils';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  paper : {
    backgroundColor: theme.palette.background.paper,
  }
}));

function Selector({ races, raceIdx, handleChange }){
  
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="relative" className={classes.paper} color="default" elevation={0}>
        <Tabs
          value={raceIdx}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="on"
          indicatorColor="primary"
          textColor="primary"
          aria-label="scrollable force tabs example"
        >
          {
            races.map((race, idx)=>(
              <Tab key={idx} label={getLabel(race)}/>
            ))
          }
        </Tabs>
      </AppBar>
    </div>
  );
}

export default Selector;