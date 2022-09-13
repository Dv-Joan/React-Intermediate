import React from 'react';

export default function CrudTableRow({ bike }) {
  return (
    <tr>
      <td>{bike.company}</td>
      <td>{bike.bikeModel}</td>
      <td>
        <button>Edit</button>
        <button>Delete</button>
      </td>
    </tr>
  );
}
