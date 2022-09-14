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
  const deleteData = (id) => {
    /* let isDelete = window.confirm('Are you sure you want to delete this BIKE');
    if (isDelete) { */
    let newData = db.filter((bike) => bike.id !== id);
    setDb(newData);
  };

  return (
    <div>
      <p className='font-Nabla text-7xl m-8 drop-shadow-xl'>
        BMX Street C.R.U.D
      </p>
      <h3 className='text-red-500 font-Poppins'>
        {dataToEdit ? 'PANEL DE EDICION' : 'PANEL DE AGREGACION'}
      </h3>
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
