import { useFetch } from '../hooks/useFetch';
import Loader from './Loader';
import Message from './Message';

function SelectList({ title, url, handleChange }) {
  const { data, error, loading } = useFetch(url);

  if (!data) return null;

  if (error) {
    return (
      <Message
        msg={`Error ${error.status}: ${error.statusText}`}
        bgColor='#dc3545'
      />
    );
  }
  let id = `select-${title}`;
  let label = title.charAt(0).toUpperCase() + title.slice(1);
  let options = data.response[title];

  return (
    <div className='bg-blue-400'>
      <label className=' font-semibold text-emerald-400' htmlFor={id}>
        {label}
      </label>
      {loading && <Loader />}
      <select name={id} id={id} onChange={handleChange}>
        <option value=''>Elige un {title}</option>
        {data &&
          options.map((element) => (
            <option value={element} key={element}>
              {element}
            </option>
          ))}
      </select>
    </div>
  );
}

export default SelectList;
