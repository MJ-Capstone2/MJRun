import React, { useState, useEffect } from 'react';
import AdminPresenter from './AdminPresenter';
import { useParams } from "react-router-dom";
import { adminJockey, adminTrainer, adminHorse } from '../../../api';

const AdminContainer = () => {

  let { dtype } = useParams();

  console.log(dtype);

  const [horses, setHorses] = useState({
    loading: true,
    horseData: null,
    horseError: null
  });
  const [jockey, setJockey] = useState({
    loading: true,
    jockeyData: null,
    jockeyErr: null
  });
  const [trainer, setTrainer] = useState({
    loading: true,
    trainerData: null,
    trainerErr: null
  });

  // const getHData = async () => {
  //   const [horseData, horseError] = await horseApi.horses();
  //   console.log(horseData);
  //   setHorses({
  //     loading: false,
  //     horseData: [],
  //     horseError: null
  //   });
  // }

  const getJData = async () => {
    const [jockeyData, jockeyErr] = await adminJockey();
    setJockey({
      loading: false,
      jockeyData,
      jockeyErr
    });
  }

  const getTData = async () => {
    const [trainerData, trainerErr] = await adminTrainer();
    setTrainer({
      loading: false,
      trainerData,
      trainerErr
    });
  }

  useEffect(() =>{
    if (dtype === 'jockey'){
      getJData();
    } else if (dtype === 'trainer') {
      getTData();
    } else {

    }
  },[]);

  const horse_columns = [
    { id: 'id', numeric: false, disablePadding: true, label: '마번' },
    { id: 'name', numeric: true, disablePadding: false, label: '마명' },
    { id: 'sex', numeric: true, disablePadding: false, label: '성별' },
    { id: 'age', numeric: true, disablePadding: false, label: '나이' },
    { id: 'nationality', numeric: true, disablePadding: false, label: '국적' },
    { id: 'delta_weight', numeric: false, disablePadding: false, label: '무게증감(Kg)' },
    { id: 'rating', numeric: false, disablePadding: false, label: '레이팅' },
    { id: 'total_race_count', numeric: true, disablePadding: false, label: '총출전' },
    { id: 'total_win_rate', numeric: true, disablePadding: false, label: '승률' },
    { id: 'ord1', numeric: true, disablePadding: false, label: '1위' },
    { id: 'ord2', numeric: true, disablePadding: false, label: '2위' },
    { id: 'ord3', numeric: true, disablePadding: false, label: '3위' },
  ];
  const jockey_columns = [
    { id: 'jk_id', numeric: false, disablePadding: true, label: 'ID' },
    { id: 'name', numeric: true, disablePadding: false, label: '이름' },
    { id: 'debut', numeric: true, disablePadding: false, label: '데뷔일' },
    { id: 'birthdate', numeric: true, disablePadding: false, label: '생일' }
  ];
  const trainer_columns = [
    { id: 'tr_id', numeric: false, disablePadding: true, label: 'ID' },
    { id: 'name', numeric: true, disablePadding: false, label: '이름' },
    { id: 'debut', numeric: true, disablePadding: false, label: '데뷔일' },
    { id: 'birthdate', numeric: true, disablePadding: false, label: '생일' }
  ]

  const parseProp = () => {
    switch(dtype){
      case 'jockey':
        return {cols:jockey_columns, rows:jockey.jockeyData, title:'기수', loading:jockey.loading};
      case 'trainer':
        return {cols:trainer_columns, rows:trainer.trainerData, title:'조교사', loading:trainer.loading};
      default:
        return {cols:jockey_columns, rows:jockey.jockeyData, title:'기수', loading:jockey.loading};
    }
  }

  return (
    <AdminPresenter {...parseProp()}/>
  );
}

export default AdminContainer;