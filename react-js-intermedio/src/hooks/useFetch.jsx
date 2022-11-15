import { useState, useEffect } from 'react';

export function useFetch(url) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;
    const fetchData = async () => {
      setLoading(true);
      try {
        if (!response.ok) {
          let err = new Error('Error en la obtencion de datos');
          err.status = response.status || '00';
          err.statusText = response.statusText || 'Ha ocurrido un error';
          throw err;
        }
        const responseJSON = await response.json();
        if (!signal.aborted) {
          setData(responseJSON);
          setError(null);
        }
      } catch (error) {
        if (!signal.aborted) {
          setData(null);
          setError(error);
        }
      } finally {
        if (!signal.aborted) {
          setLoading(false);
        }
      }
    };
    fetchData();
    return () => {
      abortController.abort();
    };
  }, [url]);

  return { data, error, loading };
}
