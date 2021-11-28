import React from 'react';
import Navbar from '../components/admin/Navbar'
import {
  makeStyles,
  CircularProgress
} from "@material-ui/core";

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

const AdminLayout = ({children, loading=false}) => {

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
    </div>

  )
}

export default AdminLayout;