import React, { useState } from 'react';

const initialForm = { id: null, company: '', bikeModel: '' };

export default function CrudForm({
  createData,
  updateData,
  deleteData,
  setDataToEdit,
}) {
  const [form, setForm] = useState(initialForm);
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.company || !form.bikeModel) {
      alert('Please instert all DATA ');
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
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='Company ...'
          name='company'
          value={form.company}
          onChange={handleChange}
        />
        <input
          type='text'
          placeholder='Model ...'
          name='bikeModel'
          value={form.bikeModel}
          onChange={handleChange}
        />
        <input type='reset' value='Clean' onClick={handleReset} />
        <input type='submit' value='Load' />
      </form>
    </div>
  );
}
