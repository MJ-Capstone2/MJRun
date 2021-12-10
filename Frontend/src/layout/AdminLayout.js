import React from 'react';
import Navbar from '../components/admin/Navbar'
import SideNav from '../components/admin/SideNav';
import CardBox from '../components/admin/CardBox';
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
  },
  root_container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  nav_container: {
    display: 'flex',
    justifyContent: 'center',
    height: 'fit-content',
    position: 'fixed',
    zIndex: 1,
    width: '22em'
  },
  content_container: {
    display: 'flex',
    justifyContent: 'center',
    marginLeft: '22em'
  }
}));

const AdminLayout = ({children, loading}) => {

  const classes = useStyles();

  return (
    <div>
      <Navbar />
      <div className={classes.root_container}>
        <div>
          <div className={classes.nav_container}>
            <SideNav />
          </div>
          <div className={classes.content_container}>
            {loading?
            <div className={classes.spiner}>
              <CircularProgress />
            </div>:
            <CardBox>
              {children}
            </CardBox>
            }
          </div>
        </div>
      </div>
    </div>

  )
}

export default AdminLayout;