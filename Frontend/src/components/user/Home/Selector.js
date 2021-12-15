import React, { useState } from "react";
import {
  makeStyles,
  AppBar,
  Tabs,
  Tab
} from '@material-ui/core';
import Content from './Content';
import { getLabel } from '../../../utils';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  paper : {
    backgroundColor: theme.palette.background.paper,
  }
}));

function Selector({ races, race_attendant, predicts }){
  
  const classes = useStyles();
  const [raceIdx, setRaceIdx] = useState(0);

  const handleChange = (e, newValue) => {
    setRaceIdx(newValue);
  };

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
          aria-label="scrollable force tabs"
        >
          {
            races.map((race)=>(
              <Tab key={getLabel(race)} label={getLabel(race)}/>
            ))
          }
        </Tabs>
      </AppBar>
      <Content race={races[raceIdx]} attendant={race_attendant[raceIdx]} predict={predicts[raceIdx]}/>
    </div>
  );
}

export default Selector;