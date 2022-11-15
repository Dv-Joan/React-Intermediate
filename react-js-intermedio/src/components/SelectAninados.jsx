import SelectList from './SelectList';
import { useState } from 'react';

function SelectAninados() {
  const [state, setState] = useState('');
  const [town, setTowm] = useState('');
  const [suburb, setSuburb] = useState('');

  const TOKEN = 'd81a7ac7-976d-4e1e-b7d3-b1979d791b6c';

  return (
    <div>
      <span className='font-bold text-3xl text-neutral-200'>Ubicacion</span>{' '}
      <br />
      <span className='font-semibold text-2xl text-neutral-300'>Mexico</span>
      <SelectList
        title='estado'
        url={`https://api.copomex.com/query/get_estados?token=${TOKEN}`}
        handleChange={(e) => {
          setState(e.target.value);
        }}
      />
      {state && (
        <SelectList
          title='municipios'
          url={`https://api.copomex.com/query/get_municipio_por_estado/${state}?token=${TOKEN}`}
          handleChange={(e) => {
            setTowm(e.target.value);
          }}
        />
      )}
      {town && (
        <SelectList
          title='colonia'
          url={`https://api.copomex.com/query/get_colonia_por_municipio/${town}?token=${TOKEN}`}
          handleChange={(e) => {
            setSuburb(e.target.value);
          }}
        />
      )}
    <pre className='font-mono'>
      <code> 
        {state}, {town},{suburb}
      </code>
         </pre>
    </div>
  );
}

export default SelectAninados;
