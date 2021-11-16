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

import AssessmentIcon from '@material-ui/icons/Assessment';

const useStyles = makeStyles(()=>({
    link:{
        textDecoration:"none",
        color: "blue",
        fontSize: "20px",
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
        <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Link to="/" className={classes.link}>홈</Link>
            </ListItemText>
          </ListItem>
          <Divider/>
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Link to="/prediction" className={classes.link}>경마예측</Link>
            </ListItemText>
          </ListItem>
          <Divider/>
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Link to="/info" className={classes.link}>경마정보</Link>
            </ListItemText>
          </ListItem>
          <Divider/>
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Link to="/rank" className={classes.link}>랭킹</Link>
            </ListItemText>
          </ListItem>
          <Divider/>
        </List>
      </Drawer>
      <IconButton onClick={() => setOpenDrawer(!openDrawer)}className={classes.icon}>
        <AssessmentIcon color="action" style={{width:'1.2em', height:'1.2em'}} />
      </IconButton>
    </>
  );
}
export default DrawerComponent;
