import React from 'react';
import AdminLayout from '../../../layout/AdminLayout';
import Table from '../../../components/admin/Table';

const AdminPresenter = ({cols, rows, title, loading}) => {
  return(
    <AdminLayout loading={loading}>
      <Table columns={cols} rows={rows} title={title}/>
    </AdminLayout>
  );
}

export default AdminPresenter;