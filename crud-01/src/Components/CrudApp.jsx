import React, { useState } from 'react';
import CrudForm from '../Components/CrudForm';
import CrudTable from '../Components/CrudTable';

const initialDB = [{ id: 1, company: 'WTP', bikeModel: 'Predator 2.0 RTD' }];
export default function CrudApp() {
  const [db, setDb] = useState(initialDB);

  return (
    <div>
      <div>BMX Crud</div>
      <div>
        <CrudForm />
        <CrudTable data={db} />
      </div>
    </div>
  );
}
