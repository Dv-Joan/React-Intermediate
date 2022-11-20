import React, { useState, useEffect } from "react";
import CrudForm from "./CrudForm";
import CrudTable from "./CrudTable";
import { helpHttp } from "../helper/helpHttp";
import Loader from "./Loader";
import ErrorMSG from "./ErrorMSG";

export default function CrudAPI() {
  const [db, setDb] = useState(null);
  const [dataToEdit, setDataToEdit] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const createData = (data) => {
    data.id = Date.now();
    let options = {
      body: data,
      headers: { "Content-Type": "application/json" },
    };
    api.post(url, options).then((response) => {
      if (!response.err) {
        setDb([...db, response]);
      } else {
        setError(response);
      }
    });
  };
  let api = helpHttp();
  let url = "http://localhost:5000/bikes";

  useEffect(() => {
    setLoading(true);
    api.get(url).then((response) => {
      if (!response.err) {
        setDb(response);
        setError(null);
      } else {
        setDb(null);
        setError(response);
      }
    });
    setLoading(false);
  }, [url]);

  const updateData = (data) => {
    let putENDPOINT = `${url}/${data.id}`;
    let options = {
      body: data,
      headers: { "Content-Type": "application/json" },
    };
    api.put(putENDPOINT, options).then((response) => {
      if (!response) {
        let newData = db.map((bike) => (bike.id === data.id ? data : bike));
        setDb(newData);
      } else {
        setError(response);
      }
    });
  };
  const deleteData = (id) => {
    let delENDPOINT = `${url}/${id}`;
    let options = {
      headers: { "Content-Type": "application/json" },
    };

    api.del(delENDPOINT, options).then((response) => {
      if (!response.err) {
        let newData = db.filter((bike) => bike.id !== id);
        setDb(newData);
      } else {
        setError(response);
      }
    });
  };

  return (
    <div className="my-16">
      <p className=" text-center font-Nabla text-7xl m-8 drop-shadow-xl">
        BMX Street C.R.U.D <span className="mx-5"></span> API
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
      <CrudForm
        createData={createData}
        updateData={updateData}
        dataToEdit={dataToEdit}
        setDataToEdit={setDataToEdit}
      />
      {loading && <Loader />}
      {error && <ErrorMSG />}
      {db && (
        <CrudTable
          data={db}
          setDataToEdit={setDataToEdit}
          deleteData={deleteData}
        />
      )}
    </div>
  );
}
