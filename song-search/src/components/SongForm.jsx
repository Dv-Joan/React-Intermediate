//ERROR: En la obetencion de datos de la API

import React, { useState } from 'react';
const initialForm = {
  artist: '',
  song: '',
};
function SongForm({ handleSearch }) {
  const [form, setForm] = useState(initialForm);
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.artist || !form.song) {
      alert('Error , Datos Incompletos');
      return;
    }
    handleSearch(form);
    setForm(initialForm);
  };
  return (
    <div>
      <form id='form' onSubmit={handleSubmit}>
        <div className='flex mb-16'>
          <div className='flex gap-8 mt-2'>
            <input
              type='text'
              name='artist'
              className='mb-3 bg-gray-100 border border-gray-300 text-gray-100 text-sm rounded-lg 
         block w-64 p-2.5 cursor-text dark:bg-gray-700 dark:border-gray-600
          r-blue-500'
              placeholder='Nombre del interprete'
              onChange={handleChange}
              value={form.artist}
            />
            <input
              type='text'
              name='song'
              className='mb-3 bg-gray-100 border border-gray-300 text-gray-100 text-sm rounded-lg 
         block w-64 p-2.5 cursor-text dark:bg-gray-700 dark:border-gray-600
          r-blue-500'
              placeholder='Nombre de la cancion'
              onChange={handleChange}
              value={form.song}
            />
          </div>
          <button type='submit' className='ml-5 border border-slate-600'>
            <img className='w-10 ' src='../../public/transparency.png' />
          </button>
        </div>
      </form>
    </div>
  );
}

export default SongForm;
