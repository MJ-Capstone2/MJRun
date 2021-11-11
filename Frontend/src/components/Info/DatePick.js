import React, { useState } from "react";
import { makeStyles } from "@material-ui/core";
import DatePicker from "react-datepicker";
import { ko } from 'date-fns/esm/locale';
import "react-datepicker/dist/react-datepicker.css";

// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: 'center',
    paddingTop: 20
  },
  datepicker: {
    border: 'none',
    fontSize: '18px',
    textAlign: 'center',
  }
}));

const DatePick = () => {
  const classes = useStyles();
  const [startDate, setStartDate] = useState(new Date());

  return (
    <div className={classes.root}>
      <DatePicker 
        dateFormat="yyyy. MM. dd(eee)"
        selected={startDate} 
        onChange={(date) => setStartDate(date)} 
        locale={ko}
        className={classes.datepicker}
        popperPlacement="auto"
        popperModifiers={{
          preventOverflow: { 
            enabled: true, 
          }, 
        }}
      />
    </div>
  );
}

export default DatePick;