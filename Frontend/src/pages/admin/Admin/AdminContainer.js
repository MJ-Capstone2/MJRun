import React, { useState, useEffect } from 'react';
import AdminPresenter from './AdminPresenter';
import { horseApi } from '../../../api';

const AdminContainer = () => {
  const [horses, setHorses] = useState({
    loading: true,
    horseData: [],
    horseError: null
  });

  const getHData = async () => {
    const [horseData, horseError] = await horseApi.horses();
    console.log(horseData);
    setHorses({
      loading: false,
      horseData: [],
      horseError: null
    });
  }

  useEffect(() =>{
    getHData();
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
  function parseHorse(hdata) {
    return {
      id: hdata.horse.horse_number,
      name: hdata.horse.name,
      sex: hdata.horse.name,
      age: hdata.horse.age,
      nationality: hdata.horse.nationality,
      delta_weight: hdata.horse.weight,
      rating: hdata.horse.rating,
      total_race_count: hdata.total_race_count,
      total_win_rate: hdata.total_win_rate,
      ord1: hdata.total_ord1_count,
      ord2: hdata.total_ord2_count,
      ord3: hdata.total_ord3_count
    }
  }

  return (
    <AdminPresenter cols={horse_columns} rows={horses.horseData.map(row=>parseHorse(row))} title='말' loading={horses.loading}/>
  );
}

export default AdminContainer;