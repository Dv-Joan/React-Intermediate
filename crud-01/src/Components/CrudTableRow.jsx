import React from 'react';

export default function CrudTableRow({ bike, setDataToEdit, deleteData }) {
  let { id, company, bikeModel } = bike;
  return (
    <tr>
      <td>{company}</td>
      <td>{bikeModel}</td>
      <td>
        <button onClick={() => setDataToEdit(bike)}>Edit</button>
        <button onClick={() => deleteData(id)}>Delete</button>
      </td>
    </tr>
  );
}
