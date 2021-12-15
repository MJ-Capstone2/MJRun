import React from 'react';
import {
  makeStyles,
  List,
  ListItem,
  ListItemText,
  Divider
} from "@material-ui/core";
import CardBox from './CardBox';

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}

const useStyles = makeStyles((theme) => ({
  title_container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    padding: '0.5em',
    fontSize: '1.5em'
  }
}));

const SideNav = () => {

  const classes = useStyles();

  return (
    <CardBox>
      <List component="nav" aria-label="main mailbox folders">
        <div className={classes.title_container}>
          관리페이지
        </div>
        <Divider />
        <ListItemLink href="/admin">
          <ListItemText primary="말" />
        </ListItemLink>
        <ListItemLink href="/admin/jockey">
          <ListItemText primary="기수" />
        </ListItemLink>
        <ListItemLink href="/admin/trainer">
          <ListItemText primary="조교사" />
        </ListItemLink>
        <ListItemLink href="/admin/info">
          <ListItemText primary="경기정보" />
        </ListItemLink>
        <ListItemLink href="/admin/result">
          <ListItemText primary="경기결과" />
        </ListItemLink>
      </List>
    </CardBox>
  );
}

export default SideNav;