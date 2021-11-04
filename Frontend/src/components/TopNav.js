import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import logo from '../logo.png';

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  button: {
    float: 'right'
  },
  link: {
    margin: 15
  }
};

function TopNav(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <AppBar position="static" color="#ffffff">
        <Toolbar>
          <Button>
            <img src={logo} alt="logo" />
          </Button>
          <Typography className={classes.grow}>
            <Link href="#" underline="none" className={classes.link}>경기 예측</Link>
            <Link href="#" underline="none" className={classes.link}>경기 정보</Link>
            <Link href="#" underline="none" className={classes.link}>랭킹</Link>
          </Typography>
          <Button variant="contained" color="primary">로그인</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

TopNav.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TopNav);