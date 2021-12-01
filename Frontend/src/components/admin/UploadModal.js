import React from 'react';
import {
  makeStyles,
  Modal,
  Fade,
  Backdrop,
  Button
} from '@material-ui/core';
import NoteAddIcon from '@material-ui/icons/NoteAdd';

const useToolbarStyles = makeStyles((theme) => ({
  input: {
    display: 'none',
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    borderRadius: '0.3em',
    boxShadow: theme.shadows[10],
    padding: theme.spacing(2, 4),
  },
  input_container: {
    padding: '2em 5em',
    borderRadius: '0.3em',
    border: 'solid 1px #ccc',
    margin: '1.5em',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'
  },
  btn_container: {
    display: 'flex',
    alignItems:'center',
    justifyContent: 'center'
  }
}));

const UploadModal = ({open, handleClose}) => {
  const classes = useToolbarStyles();
  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      className={classes.modal}
      open={open}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={open}>
        <div className={classes.paper}>
          <h2 id="transition-modal-title">데이터 추가</h2>
          <div className={classes.input_container}>
            <NoteAddIcon color="disabled" style={{ fontSize: 100 }}/>
            <p id="transition-modal-description">csv 파일만 선택 가능합니다.</p>
            <input
              accept=".csv"
              className={classes.input}
              id="contained-button-file"
              multiple
              type="file"
            />
            <label htmlFor="contained-button-file">
              <Button variant="contained" color="primary" component="span">
                파일 찾기
              </Button>
            </label>
          </div>
          <div className={classes.btn_container}>
            <Button variant="contained" color="secondary" style={{justifyItems: 'center'}}>
              Upload
            </Button>
          </div>
        </div>
      </Fade>
    </Modal>
  );
}

export default UploadModal;