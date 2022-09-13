import React from 'react';
import CrudTableRow from '../Components/CrudTableRow';

export default function CrudTable({ data, setDataToEdit, deleteData }) {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Company</th>
            <th>Bike Model</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.length === 0 ? (
            <tr>
              <td colSpan='3'>We couldn't found any bike in our Data Base</td>
            </tr>
          ) : (
            data.map((bike) => (
              <CrudTableRow
                key={bike.id}
                bike={bike}
                setDataToEdit={setDataToEdit}
                deleteData={deleteData}
              />
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
