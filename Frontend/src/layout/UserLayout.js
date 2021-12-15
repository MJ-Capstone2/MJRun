import React from 'react';
import Navbar from '../components/user/Navbar';
import {
  makeStyles,
  CircularProgress
} from "@material-ui/core";
import Footer from '../components/user/Footer';

const useStyles = makeStyles((theme) => ({
  spiner: {
    display: 'flex',
    flex: 1,
    height: '100vh',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: '5em'
  }
}));

const UserLayout = ({children, loading}) => {

  const classes = useStyles();

  return (
    <div>
      <Navbar />
      <main>
        {loading?
        <div className={classes.spiner}>
          <CircularProgress />
        </div>:
        children
        }
      </main>
      <Footer />
    </div>

  )
}

export default UserLayout;