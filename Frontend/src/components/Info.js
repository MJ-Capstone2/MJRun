import React from 'react';
import {
  Typography,
  makeStyles,
  Tabs,
  Tab
} from "@material-ui/core";
import TableChartIcon from '@material-ui/icons/TableChart';
import ViewAgendaIcon from '@material-ui/icons/ViewAgenda';
import InfoCard from './InfoCard';

const useStyles = makeStyles((theme) => ({
  roots_container : {
    display:'flex',
    flexDirection: 'column',
    width: '100%'
  },
  tabs_container : {
    display:'flex',
    flexDirection: 'row-reverse'
  },
  tab: {
    marginRight: '1rem',
    minWidth: 10,
  }
}));

function TabPanel({ value }) {
  return (
    <div>
      { value === 0 && (
        <Typography>111</Typography>
      )}
      { value === 1 && (
        <InfoCard />
      )}
    </div>
  );
}

function Info(){

  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (e, v) => {
    setValue(v);
  };

  return (
    <div className={classes.roots_container}>
      <div className={classes.tabs_container}>
        <Tabs
          value={value}
          onChange={handleChange}
          textColor="primary"
          variant="fullWidth"
          TabIndicatorProps={{
            style: {
                display: "none"
            }
          }}
        >
          <Tab icon={<TableChartIcon />} className={classes.tab}/>
          <Tab icon={<ViewAgendaIcon />} className={classes.tab}/>
        </Tabs>
      </div>
      <TabPanel value={value} />
    </div>
  );
}

export default Info;