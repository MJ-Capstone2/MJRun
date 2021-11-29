import React from 'react';
import AdminLayout from '../../layout/AdminLayout';
import Table from '../../components/admin/Table';
import { useParams } from "react-router-dom";

const Admin = () => {

  let { dtype } = useParams();

  function createHdata(id, name, sex, age, delta_weight, total_participate, ord1, ord2, ord3) {
    return { id, name, sex, age, delta_weight, total_participate, ord1, ord2, ord3 };
  }

  const getTitle = (dtype) => {
    switch(dtype){
      case 'jockey':
        return '기수';
      case 'trainer':
        return '조교사';
      default:
        return '말';
    }
  }
  
  const Hrows = [
    createHdata(1,'가나다','암', 2, '+2.0', 10, 1, 3, 0),
    createHdata(2,'나다라','암', 2, '+2.0', 10, 1, 3, 0),
    createHdata(3,'생각대로','암', 2, '+2.0', 10, 1, 3, 0),
    createHdata(4,'생각대로','암', 2, '+2.0', 10, 1, 3, 0),
    createHdata(5,'생각대로','암', 2, '+2.0', 10, 1, 3, 0),
    createHdata(6,'생각대로','암', 1, '+2.0', 10, 1, 3, 0),
    createHdata(7,'생각대로','암', 1, '+2.0', 10, 1, 3, 0),
    createHdata(8,'생각대로','암', 3, '+2.0', 10, 1, 3, 0),
    createHdata(9,'생각대로','암', 2, '+2.0', 10, 1, 3, 0),
    createHdata(10,'생각대로','암', 2, '+2.0', 10, 1, 3, 0),
    createHdata(11,'마바사','암', 2, '+2.0', 10, 1, 3, 0),
    createHdata(12,'생각대로','암', 2, '+2.0', 10, 1, 3, 0),
    createHdata(13,'생각대로','암', 2, '+2.0', 10, 1, 3, 0),
    createHdata(14,'생각대로','암', 2, '+2.0', 10, 1, 3, 0),
    createHdata(15,'생각대로','암', 2, '+2.0', 10, 1, 3, 0),
  ];
  const horse_columns = [
    { id: 'id', numeric: false, disablePadding: true, label: '마번' },
    { id: 'name', numeric: true, disablePadding: false, label: '마명' },
    { id: 'sex', numeric: true, disablePadding: false, label: '성별' },
    { id: 'age', numeric: true, disablePadding: false, label: '나이' },
    { id: 'delta_weight', numeric: false, disablePadding: false, label: '무게증감(Kg)' },
    { id: 'total_participate', numeric: true, disablePadding: false, label: '총출전' },
    { id: 'ord1', numeric: true, disablePadding: false, label: '1위' },
    { id: 'ord2', numeric: true, disablePadding: false, label: '2위' },
    { id: 'ord3', numeric: true, disablePadding: false, label: '3위' },
  ];

  return(
    <AdminLayout>
      <Table columns={horse_columns} rows={Hrows} title={getTitle(dtype)}/>
    </AdminLayout>
  );
};

export default Admin;