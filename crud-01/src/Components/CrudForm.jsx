import React, { useState, useEffect } from "react";

const initialForm = { id: null, company: "", bikeModel: "" };

export default function CrudForm({
  createData,
  updateData,
  dataToEdit,
  setDataToEdit,
}) {
  const [form, setForm] = useState(initialForm);
  useEffect(() => {
    if (dataToEdit) {
      setForm(dataToEdit);
    } else {
      setForm(initialForm);
    }
  }, [dataToEdit]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.company || !form.bikeModel) {
      // Echar un ojo a esta funcion, cuando insertas datos vacios el sistema muestra el mensaje pero agrega el dato restringido.
      alert("Please instert all DATA ");
    }
    if (form.id === null) {
      createData(form);
    } else {
      updateData(form);
    }
    handleReset();
  };
  const handleReset = (e) => {
    setForm(initialForm);
    setDataToEdit(null);
  };
  return (
    <div className="flex justify-center">
      <form onSubmit={handleSubmit} className="font-Poppins font-light">
        <input
          className="bg-gray-50 border border-gray-300 py-1 px-3 my-4 mx-2 text-gray-900 text-sm rounded-md "
          type="text"
          placeholder="Company"
          name="company"
          value={form.company}
          onChange={handleChange}
        />
        <input
          className="bg-gray-50 border border-gray-300 py-1 px-3 my-4 mx-2 text-gray-900 text-sm rounded-md "
          type="text"
          placeholder="Bike Model"
          name="bikeModel"
          value={form.bikeModel}
          onChange={handleChange}
        />
        <input
          type="reset"
          value="Clean"
          onClick={handleReset}
          className="mx-2 p-1 px-6 bg-red-500 cursor-pointer hover:bg-red-600 text-slate-100 rounded-lg"
        />
        <input
          type="submit"
          value="Load"
          className="mx-2 p-1 px-7 cursor-pointer bg-green-500 hover:bg-green-600 text-slate-100 rounded-lg"
        />
      </form>
    </div>
  );
}
