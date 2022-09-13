import React, { useState } from 'react';
import CrudForm from '../Components/CrudForm';
import CrudTable from '../Components/CrudTable';

const initialDB = [
  { id: 1, company: 'WTP', bikeModel: 'Predator 2.0 RTD' },
  { id: 2, company: 'WTP', bikeModel: 'Predator 1.0 RTD' },
];
export default function CrudApp() {
  const [db, setDb] = useState(initialDB);
  const [dataToEdit, setDataToEdit] = useState(null);
  const createData = (data) => {
    data.id = Date.now();
    setDb([...db, data]);
  };
  const updateData = (data) => {
    let newData = db.map((bike) => (bike.id === data.id ? data : bike));
    setDb(newData);
  };
  const deleteData = (id) => {};

  return (
    <div>
      <div>BMX Crud</div>
      <h3>{dataToEdit ? 'PANEL DE EDICION' : 'PANEL DE AGREGACION'}</h3>
      <div>
        <CrudForm
          createData={createData}
          updateData={updateData}
          dataToEdit={dataToEdit}
          setDataToEdit={setDataToEdit}
        />
        <CrudTable
          data={db}
          setDataToEdit={setDataToEdit}
          deleteData={deleteData}
        />
      </div>
    </div>
  );
}
