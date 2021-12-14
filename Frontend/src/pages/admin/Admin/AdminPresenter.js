import React, {useState} from 'react';
import AdminLayout from '../../../layout/AdminLayout';
import Table from '../../../components/admin/Table';

const AdminPresenter = ({ cols, rows, title, loading, dtype }) => {

const [dataLoading, setDataLoading] = useState(false);

  return(
    <AdminLayout loading={loading} dataLoading={dataLoading}>
      <Table columns={cols} rows={rows} title={title} dtype={dtype} setDataLoading={setDataLoading}/>
    </AdminLayout>
  );
}

export default AdminPresenter;