import React from 'react';
import {
  Typography,
  makeStyles,
  Box,
  TableContainer
 } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: 'center'
  },
  wrap: {
    display: 'inline-block',
    textAlign: 'center'
  },
  header: {
    display: 'flex'
  },
  colbox: {
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'center',
    minWidth: 120,
    minHeight: 50
  },
  colbox1: {
    position: 'sticky',
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'center',
    left: 0,
    zIndex: 99,
    minWidth: 170,
    minHeight: 50,
    backgroundColor: 'white'
  },
  rowbox: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 120,
    minHeight: 55
  },
  rowbox1: {
    position: 'sticky',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    left: 0,
    zIndex: 99,
    minWidth: 170,
    minHeight: 55,
  },
  evenbox: {
    backgroundColor: '#F7F6F6'
  },
  oddbox: {
    backgroundColor: 'white'
  },
  row: {
    display: 'flex'
  }
}));

const InfoTable = ({ attendant }) => {
  const classes = useStyles();

  const columns = ['말전적', '기수명', '기수전적', '조교사명', '조교사전적']

  return(
    <TableContainer className={classes.root}>
      <div className={classes.wrap}>
        <div className={classes.header}>
          <Box m={1} className={classes.colbox1}>
            <Typography> </Typography>
          </Box>
          {
            columns.map((column, idx) => (
              <Box key={idx} m={1} className={classes.colbox}>
                <Typography><b>{column}</b></Typography>
              </Box>
            ))
          }
        </div>

        <div className={classes.body}>
          {
            attendant && attendant.map((info, idx) => (
              <div className={classes.row} key={idx}>
                <Box borderRadius={5} m={1} className={`${classes.rowbox1} ${idx%2===0 ? classes.evenbox : classes.oddbox}`}>
                  <Typography><b>{idx+1} {info.horse.name}</b> ({info.horse.sex}/{info.horse.age})</Typography>
                </Box>
                <Box borderRadius={5} m={1} className={`${classes.rowbox} ${idx%2===0 ? classes.evenbox : classes.oddbox}`}>
                  <Typography className={classes.rowtypo}>{info.horse.total_race_count}  {info.horse.total_ord1_count}/{info.horse.total_ord2_count}/{info.horse.total_ord3_count}</Typography>
                </Box>
                <Box borderRadius={5} m={1} className={`${classes.rowbox} ${idx%2===0 ? classes.evenbox : classes.oddbox}`}>
                  <Typography>{info.jockey.name}</Typography>
                </Box>
                <Box borderRadius={5} m={1} className={`${classes.rowbox} ${idx%2===0 ? classes.evenbox : classes.oddbox}`}>
                  <Typography>{info.jockey.total_race_count}  {info.jockey.total_ord1_count}/{info.jockey.total_ord2_count}/{info.jockey.total_ord3_count}</Typography>
                </Box>
                <Box borderRadius={5} m={1} className={`${classes.rowbox} ${idx%2===0 ? classes.evenbox : classes.oddbox}`}>
                  <Typography>{info.trainer.name}</Typography>
                </Box>
                <Box borderRadius={5} m={1} className={`${classes.rowbox} ${idx%2===0 ? classes.evenbox : classes.oddbox}`}>
                  <Typography>{info.trainer.total_race_count}  {info.trainer.total_ord1_count}/{info.trainer.total_ord2_count}/{info.trainer.total_ord3_count}</Typography>
                </Box>
              </div>
            ))
          }
        </div>
      </div>
    </TableContainer>
  );
};

export default InfoTable;