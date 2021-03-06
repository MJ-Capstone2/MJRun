import React, { useState, useEffect } from 'react';
import AdminPresenter from './AdminPresenter';
import { useParams } from 'react-router-dom';
import { adminApi } from '../../../api';

const AdminContainer = () => {
  const { dtype } = useParams();

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
  const [info, setInfo] = useState({
    loading: true,
    infoData: null,
    infoErr: null,
  });
  const [result, setResult] = useState({
    loading: true,
    resultData: null,
    resultErr: null,
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

  const getIData = async () => {
    const [infoData, infoErr] = await adminApi.infos;
    setInfo({
      loading: false,
      infoData,
      infoErr,
    });
  };

  const getRData = async () => {
    const [resultData, resultErr] = await adminApi.results;
    setResult({
      loading: false,
      resultData,
      resultErr,
    });
  };

  useEffect(async () => {
    const [res, err] = await adminApi.validation;
    console.log(res);
    if(!res){
      window.location.href = '/admin/login';
    }

    if (dtype === 'jockey') {
      getJData();
    } else if (dtype === 'trainer') {
      getTData();
    } else if (dtype === 'info') {
      getIData();
    } else if (dtype === 'result') {
      getRData();
    }else {
      getHData();
    }
  }, []);

  const horse_columns = [
    { id: 'id', numeric: false, disablePadding: true, label: '??????' },
    { id: 'name', numeric: true, disablePadding: false, label: '??????' },
    { id: 'sex', numeric: true, disablePadding: false, label: '??????' },
    { id: 'age', numeric: true, disablePadding: false, label: '??????' },
    { id: 'nationality', numeric: true, disablePadding: false, label: '??????' },
    { id: 'weight', numeric: false, disablePadding: false, label: '????????????(Kg)'  },
    { id: 'rating', numeric: false, disablePadding: false, label: '?????????' },
    { id: 'total_race_count', numeric: true, disablePadding: false, label: '?????????' },
    { id: 'total_win_rate', numeric: true, disablePadding: false, label: '??????' },
    { id: 'total_ord1_count', numeric: true, disablePadding: false, label: '1???' },
    { id: 'total_ord2_count', numeric: true, disablePadding: false, label: '2???' },
    { id: 'total_ord3_count', numeric: true, disablePadding: false, label: '3???' },
  ];
  const jockey_columns = [
    { id: 'id', numeric: false, disablePadding: true, label: 'ID' },
    { id: 'name', numeric: true, disablePadding: false, label: '??????' },
    { id: 'debut', numeric: true, disablePadding: false, label: '?????????' },
    { id: 'birthdate', numeric: true, disablePadding: false, label: '??????' },
  ];
  const trainer_columns = [
    { id: 'id', numeric: false, disablePadding: true, label: 'ID' },
    { id: 'name', numeric: true, disablePadding: false, label: '??????' },
    { id: 'debut', numeric: true, disablePadding: false, label: '?????????' },
    { id: 'birthdate', numeric: true, disablePadding: false, label: '??????' },
  ];
  const info_columns = [
    { id: 'id', numeric: false, disablePadding: true, label: 'ID' },
    { id: 'race_date', numeric: true, disablePadding: false, label: '??????' },
    { id: 'race_location', numeric: true, disablePadding: false, label: '??????' },
    { id: 'race_number', numeric: true, disablePadding: false, label: '??????' },
    { id: 'race_start_time', numeric: true, disablePadding: false, label: '????????????' },
    { id: 'race_distance', numeric: true, disablePadding: false, label: '??????' },
  ];
  const result_columns = [
    { id: 'id', numeric: false, disablePadding: true, label: 'ID' },
    { id: 'ord1_num', numeric: true, disablePadding: false, label: '1??? ??????' },
    { id: 'ord1_name', numeric: true, disablePadding: false, label: '1??? ??????' },
    { id: 'ord2_num', numeric: true, disablePadding: false, label: '2??? ??????' },
    { id: 'ord2_name', numeric: true, disablePadding: false, label: '2??? ??????' },
    { id: 'ord3_num', numeric: true, disablePadding: false, label: '3??? ??????' },
    { id: 'ord3_name', numeric: true, disablePadding: false, label: '3??? ??????' }
  ];

  const parseProp = () => {
    switch (dtype) {
      case 'jockey':
        return {
          cols: jockey_columns,
          rows: jockey.jockeyData,
          title: '??????',
          loading: jockey.loading,
          dtype: 'jockey'
        };
      case 'trainer':
        return {
          cols: trainer_columns,
          rows: trainer.trainerData,
          title: '?????????',
          loading: trainer.loading,
          dtype: 'trainer'
        };
      case 'info':
        return {
          cols: info_columns,
          rows: info.infoData,
          title: '????????????',
          loading: info.loading,
          dtype: 'info'
        }
        case 'result':
          return {
            cols: result_columns,
            rows: result.resultData,
            title: '????????????',
            loading: result.loading,
            dtype: 'result'
          }
      default:
        return {
          cols: horse_columns,
          rows: horses.horseData,
          title: '???',
          loading: horses.loading,
          dtype: 'horse'
        };
    }
  };

  return <AdminPresenter {...parseProp()} />;
};

export default AdminContainer;
