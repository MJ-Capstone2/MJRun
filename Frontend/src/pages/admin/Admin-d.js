import React, { useState, useEffect } from 'react';
import AdminLayout from '../../layout/AdminLayout';
import Table from '../../components/admin/Table';
import { useParams } from "react-router-dom";
import { Typography } from "@material-ui/core";
import { horseApi } from '../../api';

const Admin = () => {

  let { dtype } = useParams();

  const jockey_columns = [
    { id: 'id', numeric: false, disablePadding: true, label: 'ID' },
    { id: 'name', numeric: true, disablePadding: false, label: '기수명' },
    { id: 'total_participate', numeric: true, disablePadding: false, label: '총출전' },
    { id: 'ord1', numeric: true, disablePadding: false, label: '1위' },
    { id: 'ord2', numeric: true, disablePadding: false, label: '2위' },
    { id: 'ord3', numeric: true, disablePadding: false, label: '3위' },
  ];

  const trainer_columns = [
    { id: 'id', numeric: false, disablePadding: true, label: 'ID' },
    { id: 'name', numeric: true, disablePadding: false, label: '조교사명' },
    { id: 'total_participate', numeric: true, disablePadding: false, label: '총출전' },
    { id: 'ord1', numeric: true, disablePadding: false, label: '1위' },
    { id: 'ord2', numeric: true, disablePadding: false, label: '2위' },
    { id: 'ord3', numeric: true, disablePadding: false, label: '3위' },
  ]

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

  const [horses, setHorses] = useState({
    loading: true,
    horseData: [],
    horseError: null
  });

  const getHData = async () => {
    const [horseData, horseError] = await horseApi.horses();
    console.log(horseData);
    setHorses({
        horseData,
        horseError
    });
    setLoading(false);
  }

  useEffect(() => {
    switch(dtype){
      case 'jockey':
        return;
      case 'trainer':
        return;
      default:
        getHData();
        return;
    }
  }, []); 

  return(
    <AdminPresenter cols rows title/>
  );
};

export default Admin;