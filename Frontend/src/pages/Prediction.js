import { Typography } from "@material-ui/core";
import {
  makeStyles
} from "@material-ui/core";
import RadialBar from '../components/RadialBar';

const useStyles = makeStyles((theme) => ({
  fixedArea : {
    width: '26em',
    height: '100%',
    position: 'fixed',
    background: '#fff',
    borderRight: 'solid 1px #ccc',
    display: 'flex',
    justifyContent: 'center',
    paddingTop:'5em'
  }
}));


function Prediction() {
  const classes = useStyles();

  return (
    <div className={classes.fixedArea}>
      <RadialBar />
    </div>
  );
}
export default Prediction;
