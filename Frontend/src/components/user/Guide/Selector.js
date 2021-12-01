import React from "react";
import {
  makeStyles,
  AppBar,
  Tabs,
  Tab
} from '@material-ui/core';

import Content from './Content';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
  }
}));

function Selector(){
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <AppBar position="relative" color="default" elevation={0} className={classes.root}>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          centered
        >
          <Tab label="회원가입" />
          <Tab label="좌석예매" />
          <Tab label="마권구매" />
          <Tab label="환급" />
        </Tabs>
      </AppBar>

      <div>
        <Content tabindex={value}/>
      </div>
    </div>
  );
}

export default Selector;