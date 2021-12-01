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
    minWidth: 100,
    minHeight: 50
  },
  colbox1: {
    position: 'sticky',
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'center',
    left: 0,
    zIndex: 99,
    minWidth: 150,
    minHeight: 50,
    backgroundColor: 'white'
  },
  rowbox: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 100,
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
    minWidth: 150,
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

const InfoTable = () => {
  const classes = useStyles();

  const columns = ['말전적', '기수명', '기수전적', '조교사명', '조교사전적']
  const infos = [
    {
      horse: {
        name: '생각대로',
        sex: '암',
        age: '5',
        weight: '+2.0',
        history: [22,0,0]
      },
      jockey: {
        name: '우성',
        history: [22,0,0]
      },
      trainer: {
        name: '유재길',
        history: [22,0,0]
      }
    },
    {
      horse: {
        name: '생각대로',
        sex: '암',
        age: '5',
        weight: '+2.0',
        history: [22,0,0]
      },
      jockey: {
        name: '히히',
        history: [22,0,0]
      },
      trainer: {
        name: '테스트',
        history: [22,0,0]
      }
    },
    {
      horse: {
        name: '생각대로',
        sex: '암',
        age: '5',
        weight: '+2.0',
        history: [22,0,0]
      },
      jockey: {
        name: '우성',
        history: [22,0,0]
      },
      trainer: {
        name: '유재길',
        history: [22,0,0]
      }
    },
    {
      horse: {
        name: '아무거나',
        sex: '암',
        age: '5',
        weight: '+2.0',
        history: [22,0,0]
      },
      jockey: {
        name: '우성',
        history: [22,0,0]
      },
      trainer: {
        name: '난몰라',
        history: [22,0,0]
      }
    },
    {
      horse: {
        name: '생각대로',
        sex: '암',
        age: '5',
        weight: '+2.0',
        history: [22,0,0]
      },
      jockey: {
        name: '우성',
        history: [22,0,0]
      },
      trainer: {
        name: '유재길',
        history: [22,0,0]
      }
    },
    {
      horse: {
        name: '생각대로',
        sex: '암',
        age: '5',
        weight: '+2.0',
        history: [22,0,0]
      },
      jockey: {
        name: '우성',
        history: [22,0,0]
      },
      trainer: {
        name: '유재길',
        history: [22,0,0]
      }
    },
    {
      horse: {
        name: '으어어어',
        sex: '암',
        age: '5',
        weight: '+2.0',
        history: [22,0,0]
      },
      jockey: {
        name: '이익',
        history: [22,0,0]
      },
      trainer: {
        name: '으어어',
        history: [22,0,0]
      }
    },
    {
      horse: {
        name: '생각대로',
        sex: '암',
        age: '5',
        weight: '+2.0',
        history: [22,0,0]
      },
      jockey: {
        name: '우성',
        history: [22,0,0]
      },
      trainer: {
        name: '유재길',
        history: [22,0,0]
      }
    },
    {
      horse: {
        name: '생각대로',
        sex: '암',
        age: '5',
        weight: '+2.0',
        history: [22,0,0]
      },
      jockey: {
        name: '우성',
        history: [22,0,0]
      },
      trainer: {
        name: '유재길',
        history: [22,0,0]
      }
    },
    {
      horse: {
        name: '생각대로',
        sex: '암',
        age: '5',
        weight: '+2.0',
        history: [22,0,0]
      },
      jockey: {
        name: '우성',
        history: [22,0,0]
      },
      trainer: {
        name: '유재길',
        history: [22,0,0]
      }
    }
  ]

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
                <Typography>{column}</Typography>
              </Box>
            ))
          }
        </div>

        <div className={classes.body}>
          {
            infos.map((info, idx) => (
              <div className={classes.row} key={idx}>
                <Box borderRadius={5} m={1} className={`${classes.rowbox1} ${idx%2===0 ? classes.evenbox : classes.oddbox}`}>
                  <Typography><b>{idx+1} {info.horse.name}</b> ({info.horse.sex}/{info.horse.age})</Typography>
                  <Typography>무게증감 {info.horse.weight} </Typography>
                </Box>
                <Box borderRadius={5} m={1} className={`${classes.rowbox} ${idx%2===0 ? classes.evenbox : classes.oddbox}`}>
                  <Typography className={classes.rowtypo}>{info.horse.history[1]}/{info.horse.history[2]} ({info.horse.history[0]})</Typography>
                </Box>
                <Box borderRadius={5} m={1} className={`${classes.rowbox} ${idx%2===0 ? classes.evenbox : classes.oddbox}`}>
                  <Typography>{info.jockey.name}</Typography>
                </Box>
                <Box borderRadius={5} m={1} className={`${classes.rowbox} ${idx%2===0 ? classes.evenbox : classes.oddbox}`}>
                  <Typography>{info.jockey.history[1]}/{info.jockey.history[2]} ({info.jockey.history[0]})</Typography>
                </Box>
                <Box borderRadius={5} m={1} className={`${classes.rowbox} ${idx%2===0 ? classes.evenbox : classes.oddbox}`}>
                  <Typography>{info.trainer.name}</Typography>
                </Box>
                <Box borderRadius={5} m={1} className={`${classes.rowbox} ${idx%2===0 ? classes.evenbox : classes.oddbox}`}>
                  <Typography>{info.trainer.history[1]}/{info.trainer.history[2]} ({info.trainer.history[0]})</Typography>
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