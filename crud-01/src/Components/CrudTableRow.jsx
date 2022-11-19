import React from "react";

export default function CrudTableRow({ bike, setDataToEdit, deleteData }) {
  let { id, company, bikeModel } = bike;
  return (
    <tr className="text-slate-300 bg-gray-800 border-b border-gray-600">
      <td className="py-4 px-6">{company}</td>
      <td className="py-4 px-6">{bikeModel}</td>
      <td className="py-4 px-6 text-center">
        <button
          className="mx-2 p-1 px-5 bg-cyan-500 cursor-pointer hover:bg-cyan-600 text-slate-100  rounded-full "
          onClick={() => setDataToEdit(bike)}
        >
          Edit
        </button>
        <button
          className="mx-2 p-1 px-5 bg-red-500 cursor-pointer hover:bg-red-600 text-slate-100 rounded-full"
          onClick={() => deleteData(id)}
        >
          Delete
        </button>
      </td>
    </tr>
  );
}
