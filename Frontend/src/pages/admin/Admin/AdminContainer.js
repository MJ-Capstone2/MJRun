import React, { useState, useEffect } from 'react';
import AdminPresenter from './AdminPresenter';
import { useParams } from 'react-router-dom';
import { adminApi } from '../../../api';

const AdminContainer = () => {
  let { dtype } = useParams();

  console.log(dtype);

  const [horses, setHorses] = useState({
    loading: true,
    horseData: null,
    horseError: null,
  });
  const [jockey, setJockey] = useState({
    loading: true,
    jockeyData: null,
    jockeyErr: null,
  });
  const [trainer, setTrainer] = useState({
    loading: true,
    trainerData: null,
    trainerErr: null,
  });

  const getHData = async () => {
    const [horseData, horseError] = await adminApi.horses;
    setHorses({
      loading: false,
      horseData: horseData,
      horseError
    });
  }

  const getJData = async () => {
    const [jockeyData, jockeyErr] = await adminApi.jockeys;
    setJockey({
      loading: false,
      jockeyData,
      jockeyErr,
    });
  };

  const getTData = async () => {
    const [trainerData, trainerErr] = await adminApi.trainers;
    setTrainer({
      loading: false,
      trainerData,
      trainerErr,
    });
  };

  useEffect(() => {
    if (dtype === 'jockey') {
      getJData();
    } else if (dtype === 'trainer') {
      getTData();
    } else {
      getHData();
    }
  }, []);

  const horse_columns = [
    { id: 'id', numeric: false, disablePadding: true, label: '마번' },
    { id: 'name', numeric: true, disablePadding: false, label: '마명' },
    { id: 'sex', numeric: true, disablePadding: false, label: '성별' },
    { id: 'age', numeric: true, disablePadding: false, label: '나이' },
    { id: 'nationality', numeric: true, disablePadding: false, label: '국적' },
    {
      id: 'weight',
      numeric: false,
      disablePadding: false,
      label: '무게증감(Kg)',
    },
    { id: 'rating', numeric: false, disablePadding: false, label: '레이팅' },
    {
      id: 'total_race_count',
      numeric: true,
      disablePadding: false,
      label: '총출전',
    },
    {
      id: 'total_win_rate',
      numeric: true,
      disablePadding: false,
      label: '승률',
    },
    { id: 'total_ord1_count', numeric: true, disablePadding: false, label: '1위' },
    { id: 'total_ord2_count', numeric: true, disablePadding: false, label: '2위' },
    { id: 'total_ord3_count', numeric: true, disablePadding: false, label: '3위' },
  ];
  const jockey_columns = [
    { id: 'jk_id', numeric: false, disablePadding: true, label: 'ID' },
    { id: 'name', numeric: true, disablePadding: false, label: '이름' },
    { id: 'debut', numeric: true, disablePadding: false, label: '데뷔일' },
    { id: 'birthdate', numeric: true, disablePadding: false, label: '생일' },
  ];
  const trainer_columns = [
    { id: 'tr_id', numeric: false, disablePadding: true, label: 'ID' },
    { id: 'name', numeric: true, disablePadding: false, label: '이름' },
    { id: 'debut', numeric: true, disablePadding: false, label: '데뷔일' },
    { id: 'birthdate', numeric: true, disablePadding: false, label: '생일' },
  ];

  const parseProp = () => {
    switch (dtype) {
      case 'jockey':
        return {
          cols: jockey_columns,
          rows: jockey.jockeyData,
          title: '기수',
          loading: jockey.loading,
        };
      case 'trainer':
        return {
          cols: trainer_columns,
          rows: trainer.trainerData,
          title: '조교사',
          loading: trainer.loading,
        };
      default:
        return {
          cols: horse_columns,
          rows: horses.horseData,
          title: '말',
          loading: horses.loading,
        };
    }
  };

  return <AdminPresenter {...parseProp()} />;
};

export default AdminContainer;
