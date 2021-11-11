import React from 'react';
import { 
  AppBar,
  Typography, 
  Tabs, 
  Tab,
  Box,
  makeStyles
} from "@material-ui/core";
import PropTypes from 'prop-types';

import DatePick from './DatePick';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: '#ffffff',
    marginTop: '2.5px',
    paddingTop: '25px'
  },
  appbar: {
    boxShadow: 'none',
    backgroundColor: '#fff'
  },
  activetab: {
    borderBottom: '2px solid #585858',
    backgroundColor: '#585858',
    color: '#ffffff'
  },
  inactivetab: {
    borderBottom: '2px solid #585858',
    backgroundColor: '#fff',
    color: '#585858'
  }
}));

const InfoTab = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(1);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appbar}>
        <Tabs
          value={value}
          onChange={handleChange}
          // variant="scrollable"
          indicatorColor="#fff"
          textColor="inherit"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
          centered
        >
          <Tab label="부산" {...a11yProps(0)} className={value===0 ? classes.activetab : classes.inactivetab}/>
          <Tab label="서울" {...a11yProps(1)} className={value===1 ? classes.activetab : classes.inactivetab}/>
          <Tab label="제주" {...a11yProps(2)} className={value===2 ? classes.activetab : classes.inactivetab}/>
        </Tabs>
      </AppBar>

      <DatePick />

      <TabPanel value={value} index={0}>
        부산
      </TabPanel>
      <TabPanel value={value} index={1}>
        서울
      </TabPanel>
      <TabPanel value={value} index={2}>
        제주
      </TabPanel>
    </div>
  );
}

export default InfoTab;