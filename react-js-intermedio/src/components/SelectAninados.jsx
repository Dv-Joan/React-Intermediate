import SelectList from './SelectList';
import { useState } from 'react';

function SelectAninados() {
  const [state, setState] = useState('');
  const [town, setTowm] = useState('');
  const [suburb, setSuburb] = useState('');
  return (
    <div>
      Formulario
      <SelectList
        title='Departamento'
        url=''
        handleChange={(e) => {
          setState(e.target.value);
        }}
      />
      {state && (
        <SelectList
          title='Provincia'
          url=''
          handleChange={(e) => {
            setTowm(e.target.value);
          }}
        />
      )}
      {town && (
        <SelectList
          title='Distrito'
          url=''
          handleChange={(e) => {
            setSuburb(e.target.value);
          }}
        />
      )}
      <pre>
        <code>
          {state}/ {town}/ {suburb}
        </code>
      </pre>
    </div>
  );
}

export default SelectAninados;
