import React, { useContext } from "react";
import CrudTableRow from "../Components/CrudTableRow";
import { CrudAppContext } from "../Components/CrudApp";

export default function CrudTable() {
  const crudAppContext = useContext(CrudAppContext);

  return (
    <div className="overflow-x-auto relative flex justify-center font-Roboto ">
      <table className="w-1/2 text-sm text-left text-gray-500 dark:text-gray-400 rounded-md">
        <thead className="text-xm tracking-wider text-gray-300 uppercase bg-gray-700 ">
          <tr>
            <th scope="col" className="py-3 px-6 font-bold">
              Company
            </th>
            <th scope="col" className="py-3 px-6 font-bold">
              Bike Model
            </th>
            <th scope="col" className="py-3 px-6 text-center font-bold">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="text-slate-600">
          {crudAppContext.db.length === 0 ? (
            <tr className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              <td colSpan="3">We couldn't found any bike in our Data Base</td>
            </tr>
          ) : (
            crudAppContext.db.map((bike) => (
              <CrudTableRow key={bike.id} bike={bike} />
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
