import React, { useState } from 'react';
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
    margin: '2rem'
  },
  content_box: {
    display:'flex',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    flexWrap: 'wrap',
    padding: '0.8rem 0.2rem',
    width: 170
  },
  divider: {
    width:'1px',
    borderRight: 'solid 1px #ccc',
    height: '7rem'
  }
}));

const InfoCard = ({ attendant }) => {
  const classes = useStyles();

  const [num, setNum] = useState(0);
  const handleOnClick = (e,idx) => {
    setNum(idx);
  }

  const infos = attendant;

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
          <Typography><b>말</b> - {infos[num].horse.name}</Typography>
          <Typography>성별: {infos[num].horse.sex}</Typography>
          <Typography>나이: {infos[num].horse.age}</Typography>
          <Typography>전적: {infos[num].horse.total_ord1_count}/{infos[num].horse.total_ord2_count}/{infos[num].horse.total_ord3_count}  ({infos[num].horse.total_race_count})</Typography>
        </div>
        <div className={classes.divider}></div>
        <div className={classes.content_box}>
          <Typography><b>기수</b> - {infos[num].jockey.name}</Typography>
          <Typography>전적: {infos[num].jockey.total_ord1_count}/{infos[num].jockey.total_ord2_count}/{infos[num].jockey.total_ord3_count}  ({infos[num].jockey.total_race_count})</Typography>
        </div>
        <div className={classes.divider}></div>
        <div className={classes.content_box} style={{borderRight:'none'}}>
          <Typography><b>조교사</b> - {infos[num].trainer.name}</Typography>
          <Typography>전적: {infos[num].trainer.total_ord1_count}/{infos[num].trainer.total_ord2_count}/{infos[num].trainer.total_ord3_count}  ({infos[num].trainer.total_race_count})</Typography>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;