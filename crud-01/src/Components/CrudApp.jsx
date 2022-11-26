import React, { useState, createContext } from "react";
import CrudForm from "../Components/CrudForm";
import CrudTable from "../Components/CrudTable";

export const CrudAppContext = createContext();

const initialDB = [
  { id: 1, company: "WTP", bikeModel: "Predator 2.0 RTD" },
  { id: 2, company: "WTP", bikeModel: "Predator 1.0 RTD" },
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
    let newData = db.filter((bike) => bike.id !== id);
    setDb(newData);
  };

  return (
    <div className="my-16">
      <CrudAppContext.Provider
        value={{
          createData,
          updateData,
          dataToEdit,
          setDataToEdit,
          db,
          deleteData,
        }}
      >
        <p className=" text-center font-Nabla text-7xl m-8 drop-shadow-xl">
          BMX Street C.R.U.D
        </p>
        <div className="flex justify-center">
          <div className="bg-rose-200 rounded px-5 py-2 w-96 border-dotted border-2 border-slate-500 ">
            <h3 className="text-red-700 font-Roboto  text-center">
              PANEL DE
              {dataToEdit ? (
                <span className="font-bold"> EDICIÓN</span>
              ) : (
                <span className="font-bold"> AGREGACIÓN</span>
              )}
            </h3>
          </div>
        </div>
        <div>
          <CrudForm />
          <CrudTable data={db} />
        </div>
      </CrudAppContext.Provider>
    </div>
  );
}
