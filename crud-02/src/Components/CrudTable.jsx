import React from 'react';
import CrudTableRow from '../Components/CrudTableRow';

export default function CrudTable({ data, setDataToEdit, deleteData }) {
  return (
    <div className='overflow-x-auto relative flex justify-center font-Saira font-bold  '>
      <table className='w-1/2 text-sm text-left  rounded-md border'>
        <thead className='text-xm tracking-wider text-gray-600 uppercase bg-orange-300 rounded-lg '>
          <tr>
            <th scope='col' className='py-3 px-6 border'>
              Company
            </th>
            <th scope='col' className='py-3 px-6 border-x-2 border'>
              Bike Model
            </th>
            <th scope='col' className='py-3 px-6 text-center border'>
              Actions
            </th>
          </tr>
        </thead>
        <tbody className='text-slate-600'>
          {data.length === 0 ? (
            <tr className='py-4 px-6 font-medium text-gray-900 whitespace-nowrap'>
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
