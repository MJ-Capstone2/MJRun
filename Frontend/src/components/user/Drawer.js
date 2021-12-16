import React, { useState } from "react";
import {
    Divider,
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemText,
    makeStyles,
} from "@material-ui/core";
import { Link } from "react-router-dom";

import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles(()=>({
  link:{
    textDecoration:"none",
    color: "blue",
    fontSize: "20px"
  },
  icon:{
    color: "white"
  }
}));

function DrawerComponent() {
  const classes = useStyles();
  const [openDrawer, setOpenDrawer] = useState(false);
  
  return (
    <>
      <Drawer
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
      >
        <List>
          <Link to="/" className={classes.link}>
            <ListItem onClick={() => setOpenDrawer(false)}>
              <ListItemText>
                홈
              </ListItemText>
            </ListItem>
          </Link>
          <Divider/>
          <Link to="/guide" className={classes.link}>
            <ListItem onClick={() => setOpenDrawer(false)}>
              <ListItemText>
                초보자 가이드
              </ListItemText>
            </ListItem>
          </Link>
          <Divider/>
          <Link to="/prediction" className={classes.link}>
            <ListItem onClick={() => setOpenDrawer(false)}>
              <ListItemText>
                AI 예측률
              </ListItemText>
            </ListItem>
          </Link>
          <Divider/>
        </List>
      </Drawer>
      <IconButton onClick={() => setOpenDrawer(!openDrawer)}className={classes.icon}>
        <MenuIcon color="primary" />
      </IconButton>
    </>
  );
}

export default DrawerComponent;
