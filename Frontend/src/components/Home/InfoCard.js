import React from 'react';
import { 
  Button,
  makeStyles,
  Typography
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  btn : {
    margin: '0.2rem 0.2rem'
  },
  root_container : {
    display:'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  btns_container : {
    display:'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap'
  },
  display_box : {
    display:'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    border: 'solid 1px #393939',
    borderRadius: '0.3rem',
    margin: '0.8rem'
  },
  content_box: {
    display:'flex',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    flexWrap: 'wrap',
    padding: '0.8rem 0.2rem',
  },
  divider: {
    width:'1px',
    borderRight: 'solid 1px #ccc',
    height: '7rem'
  }
}));

function InfoCard(){
  const classes = useStyles();

  const [num, setNum] = React.useState(0);
  const handleOnClick = (e,idx) => {
    setNum(idx);
  }

  const infos = [
    {
      horse: {
        name: '생각대로',
        sex: '암',
        age: '5세',
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
        age: '5세',
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
        age: '5세',
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
        age: '5세',
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
        age: '5세',
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
        age: '5세',
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
        age: '5세',
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
        age: '5세',
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
        age: '5세',
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
        age: '5세',
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

  return (
    <div className={classes.root_container}>
      <div className={classes.btns_container}>
        {
          infos.map((info, idx) => (
            <Button
              key={idx}
              id={idx}
              hidden={idx}
              variant={num === idx? "contained":"outlined"}
              color="primary"
              size="small"
              className={classes.btn}
              onClick={(e) => handleOnClick(e, idx)}
            >
              {idx+1}번마
            </Button>
          ))
        }
      </div>
      <div className={classes.display_box}>
        <div className={classes.content_box}>
          <Typography>말-{infos[num].horse.name}</Typography>
          <Typography>성별: {infos[num].horse.sex}</Typography>
          <Typography>나이: {infos[num].horse.age}</Typography>
          <Typography>무게증감: {infos[num].horse.weight}</Typography>
          <Typography>전적: {infos[num].horse.history[1]}/{infos[num].horse.history[2]} ({infos[num].horse.history[0]})</Typography>
        </div>
        <div className={classes.divider}></div>
        <div className={classes.content_box}>
          <Typography>기수-{infos[num].jockey.name}</Typography>
          <Typography>전적: {infos[num].jockey.history[1]}/{infos[num].jockey.history[2]} ({infos[num].jockey.history[0]})</Typography>
        </div>
        <div className={classes.divider}></div>
        <div className={classes.content_box} style={{borderRight:'none'}}>
          <Typography>조교사-{infos[num].trainer.name}</Typography>
          <Typography>전적: {infos[num].trainer.history[1]}/{infos[num].trainer.history[2]} ({infos[num].trainer.history[0]})</Typography>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;