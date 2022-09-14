import React from 'react';
import CrudTableRow from '../Components/CrudTableRow';

export default function CrudTable({ data, setDataToEdit, deleteData }) {
  return (
    <div className='overflow-x-auto relative flex justify-center font-Saira font-bold '>
      <table className='w-1/2 text-sm text-left text-gray-500 dark:text-gray-400 rounded-md'>
        <thead className='text-xm tracking-wider text-gray-300 uppercase bg-gray-700 rounded-lg '>
          <tr>
            <th scope='col' className='py-3 px-6'>
              Company
            </th>
            <th scope='col' className='py-3 px-6'>
              Bike Model
            </th>
            <th scope='col' className='py-3 px-6 text-center'>
              Actions
            </th>
          </tr>
        </thead>
        <tbody className='text-slate-600'>
          {data.length === 0 ? (
            <tr className='py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white'>
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
