import React from "react";
import {
  makeStyles,
  AppBar,
  Tabs,
  Tab
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  paper : {
    backgroundColor: theme.palette.background.paper,
  }
}));

function Selector({ races, raceId, handleChange }){
  const classes = useStyles();

  const getLabel = (race) => (`${race.location}${race.num}R`)

  return (
    <div className={classes.root}>
      <AppBar position="relative" className={classes.paper} color="default" elevation={0}>
        <Tabs
          value={raceId}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="on"
          indicatorColor="primary"
          textColor="primary"
          aria-label="scrollable force tabs example"
        >
          {
            races.map((race, idx)=>(
              <Tab key={idx} label={getLabel(race)} value={race.id}/>
            ))
          }
        </Tabs>
      </AppBar>
    </div>
  );
}

export default Selector;